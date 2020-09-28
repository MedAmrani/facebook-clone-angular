import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarRowComponent } from './sidebar-row/sidebar-row.component';
import { FeedComponent } from './feed/feed.component';
import { StoryReelComponent } from './story-reel/story-reel.component';
import { MessageSenderComponent } from './message-sender/message-sender.component';
import { PostComponent } from './post/post.component';
import { StoryReelGlobalComponent } from './story-reel-global/story-reel-global.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SidebarComponent,
    SidebarRowComponent,
    FeedComponent,
    StoryReelComponent,
    MessageSenderComponent,
    PostComponent,
    StoryReelGlobalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
