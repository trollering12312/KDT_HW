# KDT_HW

> KDT 과정 관련 미니 프로젝트 모음입니다 

## week 1

* **목표** : Github 웹 페이지 Header 구현

`HTML`,`CSS`

[예제](https://heropy.blog/2019/04/24/html-css-starter/)를 기반으로 깃헙 페이지 헤더 구현하기

* **기간** : 21.07.22~23

* **배운점**

flex같은 레이아웃을 지정하는 방법을 모르고 만들어서 정렬하는데 어려움이 있었다

div로 박스만 여러개 쌓아 놓은 느낌이였다
<br>

## week 2

* **목표** : 가격 별 상품 추천 프로그램 구현

`JavaScript`

상품 데이터와 사용자가 입력한 금액을 넘겨 받아 해당 금액으로 살 수 있는 가장 비싼 상품을 리턴하는 함수 `getItemByAmount` 제작

* **기간** : 21.07.26~30

* **배운점**

배열 관련 메소드의 선택이 중요

처음 선택한 메소드로 꾸역꾸역 구연했을 때는 20줄이 넘었는데, 리팩토링에서 `filter`를 사용하니까 코드가 반 이하로 줄었다
<br>

## week 3

* **목표** :  엑셀 DB를 이용한 이메일 발송 자동화 프로그램 구현

`python`

엑셀 관련 라이브러리를 사용해 이메일을 발송하는 프로그램을 구현

크롤링(Beautiful Soup)하는 부분은 구현되서 제공되었고, 엑셀 처리와 이메일 발송만 구현하면 됬다

* **기간** : 21.08.02~06

* **배운점**

좋은 라이브러리가 참 많다는 것과 내가 모든걸 만들어서 쓸 필요는 없다는 점?

<br>

## week 4

* **목표** : HTML5를 활용한 블로그 구조 설계

`HTML`,`CSS`

주어진 파일로 예제를 완성

* **기간** : 21.08.09~13

* **배운점**

CSS 복합 선택자를 연습하는 과제였다

<br>

## CSS 1

* **목표** : figma를 통해 주어진 예시를 `flex` `position` 활용해 구현하기

`HTML`,`CSS`

|예시1|예시2|예시3|
|:--|:--|:--|
|![](https://images.velog.io/images/trollering12312/post/f91fad4f-d3f3-4c3a-9c07-08f98a6e6ba9/Base0.png) |![](https://images.velog.io/images/trollering12312/post/23dca8c9-19ba-4e02-ba61-4090fa4f4802/Base1.png)|![](https://images.velog.io/images/trollering12312/post/dabcff62-2939-43fb-add8-5a361a06f9dc/Base2.png)|

* **기간** : 21/08/23~8/26

* **배운점**

요소의 가운데 정렬은 `margin:auto`

`text-align` 으로 상하 좌우 텍스트 정렬

`span`의 배경화면으로 이미지를 지정한뒤 `padding`으로 밀어내 아이콘 배치하기

모든 요소를 블록요소로 감싸 flex 처리하려고한 나와 달리 가이드 코드는 `span,strong` 같은 다양한 태그를 사용

구현할 때 `내가 원하는 것`을 먼저 안다음 `방법`을 찾는게 더 쉬운 방법

무조건 처음부터 완벽한 레이아웃에 집착하지 말 것

<br>

## CSS 2

* **목표** 

`HTML`,`CSS`

* 2-1) `float`으로 화면 구현

* 2-2) `float`으로 물건 리스트 구현

* 2-3) `float`으로 탭 메뉴 구현

|2-1|2-2|2-3|
|:--|:--|:--|
|![](https://images.velog.io/images/trollering12312/post/d0edc333-f07e-4b0f-84c1-920a9cd644a2/imagestext.png)|![](https://images.velog.io/images/trollering12312/post/07cf3294-99b7-4fe8-8b51-c2d7c65bc680/productlist.png)|![](https://images.velog.io/images/trollering12312/post/c48dd4f0-378b-465d-a218-83928d2c20bf/tab.png)|

* **일자** : 20/08/30

* **배운점**

**2-1)**
브라우저는 요소를 렌더링할 때 **선형적(linearity)**으로 처리한다(=위에서 아래로)
[브라우저 렌더링](https://boxfoxs.tistory.com/408)

부모 요소의 범위를 벗어나는 float 요소를 [BFC(Block Formatting Context)](https://blueshw.github.io/2020/05/17/know-css-block-formatting-context/)를 만들어 포함하게 하는 할 수 있다
(clearfix 방식도 가능하다)

`float`과 `clear`의 활용법을 배웠다
> float사용시 부모요소의 height를 fix하면 안됨 - 데이터 추가시 처리 어려움
> float된 요소와 다른 요소 사이에 maigin을 주고 싶으면 float된 요소에게 주기
[예제 설명](https://jays-blog.tistory.com/entry/Html-%EC%88%98%EC%97%85-%EC%A0%95%EB%A6%AC%ED%95%98%EA%B8%B0-float-%EB%9D%84%EC%9A%B0%EA%B8%B0)

[float 관련 팁](https://css-tricks.com/all-about-floats/)

**2-2)**

리스트는 `ul` 태그 활용해서 구현하는게 좋다

**baseline**
> inline, inline-block요소는 vertical-align의 영향을 받는다
> default값인 `baseline`은 부모 요소의 baseline에 따라 배치된다
> 이때 요소 별로 기준선이 달라 의도치 않은 공간이 생기는데, 벌어진 요소에 `diplay:block;`을 사용하면 `block` 요소가 되어  공간이 사라진다
[baseline 추가](https://aboooks.tistory.com/171)

[placeholder](https://placeholder.com/)에서 원하는 사이즈의 네모난 이미지를 url로 가져다 사용 가능(url+사이즈)

**2-3)**

예제를 `float`말고도 `inline-block`요소로 만들어 구현하는 것도 가능

<br>

## CSS 3

`HTML`,`CSS`

* **목표** : 네이버 화면 구현하기

|3-1|3-2|3-3|
|:--|:--|:--|
|![](https://images.velog.io/images/trollering12312/post/ddf9ddd7-4c0c-47e1-ad7c-dc63ca565670/todaycast.jpg)|![](https://images.velog.io/images/trollering12312/post/36c7a221-e870-474e-a9f1-cb4ed33825f3/recast.jpg)|![](https://images.velog.io/images/trollering12312/post/7fec4c89-7de6-4aee-a19d-b8a72ec2f824/opencast.png)|

* **일자** : 20/09/01

* **배운것** 

**3-1)**

1) 요소들 같은 간격 띄어 배치하기
[요소를 동일한 간격으로 배치하는 여러 팁](https://css-tricks.com/equidistant-objects-with-css/)들이 있지만

`float`을 사용하는 가이드 코드에서 제공하는 방법은 그냥 부모의 크기를 잘 고려해 만들라는 것이였다

`flex-box`의 `justify-content:space-between;`으로 간단하게, 되지만 이전에는 힘들게 했을 것이라는게 짐작이되었다

2) [backround-size](https://www.w3schools.com/cssref/css3_pr_background-size.asp)

제공되는 이미지를 `backround-size`의 `cover, contain`을 이용해 조절해서 사용 가능하다

3) `strong` - 굻은 글씨, `em` - 이탤릭체

4) `absolute`활용 

`absoulte`를 통해 버튼 요소를 감싸는 요소를 배치하고, 내부 요소를 `float`으로 정리하면 유용하다

`absoulte`를 사용하려면 부모가 `static`이면 안되므로 offset없는 `relative`나 다른 postion값을 줘야한다

**3-2)**

가이드 코드와 달랐지만 결과물은 동일했다 - 구현 방법에 정답은 없다

`li`요소 하나하나가 링크여서 `a`로 감싸줘야 했지만 이 예제에선 안했다

**3-3)**

`:first-child`로 nav의 첫번째 요소 선택함 - 실제로는 jQuery로 할듯하다

`strong` - inline 강조, `h1` - block 강조

<br>

## CSS 4

`HTML`,`CSS`

* **목표** : 네이버 화면 구현하기

![](https://images.velog.io/images/trollering12312/post/1168e3c8-5b6e-4dc4-9614-fe0baadfa1f6/navercast_game.jpg)

* **일자** : 20/09/01

* **배운것** 

이번 예제에서도 `float`으로 띄운 요소들을 **동일간격**으로 배치하는게 어려웠다

매번 px값을 고려해서 한다면 반응형을 구현할 때는 더 복잡할 것이고, 나중에 유지보수 하는 것도 쉽지 않을 것 같다

- - -

이외의 예제들은 [여기](https://jays-blog.tistory.com/entry/Html-%EC%9B%B9%ED%8E%98%EC%9D%B4%EC%A7%80-%EB%A7%8C%EB%93%A4%EA%B8%B0-%EB%84%A4%EC%9D%B4%EB%B2%84-%EC%82%AC%EC%9D%B4%ED%8A%B8-%EB%94%B0%EB%9D%BC%ED%95%98%EA%B8%B0?category=786994)에 정리되어있다
