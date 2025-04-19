import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { WeatherdataComponent } from './weatherdata/weatherdata.component';
import { HomeComponent } from './home/home.component';
import { HttpClient } from '@angular/common/http';

@NgModule({
    declarations: [
        AppComponent, 
        WeatherdataComponent, 
        HomeComponent,
        ReactiveFormsModule
    ],
    imports: [
        FormsModule,
        BrowserModule, 
        HttpClient, 
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }