```mermaid
    classDiagram

    class NPC{
        isHostile: boolean
        isFriendly: boolean
        Level: Byte
        talk()
        attack()
        roam()
    }

    class Enemy{
        Class: String
        Range: int
        atkCooldown()
        charge()
        focusTarget()

    }

    NPC <|-- Enemy

    class Ally{
        followPlayer: boolean
        protectPlayer: boolean
        healAllies()
        interceptEnemy()
        spellCast()
    }
    NPC <|-- Ally