# Generated by Django 3.1.6 on 2021-02-07 15:23

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('sites', '0002_auto_20210207_1523'),
        ('purchase_request', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='mainpurchaserequest',
            name='site_name',
            field=models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, related_name='sites_mpr', to='sites.site'),
        ),
        migrations.AlterField(
            model_name='sitespurchaserequest',
            name='site_name',
            field=models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, related_name='sites_pr', to='sites.site'),
        ),
    ]
