---
schema: wang-person/v1
id: p_zLTgkjm63M1tXKWgw7CKPi
status: active
merged_into: null
display_name: 王積泉
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hj9gTwvxJAd5fPp4EzKWtk
        subject_person_id: p_zLTgkjm63M1tXKWgw7CKPi
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王積泉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_dqyjBUPV93SmnJ6shfjN7c
          claim_id: c_hj9gTwvxJAd5fPp4EzKWtk
          source_id: s_YfjKpLDGzp895sCW5b5f9A
          stance: supports
          locator: CBDB:639682
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639682）
          source: &a1
            id: s_YfjKpLDGzp895sCW5b5f9A
            source_type: api_record
            title: 中国历代人物传记资料库：王積泉（CBDB 639682）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639682&o=json
            external_identifier: CBDB:639682
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.015Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_VSFyJC8xXanG6eHDvzTDZQ
        subject_person_id: p_zLTgkjm63M1tXKWgw7CKPi
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
        - id: cs_dTz8Ka8MRvNfbNRhesJHir
          claim_id: c_VSFyJC8xXanG6eHDvzTDZQ
          source_id: s_YfjKpLDGzp895sCW5b5f9A
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

# 王積泉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王積泉 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王積泉（CBDB 639682）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639682&o=json)
