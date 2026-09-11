---
schema: wang-person/v1
id: p_RmyQ1QdK5U7qE9mn2Szeic
status: active
merged_into: null
display_name: 王嘉孝
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_pPozQvBQDyYiCkHSXBRS37
        subject_person_id: p_RmyQ1QdK5U7qE9mn2Szeic
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嘉孝
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_adSuoXkWzc6gQW2tRA3tVq
          claim_id: c_pPozQvBQDyYiCkHSXBRS37
          source_id: s_NPy1egH5uiQEjTHdfQ5Giu
          stance: supports
          locator: CBDB:505345
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（505345）
          source: &a1
            id: s_NPy1egH5uiQEjTHdfQ5Giu
            source_type: api_record
            title: 中国历代人物传记资料库：王嘉孝（CBDB 505345）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=505345&o=json
            external_identifier: CBDB:505345
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.956Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HGRfX41P8dXPWeSUswj2c8
        subject_person_id: p_RmyQ1QdK5U7qE9mn2Szeic
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嘉孝，明人物。曾任知府。（中国历代人物传记资料库 CBDB 505345）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_GPuQya2gEZuM2sAME6bM9Z
          claim_id: c_HGRfX41P8dXPWeSUswj2c8
          source_id: s_NPy1egH5uiQEjTHdfQ5Giu
          stance: supports
          locator: CBDB:505345
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

# 王嘉孝

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王嘉孝 | accepted |
| bio.summary | 王嘉孝，明人物。曾任知府。（中国历代人物传记资料库 CBDB 505345） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王嘉孝（CBDB 505345）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=505345&o=json)
