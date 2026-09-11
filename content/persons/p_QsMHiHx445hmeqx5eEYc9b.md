---
schema: wang-person/v1
id: p_QsMHiHx445hmeqx5eEYc9b
status: active
merged_into: null
display_name: 王宏
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_nB7ZMGgDXnMjQS45Xtw77c
        subject_person_id: p_QsMHiHx445hmeqx5eEYc9b
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宏
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ifRdGArB8ZUB8KVdcgKPHC
          claim_id: c_nB7ZMGgDXnMjQS45Xtw77c
          source_id: s_btb5mPpoogwo4S6yiCASmQ
          stance: supports
          locator: CBDB:190801
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（190801）
          source: &a1
            id: s_btb5mPpoogwo4S6yiCASmQ
            source_type: api_record
            title: 中国历代人物传记资料库：王宏（CBDB 190801）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=190801&o=json
            external_identifier: CBDB:190801
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.338Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_tgbfw8vB6h6tuFRxpN6XZa
        subject_person_id: p_QsMHiHx445hmeqx5eEYc9b
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 858年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_c2DYD9JBdyRGqhUMJHJ9VH
          claim_id: c_tgbfw8vB6h6tuFRxpN6XZa
          source_id: s_btb5mPpoogwo4S6yiCASmQ
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
        id: c_SZdMTx5DSaTPvB4smQcK2u
        subject_person_id: p_QsMHiHx445hmeqx5eEYc9b
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宏（卒于858年），唐人物。籍贯太原。（中国历代人物传记资料库 CBDB 190801）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_nMG4z5ZLzF83E71HE0MoV-
          claim_id: c_SZdMTx5DSaTPvB4smQcK2u
          source_id: s_btb5mPpoogwo4S6yiCASmQ
          stance: supports
          locator: CBDB:190801
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_I_DtxsBalXhB-I2mLkd19u
        subject_person_id: p_HeGfMzKQ5r77Gp7MCsAkL6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_QsMHiHx445hmeqx5eEYc9b
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PopAPk2uXWudY20A1AUgcT
          claim_id: c_I_DtxsBalXhB-I2mLkd19u
          source_id: s_btb5mPpoogwo4S6yiCASmQ
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_HeGfMzKQ5r77Gp7MCsAkL6
        status: active
        display_name: 王仲舒
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王宏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宏 | accepted |
| death.date | 858年 | accepted |
| bio.summary | 王宏（卒于858年），唐人物。籍贯太原。（中国历代人物传记资料库 CBDB 190801） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_HeGfMzKQ5r77Gp7MCsAkL6 | 王仲舒 | accepted |

## 外部来源

- [中国历代人物传记资料库：王宏（CBDB 190801）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=190801&o=json)
