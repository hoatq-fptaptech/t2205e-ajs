import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { ClassRoomComponent } from './classroom/classroom.component';
import { TeacherComponent } from './teacher/teacher.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent, StudentComponent,
    ClassRoomComponent,TeacherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
