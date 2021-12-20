# -*- coding: utf-8 -*-
###################################################################################
#
#    This program is free software: you can modify
#    it under the terms of the GNU Affero General Public License (AGPL) as
#    published by the Free Software Foundation, either version 3 of the
#    License, or (at your option) any later version.
#
#    This program is distributed in the hope that it will be useful,
#    but WITHOUT ANY WARRANTY; without even the implied warranty of
#    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
#    GNU Affero General Public License for more details.
#
#    You should have received a copy of the GNU Affero General Public License
#    along with this program.  If not, see <https://www.gnu.org/licenses/>.
#
###################################################################################
from . import models
from odoo.api import Environment, SUPERUSER_ID


modules = [
    'sale_management',
    'crm',
    'account'
]


def post_init_hook(cr, registry):
    env = Environment(cr, SUPERUSER_ID, {})

    for each in modules:
        module_id = env['ir.module.module'].search([('name', '=', each)])
        if module_id:
            module_id.icon = "/apps_icon_custom_path/static/src/img/%s.png" % each

