# Generated by Django 4.2.4 on 2023-09-19 05:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('restapp', '0008_bounty'),
    ]

    operations = [
        migrations.AlterField(
            model_name='characterdetails',
            name='char_img',
            field=models.CharField(max_length=10000),
        ),
    ]
