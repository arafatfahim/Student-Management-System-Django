# Generated by Django 4.0.4 on 2022-04-18 15:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('SMS_App', '0002_remove_students_session_end_year_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='adminhod',
            name='profile_pic',
            field=models.FileField(default=1, upload_to=''),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='staffs',
            name='profile_pic',
            field=models.FileField(default=1, upload_to=''),
            preserve_default=False,
        ),
    ]
