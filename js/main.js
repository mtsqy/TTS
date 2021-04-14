let getData = () => {
    fetch(`${window.location.origin}/static/blockData.json`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }
    ).then((res) => {
        return res.json()
    }).then((data) => {
        render(data)
    }).catch((err) => {
        console.warn('Error::', err)
    })
}

let render = (blocks) => {
    blocks.forEach( _ => {
        let col = document.createElement("LI")
        _.row.forEach(r => {
            let blockInput = document.createElement("INPUT")
            let blockDiv = document.createElement("DIV")
            if(r.deadBlock) { 
                blockDiv.classList.add("black")
                col.appendChild(blockDiv)
            } else {
                if(r.num) {
                    blockDiv.setAttribute("data-content", r.num)
                }
                blockInput.setAttribute("maxlength", 1)
                blockDiv.appendChild(blockInput)
                col.appendChild(blockDiv)
            }
        })
        document.querySelector('section').appendChild(col)
    })
}

window.onload = () => getData()