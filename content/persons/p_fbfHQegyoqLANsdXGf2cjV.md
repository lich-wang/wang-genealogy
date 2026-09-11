---
schema: wang-person/v1
id: p_fbfHQegyoqLANsdXGf2cjV
status: active
merged_into: null
display_name: 王立中
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ueBmJeY8GsPM1sDiHGFEBs
        subject_person_id: p_fbfHQegyoqLANsdXGf2cjV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王立中
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_oxoMCnJ7Hs2kTWoUd62PYr
          claim_id: c_ueBmJeY8GsPM1sDiHGFEBs
          source_id: s_nKQ8QeW6W69pG63YGMuHvy
          stance: supports
          locator: CBDB:101135
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（101135）
          source: &a1
            id: s_nKQ8QeW6W69pG63YGMuHvy
            source_type: api_record
            title: 中国历代人物传记资料库：王立中（CBDB 101135）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101135&o=json
            external_identifier: CBDB:101135
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.697Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_t34kNidJvRxeRztjBwFvBr
        subject_person_id: p_fbfHQegyoqLANsdXGf2cjV
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1309年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QWWwMPucGzgrjUmt1SqQwu
          claim_id: c_t34kNidJvRxeRztjBwFvBr
          source_id: s_nKQ8QeW6W69pG63YGMuHvy
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
        id: c_RitpLQDRKLWjCJvYiyMsWt
        subject_person_id: p_fbfHQegyoqLANsdXGf2cjV
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1385年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_U1rxw6ePK8q6wDkiEHRFxi
          claim_id: c_RitpLQDRKLWjCJvYiyMsWt
          source_id: s_nKQ8QeW6W69pG63YGMuHvy
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
        id: c_C3YRapKeHvYEBrQ4xBrYiZ
        subject_person_id: p_fbfHQegyoqLANsdXGf2cjV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王立中（1309年—1385年），明人物。籍贯吳縣，曾任散府知府或府尹、縣尉、知州。（中国历代人物传记资料库 CBDB 101135）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_XY4JheW3XHqGCGtU0qi6Ji
          claim_id: c_C3YRapKeHvYEBrQ4xBrYiZ
          source_id: s_nKQ8QeW6W69pG63YGMuHvy
          stance: supports
          locator: CBDB:101135
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

# 王立中

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王立中 | accepted |
| birth.date | 1309年 | accepted |
| death.date | 1385年 | accepted |
| bio.summary | 王立中（1309年—1385年），明人物。籍贯吳縣，曾任散府知府或府尹、縣尉、知州。（中国历代人物传记资料库 CBDB 101135） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王立中（CBDB 101135）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101135&o=json)
