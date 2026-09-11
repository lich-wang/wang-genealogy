---
schema: wang-person/v1
id: p_8miyUQuptQ4NgUWS4f6KTS
status: active
merged_into: null
display_name: 王瑊
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_m64WAFrHzAH9gkcCGmiCX8
        subject_person_id: p_8miyUQuptQ4NgUWS4f6KTS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Ry7FZoJo9sRpYf2w7qGnfG
          claim_id: c_m64WAFrHzAH9gkcCGmiCX8
          source_id: s_72yTmMe4p6AsXyL9TxjBg9
          stance: supports
          locator: CBDB:20583
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（20583）
          source: &a1
            id: s_72yTmMe4p6AsXyL9TxjBg9
            source_type: api_record
            title: 中国历代人物传记资料库：王瑊（CBDB 20583）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=20583&o=json
            external_identifier: CBDB:20583
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.766Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_JmLsDCiKhDTnFNc1oa8eGV
        subject_person_id: p_8miyUQuptQ4NgUWS4f6KTS
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1180年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EeWcbsNx3FjXkrpkc1pAwu
          claim_id: c_JmLsDCiKhDTnFNc1oa8eGV
          source_id: s_72yTmMe4p6AsXyL9TxjBg9
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
        id: c_3GARsGRiRQnXkBB7FFt16M
        subject_person_id: p_8miyUQuptQ4NgUWS4f6KTS
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZWeJK9VmuzNLstfHuTaYV3
          claim_id: c_3GARsGRiRQnXkBB7FFt16M
          source_id: s_72yTmMe4p6AsXyL9TxjBg9
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
  ancestors:
    - claim:
        id: c_K1ytj0_hkXqnkMUvA5rwsJ
        subject_person_id: p_KTTATWUQ3F1m45Pemb3S7n
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_8miyUQuptQ4NgUWS4f6KTS
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VavdEGLmp1_kMa8HYRxkNm
          claim_id: c_K1ytj0_hkXqnkMUvA5rwsJ
          source_id: s_72yTmMe4p6AsXyL9TxjBg9
          stance: supports
          locator: CBDB 双向互证（曾祖 王安禮 ⇄ 曾孫; 重孫 王瑊）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_KTTATWUQ3F1m45Pemb3S7n
        status: active
        display_name: 王安礼
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王瑊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瑊 | accepted |
| death.date | 1180年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_KTTATWUQ3F1m45Pemb3S7n | 王安礼 | accepted |

## 外部来源

- [中国历代人物传记资料库：王瑊（CBDB 20583）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=20583&o=json)
