---
schema: wang-person/v1
id: p_ELoQyJGyGoWVqQ8P7631gK
status: active
merged_into: null
display_name: 王向
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ORQeSIubC34a_DwYdS9479
        subject_person_id: p_ELoQyJGyGoWVqQ8P7631gK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王向（？—23年），新朝宗室，王莽三叔平阿侯王譚之子，王仁、王去疾、王閎之弟。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_tQPz3olxlpGQ4x_CRA25ZA
          claim_id: c_ORQeSIubC34a_DwYdS9479
          source_id: s_2pWZPKcNjqRgVryqyKkyX2
          stance: supports
          locator: 导言
          quotation: 王向（？—23年），新朝宗室，王莽三叔平阿侯王譚之子，王仁、王去
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikipedia。
          source:
            id: s_2pWZPKcNjqRgVryqyKkyX2
            source_type: website
            title: 中文维基百科：王向
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%90%91
            external_identifier: Q26209988
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-11T10:29:31.867Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Vov87MkcxCJgnkPbX9J6rk
        subject_person_id: p_ELoQyJGyGoWVqQ8P7631gK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王向
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_DYN74jBQXbnFtR8vQfYkVx
          claim_id: c_Vov87MkcxCJgnkPbX9J6rk
          source_id: s_2bKA3CKU2zNGsdHXrkF52i
          stance: supports
          locator: Q26209988
          quotation: null
          interpretation_note: null
          source:
            id: s_2bKA3CKU2zNGsdHXrkF52i
            source_type: api_record
            title: 维基数据：王向（Q26209988）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q26209988
            external_identifier: Q26209988
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:10:09.879Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%90%91
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_2L9ESsvgHrrySGGreJuF7X
        subject_person_id: p_A3jqrz5MCP94kKUqSaDLU1
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ELoQyJGyGoWVqQ8P7631gK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_nA3quJPyoW5sYZf2yBV9Zx
          claim_id: c_2L9ESsvgHrrySGGreJuF7X
          source_id: s_3PdNBCgo98QJFJBc4fy4Z5
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_3PdNBCgo98QJFJBc4fy4Z5
            source_type: api_record
            title: 维基数据：王谭（Q1969370）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q1969370
            external_identifier: Q1969370
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:49:40.086Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%B0%AD
        - id: cs_6a3RRoDhZ2Duq5KG4VS8kQ
          claim_id: c_2L9ESsvgHrrySGGreJuF7X
          source_id: s_2bKA3CKU2zNGsdHXrkF52i
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_2bKA3CKU2zNGsdHXrkF52i
            source_type: api_record
            title: 维基数据：王向（Q26209988）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q26209988
            external_identifier: Q26209988
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:10:09.879Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%90%91
        - id: cs_9tk3XAQdzPoH145Q6WGmBk
          claim_id: c_2L9ESsvgHrrySGGreJuF7X
          source_id: s_X3EsUAJSfq8VKAWAm2tpCe
          stance: supports
          locator: 条文：之子/之女
          quotation: 王向{{BD|？||23年|}}，新朝宗室，王莽三叔平阿侯王譚之子，王仁、王去疾、王閎之弟
          interpretation_note: null
          source:
            id: s_X3EsUAJSfq8VKAWAm2tpCe
            source_type: website
            title: 中文维基百科：王向
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%90%91
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:25:47.437Z
            metadata_json: null
        - id: cs_2PBkAs5thEZkLtYPYcM2wX
          claim_id: c_2L9ESsvgHrrySGGreJuF7X
          source_id: s_YRwx8pmDtti1sTvT6UaHPX
          stance: supports
          locator: 条文：之子/之女
          quotation: 王向，新朝宗室，王莽三叔平阿侯王譚之子，王仁、王去疾、王閎之弟
          interpretation_note: null
          source:
            id: s_YRwx8pmDtti1sTvT6UaHPX
            source_type: website
            title: 中文维基百科：王向
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%90%91
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:54:04.833Z
            metadata_json: null
      object_person:
        id: p_A3jqrz5MCP94kKUqSaDLU1
        status: active
        display_name: 王谭
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王向

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王向（？—23年），新朝宗室，王莽三叔平阿侯王譚之子，王仁、王去疾、王閎之弟。 | accepted |
| name.primary | 王向 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_A3jqrz5MCP94kKUqSaDLU1 | 王谭 | accepted |

## 外部来源

- [维基数据：王谭（Q1969370）](https://www.wikidata.org/wiki/Q1969370)
- [维基数据：王向（Q26209988）](https://www.wikidata.org/wiki/Q26209988)
- [中文维基百科：王向](https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%90%91)
