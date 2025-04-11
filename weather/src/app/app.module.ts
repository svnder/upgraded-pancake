import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { AppComponent } from './app.component';
import { WeatherdataComponent } from './weatherdata/weatherdata.component';
import { HomeComponent } from './home/home.component';

@NgModule({
    declarations: [AppComponent, WeatherdataComponent, HomeComponent],
    imports: [
        NgModule,
        CommonModule, 
        FormsModule,
        BrowserModule, 
        HttpClient, 
        AppComponent,
        WeatherdataComponent, 
        HomeComponent,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }