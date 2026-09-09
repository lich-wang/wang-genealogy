---
schema: wang-person/v1
id: p_C113PDwN61bPuPn6GPb5Nq
status: active
merged_into: null
display_name: 王迪
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_z472YizDEseD9NNnagdm12
        subject_person_id: p_C113PDwN61bPuPn6GPb5Nq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王迪
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Kq8rGuRLjWdRgVpMVBtEn5
          claim_id: c_z472YizDEseD9NNnagdm12
          source_id: s_kj5HwyQgCtCD2tQGmtKfCJ
          stance: supports
          locator: CBDB:686457
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（686457）
          source: &a1
            id: s_kj5HwyQgCtCD2tQGmtKfCJ
            source_type: api_record
            title: 中国历代人物传记资料库：王迪（CBDB 686457）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=686457&o=json
            external_identifier: CBDB:686457
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.379Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_rqsHNQDxng93QXveJDwKUn
        subject_person_id: p_C113PDwN61bPuPn6GPb5Nq
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
        - id: cs_1qM9r8KmX9zET8Cbt2V65V
          claim_id: c_rqsHNQDxng93QXveJDwKUn
          source_id: s_kj5HwyQgCtCD2tQGmtKfCJ
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

# 王迪

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王迪 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王迪（CBDB 686457）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=686457&o=json)
