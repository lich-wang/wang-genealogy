---
schema: wang-person/v1
id: p_w8gnje796KL8beHdygMBqw
status: active
merged_into: null
display_name: 王湛
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XuQ2pN33GFc2XW8vyufy1C
        subject_person_id: p_w8gnje796KL8beHdygMBqw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王湛
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_nZeY1T4A6PJh59J9G2Vxuo
          claim_id: c_XuQ2pN33GFc2XW8vyufy1C
          source_id: s_froqFgSuxJE4mPTFEXZeUA
          stance: supports
          locator: CBDB:162552
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（162552）
          source: &a1
            id: s_froqFgSuxJE4mPTFEXZeUA
            source_type: api_record
            title: 中国历代人物传记资料库：王湛（CBDB 162552）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=162552&o=json
            external_identifier: CBDB:162552
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.953Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5JznKAKAacoHH5AXN1idXY
        subject_person_id: p_w8gnje796KL8beHdygMBqw
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WFRFjgMrjMPjEbCQo2uqYE
          claim_id: c_5JznKAKAacoHH5AXN1idXY
          source_id: s_froqFgSuxJE4mPTFEXZeUA
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
        id: c_lEaNZxwXUIVSshROLAr_QS
        subject_person_id: p_w8gnje796KL8beHdygMBqw
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_NmDQGJMHiS8Rr9K75H9JB5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gkrxW7lNf8RwXSlu25isG0
          claim_id: c_lEaNZxwXUIVSshROLAr_QS
          source_id: s_7C6kgmwNN6hq5icNndgMen
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Xianheng30：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_7C6kgmwNN6hq5icNndgMen
            source_type: api_record
            title: 中国历代人物传记资料库：王僧（CBDB 142627）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=142627&o=json
            external_identifier: CBDB:142627
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.586Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_NmDQGJMHiS8Rr9K75H9JB5
        status: active
        display_name: 王僧
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王湛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王湛 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_NmDQGJMHiS8Rr9K75H9JB5 | 王僧 | accepted |

## 外部来源

- [中国历代人物传记资料库：王僧（CBDB 142627）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=142627&o=json)
- [中国历代人物传记资料库：王湛（CBDB 162552）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=162552&o=json)
