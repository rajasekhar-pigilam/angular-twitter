import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  tweet: any = ''
  name: any = ''
  tweetedText = ''
  postedBy = ''

  tweets: any = []

  constructor(public http: HttpClient) { }

  ngOnInit(): void {
    this.getTweets();
  }

  postTweet(){
    this.postedBy = this.name
    this.tweetedText = this.tweet
    console.log(this.tweet, this.name);
    this.tweets.push({
      name: this.name,
      tweet: this.tweet
    })

    this.http.post('http://localhost:1337/tweets',{
      "name": this.name,
      "designation": "Student",
      "tweet": this.tweet,
      "photo": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/492.jpg",
    }).subscribe(res => {
      console.log(res);
      this.name = ''
      this.tweet = ''
      this.getTweets();
    })

    console.log(this.tweets);
  }

  getTweets(){
    this.http.get('http://localhost:1337/tweets/?sort=createdAt%20DESC').subscribe(res => {
      console.log(res);
      this.tweets = res;
    })
  }

}
