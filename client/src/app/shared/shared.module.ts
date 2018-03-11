import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TokenInterceptor } from './interceptors/token-interceptor';

@NgModule({
  imports: [CommonModule],
  providers: [TokenInterceptor]
})
export class SharedModule { }
