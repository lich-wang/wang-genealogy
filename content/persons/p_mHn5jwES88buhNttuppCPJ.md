---
schema: wang-person/v1
id: p_mHn5jwES88buhNttuppCPJ
status: active
merged_into: null
display_name: 王卿月
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_WWmbq9CASJWJ3pCMsChNQn
        subject_person_id: p_mHn5jwES88buhNttuppCPJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王卿月
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MMtHX54AGHYkXyMhUNG1GF
          claim_id: c_WWmbq9CASJWJ3pCMsChNQn
          source_id: s_Mx3ajEqeJb4j3FVLb1yFDm
          stance: supports
          locator: CBDB:10127
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（10127）
          source: &a1
            id: s_Mx3ajEqeJb4j3FVLb1yFDm
            source_type: api_record
            title: 中国历代人物传记资料库：王卿月（CBDB 10127）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10127&o=json
            external_identifier: CBDB:10127
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.518Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_SJ8oKrpLAPZL11jCGPSYJg
        subject_person_id: p_mHn5jwES88buhNttuppCPJ
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1138年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ApmxHQeZeXRhm4apYvbKcF
          claim_id: c_SJ8oKrpLAPZL11jCGPSYJg
          source_id: s_Mx3ajEqeJb4j3FVLb1yFDm
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
        id: c_BbKcHSW1ium67ZMcySqGv8
        subject_person_id: p_mHn5jwES88buhNttuppCPJ
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1192年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2BihjF2cC6JTiHUhnjUQhX
          claim_id: c_BbKcHSW1ium67ZMcySqGv8
          source_id: s_Mx3ajEqeJb4j3FVLb1yFDm
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
        id: c_SweKUkShpipMpuofa3vYbU
        subject_person_id: p_mHn5jwES88buhNttuppCPJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王卿月（1138年—1192年），宋人物。籍贯臨海，身份为早卒(未成年而卒)、詩人，入仕進士，曾任卿、太府寺卿、路提點刑獄公事。（中国历代人物传记资料库 CBDB 10127）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_5DGYmCxvuqqW5kf9GBGBmV
          claim_id: c_SweKUkShpipMpuofa3vYbU
          source_id: s_Mx3ajEqeJb4j3FVLb1yFDm
          stance: supports
          locator: CBDB:10127
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_GGvLRhr-d-NG5sELrjjyi2
        subject_person_id: p_57MTn7oNzVBW49Kp5crHea
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_mHn5jwES88buhNttuppCPJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zqA7uqUYQPf4AL9KDYgWX9
          claim_id: c_GGvLRhr-d-NG5sELrjjyi2
          source_id: s_Mx3ajEqeJb4j3FVLb1yFDm
          stance: supports
          locator: CBDB 双向互证（父 王思正 ⇄ 子 王卿月）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_57MTn7oNzVBW49Kp5crHea
        status: active
        display_name: 王思正
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王卿月

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王卿月 | accepted |
| birth.date | 1138年 | accepted |
| death.date | 1192年 | accepted |
| bio.summary | 王卿月（1138年—1192年），宋人物。籍贯臨海，身份为早卒(未成年而卒)、詩人，入仕進士，曾任卿、太府寺卿、路提點刑獄公事。（中国历代人物传记资料库 CBDB 10127） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_57MTn7oNzVBW49Kp5crHea | 王思正 | accepted |

## 外部来源

- [中国历代人物传记资料库：王卿月（CBDB 10127）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10127&o=json)
