**What's new in the version**

Initial Release

## Introduction 

The Brazilian mother, on the recommendation of the Ministry of Health, has a document to record the most important information about the pregnancy: the pregnant notebook.

Just as it represents a great ally of the pregnant woman, it also appears as something essential for the professionals who accompany her. Therefore, even if she is attended by different doctors or nurses, from the moment she has everything registered, the assistance provided improves.

And this goes far beyond prenatal care! As much as the great performance is throughout the weeks of pregnancy, with notes at each appointment, the card will make all the difference at the time of delivery. It is he who will guide all the conduct not only for the birth, but also for the baby.

## Summary 

This system is a set of components: the Pregnant Notebook GUI web part, a cloud-based FHIR server, where the results of diagnostic medicine exams performed by the patient are made available.

The web-based GUI interface to obtain the information of the results of the exams performed by the patient is developed with the Angular framework and the ng-zorro Ant Design

https://ng.ant.design/docs/introduce/en

![Image](https://raw.githubusercontent.com/Davi-Massaru/fhir-healthy-pregnancy/master/img/DiagramApp.jpeg)

## Features 

For each and every health service that the pregnant woman attends, it is necessary to carry these records with her, as they contain important data, such as:
 * ultrasound results;
 * serology tests;
 * complications of pregnancy;
 * blood typing;
 * gestational age.
 
**Blood typing**
Blood incompatibility, especially of the Rh factor, can result in hematological complications. The best known of them is called erythroblastosis fetalis, which appears as an attack on the baby's blood cells.

**Serologies**
The investigation can be performed more than once during pregnancy! If the pregnant woman is not immune to toxoplasmosis, for example, it is necessary to redo the research periodically. The same happens with the other negative serologies, such as HIV, syphilis and hepatitis B.

**Urine tests**
Another special attention should be given to urinary issues. Pregnancy alone increases the risk of infections that urinate. Therefore, even if you do not have any symptoms, it is necessary to periodically assess whether there is any current infection.
If the pregnant woman has more than one infection during pregnancy, it is valid to initiate measures to prevent new episodes.

**Comorbidities**
There are the so-called hypertensive syndromes of pregnancy, which must be detected in a timely manner for treatment. Another aspect that should always be researched is gestational diabetes, especially between 24 and 28 weeks.

**Vaccines**
Even if you present the complete vaccination card, you need to take a few more essential bites:
 * bacterial triplet;
 * adult pair (diphtheria and tetanus);
 * influenza (flu).


## Application Layout 


## Deployment 

[![Gitter](https://img.shields.io/badge/Available%20on-Intersystems%20Open%20Exchange-00b2a9.svg)](https://openexchange.intersystems.com/package/iris-fhir-template)
 [![Quality Gate Status](https://community.objectscriptquality.com/api/project_badges/measure?project=intersystems_iris_community%2Firis-fhir-template&metric=alert_status)](https://community.objectscriptquality.com/dashboard?id=intersystems_iris_community%2Firis-fhir-template)
 [![Reliability Rating](https://community.objectscriptquality.com/api/project_badges/measure?project=intersystems_iris_community%2Firis-fhir-template&metric=reliability_rating)](https://community.objectscriptquality.com/dashboard?id=intersystems_iris_community%2Firis-fhir-template)

## Prerequisites
Make sure you have [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) and [Docker desktop](https://www.docker.com/products/docker-desktop) installed.

## Installation 

Clone/git pull the repo into any local directory

```
$ git clone https://github.com/intersystems-community/iris-fhir-template.git
```

Open the terminal in this directory and run:

```
$ docker-compose up -d
```

## FrontEnd Start

Access directory
```
$ cd app-pregnant-notebook/
```

Install dependencies
```
$ npm i
```

Start
```
$ ng serve --port 0 --open
```

Environments settings:
fhir-healthy-pregnancy/app-pregnant-notebook/src/environments/environment.ts 

 * Update fhirserver
 * Update patientKey

```
export const environment = {
  production: false,
  fhirserver: 'http://localhost:32783/fhir/r4',
  patientKey: '1510'
};
```
## Patient data
The template goes with 5 preloaded patents in [/data/fhir](https://github.com/intersystems-community/iris-fhir-server-template/tree/master/data/fhir) folder which are being loaded during [docker build](https://github.com/intersystems-community/iris-fhir-server-template/blob/8bd2932b34468f14530a53d3ab5125f9077696bb/iris.script#L26)
You can generate more patients doing the following. Open shel terminal in repository folder and call:
```
#./synthea-loader.sh 10
```
this will create 10 more patients in data/fhir folder.
Then open IRIS terminal in FHIRSERVER namespace with the following command:
```
docker-compose exec iris iris session iris -U FHIRServer
```
and call the loader method:
```
FHIRSERVER>d ##class(fhirtemplate.Setup).LoadPatientData("/irisdev/app/output/fhir","FHIRSERVER","/fhir/r4")
```

 with using the [following project](https://github.com/intersystems-community/irisdemo-base-synthea)

### Dockerfile

The simplest dockerfile which starts IRIS and imports Installer.cls and then runs the Installer.setup method, which creates IRISAPP Namespace and imports ObjectScript code from /src folder into it.
Use the related docker-compose.yml to easily setup additional parametes like port number and where you map keys and host folders.
Use .env/ file to adjust the dockerfile being used in docker-compose.

### .vscode/settings.json

Settings file to let you immedietly code in VSCode with [VSCode ObjectScript plugin](https://marketplace.visualstudio.com/items?itemName=daimor.vscode-objectscript))

### .vscode/launch.json
Config file if you want to debug with VSCode ObjectScript

## Troubleshooting
**ERROR #5001: Error -28 Creating Directory /usr/irissys/mgr/FHIRSERVER/**
If you see this error it probably means that you ran out of space in docker.
you can clean up it with the following command:
```
docker system prune -f
```
And then start rebuilding image without using cache:
```
docker-compose build --no-cache
```
and start the container with:
```
docker-compose up -d
```

This and other helpful commands you can find in [dev.md](https://github.com/intersystems-community/iris-fhir-template/blob/cd7e0111ff94dcac82377a2aa7df0ce5e0571b5a/dev.md)


## Recommendation
Read related documentations: fhir

## Thanks

**Davi Muta**
* [Linkedin: Davi Massaru Teixeira Muta](https://www.linkedin.com/in/davi-massaru-teixeira-muta-003284191/)
* [Davi Massaru Teixeira Muta](https://openexchange.intersystems.com/user/davi%20massaru%20teixeira%20muta/ygbBNKanLnVDa9ffzk64UznaE)

**Edmara Francisco**
[Linkedin: Edmara Francisco](https://www.linkedin.com/in/edmara-francisco-ab825734/)
