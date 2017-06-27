<!DOCTYPE html>
<html lang="en">

<head>

  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="">
  <meta name="author" content="">

  <title><?php wp_title('|',1,'right'); ?> <?php bloginfo('name'); ?></title>


  <link href="<?php bloginfo('stylesheet_url');?>" rel="stylesheet">
  <?php wp_enqueue_script("jquery"); ?>
  <?php wp_head(); ?>


  <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
  <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
  <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->

</head>


<body>


  <nav id="mainNav" class="navbar navbar-default navbar-fixed-top ">
    <div class="container-fluid">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span class="sr-only">Toggle navigation</span> Menu <i class="fa fa-bars"></i>
                </button>
        <a class="navbar-brand page-scroll" href="#page-top">Vivien Maillard</a>
      </div>

      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav navbar-right">

          <?php bootstrap_nav(); ?>


        </ul>
      </div>
      <!-- /.navbar-collapse -->
    </div>
    <!-- /.container-fluid -->

  </nav>

  <header class="container-fluid ">





    <div class="header-content " id="accueil">
      <div class="feature" id="featureAnimation">
        <div class="header-content-inner">



          <h1 class="test1">Je suis développeur front et back</h1>


          <hr>

        </div>

      </div>



  </header>

  <div class="container">
