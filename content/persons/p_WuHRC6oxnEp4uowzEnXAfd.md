---
schema: wang-person/v1
id: p_WuHRC6oxnEp4uowzEnXAfd
status: active
merged_into: null
display_name: 王超祖
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_A86EJ6KtMUERiUgEh9H1RE
        subject_person_id: p_WuHRC6oxnEp4uowzEnXAfd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王超祖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7XP9HMXA93SqAHHwhWR9Q2
          claim_id: c_A86EJ6KtMUERiUgEh9H1RE
          source_id: s_E9vY7zkNoFtfLZ46vDXWYN
          stance: supports
          locator: CBDB:640363
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640363）
          source: &a1
            id: s_E9vY7zkNoFtfLZ46vDXWYN
            source_type: api_record
            title: 中国历代人物传记资料库：王超祖（CBDB 640363）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640363&o=json
            external_identifier: CBDB:640363
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.235Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_dapZBLb5pv7q6LkmqvKKi6
        subject_person_id: p_WuHRC6oxnEp4uowzEnXAfd
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王超祖，清人物。籍贯六合，入仕廩貢生，曾任復設訓導。（中国历代人物传记资料库 CBDB 640363）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_56Vd1wkc4CNZIGh5fYV52e
          claim_id: c_dapZBLb5pv7q6LkmqvKKi6
          source_id: s_E9vY7zkNoFtfLZ46vDXWYN
          stance: supports
          locator: CBDB:640363
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

# 王超祖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王超祖 | accepted |
| bio.summary | 王超祖，清人物。籍贯六合，入仕廩貢生，曾任復設訓導。（中国历代人物传记资料库 CBDB 640363） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王超祖（CBDB 640363）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640363&o=json)
