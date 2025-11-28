const seasonList = {
  spring: {
    name: "봄 🌸",
    desc: "벚꽃 | 미숙함, 어색함과 새로움",
    style: "spring",
    songs: [
      {
        artist: "볼빨간 사춘기",
        title: "나의 사춘기에게",
        thumb: "https://i.ytimg.com/vi/0qRNugYT7ow/hqdefault.jpg",
        video: "https://www.youtube.com/embed/0qRNugYT7ow",
        lyric: "흔들리지 않고 피는 꽃이 어디 있으랴 / 이 세상 그 어떤 아름다운 꽃들도 / 다 흔들리며 피었나니",
        poetName: "도종환",
        poemTitle: "흔들리며 피는 꽃",
        detail: "벚꽃 내음과 미숙하지만 설레는 시작을 노래한 곡입니다."
      },
      {
        artist: "악동뮤지션",
        title: "Give love",
        thumb: "https://i.ytimg.com/vi/gRf0yRIF-Ik/hqdefault.jpg",
        video: "https://www.youtube.com/embed/gRf0yRIF-Ik",
        lyric: "사랑은 주는 것, / 다 주고도 더 주고 싶어지는 것, / 받지 못해도 멈추지 못하는 것.",
        poetName: "정호승",
        poemTitle: "사랑하다가 죽어버려라",
        detail: "설렘과 어색함, 그리고 다가가는 사랑을 상큼하게 그린 곡입니다."
      }
    ]
  },
  summer: {
    name: "여름 🌊",
    desc: "바다 | 청춘 속 설렘",
    style: "summer",
    songs: [
      {
        artist: "plave",
        title: "bbuu",
        thumb: "https://i.ytimg.com/vi/P8G40A264FY/hqdefault.jpg",
        video: "https://www.youtube.com/embed/P8G40A264FY",
        lyric: "바다야 / 푸른 바다야 / 빛이 너울대는 여름에 / 내 마음 먼저 달아난다.",
        poetName: "정지용",
        poemTitle: "바다",
        detail: "파도처럼 시원한 여름, 일상 속 작은 즐거움을 노래합니다."
      },
      {
        artist: "산이, 레이나",
        title: "한여름밤의 꿀",
        thumb: "https://i.ytimg.com/vi/xXp_A1cKLPU/hqdefault.jpg",
        video: "https://www.youtube.com/embed/xXp_A1cKLPU",
        lyric: "너의 웃음이 바람을 타고 / 내 마음 그늘에 스며들던 날, / 별들은 괜히 더 반짝였고 / 나는 그저 그 순간이 좋았다.",
        poetName: "장석남",
        poemTitle: "대추나무 아래",
        detail: "일상에 스며드는 잔잔한 여름의 위로를 담았습니다."
      }
    ]
  },
  autumn: {
    name: "가을 🍂",
    desc: "단풍, 낙엽 | 과거에 대한 회상, 감성",
    style: "autumn",
    songs: [
      {
        artist: "적재",
        title: "반짝 빛나던 나의 2006년",
        thumb: "https://i.ytimg.com/vi/67i2zCI4G14/hqdefault.jpg",
        video: "https://www.youtube.com/embed/67i2zCI4G14",
        lyric: "지난날의 그 맑은 마음은 / 지금도 별빛이 되어 / 내 하늘 한쪽에서 / 조용히 빛나고 있다",
        poetName: "윤동주",
        poemTitle: "별",
        detail: "가을의 낙엽처럼, 추억을 감성적으로 노래하는 곡입니다."
      },
      {
        artist: "신인류",
        title: "날씨의 요정",
        thumb: "https://i.ytimg.com/vi/gNXFtFVz8NI/hqdefault.jpg",
        video: "https://www.youtube.com/embed/gNXFtFVz8NI",
        lyric: "당신은 누구시기에 / 내 마음 깊이 오시나이까 / 부드러운 바람결처럼 / 자꾸만 가까이 오시나이까",
        poetName: "한용운",
        poemTitle: "알 수 없어요",
        detail: "계절이 바뀌는 순간의 감성과 작은 위로가 전해지는 곡입니다."
      }
    ]
  },
  winter: {
    name: "겨울 ❄️",
    desc: "눈, 소나무 | 유난히 길었던 겨울, 스스로에 대한 위로",
    style: "winter",
    songs: [
      {
        artist: "악동뮤지션",
        title: "오랜 날 오랜 밤",
        thumb: "https://i.ytimg.com/vi/wEQpfil0IYA/hqdefault.jpg",
        video: "https://www.youtube.com/embed/wEQpfil0IYA",
        lyric: "돌담에 속삭이는 햇발같이 / 풀 아래 웃음 짓는 샘물같이 / 나는 너를 사랑해야겠다 / 너를 언제나 고이 지키는 마음으로",
        poetName: "김영랑",
        poemTitle: "돌담에 속삭이는 햇발같이",
        detail: "감성적인 선율로 긴 겨울밤을 위로하는 노래입니다."
      },
      {
        artist: "The Beatles",
        title: "Let it be",
        thumb: "https://i.ytimg.com/vi/QDYfEBY9NM4/hqdefault.jpg",
        video: "https://www.youtube.com/embed/QDYfEBY9NM4",
        lyric: "가는 배를 / 붙들 수도 없어 / 물결에 맡겨 / 그냥 보내노라",
        poetName: "박용철",
        poemTitle: "떠나가는 배",
        detail: "세상과 나에게 '그저 그대로 두라'는 따뜻한 메시지를 전해주는 명곡입니다."
      }
    ]
  }
};

const mainScreen = document.getElementById('mainScreen');
const detailScreen = document.getElementById('seasonDetailScreen');
const backBtn = document.getElementById('backBtn');
const seasonTitle = document.getElementById('seasonTitle');
const seasonDesc = document.getElementById('seasonDesc');
const seasonSection = document.getElementById('seasonSection');
const welcomeScreen = document.getElementById('welcomeScreen');

// 스크롤 parallax 효과
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const welcomeHeight = window.innerHeight;
  
  if (scrollY < welcomeHeight) {
    const opacity = Math.max(0, 1 - (scrollY / welcomeHeight * 1.5));
    const scale = Math.max(0.8, 1 - (scrollY / welcomeHeight * 0.3));
    welcomeScreen.style.opacity = opacity;
    welcomeScreen.querySelector('h1').style.transform = `scale(${scale}) translateY(${scrollY * 0.4}px)`;
    welcomeScreen.querySelector('.arrow').style.opacity = opacity;
    welcomeScreen.style.pointerEvents = opacity > 0 ? 'auto' : 'none';
  } else {
    welcomeScreen.style.opacity = 0;
    welcomeScreen.style.pointerEvents = 'none';
  }
});

// 계절 카드 클릭
document.querySelectorAll('.season-tile').forEach(btn => {
  btn.addEventListener('click', function(){
    const season = btn.dataset.season;
    showSeasonDetail(season);
  });
  btn.addEventListener('keydown', function(e){
    if(e.key === "Enter" || e.key === " "){
      btn.click();
    }
  });
});

backBtn.addEventListener('click', () => {
  detailScreen.style.display = 'none';
  mainScreen.style.display = '';
  document.body.style.overflow = '';
  window.scrollTo({top: window.innerHeight * 0.5});
});

function showSeasonDetail(seasonId) {
  const s = seasonList[seasonId];
  if(!s) return;
  
  seasonTitle.textContent = s.name;
  seasonDesc.textContent = s.desc;
  
  seasonSection.innerHTML = `
    <div class="cards">
      ${
        s.songs.map(song=>`
          <article class="song-card" tabindex="0">
            <img src="${song.thumb}" alt="${song.artist} - ${song.title} 썸네일">
            <div class="card-info">
              <h3>${song.artist} - ${song.title}</h3>
              <blockquote>"${song.lyric}"<br><span style="font-size:0.85rem; color:#a0a0c0;">— ${song.poetName}, 『${song.poemTitle}』 중</span></blockquote>
            </div>
            <button class="toggle-btn">상세보기</button>
            <div class="card-detail">
              <iframe src="${song.video}" title="${song.title} MV" allowfullscreen></iframe>
              <p>${song.detail}</p>
            </div>
          </article>
        `).join("")
      }
    </div>
  `;
  
  seasonSection.className = `season-detail ${s.style}`;

  seasonSection.querySelectorAll(".toggle-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
      const detail = this.nextElementSibling;
      detail.classList.toggle("open");
      this.textContent = detail.classList.contains("open") ? "닫기" : "상세보기";
    });
    btn.parentElement.addEventListener("keydown", function(e){
      if(e.key === "Enter"){ btn.click(); }
    });
  });

  mainScreen.style.display = 'none';
  detailScreen.style.display = 'flex';
  document.body.style.overflow = 'hidden';
  window.scrollTo({top: 0});
}
