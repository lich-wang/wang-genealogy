---
schema: wang-person/v1
id: p_7VeH7wu5QV5G95GhsKZN7w
status: active
merged_into: null
display_name: 王吉才
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8WgTL2WS5mBPc3HpNC9V5t
        subject_person_id: p_7VeH7wu5QV5G95GhsKZN7w
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王吉才
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_cJPVt1jR9GsPxL1TbL8xb6
          claim_id: c_8WgTL2WS5mBPc3HpNC9V5t
          source_id: s_MuJGzD6EfBgAheYwek1qrE
          stance: supports
          locator: CBDB:101156
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（101156）
          source: &a1
            id: s_MuJGzD6EfBgAheYwek1qrE
            source_type: api_record
            title: 中国历代人物传记资料库：王吉才（CBDB 101156）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101156&o=json
            external_identifier: CBDB:101156
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.169Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_S7tPgQWu18NzAox6seovYD
        subject_person_id: p_7VeH7wu5QV5G95GhsKZN7w
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1284年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hX32dHHFLicQEAQENmmE6y
          claim_id: c_S7tPgQWu18NzAox6seovYD
          source_id: s_MuJGzD6EfBgAheYwek1qrE
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_Andvm57snTo2JBSV6J6Kus
        subject_person_id: p_7VeH7wu5QV5G95GhsKZN7w
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1353年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rPiSV5Zr4L56gS4rzz5SMH
          claim_id: c_Andvm57snTo2JBSV6J6Kus
          source_id: s_MuJGzD6EfBgAheYwek1qrE
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_N3JBDmJ67BFed1vKcL41eh
        subject_person_id: p_7VeH7wu5QV5G95GhsKZN7w
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王吉才（1284年—1353年），元人物。籍贯龍溪，曾任縣學教諭、路學正、書院山長。（中国历代人物传记资料库 CBDB 101156）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_7sxW7eHKrGt3DxtpvrQS0O
          claim_id: c_N3JBDmJ67BFed1vKcL41eh
          source_id: s_MuJGzD6EfBgAheYwek1qrE
          stance: supports
          locator: CBDB:101156
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

# 王吉才

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王吉才 | accepted |
| birth.date | 1284年 | accepted |
| death.date | 1353年 | accepted |
| bio.summary | 王吉才（1284年—1353年），元人物。籍贯龍溪，曾任縣學教諭、路學正、書院山長。（中国历代人物传记资料库 CBDB 101156） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王吉才（CBDB 101156）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101156&o=json)
