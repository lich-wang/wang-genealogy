---
schema: wang-person/v1
id: p_VpzdGMnpetGdfL1s9qDhF6
status: active
merged_into: null
display_name: 王貴
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_R48GBg6XHj7gSo4xFA3xNd
        subject_person_id: p_VpzdGMnpetGdfL1s9qDhF6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王貴
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_R5T8YQ18YbKhKiBo8G9GTE
          claim_id: c_R48GBg6XHj7gSo4xFA3xNd
          source_id: s_9NKc9ZxHWrurxz7G4b9gvN
          stance: supports
          locator: CBDB:550759
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（550759）
          source: &a1
            id: s_9NKc9ZxHWrurxz7G4b9gvN
            source_type: api_record
            title: 中国历代人物传记资料库：王貴（CBDB 550759）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=550759&o=json
            external_identifier: CBDB:550759
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.568Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_oX3MRJJ81ThSnHV1iADsUy
        subject_person_id: p_VpzdGMnpetGdfL1s9qDhF6
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
        - id: cs_22TVFUXgffaHZLk8a8GNC3
          claim_id: c_oX3MRJJ81ThSnHV1iADsUy
          source_id: s_9NKc9ZxHWrurxz7G4b9gvN
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

# 王貴

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王貴 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王貴（CBDB 550759）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=550759&o=json)
