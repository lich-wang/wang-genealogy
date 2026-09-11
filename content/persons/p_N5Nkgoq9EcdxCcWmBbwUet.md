---
schema: wang-person/v1
id: p_N5Nkgoq9EcdxCcWmBbwUet
status: active
merged_into: null
display_name: 王亶
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_htPTyQ3Q86uGUDLYLHNT34
        subject_person_id: p_N5Nkgoq9EcdxCcWmBbwUet
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王亶
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_i1UF54tXHeC9ADpyCEACTD
          claim_id: c_htPTyQ3Q86uGUDLYLHNT34
          source_id: s_bESJKSwFX1R9WDTuv9Fx2U
          stance: supports
          locator: CBDB:134120
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（134120）
          source: &a1
            id: s_bESJKSwFX1R9WDTuv9Fx2U
            source_type: api_record
            title: 中国历代人物传记资料库：王亶（CBDB 134120）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=134120&o=json
            external_identifier: CBDB:134120
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.304Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_y8kwPoQRQXMG1QEuoQ4hvs
        subject_person_id: p_N5Nkgoq9EcdxCcWmBbwUet
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1100年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_i8WFtSD6h5i8BTdPn9k4iX
          claim_id: c_y8kwPoQRQXMG1QEuoQ4hvs
          source_id: s_bESJKSwFX1R9WDTuv9Fx2U
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
        id: c_BY7Cd2krZmUJ5qQkmkDfnk
        subject_person_id: p_N5Nkgoq9EcdxCcWmBbwUet
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1165年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tWDYGCMsxciPsDzZkAxgcc
          claim_id: c_BY7Cd2krZmUJ5qQkmkDfnk
          source_id: s_bESJKSwFX1R9WDTuv9Fx2U
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
        id: c_ow7j6W3cdjnN6cJ6zgCAgm
        subject_person_id: p_N5Nkgoq9EcdxCcWmBbwUet
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王亶（1100年—1165年），宋人物。籍贯金華。（中国历代人物传记资料库 CBDB 134120）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_pezNgqvXBjNdHhRWD2eAFL
          claim_id: c_ow7j6W3cdjnN6cJ6zgCAgm
          source_id: s_bESJKSwFX1R9WDTuv9Fx2U
          stance: supports
          locator: CBDB:134120
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

# 王亶

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王亶 | accepted |
| birth.date | 1100年 | accepted |
| death.date | 1165年 | accepted |
| bio.summary | 王亶（1100年—1165年），宋人物。籍贯金華。（中国历代人物传记资料库 CBDB 134120） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王亶（CBDB 134120）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=134120&o=json)
