CREATE SCHEMA IF NOT EXISTS sistemas
    AUTHORIZATION postgres;

create table sistemas.dispositivos (
	id serial not null primary key,
	nombre character varying(100) not null,
	descripcion text,
	voltaje jsonb,
	corriente jsonb,
	caudal jsonb,
	constraint uk_nombre unique (nombre)
);
alter table sistemas.dispositivos owner to postgres;

select * from sistemas.dispositivos

insert into sistemas.dispositivos (nombre,descripcion,voltaje,corriente,caudal) values 
('Dispositivo1','Dispositivo uno bomba principal CU','{"nominal": 220, "minimo": 210, "maximo": 230}'::jsonb,'{"nominal": 20, "minimo": 8, "maximo": 12}'::jsonb,'{"nominal": 1, "minimo": 0.8, "maximo": 1.2}'::jsonb),
('Dispositivo2','Dispositivo dos bomba rectoria CU','{"nominal": 220, "minimo": 210, "maximo": 230}'::jsonb,'{"nominal": 20, "minimo": 8, "maximo": 12}'::jsonb,'{"nominal": 1, "minimo": 0.8, "maximo": 1.2}'::jsonb),
('Dispositivo3','Dispositivo tres bomba Coincio','{"nominal": 1200, "minimo": 1180, "maximo": 1220}'::jsonb,'{"nominal": 20, "minimo": 8, "maximo": 12}'::jsonb,'{"nominal": 1, "minimo": 0.8, "maximo": 1.2}'::jsonb),
('Dispositivo4','Dispositivo cuatro bomba Minsita','{"nominal": 14400, "minimo": 14200, "maximo": 14600}'::jsonb,'{"nominal": 20, "minimo": 8, "maximo": 12}'::jsonb,'{"nominal": 10, "minimo": 8, "maximo": 12}'::jsonb),
('Dispositivo5','Dispositivo cinco bomba cinco','{"nominal": 220, "minimo": 210, "maximo": 230}'::jsonb,'{"nominal": 20, "minimo": 8, "maximo": 12}'::jsonb,'{"nominal": 1, "minimo": 0.8, "maximo": 1.2}'::jsonb),
('Dispositivo6','Dispositivo seis bomba seis','{"nominal": 220, "minimo": 210, "maximo": 230}'::jsonb,'{"nominal": 20, "minimo": 8, "maximo": 12}'::jsonb,'{"nominal": 1, "minimo": 0.8, "maximo": 1.2}'::jsonb),
('Dispositivo7','Dispositivo siete bomba siete','{"nominal": 220, "minimo": 210, "maximo": 230}'::jsonb,'{"nominal": 20, "minimo": 8, "maximo": 12}'::jsonb,'{"nominal": 1, "minimo": 0.8, "maximo": 1.2}'::jsonb),
('Dispositivo8','Dispositivo ocho bomba ocho','{"nominal": 220, "minimo": 210, "maximo": 230}'::jsonb,'{"nominal": 20, "minimo": 8, "maximo": 12}'::jsonb,'{"nominal": 1, "minimo": 0.8, "maximo": 1.2}'::jsonb),
('Dispositivo9','Dispositivo nueve bomba nueve','{"nominal": 220, "minimo": 210, "maximo": 230}'::jsonb,'{"nominal": 20, "minimo": 8, "maximo": 12}'::jsonb,'{"nominal": 1, "minimo": 0.8, "maximo": 1.2}'::jsonb),
('Dispositivo10','Dispositivo diez bomba diez','{"nominal": 220, "minimo": 210, "maximo": 230}'::jsonb,'{"nominal": 20, "minimo": 8, "maximo": 12}'::jsonb,'{"nominal": 1, "minimo": 0.8, "maximo": 1.2}'::jsonb);
