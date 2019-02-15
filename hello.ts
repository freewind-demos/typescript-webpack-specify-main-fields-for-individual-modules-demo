import {capitalize} from 'lodash'

export default function (name: string) {
  return 'Hello, ' + capitalize(name) + '!'
}
