---
schema: wang-person/v1
id: p_qRtEUATvxAhrT8YupMexnv
status: active
merged_into: null
display_name: 王瞻
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_aXoCKU9EJgeuENGT5kpqAX
        subject_person_id: p_qRtEUATvxAhrT8YupMexnv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瞻
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GLi3zBUPY4EZr344qCt4HN
          claim_id: c_aXoCKU9EJgeuENGT5kpqAX
          source_id: s_yxL26MLBKVgjyC7zijZM46
          stance: supports
          locator: CBDB:450965
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（450965）
          source: &a1
            id: s_yxL26MLBKVgjyC7zijZM46
            source_type: api_record
            title: 中国历代人物传记资料库：王瞻（CBDB 450965）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=450965&o=json
            external_identifier: CBDB:450965
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.245Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Lbx49Fex3ve4pP3EzYHKYe
        subject_person_id: p_qRtEUATvxAhrT8YupMexnv
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为南齊人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LGibLeTSJ4cF32w4kGu8PM
          claim_id: c_Lbx49Fex3ve4pP3EzYHKYe
          source_id: s_yxL26MLBKVgjyC7zijZM46
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

# 王瞻

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瞻 | accepted |
| bio.summary | CBDB 记载为南齊人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王瞻（CBDB 450965）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=450965&o=json)
