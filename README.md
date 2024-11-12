<!DOCTYPE html>
<html lang="pt-br"> <!-- html -->

<head> <!-- cabeçalho -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <link rel="stylesheet" href="css/style.css">
    <link rel="icon" href="img/download.png" type="image/x-icon">
    <title>Document</title>
    <!-- Reset básico -->
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Arial', sans-serif;
            background-color: #f3f7f9;
            color: #333;
            line-height: 1.6;
        }

        /* Cabeçalho */
        header {
            background-color: #87CEFA;
            color: #000000;
            padding: 30px;
            text-align: center;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }

        header h1 {
            font-size: 2.5rem;
            margin-bottom: 10px;
        }

        header p {
            font-size: 1.2rem;
        }

        /* Navegação */
        nav ul {
            display: flex;
            justify-content: center;
            list-style-type: none;
            background-color: #333;
            margin: 0;
            padding: 10px 0;
        }

        nav ul li {
            margin: 0 15px;
        }

        nav ul li a {
            color: #fff;
            text-decoration: none;
            font-size: 1.1rem;
        }

        nav ul li a:hover {
            color: #6A5ACD;
        }

        /* Cards */
        .card {
            background-color: #fff;
            margin: 20px auto;
            padding: 20px;
            max-width: 800px;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.397);
        }

        .card h2 {
            color: #000000;
            font-size: 1.8rem;
            margin-bottom: 10px;
        }

        .card hr {
            color: #059196;
            padding: 2px;
            background-color: #056669;
            width: 100%;
            border: 1px solid #07eaf1;
        }

        .card p {
            font-size: 1.1rem;
            color: #000000;
        }

        /* Botão */
        button {
            background-color: #87CEFA;
            color: rgb(0, 0, 0);
            border: none;
            padding: 10px 20px;
            border-radius: 5px;
            cursor: pointer;
            font-size: 1rem;
            transition: background-color 0.3s;
        }

        button:hover {
            background-color: #0acfc5;
        }

        /* Rodapé */
        footer {
            background-color: #333;
            color: white;
            text-align: center;
            padding: 15px 0;
            margin-top: 20px;
        }

        footer ul {
            margin: 0;
            padding: 0;
            text-align: justify;
            justify-self: center;
        }

        /* Dicas ocultas */
        #dicas-info {
            display: none;
            background-color: #e8f8f5;
            padding: 10px;
            border-radius: 5px;
            margin-top: 10px;
        }
    </style>
</head>

<body> <!-- corpo do site -->
    <header>
        <h1>Problemas Respiratórios em Crianças</h1>
        <p>Informações e dicas para cuidar da saúde respiratória dos pequenos</p>
    </header>

    <nav> <!-- navegação -->
        <ul>
            <li>
                <a href="#causas">Causas</a>
            </li>
            <li>
                <a href="#sintomas">Sintomas</a>
            </li>
            <li>
                <a href="#tratamento">Tratamento</a>
            </li>
            <li>
                <a href="#prevencao">Prevenção</a>
            </li>
            <li>
                <a href="#contatos">Contatos</a>
            </li>
        </ul>
    </nav>

    <main> <!-- conteúdo principal -->
        <section id="introdução" class="card"> <!-- parte da introdução -->
            <h2> Introdução </h2>
            <hr>
            <p> As doenças respiratórias são um problema de saúde comum em crianças e podem variar de leves a graves.
                Elas
                afetam o sistema respiratório, que inclui o nariz, garganta, traqueia, brônquios e pulmões. Entre as
                mais
                frequentes estão a asma, bronquite e pneumonia. A compreensão das causas, sintomas e formas de
                tratamento
                dessas doenças é essencial para garantir o bem-estar das crianças. </p>
        </section>

        <section id="causas" class="card"> <!-- parte das causas -->
            <h2> Causas </h2>
            <hr>
            <p> As doenças respiratórias nas crianças podem ser causadas por inúmeros fatores. Por exemplo, infecções
                virais, bactérias e também condições alérgicas. Como as crianças tem um sistema imunológico mais frágil,
                pois ainda está em desenvolvimento, tendem a ser mais suscetíveis as doenças pulmonares.

                Além disso, contato com poeira, ácaros e poluição do ar podem causar crises respiratórias.
                Principalmente em
                crianças que vivem na cidade, pois são mais expostas a poluição e particulas que podem irritar o
                sistemas
                respiratório, podendo desenvolver rinites alérgicas e asma, por exemplo.</p>
            <imgsrc="https://www.escolaespacoeducar.com.br/novo/wp-content/uploads/2023/05/teleconsulta-medica-para-paciente-doente-em-casa-880x587.jpg"
                style="display: block; margin: 0 auto; width: 300px;">

        </section>

        <section id="sintomas" class="card"> <!-- parte dos sintomas -->
            <h2> Sintomas </h2>
            <hr>
            <p>
                É comum que bebês e crianças possam enfrentar esses problemas como resfriados e gripes, sinusite, rinite
                alérgica, otite, pneumonia, asma, entre outras, justamente por não terem o sistema imunológico bem
                desenvolvido.

                Os principais sintomas das doenças respiratórias são a tosse, a secreção e a obstrução nasal, o
                mal-estar,
                além de dores no corpo, na cabeça e na garganta. Em alguns casos, pode até ter diarreia e vômitos, e a
                febre
                pode estar presente ou não.

                As doenças respiratórias podem ir de um simples resfriado a uma pneumonia. Por isso, é preciso saber
                reconhecer os sinais de alarme que levam a um cansaço importante e falta de ar. Se a criança estiver
                resfriada ou gripada, com ou sem febre, mas apresentando esses sintomas, é preciso levá-la imediatamente
                ao
                médico
            </p>
            <img src="https://neurolife.com.br/wp-content/uploads/2021/12/blog-22.png"
                style="display: block; margin: 0 auto; width: 300px;">
        </section>

        <section id="tratamento" class="card"> <!-- parte do tratamento -->
            <h2> Tratamento </h2>
            <hr>
            <p>
                O tratamento das doenças respiratórias em crianças depende da causa e da gravidade dos sintomas. Em
                casos
                leves, como resfriados comuns, o tratamento pode incluir repouso, ingestão de líquidos e o uso de
                antitérmicos para aliviar a febre.

                Para condições mais graves, como asma ou bronquiolite, o tratamento pode envolver o uso de medicamentos
                específicos, como broncodilatadores e corticoides. Em casos de infecção bacteriana, antibióticos podem
                ser
                necessários.

                Sempre consulte um médico para um diagnóstico preciso e um plano de tratamento adequado. Nunca
                automedique
                seu filho sem orientação profissional, pois isso pode agravar o quadro e causar complicações.
            </p>
            <img src="https://blog.mobimed.com.br/wp-content/uploads/2023/10/problemas-respiratorios-doencas-causas-sintomas-dicas.jpg"
                style="display: block; margin: 0 auto; width: 300px;">

        </section>

        <section id="prevencao" class="card"> <!-- parte da prevenção -->
            <h2> Prevenção </h2>
            <hr>
            <p>
                Para prevenir doenças respiratórias em crianças, é essencial manter a vacinação em dia, garantir a
                higiene
                frequente das mãos e manter os ambientes limpos e ventilados.
                Evitar aglomerações durante surtos de doenças e não expor as crianças ao fumo passivo também são medidas
                importantes. A amamentação fortalece o sistema imunológico, assim como uma alimentação saudável e uma
                boa
                hidratação.
                Em casos de epidemias, como a COVID-19, o uso de máscaras e o distanciamento social ajudam a proteger as
                crianças.
                <img src="https://blog.mobimed.com.br/wp-content/uploads/2023/10/problemas-respiratorios-bronquite.jpg"
                    style="display: block; margin: 0 auto; width: 300px;">
            </p>
        </section>

        <section id="dicas" class="card"> <!-- parte das dicas -->
            <h2>Dicas</h2>
            <p>Para cuidar da saúde respiratória dos pequenos, siga essas dicas essenciais:</p>
            <button onclick="mostrarDicas()">Mostrar Dicas</button>
            <p id="dicas-info" style="display: none;">
                <strong>1.</strong> Garanta que o quarto da criança esteja livre de mofo e umidade, já que esses fatores
                contribuem para alergias.<br>
                <strong>2.</strong> Incentive atividades ao ar livre, pois o exercício físico ajuda a fortalecer o
                sistema respiratório.<br>
                <strong>3.</strong> Evite carpetes e tapetes, pois acumulam poeira e dificultam a limpeza adequada.<br>
                <strong>4.</strong> Lave as roupas de cama frequentemente com água quente para eliminar ácaros.<br>
                <strong>5.</strong> Consulte um pediatra regularmente para avaliações de saúde e possíveis vacinas
                preventivas.
            </p>
        </section>

    </main>
    <footer> <!-- rodapé -->
        <section id="contatos" class="card">
            <h1>Contatos</h1>
            <ul>
                <i class="fas fa-envelope"></i> Guilherme Filippo - <a
                    href="mailto:guilhermefilippo05@gmail.com">guilhermefilippo05@gmail.com</a>
                <br>
                <i class="fas fa-envelope"></i> Lucas Gabriel - <a
                    href="mailto:lucaspoderoso06@gmail.com">lucaspoderoso06@gmail.com</a>
                <br>
                <i class="fas fa-envelope"></i> Mateus Henrique - <a
                    href="mailto:mateuscunha007@outlook.com">mateuscunha007@outlook.com</a>
            </ul>
        </section>
        <hr>
        <p>&copy; 2024 Informações sobre Saúde Infantil</p>
    </footer>

    <script src="js/script.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
        crossorigin="anonymous"></script>
    <script>

        function mostrarDicas() {
            const dicasInfo = document.getElementById("dicas-info");
            if (dicasInfo.style.display === "none") {
                dicasInfo.style.display = "block";
            } else {
                dicasInfo.style.display = "none";
            }
        }

    </script>
</body>

</html>
