<?php
/**
 * La configuration de base de votre installation WordPress.
 *
 * Ce fichier contient les réglages de configuration suivants : réglages MySQL,
 * préfixe de table, clés secrètes, langue utilisée, et ABSPATH.
 * Vous pouvez en savoir plus à leur sujet en allant sur
 * {@link http://codex.wordpress.org/fr:Modifier_wp-config.php Modifier
 * wp-config.php}. C’est votre hébergeur qui doit vous donner vos
 * codes MySQL.
 *
 * Ce fichier est utilisé par le script de création de wp-config.php pendant
 * le processus d’installation. Vous n’avez pas à utiliser le site web, vous
 * pouvez simplement renommer ce fichier en "wp-config.php" et remplir les
 * valeurs.
 *
 * @package WordPress
 */

// ** Réglages MySQL - Votre hébergeur doit vous fournir ces informations. ** //
/** Nom de la base de données de WordPress. */
define('DB_NAME', 'MV');

/** Utilisateur de la base de données MySQL. */
define('DB_USER', 'root');

/** Mot de passe de la base de données MySQL. */
define('DB_PASSWORD', 'Novembre');

/** Adresse de l’hébergement MySQL. */
define('DB_HOST', 'localhost');

/** Jeu de caractères à utiliser par la base de données lors de la création des tables. */
define('DB_CHARSET', 'utf8mb4');

/** Type de collation de la base de données.
  * N’y touchez que si vous savez ce que vous faites.
  */
define('DB_COLLATE', '');

/**#@+
 * Clés uniques d’authentification et salage.
 *
 * Remplacez les valeurs par défaut par des phrases uniques !
 * Vous pouvez générer des phrases aléatoires en utilisant
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ le service de clefs secrètes de WordPress.org}.
 * Vous pouvez modifier ces phrases à n’importe quel moment, afin d’invalider tous les cookies existants.
 * Cela forcera également tous les utilisateurs à se reconnecter.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'um-G(lr/!H9we-ig8zD]Q-@9M4n/Hiyjp_(M`iD-oLxK(~UMc1^b!||K7;FbF_6n');
define('SECURE_AUTH_KEY',  '5y`KtEE,<:zX$NL{`pGAyS)eqKw3_/5L82SChQGDD$3lhA;A_1U=)#ZQxtUr=IaI');
define('LOGGED_IN_KEY',    'T!dH23H$?+cqN1v2[AegjN3m6$.x;N+Gu(=5td %uMp7K)8g701b5~fTYw`I73sn');
define('NONCE_KEY',        '}R@1C ih;nax,!0ZT@GlI}rxI[IVupM2!/|n}1lMY+SA4*aPQi@nR*WoUr)5tMWR');
define('AUTH_SALT',        'RUzuSm J/Qhr Gdr8+0I39%2]v]|213of%<F]|agIU,Z}X8s+.V{RdxY>:OF?4Zk');
define('SECURE_AUTH_SALT', 'GHL(Bw1M~<,kex+<P}jhx}gNh+X~vou8>d`o*OPi49(vqT4*w$8(-v2L`@QE_0lJ');
define('LOGGED_IN_SALT',   ']4jmWYhwqrUrKVC1dQixDM;K>}]|ssv(dQ0FZsJYn=gRTYXT:o+p:YaUOwg -Zl2');
define('NONCE_SALT',       'zCuxl_5:K8bZjd&krgbO#zo&J^;D? ui%MVCJ_*vYNYF=^B5^T$MK&eRR 7C0jm ');
/**#@-*/

/**
 * Préfixe de base de données pour les tables de WordPress.
 *
 * Vous pouvez installer plusieurs WordPress sur une seule base de données
 * si vous leur donnez chacune un préfixe unique.
 * N’utilisez que des chiffres, des lettres non-accentuées, et des caractères soulignés !
 */
$table_prefix  = 'wp_';

/**
 * Pour les développeurs : le mode déboguage de WordPress.
 *
 * En passant la valeur suivante à "true", vous activez l’affichage des
 * notifications d’erreurs pendant vos essais.
 * Il est fortemment recommandé que les développeurs d’extensions et
 * de thèmes se servent de WP_DEBUG dans leur environnement de
 * développement.
 *
 * Pour plus d’information sur les autres constantes qui peuvent être utilisées
 * pour le déboguage, rendez-vous sur le Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* C’est tout, ne touchez pas à ce qui suit ! */

/** Chemin absolu vers le dossier de WordPress. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Réglage des variables de WordPress et de ses fichiers inclus. */
require_once(ABSPATH . 'wp-settings.php');

//mettre à jour wordpress
define('FS_METHOD','direct');
