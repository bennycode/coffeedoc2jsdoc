###
Create a new conversation.
@see https://staging-nginz-https.zinfra.io/swagger-ui/#!/users/clearProperties
@note Supply at least 2 user IDs! Do not include the creator.

@param user_ids [Array<String>] IDs of users (excluding the creator)
@param name [String] Conversation name
@return [z.entity.Conversation] The newly created conversation.
###
