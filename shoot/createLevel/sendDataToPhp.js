class sendDataToPhp {
    static sendAddedObjects(nameLevel) {
        const data = {
            nameLevel: nameLevel,
            addedObjectArray: addedObjectArray
        };
        fetch("saveLevel.php", {
            "method": "POST",
            "headers": {
                "Content-Type": "application/json; charset=utf-8"
            },
            "body": JSON.stringify(data)
        }).then(function (response) {
            return response.text();
        }).then(function (data) {
            console.log(data);
        })

    }
    static createInputText() {
        //Function to dynamically add an input box: 
        var input = document.createElement('input');

        input.type = 'text';
        input.value = 'nameLevel';
        input.name = 'nameLevel';
        input.style.position = 'fixed';
        input.style.left = (mouse.y - 20) + 'px';
        input.style.top = (mouse.y - 4) + 'px';
        document.body.appendChild(input);
        input.focus();

    }
}