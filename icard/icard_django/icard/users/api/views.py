from rest_framework.viewsets import ModelViewSet
from rest_framework.permission import IsAdminUser
from users.api.serializers import UserSerializer

from users.models import User

class UserApiViewSet(ModelViewSet):
    permission_class = [IsAdminUser]
    serializer_class = UserSerializer
    queryset = User.objects.all()