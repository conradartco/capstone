# Generated by Django 4.0.4 on 2022-07-15 14:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('review', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='review',
            name='likes',
            field=models.IntegerField(default=0),
        ),
    ]
