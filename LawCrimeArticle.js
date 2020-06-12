class LawCrimeArticle extends React.Component {
    state = {
        KodeksKarnyDzial1Rozdzial1: [
            {
                nrArt: "Art. 1. Warunki odpowiedzialności karnej",
                txtArt: <>
                    <p>§ 1. Odpowiedzialności karnej podlega ten tylko, kto popełnia czyn zabroniony pod groźbą kary przez ustawę obowiązującą w czasie jego popełnienia.</p>
                    <p>§ 2. Nie stanowi przestępstwa czyn zabroniony, którego społeczna szkodliwość jest znikoma.</p>
                    <p>§ 3. Nie popełnia przestępstwa sprawca czynu zabronionego, jeżeli nie można mu przypisać winy w czasie czynu.</p>
                </>,
                id: 1,
                active: false,
            },
            {
                nrArt: "Art. 2. Odpowiedzialność za przestępstwo skutkowe popełnione przez zaniechanie",
                txtArt: <><p>Odpowiedzialności karnej za przestępstwo skutkowe popełnione przez zaniechanie podlega ten tylko, na kim ciążył prawny, szczególny obowiązek zapobiegnięcia skutkowi. </p></>,
                id: 2,
                active: false,
            },
            {
                nrArt: "Art. 3. Zasada humanitaryzmu",
                txtArt: <> <p>Kary oraz inne środki przewidziane w tym kodeksie stosuje się z uwzględnieniem zasad humanitaryzmu, w szczególności z poszanowaniem godności człowieka</p></>,
                id: 3,
                active: false,
            },
            {
                nrArt: "Art. 4. Stosowanie ustawy karnej",
                txtArt: <>
                    <p>§ 1. Jeżeli w czasie orzekania obowiązuje ustawa inna niż w czasie popełnienia przestępstwa, stosuje się ustawę nową, jednakże należy stosować ustawę obowiązującą poprzednio, jeżeli jest względniejsza dla sprawcy.</p>
                    <p>§ 2. Jeżeli według nowej ustawy za czyn objęty wyrokiem nie można orzec kary w wysokości kary orzeczonej, wymierzoną karę obniża się do wysokości najsurowszej kary możliwej do orzeczenia na podstawie nowej ustawy.</p>
                    <p>§ 3. Jeżeli według nowej ustawy czyn objęty wyrokiem nie jest już zagrożony karą pozbawienia wolności, wymierzoną karę pozbawienia wolności podlegającą wykonaniu zamienia się na grzywnę albo karę ograniczenia wolności, przyjmując że jeden miesiąc pozbawienia wolności równa się 60 stawkom dziennym grzywny albo 2 miesiącom ograniczenia wolności.</p>
                    <p>§ 4. Jeżeli według nowej ustawy czyn objęty wyrokiem nie jest już zabroniony pod groźbą kary, skazanie ulega zatarciu z mocy prawa.</p>
                </>,
                id: 4,
                active: false,
            },
            {
                nrArt: "Art. 5. Zasada terytorialności",
                txtArt: <><p>Ustawę karną polską stosuje się do sprawcy, który popełnił czyn zabroniony na terytorium Rzeczypospolitej Polskiej, jak również na polskim statku wodnym lub powietrznym, chyba że umowa międzynarodowa, której Rzeczpospolita Polska jest stroną, stanowi inaczej. </p></>,
                id: 5,
                active: false,
            },
            {
                nrArt: "Art. 6. Czas i miejsce popełnienia czynu zabronionego",
                txtArt: <>
                    <p>§ 1. Czyn zabroniony uważa się za popełniony w czasie, w którym sprawca działał lub zaniechał działania, do którego był obowiązany.</p>
                    <p>§ 2. Czyn zabroniony uważa się za popełniony w miejscu, w którym sprawca działał lub zaniechał działania, do którego był obowiązany, albo gdzie skutek stanowiący znamię czynu zabronionego nastąpił lub według zamiaru sprawcy miał nastąpić.</p>
                </>,
                id: 6,
                active: false,
            },
            {
                nrArt: "Art. 7. Kategorie przestępstw - cechy zbrodni i występku",
                txtArt: <>
                    <p>§ 1. Przestępstwo jest zbrodnią albo występkiem.</p>
                    <p>§ 2. Zbrodnią jest czyn zabroniony zagrożony karą pozbawienia wolności na czas nie krótszy od lat 3 albo karą surowszą.</p>
                    <p>§ 3. Występkiem jest czyn zabroniony zagrożony grzywną powyżej 30 stawek dziennych albo powyżej 5 000 złotych, karą ograniczenia wolności przekraczającą miesiąc albo karą pozbawienia wolności przekraczającą miesiąc.</p>
                </>,
                id: 7,
                active: false,
            },
            {
                nrArt: "Art. 8. Formy winy a kwalifikacja przestępstw",
                txtArt: <><p>Zbrodnię można popełnić tylko umyślnie; występek można popełnić także nieumyślnie, jeżeli ustawa tak stanowi. </p></>,
                id: 8,
                active: false,
            },
            {
                nrArt: "Art. 9. Strona podmiotowa czynu - umyślność i nieumyślność",
                txtArt: <>
                    <p>§ 1. Czyn zabroniony popełniony jest umyślnie, jeżeli sprawca ma zamiar jego popełnienia, to jest chce go popełnić albo przewidując możliwość jego popełnienia, na to się godzi.</p>
                    <p>§ 2. Czyn zabroniony popełniony jest nieumyślnie, jeżeli sprawca nie mając zamiaru jego popełnienia, popełnia go jednak na skutek niezachowania ostrożności wymaganej w danych okolicznościach, mimo że możliwość popełnienia tego czynu przewidywał albo mógł przewidzieć.</p>
                    <p>§ 3. Sprawca ponosi surowszą odpowiedzialność, którą ustawa uzależnia od określonego następstwa czynu zabronionego, jeżeli następstwo to przewidywał albo mógł przewidzieć.</p>
                </>,
                id: 9,
                active: false,
            },
            {
                nrArt: "Art. 10. Wiek sprawcy a odpowiedzialność karna",
                txtArt: <>
                    <p>§ 1. Na zasadach określonych w tym kodeksie odpowiada ten, kto popełnia czyn zabroniony po ukończeniu 17 lat.</p>
                    <p>§ 2. Nieletni, który po ukończeniu 15 lat dopuszcza się czynu zabronionego określonego w art. 134 <span className="quotation">zamach na życie Prezydenta RP</span>, art. 148 <span className="quotation">zabójstwo § 1, 2 lub 3</span>, art. 156 <span className="quotation">spowodowanie ciężkiego uszczerbku na zdrowiu § 1 lub 3</span>, art. 163 <span className="quotation">sprowadzenie katastrofy § 1 lub 3</span>, art. 166 <span className="quotation">piractwo</span>, art. 173 <span className="quotation">sprowadzenie katastrofy w ruchu § 1 lub 3</span>, art. 197 <span className="quotation">zgwałcenie lub wymuszenie czynności seksualnej § 3 lub 4</span>, art. 223 <span className="quotation">czynna napaść na funkcjonariusza publicznego lub osobę do pomocy mu przybraną § 2</span>, art. 252 <span className="quotation">wzięcie lub przetrzymywanie zakładnika § 1 lub 2</span> oraz w art. 280 <span className="quotation">rozbój</span> , może odpowiadać na zasadach określonych w tym kodeksie, jeżeli okoliczności sprawy oraz stopień rozwoju sprawcy, jego właściwości i warunki osobiste za tym przemawiają, a w szczególności, jeżeli poprzednio stosowane środki wychowawcze lub poprawcze okazały się bezskuteczne.</p>
                    <p>§ 3. W wypadku określonym w § 2 orzeczona kara nie może przekroczyć dwóch trzecich górnej granicy ustawowego zagrożenia przewidzianego za przypisane sprawcy przestępstwo; sąd może zastosować także nadzwyczajne złagodzenie kary.</p>
                    <p>§ 4. W stosunku do sprawcy, który popełnił występek po ukończeniu lat 17, lecz przed ukończeniem lat 18, sąd zamiast kary stosuje środki wychowawcze, lecznicze albo poprawcze przewidziane dla nieletnich, jeżeli okoliczności sprawy oraz stopień rozwoju sprawcy, jego właściwości i warunki osobiste za tym przemawiają. </p>
                </>,
                id: 10,
                active: false,
            },
            {
                nrArt: "Art. 11. Jedność czynu, kumulatywny zbieg przepisów ustawy",
                txtArt: <>
                    <p>§ 1. Ten sam czyn może stanowić tylko jedno przestępstwo.</p>
                    <p>§ 2. Jeżeli czyn wyczerpuje znamiona określone w dwóch albo więcej przepisach ustawy karnej, sąd skazuje za jedno przestępstwo na podstawie wszystkich zbiegających się przepisów.</p>
                    <p>§ 3. W wypadku określonym w § 2 sąd wymierza karę na podstawie przepisu przewidującego karę najsurowszą, co nie stoi na przeszkodzie orzeczeniu innych środków przewidzianych w ustawie na podstawie wszystkich zbiegających się przepisów.</p>
                </>,
                id: 11,
                active: false,
            },
            {
                nrArt: "Art. 12. Wielość zachowań, czyn ciągły",
                txtArt: <>
                    <p>§ 1. Dwa lub więcej zachowań, podjętych w krótkich odstępach czasu w wykonaniu z góry powziętego zamiaru, uważa się za jeden czyn zabroniony; jeżeli przedmiotem zamachu jest dobro osobiste, warunkiem uznania wielości zachowań za jeden czyn zabroniony jest tożsamość pokrzywdzonego.</p>
                    <p>§ 2. Odpowiada jak za jeden czyn zabroniony wyczerpujący znamiona przestępstwa ten, kto w krótkich odstępach czasu, przy wykorzystaniu tej samej albo takiej samej sposobności lub w podobny sposób popełnia dwa lub więcej umyślnych wykroczeń przeciwko mieniu, jeżeli łączna wartość mienia uzasadnia odpowiedzialność za przestępstwo. </p>
                </>,
                id: 12,
                active: false,
            }

        ],
        KodeksKarnyDzial1Rozdzial2: [
            {
                nrArt: "Art. 13. Odpowiedzialność za usiłowanie udolne i nieudolne",
                txtArt: <>
                    <p>§ 1. Odpowiada za usiłowanie, kto w zamiarze popełnienia czynu zabronionego swoim zachowaniem bezpośrednio zmierza do jego dokonania, które jednak nie następuje.</p>
                    <p>§ 2. Usiłowanie zachodzi także wtedy, gdy sprawca nie uświadamia sobie, że dokonanie jest niemożliwe ze względu na brak przedmiotu nadającego się do popełnienia na nim czynu zabronionego lub ze względu na użycie środka nie nadającego się do popełnienia czynu zabronionego.</p>
                </>,
                id: 13,
                active: false,
            },
            {
                nrArt: "Art. 14. Wymiar kary za usiłowanie",
                txtArt: <>
                    <p>§ 1. Sąd wymierza karę za usiłowanie w granicach zagrożenia przewidzianego dla danego przestępstwa.</p>
                    <p>§ 2. W wypadku określonym w art. 13 <span className="quotation">odpowiedzialność za usiłowanie udolne i nieudolne</span> § 2 sąd może zastosować nadzwyczajne złagodzenie kary, a nawet odstąpić od jej wymierzenia. </p></>,
                id: 14,
                active: false,
            },
            {
                nrArt: "Art. 15. Bezkarność usiłowania",
                txtArt: <>
                    <p>§ 1. Nie podlega karze za usiłowanie, kto dobrowolnie odstąpił od dokonania lub zapobiegł skutkowi stanowiącemu znamię czynu zabronionego.</p>
                    <p>§ 2. Sąd może zastosować nadzwyczajne złagodzenie kary w stosunku do sprawcy, który dobrowolnie starał się zapobiec skutkowi stanowiącemu znamię czynu zabronionego.</p></>,
                id: 15,
                active: false,
            },
            {
                nrArt: "Art. 16. Odpowiedzialność za przygotowanie",
                txtArt: <>
                    <p>§ 1. Przygotowanie zachodzi tylko wtedy, gdy sprawca w celu popełnienia czynu zabronionego podejmuje czynności mające stworzyć warunki do przedsięwzięcia czynu zmierzającego bezpośrednio do jego dokonania, w szczególności w tymże celu wchodzi w porozumienie z inną osobą, uzyskuje lub przysposabia środki, zbiera informacje lub sporządza plan działania.</p>
                    <p>§ 2. Przygotowanie jest karalne tylko wtedy, gdy ustawa tak stanowi.</p></>,
                id: 16,
                active: false,
            },
            {
                nrArt: "Art. 17. Dobrowolne odstąpienia od przygotowania",
                txtArt: <>
                    <p>§ 1. Nie podlega karze za przygotowanie, kto dobrowolnie od niego odstąpił, w szczególności zniszczył przygotowane środki lub zapobiegł skorzystaniu z nich w przyszłości; w razie wejścia w porozumienie z inną osobą w celu popełnienia czynu zabronionego, nie podlega karze ten, kto nadto podjął istotne starania zmierzające do zapobieżenia dokonaniu.</p>
                    <p>§ 2. Nie podlega karze za przygotowanie osoba, do której stosuje się art. 15 <span className="quotation">bezkarność usiłowania</span> § 1. </p></>,
                id: 17,
                active: false,
            },
            {
                nrArt: "Art. 18. Formy zjawiskowe czynu karalnego",
                txtArt: <>
                    <p>§ 1. Odpowiada za sprawstwo nie tylko ten, kto wykonuje czyn zabroniony sam albo wspólnie i w porozumieniu z inną osobą, ale także ten, kto kieruje wykonaniem czynu zabronionego przez inną osobę lub wykorzystując uzależnienie innej osoby od siebie, poleca jej wykonanie takiego czynu.</p>
                    <p>§ 2. Odpowiada za podżeganie, kto chcąc, aby inna osoba dokonała czynu zabronionego, nakłania ją do tego.</p>
                    <p>§ 3. Odpowiada za pomocnictwo, kto w zamiarze, aby inna osoba dokonała czynu zabronionego, swoim zachowaniem ułatwia jego popełnienie, w szczególności dostarczając narzędzie, środek przewozu, udzielając rady lub informacji; odpowiada za pomocnictwo także ten, kto wbrew prawnemu, szczególnemu obowiązkowi niedopuszczenia do popełnienia czynu zabronionego swoim zaniechaniem ułatwia innej osobie jego popełnienie.</p></>,
                id: 18,
                active: false,
            },
            {
                nrArt: "Art. 19. Wymiar kary za podżeganie i pomocnictwo",
                txtArt: <>
                    <p>§ 1. Sąd wymierza karę za podżeganie lub pomocnictwo w granicach zagrożenia przewidzianego za sprawstwo.</p>
                    <p>§ 2. Wymierzając karę za pomocnictwo sąd może zastosować nadzwyczajne złagodzenie kary.</p></>,
                id: 19,
                active: false,
            },
            {
                nrArt: "Art. 20. Niezależność odpowiedzialności współdziałających",
                txtArt: <><p>Każdy ze współdziałających w popełnieniu czynu zabronionego odpowiada w granicach swojej umyślności lub nieumyślności niezależnie od odpowiedzialności pozostałych współdziałających. </p></>,
                id: 20,
                active: false,
            },
            {
                nrArt: "Art. 21. Indywidualizacja odpowiedzialności karnej",
                txtArt: <>
                    <p>§ 1. Okoliczności osobiste, wyłączające lub łagodzące albo zaostrzające odpowiedzialność karną, uwzględnia się tylko co do osoby, której dotyczą.</p>
                    <p>§ 2. Jeżeli okoliczność osobista dotycząca sprawcy, wpływająca chociażby tylko na wyższą karalność, stanowi znamię czynu zabronionego, współdziałający podlega odpowiedzialności karnej przewidzianej za ten czyn zabroniony, gdy o tej okoliczności wiedział, chociażby go nie dotyczyła.</p>
                    <p>§ 3. Wobec współdziałającego, którego nie dotyczy okoliczność określona w § 2, sąd może zastosować nadzwyczajne złagodzenie kary.</p></>,
                id: 21,
                active: false,
            },
            {
                nrArt: "Art. 22. Odpowiedzialność podżegacza i pomocnika za usiłowanie",
                txtArt: <>
                    <p>§ 1. Jeżeli czynu zabronionego tylko usiłowano dokonać, podmiot określony w art. 18 <span className="quotation">formy zjawiskowe czynu karalnego</span> § 2 i 3 odpowiada jak za usiłowanie.</p>
                    <p>§ 2. Jeżeli czynu zabronionego nie usiłowano dokonać, sąd może zastosować nadzwyczajne złagodzenie kary, a nawet odstąpić od jej wymierzenia. </p></>,
                id: 22,
                active: false,
            },
            {
                nrArt: "Art. 23. Czynny żal współdziałającego",
                txtArt: <>
                    <p>§ 1. Nie podlega karze współdziałający, który dobrowolnie zapobiegł dokonaniu czynu zabronionego.</p>
                    <p>§ 2. Sąd może zastosować nadzwyczajne złagodzenie kary w stosunku do współdziałającego, który dobrowolnie starał się zapobiec dokonaniu czynu zabronionego.</p></>,
                id: 23,
                active: false,
            },
            {
                nrArt: "Art. 24. Odpowiedzialność za prowokację",
                txtArt: <><p>Odpowiada jak za podżeganie, kto w celu skierowania przeciwko innej osobie postępowania karnego nakłania ją do popełnienia czynu zabronionego; w tym wypadku nie stosuje się art. 22 <span className="quotation">odpowiedzialność podżegacza i pomocnika za usiłowanie</span> i art. 23 <span className="quotation">czynny żal współdziałającego</span>. </p></>,
                id: 24,
                active: false,
            },
        ],
        KodeksKarnyDzial1Rozdzial3: [
            {
                nrArt: "",
                txtArt: <></>,
                id: 25,
                active: false,
            },
            {
                nrArt: "",
                txtArt: <></>,
                id: 26,
                active: false,
            },
            {
                nrArt: "",
                txtArt: <></>,
                id: 27,
                active: false,
            },
            {
                nrArt: "",
                txtArt: <></>,
                id: 28,
                active: false,
            },
            {
                nrArt: "",
                txtArt: <></>,
                id: 29,
                active: false,
            },
            {
                nrArt: "",
                txtArt: <></>,
                id: 30,
                active: false,
            },
            {
                nrArt: "",
                txtArt: <></>,
                id: 31,
                active: false,
            },
            {
                nrArt: "",
                txtArt: <></>,
                id: 0,
                active: false,
            },
        ]
    }

    hendlerClickShowArticle = (id) => {
        const { KodeksKarnyDzial1Rozdzial1 } = this.state;
        const { KodeksKarnyDzial1Rozdzial2 } = this.state;
        // połączenie tablic z obiektami w celu uzyskania dostępu do id
        const articleLaw = KodeksKarnyDzial1Rozdzial1.concat(KodeksKarnyDzial1Rozdzial2);
        const KK = articleLaw.map(item => {
            if (id === item.id) {
                item.active = !item.active
            }
            return item
        })
        console.log(id)
        this.setState({
            KK
        })
    }

    render() {
        const { KodeksKarnyDzial1Rozdzial1 } = this.state;
        const { KodeksKarnyDzial1Rozdzial2 } = this.state;
        return (
            <>
                <Section
                    name="Część ogólna"
                    art={[KodeksKarnyDzial1Rozdzial1, KodeksKarnyDzial1Rozdzial2]}
                    chapterName={["Rozdział I. Zasady odpowiedzialności karnej", "Rozdział II. Formy popełnienia przestępstwa"]}
                    change={this.hendlerClickShowArticle} />

            </>
        )
    }
}


const Art = (props) => {
    return (
        props.art.map(art => (
            <div className='legalNorm' key={art.id} >
                <h3 className='nrArt' onClick={() => props.change(art.id)}>{art.nrArt}</h3>
                {art.active ? <div className='txtArt'>{art.txtArt}</div> : null}
            </div>)
        )
    )
}

const Section = (props) => {
    return (
        <>
            <h1 className="section">{props.name}</h1>
            <Chapter name={props.chapterName[0]} />
            <Art art={props.art[0]} change={props.change} />
            <Chapter name={[props.chapterName[1]]} />
            <Art art={props.art[1]} change={props.change} />
        </>
    )
}

const Chapter = (props) => {
    return (
        <h3 className="chapter">{props.name}</h3>
    )
}




{/* <span className="quotation"></span>  */ }