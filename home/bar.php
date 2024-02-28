<!DOCTYPE html>
<html lang="pt-br">


<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>WEATHER</title>
    <link rel="stylesheet" href="bar.css">
    <script>
        function executePHP() {
            // Usando ajax para executar o arquivo PHP
            var xhr = new XMLHttpRequest();
            xhr.open('GET', 'executarPython.php', true);
            xhr.send();
        }

        // Execute a função a cada 1 minuto (em milissegundos)
        setInterval(executePHP, 900000);
        console.log("Executando");
    </script>
    <?php

    if (isset($_GET['cidade'])) {
        $cidade = $_GET['cidade'];


        $xml = simplexml_load_file('feed.xml');


        if ($cidade === 'sorocaba-sp' || $cidade === 'valenca-rj') {
            $cityData = $xml->channel->item->regionalweather->$cidade ?? null;

            if ($cityData !== null) {
                $imgVar = (string) $cityData->imgVar;
                $imgVar2 = (string) $cityData->imgVar2;
                $weather = (string) $cityData->weather;
                $maxtemp = (string) $cityData->maxtemp;
                $mintemp = (string) $cityData->mintemp;
            } else {

                echo "Cidade '$cidade' não encontrada.";
            }
        }
    } else {
        // Handle the case when 'cidade' parameter is not set
        echo "Selecione uma cidade (valenca-rj ou sorocaba-sp).";
    }
    ?>





</head>

<body>
    <div class="bar-geral">
        <div class="hora-img"></div>
        <div class="hora"><a>|</a></div>
        <div class="temperatura-img"></div>
        <div class="temperatura"> <a><?php
                                        echo $weather;
                                        ?></a></div>
        <div class="moedas">
            <div class="dolar-img"></div>
            <div class="dolar"><a>|</a></div>
            <div class="euro-img"></div>
            <div class="euro"><a>|</a></div>
        </div>
        <div class="data"><a>|</a></div>
        <div class="logo"></div>
    </div>
    <div class="separador-1"></div>
    <div class="separador-2"></div>
    <div class="separador-3"></div>
    <div class="separador-4"></div>


    <!-- import script.js -->
    <script src="script.js"></script>
</body>

</html>