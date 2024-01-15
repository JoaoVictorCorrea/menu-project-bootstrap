var prods = [
    { id: 1, name: "Bife com batata",         price: 30.0 },
    { id: 2, name: "Coxa de Frango Crocante", price: 25.0 },
    { id: 3, name: "Carne de Panela",         price: 22.0 },
    { id: 4, name: "Farofa",                  price: 10.0 },
    { id: 5, name: "Salada",                  price: 8.0 },
    { id: 6, name: "Torresmo",                price: 12.0 }
]

function calcular() {
    
    var quantities = document.getElementsByName("quantity");
    var name = document.getElementById("name");
    var order = document.getElementById("order");
    var total = 0;

    var formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    });

    order.innerHTML = `<br><br>Caro <b>${name.value}</b> <br><br>
                       <p>Seguem os dados do seu pedido.</p>
                       <p>O seu pedido é:</p>
                       <ul>`;

    for (var input of quantities) {

        var id = input.id;

        if (input.value > 0) {
            order.innerHTML += `<li>Prato: ${prods[id - 1].name} 
            - Preço unitário: ${formatter.format(prods[id - 1].price)} 
            - Quantidade: ${input.value} 
            - Total: R$ ${formatter.format(input.value * prods[id - 1].price)}</li>`
            
            total += input.value * prods[id - 1].price;
        }
    }

    order.innerHTML += `</ul> <br>
                        <h3>Preço final ${formatter.format(total)}</h3>`;
}