from django.shortcuts import render
from django.contrib.auth.hashers import check_password
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from .models import Usuarios, Sesiones
from datetime import datetime, timedelta
import secrets

@csrf_exempt
def login_usuario(request):
    if request.method == "POST":
        try:
            data = json.loads(request.body)
            correo = data.get("correo")
            clave = data.get("clave")

            usuario = Usuarios.objects.filter(correo=correo).first()
            if usuario and check_password(clave, usuario.contrasena_hash):
                token = secrets.token_urlsafe(32)
                expira = datetime.now() + timedelta(days=1)

                Sesiones.objects.create(
                    usuario_id=usuario.id,
                    token_sesion=token,
                    expira_en=expira
                )

                return JsonResponse({
                    "mensaje": "Inicio de sesión exitoso",
                    "token": token,
                    "usuario_id": usuario.id,
                    "rol": usuario.rol_id
                })
            else:
                return JsonResponse({"error": "Credenciales inválidas"}, status=401)
        except Exception as e:
            return JsonResponse({"error": str(e)}, status=500)
