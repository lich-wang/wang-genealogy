---
schema: wang-person/v1
id: p_4oaDRErNr1BVorR9PVMGNf
status: active
merged_into: null
display_name: 王漢
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QzwuP8AEvvWojaJHMSs4Nq
        subject_person_id: p_4oaDRErNr1BVorR9PVMGNf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王漢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_xqMg1xfHF45dFTK5sKMBC5
          claim_id: c_QzwuP8AEvvWojaJHMSs4Nq
          source_id: s_B5H8b6whsbRbhWxyT24M3e
          stance: supports
          locator: CBDB:71054
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71054）
          source: &a1
            id: s_B5H8b6whsbRbhWxyT24M3e
            source_type: api_record
            title: 中国历代人物传记资料库：王漢（CBDB 71054）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71054&o=json
            external_identifier: CBDB:71054
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.321Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_kgZYYFDES7Gnm69kkHLLxm
        subject_person_id: p_4oaDRErNr1BVorR9PVMGNf
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1883年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GtuQUjpK8oJBv2kUaLPHT5
          claim_id: c_kgZYYFDES7Gnm69kkHLLxm
          source_id: s_B5H8b6whsbRbhWxyT24M3e
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
        id: c_Bn4Be1zWyt9Mq2dJ5jgejm
        subject_person_id: p_4oaDRErNr1BVorR9PVMGNf
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1904年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pdBSce38i67RirMNJC5RBq
          claim_id: c_Bn4Be1zWyt9Mq2dJ5jgejm
          source_id: s_B5H8b6whsbRbhWxyT24M3e
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
        id: c_6jfjosErpaB6JHqfTqWNhv
        subject_person_id: p_4oaDRErNr1BVorR9PVMGNf
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cP1f3jC3E4dtWh7L1ehnDW
          claim_id: c_6jfjosErpaB6JHqfTqWNhv
          source_id: s_B5H8b6whsbRbhWxyT24M3e
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

# 王漢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王漢 | accepted |
| birth.date | 1883年 | accepted |
| death.date | 1904年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王漢（CBDB 71054）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71054&o=json)
