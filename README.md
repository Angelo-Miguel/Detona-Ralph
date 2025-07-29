# Detona Ralph - Jogo Whack-a-Mole

Projeto desenvolvido como desafio da DIO, inspirado no clássico jogo "Whack-a-Mole", com tema do filme Detona Ralph.

## Como executar

1. Clone este repositório.
2. Abra o arquivo `index.html` em seu navegador.
Ou abra esse [link](https://angelo-miguel.github.io/Detona-Ralph/)

## Como jogar

- O objetivo é clicar no Ralph (personagem que aparece aleatoriamente nos quadrados verdes) o maior número de vezes possível antes do tempo acabar.
- Você começa com 3 vidas. Se clicar no lugar errado, perde uma vida.
- O jogo termina quando o tempo chega a zero ou quando todas as vidas acabam.

## Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript

## Estrutura do Projeto
```
.
├── index.html                 # Página principal do jogo
└── assets/
    ├── css/
    │   ├── reset.css          # Reset de estilos padrão
    │   └── style.css          # Estilos personalizados do jogo
    ├── img/
    │   ├── favRalph.png       # Favicon do Ralph
    │   ├── player.png         # Sprite ou imagem do jogador
    │   ├── ralph.png          # Imagem do personagem Ralph
    │   └── wall.png           # Imagem da parede (obstáculo/cenário)
    ├── js/
    │   └── engine.js          # Script com a lógica principal do jogo
    └── sounds/
        └── hit.m4a            # Efeito sonoro de impacto ou colisão
```

## Créditos

Desenvolvido por Angelo Miguel para o bootcamp da [DIO](https://www.dio.me/).

---

MIT License
