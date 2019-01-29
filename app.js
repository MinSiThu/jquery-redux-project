$(document).ready(function(){
    $('#Red').on('click',()=>{store.dispatch(red())})
    $('#Blue').on('click',()=>{store.dispatch(blue())})
    $('#Green').on('click',()=>{store.dispatch(green())})
    $('#Gray').on('click',()=>{store.dispatch(gray())})

    $('#elementSelector').on('change',function(){
        let elementName = $(this).val();
        store.dispatch(element(elementName))
        
    })
})