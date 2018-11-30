document.addEventListener('DOMContentLoaded', () => {
    let userTabStart = ['Adam', 'Krzyś', 'Ania', 'Grześ', 'Karola'];
    let drawUserTab = userTabStart.slice();
    let drawResultArr = [];

    let buttonStart = document.createElement('button');
    buttonStart.innerText = 'Start the draw';
    buttonStart.classList.add('btn', 'btn-primary', 'btn-lg', 'd-flex', 'justify-content-between');
    buttonStart.style.setProperty('role', 'button');
    buttonStart.addEventListener('click', () => {
        // let content = document.querySelector('.results');
        // if (resultTable != 'undefined') {
        //     content.removeChild('ul'); 
        //     let showResults = '';
        // }        
        beginDraw();
    })
    let header = document.querySelector('.header');
    header.style.background = 'url("gifts.jpg")';
    header.classList.add('d-flex', 'justify-content-center');
    header.appendChild(buttonStart);
    
    let beginDraw = () => {     
        let drawResult; 
        if (userTabStart.length < 2)
        {
            console.log('Too less users to make the draw');
        } else {       
            for (let i of userTabStart){         
                if (drawUserTab.length === 1 && drawUserTab[0] === i) {
                    drawResultArr = [];
                    drawUserTab = userTabStart.slice();
                    beginDraw();
                    break;
                }           
                do { 
                    drawResult = Math.floor(Math.random() * drawUserTab.length); 
                } while (drawUserTab[drawResult] === i);                  
                const drawUser = drawUserTab.splice(drawResult, 1);                
                drawResultArr.push(`${i}:${drawUser}`); 
            }
        }
        return showResults(drawResultArr);
    }

    

    showResults = (drawResultArr) => {
        let content = document.querySelector('.results');
        let resultTable = document.createElement('ul');
        resultTable.classList.add('list-group', 'result-table', 'tab-content');

        for (let j of drawResultArr) {
            let userResult = j;
            let userResultSplit = userResult.toString().split(':');
            let resultItem = document.createElement('li');
            resultItem.classList.add('list-group-item', 'd-flex', 'flex-fill','justify-content-between', 'order-1');
            resultItem.innerHTML = `<span class='user'> ${userResultSplit[0]} </span>`;
            
            let button = document.createElement('button'); 
            button.innerText = 'Show / hide';
            button.classList.add('btn', 'btn-success','btn-sm', 'd-flex', 'order-3');
            button.dataset.dataToggle = button;
            resultItem.appendChild(button);
            resultTable.appendChild(resultItem);

            let resultItemUserDraw = document.createElement('span');
            resultItemUserDraw.classList.add('user-draw', 'd-flex', 'order-2');
            resultItemUserDraw.style.visibility = 'hidden';
            resultItemUserDraw.innerHTML =  `${userResultSplit[1]}`;
            button.addEventListener('click', () => {        
                if (resultItemUserDraw.style.visibility === 'hidden') {
                    resultItem.appendChild(resultItemUserDraw);
                    resultItemUserDraw.style.visibility = 'visible';
                } else {
                    resultItemUserDraw.style.visibility = 'hidden';
                }
            });
             
                            
        }

        content.appendChild(resultTable);
    }
});