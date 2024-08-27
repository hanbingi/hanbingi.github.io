var posts=["/posts/10.html","/posts/5.html","/posts/12.html","/posts/6.html","/posts/9.html","/posts/3.html","/posts/11.html","/posts/2.html","/posts/7.html","/posts/1.html","/posts/13.html","/posts/4.html","/posts/8.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };