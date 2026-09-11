---
schema: wang-person/v1
id: p_Ry6SLrYRW3VHs7Pv88g8G8
status: active
merged_into: null
display_name: 王建
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_gLTSfuT38esMfemoZ3E5az
        subject_person_id: p_Ry6SLrYRW3VHs7Pv88g8G8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王建
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PCtWxeahG6h5MQCjkGJke2
          claim_id: c_gLTSfuT38esMfemoZ3E5az
          source_id: s_DeqyJR2CzJEmsA3Zsi1w1q
          stance: supports
          locator: CBDB:194596
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（194596）
          source: &a1
            id: s_DeqyJR2CzJEmsA3Zsi1w1q
            source_type: api_record
            title: 中国历代人物传记资料库：王建（CBDB 194596）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=194596&o=json
            external_identifier: CBDB:194596
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.453Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_hxSwxnv3DXv4iiVu8D4jUo
        subject_person_id: p_Ry6SLrYRW3VHs7Pv88g8G8
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 846年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_do3DcpwPnTpMhxq53vZ2YY
          claim_id: c_hxSwxnv3DXv4iiVu8D4jUo
          source_id: s_DeqyJR2CzJEmsA3Zsi1w1q
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
        id: c_S69Z3JuvhhvcdhS9mmf66N
        subject_person_id: p_Ry6SLrYRW3VHs7Pv88g8G8
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 918年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wqWx2VnHGDPNADjN7fxGJL
          claim_id: c_S69Z3JuvhhvcdhS9mmf66N
          source_id: s_DeqyJR2CzJEmsA3Zsi1w1q
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
        id: c_Jkqt5jPGGYUJAtz3sPUujR
        subject_person_id: p_Ry6SLrYRW3VHs7Pv88g8G8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王建（846年—918年），史料所见人物。本项目依据《中国历代人物传记资料库：王建（CBDB 194596）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_eA1CZ3O9ppZEJgUtiArmXU
          claim_id: c_Jkqt5jPGGYUJAtz3sPUujR
          source_id: s_DeqyJR2CzJEmsA3Zsi1w1q
          stance: supports
          locator: CBDB:194596
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
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

# 王建

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王建 | accepted |
| birth.date | 846年 | accepted |
| death.date | 918年 | accepted |
| bio.summary | 王建（846年—918年），史料所见人物。本项目依据《中国历代人物传记资料库：王建（CBDB 194596）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王建（CBDB 194596）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=194596&o=json)
