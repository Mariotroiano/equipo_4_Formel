-- MariaDB dump 10.17  Distrib 10.4.13-MariaDB, for Win64 (AMD64)
--
-- Host: 127.0.0.1    Database: new_formel
-- ------------------------------------------------------
-- Server version	10.4.14-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `addresses`
--

DROP TABLE IF EXISTS `addresses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `addresses` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `city` varchar(100) NOT NULL,
  `province` varchar(100) NOT NULL,
  `postal_code` int(10) unsigned NOT NULL,
  `created_at` date NOT NULL,
  `updated_at` date NOT NULL,
  `user_id` int(10) unsigned NOT NULL,
  `deleted_at` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `address_user_idx` (`user_id`),
  CONSTRAINT `address_user` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=63 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `addresses`
--

LOCK TABLES `addresses` WRITE;
/*!40000 ALTER TABLE `addresses` DISABLE KEYS */;
INSERT INTO `addresses` VALUES (7,'giuffra 1153','El Palomar','Buenos Aires',1684,'2020-09-15','2020-09-15',12,NULL),(8,'giuffra 1153','El Palomar','Buenos Aires',1684,'2020-09-15','2020-09-15',12,NULL),(9,'giuffra 1153','El Palomar','Buenos Aires',1684,'2020-09-15','2020-09-15',12,NULL),(10,'giuffra 1153','El Palomar','Buenos Aires',1684,'2020-09-15','2020-09-15',12,NULL),(11,'giuffra 1153','El Palomar','Buenos Aires',1684,'2020-09-15','2020-09-15',12,NULL),(12,'giuffra 1153','El Palomar','Buenos Aires',1684,'2020-09-15','2020-09-15',12,NULL),(13,'giuffra 1153','El Palomar','Buenos Aires',1684,'2020-09-15','2020-09-15',12,NULL),(14,'giuffra 1153','El Palomar','Buenos Aires',1684,'2020-09-15','2020-09-15',12,NULL),(15,'giuffra 1153','El Palomar','Buenos Aires',1684,'2020-09-15','2020-09-15',12,NULL),(16,'giuffra 1153','El Palomar','Buenos Aires',1684,'2020-09-15','2020-09-15',12,NULL),(17,'giuffra 1153','El Palomar','Buenos Aires',1684,'2020-09-15','2020-09-15',12,NULL),(18,'giuffra 1153','El Palomar','Buenos Aires',1684,'2020-09-15','2020-09-15',12,NULL),(19,'giuffra 1153','El Palomar','Buenos Aires',1684,'2020-09-15','2020-09-15',12,NULL),(20,'giuffra 1153','El Palomar','Buenos Aires',1684,'2020-09-15','2020-09-15',12,NULL),(21,'giuffra 1153','El Palomar','Buenos Aires',1684,'2020-09-15','2020-09-15',12,NULL),(22,'giuffra 1153','El Palomar','Buenos Aires',1684,'2020-09-15','2020-09-15',12,NULL),(23,'giuffra 1153','El Palomar','Buenos Aires',1684,'2020-09-15','2020-09-15',12,NULL),(24,'giuffra 1153','El Palomar','Buenos Aires',1684,'2020-09-15','2020-09-15',12,NULL),(25,'giuffra 1153','El Palomar','Buenos Aires',1684,'2020-09-16','2020-09-16',12,NULL),(26,'giuffra 1153','El Palomar','Buenos Aires',1684,'2020-09-16','2020-09-16',12,NULL),(27,'giuffra 1153','El Palomar','Buenos Aires',1684,'2020-09-16','2020-09-16',12,NULL),(28,'giuffra 1153','El Palomar','Buenos Aires',1684,'2020-09-16','2020-09-16',12,NULL),(29,'giuffra 1153','El Palomar','Buenos Aires',1684,'2020-09-16','2020-09-16',12,NULL),(30,'giuffra 1153','El Palomar','Buenos Aires',1684,'2020-09-16','2020-09-16',12,NULL),(31,'giuffra 1153','El Palomar','Buenos Aires',1684,'2020-09-16','2020-09-16',12,NULL),(32,'giuffra 1153','El Palomar','Buenos Aires',1684,'2020-09-16','2020-09-16',12,NULL),(33,'giuffra 1153','El Palomar','Buenos Aires',1684,'2020-09-16','2020-09-16',12,NULL),(34,'giuffra 1153','El Palomar','Buenos Aires',1684,'2020-09-16','2020-09-16',12,NULL),(35,'giuffra 1153','El Palomar','Buenos Aires',1684,'2020-09-16','2020-09-16',12,NULL),(36,'giuffra 1153','El Palomar','Buenos Aires',1684,'2020-09-16','2020-09-16',12,NULL),(37,'giuffra 1153','El Palomar','Buenos Aires',1684,'2020-09-16','2020-09-16',12,NULL),(38,'giuffra 1153','El Palomar','Buenos Aires',1684,'2020-09-16','2020-09-16',12,NULL),(39,'giuffra 1153','El Palomar','Buenos Aires',1684,'2020-09-16','2020-09-16',12,NULL),(40,'giuffra 1153','El Palomar','Buenos Aires',1684,'2020-09-16','2020-09-16',12,NULL),(41,'giuffra 1153','El Palomar','Buenos Aires',1684,'2020-09-16','2020-09-16',12,NULL),(42,'giuffra 1153','El Palomar','Buenos Aires',1684,'2020-09-16','2020-09-16',12,NULL),(43,'giuffra 1153','El Palomar','Buenos Aires',1684,'2020-09-16','2020-09-16',12,NULL),(44,'giuffra 1153','El Palomar','Buenos Aires',1684,'2020-09-16','2020-09-16',12,NULL),(45,'giuffra 1153','El Palomar','Buenos Aires',1684,'2020-09-16','2020-09-16',12,NULL),(46,'giuffra 1153','El Palomar','Buenos Aires',1684,'2020-09-16','2020-09-16',12,NULL),(47,'giuffra 1153','El Palomar','Buenos Aires',1684,'2020-09-16','2020-09-16',12,NULL),(48,'giuffra 1153','El Palomar','Buenos Aires',1684,'2020-09-16','2020-09-16',13,NULL),(49,'giuffra 1153','El Palomar','Buenos Aires',1684,'2020-09-16','2020-09-16',13,NULL),(50,'giuffra 1153','El Palomar','Buenos Aires',1684,'2020-09-16','2020-09-16',13,NULL),(51,'giuffra 1153','El Palomar','Buenos Aires',1684,'2020-09-16','2020-09-16',13,NULL),(52,'giuffra 1153','El Palomar','Buenos Aires',1684,'2020-09-16','2020-09-16',13,NULL),(53,'giuffra 1153','El Palomar','Buenos Aires',1684,'2020-09-16','2020-09-16',13,NULL),(54,'giuffra 1153','El Palomar','Buenos Aires',1684,'2020-09-16','2020-09-16',13,NULL),(55,'giuffra 1153','El Palomar','Buenos Aires',1684,'2020-09-16','2020-09-16',13,NULL),(56,'giuffra 1153','El Palomar','Buenos Aires',1684,'2020-09-16','2020-09-16',13,NULL),(57,'giuffra 1153','El Palomar','Buenos Aires',1684,'2020-09-16','2020-09-16',13,NULL),(58,'giuffra 1153','El Palomar','Buenos Aires',1684,'2020-09-16','2020-09-16',13,NULL),(59,'giuffra 1153','El Palomar','Buenos Aires',1684,'2020-09-16','2020-09-16',13,NULL),(60,'giuffra 1153','El Palomar','Buenos Aires',1684,'2020-09-16','2020-09-16',13,NULL),(61,'giuffra 1153','El Palomar','Buenos Aires',1684,'2020-09-22','2020-09-22',14,NULL),(62,'giuffra 1153','El Palomar','Buenos Aires',1684,'2020-09-22','2020-09-22',14,NULL);
/*!40000 ALTER TABLE `addresses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cart_product`
--

DROP TABLE IF EXISTS `cart_product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cart_product` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `quantity` tinyint(3) unsigned NOT NULL,
  `price` float unsigned NOT NULL,
  `created_at` date NOT NULL,
  `updated_at` date NOT NULL,
  `product_id` int(10) unsigned NOT NULL,
  `cart_id` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `cart_product_idx` (`cart_id`),
  KEY `products_idx` (`product_id`),
  CONSTRAINT `carts` FOREIGN KEY (`cart_id`) REFERENCES `carts` (`id`),
  CONSTRAINT `products` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart_product`
--

LOCK TABLES `cart_product` WRITE;
/*!40000 ALTER TABLE `cart_product` DISABLE KEYS */;
INSERT INTO `cart_product` VALUES (2,1,1008,'2020-09-16','2020-09-16',25,14),(3,1,12000,'2020-09-16','2020-09-16',24,14),(4,1,12000,'2020-09-16','2020-09-16',24,15),(5,2,2016,'2020-09-16','2020-09-16',25,15),(6,5,60000,'2020-09-16','2020-09-16',24,15),(7,2,2016,'2020-09-16','2020-09-16',25,15),(8,1,850,'2020-09-22','2020-09-22',27,17),(9,1,1300,'2020-09-22','2020-09-22',58,17);
/*!40000 ALTER TABLE `cart_product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `carts`
--

DROP TABLE IF EXISTS `carts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `carts` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `total` float unsigned NOT NULL,
  `created_at` date NOT NULL,
  `updated_at` date NOT NULL,
  `shipping_address_id` int(10) unsigned NOT NULL,
  `user_id` int(10) unsigned NOT NULL,
  `deleted_at` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `shipping_address_idx` (`shipping_address_id`),
  KEY `user_address_idx` (`user_id`),
  CONSTRAINT `shipping_address` FOREIGN KEY (`shipping_address_id`) REFERENCES `addresses` (`id`),
  CONSTRAINT `user_address` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carts`
--

LOCK TABLES `carts` WRITE;
/*!40000 ALTER TABLE `carts` DISABLE KEYS */;
INSERT INTO `carts` VALUES (11,13008,'2020-09-16','2020-09-16',7,12,NULL),(12,13008,'2020-09-16','2020-09-16',7,12,NULL),(13,13008,'2020-09-16','2020-09-16',7,12,NULL),(14,13008,'2020-09-16','2020-09-16',7,12,NULL),(15,14016,'2020-09-16','2020-09-16',48,13,NULL),(16,62016,'2020-09-16','2020-09-16',48,13,NULL),(17,3310,'2020-09-22','2020-09-22',61,14,NULL),(18,2150,'2020-09-22','2020-09-22',61,14,NULL);
/*!40000 ALTER TABLE `carts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `colors`
--

DROP TABLE IF EXISTS `colors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `colors` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `created_at` date NOT NULL,
  `updated_at` date NOT NULL,
  `deleted_at` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `colors`
--

LOCK TABLES `colors` WRITE;
/*!40000 ALTER TABLE `colors` DISABLE KEYS */;
INSERT INTO `colors` VALUES (1,'Blanco','2020-09-15','2020-09-15',NULL),(2,'Negro','2020-09-15','2020-09-15',NULL),(3,'Gris','2020-09-15','2020-09-15',NULL),(4,'Marron','2020-09-15','2020-09-15',NULL),(5,'Azul','2020-09-15','2020-09-15',NULL),(6,'Verde','2020-09-15','2020-09-15',NULL),(7,'Naranja','2020-09-15','2020-09-15',NULL),(8,'Amarillo','2020-09-15','2020-09-15',NULL),(9,'Rojo','2020-09-15','2020-09-15',NULL),(10,'Lila','2020-09-15','2020-09-15',NULL),(11,'Violeta','2020-09-15','2020-09-15',NULL),(12,'Celeste','2020-09-15','2020-09-15',NULL),(13,'Dorado','2020-09-15','2020-09-15',NULL),(14,'Plateado','2020-09-15','2020-09-15',NULL),(16,'Beige','2020-09-23','2020-09-23','2020-09-23'),(17,'sin color','2020-09-23','2020-09-23',NULL),(18,'Beige','2020-09-23','2020-09-23','2020-09-23'),(19,'Beige','2020-09-23','2020-09-23','2020-09-23'),(20,'Beige','2020-09-23','2020-09-23','2020-09-23'),(21,'Beige','2020-09-23','2020-09-23','2020-09-23');
/*!40000 ALTER TABLE `colors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_category`
--

DROP TABLE IF EXISTS `product_category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `product_category` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `created_at` date NOT NULL,
  `updated_at` date NOT NULL,
  `deleted_at` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_category`
--

LOCK TABLES `product_category` WRITE;
/*!40000 ALTER TABLE `product_category` DISABLE KEYS */;
INSERT INTO `product_category` VALUES (1,'Remeras','2020-09-15','2020-09-15',NULL),(11,'Pantalones','2020-09-15','2020-09-15',NULL),(12,'Camisas','2020-09-15','2020-09-15',NULL),(13,'Abrigos','2020-09-15','2020-09-15',NULL),(14,'Shorts','2020-09-15','2020-09-15','2020-09-23'),(15,'Trajes','2020-09-15','2020-09-15',NULL),(16,'Conjuntos','2020-09-15','2020-09-15',NULL),(19,'shorts','2020-09-23','2020-09-23',NULL);
/*!40000 ALTER TABLE `product_category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `price` float unsigned NOT NULL,
  `description` varchar(255) NOT NULL,
  `image` varchar(100) DEFAULT NULL,
  `created_at` date NOT NULL,
  `updated_at` date NOT NULL,
  `category_id` int(10) unsigned NOT NULL,
  `sizes_id` int(10) unsigned NOT NULL DEFAULT 10,
  `colors_id` int(10) unsigned NOT NULL DEFAULT 17,
  `stock` int(10) unsigned NOT NULL,
  `deleted_at` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `product-category_idx` (`category_id`),
  KEY `fk_products_sizes1_idx` (`sizes_id`),
  KEY `fk_products_colors1_idx` (`colors_id`)
) ENGINE=InnoDB AUTO_INCREMENT=88 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (24,'campera cuero marron ',12000,'asfsafasfasfassfsdfdfdsf','image-1600199985393.jpg','2020-09-15','2020-09-19',13,3,4,3,'2020-09-22'),(25,'pantalon negro roto',1008,'asdsaasfsa','image-1600210573051.jpg','2020-09-15','2020-09-22',11,3,13,16,NULL),(26,'short playa',1090,'este short aasdasdasdasdadasdasdasdasdasdsadsaadasdasdassdadasd','image-1600473990209.jpg','2020-09-19','2020-09-23',19,3,7,60,NULL),(27,'buzo lana',850,'safasfasfasfsafasfaf','image-1600795672603.jpg','2020-09-22','2020-09-22',13,1,3,30,NULL),(28,'buzo algodón',670,'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ','image-1600795835100.jpg','2020-09-22','2020-09-22',13,3,2,30,NULL),(29,'Buzo lana',550,'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text.','image-1600795898121.jpg','2020-09-22','2020-09-22',13,2,9,30,NULL),(30,'camperón',3000,'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text.','image-1600795929583.jpg','2020-09-22','2020-09-22',13,4,8,30,NULL),(31,'campera algodón',1870,'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text.','image-1600795988928.jpg','2020-09-22','2020-09-22',13,5,8,30,NULL),(32,'campera ',560,'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text.','image-1600796034101.jpg','2020-09-22','2020-09-22',13,6,5,30,NULL),(33,'rompeviento',1150,'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text.','image-1600796078914.jpg','2020-09-22','2020-09-22',13,7,4,30,NULL),(34,'campera jean/ corderito',2300,'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text.','image-1600796125360.jpg','2020-09-22','2020-09-22',13,8,12,30,NULL),(35,'campera cuero',2140,'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text.','image-1600796156844.jpg','2020-09-22','2020-09-22',13,3,2,30,NULL),(36,'chaleco',780,'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text.','image-1600796193436.jpg','2020-09-22','2020-09-22',13,2,5,30,NULL),(37,'chaleco',1680,'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text.','image-1600796229420.jpg','2020-09-22','2020-09-22',13,1,12,30,NULL),(38,'saco ',1490,'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text.','image-1600796277495.jpg','2020-09-22','2020-09-22',13,4,9,30,NULL),(39,'saco formal',12000,'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text.','image-1600796352515.jpg','2020-09-22','2020-09-22',13,2,3,30,NULL),(40,'camisa formal',2100,'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text.','image-1600796480132.jpg','2020-09-22','2020-09-22',12,3,2,30,NULL),(41,'camisa cuadrille',1170,'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text.','image-1600796522990.jpg','2020-09-22','2020-09-22',12,1,9,30,NULL),(42,'camisa modal',1300,'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text.','image-1600796557713.jpg','2020-09-22','2020-09-22',12,6,2,30,NULL),(43,'camisa algodon',1240,'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text.','image-1600796599711.jpg','2020-09-22','2020-09-22',12,3,12,30,NULL),(44,'camisa vestir',1400,'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text.','image-1600796637038.jpg','2020-09-22','2020-09-22',12,6,3,30,NULL),(45,'camisa puntos',2300,'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text.','image-1600796665183.jpg','2020-09-22','2020-09-22',12,1,5,30,NULL),(46,'pantalon jean',3000,'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text.','image-1600796698594.jpg','2020-09-22','2020-09-22',11,3,12,30,NULL),(47,'pantalon ridiculus ',5000,'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text.','image-1600796738531.jpg','2020-09-22','2020-09-22',11,4,8,30,NULL),(48,'pantalon roto',1100,'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text.','image-1600796818017.jpg','2020-09-22','2020-09-22',11,7,12,30,NULL),(49,'pantalon de la galera ',4500,'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text.','image-1600796895409.jpg','2020-09-22','2020-09-22',11,8,4,30,NULL),(50,'pantalon formal',2300,'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text.','image-1600796931069.jpg','2020-09-22','2020-09-22',11,3,1,30,NULL),(51,'pantalon rap',1280,'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text.','image-1600796963350.jpg','2020-09-22','2020-09-22',11,4,2,30,NULL),(52,'pantalon sin remera jaja',2000,'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text.','image-1600797011654.jpg','2020-09-22','2020-09-22',11,7,2,30,NULL),(53,'pantalon brillante',1130,'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text.','image-1600797053601.jpg','2020-09-22','2020-09-22',11,4,6,30,NULL),(54,'pantalon gris',1201,'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text.','image-1600797090330.jpg','2020-09-22','2020-09-22',11,3,3,30,NULL),(55,'pantalon',3000,'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text.','image-1600797135267.jpg','2020-09-22','2020-09-22',11,2,2,30,NULL),(56,'pantalon casi que no queda',1230,'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text.','image-1600797185111.jpg','2020-09-22','2020-09-22',11,3,1,30,NULL),(57,'remera estampada',2000,'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text.','image-1600797216511.jpg','2020-09-22','2020-09-22',1,1,2,30,NULL),(58,'remera escrita',1300,'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text.','image-1600797242685.jpg','2020-09-22','2020-09-22',1,2,9,30,NULL),(59,'remera estampa',1240,'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text.','image-1600797277026.jpg','2020-09-22','2020-09-22',1,3,2,30,NULL),(60,'remera lisa',12000,'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text.','image-1600797302760.jpg','2020-09-22','2020-09-22',1,4,2,30,NULL),(61,'remera lisa ',12000,'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text.','image-1600797332457.jpg','2020-09-22','2020-09-22',1,6,1,30,NULL),(62,'remera potter',1500,'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text.','image-1600797354997.jpg','2020-09-22','2020-09-22',1,7,3,30,NULL),(63,'remera ',2030,'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text.','image-1600797397613.jpg','2020-09-22','2020-09-22',1,8,1,30,NULL),(64,'remera',1250,'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text.','image-1600797434840.jpg','2020-09-22','2020-09-22',1,1,1,30,NULL),(65,'remera estampada',2000,'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text.','image-1600797473031.jpg','2020-09-22','2020-09-22',1,4,5,30,NULL),(66,'remera parca',2400,'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text.','image-1600797502610.jpg','2020-09-22','2020-09-22',1,3,2,30,NULL),(67,'remera  ',1400,'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text.','image-1600797527037.jpg','2020-09-22','2020-09-22',1,2,2,30,NULL),(68,'remera manga larga',2200,'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text.','image-1600797558619.jpg','2020-09-22','2020-09-22',1,1,4,30,NULL),(69,'short cuadrille',1980,'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text.','image-1600797604127.jpg','2020-09-22','2020-09-23',19,4,4,30,NULL),(70,'short fitness',1760,'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text.','image-1600797634595.jpg','2020-09-22','2020-09-23',19,3,6,30,NULL),(71,'short basquet',2020,'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text.','image-1600797668223.jpg','2020-09-22','2020-09-23',19,6,1,30,NULL),(72,'short pelopincho',1200,'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text.','image-1600797716955.jpg','2020-09-22','2020-09-23',19,8,9,30,NULL),(73,'conjunto gris',5090,'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text.','image-1600797776753.jpg','2020-09-22','2020-09-22',16,1,3,30,NULL),(74,'traje antiguo',8700,'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text.','image-1600797808953.jpg','2020-09-22','2020-09-22',15,1,4,30,NULL),(76,'traje ',4500,'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text.','image-1600797895661.jpg','2020-09-22','2020-09-22',15,2,9,30,NULL),(77,'traje comun',6890,'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text.','image-1600797922435.jpg','2020-09-22','2020-09-22',15,3,5,30,NULL),(78,'traje bb-king',5000,'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text.','image-1600797965881.jpg','2020-09-22','2020-09-22',15,1,12,30,NULL),(79,'traje lineas',8900,'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text.','image-1600797995102.jpg','2020-09-22','2020-09-22',15,8,1,30,NULL),(80,'traje empresa',6730,'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text.','image-1600798024165.jpg','2020-09-22','2020-09-22',15,1,3,30,NULL),(81,'traje italiano',7810,'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text.','image-1600798067829.jpg','2020-09-22','2020-09-22',15,3,2,30,NULL),(82,'traje el padrino',6700,'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text.','image-1600798101017.jpg','2020-09-22','2020-09-22',15,8,3,30,NULL),(83,'campera cuero 2',1300,'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa','image-1600809875126.jpg','2020-09-22','2020-09-22',13,2,10,30,'2020-09-22'),(84,'pruebaaaaaa',12000,'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa','image-1600887596162.jpg','2020-09-23','2020-09-23',19,1,20,30,'2020-09-23'),(85,'giuffra 1153',12000,'hhhhhhhhhhhhhhhhhhhhhhhh','image-1600889476675.jpg','2020-09-23','2020-09-23',19,2,20,50,'2020-09-23'),(86,'aaaaaaaaa',12000,'aaaaaaaaaaaaaa','image-1600900401145.jpg','2020-09-23','2020-09-23',19,1,21,30,'2020-09-23'),(87,'bbbbb',12000,'bbbbbbbbbb','image-1600900421334.jpg','2020-09-23','2020-09-23',19,1,21,30,'2020-09-23');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sizes`
--

DROP TABLE IF EXISTS `sizes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sizes` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `created_at` date NOT NULL,
  `updated_at` date NOT NULL,
  `deleted_at` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sizes`
--

LOCK TABLES `sizes` WRITE;
/*!40000 ALTER TABLE `sizes` DISABLE KEYS */;
INSERT INTO `sizes` VALUES (1,'S','2020-09-15','2020-09-15',NULL),(2,'XS','2020-09-15','2020-09-15',NULL),(3,'M','2020-09-15','2020-09-15',NULL),(4,'L','2020-09-15','2020-09-15',NULL),(5,'X','2020-09-15','2020-09-23',NULL),(6,'XL','2020-09-15','2020-09-15',NULL),(7,'XXL','2020-09-15','2020-09-15',NULL),(8,'XXXL','2020-09-15','2020-09-15',NULL),(9,'chaja','2020-09-23','2020-09-23',NULL),(10,'sin talle','2020-09-23','2020-09-23',NULL);
/*!40000 ALTER TABLE `sizes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `first_name` varchar(100) NOT NULL,
  `last_name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(200) NOT NULL,
  `created_at` date NOT NULL,
  `updated_at` date NOT NULL,
  `image` varchar(100) DEFAULT NULL,
  `permissions` int(10) unsigned DEFAULT NULL,
  `deleted_at` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (12,'admin','admin','admin@gmail.com','$2b$10$EMsNShCqFsevv5ybx90jcOnXqRtcu1djIvZOiEITXNdpaJCriFKQq','2020-09-15','2020-09-15','image-1600197047742.jpg',2,NULL),(13,'mario','troiano','mariotroiano2@gmail.com','$2b$10$KsxBiL0A/NcQOeX1OZPcbehz6GcM/VasRGA1A3vjpSkYhiD0SfZEa','2020-09-16','2020-09-16','image-1600291442834.jpg',1,NULL),(14,'laura','cipriano','laucipriano2@gmail.com','$2b$10$.1aS3GvEqS8yP8Jk6gasPuR1L4uJWoTSIHuS7ozmNGPi0yJtUPkxK','2020-09-22','2020-09-22','image-1600806233308.jpg',1,NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'new_formel'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-09-23 19:42:17
