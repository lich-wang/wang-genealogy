---
schema: wang-person/v1
id: p_E4xZYEWRgz6TQHQZQPn3wZ
status: active
merged_into: null
display_name: 王環
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_V5c37X59aYsP35Mf1wFcBo
        subject_person_id: p_E4xZYEWRgz6TQHQZQPn3wZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王環
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_y1YmSCHHezrMJX4E47Kcnq
          claim_id: c_V5c37X59aYsP35Mf1wFcBo
          source_id: s_UubX44ko3XFeNtJtBWfJ6L
          stance: supports
          locator: CBDB:464412
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（464412）
          source: &a1
            id: s_UubX44ko3XFeNtJtBWfJ6L
            source_type: api_record
            title: 中国历代人物传记资料库：王環（CBDB 464412）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=464412&o=json
            external_identifier: CBDB:464412
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.898Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RJW86ZHKhgeeZQjYduGtJe
        subject_person_id: p_E4xZYEWRgz6TQHQZQPn3wZ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王環，明人物。曾任經歷。（中国历代人物传记资料库 CBDB 464412）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_rJv-EJ1EiqYb4lW7dR7Lkg
          claim_id: c_RJW86ZHKhgeeZQjYduGtJe
          source_id: s_UubX44ko3XFeNtJtBWfJ6L
          stance: supports
          locator: CBDB:464412
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

# 王環

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王環 | accepted |
| bio.summary | 王環，明人物。曾任經歷。（中国历代人物传记资料库 CBDB 464412） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王環（CBDB 464412）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=464412&o=json)
