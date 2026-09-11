---
schema: wang-person/v1
id: p_YZX5yGqbKywJwLnETpJrDX
status: active
merged_into: null
display_name: 王娥芳
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_rh3g9vdcw7osS6F2ACNGk1
        subject_person_id: p_YZX5yGqbKywJwLnETpJrDX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王娥芳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_hJEQ7tX6h54tC6AQcSZGDZ
          claim_id: c_rh3g9vdcw7osS6F2ACNGk1
          source_id: s_yg4VzuhCE53vvVD9PLYUB1
          stance: supports
          locator: CBDB:568772
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（568772）
          source: &a1
            id: s_yg4VzuhCE53vvVD9PLYUB1
            source_type: api_record
            title: 中国历代人物传记资料库：王娥芳（CBDB 568772）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=568772&o=json
            external_identifier: CBDB:568772
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.623Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_iVgEUZFdWn982S3MSbD5hH
        subject_person_id: p_YZX5yGqbKywJwLnETpJrDX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王娥芳，清人物。籍贯泰州。（中国历代人物传记资料库 CBDB 568772）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_kLvaC4KDlC0M_JlYcV3Am5
          claim_id: c_iVgEUZFdWn982S3MSbD5hH
          source_id: s_yg4VzuhCE53vvVD9PLYUB1
          stance: supports
          locator: CBDB:568772
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

# 王娥芳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王娥芳 | accepted |
| bio.summary | 王娥芳，清人物。籍贯泰州。（中国历代人物传记资料库 CBDB 568772） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王娥芳（CBDB 568772）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=568772&o=json)
