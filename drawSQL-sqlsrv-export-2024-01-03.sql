CREATE TABLE operaciones(
    id BIGINT NOT NULL,
    id_cliente BIGINT NOT NULL,
    id_empleado BIGINT NOT NULL,
    id_medio_de_pago BIGINT NOT NULL,
    id_descuento BIGINT NOT NULL,
    id_producto BIGINT NOT NULL,
    total BIGINT NOT NULL,
    tipo_operacion BIGINT NOT NULL,
    fecha DATE NOT NULL,
    cantidad BIGINT NOT NULL,
    detalle VARCHAR(255) NOT NULL,
    id_estado_operacion BIGINT NOT NULL
);
ALTER TABLE
    operaciones ADD CONSTRAINT operaciones_id_primary PRIMARY KEY(id);
CREATE TABLE clientes(
    id BIGINT NOT NULL,
    nombre VARCHAR(255) NOT NULL,
    apellido VARCHAR(255) NOT NULL,
    dni BIGINT NOT NULL,
    edad BIGINT NOT NULL,
    es_socio BIT NOT NULL,
    fecha_nacimiento DATE NULL,
    mail VARCHAR(255) NULL,
    telefono VARCHAR(255) NULL,
    deuda BIGINT NULL,
    sanciones BIGINT NULL,
    direccion VARCHAR(255) NULL,
    pais VARCHAR(255) NULL,
    provincia VARCHAR(255) NULL,
    ciudad VARCHAR(255) NULL,
    comentario VARCHAR(255)
);
ALTER TABLE
    clientes ADD CONSTRAINT clientes_id_primary PRIMARY KEY(id);
CREATE TABLE categorias(
    id BIGINT NOT NULL,
    nombre_categoria VARCHAR(255) NOT NULL,
    descripcion_categoria VARCHAR(255) NOT NULL
);
ALTER TABLE
    categorias ADD CONSTRAINT categorias_id_primary PRIMARY KEY(id);
CREATE TABLE autores(
    id BIGINT NOT NULL,
    nombre_autor VARCHAR(255) NOT NULL
);
ALTER TABLE
    autores ADD CONSTRAINT autores_id_primary PRIMARY KEY(id);
CREATE TABLE estado_operacion(
    id BIGINT NOT NULL,
    nombre_estado VARCHAR(255) NOT NULL
);
ALTER TABLE
    estado_operacion ADD CONSTRAINT estado_operacion_id_primary PRIMARY KEY(id);
CREATE TABLE empleados(
    id BIGINT NOT NULL,
    nombre VARCHAR(255) NOT NULL,
    apellido VARCHAR(255) NOT NULL,
    fecha_ingreso DATE NOT NULL,
    turno VARCHAR(255) NOT NULL,
    dni VARCHAR(255) NOT NULL,
    telefono VARCHAR(255) NOT NULL,
    mail VARCHAR(255) NOT NULL,
    fecha_nacimiento DATE NOT NULL,
    id_sucursal BIGINT NOT NULL
);
ALTER TABLE
    empleados ADD CONSTRAINT empleados_id_primary PRIMARY KEY(id);
CREATE TABLE formato(
    id BIGINT NOT NULL,
    nombre_formato VARCHAR(255) NOT NULL
);
ALTER TABLE
    formato ADD CONSTRAINT formato_id_primary PRIMARY KEY(id);
CREATE TABLE sucursales(
    id BIGINT NOT NULL,
    direccion VARCHAR(255) NOT NULL,
    pais VARCHAR(255) NOT NULL,
    provincia VARCHAR(255) NOT NULL,
    ciudad VARCHAR(255) NOT NULL
);
ALTER TABLE
    sucursales ADD CONSTRAINT sucursales_id_primary PRIMARY KEY(id);
CREATE TABLE descuentos(
    id BIGINT NOT NULL,
    nombre VARCHAR(255) NOT NULL,
    porcentaje FLOAT NOT NULL
);
ALTER TABLE
    descuentos ADD CONSTRAINT descuentos_id_primary PRIMARY KEY(id);
CREATE TABLE medios_de_pago(
    id BIGINT NOT NULL,
    nombre_medio_de_pago VARCHAR(255) NOT NULL
);
ALTER TABLE
    medios_de_pago ADD CONSTRAINT medios_de_pago_id_primary PRIMARY KEY(id);
CREATE TABLE productos(
    id BIGINT NOT NULL,
    id_formato BIGINT NOT NULL,
    precio_alquiler BIGINT NOT NULL,
    precio_venta BIGINT NOT NULL,
    id_categoria BIGINT NOT NULL,
    id_autor BIGINT NOT NULL,
    descripcion_producto VARCHAR(255) NOT NULL,
    fecha_lanzamiento DATE NOT NULL,
    stock BIGINT NOT NULL
);
ALTER TABLE
    productos ADD CONSTRAINT productos_id_primary PRIMARY KEY(id);
ALTER TABLE
    operaciones ADD CONSTRAINT operaciones_id_cliente_foreign FOREIGN KEY(id_cliente) REFERENCES clientes(id);
ALTER TABLE
    operaciones ADD CONSTRAINT operaciones_id_descuento_foreign FOREIGN KEY(id_descuento) REFERENCES descuentos(id);
ALTER TABLE
    productos ADD CONSTRAINT productos_id_formato_foreign FOREIGN KEY(id_formato) REFERENCES formato(id);
ALTER TABLE
    productos ADD CONSTRAINT productos_id_categoria_foreign FOREIGN KEY(id_categoria) REFERENCES categorias(id);
ALTER TABLE
    operaciones ADD CONSTRAINT operaciones_id_producto_foreign FOREIGN KEY(id_producto) REFERENCES productos(id);
ALTER TABLE
    operaciones ADD CONSTRAINT operaciones_id_medio_de_pago_foreign FOREIGN KEY(id_medio_de_pago) REFERENCES medios_de_pago(id);
ALTER TABLE
    productos ADD CONSTRAINT productos_id_autor_foreign FOREIGN KEY(id_autor) REFERENCES autores(id);
ALTER TABLE
    operaciones ADD CONSTRAINT operaciones_id_estado_operacion_foreign FOREIGN KEY(id_estado_operacion) REFERENCES estado_operacion(id);
ALTER TABLE
    empleados ADD CONSTRAINT empleados_id_sucursal_foreign FOREIGN KEY(id_sucursal) REFERENCES sucursales(id);
ALTER TABLE
    operaciones ADD CONSTRAINT operaciones_id_empleado_foreign FOREIGN KEY(id_empleado) REFERENCES empleados(id);

INSERT INTO clientes(id,nombre,apellido,dni,edad,es_socio,fecha_nacimiento,mail,telefono,direccion,pais,provincia,ciudad)
    VALUES 
    (1,'Alejandro','Gomez',35476123,33,1,'1990-03-12','agomez@gmail.com',1157849231,'HUMBERTO 277', 'Argentina', 'Buenos Aires', 'Banfield'),
    (2,'Juana','Romero',42156731,26,1,'1997-06-23','jromero@gmail.com',1112351232,'PRIMO 1242', 'Argentina', 'Buenos Aires', 'Quilmes'),
    (3,'Bartolomeo','Solano',37235123,31,1,'1992-11-18','bsolano@gmail.com',1112351235,'JUAN CARLOS 5123', 'Argentina', 'Buenos Aires', 'La Plata');

INSERT INTO categorias(id,nombre_categoria,descripcion_categoria)
    VALUES
    (1,'Terror','Categoria Terror'),
    (2,'Romance','Categoria Romance'),
    (3,'Manga','Categoria Manga');

INSERT INTO sucursales(id,direccion,pais,provincia,ciudad)
    VALUES
    (1,'Solano 123','Argentina','Buenos Aires','CABA'),
    (2,'Humberto Primo 321','Argentina','Buenos Aires','Lanús'),
    (3,'Jimbawe 1300','Argentina','Buenos Aires','Palermo');

INSERT INTO descuentos(id,nombre,porcentaje)
    VALUES
    (1,'Sin Descuento',0),
    (2,'Socio',15);