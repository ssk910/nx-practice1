import {CommonLib} from "@nx-practice1/commonlib";

export class Demo {
  private readonly commonLib: CommonLib;

  constructor() {
    this.commonLib = new CommonLib();
  }

  execute() {
    console.log('Hello demoapp');
    this.commonLib.execute();
  }
}
