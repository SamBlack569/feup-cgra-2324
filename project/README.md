# CG 2023/2024

## Group T07G08

## Project Notes

### 1 - Sky Sphere

#### 1.1 - Criação de uma esfera

- Para a criação desta esfera, criamos a classe `MySphere` e foi necessário ter em atenção os vértices que estavam a ser usados, de modo a não os repetir e fazer este algoritmo o mais eficiente possível. Depois, foi apenas necessário definir a textura em `MyScene` e aplicá-la.

#### 1.2 - 1.2 Adição de Panoramas

- O primeiro passo foi alterar a classe `MySphere`, de modo a a textura poder ser visível por dentro ou por fora.

- Depois, criamos a classe `MyPanorama`, que cria uma esfera com uma textura visível por dentro, e no método `display`, usa a posição da câmara como centro.

![Screenshot 1](screenshots/CG-t07g08-project-1.png)
