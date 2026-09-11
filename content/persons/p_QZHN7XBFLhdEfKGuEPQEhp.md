---
schema: wang-person/v1
id: p_QZHN7XBFLhdEfKGuEPQEhp
status: active
merged_into: null
display_name: 王贄
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4JxmJ51z3z7eEMVa7oXfJ8
        subject_person_id: p_QZHN7XBFLhdEfKGuEPQEhp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王贄
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_TuCZ5EFhARQMm2VGc5xvdQ
          claim_id: c_4JxmJ51z3z7eEMVa7oXfJ8
          source_id: s_thn4gMJq6L4yGd4YCKvb7F
          stance: supports
          locator: CBDB:1783
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（1783）
          source: &a1
            id: s_thn4gMJq6L4yGd4YCKvb7F
            source_type: api_record
            title: 中国历代人物传记资料库：王贄（CBDB 1783）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1783&o=json
            external_identifier: CBDB:1783
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.247Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4Cp3bqtGKHQHCgxdP45kiR
        subject_person_id: p_QZHN7XBFLhdEfKGuEPQEhp
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
        - id: cs_sPLT3CUdMNkEUEm2Bup7Gd
          claim_id: c_4Cp3bqtGKHQHCgxdP45kiR
          source_id: s_thn4gMJq6L4yGd4YCKvb7F
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
        id: c_VJvR67JW1O8oaqR1Qo6b_h
        subject_person_id: p_QZHN7XBFLhdEfKGuEPQEhp
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_KzB2C1aLBuDGmUVnrc9So3
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0Sbohii06Ep3i4o91u53UL
          claim_id: c_VJvR67JW1O8oaqR1Qo6b_h
          source_id: s_FNLuB5DJx6UNnRbHaEHKpA
          stance: supports
          locator: 宋人傳記資料索引(電子版)，833;834：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_FNLuB5DJx6UNnRbHaEHKpA
            source_type: api_record
            title: 中国历代人物传记资料库：王珪（CBDB 1845）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1845&o=json
            external_identifier: CBDB:1845
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.331Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_KzB2C1aLBuDGmUVnrc9So3
        status: active
        display_name: 王珪
        merged_into_person_id: null
  other: []
---

# 王贄

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王贄 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_KzB2C1aLBuDGmUVnrc9So3 | 王珪 | accepted |

## 外部来源

- [中国历代人物传记资料库：王珪（CBDB 1845）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1845&o=json)
- [中国历代人物传记资料库：王贄（CBDB 1783）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1783&o=json)
