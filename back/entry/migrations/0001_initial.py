# Generated by Django 4.1.3 on 2022-11-26 18:10

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('wordlist', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Entry',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('word', models.CharField(max_length=40)),
                ('definition', models.TextField()),
                ('synonym', models.TextField()),
                ('context', models.TextField()),
                ('wordlist', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='wordlist.wordlist')),
            ],
        ),
    ]
