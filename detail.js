// 상세보기(토글) 구현 Script
document.querySelectorAll(".toggle-btn").forEach((btn) => {
  btn.addEventListener("click", function () {
    const detail = this.nextElementSibling;
    detail.classList.toggle("open");
    this.textContent = detail.classList.contains("open") ? "닫기" : "상세보기";
  });

  // 키보드 접근(Enter)
  btn.parentElement.addEventListener("keydown", function(e){
    if(e.key === "Enter"){
      btn.click();
    }
  });
});

// 타일 호버 효과 (마우스 위치 기반 좀 더 부드러운 애니메이션)
document.querySelectorAll('.season-tile').forEach(tile => {
  tile.addEventListener('mouseenter', function() {
    this.style.transform = 'scale(1.02)';
  });
  tile.addEventListener('mouseleave', function() {
    this.style.transform = 'scale(1)';
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".snap-section");
  let index = 0;            // 현재 섹션 번호
  let isScrolling = false;  // 중복 스크롤 방지

  const threshold = 10;

  window.addEventListener("wheel", (e) => {
    if (isScrolling) return;
    if (Math.abs(e.deltaY) < threshold) return;
    isScrolling = true;

    if (e.deltaY > 0) {
      // 아래로 스크롤 → 다음 섹션
      index = Math.min(index + 1, sections.length - 1);
    } else {
      // 위로 스크롤 → 이전 섹션
      index = Math.max(index - 1, 0);
    }

    sections[index].scrollIntoView({
      behavior: "smooth"
    });

    // 스크롤 애니메이션 끝난 뒤 다시 스크롤 가능하게
    setTimeout(() => {
      isScrolling = false;
    }, 700); // 애니메이션 시간과 맞추기
  });
});
