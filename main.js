// 상품 데이터
const data = [
    { name: '초콜렛', price: 2000 },
    { name: '아이스크림', price: 1000 },
    { name: '컵라면', price: 1600 },
    { name: '볼펜', price: 2500 },
    { name: '아메리카노', price: 4000 },
    { name: '과자', price: 3000 },
    { name: '탄산수', price: 1200 },
    { name: '떡볶이', price: 3500 },
    { name: '노트', price: 1500 },
    { name: '껌', price: 500 }
];

// 입력 최소값
const minPrice = 500

while(1){

    const line = prompt('최대 금액을 입력해주세요.(그만하려면 q 입력)');
    const amount = Number(line); // string -> number

    if(!Number.isNaN(amount)){//num check
        const item = getItemByAmount(amount);

        const msg = item ? 
            `${amount}원으로 살 수 있는 가장 비싼 상품은 [${item.name}]이고, 가격은 ${item.price}원입니다.` : 
            '살 수 있는 상품이 없습니다.';

        // 결과 출력
        alert(msg);
    }
    else{

        if(line == 'q' || line == 'Q')
            break
        
        alert('숫자를 입력해주세요!');

    }
}


// 아래에 getItemByAmount 함수를 작성하세요.
function getItemByAmount(amount){

    const filtered_list = data.filter(item => item.price >= minPrice && item.price <= amount)
    
    const sorted_list = filtered_list.sort((a,b) => a.price - b.price) // 객체의 price 속성 비교

    console.log(sorted_list)

    return sorted_list[sorted_list.length-1]
}

