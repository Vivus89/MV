<?php get_header(); ?>

<div class="row">
  <div class="span8">

	<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
    <div class="col-lg-8 col-lg-offset-2 text-center">
      <h2 class="section-heading " style="color:#fff"> <?php the_title(); ?></h2>
      <hr class="light">
      
	  	<?php the_content(); ?>

	<?php endwhile; else: ?>
		<p><?php _e('Sorry, this page does not exist.'); ?></p>
	<?php endif; ?>

  </div>
  <div class="span4">
    <?php get_sidebar(); ?>
  </div>
</div>
</div>



<?php get_footer(); ?>
