---
schema: wang-person/v1
id: p_Zp7FXq6ftrNdczJuXnD7vR
status: active
merged_into: null
display_name: 王伯勝
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_PMf9n1d2U1eB4m8AVnRn7d
        subject_person_id: p_Zp7FXq6ftrNdczJuXnD7vR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王伯勝
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Y4GKM42AATu42qWL9jRxZ4
          claim_id: c_PMf9n1d2U1eB4m8AVnRn7d
          source_id: s_LmAqg1SubZdRGwKCDBzK2u
          stance: supports
          locator: CBDB:231743
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（231743）
          source: &a1
            id: s_LmAqg1SubZdRGwKCDBzK2u
            source_type: api_record
            title: 中国历代人物传记资料库：王伯勝（CBDB 231743）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231743&o=json
            external_identifier: CBDB:231743
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.652Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_k7FedWDWZsQRE3ShFJrcDF
        subject_person_id: p_Zp7FXq6ftrNdczJuXnD7vR
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1cv5Z8q5io8tnzboeQNLCk
          claim_id: c_k7FedWDWZsQRE3ShFJrcDF
          source_id: s_LmAqg1SubZdRGwKCDBzK2u
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

# 王伯勝

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王伯勝 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王伯勝（CBDB 231743）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231743&o=json)
