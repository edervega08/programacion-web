package main

import (
	"database/sql"

	"fmt"

	"log"
	"net/http"

	"github.com/gin-gonic/gin"
	_ "github.com/lib/pq"
)

type estado struct {
	Clave  string `json:"clave"`
	Nombre string `json:"nombre"`
}

type municipio struct {
	Estado string `json:"estado"`
	Clave  string `json:"clave"`
	Nombre string `json:"nombre"`
}

type localidad struct {
	Estado    string `json:"estado"`
	Municipio string `json:"municipio"`
	Clave     string `json:"clave"`
	Nombre    string `json:"nombre"`
}

type mensaje struct {
	Codigo      int32  `json:"codigo"`
	Descripcion string `json:"descripcion"`
}

type estadosR struct {
	Mensaje mensaje  `json:"mensaje"`
	Estados []estado `json:"estados"`
}

type municipiosR struct {
	Mensaje    mensaje     `json:"mensaje"`
	Municipios []municipio `json:"municipios"`
}

type localidadesR struct {
	Mensaje     mensaje     `json:"mensaje"`
	Localidades []localidad `json:"localidades"`
}

type vMonitor struct {
	Nominal float32 `json:"nominal"`
	Minimo  float32 `json:"minimo"`
	Maximo  float32 `json:"maximo"`
}

type sDispositivo struct {
	Id          int32    `json:"id"`
	Nombre      string   `json:"nombre"`
	Descripcion string   `json:"descripcion"`
	Voltaje     vMonitor `json:"voltaje"`
	Corriente   vMonitor `json:"corriente"`
	Caudal      vMonitor `json:"caudal"`
}

type sDispositivosR struct {
	Mensaje      mensaje        `json:"mensaje"`
	Dispositivos []sDispositivo `json:"dispositivos"`
}

var db *sql.DB

func main() {
	var err error

db, err = sql.Open(
    "postgres",
    "postgres://postgres:123456@localhost/desarrolloweb?sslmode=disable",
)

if err != nil {
    log.Fatal(err)
}

var nombreBD string

err = db.QueryRow("SELECT current_database()").Scan(&nombreBD)
if err != nil {
    log.Fatal(err)
}

fmt.Println("BASE ACTUAL:", nombreBD)
	router := gin.Default()
	router.Static("/sw", "./public")
	router.GET("/estados", getEstados)
	router.GET("/municipios", getMunicipios)
	router.GET("/localidades", getLocalidades)
	router.GET("/dispositivos/read", getDispositivos)
	

	router.Run(":8080")
	
}

func getDispositivos(ctx *gin.Context) {
	var reply sDispositivosR
	var dispositivo sDispositivo
	var msg mensaje
	ctx.Header("Content-Type", "application/json")
	ctx.Writer.Header().Set("Access-Control-Allow-Origin", "*")

	rows, err := db.Query(`
    SELECT id,nombre,descripcion,voltaje->>'nominal',
           voltaje->>'minimo',voltaje->>'maximo',
           corriente->>'nominal',corriente->>'minimo',
           corriente->>'maximo',caudal->>'nominal',
           caudal->>'minimo',caudal->>'maximo'
    FROM sistemas.dispositivos;
`)

if err != nil {
    fmt.Println("ERROR CONSULTA:", err)
    return
}
	defer rows.Close()

	for rows.Next() {
		rows.Scan(&dispositivo.Id, &dispositivo.Nombre, &dispositivo.Descripcion,
			&dispositivo.Voltaje.Nominal, &dispositivo.Voltaje.Minimo, &dispositivo.Voltaje.Maximo,
			&dispositivo.Corriente.Nominal, &dispositivo.Corriente.Minimo, &dispositivo.Corriente.Maximo,
			&dispositivo.Caudal.Nominal, &dispositivo.Caudal.Minimo, &dispositivo.Caudal.Maximo)
		reply.Dispositivos = append(reply.Dispositivos, dispositivo)
	}
	msg.Codigo = 1
	msg.Descripcion = "Procesado con exito!"
	reply.Mensaje = msg
	ctx.IndentedJSON(http.StatusOK, reply)
}

func getEstados(ctx *gin.Context) {
	var reply estadosR
	var estadoR estado
	var msg mensaje
	ctx.Header("Content-Type", "application/json")
	ctx.Writer.Header().Set("Access-Control-Allow-Origin", "*")

	rows, err := db.Query(`
		SELECT clave,nombre
		FROM catalogos.estados;
	`)

	if err != nil {
		log.Fatal(err)
	}
	defer rows.Close()

	for rows.Next() {
		rows.Scan(&estadoR.Clave, &estadoR.Nombre)
		reply.Estados = append(reply.Estados, estadoR)
	}
	msg.Codigo = 1
	msg.Descripcion = "Procesado con exito!"
	reply.Mensaje = msg
	ctx.IndentedJSON(http.StatusOK, reply)
}

func getMunicipios(ctx *gin.Context) {
	var msg mensaje
	var reply municipiosR
	var municipioR municipio
	ctx.Header("Content-Type", "application/json")
	ctx.Writer.Header().Set("Access-Control-Allow-Origin", "*")

	edo := ctx.DefaultQuery("estado", "16")
	fmt.Println(edo)
	rows, err := db.Query("SELECT estado,clave,nombre FROM catalogos.municipios WHERE estado = '" + edo + "';")

	if err != nil {
		log.Fatal(err)
	}
	defer rows.Close()

	for rows.Next() {
		rows.Scan(&municipioR.Estado, &municipioR.Clave, &municipioR.Nombre)
		reply.Municipios = append(reply.Municipios, municipioR)
	}
	msg.Codigo = 1
	msg.Descripcion = "Procesado con exito!"
	reply.Mensaje = msg

	ctx.IndentedJSON(http.StatusOK, reply)
}

func getLocalidades(ctx *gin.Context) {
	var msg mensaje
	var reply localidadesR
	var localidadR localidad
	ctx.Header("Content-Type", "application/json")
	ctx.Writer.Header().Set("Access-Control-Allow-Origin", "*")

	edo := ctx.DefaultQuery("estado", "16")
	mpio := ctx.DefaultQuery("municipio", "053")
	fmt.Println(edo + ":" + mpio)
	rows, err := db.Query("SELECT estado,municipio,clave,nombre FROM catalogos.localidades WHERE estado = '" + edo + "' AND municipio='" + mpio + "';")

	if err != nil {
		log.Fatal(err)
	}
	defer rows.Close()

	for rows.Next() {
		rows.Scan(&localidadR.Estado, &localidadR.Municipio, &localidadR.Clave, &localidadR.Nombre)
		reply.Localidades = append(reply.Localidades, localidadR)
	}
	msg.Codigo = 1
	msg.Descripcion = "Procesado con exito!"
	reply.Mensaje = msg

	ctx.IndentedJSON(http.StatusOK, reply)
}

