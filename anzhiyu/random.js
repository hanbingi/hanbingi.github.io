var posts=["/posts/6.html","/posts/7.html","/posts/9.html","/posts/5.html","/posts/3.html","/posts/1.html","/posts/8.html","/posts/2.html","/posts/4.html","/posts/10.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };