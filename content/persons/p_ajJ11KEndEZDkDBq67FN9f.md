---
schema: wang-person/v1
id: p_ajJ11KEndEZDkDBq67FN9f
status: active
merged_into: null
display_name: 王福
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QqD9BHDwPxwWkMsL7eD82R
        subject_person_id: p_ajJ11KEndEZDkDBq67FN9f
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王福
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Y9AjiHvrwSGRnB9D57oroN
          claim_id: c_QqD9BHDwPxwWkMsL7eD82R
          source_id: s_uVjfgH9Smn4PkPth84M2Ph
          stance: supports
          locator: CBDB:573017
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（573017）
          source: &a1
            id: s_uVjfgH9Smn4PkPth84M2Ph
            source_type: api_record
            title: 中国历代人物传记资料库：王福（CBDB 573017）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=573017&o=json
            external_identifier: CBDB:573017
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.894Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_dwkcVXgXsLXYxj1oP3k6A4
        subject_person_id: p_ajJ11KEndEZDkDBq67FN9f
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王福，明人物。籍贯歙縣，曾任知縣。（中国历代人物传记资料库 CBDB 573017）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_7Io-QcuD0BYq8Xbj3pPgk_
          claim_id: c_dwkcVXgXsLXYxj1oP3k6A4
          source_id: s_uVjfgH9Smn4PkPth84M2Ph
          stance: supports
          locator: CBDB:573017
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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

# 王福

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王福 | accepted |
| bio.summary | 王福，明人物。籍贯歙縣，曾任知縣。（中国历代人物传记资料库 CBDB 573017） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王福（CBDB 573017）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=573017&o=json)
