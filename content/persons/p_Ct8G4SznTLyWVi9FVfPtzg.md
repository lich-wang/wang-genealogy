---
schema: wang-person/v1
id: p_Ct8G4SznTLyWVi9FVfPtzg
status: active
merged_into: null
display_name: 王繫
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_j8WH4SHLgsu6mRc7HoGGGE
        subject_person_id: p_Ct8G4SznTLyWVi9FVfPtzg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_q2KoUNGaTjPTCXyemAseh4
          claim_id: c_j8WH4SHLgsu6mRc7HoGGGE
          source_id: s_pJA9tQF163VvuPq6NP3cws
          stance: supports
          locator: CBDB:71083
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71083）
          source: &a1
            id: s_pJA9tQF163VvuPq6NP3cws
            source_type: api_record
            title: 中国历代人物传记资料库：王繫（CBDB 71083）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71083&o=json
            external_identifier: CBDB:71083
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.351Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_jCjq1v83dbazq14Dv3sFz9
        subject_person_id: p_Ct8G4SznTLyWVi9FVfPtzg
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1679年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vL7QCpE15gZS4rydsv92QV
          claim_id: c_jCjq1v83dbazq14Dv3sFz9
          source_id: s_pJA9tQF163VvuPq6NP3cws
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
        id: c_Gv3dkRTGbzKzNJfkAyHW6u
        subject_person_id: p_Ct8G4SznTLyWVi9FVfPtzg
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1751年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oumkMAok8JJPci3S57NVTt
          claim_id: c_Gv3dkRTGbzKzNJfkAyHW6u
          source_id: s_pJA9tQF163VvuPq6NP3cws
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
        id: c_JZvXDhXNC5pKFCgVdUmJkm
        subject_person_id: p_Ct8G4SznTLyWVi9FVfPtzg
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繫（1679年—1751年），清人物。籍贯榆次。（中国历代人物传记资料库 CBDB 71083）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_MBsnxZD8wYJ1zLBWxDOKfm
          claim_id: c_JZvXDhXNC5pKFCgVdUmJkm
          source_id: s_pJA9tQF163VvuPq6NP3cws
          stance: supports
          locator: CBDB:71083
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

# 王繫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王繫 | accepted |
| birth.date | 1679年 | accepted |
| death.date | 1751年 | accepted |
| bio.summary | 王繫（1679年—1751年），清人物。籍贯榆次。（中国历代人物传记资料库 CBDB 71083） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王繫（CBDB 71083）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71083&o=json)
