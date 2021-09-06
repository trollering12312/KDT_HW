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


