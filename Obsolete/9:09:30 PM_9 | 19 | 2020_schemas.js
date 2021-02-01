// Fill the components and containers, OTHER THAN those in react_class_name_for_component or react_class_name_for_container ONLY
const components_list = [ 'React_Component_1' ] // always use underscores, they will be removed where needed
const containers_list = [ 'React_Grid' ] // fill container names without Container suffix but with underscores
 
const all_schemas = [
	{ 
		parent:{
			react_class_name_for_component:'Individual_Blog_Post', // used for pushing reducers and endpoints, and state to components. ALSO always use underscores, they will be removed where needed
			react_class_name_for_container:'Blog_Post', // used for pushing reducers and endpoints, and state to containers. ALSO fill container names WITHOUT CONTAINER suffix but with underscores
			react_class_name_for_card:`Blog_Post_Card`,

			summarized_version_length:8,
			index:`endpoint`,

			children_classes:[`RelatedPost`, `RelatedBlogPostComment`,],
			class_name:'BlogPost', // first letter should be capitalized of each token and singular
			schemafields:{
				image_thumbnail:`String`, 
				title:`String`,
				date_of_publishing:`String`,
				author_name:'Sring',
				first_para:'Sring',
				total_likes:'String',
				total_shares:'String',
				endpoint:'String', // there should be always endpoint in parent, and in summarized version

				initial_tags:'String',
				second_para:'String',
				qouted_para:'String',
				source_of_qoutation:'String',
				third_para:'String',
				fourth_para:'String',
				all_tags:'String',
				author_details:'String',
			},
			other_model_links:[

					{relatedposts: `[{ type: Schema.Types.ObjectId, ref: 'RelatedPost' }]`},
					{relatedcomments: `[{ type: Schema.Types.ObjectId, ref: 'RelatedBlogPostComment' }]`},
				]
			},
	
		children:[
			{
				react_class_name_for_component:'', // used for pushing reducers and endpoints, and state to components
				react_class_name_for_container:'', // used for pushing reducers and endpoints, and state to containers
				react_class_name_for_card:``,

				summarized_version_length:4,
				index:`title`,

				class_name:'RelatedPost',
				schemafields:{
					image_thumbnail:`String`, 
					title:`String`, 
					date_of_publishing:`String`,
					author_name:`String`,
				}, 
				other_model_links:[{BlogPost: `{ type: Schema.Types.ObjectId, ref: 'BlogPost' }`},], //BlogPost is capital, it will be turned to lowercase while  in code
			},
			{
				react_class_name_for_component:'',
				react_class_name_for_container:'',
				react_class_name_for_card:``,

				summarized_version_length:5,
				index:`comment_timestamp`,

				class_name:'RelatedBlogPostComment', 
				schemafields:{
					user_image:'String',
					user_name:`String`, 
					comment_timestamp:'String',
					comment:`String`,
					comment_is_reply:'String',
				}, 
				other_model_links:[{BlogPost: `{ type: Schema.Types.ObjectId, ref: 'BlogPost' }`},], //BlogPost is capital, it will be turned to lowercase while  in code
			},
		]
	},

	{ 
		parent:{
			react_class_name_for_component:'Individual_Video_Item', // used for pushing reducers and endpoints, and state to components. ALSO always use underscores, they will be removed where needed
			react_class_name_for_container:'Video_Item', // used for pushing reducers and endpoints, and state to containers. ALSO fill container names WITHOUT CONTAINER suffix but with underscores
			react_class_name_for_card:`Video_Item_Card`,

			summarized_version_length:8,
			index:`endpoint`,

			children_classes:[`RelatedVideo`, `RelatedVideoComment`,],
			class_name:'VideoItem', // first letter should be capitalized of each token and singular
			schemafields:{
				image_thumbnail:`String`, 
				title:`String`,
				date_of_publishing:`String`,
				author_name:'Sring',
				first_para:'Sring',
				total_likes:'String',
				total_shares:'String',
				endpoint:'String',

				initial_tags:'String',
				all_tags:'String',
				author_details:'String',
			},
			other_model_links:[

					{relatedposts: `[{ type: Schema.Types.ObjectId, ref: 'RelatedVideo' }]`},
					{relatedcomments: `[{ type: Schema.Types.ObjectId, ref: 'RelatedVideoComment' }]`},
				]
			},
	
		children:[
			{
				react_class_name_for_component:'', // used for pushing reducers and endpoints, and state to components
				react_class_name_for_container:'', // used for pushing reducers and endpoints, and state to containers
				react_class_name_for_card:``,

				summarized_version_length:4,
				index:`title`,

				class_name:'RelatedVideo',
				schemafields:{
					image_thumbnail:`String`, 
					title:`String`, 
					date_of_publishing:`String`,
					author_name:`String`,
				}, 
				other_model_links:[{BlogPost: `{ type: Schema.Types.ObjectId, ref: 'BlogPost' }`},], //BlogPost is capital, it will be turned to lowercase while  in code
			},
			{
				react_class_name_for_component:'Individual_Related_Video_Comment',
				react_class_name_for_container:'Related_Video_Comment',
				react_class_name_for_card:`Related_Video_Comment_Card`,

				summarized_version_length:5,
				index:`comment_timestamp`,

				class_name:'RelatedVideoComment', 
				schemafields:{
					user_image:'String',
					user_name:`String`, 
					comment_timestamp:'String',
					comment:`String`,
					comment_is_reply:'String',
				}, 
				other_model_links:[{BlogPost: `{ type: Schema.Types.ObjectId, ref: 'BlogPost' }`},], //BlogPost is capital, it will be turned to lowercase while  in code
			},
		]
	},

	{ 
		parent:{
			react_class_name_for_component:'Individual_Image_Item', // used for pushing reducers and endpoints, and state to components. ALSO always use underscores, they will be removed where needed
			react_class_name_for_container:'Image_Item', // used for pushing reducers and endpoints, and state to containers. ALSO fill container names WITHOUT CONTAINER suffix but with underscores
			react_class_name_for_card:`Image_Item_Card`,

			summarized_version_length:7,
			index:`endpoint`,

			children_classes:[`RelatedImageComment`,],
			class_name:'ImageItem', // first letter should be capitalized of each token and singular
			schemafields:{
				image_thumbnail:`String`, 
				title:`String`,
				date_of_publishing:`String`,
				author_name:'Sring',
				total_likes:'String',
				total_shares:'String',
				endpoint:'String',

				initial_tags:'String',
				all_tags:'String',
				author_details:'String',
			},
			other_model_links:[
					{relatedcomments: `[{ type: Schema.Types.ObjectId, ref: 'RelatedImageComment' }]`},
				]
			},
	
		children:[
			{
				react_class_name_for_component:'',
				react_class_name_for_container:'',
				react_class_name_for_card:``,
				
				summarized_version_length:5,
				index:`comment_timestamp`,

				class_name:'RelatedImageComment', 
				schemafields:{
					user_image:'String',
					user_name:`String`, 
					comment_timestamp:'String',
					comment:`String`,
					comment_is_reply:'String',
				}, 
				other_model_links:[{BlogPost: `{ type: Schema.Types.ObjectId, ref: 'BlogPost' }`},], //BlogPost is capital, it will be turned to lowercase while  in code
			},
		]
	},
]

module.exports = {
	components_list:components_list,
	containers_list:containers_list,
	all_schemas:all_schemas,
};
