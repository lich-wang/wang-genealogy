---
schema: wang-person/v1
id: p_x8JwNC1P1FDSattWhW1YyM
status: active
merged_into: null
display_name: 王蕃
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hEbj4hXnnCr4goGVJhh4tz
        subject_person_id: p_x8JwNC1P1FDSattWhW1YyM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王蕃
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KLgctKBmb7v8UD1HGKtKvL
          claim_id: c_hEbj4hXnnCr4goGVJhh4tz
          source_id: s_2vCiU6LkT9fJVBxcnvMc9z
          stance: supports
          locator: CBDB:640164
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640164）
          source: &a1
            id: s_2vCiU6LkT9fJVBxcnvMc9z
            source_type: api_record
            title: 中国历代人物传记资料库：王蕃（CBDB 640164）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640164&o=json
            external_identifier: CBDB:640164
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.033Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5nX4Yk51QZfWKu9zETtHt8
        subject_person_id: p_x8JwNC1P1FDSattWhW1YyM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王蕃，清人物。籍贯山陰，曾任經歷。（中国历代人物传记资料库 CBDB 640164）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_NWTF-oMEPW_VxNS10dt3m0
          claim_id: c_5nX4Yk51QZfWKu9zETtHt8
          source_id: s_2vCiU6LkT9fJVBxcnvMc9z
          stance: supports
          locator: CBDB:640164
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

# 王蕃

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王蕃 | accepted |
| bio.summary | 王蕃，清人物。籍贯山陰，曾任經歷。（中国历代人物传记资料库 CBDB 640164） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王蕃（CBDB 640164）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640164&o=json)
