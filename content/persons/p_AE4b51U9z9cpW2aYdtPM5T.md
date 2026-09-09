---
schema: wang-person/v1
id: p_AE4b51U9z9cpW2aYdtPM5T
status: active
merged_into: null
display_name: 王樂善
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_X6mwQUNvZStD5SkvS4pqPX
        subject_person_id: p_AE4b51U9z9cpW2aYdtPM5T
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王樂善
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DogkwGCsnsG2mZF8LGex3Q
          claim_id: c_X6mwQUNvZStD5SkvS4pqPX
          source_id: s_wKhWruNxbrc5FD2BFqanpE
          stance: supports
          locator: CBDB:207370
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（207370）
          source: &a1
            id: s_wKhWruNxbrc5FD2BFqanpE
            source_type: api_record
            title: 中国历代人物传记资料库：王樂善（CBDB 207370）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207370&o=json
            external_identifier: CBDB:207370
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.920Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_W7cpPPN6EbPaZZcKQ7vw4F
        subject_person_id: p_AE4b51U9z9cpW2aYdtPM5T
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1572年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1WFxhJoHc4L1WKZfGKEbSr
          claim_id: c_W7cpPPN6EbPaZZcKQ7vw4F
          source_id: s_wKhWruNxbrc5FD2BFqanpE
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
        id: c_AuPLZAvZE1phQvbD5uXuQ2
        subject_person_id: p_AE4b51U9z9cpW2aYdtPM5T
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3c221BwHwFc5sPm6rmGCRU
          claim_id: c_AuPLZAvZE1phQvbD5uXuQ2
          source_id: s_wKhWruNxbrc5FD2BFqanpE
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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

# 王樂善

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王樂善 | accepted |
| birth.date | 1572年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王樂善（CBDB 207370）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207370&o=json)
