CREATE USER administrador WITH ENCRYPTED PASSWORD 'clase2026';

CREATE DATABASE desarrolloweb
WITH OWNER = administrador
ENCODING = 'UTF8'
LC_COLLATE = 'en_US.UTF-8'
LC_CTYPE = 'en_MX.UTF-8'
TEMPLATE = template0
CONNECTION LIMIT = -1;

GRANT ALL PRIVILEGES ON DATABASE desarrolloweb TO edervb;

CREATE TABLE personas (
    id SERIAL PRIMARY KEY,
    matricula CHARACTER(10) NOT NULL,
    nombre CHARACTER(100) NOT NULL,
    domicilio JSON,
    constraint uk-personas-matricula UNIQUE (matricula)
);

domicilio:{
    calle: "Calle Falsa",
    municipio: "Municipio Falso",
    noExt: "123",
    noint: "12",
    codigo_postal: "12345",
    colonia: "Colonia Falsa",
}



INSERT INTO public.personas (matricula, nombre, domicilio)
VALUES 
(
    '1903446f',
    'Eder Vega',
    '{
        "calle": "La Cuadra falso",
        "municipio": "Morelia falso",
        "noExt": "123",
        "noint": "1",
        "codigo_postal": "08001",
        "colonia": "Morelia falso"
    }'::jsonb
),
(
    '1903447f',
    'Juan Perez',
    '{
        "calle": "Calle Falsa",
        "municipio": "Municipio Falso",
        "noExt": "123",
        "noint": "12",
        "codigo_postal": "12345",
        "colonia": "Colonia Falsa"
    }'::jsonb
)
RETURNING id;