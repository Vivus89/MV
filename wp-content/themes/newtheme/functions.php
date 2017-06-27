<?php
// Register Custom Navigation Walker
require_once('wp-bootstrap-navwalker.php');

// Register YAMM Navigation Walker
require_once('yamm-nav-walker.php');

// Bootstrap navigation
function bootstrap_nav()
{
	wp_nav_menu( array(
        'theme_location'    => 'header-menu',
        'depth'             => 2,
        'container'         => 'false',
        'menu_class'        => 'nav navbar-nav',
        'fallback_cb'       => 'wp_bootstrap_navwalker::fallback',
        'walker'            => new wp_bootstrap_navwalker())
    );
}
// Bootstrap mega menu navigation
function bootstrap_megamenu_nav()
{
	wp_nav_menu( array(
        'theme_location'    => 'header-menu',
        'depth'             => 4,
        'container'         => 'div',
        'container_class'   => 'collapse navbar-collapse',
        'container_id'      => 'bootstrap-navbar-collapse-1',
        'menu_class'        => 'nav navbar-nav yamm',
        'fallback_cb'       => 'Yamm_Nav_Walker_menu_fallback',
        'walker'            => new Yamm_Nav_Walker())
    );
}

// The CSS files for your theme
function theme_styles() {

    wp_enqueue_style('yamm', get_template_directory_uri . '/startbootstrap-creative-gh-pages/css/yamm.css', array('bootstrap-theme'), '', 'all');
}

function wpbootstrap_scripts_with_jquery()
{
	// Register the script like this for a theme:
 wp_enqueue_script( 'custom-script', get_template_directory_uri() . '/startbootstrap-creative-gh-pages/vendor/jquery/jquery.min.js', array(  ) );









  // For either a plugin or a theme, you can then enqueue the script:
	wp_enqueue_script( 'custom-script' );
}
function bootstrap () {

    wp_enqueue_script('bootstrap', get_template_directory_uri() . '/startbootstrap-creative-gh-pages/vendor/bootstrap/js/bootstrap.min.js', array(  ),0.1, true);

}
function plugin1 (){
  wp_enqueue_script( 'plugin1', get_template_directory_uri() . '/startbootstrap-creative-gh-pages/vendor/scrollreveal/scrollreveal.min.js', array(  ),0.1, true );
}

function plugin2 (){
  wp_enqueue_script( 'plugin2', get_template_directory_uri() . '/startbootstrap-creative-gh-pages/vendor/magnific-popup/jquery.magnific-popup.min.js', array(  ),0.1, true );
}

function creative (){
  wp_enqueue_script( 'creative', get_template_directory_uri() . '/startbootstrap-creative-gh-pages/js/creative.min.js', array(  ),0.1, true );
}
function tweenmax1 (){
  wp_register_script( 'tweenmax1', 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/267285/jquery.textillate.js', array(  ),0.1, true );
	wp_enqueue_script('tweenmax1');
}

function tweenmax2 (){
  wp_register_script( 'tweenmax2', 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/267285/jquery.lettering.js', array(  ),0.1, true );
	wp_enqueue_script('tweenmax2');
}

function fichier1 (){
  wp_register_script( 'fichier1', 'https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js', array(  ),0.1, true );
	wp_enqueue_script('fichier1');
}

function fichier2 (){
  wp_enqueue_script( 'fichier2', get_template_directory_uri() . '/startbootstrap-creative-gh-pages/js/tweenmax.js', array(  ),0.1, true );
	wp_enqueue_script('fichier2');
}

function fichier3 (){
  wp_enqueue_script( 'fichier3', get_template_directory_uri() . '/startbootstrap-creative-gh-pages/js/script2.js', array(  ),0.1, true );
}

function fichier4 (){
  wp_enqueue_script( 'fichier4', get_template_directory_uri() . '/startbootstrap-creative-gh-pages/js/sequences.js', array(  ),0.1, true );
}


function register_header_menu() {
  register_nav_menu('header-menu',__( 'Header Menu' ));
}



// NE PAS METTRE CETTE BALISE
// A METTRE DANS VOTRE FICHIER functions.php
//* Ajouter le support de page pour les articles
add_post_type_support( 'post', 'page-attributes' );
//* Changer ordre d'affichage dans les pages d'archives des articles
add_action( 'pre_get_posts', 'gn_post_archive_order' );
function gn_post_archive_order( $query ) {
	if ( $query->is_main_query() && !is_admin() && $query->is_category() || $query->is_tag() ) {
		$query->set( 'orderby', 'menu_order' );
		$query->set('order','DESC');
	}
}

add_action( 'customize_register', 'starter_customize_register');

add_action( 'init', 'register_header_menu' );



add_action( 'wp_enqueue_scripts', 'wpbootstrap_scripts_with_jquery' );
add_action( 'wp_enqueue_scripts', 'bootstrap' );
add_action( 'wp_enqueue_scripts', 'plugin1' );
add_action( 'wp_enqueue_scripts', 'plugin2' );
add_action( 'wp_enqueue_scripts', 'creative' );
add_action( 'wp_enqueue_scripts', 'tweenmax1' );
add_action( 'wp_enqueue_scripts', 'tweenmax2' );
add_action( 'wp_enqueue_scripts', 'fichier1' );
add_action( 'wp_enqueue_scripts', 'fichier2' );
add_action( 'wp_enqueue_scripts', 'fichier3' );
add_action( 'wp_enqueue_scripts', 'fichier4' );

if ( function_exists('register_sidebar') )
	register_sidebar(array(
		'before_widget' => '',
		'after_widget' => '',
		'before_title' => '<h3>',
		'after_title' => '</h3>',
	));

?>
