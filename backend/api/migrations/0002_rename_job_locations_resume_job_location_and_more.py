# Generated by Django 4.0.6 on 2022-07-05 14:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='resume',
            old_name='Job_locations',
            new_name='Job_location',
        ),
        migrations.AlterField(
            model_name='resume',
            name='state',
            field=models.CharField(choices=[('kathmandu', 'kathmandu'), ('hetauda', 'hetauda'), ('hetauda', 'hetauda'), ('lalitpur', 'lalitpur'), ('Bhaktapur', 'Bhaktapur')], default='kathmandu', max_length=20),
        ),
    ]