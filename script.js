//Para aparecer a lista de peças//

function toggleSubMenu(menuId) {
    var subMenu = document.getElementById(menuId);
    if (subMenu) {
        subMenu.style.display = (subMenu.style.display === 'none' || subMenu.style.display === '') ? 'block' : 'none';
    }
}

function toggleSubMenu(menuId) {
    // Esconder todos os submenus
    var allSubMenus = document.querySelectorAll('.submenu');
    allSubMenus.forEach(function (menu) {
        menu.style.display = 'none';
    });

    // Exibir apenas o submenu correspondente ao botão pressionado
    var subMenu = document.getElementById(menuId);
    if (subMenu) {
        subMenu.style.display = 'block';
    }
}

//Ocultar section//
function mostrarEscolha(id) {
    let escolha = id;
    let minhalista = document.getElementById('menu').querySelectorAll('#menu li');
    if (minhalista[id].hasAttribute('hidden')) {
        minhalista[id].removeAttribute('hidden');
    }
}


//Pesquisa//
document.addEventListener('DOMContentLoaded', function () {
    var searchInput = document.getElementById('searchInput');
    var searchIcon = document.querySelector('.search .icon ion-icon');

    if (searchInput && searchIcon) {
        searchInput.addEventListener('keydown', function (event) {
            if (event.key === 'Enter') {
                event.preventDefault();
                performSearch();
            }
        });

        searchIcon.addEventListener('click', function () {
            performSearch();
        });

        function performSearch() {
            clearHighlight();

            var searchTerm = searchInput.value.trim().toLowerCase();
            var allItems = document.querySelectorAll('#menu li a, #subMenu li a, #subMenu1 li a, #subMenucm25v4 li a, #subMenucm25v5 li a, #subMenucm32 li a, #subMenue32 li a, #subMenucl9 li a, #subMenucl10 li a, #subMenucl20 li a, #subMenucmd6 li a, #subMenucmd8 li a, #subMenucmd8x1 li a, #subMenucmd20x1 li a, #subMenucor li a, #subMenuct6 li a');
            var found = false;

            allItems.forEach(function (item) {
                var text = item.textContent.trim().toLowerCase();

                if (text.includes(searchTerm)) {
                    showItem(item);
                    var parent = item.parentElement;

                    while (parent && parent.tagName !== "NAV") {
                        if (parent.tagName === "UL") {
                            parent.style.display = "block";
                        }
                        parent = parent.parentElement;
                    }

                    found = true;
                } else {
                    hideItem(item);
                }
            });

            if (!found) {
                console.log('Nenhum item encontrado.');
            }

            console.log('Função de pesquisa chamada com sucesso!');
        }

        function clearHighlight() {
            var allItems = document.querySelectorAll('#menu li a, #subMenu li a, #subMenu1 li a, #subMenucm25v4 li a, #subMenucm25v5 li a, #subMenucm32 li a, #subMenue32 li a, #subMenucl9 li a, #subMenucl10 li a, #subMenucl20 li a, #subMenucmd6 li a, #subMenucmd8 li a, #subMenucmd8x1 li a, #subMenucmd20x1 li a, #subMenucor li a, #subMenuct6 li a');
            allItems.forEach(function (item) {
                showItem(item);
            });
        }

        function hideItem(item) {
            item.style.display = 'none';
        }

        function showItem(item) {
            item.style.display = 'block';
        }
    }
});


//Pedidos//
function toggleorder(order) {
    var order = document.getElementById(order);
    if (order) {
        order.style.display = (order.style.display === 'none' || order.style.display === '') ? 'block' : 'none';
    }
}



var clickCounters = {};

function toggleChoiceCb(structureId, structureName) {
    var orderList = document.getElementById('orderList');
    var counterSpan = document.getElementById('counter' + structureId);

    if (!counterSpan) {
        counterSpan = document.createElement('span');
        counterSpan.id = 'counter' + structureId;
        counterSpan.className = 'counter-style';

        var listItem = document.createElement('li');
        listItem.appendChild(document.createTextNode(structureId + ' - ' + structureName + ' '));

        var decreaseButton = document.createElement('button');
        decreaseButton.textContent = '-';
        decreaseButton.className = 'counter-buttons decrease-button'; // Adiciona classes aos botões
        decreaseButton.onclick = function () {
            decreaseCounter(structureId);
        };

        var increaseButton = document.createElement('button');
        increaseButton.textContent = '+';
        increaseButton.className = 'counter-buttons increase-button'; // Adiciona classes aos botões
        increaseButton.onclick = function () {
            increaseCounter(structureId);
        };

        var deleteButton = document.createElement('button');
        deleteButton.innerHTML = '<span title="Excluir" class="material-icons">delete</span>';
        deleteButton.className = 'counter-buttons delete-button'; // Adiciona classes aos botões
        deleteButton.onclick = function () {
            deleteItem(structureId);
        };

        listItem.appendChild(decreaseButton);
        listItem.appendChild(document.createElement('span')).className = 'spacer'; // Adiciona espaço entre os botões
        listItem.appendChild(counterSpan);
        listItem.appendChild(document.createElement('span')).className = 'spacer'; // Adiciona espaço entre os botões
        listItem.appendChild(increaseButton);
        listItem.appendChild(deleteButton);

        orderList.appendChild(listItem);
    }

    clickCounters[structureId] = (clickCounters[structureId] || 0) + 1;
    updateCounterDisplay(structureId);
}

function increaseCounter(structureId) {
    clickCounters[structureId]++;
    updateCounterDisplay(structureId);
}

function decreaseCounter(structureId) {
    if (clickCounters[structureId] > 0) {
        clickCounters[structureId]--;
        updateCounterDisplay(structureId);
    }
}

function deleteItem(structureId) {
    var listItem = document.getElementById('counter' + structureId).parentNode;
    listItem.parentNode.removeChild(listItem);
    // Limpar o contador ao excluir o item
    clickCounters[structureId] = 0;
    updateCounterDisplay(structureId);
}

function updateCounterDisplay(structureId) {
    var counterSpan = document.getElementById('counter' + structureId);
    counterSpan.textContent = clickCounters[structureId] + 'x';
}

//Slide//
var slideIndex = 1;
var slides = document.getElementsByClassName("mySlides");
setInterval(function() {plusSlides(1)}, 5000); // Altere o valor 2000 para ajustar o intervalo de tempo (em milissegundos) entre os slides.

function plusSlides(n) {
    slideIndex += n;
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";
}

//janela modal//
function openModal(){
    const modal = document.getElementById('modal-container')
    modal.classList.add('mostrar')

    modal.addEventListener('click', (e) =>{
        if (e.target.id == 'modal-container' || e.target.id == "fechar"){
            modal.classList.remove('mostrar')
            localStorage.fechaModal = 'modal-container'
        }
    })
}