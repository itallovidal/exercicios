$fonte:;
$font-tamanho-h2: .7rem;
$font-tamanho-p: .8rem;
$cor-texto: ;

$cor-primaria: ;
$cor-secundaria: ;

$esp-grande: 8%;
$esp-medio: 5%;
$esp-pequeno: 3%;


:root{
    font-size: 16px;
}

*{
    box-sizing: border-box;
    padding: 0;
    margin: 0 auto;
    max-height: fit-content;
}

body{
    background-image: linear-gradient(90deg, $cor-primaria, $cor-secundaria);
    height: 100svh;
    display: grid;
    place-content: center;
}

@mixin flexboxConfig($justify: center, $align: center, $direction: row)
{
    display: flex;
    justify-content: $justify;
    align-items: $align;
    flex-direction: $direction;
}

///////////////////////

CDN do FontAwesome
<script src="https://kit.fontawesome.com/782e4cfd7d.js" crossorigin="anonymous"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
