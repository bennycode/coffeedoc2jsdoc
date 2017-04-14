###
Create a new conversation.
@note Supply at least 2 user IDs! Do not include the requestor

@param user_ids [Array<String>] IDs of users (excluding the requestor) to be part of the conversation
@param name [String] User defined name for the Conversation (optional)
###
create_new_conversation: (user_ids, name) =>
  @conversation_service.create_conversation user_ids, name
  .then (response) =>
    @_on_create conversation: response.id, data: response
