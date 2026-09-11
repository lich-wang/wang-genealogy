---
schema: wang-person/v1
id: p_9uL4CzY8WtBqKSLRcVb8TP
status: active
merged_into: null
display_name: 王銳
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NWFPKCNhJNjGGnyxf4zwWC
        subject_person_id: p_9uL4CzY8WtBqKSLRcVb8TP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王銳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_mb8w8MF7Bk7FP9yzajgJFA
          claim_id: c_NWFPKCNhJNjGGnyxf4zwWC
          source_id: s_YLAaNeVEveDrzsSbZWJD1r
          stance: supports
          locator: CBDB:202497
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（202497）
          source: &a1
            id: s_YLAaNeVEveDrzsSbZWJD1r
            source_type: api_record
            title: 中国历代人物传记资料库：王銳（CBDB 202497）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202497&o=json
            external_identifier: CBDB:202497
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.744Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_A3F1e4dC3afDFgb4TQpcgM
        subject_person_id: p_9uL4CzY8WtBqKSLRcVb8TP
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1490年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FQpgVgQUn3WHV9iFdoDPVa
          claim_id: c_A3F1e4dC3afDFgb4TQpcgM
          source_id: s_YLAaNeVEveDrzsSbZWJD1r
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6D3NmCBoTTSsLBkNomirWZ
        subject_person_id: p_9uL4CzY8WtBqKSLRcVb8TP
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
        - id: cs_7EpoCEANj8WSQwujenBLG5
          claim_id: c_6D3NmCBoTTSsLBkNomirWZ
          source_id: s_YLAaNeVEveDrzsSbZWJD1r
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
        id: c_yGTd76_JNOr3ncLpqcl9at
        subject_person_id: p_J6vGZQ2XeYqBCDgqSMhjF4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_9uL4CzY8WtBqKSLRcVb8TP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SDOK1P1G1GkIhSkAk9swor
          claim_id: c_yGTd76_JNOr3ncLpqcl9at
          source_id: s_YLAaNeVEveDrzsSbZWJD1r
          stance: supports
          locator: 嘉靖八年進士登科錄:一卷，第三甲第七十一名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_J6vGZQ2XeYqBCDgqSMhjF4
        status: active
        display_name: 王虎
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_K0FATZp32lw_lt8-Rpy8h7
        subject_person_id: p_CKCFhcenmNXzf2AQ9a64SJ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_9uL4CzY8WtBqKSLRcVb8TP
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_c7EG9g58Y1UiqnS1IJk1M4
          claim_id: c_K0FATZp32lw_lt8-Rpy8h7
          source_id: s_YLAaNeVEveDrzsSbZWJD1r
          stance: supports
          locator: 嘉靖八年進士登科錄:一卷，第三甲第七十一名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_CKCFhcenmNXzf2AQ9a64SJ
        status: active
        display_name: 王均
        merged_into_person_id: null
    - claim:
        id: c_aJZHQ9KcyCz1KHAVzuAEJT
        subject_person_id: p_Z8vCMLeNT2g5YmJFNkF61s
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_9uL4CzY8WtBqKSLRcVb8TP
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xr-MbxSICs84SeClM4uOwA
          claim_id: c_aJZHQ9KcyCz1KHAVzuAEJT
          source_id: s_YLAaNeVEveDrzsSbZWJD1r
          stance: supports
          locator: 嘉靖八年進士登科錄:一卷，第三甲第七十一名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Z8vCMLeNT2g5YmJFNkF61s
        status: active
        display_name: 王智
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王銳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王銳 | accepted |
| birth.date | 1490年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_J6vGZQ2XeYqBCDgqSMhjF4 | 王虎 | accepted |
| ancestors | p_CKCFhcenmNXzf2AQ9a64SJ | 王均 | accepted |
| ancestors | p_Z8vCMLeNT2g5YmJFNkF61s | 王智 | accepted |

## 外部来源

- [中国历代人物传记资料库：王銳（CBDB 202497）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202497&o=json)
