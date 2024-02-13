
const cardObjectDefinitions = [
    {id:1, imagePath:'/images/card-KingHearts.png'}
    {id:2, imagePath:'/images/card-JackClubs.png'}
    {id:3, imagePath:'images/card-queenDiamonds.png'}
    {id:4, imagePath:'images/card-AceSpades.png'}
]

const cardBackImgPath = '/images/card-back-black.png'

{/* <div class="card">
    <div class="card-inner">
        <div class="card-front">
            <img src="images/card-JackClubs.png" alt="" class="card-img">
        </div>
        <div class="card-back">
            <img src="images/card-back-black.png" alt="" class="card-img">
        </div>
    </div>
</div> --> */}

function creatCard(cardItem){
    //create div elements that make up a card
    const cardElem = createElement('div')
    const CardInnerElem = createElement('div')
    const cardFrontElem = createElement('div')
    const cardBackElem = createElement('div')

    //create front and back image elements for a card
    const cardFrontImg = createElement('img')
    const cardBackImg = createElement('img')

    //add class to id and card element
    addClassToElement(cardElem, 'card') 
    addIdToElement(cardElem, cardItem.id)

    //add class to inner card element
    addClassToElement(CardInnerElem,'card-inner')

    //add class to front card element
    addClassToElement(cardFrontElem, 'card-front')

    //add class to back card element
    addClassToElement(cardBackElem, 'card-back')

    //add src attribute and appropriate value to img element -back of card
    addSrcToImageElem(cardBackElem, cardBackImgPath)

    //add src attribute and appropriate value to img element - front of card
    addSrcToImageElem(cardFrontElem, cardItem.imagePath)

    //assign class to back image element of back of card
    addClassToElement(cardBackElem, 'card-img')

    //assign class to front image element of front of card
    addClassToElement(cardFrontElem, 'card-img')

}

function createElement(elemType){
    return document.createElement(elemType)
}
function addClassToElement(elem, className){
    elem.classList.add(className)
}
function addIdToElement(elm, id) {
    elem.id=id
}
function addSrcToImageElem(imgElem, src){
    imgElem.src=src
}