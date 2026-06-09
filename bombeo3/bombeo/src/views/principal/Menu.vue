<template>
    <div class ="continer-fluid"> 
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
        <router-link class="navbar-brand" to="/">Menu</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
            <li class="nav-item">
                <router-link class="nav-link active" aria-current="page" to="/editar">Editar Dispositivo</router-link>
            </li>
            <li class="nav-item">
            <router-link class="nav-link" to="/lista">Lista Dispositivos</router-link>
            </li>
            <li class="nav-item">
            <router-link class="nav-link" to="/listaTarjetas">Lista tarjetas</router-link>
            </li>
            <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown link
            </a>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
            </li>
        </ul>
        </div>
    </div>
    </nav>
    <div class="continer-fluid">
        <RouterView/>
    </div>

    </div>
</template>

<script>
export default {
    name: 'Menu',
    components: {

    }, 
    props:{

    }
}
</script>