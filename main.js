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

//const -> let
let line;
let amount;

// 사용자 입력 받기
while(1){

    line = prompt('최대 금액을 입력해주세요.');
    amount = +line; // string -> number

    if(!Number.isNaN(amount)){//num check
        break;
    }
    else{
        alert('숫자를 입력해주세요!');
    }
}


// 주어진 금액으로 살 수 있는 가장 비싼 상품을 구함
const item = getItemByAmount(data, amount);

const msg = item ? 
    `${amount}원으로 살 수 있는 가장 비싼 상품은 [${item.name}]이고, 가격은 ${item.price}원입니다.` : 
    '살 수 있는 상품이 없습니다.';

// 결과 출력
alert(msg);

// 아래에 getItemByAmount 함수를 작성하세요.
function getItemByAmount(data, amount){

    //돈이 부족한 경우
    if(amount<500)
        return null;

    //살수 있는 항목중 가장 비싼 값 계산
    tempArray = data.map(arg => +arg.price); //price로만 이루어진 array 생성
    result = 0;

    while(1){

        if(tempArray.length === 0){ //array가 텅빔 = 살게 없음
            return ;
        }
        
        max = Math.max.apply(Math, tempArray);//max를 찾고 보유금과 비교

        if(amount >= max){
            result = max;
            break;
        }

        //array에서 필요없는 항목 삭제
        tempArray.splice(tempArray.indexOf(max),1)

    }

    let _index = data.findIndex(arg => arg.price === result); // result의 index 찾아서 객체 return

    return data[_index];

}

