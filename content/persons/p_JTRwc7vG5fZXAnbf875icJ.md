---
schema: wang-person/v1
id: p_JTRwc7vG5fZXAnbf875icJ
status: active
merged_into: null
display_name: 王得勝
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_w1oCFWH6m9BQXZ9sviYuNh
        subject_person_id: p_JTRwc7vG5fZXAnbf875icJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王得勝
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MP7rygQxYYytwsq116YMxE
          claim_id: c_w1oCFWH6m9BQXZ9sviYuNh
          source_id: s_GJBqKtFybHwP53S2jFY8Qf
          stance: supports
          locator: CBDB:58613
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（58613）
          source: &a1
            id: s_GJBqKtFybHwP53S2jFY8Qf
            source_type: api_record
            title: 中国历代人物传记资料库：王得勝（CBDB 58613）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=58613&o=json
            external_identifier: CBDB:58613
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.825Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_PNQPCHhE5Rgjcbfvh55VwR
        subject_person_id: p_JTRwc7vG5fZXAnbf875icJ
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1825年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8wDB7bL9H9vbPCipzYGF5v
          claim_id: c_PNQPCHhE5Rgjcbfvh55VwR
          source_id: s_GJBqKtFybHwP53S2jFY8Qf
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
        id: c_qnUnL7Wt7ueTeXFNKs1VTY
        subject_person_id: p_JTRwc7vG5fZXAnbf875icJ
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1908年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_af2rQd3cBXGEFPUMbFMNTs
          claim_id: c_qnUnL7Wt7ueTeXFNKs1VTY
          source_id: s_GJBqKtFybHwP53S2jFY8Qf
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
        id: c_E5gHm9RWPExvEd3StPpBUc
        subject_person_id: p_JTRwc7vG5fZXAnbf875icJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王得勝（1825年—1908年），清人物。籍贯蘭山，曾任千總。（中国历代人物传记资料库 CBDB 58613）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_4bs4RbuwKp-7Sywac2lwcr
          claim_id: c_E5gHm9RWPExvEd3StPpBUc
          source_id: s_GJBqKtFybHwP53S2jFY8Qf
          stance: supports
          locator: CBDB:58613
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

# 王得勝

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王得勝 | accepted |
| birth.date | 1825年 | accepted |
| death.date | 1908年 | accepted |
| bio.summary | 王得勝（1825年—1908年），清人物。籍贯蘭山，曾任千總。（中国历代人物传记资料库 CBDB 58613） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王得勝（CBDB 58613）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=58613&o=json)
