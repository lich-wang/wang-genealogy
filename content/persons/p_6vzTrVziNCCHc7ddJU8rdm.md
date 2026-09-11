---
schema: wang-person/v1
id: p_6vzTrVziNCCHc7ddJU8rdm
status: active
merged_into: null
display_name: 王興祖
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_uj3uqkn6k6zi5iCX2Eixf7
        subject_person_id: p_6vzTrVziNCCHc7ddJU8rdm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王興祖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_uf9opG3RetEWHnPTHo48LT
          claim_id: c_uj3uqkn6k6zi5iCX2Eixf7
          source_id: s_VzykP7YtezE5E2ZkxjCo5F
          stance: supports
          locator: CBDB:101440
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（101440）
          source: &a1
            id: s_VzykP7YtezE5E2ZkxjCo5F
            source_type: api_record
            title: 中国历代人物传记资料库：王興祖（CBDB 101440）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101440&o=json
            external_identifier: CBDB:101440
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.848Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_CrNQENrPRxHuBJmetHZn5c
        subject_person_id: p_6vzTrVziNCCHc7ddJU8rdm
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1273年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3hTAgo6pJyCPg1vPqHYMUL
          claim_id: c_CrNQENrPRxHuBJmetHZn5c
          source_id: s_VzykP7YtezE5E2ZkxjCo5F
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
        id: c_iBCyrA6CpMSCPEJAh5ofSC
        subject_person_id: p_6vzTrVziNCCHc7ddJU8rdm
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1324年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_M1mcL3A6m9ijbHx1DspHcP
          claim_id: c_iBCyrA6CpMSCPEJAh5ofSC
          source_id: s_VzykP7YtezE5E2ZkxjCo5F
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
        id: c_DwEpkKmaJeYRQS3q1518Mg
        subject_person_id: p_6vzTrVziNCCHc7ddJU8rdm
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为元人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PQJD9CGbtFbPHihNUwv2LU
          claim_id: c_DwEpkKmaJeYRQS3q1518Mg
          source_id: s_VzykP7YtezE5E2ZkxjCo5F
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_E1CqGQ8Ne2P6uhlZ7XNgR7
        subject_person_id: p_6vzTrVziNCCHc7ddJU8rdm
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_UhptA5MaiWY2QSqEcWrAJh
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Fn4DGi6bwt_71wvZhKaHje
          claim_id: c_E1CqGQ8Ne2P6uhlZ7XNgR7
          source_id: s_VzykP7YtezE5E2ZkxjCo5F
          stance: supports
          locator: CBDB 双向互证（子 王毅 ⇄ 父 王興祖）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_UhptA5MaiWY2QSqEcWrAJh
        status: active
        display_name: 王毅
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王興祖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王興祖 | accepted |
| birth.date | 1273年 | accepted |
| death.date | 1324年 | accepted |
| bio.summary | CBDB 记载为元人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_UhptA5MaiWY2QSqEcWrAJh | 王毅 | accepted |

## 外部来源

- [中国历代人物传记资料库：王興祖（CBDB 101440）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101440&o=json)
