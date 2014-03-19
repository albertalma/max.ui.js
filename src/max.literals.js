var max = max || {};
/**
 * @fileoverview Provides literals in several languages
 */
max.literals = function(language) {
    var maxui = {};
    maxui.en = {
        'months': ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        'new_activity_text': 'Write something...',
        'activity': 'activity',
        'conversations': 'private conversations',
        'conversations_list': 'conversations list',
        'conversations_info': 'Info',
        'conversations_info_title': 'Conversation information',
        'conversations_info_participants': 'Participants',
        'conversations_info_owner': 'owner',
        'conversations_info_add': 'Add participant...',
        'conversations_info_created': 'Created',
        'conversations_info_leave': 'Leave conversation',
        'conversations_info_delete': 'Delete conversation',
        'conversations_info_delete_help': 'If you delete the conversation, the participants will not be able to see the messages anymore. To avoid this, transfer the ownership to someone else and then leave the conversation.',
        'participants': 'Talk to',
        'conversation_name': 'Conversation name',
        'message': 'Message',
        'no_conversations': 'No conversations already',
        'no_match_found': 'No match found',
        'new_conversation_text': 'Add participants and send a message to start a conversation',
        'new_activity_post': "Post activity",
        'toggle_comments': "comments",
        'new_comment_text': "Comment something...",
        'new_comment_post': "Post comment",
        'load_more': "Load more",
        'context_published_in': "Published in",
        'generator_via': "via",
        'search_text': "Search in posts...",
        'and_more': "and more...",
        'new_message_post': "Send message",
        'post_permission_unauthorized': "You''re not authorized to post on this context",
        'post_permission_not_here': "You're not mentioning @anyone",
        'post_permission_not_enough_participants': "You have to add participants",
        'post_permission_missing_displayName': "You have to name the conversation",
        'delete_activity_confirmation': "Are you sure?",
        'delete_activity_delete': "Delete",
        'delete_activity_cancel': "Cancel",
        'delete_activity_icon': "delete",
        'favorites_filter_hint': 'Filter by favorited activity',
        'favorites': 'Favorites',
        'favorite': 'favorite',
        'unfavorite': 'unfavorite',
        'like': 'like',
        'unlike': 'unlike',
        'recent_activity': "Latest activity",
        'valued_activity': "Most valued activity",
        'recent_favorited_activity': "Latest favorites",
        'valued_favorited_activity': "Most valued favorites"
    };
    maxui.es = {
        'months': ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'],
        'new_activity_text': 'Escribe algo...',
        'activity': 'actividad',
        'conversations': 'conversaciones privadas',
        'conversations_list': 'lista de conversaciones',
        'conversations_info': 'Info',
        'conversations_info_title': 'Información de la conversación',
        'conversations_info_participants': 'Participantes',
        'conversations_info_owner': 'propietario',
        'conversations_info_add': 'Añadir participante...',
        'conversations_info_created': 'Creada',
        'conversations_info_leave': 'Abandonar conversación',
        'conversations_info_delete': 'Borrar conversación',
        'conversations_info_delete_help': '',
        'participants': 'Conversar con',
        'conversation_name': 'Nombre de la conversación',
        'message': 'Mensaje',
        'no_conversations': 'No hay conversaciones',
        'no_match_found': 'No hay coincidencias',
        'new_conversation_text': 'Añade participantes y envia el mensaje para iniciar una conversación',
        'new_activity_post': "Publica",
        'toggle_comments': "comentarios",
        'new_comment_text': "Comenta algo...",
        'new_comment_post': "Comenta",
        'load_more': "Cargar más",
        'context_published_in': "Publicado en",
        'generator_via': "via",
        'search_text': "Busca en las entradas...",
        'and_more': "i más...",
        'new_message_post': 'Envia el mensaje',
        'post_permission_unauthorized': 'No estas autorizado a publicar en este contexto',
        'post_permission_not_here': "No estas citando a @nadie",
        'post_permission_not_enough_participants': "Tienes que añadir participantes",
        'post_permission_missing_displayName': "Tienes que dar un nombre a la conversación",
        'delete_activity_confirmation': "Estás seguro?",
        'delete_activity_delete': "Borrar",
        'delete_activity_cancel': "Cancelar",
        'delete_activity_icon': "borrar",
        'favorites_filter_hint': 'Filtra por actividad favorita',
        'favorites': 'Favoritos',
        'favorite': 'favorito',
        'unfavorite': 'quitar favorito',
        'like': 'me gusta',
        'unlike': 'ya no me gusta',
        'recent_activity': "Últimas actividades",
        'valued_activity': "Actividades más valoradas",
        'recent_favorited_activity': "Últimas favoritas",
        'valued_favorited_activity': "Favoritas más valoradas"
    };
    maxui.ca = {
        'months': ['gener', 'febrer', 'març', 'abril', 'maig', 'juny', 'juliol', 'agost', 'setembre', 'octubre', 'novembre', 'desembre'],
        'new_activity_text': 'Escriu alguna cosa...',
        'activity': 'activitat',
        'conversations': 'converses privades',
        'conversations_list': 'llista de converses',
        'conversations_info': 'Info',
        'conversations_info_title': 'Informació de la conversa',
        'conversations_info_participants': 'Participants',
        'conversations_info_owner': 'propietari',
        'conversations_info_add': 'Afegir participant...',
        'conversations_info_created': 'Creada',
        'conversations_info_leave': 'Marxar de la conversa',
        'conversations_info_delete': 'Esborrar conversa',
        'conversations_info_delete_help': '',
        'participants': 'Conversa amb',
        'conversation_name': 'Nom de la conversa',
        'message': 'Missatge',
        'no_conversations': 'No hi ha converses',
        'no_match_found': "No s'han trobat coincidències",
        'new_conversation_text': 'Afegeix participants i envia el missatge per iniciar una conversa',
        'new_activity_post': "Publica",
        'toggle_comments': "comentaris",
        'new_comment_text': "Comenta alguna cosa...",
        'new_comment_post': "Comenta",
        'load_more': "Carrega'n més",
        'context_published_in': "Publicat a",
        'generator_via': "via",
        'search_text': "Cerca a les entrades...",
        'and_more': "i més...",
        'new_message_post': 'Envia el missatge',
        'post_permission_unauthorized': 'No estàs autoritzat a publicar en aquest contexte',
        'post_permission_not_here': "No estas citant a @ningú",
        'post_permission_not_enough_participants': "Has d'afegir participants",
        'post_permission_missing_displayName': "Tens que posar nom a la conversa",
        'delete_activity_confirmation': "Estàs segur?",
        'delete_activity_delete': "Esborra",
        'delete_activity_cancel': "No ho toquis!",
        'delete_activity_icon': "esborra",
        'favorites_filter_hint': 'Filtra per activitat favorita',
        'favorites': 'Favorits',
        'favorite': 'favorit',
        'unfavorite': 'treure favorit',
        'like': "m'agrada",
        'unlike': "ja no m'agrada",
        'recent_activity': "Darreres activitats",
        'valued_activity': "Activitats més valorades",
        'recent_favorited_activity': "Darreres favorites",
        'valued_favorited_activity': "Favorites més valorades"
    };
    return maxui[language];
};
