---
schema: wang-person/v1
id: p_YbHvAPx73ukTAPbrf7sFSK
status: active
merged_into: null
display_name: 王崿
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wbW16JJhAsijSQ4a98Aq9X
        subject_person_id: p_YbHvAPx73ukTAPbrf7sFSK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王崿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1V9JPjmrUestwkktLLn2kf
          claim_id: c_wbW16JJhAsijSQ4a98Aq9X
          source_id: s_QpKysTBHGvL1vZRET4biX8
          stance: supports
          locator: CBDB:175877
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175877）
          source: &a1
            id: s_QpKysTBHGvL1vZRET4biX8
            source_type: api_record
            title: 中国历代人物传记资料库：王崿（CBDB 175877）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175877&o=json
            external_identifier: CBDB:175877
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.173Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_wgsRmASPZ2mKjW8KfcnNSJ
        subject_person_id: p_YbHvAPx73ukTAPbrf7sFSK
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 761年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fL6LhqkNqFMmg8MNndgANe
          claim_id: c_wgsRmASPZ2mKjW8KfcnNSJ
          source_id: s_QpKysTBHGvL1vZRET4biX8
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
        id: c_5Pa2Y2HkjtsagU6R5koRNZ
        subject_person_id: p_YbHvAPx73ukTAPbrf7sFSK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王崿（卒于761年），唐人物。籍贯太原。（中国历代人物传记资料库 CBDB 175877）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_I1nEnPOJ8vo17Gkk3HG_6T
          claim_id: c_5Pa2Y2HkjtsagU6R5koRNZ
          source_id: s_QpKysTBHGvL1vZRET4biX8
          stance: supports
          locator: CBDB:175877
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_V7S5Gw94y-GD8cuN1O1vB7
        subject_person_id: p_QkhCaGoZhcyF2De4tN5s15
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_YbHvAPx73ukTAPbrf7sFSK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4gnm4emAxGTpW3alHmx9qo
          claim_id: c_V7S5Gw94y-GD8cuN1O1vB7
          source_id: s_QpKysTBHGvL1vZRET4biX8
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_QkhCaGoZhcyF2De4tN5s15
        status: active
        display_name: 王文济
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王崿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王崿 | accepted |
| death.date | 761年 | accepted |
| bio.summary | 王崿（卒于761年），唐人物。籍贯太原。（中国历代人物传记资料库 CBDB 175877） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_QkhCaGoZhcyF2De4tN5s15 | 王文济 | accepted |

## 外部来源

- [中国历代人物传记资料库：王崿（CBDB 175877）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175877&o=json)
