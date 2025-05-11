Pasos para iniciar el entorno:
//Entorno virtual
python -m venv venv
venv/Scripts/activate
source venv/bin/activate //Nube
//Instalaciones - Dependencias
Raiz del proyecto
pip install django djangorestframework django-cors-headers
cd frontend
npm install axios react-router-dom
npm -i lucide-react
//FRONTEND 
npm start
//FINALIZAR
Ctrl + C
deactivate
exit

//HACER COMMIT
git add .
git status //ver los archivos que se van a actualizar 
git commit - m "TITULO"
git push --force origin main