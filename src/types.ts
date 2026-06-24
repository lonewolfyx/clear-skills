export interface IOptions {
    global?: boolean
    g?: boolean
}

export type IAgentType
    = 'aider-desk'
        | 'amp'
        | 'antigravity'
        | 'antigravity-cli'
        | 'astrbot'
        | 'autohand-code'
        | 'augment'
        | 'claude-code'
        | 'openclaw'
        | 'cline'
        | 'codearts-agent'
        | 'codebuddy'
        | 'codemaker'
        | 'codestudio'
        | 'codex'
        | 'command-code'
        | 'continue'
        | 'cortex'
        | 'crush'
        | 'cursor'
        | 'deepagents'
        | 'devin'
        | 'dexto'
        | 'droid'
        | 'eve'
        | 'firebender'
        | 'forgecode'
        | 'gemini-cli'
        | 'github-copilot'
        | 'goose'
        | 'hermes-agent'
        | 'inference-sh'
        | 'jazz'
        | 'iflow-cli'
        | 'junie'
        | 'kilo'
        | 'kimi-code-cli'
        | 'kiro-cli'
        | 'kode'
        | 'lingma'
        | 'loaf'
        | 'mcpjam'
        | 'mistral-vibe'
        | 'moxby'
        | 'mux'
        | 'neovate'
        | 'opencode'
        | 'openhands'
        | 'ona'
        | 'pi'
        | 'qoder'
        | 'qoder-cn'
        | 'qwen-code'
        | 'replit'
        | 'reasonix'
        | 'rovodev'
        | 'roo'
        | 'tabnine-cli'
        | 'terramind'
        | 'tinycloud'
        | 'trae'
        | 'trae-cn'
        | 'warp'
        | 'windsurf'
        | 'zed'
        | 'zencoder'
        | 'zenflow'
        | 'pochi'
        | 'promptscript'
        | 'adal'
        | 'universal'
        | 'bob'

export interface IAgentConfig {
    name: string
    displayName: string
    skillsDir: string
    /** Global skills directory. Set to undefined if the agent doesn't support global installation. */
    globalSkillsDir: string | undefined
    detectInstalled: () => Promise<boolean>
    /** Whether to show this agent in the universal agents list. Defaults to true. */
    showInUniversalList?: boolean
    /** Whether to display this universal agent in the interactive locked section. Defaults to true. */
    showInUniversalPrompt?: boolean
}

export type AgentsType = Record<IAgentType, IAgentConfig & { agentDir: string }>

export interface IConfig {
    cwd: string
    global: boolean
    agents: AgentsType
}

export interface ISkillInfo {
    agent: string
    agentPath: string
    dirname: string
    skillDir: string
    skillMdPath: string
}

export type ISkillsMap = Record<string, ISkillInfo[]>
