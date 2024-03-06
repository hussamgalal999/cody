export function getProviderName(name: string): string {
    const providerName = name.toLowerCase()
    switch (providerName) {
        case 'anthropic':
            return 'Anthropic'
        case 'openai':
            return 'OpenAI'
        case 'ollama':
            return 'Ollama'
        default:
            return providerName
    }
}
