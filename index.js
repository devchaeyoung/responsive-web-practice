const template = (
  <div class="thumbs__item">
    <img class="thumbs__thumbnail" src="./imgs/img2.webp" />
    <div class="thumbs__info">
      <div class="thumbs__profile"></div>
      <div class="thumb__text">
        <h3 class="thumbs__text--title">영상 제목</h3>
        <p class="thumbs__text--owner">게시자</p>
        <p class="thumbs__text--owner">조회수 101.9만회 &#183; 1시간 전</p>
      </div>
    </div>
  </div>
);

const thumbWrapper = document.querySelector(".thumbs__wrapper");

const List = [];

function loadThumbnails() {
  for (let i = 0; i <= 11; i++) {
    return template;
  }
}

thumbWrapper.innerHTML = loadThumbnails();
