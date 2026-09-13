---
schema: wang-person/v1
id: p_9jcAeWsLJyBxJk7tgcLm3Q
status: active
merged_into: null
display_name: 王宣辰
cbdb_id: 71917
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_YJFHdmdpW1Ls4mAuKJPU7r
        subject_person_id: p_9jcAeWsLJyBxJk7tgcLm3Q
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宣辰（生于1840年），清人物。籍贯閩縣。（中国历代人物传记资料库 CBDB 71917）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_HcsqCSNoNGx_GtwLHsViN_
          claim_id: c_YJFHdmdpW1Ls4mAuKJPU7r
          source_id: s_SrD2W8HG5ggQKXz8QYSJoe
          stance: supports
          locator: CBDB:71917
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_SrD2W8HG5ggQKXz8QYSJoe
            source_type: api_record
            title: 中国历代人物传记资料库：王宣辰（CBDB 71917）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71917&o=json
            external_identifier: CBDB:71917
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_sBCDpW8P1ZgvnVAWekov1d
        subject_person_id: p_9jcAeWsLJyBxJk7tgcLm3Q
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1840年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1840-01-01
            latest: 1840-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_fPRxx8gRmabym8fYQgKs87
          claim_id: c_sBCDpW8P1ZgvnVAWekov1d
          source_id: s_SrD2W8HG5ggQKXz8QYSJoe
          stance: supports
          locator: CBDB:71917
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（701-800）｜历史性依据：CBDB 生年 = 1840
          source:
            id: s_SrD2W8HG5ggQKXz8QYSJoe
            source_type: api_record
            title: 中国历代人物传记资料库：王宣辰（CBDB 71917）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71917&o=json
            external_identifier: CBDB:71917
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_qjqz4JNi81AQrRk8JgHPMh
        subject_person_id: p_9jcAeWsLJyBxJk7tgcLm3Q
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宣辰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_5Jajje4aoKQVQULfMqU6Z4
          claim_id: c_qjqz4JNi81AQrRk8JgHPMh
          source_id: s_SrD2W8HG5ggQKXz8QYSJoe
          stance: supports
          locator: CBDB:71917
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（701-800）｜历史性依据：CBDB 生年 = 1840
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

# 王宣辰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王宣辰（生于1840年），清人物。籍贯閩縣。（中国历代人物传记资料库 CBDB 71917） | accepted |
| birth.date | 1840年 | accepted |
| name.primary | 王宣辰 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王宣辰（CBDB 71917）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71917&o=json)
