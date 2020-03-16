<template>
<aside class="main-sidebar sidebar-dark-primary elevation-4">
  <!-- Brand Logo -->
  <a href="#" class="brand-link">
    <span class="brand-text font-weight-light" style="color:#fff">HR APP</span>
  </a>

  <!-- Sidebar -->
  <div class="sidebar">
    <!-- Sidebar user (optional) -->
    <div class="user-panel mt-3 pb-3 mb-3 d-flex">
      <div class="image">
        <a href="/data-details">
          <img src="../../assets/img/user8-128x128.jpg" class="img-circle elevation-2" alt="User Image">
        </a>
      </div>
      <div class="info">
        <a href="/data-details" class="d-block">Rifky Agasta</a>
      </div>
    </div>

    <!-- Sidebar Menu -->
    <nav class="mt-2">
      <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
        <!-- Add icons to the links using the .nav-icon class
             with font-awesome or any other icon font library -->
        <li class="nav-item has-treeview">
          <a href="/home" class="nav-link">
            <i class="nav-icon fas fa-laptop"></i>
            <p>
              Dashboard
              <!-- <i class="right fas fa-angle-left"></i> -->
            </p>
          </a>
          <!-- <ul class="nav nav-treeview">
            <li class="nav-item">
              <a href="../../index.html" class="nav-link">
                <p>Dashboard v1</p>
              </a>
            </li>
            <li class="nav-item">
              <a href="../../index2.html" class="nav-link">
                <p>Dashboard v2</p>
              </a>
            </li>
            <li class="nav-item">
              <a href="../../index3.html" class="nav-link">
                <p>Dashboard v3</p>
              </a>
            </li>
          </ul> -->
        </li>
        <li class="nav-item">
          <a href="/employee" class="nav-link">
            <i class="nav-icon fas fa-th"></i>
            <p>
              Employees
              <!-- <span class="right badge badge-danger">New</span> -->
            </p>
          </a>
        </li>
        <li class="nav-item has-treeview">
          <a href="#" class="nav-link">
            <i class="nav-icon fas fa-copy"></i>
            <p>
              Attendence
              <i class="fas fa-angle-left right"></i>
            </p>
          </a>
          <ul class="nav nav-treeview">
            <li class="nav-item">
              <a href="#" class="nav-link">
                <p>Presence</p>
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">
                <p>Leave Request</p>
              </a>
            </li>
          </ul>
        </li>
        <li class="nav-item has-treeview">
          <a href="#" class="nav-link">
            <i class="nav-icon fas fa-folder-open"></i>
            <p>
              Applicants
              <i class="right fas fa-angle-left"></i>
            </p>
          </a>
          <ul class="nav nav-treeview">
            <li class="nav-item">
              <a href="#" class="nav-link">
                <p>Unprocessed</p>
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">
                <p>Scheduled to Psycho Test</p>
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">
                <p>Unprocessed</p>
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">
                <p>Finish</p>
              </a>
            </li>
          </ul>
        </li>
        <li class="nav-item has-treeview">
          <a href="#" class="nav-link">
            <i class="nav-icon fas fa-edit"></i>
            <p>
              Forms
              <i class="fas fa-angle-left right"></i>
            </p>
          </a>
          <ul class="nav nav-treeview">
            <li class="nav-item">
              <a href="data-details" class="nav-link">
                <p>Add New Applicant</p>
              </a>
            </li>
          </ul>
        </li>
        <!-- <li class="nav-header">EXAMPLES</li> -->
      </ul>
    </nav>
    <!-- /.sidebar-menu -->
  </div>
  <!-- /.sidebar -->
</aside>
</template>