---
schema: wang-person/v1
id: p_6EdsqSeM9Q7qC4HTk35YW1
status: active
merged_into: null
display_name: 王庭
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CRKbNf5QMH7yH1Vz2yjcch
        subject_person_id: p_6EdsqSeM9Q7qC4HTk35YW1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王庭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7qNSQLngFYemn6LbzzQ2Jy
          claim_id: c_CRKbNf5QMH7yH1Vz2yjcch
          source_id: s_58oBcJwkZTsNnToxn6HDXu
          stance: supports
          locator: CBDB:37996
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（37996）
          source: &a1
            id: s_58oBcJwkZTsNnToxn6HDXu
            source_type: api_record
            title: 中国历代人物传记资料库：王庭（CBDB 37996）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37996&o=json
            external_identifier: CBDB:37996
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.312Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_bQQCT9UeTHstCdYgffTEhM
        subject_person_id: p_6EdsqSeM9Q7qC4HTk35YW1
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1275年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KcAAzGjCTS2yxk4rW3VW9W
          claim_id: c_bQQCT9UeTHstCdYgffTEhM
          source_id: s_58oBcJwkZTsNnToxn6HDXu
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
        id: c_1orCaGJA6CU2SfUztSMTrx
        subject_person_id: p_6EdsqSeM9Q7qC4HTk35YW1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王庭（卒于1275年），宋人物。籍贯金華。（中国历代人物传记资料库 CBDB 37996）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Zxt841S_XtQXxN6c7UaLHV
          claim_id: c_1orCaGJA6CU2SfUztSMTrx
          source_id: s_58oBcJwkZTsNnToxn6HDXu
          stance: supports
          locator: CBDB:37996
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

# 王庭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王庭 | accepted |
| death.date | 1275年 | accepted |
| bio.summary | 王庭（卒于1275年），宋人物。籍贯金華。（中国历代人物传记资料库 CBDB 37996） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王庭（CBDB 37996）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37996&o=json)
