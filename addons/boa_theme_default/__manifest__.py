# -*- coding: utf-8 -*-
{
    'name': "boa_theme_default",

    'summary': "",

    'description': "",

    'author': "BOA Tech Team",
    'sequence' : 15,
    
    # 'category': 'Uncategorized',
   
    'depends': ['web','base', 'mail', 'base_setup'],

    # always loaded
    'data': [
        # 'security/ir.model.access.csv',
        'views/assets.xml',
        'views/website_templates.xml',
    ],
    "qweb": ["static/src/xml/base.xml"],
   
}
