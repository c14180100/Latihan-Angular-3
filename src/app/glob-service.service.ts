import { Injectable } from '@angular/core';

@Injectable()
export class GlobServiceService {

  Var1: number;
  Var2: number;
  Opt: String;

  constructor() { }

  public getData(){
    return this.Var1, this.Var2, this.Opt;
  }

  public setData(var1,var2,opt){
    this.Var1 = var1;
    this.Var2 = var2;
    this.Opt = opt;
  }

}