---
schema: wang-person/v1
id: p_2zCs788oBS47MX2zHbx5zM
status: active
merged_into: null
display_name: 王大經
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZadVaGzQfECgLuWteNbAum
        subject_person_id: p_2zCs788oBS47MX2zHbx5zM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大經
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_duGA64wNBfLN3ZmxoaJxfk
          claim_id: c_ZadVaGzQfECgLuWteNbAum
          source_id: s_DL1niFt5E8pCw5nGfEctXz
          stance: supports
          locator: CBDB:69092
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（69092）
          source: &a1
            id: s_DL1niFt5E8pCw5nGfEctXz
            source_type: api_record
            title: 中国历代人物传记资料库：王大經（CBDB 69092）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69092&o=json
            external_identifier: CBDB:69092
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.113Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_Dje3Cawz5eAUKMjkq3Wo76
        subject_person_id: p_2zCs788oBS47MX2zHbx5zM
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1621年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yLyKKRUiSwe7MQp2B8Qg7g
          claim_id: c_Dje3Cawz5eAUKMjkq3Wo76
          source_id: s_DL1niFt5E8pCw5nGfEctXz
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_3AQjF6RZwf2KFTUkYW2ngP
        subject_person_id: p_2zCs788oBS47MX2zHbx5zM
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1692年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HFDzvdABmPJ8mHvFQmr3dM
          claim_id: c_3AQjF6RZwf2KFTUkYW2ngP
          source_id: s_DL1niFt5E8pCw5nGfEctXz
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7AAFUTHwU2PfT7ND6vA6qa
        subject_person_id: p_2zCs788oBS47MX2zHbx5zM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qP1gFq78Kzq78uBfHf2Gh1
          claim_id: c_7AAFUTHwU2PfT7ND6vA6qa
          source_id: s_DL1niFt5E8pCw5nGfEctXz
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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

# 王大經

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王大經 | accepted |
| birth.date | 1621年 | accepted |
| death.date | 1692年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王大經（CBDB 69092）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69092&o=json)
