document.addEventListener('DOMContentLoaded', () => {
    let userTabStart = ['Adam', 'Krzyś', 'Ania', 'Grześ', 'Karola'];
    let drawUserTab = userTabStart.slice();
    let drawResultArr = [];

    let buttonStart = document.createElement('button');
    buttonStart.innerText = 'Start the draw';
    buttonStart.classList.add('btn', 'btn-primary', 'btn-lg');
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
    header.style.setProperty('background', 'url("gifts.jpg") ');
    header.style.setProperty('background-size', 'cover');
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
        resultTable.classList.add('list-group');
        resultTable.classList.add('result-table');

        

        for (let j of drawResultArr) {
            let userResult = j;
            let userResultSplit = userResult.toString().split(':');
            let resultItem = document.createElement('li', 'flex-fill');
            resultItem.classList.add('list-group-item', 'd-flex');
            resultItem.innerHTML = `<span class='user'> ${userResultSplit[0]} </span>`;
            
            let button = document.createElement('button'); 
            button.innerText = 'Show / hide';
            button.classList.add('btn', 'btn-success','btn-md', 'd-flex','justify-content-end');
            button.dataset.dataToggle = button;
            resultItem.appendChild(button);
            resultTable.appendChild(resultItem);

            let resultItemUserDraw = document.createElement('span');
            resultItemUserDraw.classList.add('user-draw');
            resultItemUserDraw.style.setProperty('visibility', 'hidden');
            resultItemUserDraw.innerHTML =  `${userResultSplit[1]}`;
            button.addEventListener('click', () => {        
                if (resultItemUserDraw.style.visibility === 'hidden') {
                    resultItem.appendChild(resultItemUserDraw);
                    resultItemUserDraw.style.setProperty('visibility', 'visible');
                } else {
                    resultItemUserDraw.style.setProperty('visibility', 'hidden');
                }
            });
             
                            
        }

        content.appendChild(resultTable);
    }
});