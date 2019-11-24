document.addEventListener('DOMContentLoaded', () => {
    let drawResultsState = [];
    let userTabStart = ['Adam', 'Krzysztof', 'Anna', 'Grzegorz', 'Karolina'];
    let userEmail = ['adam.pawlinski@gmail.com', 'adam.pawlinski@gmail.com', 'adam.pawlinski@gmail.com', 'adam.pawlinski@gmail.com', 'adam.pawlinski@gmail.com'];
    let drawUserTab = userTabStart.slice();
    let drawResultArr = [];

    let buttonStart = document.createElement('button');
    buttonStart.innerText = 'Start the draw';
    buttonStart.classList.add('btn', 'btn-primary', 'btn-lg', 'd-flex', 'justify-content-between');
    buttonStart.style.setProperty('role', 'button');
    buttonStart.addEventListener('click', () => {               
        beginDraw();                    
    })
    let header = document.querySelector('.header');
    header.style.background = 'url("gifts.jpg")';
    header.classList.add('d-flex', 'justify-content-center');
    header.appendChild(buttonStart);
    
    let beginDraw = () => {     
        let drawResult;   
        let resultTableExisting = document.getElementById('results-table');
        console.log(resultTableExisting);                                  
        resultTableExisting ===  null ? null : resultTableExisting.parentNode.removeChild(resultTableExisting);      
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
        localStorage.setItem('draw', JSON.stringify(drawResultArr))
        drawResultsState = JSON.parse(localStorage.getItem('draw'))
        return showResults(drawResultArr);
    }

    

    showResults = (drawResultArr) => {        
        let person = prompt('Wybierz osobę', 'Adam');
        switch(person) {
            case "Adam":
              result = drawResultArr.find(
                  res => res.split(':')[0] === "Adam"
              );
              break;
            case "Karolina":
            result = drawResultArr.find(
                res => res.split(':')[0] === "Karolina"
            );
              break;
            case "Grzegorz":
            result = drawResultArr.find(
                res => res.split(':')[0] === "Grzegorz"
            );
              break;
              case "Krzysztof":
              result = drawResultArr.find(
                res => res.split(':')[0] === "Krzysztof"
            );
              break;
              case "Anna":
              result = drawResultArr.find(
                res => res.split(':')[0] === "Anna"
            );
              break;
            default:
            result = "Błędny wybór";
          }
          let resultShow = result.split(':')[1]
          alert(`Wylosowałeś/aś: ${resultShow}`)

          showResults()
        // let content = document.querySelector('.results');
        // let resultTable = document.createElement('ul');
        // resultTable.classList.add('list-group', 'result-table', 'tab-content');
        // resultTable.setAttribute('id', 'results-table');
        // for (let userResult of drawResultArr) {
        //     let userResultSplit = userResult.toString().split(':');
        //     let resultItem = document.createElement('li');
        //     resultItem.classList.add('list-group-item', 'd-flex', 'flex-fill','justify-content-between', 'order-1');
        //     resultItem.innerHTML = `<span class='user'> ${userResultSplit[0]} </span>`;
            
        //     let button = document.createElement('button'); 
        //     button.innerText = 'Show / hide';
        //     button.classList.add('btn', 'btn-success','btn-sm', 'd-flex', 'order-3');
        //     button.dataset.dataToggle = button;

            
            // let buttonSend = document.createElement('button'); 
            // button.innerText = 'Send email';
            // button.classList.add('btn', 'btn-success','btn-lg', 'd-flex', 'order-4');
            // button.dataset.dataToggle = button;
            // let email = userEmail[j];
            // buttonSend.addEventListener('click', () => {        
            //     let link = `mailto:${email}&subject=Christmas app draw result&body=You have just draw ${userResultSplit[1]} to prepare the gift for`;
            //     window.location.href = link;
            // });
            
            // resultItem.appendChild(buttonSend);





        //     resultItem.appendChild(button);
        //     resultTable.appendChild(resultItem);

        //     let resultItemUserDraw = document.createElement('span');
        //     resultItemUserDraw.classList.add('user-draw', 'd-flex', 'order-2');
        //     resultItemUserDraw.style.visibility = 'hidden';
        //     resultItemUserDraw.innerHTML =  `${userResultSplit[1]}`;
        //     button.addEventListener('click', () => {        
        //         if (resultItemUserDraw.style.visibility === 'hidden') {
        //             resultItem.appendChild(resultItemUserDraw);
        //             resultItemUserDraw.style.visibility = 'visible';
        //         } else {
        //             resultItemUserDraw.style.visibility = 'hidden';
        //         }
        //     });         
        // }
        // content.appendChild(resultTable);
    }
});