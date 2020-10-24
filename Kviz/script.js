const bazaPitanja = [
    {
        pitanje: "What is the most used programming language in 2019?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        tocniO: "d",
    },
    {
        pitanje: "Who is the President of US?",
        a: "Florin Pop",
        b: "Donald Trump",
        c: "Ivan Saldano",
        d: "Mihai Andrei",
        tocniO: "b",
    },
    {
        pitanje: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Cascading Style Sheet",
        c: "Jason Object Notation",
        d: "Helicopters Terminals Motorboats Lamborginis",
        tocniO: "a",
    },
    {
        pitanje: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        tocniO: "b",
    },
];

const kviz = document.getElementById("kviz");
const odgovorEls = document.querySelectorAll(".odgovor");
const pitanjaEl = document.getElementById("pitanja");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let trenutacnikviz = 0;
let rez = 0;

pokrenikviz();

function pokrenikviz() {
    ponistiOdgovor();

    const trenutacnikvizData = bazaPitanja[trenutacnikviz];

    pitanjaEl.innerText = trenutacnikvizData.pitanje;
    a_text.innerText = trenutacnikvizData.a;
    b_text.innerText = trenutacnikvizData.b;
    c_text.innerText = trenutacnikvizData.c;
    d_text.innerText = trenutacnikvizData.d;
}

function odaberi() {
    let odgovor = undefined;

    odgovorEls.forEach((odgovorel) => {
        if (odgovorel.checked) {
            odgovor = odgovorel.id;
        }
    });

    return odgovor;
}

function ponistiOdgovor() {
    odgovorEls.forEach((odgovorel) => {
        odgovorel.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the odgovor
    const odgovor = odaberi();

    if (odgovor) {
        if (odgovor === bazaPitanja[trenutacnikviz].tocniO) {
            rez++;
        }

        trenutacnikviz++;
        if (trenutacnikviz < bazaPitanja.length) {
            pokrenikviz();
        } else {
            kviz.innerHTML = `
                <h2>Tocno ste odgovorili ${rez}/${bazaPitanja.length} pitanja.</h2>
                
                <button onclick="location.reload()">Ponovi</button>
            `;
        }
    }
});
