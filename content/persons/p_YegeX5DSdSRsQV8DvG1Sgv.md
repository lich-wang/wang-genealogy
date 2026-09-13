---
schema: wang-person/v1
id: p_YegeX5DSdSRsQV8DvG1Sgv
status: active
merged_into: null
display_name: 王偌
cbdb_id: 30520
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_SMcPB7erGdKwoHG6CMPih5
        subject_person_id: p_YegeX5DSdSRsQV8DvG1Sgv
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王偌，宋人物。籍贯金華。（中国历代人物传记资料库 CBDB 30520）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_BpF-E0cr0Yv5_Hg7EwnLSa
          claim_id: c_SMcPB7erGdKwoHG6CMPih5
          source_id: s_KWhmPBXUt5iJsnVF6FF33Z
          stance: supports
          locator: CBDB:30520
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_KWhmPBXUt5iJsnVF6FF33Z
            source_type: api_record
            title: 中国历代人物传记资料库：王偌（CBDB 30520）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30520&o=json
            external_identifier: CBDB:30520
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:45.707Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_mRtd3jCaX72i6EEqCN1GDW
        subject_person_id: p_YegeX5DSdSRsQV8DvG1Sgv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王偌
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_V6WEbjBE9bThiVjXopziqw
          claim_id: c_mRtd3jCaX72i6EEqCN1GDW
          source_id: s_KWhmPBXUt5iJsnVF6FF33Z
          stance: supports
          locator: CBDB:30520
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1101-1200）｜历史性依据：CBDB 朝代 = 宋
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

# 王偌

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王偌，宋人物。籍贯金華。（中国历代人物传记资料库 CBDB 30520） | accepted |
| name.primary | 王偌 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王偌（CBDB 30520）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30520&o=json)
