function Pepperoni() {
    //    var data = {};
    //    data.topping = "pepperoni";
    //    console.log("test");
    //    $.ajax({
    //        type: 'POST',
    //        data: JSON.stringify(data),
    //        dataType: 'JSON',
    //        contentType: 'application/json',
    //        url: '/api/form/order',
    //        success: function (data) {
    //            console.log('success');
    //            console.log(JSON.stringify(data));
    //        }
    //    });
    var data = {};
    var formValue = document.getElementById("form");
    num = 5
        //    console.log('#top' + num.toString());


    for (i = 0; i < formValue.length; i++) {
        //        console.log('#top' + i.toString());
        if ($('#top' + i.toString()).is(':checked')) {
            data['topping' + i] = formValue.elements[i].value;
            //            console.log("YAAAA");
            //            console.log(formValue.elements[i].value);
        }
    }
    //    if (formValue.length = 1) {
    //        data.topping0 = formValue.elements[0].value;
    //    } else if (formValue.length = 2) {
    //        data.topping0 = formValue.elements[0].value;
    //        data.topping1 = formValue.elements[1].value;
    //    } else if (formValue.length = 3) {
    //        data.topping0 = formValue.elements[0].value;
    //        data.topping1 = formValue.elements[1].value;
    //        data.topping2 = formValue.elements[2].value;
    //    } else if (formValue.length = 4) {
    //        data.topping0 = formValue.elements[0].value;
    //        data.topping1 = formValue.elements[1].value;
    //        data.topping2 = formValue.elements[2].value;
    //        data.topping3 = formValue.elements[3].value;
    //    } else if (formValue.length = 5) {
    //        data.topping0 = formValue.elements[0].value;
    //        data.topping1 = formValue.elements[1].value;
    //        data.topping2 = formValue.elements[2].value;
    //        data.topping3 = formValue.elements[3].value;
    //        data.topping4 = formValue.elements[4].value;
    //    }
    //    data.topping0 = formValue.elements[0].value;
    //    data.topping1 = formValue.elements[1].value;
    //    data.topping2 = formValue.elements[2].value;
    //    data.topping3 = formValue.elements[3].value;
    //    data.topping4 = formValue.elements[4].value;
    //    data.topping5 = formValue.elements[5].value;
    //    data.topping6 = formValue.elements[6].value;
    //    data.topping7 = formValue.elements[7].value;
    //    data.topping8 = formValue.elements[8].value;
    //    data.topping9 = formValue.elements[9].value;
    //    console.log(data);
    $.ajax({
        type: 'POST',
        data: JSON.stringify(data),
        dataType: 'JSON',
        contentType: 'application/json',
        url: '/api/form/order',
        success: function (data) {
            //            console.log('success');
            //            console.log(JSON.stringify(data));
        }
    });
    //    var i;
    //    for (i = 0; i < x.length; i++) {
    //        text += x.elements[i].value + "<br>";
    //    }
    //    document.getElementById("demo").innerHTML = text;


    //    ajax.post('/form/order', {
    //        topping: 'pepperoni'
    //    });
}