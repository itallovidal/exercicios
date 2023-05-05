$fonte: ;
$font-tamanho-h1: 2.5rem;
$font-tamanho-h2: 2rem;
$font-tamanho-h3: 1rem;
$font-tamanho-p1: .8rem;
$font-tamanho-p2: .5rem;

$cor-primaria: hsl(35, 77%, 62%);
$cor-secundaria: hsl(5, 85%, 63%);
$cor-terciaria: hsl(233, 8%, 79%);
$cor-quaternaria: hsl(236, 13%, 42%);
$cor-quinternaria: hsl(240, 100%, 5%);

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
    font-family: $fonte; 
}

a{
    text-decoration: none;
    color: black;
}

img{
    max-width: 100%;
}

body{
    // background-image: linear-gradient(90deg, $cor-primaria, $cor-secundaria); 
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
