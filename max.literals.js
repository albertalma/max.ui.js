var max = max || {};

/**
 * @fileoverview Provides literals in several languages
  */


max.literals = function(language) {

    var maxui = {}
    maxui['en'] = {'new_activity_text': 'Write something...',
                       'activity': 'activity',
                       'conversations': 'conversations',
                       'conversations_list': 'conversations list',
                       'new_conversation_text': 'Mention @someone to start a conversation',
                       'new_activity_post': "Post activity",
                       'toggle_comments': "comments",
                       'new_comment_text': "Comment something...",
                       'new_comment_post': "Post comment",
                       'load_more': "Load more",
                       'context_published_in': "Published in",
                       'generator_via': "via",
                       'search_text': "Search...",
                       'and_more': "and more...",
                       'new_message_post': "Send message",
                       'post_permission_unauthorized': "You''re not authorized to post on this context",
                       'post_permission_not_here': "You're not mentioning @anyone"
        }

    maxui['es'] = {'new_activity_text': 'Escribe algo...',
                       'activity': 'actividad',
                       'conversations': 'conversaciones',
                       'conversations_list': 'lista de conversaciones',
                       'new_conversation_text': 'Cita a @alguien para iniciar una conversacion',
                       'new_activity_post': "Publica",
                       'toggle_comments': "comentarios",
                       'new_comment_text': "Comenta algo...",
                       'new_comment_post': "Comenta",
                       'load_more': "Cargar más",
                       'context_published_in': "Publicado en",
                       'generator_via': "via",
                       'search_text': "Busca...",
                       'and_more': "i más...",
                       'new_message_post':'Envia el mensaje',
                       'post_permission_unauthorized': 'No estas autorizado a publicar en este contexto',
                       'post_permission_not_here': "No estas citando a @nadie"
        }

    maxui['ca'] = {'new_activity_text': 'Escriu alguna cosa...',
                       'activity': 'activitat',
                       'conversations': 'converses',
                       'conversations_list': 'llista de converses',
                       'new_conversation_text': 'Cita a @algu per iniciar una conversa',
                       'new_activity_post': "Publica",
                       'toggle_comments': "comentaris",
                       'new_comment_text': "Comenta alguna cosa...",
                       'new_comment_post': "Comenta",
                       'load_more': "Carrega'n més",
                       'context_published_in': "Publicat a",
                       'generator_via': "via",
                       'search_text': "Busca...",
                       'and_more': "i més...",
                       'new_message_post':'Envia el missatge',
                       'post_permission_unauthorized': 'No estàs autoritzat a publicar en aquest contexte',
                       'post_permission_not_here': "No estas citant a @ningú"
        }

    return maxui[language]
}