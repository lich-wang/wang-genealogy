---
schema: wang-person/v1
id: p_XtM1MSnBq9KuTkH5BjYt3u
status: active
merged_into: null
display_name: 王綿翰
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7bc5gsBVNKyc4m7X1DCTMH
        subject_person_id: p_XtM1MSnBq9KuTkH5BjYt3u
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王綿翰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_a1zqGGUvJxo5pjJbmzUPsk
          claim_id: c_7bc5gsBVNKyc4m7X1DCTMH
          source_id: s_KLuBN4PHeLc8AD92KZuva5
          stance: supports
          locator: CBDB:562422
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（562422）
          source: &a1
            id: s_KLuBN4PHeLc8AD92KZuva5
            source_type: api_record
            title: 中国历代人物传记资料库：王綿翰（CBDB 562422）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=562422&o=json
            external_identifier: CBDB:562422
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.559Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_f7BXGay1K5jT2zL2ko8oQ9
        subject_person_id: p_XtM1MSnBq9KuTkH5BjYt3u
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
        - id: cs_beKxg8L6WsNwQy2sdFRPDT
          claim_id: c_f7BXGay1K5jT2zL2ko8oQ9
          source_id: s_KLuBN4PHeLc8AD92KZuva5
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

# 王綿翰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王綿翰 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王綿翰（CBDB 562422）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=562422&o=json)
