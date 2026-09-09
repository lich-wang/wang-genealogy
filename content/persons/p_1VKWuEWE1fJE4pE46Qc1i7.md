---
schema: wang-person/v1
id: p_1VKWuEWE1fJE4pE46Qc1i7
status: active
merged_into: null
display_name: 王可
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_PcrqtoFXUL1CziHoEJioe1
        subject_person_id: p_1VKWuEWE1fJE4pE46Qc1i7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王可
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LtCdMxZ6nEEMw4n3trsXih
          claim_id: c_PcrqtoFXUL1CziHoEJioe1
          source_id: s_gkq23TgMri7G8Z9JYoYCR7
          stance: supports
          locator: CBDB:540990
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（540990）
          source: &a1
            id: s_gkq23TgMri7G8Z9JYoYCR7
            source_type: api_record
            title: 中国历代人物传记资料库：王可（CBDB 540990）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=540990&o=json
            external_identifier: CBDB:540990
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.454Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6AG3GaPq2AynY42fT1DXR6
        subject_person_id: p_1VKWuEWE1fJE4pE46Qc1i7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zuQDgmZexJCr9P6LXF1v5n
          claim_id: c_6AG3GaPq2AynY42fT1DXR6
          source_id: s_gkq23TgMri7G8Z9JYoYCR7
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

# 王可

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王可 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王可（CBDB 540990）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=540990&o=json)
