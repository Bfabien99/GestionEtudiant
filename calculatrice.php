<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Addition</h1>
    <?php
    function divisible($n){
        $compteur = 1;
        $diviseur = 2;
        $resultat=$n/$diviseur;
        while ($resultat >= $diviseur){
            $n = $resultat;
            $resultat = $n/$diviseur;
            $compteur++;
        }
        echo $compteur;
    }
    function rdivisible($n){
        
        $diviseur = 2;
        $resultat=$n/$diviseur;

        if($resultat >= $diviseur)
        {   
            $n=$resultat;
            return rdivisible($n);
        }

        else{
            return $resultat;
        }

    }
    echo rdivisible(8);
    
    ?>
</body>
</html>