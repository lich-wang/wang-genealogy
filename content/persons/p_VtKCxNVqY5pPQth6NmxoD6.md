---
schema: wang-person/v1
id: p_VtKCxNVqY5pPQth6NmxoD6
status: active
merged_into: null
display_name: 王延稟
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5bDPxygFGuzafj3yd7ftWh
        subject_person_id: p_VtKCxNVqY5pPQth6NmxoD6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王延稟（9世纪—931年），原名周彥琛，五代十國時期閩太祖王審知的養子。王审知墓志铭称其为次子。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_3R5xPseO3F3qlZEpiY9Axp
          claim_id: c_5bDPxygFGuzafj3yd7ftWh
          source_id: s_FOC9qABPYlqn-s5f8eiga7
          stance: supports
          locator: 导言
          quotation: 王延稟（9世纪—931年），原名周彥琛，五代十國時期閩太祖王審知
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikipedia。
          source:
            id: s_FOC9qABPYlqn-s5f8eiga7
            source_type: website
            title: 中文维基百科：王延稟
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%BB%B6%E7%A8%9F
            external_identifier: Q10413922
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-06T22:33:22.403Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_uvCydf76JHZoB7zAxhZ5n5
        subject_person_id: p_VtKCxNVqY5pPQth6NmxoD6
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 931年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0931-01-01
            latest: 0931-12-31
            precision: year
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_jZatoVhTqZA4fsZR7YAbRi
          claim_id: c_uvCydf76JHZoB7zAxhZ5n5
          source_id: s_nGmH7AuPfZe5zfdk2PdDGG
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_nGmH7AuPfZe5zfdk2PdDGG
            source_type: api_record
            title: 维基数据：王延稟（Q10413922）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q10413922
            external_identifier: Q10413922
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:44:41.667Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_QgwANKeE5u58a2L4LQjs4E
        subject_person_id: p_VtKCxNVqY5pPQth6NmxoD6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王延稟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_fqKRtQHdUesANiy9ZYTGGy
          claim_id: c_QgwANKeE5u58a2L4LQjs4E
          source_id: s_nGmH7AuPfZe5zfdk2PdDGG
          stance: supports
          locator: Q10413922
          quotation: null
          interpretation_note: null
          source:
            id: s_nGmH7AuPfZe5zfdk2PdDGG
            source_type: api_record
            title: 维基数据：王延稟（Q10413922）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q10413922
            external_identifier: Q10413922
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:44:41.667Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Y7b1ruVpCAmqh5nE1jLr6P
        subject_person_id: p_8YMP7N65fqbbLv9pMGphFA
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_VtKCxNVqY5pPQth6NmxoD6
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_BxQBMD98JcMRyBTL6hPSTu
          claim_id: c_Y7b1ruVpCAmqh5nE1jLr6P
          source_id: s_nGmH7AuPfZe5zfdk2PdDGG
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_nGmH7AuPfZe5zfdk2PdDGG
            source_type: api_record
            title: 维基数据：王延稟（Q10413922）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q10413922
            external_identifier: Q10413922
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:44:41.667Z
            metadata_json: null
        - id: cs_i412o6t2LXjumee6ic43GP
          claim_id: c_Y7b1ruVpCAmqh5nE1jLr6P
          source_id: s_BYvayLpGj9Y1h85cB71ggG
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_BYvayLpGj9Y1h85cB71ggG
            source_type: api_record
            title: 维基数据：王审知（Q708354）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q708354
            external_identifier: Q708354
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:58:53.403Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%AF%A9%E7%9F%A5
      object_person:
        id: p_8YMP7N65fqbbLv9pMGphFA
        status: active
        display_name: 王审知
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王延稟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王延稟（9世纪—931年），原名周彥琛，五代十國時期閩太祖王審知的養子。王审知墓志铭称其为次子。 | accepted |
| death.date | 931年 | accepted |
| name.primary | 王延稟 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_8YMP7N65fqbbLv9pMGphFA | 王审知 | accepted |

## 外部来源

- [维基数据：王审知（Q708354）](https://www.wikidata.org/wiki/Q708354)
- [维基数据：王延稟（Q10413922）](https://www.wikidata.org/wiki/Q10413922)
- [中文维基百科：王延稟](https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%BB%B6%E7%A8%9F)
