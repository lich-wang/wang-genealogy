---
schema: wang-person/v1
id: p_woW82SSqwfg7oU4zqhse5p
status: active
merged_into: null
display_name: 王家正
cbdb_id: 461456
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_j7a3NsGJDcineHy81FrXcv
        subject_person_id: p_woW82SSqwfg7oU4zqhse5p
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王家正，明人物。曾任訓導。（中国历代人物传记资料库 CBDB 461456）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_hJWsNTlixvmji2LnlSQBb2
          claim_id: c_j7a3NsGJDcineHy81FrXcv
          source_id: s_Wd6inN5AKokdKvMRpj6JCC
          stance: supports
          locator: CBDB:461456
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_Wd6inN5AKokdKvMRpj6JCC
            source_type: api_record
            title: 中国历代人物传记资料库：王家正（CBDB 461456）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=461456&o=json
            external_identifier: CBDB:461456
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:13.763Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_MKx7qAaz1N6y1TGqzP9tjW
        subject_person_id: p_woW82SSqwfg7oU4zqhse5p
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王家正
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_dT96bryK4GuM79i1HeD1EW
          claim_id: c_MKx7qAaz1N6y1TGqzP9tjW
          source_id: s_Wd6inN5AKokdKvMRpj6JCC
          stance: supports
          locator: CBDB:461456
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（6601-6700）｜历史性依据：CBDB 朝代 = 明
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

# 王家正

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王家正，明人物。曾任訓導。（中国历代人物传记资料库 CBDB 461456） | accepted |
| name.primary | 王家正 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王家正（CBDB 461456）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=461456&o=json)
