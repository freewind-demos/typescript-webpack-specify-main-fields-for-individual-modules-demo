import {module1} from 'typescript-webpack-importing-rollup-mjs-es-modules-demo--module1';

export function module2() {
  console.log('<module2>')
  module1();
  console.log('</module2>')
}
