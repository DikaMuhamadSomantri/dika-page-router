<template>  
 
 <div id="wrapper">

        <!-- Sidebar -->
        <div id="sidebar-wrapper">
            <ul class="sidebar-nav">
                <li class="sidebar-brand">
                    <router-link to="/">Dashboard</router-link>
                </li>
                <li>
                    <router-link to="/profitability">Profitability Report</router-link>
                </li>
                <li>
                    <router-link to="/cost-report">Cost-Report</router-link>
                </li>
                <li>
                    <router-link to="/longtime">Longtime Report</router-link>
                </li>
            </ul>

        </div>
<!-- ATASAN NAVBAR-->
        <nav class="sb-topnav navbar navbar-expand navbar-dark bg-dark">
<!-- Navbar Search-->
            <form class="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
                <div class="input-group">
                    <input class="form-control" type="text" placeholder="Search for..." aria-label="Search for..." aria-describedby="btnNavbarSearch" />
                    <button class="btn btn-primary" id="btnNavbarSearch" type="button"><i class="fas fa-search"></i></button>
                </div>
            </form>

        </nav>
<!-- /#sidebar-wrapper -->

<!-- Manggil Konten -->
         <router-view />
<!-- selesai manggil kontent -->

    </div>

</template>

<script>
import 'https://use.fontawesome.com/releases/v6.1.0/js/all.js'


</script>

<style>
@import url('https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css');
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,400i,500');
@import './assets/css/style.css';

</style>
