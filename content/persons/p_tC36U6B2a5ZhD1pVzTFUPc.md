---
schema: wang-person/v1
id: p_tC36U6B2a5ZhD1pVzTFUPc
status: active
merged_into: null
display_name: 王德
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_UBM8MJcHK53tPnKtNp5UVQ
        subject_person_id: p_tC36U6B2a5ZhD1pVzTFUPc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_L9AY6PSwLEcEctU9JRCe7W
          claim_id: c_UBM8MJcHK53tPnKtNp5UVQ
          source_id: s_tz854Q1HCcuYCGYcvAiHzU
          stance: supports
          locator: CBDB:496308
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（496308）
          source: &a1
            id: s_tz854Q1HCcuYCGYcvAiHzU
            source_type: api_record
            title: 中国历代人物传记资料库：王德（CBDB 496308）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=496308&o=json
            external_identifier: CBDB:496308
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.553Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_94C8Kibur8PYStmNBwS3PK
        subject_person_id: p_tC36U6B2a5ZhD1pVzTFUPc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德，明人物。曾任州判官。（中国历代人物传记资料库 CBDB 496308）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_srD8CIyduuVlhrhkiUpGff
          claim_id: c_94C8Kibur8PYStmNBwS3PK
          source_id: s_tz854Q1HCcuYCGYcvAiHzU
          stance: supports
          locator: CBDB:496308
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

# 王德

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王德 | accepted |
| bio.summary | 王德，明人物。曾任州判官。（中国历代人物传记资料库 CBDB 496308） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王德（CBDB 496308）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=496308&o=json)
