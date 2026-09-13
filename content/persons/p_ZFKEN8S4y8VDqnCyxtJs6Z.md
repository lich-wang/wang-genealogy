---
schema: wang-person/v1
id: p_ZFKEN8S4y8VDqnCyxtJs6Z
status: active
merged_into: null
display_name: 王希禮
cbdb_id: 308735
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KEwkGC4D7ty3uEWqYRhhib
        subject_person_id: p_ZFKEN8S4y8VDqnCyxtJs6Z
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王希禮，史料所见人物。本项目依据《中国历代人物传记资料库：王希禮（CBDB 308735）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_qXtXei9TZX_RLwn1Vi-Zqk
          claim_id: c_KEwkGC4D7ty3uEWqYRhhib
          source_id: s_xKVSqfXdo9zEF7oWMqHgHk
          stance: supports
          locator: CBDB:308735
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_xKVSqfXdo9zEF7oWMqHgHk
            source_type: api_record
            title: 中国历代人物传记资料库：王希禮（CBDB 308735）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308735&o=json
            external_identifier: CBDB:308735
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:05.361Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_zTKswnaFrMzwwuRk4t4zSx
        subject_person_id: p_ZFKEN8S4y8VDqnCyxtJs6Z
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王希禮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_ZWcFPJCKmr74e2E9yLEb6k
          claim_id: c_zTKswnaFrMzwwuRk4t4zSx
          source_id: s_xKVSqfXdo9zEF7oWMqHgHk
          stance: supports
          locator: CBDB:308735
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3601-3700）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_t3HMVVoWegPFohjlqZWmTe
        subject_person_id: p_ZFKEN8S4y8VDqnCyxtJs6Z
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_LPzYRgFrvHZtoR8m7zKq9v
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9uYsU2lXTF7npPhl1JqM7P
          claim_id: c_t3HMVVoWegPFohjlqZWmTe
          source_id: s_xKVSqfXdo9zEF7oWMqHgHk
          stance: supports
          locator: 嘉靖二十六年進士登科錄:一卷，第二甲第二十二名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_xKVSqfXdo9zEF7oWMqHgHk
            source_type: api_record
            title: 中国历代人物传记资料库：王希禮（CBDB 308735）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308735&o=json
            external_identifier: CBDB:308735
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:05.361Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_LPzYRgFrvHZtoR8m7zKq9v
        status: active
        display_name: 王時槐
        merged_into_person_id: null
  other: []
---

# 王希禮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王希禮，史料所见人物。本项目依据《中国历代人物传记资料库：王希禮（CBDB 308735）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王希禮 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_LPzYRgFrvHZtoR8m7zKq9v | 王時槐 | accepted |

## 外部来源

- [中国历代人物传记资料库：王希禮（CBDB 308735）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308735&o=json)
