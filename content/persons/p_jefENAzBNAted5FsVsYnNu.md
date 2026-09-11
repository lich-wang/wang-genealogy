---
schema: wang-person/v1
id: p_jefENAzBNAted5FsVsYnNu
status: active
merged_into: null
display_name: 王忻
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ay2ZnWvQn7Jgk7ZjHxQLH3
        subject_person_id: p_jefENAzBNAted5FsVsYnNu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王忻
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_m3YJwu56EP83K6Vd5CmiQ5
          claim_id: c_ay2ZnWvQn7Jgk7ZjHxQLH3
          source_id: s_S6rnAL2pZxmpqYTQk4ftCv
          stance: supports
          locator: CBDB:572204
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（572204）
          source: &a1
            id: s_S6rnAL2pZxmpqYTQk4ftCv
            source_type: api_record
            title: 中国历代人物传记资料库：王忻（CBDB 572204）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=572204&o=json
            external_identifier: CBDB:572204
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.887Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_dXFNFr4FDt7UdrPfG71JP8
        subject_person_id: p_jefENAzBNAted5FsVsYnNu
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王忻，明人物。籍贯績溪，曾任知縣。（中国历代人物传记资料库 CBDB 572204）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_of80jkQIyFMnkZ6gqmn674
          claim_id: c_dXFNFr4FDt7UdrPfG71JP8
          source_id: s_S6rnAL2pZxmpqYTQk4ftCv
          stance: supports
          locator: CBDB:572204
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

# 王忻

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王忻 | accepted |
| bio.summary | 王忻，明人物。籍贯績溪，曾任知縣。（中国历代人物传记资料库 CBDB 572204） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王忻（CBDB 572204）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=572204&o=json)
