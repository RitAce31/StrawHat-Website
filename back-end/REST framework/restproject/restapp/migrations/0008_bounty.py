# Generated by Django 4.2.4 on 2023-09-14 05:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('restapp', '0007_alter_character_char_img'),
    ]

    operations = [
        migrations.CreateModel(
            name='Bounty',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('char_id', models.IntegerField()),
                ('char_name', models.CharField(max_length=50)),
                ('char_img', models.CharField(max_length=100)),
            ],
        ),
    ]
