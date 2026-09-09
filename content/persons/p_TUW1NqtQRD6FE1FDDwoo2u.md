---
schema: wang-person/v1
id: p_TUW1NqtQRD6FE1FDDwoo2u
status: active
merged_into: null
display_name: 王喜
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_fs8Br5nmb9DjpTunDXUPNV
        subject_person_id: p_TUW1NqtQRD6FE1FDDwoo2u
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王喜
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1sBLEUvSs8YP6EQL1rzgpL
          claim_id: c_fs8Br5nmb9DjpTunDXUPNV
          source_id: s_GLVAzhKC5GKsNaRJiN7fVf
          stance: supports
          locator: CBDB:100818
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（100818）
          source: &a1
            id: s_GLVAzhKC5GKsNaRJiN7fVf
            source_type: api_record
            title: 中国历代人物传记资料库：王喜（CBDB 100818）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100818&o=json
            external_identifier: CBDB:100818
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.472Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3egUV7zSV6A3mPDgWRMgi3
        subject_person_id: p_TUW1NqtQRD6FE1FDDwoo2u
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为元人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NMP9h2sYH89GFjomZQKPqz
          claim_id: c_3egUV7zSV6A3mPDgWRMgi3
          source_id: s_GLVAzhKC5GKsNaRJiN7fVf
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

# 王喜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王喜 | accepted |
| bio.summary | CBDB 记载为元人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王喜（CBDB 100818）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100818&o=json)
