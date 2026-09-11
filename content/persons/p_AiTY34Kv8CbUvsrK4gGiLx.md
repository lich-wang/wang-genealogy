---
schema: wang-person/v1
id: p_AiTY34Kv8CbUvsrK4gGiLx
status: active
merged_into: null
display_name: 王默齋
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_15JcS8wAx2n2eKVSjeVXhB
        subject_person_id: p_AiTY34Kv8CbUvsrK4gGiLx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王默齋
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zRPGJqTRM2GqKoaMfNjNCA
          claim_id: c_15JcS8wAx2n2eKVSjeVXhB
          source_id: s_U14HLZ59vbKwvZNMmnBZ4c
          stance: supports
          locator: CBDB:527982
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（527982）
          source: &a1
            id: s_U14HLZ59vbKwvZNMmnBZ4c
            source_type: api_record
            title: 中国历代人物传记资料库：王默齋（CBDB 527982）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=527982&o=json
            external_identifier: CBDB:527982
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.348Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_iQVyRm5UDGcYVNGHK3r7Qo
        subject_person_id: p_AiTY34Kv8CbUvsrK4gGiLx
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王默齋，史料所见人物。本项目依据《中国历代人物传记资料库：王默齋（CBDB 527982）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_F-sLxyhLw0rj0fkdJ9q-7s
          claim_id: c_iQVyRm5UDGcYVNGHK3r7Qo
          source_id: s_U14HLZ59vbKwvZNMmnBZ4c
          stance: supports
          locator: CBDB:527982
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
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
  descendants: []
  other: []
---

# 王默齋

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王默齋 | accepted |
| bio.summary | 王默齋，史料所见人物。本项目依据《中国历代人物传记资料库：王默齋（CBDB 527982）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王默齋（CBDB 527982）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=527982&o=json)
