# Generated by Django 4.2.4 on 2023-09-09 10:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('restapp', '0003_delete_data'),
    ]

    operations = [
        migrations.CreateModel(
            name='Character',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('char_id', models.IntegerField()),
                ('char_name', models.CharField(max_length=50)),
                ('char_desc', models.CharField(max_length=150)),
                ('char_pos', models.CharField(max_length=150)),
            ],
        ),
        migrations.DeleteModel(
            name='Student',
        ),
    ]