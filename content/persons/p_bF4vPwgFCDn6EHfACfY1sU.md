---
schema: wang-person/v1
id: p_bF4vPwgFCDn6EHfACfY1sU
status: active
merged_into: null
display_name: 王鎖姑
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_D9Bmt2XKtGG28hxUNwT6Mc
        subject_person_id: p_bF4vPwgFCDn6EHfACfY1sU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鎖姑
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6JDqPXDi2NeRaZYQ8xRgvb
          claim_id: c_D9Bmt2XKtGG28hxUNwT6Mc
          source_id: s_qtkhRh1kTVzEAuLXvMq1iW
          stance: supports
          locator: CBDB:570692
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（570692）
          source: &a1
            id: s_qtkhRh1kTVzEAuLXvMq1iW
            source_type: api_record
            title: 中国历代人物传记资料库：王鎖姑（CBDB 570692）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=570692&o=json
            external_identifier: CBDB:570692
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.643Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_A4pBfMmWLNVjf9iSY6fB1M
        subject_person_id: p_bF4vPwgFCDn6EHfACfY1sU
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
        - id: cs_ak6rJnjLHJs5PzeVtfQZty
          claim_id: c_A4pBfMmWLNVjf9iSY6fB1M
          source_id: s_qtkhRh1kTVzEAuLXvMq1iW
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_2Itvk625ndT9EeRCcAXjVL
        subject_person_id: p_jGn2xGDQzgXiWc97E37Hwx
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_bF4vPwgFCDn6EHfACfY1sU
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Rrc02CVuj6LVcYvAsviLXx
          claim_id: c_2Itvk625ndT9EeRCcAXjVL
          source_id: s_qtkhRh1kTVzEAuLXvMq1iW
          stance: supports
          locator: 紹興府志:八十卷，lgid=316839：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_jGn2xGDQzgXiWc97E37Hwx
        status: active
        display_name: 王汝煒
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王鎖姑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鎖姑 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_jGn2xGDQzgXiWc97E37Hwx | 王汝煒 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鎖姑（CBDB 570692）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=570692&o=json)
