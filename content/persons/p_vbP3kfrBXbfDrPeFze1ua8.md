---
schema: wang-person/v1
id: p_vbP3kfrBXbfDrPeFze1ua8
status: active
merged_into: null
display_name: 王增義
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6VLWnSY4JsWNczJR1TjZ4A
        subject_person_id: p_vbP3kfrBXbfDrPeFze1ua8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王增義
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ZooMCDxtAbGgV1jNhG5Y4X
          claim_id: c_6VLWnSY4JsWNczJR1TjZ4A
          source_id: s_K4VyXMQL289L9VnPH6Q6Q9
          stance: supports
          locator: CBDB:577542
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（577542）
          source: &a1
            id: s_K4VyXMQL289L9VnPH6Q6Q9
            source_type: api_record
            title: 中国历代人物传记资料库：王增義（CBDB 577542）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=577542&o=json
            external_identifier: CBDB:577542
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.723Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_sTFZgJaY1mkzXM7D8Mys27
        subject_person_id: p_vbP3kfrBXbfDrPeFze1ua8
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1884年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1F6oJAPF1f9EFs2PveEGFu
          claim_id: c_sTFZgJaY1mkzXM7D8Mys27
          source_id: s_K4VyXMQL289L9VnPH6Q6Q9
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NKYQTZ3DyQnPZ2Wx1QCLrL
        subject_person_id: p_vbP3kfrBXbfDrPeFze1ua8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王增義（生于1884年），清人物。籍贯順天府。（中国历代人物传记资料库 CBDB 577542）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_yNHfDkJ0THgQtpSb2d9jk-
          claim_id: c_NKYQTZ3DyQnPZ2Wx1QCLrL
          source_id: s_K4VyXMQL289L9VnPH6Q6Q9
          stance: supports
          locator: CBDB:577542
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

# 王增義

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王增義 | accepted |
| birth.date | 1884年 | accepted |
| bio.summary | 王增義（生于1884年），清人物。籍贯順天府。（中国历代人物传记资料库 CBDB 577542） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王增義（CBDB 577542）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=577542&o=json)
