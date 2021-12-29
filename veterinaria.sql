-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: localhost    Database: veterinaria
-- ------------------------------------------------------
-- Server version	8.0.26

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `categorias`
--

DROP TABLE IF EXISTS `categorias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categorias` (
  `idcategoria` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  PRIMARY KEY (`idcategoria`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categorias`
--

LOCK TABLES `categorias` WRITE;
/*!40000 ALTER TABLE `categorias` DISABLE KEYS */;
INSERT INTO `categorias` VALUES (1,'Comidas'),(2,'Snacks'),(3,'Accesorios'),(4,'Juguetes');
/*!40000 ALTER TABLE `categorias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `publicaciones`
--

DROP TABLE IF EXISTS `publicaciones`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `publicaciones` (
  `id` int NOT NULL AUTO_INCREMENT,
  `titulo` varchar(45) NOT NULL,
  `precio` varchar(45) NOT NULL,
  `descripcion_S` varchar(45) NOT NULL,
  `descripcion_L` longtext NOT NULL,
  `imagen` varchar(45) NOT NULL,
  `cat_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `cat_id_idx` (`cat_id`),
  CONSTRAINT `cat_id` FOREIGN KEY (`cat_id`) REFERENCES `categorias` (`idcategoria`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `publicaciones`
--

LOCK TABLES `publicaciones` WRITE;
/*!40000 ALTER TABLE `publicaciones` DISABLE KEYS */;
INSERT INTO `publicaciones` VALUES (1,'Arnes de gato','2000','Descripcion corta','Descripcion LargaDescripcion LargaDescripcion LargaDescripcion LargaDescripcion LargaDescripcion LargaDescripcion LargaDescripcion LargaDescripcion LargaDescripcion LargaDescripcion LargaDescripcion LargaDescripcion LargaDescripcion LargaDescripcion LargaDescripcion LargaDescripcion LargaDescripcion Larga','ArnesGato.png',3),(2,'Bil Jac Snack Perro','1500','Descripcion corta','Descripcion LargaDescripcion LargaDescripcion LargaDescripcion LargaDescripcion LargaDescripcion LargaDescripcion LargaDescripcion LargaDescripcion LargaDescripcion LargaDescripcion LargaDescripcion LargaDescripcion LargaDescripcion LargaDescripcion LargaDescripcion LargaDescripcion LargaDescripcion LargaDescripcion LargaDescripcion LargaDescripcion LargaDescripcion LargaDescripcion Larga','BJYperro.png',2),(3,'Pelota de perro','500','Descripcion Corta','Descripcion LargaDescripcion LargaDescripcion LargaDescripcion LargaDescripcion LargaDescripcion LargaDescripcion LargaDescripcion LargaDescripcion LargaDescripcion LargaDescripcion LargaDescripcion LargaDescripcion LargaDescripcion LargaDescripcion LargaDescripcion LargaDescripcion Larga','PelotaPerro.png',4),(4,'Royal Canin Perro OB','2500','Descripcion Corta','Descripcion LargaDescripcion LargaDescripcion LargaDescripcion LargaDescripcion LargaDescripcion LargaDescripcion LargaDescripcion LargaDescripcion LargaDescripcion LargaDescripcion LargaDescripcion LargaDescripcion LargaDescripcion LargaDescripcion LargaDescripcion Larga','RCOBperro.jpg',1),(5,'Royal Canin Perro MINI','2250','Descripcion Corta ','Descripcion LargaDescripcion LargaDescripcion LargaDescripcion LargaDescripcion LargaDescripcion LargaDescripcion LargaDescripcion LargaDescripcion LargaDescripcion LargaDescripcion LargaDescripcion LargaDescripcion LargaDescripcion LargaDescripcion LargaDescripcion LargaDescripcion LargaDescripcion LargaDescripcion LargaDescripcion LargaDescripcion Larga','RCMperro.jpg',1),(6,'Royal Canin Perro Gastro Instestinal','2600','Descripcion Corta','Descripcion LargaDescripcion LargaDescripcion LargaDescripcion LargaDescripcion LargaDescripcion LargaDescripcion LargaDescripcion LargaDescripcion LargaDescripcion LargaDescripcion LargaDescripcion Larga','RCGIperro.jpg',1),(7,'PROPLAN Gato Adulto','1700','Descripcion Corta','Descripcion LargaDescripcion LargaDescripcion LargaDescripcion LargaDescripcion LargaDescripcion LargaDescripcion LargaDescripcion LargaDescripcion LargaDescripcion LargaDescripcion LargaDescripcion LargaDescripcion LargaDescripcion LargaDescripcion LargaDescripcion LargaDescripcion LargaDescripcion LargaDescripcion LargaDescripcion LargaDescripcion Larga','PPGatoAdulto.jpg',1),(8,'PROPLAN Gato Kitten','1400','Descripcion Corta','Descripcion Larga','PPGatitos.jpg',1),(9,'Royal Canin Atun Gato','1200','Descripcion Corta','Descripcion Larga','AtunGato.jpg',1);
/*!40000 ALTER TABLE `publicaciones` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `apellido` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'Ignacio','Becerra','igna@igna.com','1234567');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-12-29 11:55:46
