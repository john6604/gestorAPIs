from django.db import models

class Usuarios(models.Model):
    # Define los campos del modelo
    nombre_usuario = models.CharField(max_length=150, unique=True)
    correo = models.EmailField(unique=True)
    contraseña = models.CharField(max_length=128)

    def __str__(self):
        return self.nombre_usuario


class Sesiones(models.Model):
    usuario = models.ForeignKey(Usuarios, on_delete=models.CASCADE)
    token = models.CharField(max_length=255)
    fecha_inicio = models.DateTimeField(auto_now_add=True)
    fecha_fin = models.DateTimeField(null=True, blank=True)

    def __str__(self):
        return f"Sesión de {self.usuario.nombre_usuario} - Token: {self.token}"