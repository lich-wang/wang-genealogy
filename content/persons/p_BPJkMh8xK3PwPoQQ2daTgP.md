---
schema: wang-person/v1
id: p_BPJkMh8xK3PwPoQQ2daTgP
status: active
merged_into: null
display_name: 王緗
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_kVUNevfLPChtXhjjgVg6WG
        subject_person_id: p_BPJkMh8xK3PwPoQQ2daTgP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王緗
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Umm4Kem6NJ29K39uoJZDpN
          claim_id: c_kVUNevfLPChtXhjjgVg6WG
          source_id: s_cMEvA1SQo3ME1n6FKzMyyR
          stance: supports
          locator: CBDB:568674
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（568674）
          source: &a1
            id: s_cMEvA1SQo3ME1n6FKzMyyR
            source_type: api_record
            title: 中国历代人物传记资料库：王緗（CBDB 568674）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=568674&o=json
            external_identifier: CBDB:568674
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.592Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MccY9toFk2osKqyZ1nxWud
        subject_person_id: p_BPJkMh8xK3PwPoQQ2daTgP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王緗，清人物。籍贯山陰。（中国历代人物传记资料库 CBDB 568674）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_rmqi797x3AiaffnPBqSQ-2
          claim_id: c_MccY9toFk2osKqyZ1nxWud
          source_id: s_cMEvA1SQo3ME1n6FKzMyyR
          stance: supports
          locator: CBDB:568674
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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

# 王緗

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王緗 | accepted |
| bio.summary | 王緗，清人物。籍贯山陰。（中国历代人物传记资料库 CBDB 568674） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王緗（CBDB 568674）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=568674&o=json)
