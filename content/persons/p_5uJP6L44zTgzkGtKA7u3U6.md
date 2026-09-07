---
schema: wang-person/v1
id: p_5uJP6L44zTgzkGtKA7u3U6
status: active
merged_into: null
display_name: 王玖
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_UljvXWbUY3SzY_8stp4B-Q
        subject_person_id: p_5uJP6L44zTgzkGtKA7u3U6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玖，史料所见人物。本项目依据《王翬》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_EDhkGguyLsae08Z3ywMxer
          claim_id: c_UljvXWbUY3SzY_8stp4B-Q
          source_id: s_MnoGmuNtvYKFRB1SUnYsyW
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_MnoGmuNtvYKFRB1SUnYsyW
            source_type: website
            title: 中文维基百科：王翬
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%BF%AC
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:14.441Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_1uxNFULHthj5CBF9VoArZ3
        subject_person_id: p_5uJP6L44zTgzkGtKA7u3U6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玖
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_nXdyEsWJ3jH5SCFe19Tnp4
          claim_id: c_1uxNFULHthj5CBF9VoArZ3
          source_id: s_MnoGmuNtvYKFRB1SUnYsyW
          stance: supports
          locator: Q113511228
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_beCnBTw8fj4JHC7VSHZycu
        subject_person_id: p_HP3QPZMDF4HvkU4ZVybJ3L
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_5uJP6L44zTgzkGtKA7u3U6
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2LwDFmdvyWC1YDVDerWZzQ
          claim_id: c_beCnBTw8fj4JHC7VSHZycu
          source_id: s_MnoGmuNtvYKFRB1SUnYsyW
          stance: supports
          locator: 条文：条文识读（曾孫）（3世）
          quotation: 曾孫王玖為"小四王"之一。
          interpretation_note: null
          source:
            id: s_MnoGmuNtvYKFRB1SUnYsyW
            source_type: website
            title: 中文维基百科：王翬
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%BF%AC
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:14.441Z
            metadata_json: null
      object_person:
        id: p_HP3QPZMDF4HvkU4ZVybJ3L
        status: active
        display_name: 王翬
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王玖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王玖，史料所见人物。本项目依据《王翬》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王玖 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_HP3QPZMDF4HvkU4ZVybJ3L | 王翬 | accepted |

## 外部来源

- [中文维基百科：王翬](https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%BF%AC)
