###
Create a new conversation.
@see https://staging-nginz-https.zinfra.io/swagger-ui/#!/users/clearProperties
@note Supply at least 2 user IDs! Do not include the requestor

@param user_ids [Array<String>] IDs of users (excluding the requestor) to be part of the conversation
@param name [String] User defined name for the Conversation (optional)
@return [z.entity.Conversation] The conversation that was created
###
