# Generated by Django 2.1.5 on 2019-01-10 03:10

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('threads', '0018_remove_thread_members'),
    ]

    operations = [
        migrations.AlterField(
            model_name='threadmember',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='thread_memberships', to=settings.AUTH_USER_MODEL),
        ),
    ]
