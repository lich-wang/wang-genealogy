---
schema: wang-person/v1
id: p_7XBv4BQvA1ECaDaecAAa1h
status: active
merged_into: null
display_name: 王兌
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_daC196QL8uoXLF6CFNGCyE
        subject_person_id: p_7XBv4BQvA1ECaDaecAAa1h
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王兌
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JKsrGhQQ78H4SibXdY2c4F
          claim_id: c_daC196QL8uoXLF6CFNGCyE
          source_id: s_KfCg7kXUvQarL8o4eRPuDY
          stance: supports
          locator: CBDB:71090
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71090）
          source: &a1
            id: s_KfCg7kXUvQarL8o4eRPuDY
            source_type: api_record
            title: 中国历代人物传记资料库：王兌（CBDB 71090）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71090&o=json
            external_identifier: CBDB:71090
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.360Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_PnCB5sJs9s3V9xSF43u7Jq
        subject_person_id: p_7XBv4BQvA1ECaDaecAAa1h
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1829年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_A7KibxpZiNqnRF1KRhK99u
          claim_id: c_PnCB5sJs9s3V9xSF43u7Jq
          source_id: s_KfCg7kXUvQarL8o4eRPuDY
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
        id: c_7Pt33SCT5oB1jJRcqZRXFV
        subject_person_id: p_7XBv4BQvA1ECaDaecAAa1h
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王兌（生于1829年），清人物。籍贯鄠縣。（中国历代人物传记资料库 CBDB 71090）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_yQLw7TUW__BaWCXexNq70W
          claim_id: c_7Pt33SCT5oB1jJRcqZRXFV
          source_id: s_KfCg7kXUvQarL8o4eRPuDY
          stance: supports
          locator: CBDB:71090
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

# 王兌

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王兌 | accepted |
| birth.date | 1829年 | accepted |
| bio.summary | 王兌（生于1829年），清人物。籍贯鄠縣。（中国历代人物传记资料库 CBDB 71090） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王兌（CBDB 71090）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71090&o=json)
