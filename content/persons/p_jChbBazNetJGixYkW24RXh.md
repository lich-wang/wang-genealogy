---
schema: wang-person/v1
id: p_jChbBazNetJGixYkW24RXh
status: active
merged_into: null
display_name: 王鼒
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_uqtDDezLcohcQ3f9HTcogF
        subject_person_id: p_jChbBazNetJGixYkW24RXh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鼒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_15ppfii8nUA9KUApzSwcBQ
          claim_id: c_uqtDDezLcohcQ3f9HTcogF
          source_id: s_EXbMUXVNakrbPp9U7J4X8r
          stance: supports
          locator: CBDB:71271
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71271）
          source: &a1
            id: s_EXbMUXVNakrbPp9U7J4X8r
            source_type: api_record
            title: 中国历代人物传记资料库：王鼒（CBDB 71271）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71271&o=json
            external_identifier: CBDB:71271
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.545Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_278e2Ey7CTQrwrGckTm7Q1
        subject_person_id: p_jChbBazNetJGixYkW24RXh
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1659年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_37vAxV3KLYrspk7dQbMNbV
          claim_id: c_278e2Ey7CTQrwrGckTm7Q1
          source_id: s_EXbMUXVNakrbPp9U7J4X8r
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
        id: c_L1AD4L7GEwRSWKeM52Yz6z
        subject_person_id: p_jChbBazNetJGixYkW24RXh
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鼒（生于1659年），清人物。籍贯大興。（中国历代人物传记资料库 CBDB 71271）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_FVU4z7Amka_I4W23l1CobM
          claim_id: c_L1AD4L7GEwRSWKeM52Yz6z
          source_id: s_EXbMUXVNakrbPp9U7J4X8r
          stance: supports
          locator: CBDB:71271
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

# 王鼒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鼒 | accepted |
| birth.date | 1659年 | accepted |
| bio.summary | 王鼒（生于1659年），清人物。籍贯大興。（中国历代人物传记资料库 CBDB 71271） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鼒（CBDB 71271）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71271&o=json)
