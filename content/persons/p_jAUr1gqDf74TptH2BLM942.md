---
schema: wang-person/v1
id: p_jAUr1gqDf74TptH2BLM942
status: active
merged_into: null
display_name: 王禎
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GiKTXkdz4AbXsWJGwNuXzw
        subject_person_id: p_jAUr1gqDf74TptH2BLM942
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王禎
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GPFjXqt28MyVK6nXzCdRtQ
          claim_id: c_GiKTXkdz4AbXsWJGwNuXzw
          source_id: s_PQBreZZKsTsXYM3A8ULMHH
          stance: supports
          locator: CBDB:276662
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（276662）
          source: &a1
            id: s_PQBreZZKsTsXYM3A8ULMHH
            source_type: api_record
            title: 中国历代人物传记资料库：王禎（CBDB 276662）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276662&o=json
            external_identifier: CBDB:276662
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.944Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_E32XEsFZH9PFUCmtFJ7FmS
        subject_person_id: p_jAUr1gqDf74TptH2BLM942
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_paT87waN21NfK4PHjFLxGY
          claim_id: c_E32XEsFZH9PFUCmtFJ7FmS
          source_id: s_PQBreZZKsTsXYM3A8ULMHH
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
  descendants:
    - claim:
        id: c_HcSu6bz6s28MbFQbVM0Fe2
        subject_person_id: p_jAUr1gqDf74TptH2BLM942
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_oEEcQRCAqs4YewibUGGkH9
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tDZ1BR3LERWcKnfLnyR8lC
          claim_id: c_HcSu6bz6s28MbFQbVM0Fe2
          source_id: s_PQBreZZKsTsXYM3A8ULMHH
          stance: supports
          locator: 正德六年進士登科錄:一卷，第二甲第八十九名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_oEEcQRCAqs4YewibUGGkH9
        status: active
        display_name: 王介
        merged_into_person_id: null
  other: []
---

# 王禎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王禎 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_oEEcQRCAqs4YewibUGGkH9 | 王介 | accepted |

## 外部来源

- [中国历代人物传记资料库：王禎（CBDB 276662）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276662&o=json)
