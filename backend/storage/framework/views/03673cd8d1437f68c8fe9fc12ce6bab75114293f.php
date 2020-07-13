<!doctype html>
<html class="no-js" lang="<?php echo e(app()->getLocale()); ?>">
    <head>
       
    <title>Lautech Alumni</title>
    
        <?php echo $__env->make('layouts.head', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>
    </head>
    <body>
        <div class="flex-center position-ref full-height"> 
    <?php echo $__env->make('layouts.header', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>
   
      <?php echo $__env->yieldContent('content'); ?>

    </div>  
    <?php echo $__env->make('layouts.footer', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>    
    <?php echo $__env->make('layouts.footer-script', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>    
    </body>
</html>