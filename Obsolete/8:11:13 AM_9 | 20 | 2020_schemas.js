
const components_list = ['React_Component_1']
const containers_list = ['React_Grid']

	
const all_schemas = [
	{
	
		parent:{
			react_class_name_for_component:'Individual_Blog_Post', // used for pushing reducers and endpoints, and state to components. ALSO always use underscores, they will be removed where needed
			react_class_name_for_container:'Blog_Post', // used for pushing reducers and endpoints, and state to containers. ALSO fill container names WITHOUT CONTAINER suffix but with underscores
			react_class_name_for_card:'Blog_Post_Card',

			class_name:'BlogPost', // first letter should be capitalized of each token and singular
			summarized_version_length:8,
			index:'endpoint',

			children_classes:['Related_Comment'],
			schemafields:
					schemafields:{
						0: 'i',

						1: 'm',

						2: 'a',

						3: 'g',

						4: 'e',

						5: '_',

						6: 't',

						7: 'h',

						8: 'u',

						9: 'm',

						10: 'b',

						11: 'n',

						12: 'a',

						13: 'i',

						14: 'l',

					},
,
			other_model_links:[
	
					{relatedcomments: `[{ type: Schema.Types.ObjectId, ref: 'RelatedComment' }},`],
	
				]
			},

		children:[
	
			{
				react_class_name_for_component:'Individual_Related_Comment', // used for pushing reducers and endpoints, and state to components. ALSO always use underscores, they will be removed where needed
				react_class_name_for_container:'Related_Comment', // used for pushing reducers and endpoints, and state to containers. ALSO fill container names WITHOUT CONTAINER suffix but with underscores
				react_class_name_for_card:'Related_Comment_Card',
				class_name:'RelatedComment', // first letter should be capitalized of each token and singular
				summarized_version_length:8,
				index:endpoint,
				schemafields:
					schemafields:{
						0: 'i',

						1: 'm',

						2: 'a',

						3: 'g',

						4: 'e',

						5: '_',

						6: 't',

						7: 'h',

						8: 'u',

						9: 'm',

						10: 'b',

						11: 'n',

						12: 'a',

						13: 'i',

						14: 'l',

					},
,
				other_model_links:`[{blogpost: { type: Schema.Types.ObjectId, ref: 'BlogPost'  }},`], //BlogPost is capital, it will be turned to lowercase while  in code,
			},				
	
		]
	},
]

module.exports = {
	components_list:components_list,
	containers_list:containers_list,
	all_schemas:all_schemas,
};

