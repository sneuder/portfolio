import { faUser, faAt, faBook } from "@fortawesome/free-solid-svg-icons";

const inputInfo = [
  {
    type: 'text',
    name: 'name',
    placeholder: 'Your name...',
    icon: faUser
  },
  {
    type: 'email',
    name: 'fromEmail',
    placeholder: 'Your email...',
    icon: faAt
  },
  {
    type: 'text',
    name: 'subject',
    placeholder: 'Subject...',
    icon: faBook
  }
]

export default inputInfo