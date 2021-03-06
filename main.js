﻿var posts = [

{
  id: 1,
  author: "Melly",
  date: "10 June 2018",
  description: "Sins destroy the heart, the same way poison destroys the body. Ibn Qayyim (رضي الله عنه)",
  image: "",
},
{
  id: 2,
  author: "Melly",
  date: "10 June 2018",
  description: "Your nafs, if you don't keep it busy with the truth it will keep you busy with falsehood. Imam Ash-Shafi'i (رحمه الله)",
  image: "",
},
{
  id: 3,
  author: "Melly",
  date: "09 June 2018",
  description: "The best women are those who do not see the men, and who are not seen by the men. Fatimah (رضي الله عنها)",
  image: "",
}

];

var app = new Vue({
  el: "#app",
  data: function data() {
    return {
      test: "",
      posts: posts,
      selectedClipPath: "polygon(0 100%, 0 0, 100% 0, 100% 100%)",
      postImage: posts[0].image,
      currentPost: null,
      postIndex: 0,
      selected: false,
      ready: false,
      lastSelectedPost: null,
      clipPath: posts[0].clip_path
    };
  },

  methods: {
    changePost: function changePost(index) {
      if (this.postImage != this.posts[index].image && this.selected == false) {
        this.postImage = this.posts[index].image;
        this.clipPath = this.posts[index].clip_path;
      }
    },
    closePost: function closePost() {
      if (this.lastSelectedPost != null) {
        this.selected = false;
        this.ready = false;
        this.clipPath = this.posts[this.lastSelectedPost].clip_path;
      }
    },
    selectedPost: function selectedPost(index) {
      var _this = this;
      this.selected = true;
      this.clipPath = this.selectedClipPath;
      this.lastSelectedPost = index;
      this.currentPost = this.posts[index];
      setTimeout(function () {
        _this.ready = true;
      }, 600);
    },
    nextPost: function nextPost() {
      var _this2 = this;

      if (this.lastSelectedPost < this.posts.length - 1) {
        this.lastSelectedPost++;
        this.ready = false;
        setTimeout(function () {
          _this2.currentPost = _this2.posts[_this2.lastSelectedPost];
          _this2.postImage = _this2.currentPost.image;
          _this2.ready = true;
        }, 600);
      }
    },
    prevPost: function prevPost() {
      var _this3 = this;

      if (this.lastSelectedPost <= this.posts.length - 1 && this.lastSelectedPost != 0) {
        this.lastSelectedPost--;
        this.ready = false;
        setTimeout(function () {
          _this3.currentPost = _this3.posts[_this3.lastSelectedPost];
          _this3.postImage = _this3.currentPost.image;
          _this3.ready = true;
        }, 600);
      }
    }
  },
  created: function created() {
    var _this4 = this;

    window.addEventListener("keydown", function (e) {
      e.keyCode == 39 ? _this4.nextPost() : false;
      e.keyCode == 37 ? _this4.prevPost() : false;
      e.keyCode == 27 ? _this4.closePost() : false;
    });
  }
});