# click_listener_js
funções genéricas para facilitar a implementação de tabs, toggle menus, accordion e etc.

# Documentação

# Codepen com exemplos
https://codepen.io/mzakira/pen/mdXqpRm

# tab click event

data-tab-listener="[nome-do-tab-event]"
-descrição: usado em um elemento html que deseje, usar como ouvinte, quando for clicado sobre o elemento irá acionar o evento e adicionar a classe active no -elemento que contenha data-tab-target e data-tab-group com o mesmo valor.

data-tab-target="[nome-do-tab-event]"
-descrição: usado no elemento que vai ser adicionado a classe active, terá de ter o mesmo valor no data-tab-listener e data-tab-group que o elemento ouvinte.

data-tab-group="[nome-do-tab-group]"
-descrição: usado para evitar conflito entre diferentes tabs de uma mesma página, tem de ser colocado nos elementos de mesmo grupo.

# toggle click event

data-toggle-listener="[nome-do-toggle-event]"
-descrição: usado em um elemento html que deseje, usar como ouvinte, quando for clicado sobre o elemento irá acionar o evento e adicionar a classe active no -elemento que contenha data-toggle-target com o mesmo valor.

data-toggle-target="[nome-do-toggle-event]"
-descrição: usado no elemento que vai ser adicionado a classe active, terá de ter o mesmo valor no data-toggle-listener que o elemento ouvinte.

# add click event

data-add-listener="[nome-do-add-event]"
-descrição: usado em um elemento html que deseje, usar como ouvinte, quando for clicado sobre o elemento irá acionar o evento e adicionar a classe active no -elemento que contenha data-toggle-target com o mesmo valor.

data-add-target="[nome-do-add-event]"
-descrição: usado no elemento que vai ser adicionado a classe active, terá de ter o mesmo valor no data-toggle-listener que o elemento ouvinte.

# remove click event

data-remove-listener="[nome-do-remove-event]"
-descrição: usado em um elemento html que deseje, usar como ouvinte, quando for clicado sobre o elemento irá acionar o evento e adicionar a classe active no -elemento que contenha data-toggle-target com o mesmo valor.

data-remove-target="[nome-do-remove-event]"
-descrição: usado no elemento que vai ser adicionado a classe active, terá de ter o mesmo valor no data-toggle-listener que o elemento ouvinte.
