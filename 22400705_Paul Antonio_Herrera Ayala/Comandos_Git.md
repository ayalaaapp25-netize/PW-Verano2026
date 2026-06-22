#20 comandos de Git, descripcion y ejemplos de uso

#1: Git Init: Inicializa un nuevo repositorio en Git en el directorio actual
    - Ejemplo: git init

#2: Git Clone: Crea una copia local del repositorio remoto existente
    - Ejemplo: git clone https://url-del-repositorio.git
#3: Git Config: Define configuraciones a nivel global o local, como tu nombre o correo
    - Ejemplo: git config --global user.email"tugmail.com"

#4: Git Status: Muestra el estado actual de tus archivos (modificados, preparados para confirmar o sin seguimiento)
    -Ejemplo: git status

#5: Git Add: Agregar archivos al directorio de trabajo al area de preparación(stage)
    -Ejemplo: Git Add archivo.txt

#6: Git Commit: Guarda los cambios preparados en el historial local con un mensaje descriptivo
    -Ejemplo: git commit -m "Se agrego la funcion inicio de sesion"

#7: Git diff: Muestra las diferencias exactas entre archivos modificados que aun no han sido preparados
    -Ejemplo: git diff

#8: Git Branch: Lista, crea o elimina ramas en tu repositorio 
    -Ejemplo: git branch feature-login 

#9: Git Checkout: Cambiar entre ramas o restaura archivos de trabajo
    -Ejemplo: git checkout feature-login

#10: Git Merge: Une los cambios de otra rama en tu rama actual
    -Ejemplo: git merge feature-login

#11: Git Stash: Guarda temporalmente los cambios no confirmados para que puedas cambiar de rama limpiamente
    -Ejemplo: git stash

#12: Git Remote: Administra las conexiones a repositorios remotos
    -Ejemplo: git remote add origins https://url-del-repositorio.git

#13: Git Push: Sube tus confirmaciones locales a una rama del repositorio remoto
    -Ejemplo: git push -u origin main

#14: Git Pull: Descarga los cambios mas recientes del repositorio remoto y los fusiona con la rama actual
    -Ejemplo: git pull origin main

#15: Git Fetch: Descarga todos los commits y ramas de un repositorio remoto sin fusionarlos automaticamente
    -Ejemplo: git fetch origin

#16: Git Log: Muestra el historial de confirmaciones (commits) en orden cronologico inverso
    -Ejemplo: git log --online

#17: Git reset: Deshace los cambios restablecidos el HEAD a un estados o commit anterior
    -Ejemplo: git reset --hard HEAD 1

#18: Git revert: Crea un commit nuevo que invierte los cambios realizados en un commit anterior
    -Ejemplo: git revert a1b2c3d

#19: Git Tag: Asigna etiquetas permanentes a puntos especificos en el historial 
    -Ejemplo: git tag -a v1.0.0 -m "Lanzamiento oficial"

#20: Git Blame: Muestra que usuario y en que commit se modifico por ultima vez cada linea del archivos
    -Ejemplo: git blame archivo.js
