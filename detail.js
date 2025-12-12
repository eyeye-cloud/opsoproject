const firstPage = document.querySelector('.first-page-section'); // 최선민: 메인 페이지 자바 스크립트 기능 구현. 스크롤 시 투명도가 변하며 올라오거나 내려가는 기능 구현. AI가 구현하였음.
const secondPage = document.querySelector('.second-page-section');
const allSeasonalElements = document.querySelectorAll('.spring-image, .spring-title, .summer-image, .summer-title, .autumn-image, .autumn-title, .winter-image, .winter-title');

function handleScroll() {
    const secondPageRect = secondPage.getBoundingClientRect();
    const secondPageTop = secondPageRect.top;
    const viewportHeight = window.innerHeight;

    const startPoint = viewportHeight * 0.7; 
    const endPoint = 0; 

    let scrollProgress = 0;

    if (secondPageTop < startPoint) {
        scrollProgress = 1 - (secondPageTop - endPoint) / (startPoint - endPoint);
        scrollProgress = Math.max(0, Math.min(1, scrollProgress));
    }
    
    const maxOpacity = 0.95;
    const finalOpacity = scrollProgress * maxOpacity; 

    secondPage.style.opacity = finalOpacity;
    allSeasonalElements.forEach(element => {
        element.style.opacity = finalOpacity;
    });

    const firstPageHideProgress = scrollProgress;

    const firstPageOpacity = 1 - firstPageHideProgress;
    firstPage.style.opacity = firstPageOpacity;

    const moveDistance = 50; 
    const firstPageTransformY = -moveDistance * firstPageHideProgress;
    firstPage.style.transform = `translateY(${firstPageTransformY}px)`;


    firstPage.classList.remove('hide'); 
}

window.addEventListener('scroll', handleScroll);
handleScroll();
