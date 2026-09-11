---
schema: wang-person/v1
id: p_GwYfdruF8C5JeHuLHvGeEV
status: active
merged_into: null
display_name: 王懋功
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3u5xYZf4SCB3kA91fCENoM
        subject_person_id: p_GwYfdruF8C5JeHuLHvGeEV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王懋功
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KYF3fd4oJwJYLxHBiTyRVF
          claim_id: c_3u5xYZf4SCB3kA91fCENoM
          source_id: s_V8YHABZUvKz8tLfos399Ai
          stance: supports
          locator: CBDB:334282
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（334282）
          source: &a1
            id: s_V8YHABZUvKz8tLfos399Ai
            source_type: api_record
            title: 中国历代人物传记资料库：王懋功（CBDB 334282）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334282&o=json
            external_identifier: CBDB:334282
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.443Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_oGA1hAFYRU6GN4MJ3R7ZLL
        subject_person_id: p_GwYfdruF8C5JeHuLHvGeEV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王懋功，明人物。隆慶二年進士，籍贯文昌。（中国历代人物传记资料库 CBDB 334282）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_yuLykxbvTNY8H0n-pWxPpL
          claim_id: c_oGA1hAFYRU6GN4MJ3R7ZLL
          source_id: s_V8YHABZUvKz8tLfos399Ai
          stance: supports
          locator: CBDB:334282
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

# 王懋功

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王懋功 | accepted |
| bio.summary | 王懋功，明人物。隆慶二年進士，籍贯文昌。（中国历代人物传记资料库 CBDB 334282） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王懋功（CBDB 334282）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334282&o=json)
