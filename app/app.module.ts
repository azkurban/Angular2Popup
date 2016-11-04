import { NgModule }      from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
//import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { AppComponent }   from './app.component';
import { PopupDemo} from './popupdemo';
import { PopupComponent} from './popup';


@NgModule({
    imports: [
        BrowserModule,
  
        RouterModule.forRoot([
               {
                //Register here to stop error "no factory resolver for PopupComponent". It is not used as routing
                path: 'PopupComponent',
                component: PopupComponent,

            },
            {
                //Register here to stop error "no factory resolver for PopupComponent". It is not used as routing
                path: 'PopupDemo',
                component: PopupDemo,

            }
          ])
        
        
    ],
    declarations: [AppComponent, PopupComponent,PopupDemo ],

    bootstrap: [AppComponent]
})

export class AppModule { }