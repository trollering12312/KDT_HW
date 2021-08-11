// 글쓰기 버튼 페이지 이동 방지
const $submit = document.querySelector('button[type="submit"]');
$submit &&
    $submit.addEventListener("click", e => {
        e.preventDefault();
        alert("Great!");
    });

function checkboxOne(element) {

    const checkboxes = document.getElementsByName("feeling");
    
    //전체 초기화
    checkboxes.forEach((cb) => {
        cb.checked = false; 
    })
    
    //골라진 대상만 체크
    element.checked = true;
}
      