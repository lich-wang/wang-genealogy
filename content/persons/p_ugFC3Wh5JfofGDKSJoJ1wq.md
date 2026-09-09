---
schema: wang-person/v1
id: p_ugFC3Wh5JfofGDKSJoJ1wq
status: active
merged_into: null
display_name: 王沂
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_mbEH4CHwoAq42LMo1Uma2b
        subject_person_id: p_ugFC3Wh5JfofGDKSJoJ1wq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王沂
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_dXSRH1ydf5JBdri762ADRj
          claim_id: c_mbEH4CHwoAq42LMo1Uma2b
          source_id: s_uCRr5BKvgAwp3GdofvDZVR
          stance: supports
          locator: CBDB:562906
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（562906）
          source: &a1
            id: s_uCRr5BKvgAwp3GdofvDZVR
            source_type: api_record
            title: 中国历代人物传记资料库：王沂（CBDB 562906）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=562906&o=json
            external_identifier: CBDB:562906
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.792Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EBJPVHzGr7N87k7NKbHw41
        subject_person_id: p_ugFC3Wh5JfofGDKSJoJ1wq
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
        - id: cs_zKdy9E8MDHV37Q2CmZNS11
          claim_id: c_EBJPVHzGr7N87k7NKbHw41
          source_id: s_uCRr5BKvgAwp3GdofvDZVR
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

# 王沂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王沂 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王沂（CBDB 562906）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=562906&o=json)
