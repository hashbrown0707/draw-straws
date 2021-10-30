$(function(){
    let counter = 1
    let body = $("body")
    let input = $(".input")

    body.on("change", input, function(){
        body.css("height", `${body.height() + 20}px`)

        if(input.val() != null){
            let $clone = $("#in1").clone(false).attr("id", `in${++counter}`).addClass("input").val("")
            $("#input_group").append($clone)
        }
    })

    $("#btn").on("click", function(){
        let rand = Math.floor(Math.random() * (counter - 1)) + 1
        $("#title").text(`抽到了${$(`#in${rand}`).val()}!`)
    })
})