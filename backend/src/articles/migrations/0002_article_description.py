# Generated by Django 3.2.7 on 2021-09-14 17:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('articles', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='article',
            name='description',
            field=models.CharField(blank=True, default='', max_length=255),
        ),
    ]