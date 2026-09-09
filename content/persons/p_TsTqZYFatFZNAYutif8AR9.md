---
schema: wang-person/v1
id: p_TsTqZYFatFZNAYutif8AR9
status: active
merged_into: null
display_name: 王敔
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_z4eRsk39PmHypSnKP1c99S
        subject_person_id: p_TsTqZYFatFZNAYutif8AR9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8kVKTabgoexB2hznR48U2Z
          claim_id: c_z4eRsk39PmHypSnKP1c99S
          source_id: s_qhDZhpJXecPFn3Dd4HQ9Y1
          stance: supports
          locator: CBDB:71186
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71186）
          source: &a1
            id: s_qhDZhpJXecPFn3Dd4HQ9Y1
            source_type: api_record
            title: 中国历代人物传记资料库：王敔（CBDB 71186）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71186&o=json
            external_identifier: CBDB:71186
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.465Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_dSJdKEx78Hx25Xato3Hp7X
        subject_person_id: p_TsTqZYFatFZNAYutif8AR9
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1656年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_A77KHGQ2uj4Bva2P2bGbTc
          claim_id: c_dSJdKEx78Hx25Xato3Hp7X
          source_id: s_qhDZhpJXecPFn3Dd4HQ9Y1
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
        id: c_ugpvV3t7gR3sVor6F2PtdM
        subject_person_id: p_TsTqZYFatFZNAYutif8AR9
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1730年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bm5Yz23yVMDXcxYgw8rT4f
          claim_id: c_ugpvV3t7gR3sVor6F2PtdM
          source_id: s_qhDZhpJXecPFn3Dd4HQ9Y1
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
        id: c_ay7KpHGthqNoNHhWvXB2KD
        subject_person_id: p_TsTqZYFatFZNAYutif8AR9
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
        - id: cs_yJ37T1suCadQDnzRGe1CrB
          claim_id: c_ay7KpHGthqNoNHhWvXB2KD
          source_id: s_qhDZhpJXecPFn3Dd4HQ9Y1
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

# 王敔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王敔 | accepted |
| birth.date | 1656年 | accepted |
| death.date | 1730年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王敔（CBDB 71186）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71186&o=json)
