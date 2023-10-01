CONTAINER_NAME := portfolio-v1
IMAGE_NAME := portfolio-v1

BIND_PATH := $(shell pwd)

WORKDIR_DOCKER := /app

MODE_PROD := prod
MODE_DEV := dev

MODE := $(MODE_PROD)

remove-container:
ifneq ($(shell docker ps -aq -f name=$(CONTAINER_NAME)),)
	@docker container stop $(CONTAINER_NAME)
	@docker container rm $(CONTAINER_NAME)
	@echo "Container $(CONTAINER_NAME) removed"
else
	@echo "Container $(CONTAINER_NAME) not found"
endif

remove-image:
ifneq ($(shell docker image ls -q $(IMAGE_NAME)),)
	@docker image rm $(IMAGE_NAME)
	@echo "Image $(IMAGE_NAME) removed"
else
	@echo "Image $(IMAGE_NAME) not found"
endif

# image process

build-image:
	@docker build --target $(MODE) -t $(IMAGE_NAME) .

build-container:
	@docker run -d -p 3000:3000 --name $(CONTAINER_NAME) $(IMAGE_NAME)

stop-container:
	@docker container stop $(CONTAINER_NAME)

build-container-bind:
	@docker run --mount "type=bind,source=$(BIND_PATH),target=$(WORKDIR_DOCKER)" -p 3000:3000 --name $(CONTAINER_NAME) $(IMAGE_NAME)

# setting env

set-mode:
	$(eval MODE = $(MODE_DEV))

# for prod and dev

run-prod: remove-container remove-image build-image build-container
	@echo "Container running in prod"

run-dev: set-mode
ifneq ($(shell docker ps -aq -f name=$(CONTAINER_NAME)),)
	@echo "Container $(CONTAINER_NAME) running in dev"
	@docker start -a $(CONTAINER_NAME)
else
	@echo "Container $(CONTAINER_NAME) not found. Building and running..."
	@make -s remove-container
	@make -s remove-image
	@make -s build-image
	@make -s build-container-bind
endif

run-dev-restart: set-mode remove-container remove-image build-image build-container-bind
	@echo "Container $(CONTAINER_NAME) running in dev"