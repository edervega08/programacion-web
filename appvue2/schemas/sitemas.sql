CREATE SCHEMA sistemas
AUTHORIZATION administrador;

CREATE TABLE sistemas.dispositivos (
    
    id SERIAL NOT NULL PRIMARY KEY,
    
    descripcion TEXT NOT NULL,
    
    voltaje JSONB,
    
    corriente JSONB,
    
    caudal JSONB,
    
    ubicacion JSONB,
    
    nombre CHARACTER VARYING(100) NOT NULL,

    CONSTRAINT uk_sistemas_dispositivos 
    UNIQUE (nombre)

);

ALTER TABLE sistemas.dispositivos
OWNER TO administrador;


INSERT INTO sistemas.dispositivos (nombre,descripcion,voltaje,corriente,caudal,ubicacion)
 VALUES 
('Dispositivo 1', 
'Dispositivo CU',
'{"nominal": 220, "minimo": 210, "maximo": 230}'::jsonb,
'{"nominal": 10, "minimo": 8, "maximo": 12}'::jsonb,
'{"nominal": 5, "minimo": 4, "maximo": 6}'::jsonb,
'{"estado":"michoacan","municipio":"morelia","localidad":"Morelia"}'::jsonb
);
SELECT * FROM sistemas.dispositivos;

SELECT ID, nombre, voltaje->'nominal', voltaje->>'minimo',
       corriente->>'nominal' AS corriente_nominal,
       caudal->>'nominal' AS caudal_nominal,
       ubicacion->>'estado' AS estado,
       ubicacion->>'municipio' AS municipio,
       ubicacion->>'localidad' AS localidad