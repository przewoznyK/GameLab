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
        input.style.left = '830px';
        input.style.top = '20px';
        document.body.appendChild(input);
        input.focus();
    }

    static sendDataStatusText(message) {
        var existingText = document.querySelector('.message-text');
        if (existingText) {
          existingText.parentNode.removeChild(existingText);
        }
        switch (message) {

            case 'noPlayer':
                var text = document.createElement('span');
                text.innerText = 'Add player to map';
                text.style.position = 'fixed';
                text.style.left = '830px';
                text.style.top = '50px';
                text.classList.add('message-text');
                document.body.appendChild(text);
                break;
            case 'noEnemy':
                var text = document.createElement('span');
                text.innerText = 'Add enemy to map';
                text.style.position = 'fixed';
                text.style.left = '830px';
                text.style.top = '50px';
                text.classList.add('message-text');
                document.body.appendChild(text);
                break;
            case 'success':
                var text = document.createElement('span');
                text.innerText = 'Successfully added the map';
                text.style.position = 'fixed';
                text.style.left = '830px';
                text.style.top = '50px';
                text.classList.add('message-text');
                document.body.appendChild(text);
            break;
        }

    }
}