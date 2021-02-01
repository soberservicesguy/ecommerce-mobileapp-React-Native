
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
					{
						image_thumbnail: 'String',
						title: 'String',
						date_of_publishing: 'String',
						author_name: 'Sring',
						first_para: 'Sring',
						total_likes: 'String',
						total_shares: 'String',
						endpoint: 'String',
						initial_tags: 'String',
						second_para: 'String',
						qouted_para: 'String',
						source_of_qoutation: 'String',
						third_para: 'String',
						fourth_para: 'String',
						all_tags: 'String',
						author_details: 'String',
					},
,
			other_model_links:[
	
					{relatedcomments: `[{ type: Schema.Types.ObjectId, ref: 'RelatedComment' }]`}

				]
			},

		children:[
	
			{
				react_class_name_for_component:'Individual_Related_Comment', // used for pushing reducers and endpoints, and state to components. ALSO always use underscores, they will be removed where needed
				react_class_name_for_container:'Related_Comment', // used for pushing reducers and endpoints, and state to containers. ALSO fill container names WITHOUT CONTAINER suffix but with underscores
				react_class_name_for_card:'Related_Comment_Card',
				class_name:'RelatedComment', // first letter should be capitalized of each token and singular
				summarized_version_length:8,
				index:'endpoint',
				schemafields:
					{
						image_thumbnail: 'String',
						title: 'String',
						date_of_publishing: 'String',
						author_name: 'Sring',
						first_para: 'Sring',
						total_likes: 'String',
						total_shares: 'String',
						endpoint: 'String',
						initial_tags: 'String',
						second_para: 'String',
						qouted_para: 'String',
						source_of_qoutation: 'String',
						third_para: 'String',
						fourth_para: 'String',
						all_tags: 'String',
						author_details: 'String',
					},
,
				other_model_links:[{blogpost: `{ type: Schema.Types.ObjectId, ref: 'BlogPost'  }`},]
			},				
	
		]
	},
]

module.exports = {
	components_list:components_list,
	containers_list:containers_list,
	all_schemas:all_schemas,
};

