import { routing, appRoutingProviders } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SliderComponent } from './components/slider/slider.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { FormComponent } from './components/form/form.component';
import { PageComponent } from './components/page/page.component';
import { ArticleComponent } from './components/article/article.component';
import { ErrorComponent } from './components/error/error.component';
import { ArticleItemComponent } from './components/article-item/article-item.component';
import { ContactComponent } from './components/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    SidebarComponent,
    FooterComponent,
    HomeComponent,
    BlogComponent,
    FormComponent,
    PageComponent,
    ArticleComponent,
    ErrorComponent,
    ArticleItemComponent,
    ContactComponent,
  ],
  imports: [BrowserModule, routing, FormsModule],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
