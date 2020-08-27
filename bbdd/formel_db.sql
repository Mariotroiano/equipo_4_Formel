-- MariaDB dump 10.17  Distrib 10.4.13-MariaDB, for Win64 (AMD64)
--
-- Host: 127.0.0.1    Database: formel_db
-- ------------------------------------------------------
-- Server version	10.4.13-MariaDB

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
  `city` varchar(45) NOT NULL,
  `province` varchar(45) NOT NULL,
  `postal_code` int(10) unsigned NOT NULL,
  `created_at` date NOT NULL,
  `updated_at` date NOT NULL,
  `user_id` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `address_user_idx` (`user_id`),
  CONSTRAINT `address_user` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `addresses`
--

LOCK TABLES `addresses` WRITE;
/*!40000 ALTER TABLE `addresses` DISABLE KEYS */;
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
  `quantity` int(10) unsigned NOT NULL,
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart_product`
--

LOCK TABLES `cart_product` WRITE;
/*!40000 ALTER TABLE `cart_product` DISABLE KEYS */;
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
  PRIMARY KEY (`id`),
  KEY `shipping_address_idx` (`shipping_address_id`),
  KEY `user_address_idx` (`user_id`),
  CONSTRAINT `shipping_address` FOREIGN KEY (`shipping_address_id`) REFERENCES `addresses` (`id`),
  CONSTRAINT `user_address` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carts`
--

LOCK TABLES `carts` WRITE;
/*!40000 ALTER TABLE `carts` DISABLE KEYS */;
/*!40000 ALTER TABLE `carts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_category`
--

DROP TABLE IF EXISTS `product_category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `product_category` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `created_at` date NOT NULL,
  `updated_at` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_category`
--

LOCK TABLES `product_category` WRITE;
/*!40000 ALTER TABLE `product_category` DISABLE KEYS */;
INSERT INTO `product_category` VALUES (4,'Camisa','2020-06-01','2020-06-01'),(5,'pantalones','2020-07-28','2020-07-28'),(6,'abrigos','2020-07-28','2020-07-28'),(7,'remeras','2020-07-28','2020-07-28'),(8,'conjuntos','2020-07-28','2020-07-28'),(9,'otros','2020-07-28','2020-07-28');
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
  `name` varchar(45) NOT NULL,
  `price` float unsigned NOT NULL,
  `description` varchar(255) NOT NULL,
  `size` varchar(45) NOT NULL,
  `color` varchar(45) NOT NULL,
  `image` varchar(45) DEFAULT NULL,
  `created_at` date NOT NULL,
  `updated_at` date NOT NULL,
  `category_id` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `product-category_idx` (`category_id`),
  CONSTRAINT `product-category` FOREIGN KEY (`category_id`) REFERENCES `product_category` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (2,'buzo lana',1345,'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.','M','gris','image-1595967416197.jpg','2020-07-28','2020-07-28',6),(3,'buzo algodon',2800,'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500.','XL','negro','image-1595967467332.jpg','2020-07-28','2020-07-28',6),(4,'buzo lana',2140,'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.','M','rojo','image-1595967503924.jpg','2020-07-28','2020-07-28',6),(5,'camisa azul',3900,'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.','L','azul','image-1595967613233.jpg','2020-07-28','2020-07-28',4),(6,'campera cuero',7900,'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.','L','negro','image-1595967643568.jpg','2020-07-28','2020-07-28',6),(7,'campera cuero marron ',5000,'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.','XL','marron','image-1595967677901.jpg','2020-07-28','2020-07-28',6),(8,'chaleco azul',3000,'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.','S','azul','image-1595967712410.jpg','2020-07-28','2020-07-28',8),(9,'conjunto celeste remera y pantalon',5000,'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.','M','celeste','image-1595967761842.jpg','2020-07-28','2020-07-28',8),(10,'pantalon gamuza',1100,'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.','M','gris','image-1595967963359.jpg','2020-07-28','2020-07-28',5),(11,'pantalon jean editadoooo',1150,'Esta es una descripcion editada para probar si funciona editar de a base de datos','M','negro','image-1595968003441.jpg','2020-07-28','2020-07-28',5),(12,'remera manga larga',900,'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.','M','marron','image-1595968043514.jpg','2020-07-28','2020-07-28',7),(13,'saco bordoooo editado',5800,'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.','S','bordo','image-1595968080985.jpg','2020-07-28','2020-08-02',8),(14,'saco gris',630,'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.','L','gris','image-1595968112431.jpg','2020-07-28','2020-08-01',8),(15,'traje',9999,'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.','S','gris','image-1595968139764.jpg','2020-07-28','2020-07-28',8);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
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
  `confirm_password` varchar(200) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (3,'javier','ramirez','javi@gmail.com','$2b$10$Xxa.AWKipp45DEzhNa0C/uGfunsHwEiYq1vhua','2020-08-02','2020-08-02','image-1596327840232.jpg',1,''),(5,'mario','troiano','mario_labase_10@hotmail.com','$2b$10$9n.XR8nubaMgnCr6F8HeYuEl07qRBeIZ0UbjM/','2020-08-02','2020-08-02','image-1596375010764.jpg',1,''),(6,'asdasdas','adasdsa','dasdasdasd@gmail.com','$2b$10$QyHg3CQHg1jAs0.cihXEouWf.KKdE89q7Ii44q','2020-08-06','2020-08-06','image-1596746869651.jpg',1,''),(7,'elpapa','paipai','papa@gmail.com','$2b$10$7T4k/k2KBciudiTzD/e6IOe1/XStoRXoLOU.0a','2020-08-07','2020-08-07','image-1596797016713.jpg',1,''),(8,'elpapa','elAdministrador','vegueta@gmail.com','$2b$10$9WhA9Hbnuo5hTjzJZ4OP/eIUvu5Ygb1JAzR9iP','2020-08-07','2020-08-07','image-1596797125040.jpg',1,''),(9,'elpapa','elAdministrador','fffffffffffffffo@gmail.com','$2b$10$oNApaz7RhCr1QUoDCruVW.C4GxYv/Hddfsw/PT','2020-08-07','2020-08-07','image-1596797275531.jpg',1,''),(10,'leo','messi','messi@gmail.com','$2b$10$QRT7Raig5IHUHuRrm0TPZerwOoALAzpZkTpGCO','2020-08-07','2020-08-07','image-1596798005763.jpg',1,''),(11,'homero','simpson','homer@gmail.com','$2b$10$Y51fV24dPV9mb6qYA.59keoriwRKj98.9wgmML','2020-08-07','2020-08-07','image-1596799702314.jpg',1,''),(12,'fran','fran','fran@gmail.com','$2b$10$NZv43uWmF/r5h/2RwG8bfemuiPd5ScVxl/.uQo','2020-08-07','2020-08-07','image-1596801240915.jpg',1,''),(13,'marito','troianoooo','mariotroiano@gmail.com','$2b$10$8i2U/WUniVG4qeWhmV9ns.HkFoEt16McTEpbLR','2020-08-08','2020-08-14','image-1596907264438.jpg',1,''),(14,'yayo','sarasa','yayo2@gmail.com','$2b$10$2OJ0bKjppC5EjhV2Ws/XFun9kMzusG52lS3ilc','2020-08-08','2020-08-26','image-1596907382967.jpg',1,''),(15,'yayooooooooooooooooooooo','elAdministrador','yayo3@gmail.com','$2b$10$WMjr47aRYOdsifDFVYLOuuaFqXXp2NI97amSXq','2020-08-08','2020-08-26','image-1596907685961.jpg',1,''),(16,'yayooooooooooooooooooooo','elAdministrador','yayo@gmail.com','$2b$10$.y.dIGFGJZoDtLYDRf.La.h/XFoZi0xfTfDsos','2020-08-08','2020-08-26','image-1596908347030.jpg',1,''),(17,'','','','$2b$10$juME0EwLkLSt8d9gsw0gr.g8zOFZGW/G/4wNrn','2020-08-08','2020-08-08','image-1596909989113.jpg',1,''),(18,'elpapa','elAdministrador','aaaaaaaa@gmail.com','$2b$10$3ZdsQlTCEb2RzsGKQamzoewrCZdKU1jtI.ENHw','2020-08-13','2020-08-13','image-1597322909208.jpg',1,''),(19,'yayooooooooooooooooooooo','elAdministrador','adsdasdasd@gmail.com','$2b$10$i4t0cbSlK7OeRHA0RPrz5.8Ss6WqctR45TdMpx','2020-08-13','2020-08-13','image-1597323775421.jpg',1,''),(20,'sao','paipai','sao@gmail.com','$2b$10$fU7MuUQdzarSKb3zrzCPEu5Lddyh74aFNlGQXE','2020-08-14','2020-08-14','image-1597407581553.jpg',1,''),(21,'goku','sayayin','goku@gmail.com','$2b$10$yXik2cTDtQLvmc0mvWmfnOIdGMO9H7Ym6K.3TE','2020-08-14','2020-08-14','image-1597407741669.jpg',1,''),(22,'Mario','Troiano','mariotroiano2@gmail.com','$2b$10$lTUYTDOOdLCREzLhvqjH..7vJBJdvnXcv.uGM8','2020-08-26','2020-08-26','image-1598473554147.jpg',1,''),(23,'lau','cipriano','laucipriano2@gmail.com','$2b$10$/ULyZVamV.c0Qyd79TmgEec23r026AnezQ9Gud4kobU99OF/iXG7y','2020-08-26','2020-08-26','image-1598484568683.jpg',1,''),(24,'Admin','administrador','admin@gmail.com','$2b$10$DRLK82Nmll4FshyYRifTH.W2oCnMLqiANimHAPBuIVkgskt46I/Bq','2020-08-26','2020-08-26','image-1598484768158.jpg',2,'');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'formel_db'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-08-27 14:28:28
