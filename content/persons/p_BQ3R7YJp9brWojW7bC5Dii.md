---
schema: wang-person/v1
id: p_BQ3R7YJp9brWojW7bC5Dii
status: active
merged_into: null
display_name: 王其窿
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_rbcBGmh1H866Lg9QtvS3s4
        subject_person_id: p_BQ3R7YJp9brWojW7bC5Dii
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王其窿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2NekVMT5CMcvAduKaLeWmH
          claim_id: c_rbcBGmh1H866Lg9QtvS3s4
          source_id: s_Aa7keEJuow15ngyt7sD5ZG
          stance: supports
          locator: CBDB:556811
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（556811）
          source: &a1
            id: s_Aa7keEJuow15ngyt7sD5ZG
            source_type: api_record
            title: 中国历代人物传记资料库：王其窿（CBDB 556811）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=556811&o=json
            external_identifier: CBDB:556811
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.533Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EK5QiGW6W58GkB5V5KohAn
        subject_person_id: p_BQ3R7YJp9brWojW7bC5Dii
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
        - id: cs_VUQcKNAHa6TCPyAoAREQ8h
          claim_id: c_EK5QiGW6W58GkB5V5KohAn
          source_id: s_Aa7keEJuow15ngyt7sD5ZG
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

# 王其窿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王其窿 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王其窿（CBDB 556811）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=556811&o=json)
