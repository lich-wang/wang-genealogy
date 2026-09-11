---
schema: wang-person/v1
id: p_ejkhqRyi6zguVhFhs63Ax7
status: active
merged_into: null
display_name: 王鏜
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Urto3xvEXkSgbiGq83VhDb
        subject_person_id: p_ejkhqRyi6zguVhFhs63Ax7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鏜
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_uKGR16bfeT6jAQJJKGPBTq
          claim_id: c_Urto3xvEXkSgbiGq83VhDb
          source_id: s_WgvdJdiCbuQ4qcTNm7WYyj
          stance: supports
          locator: CBDB:202946
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（202946）
          source: &a1
            id: s_WgvdJdiCbuQ4qcTNm7WYyj
            source_type: api_record
            title: 中国历代人物传记资料库：王鏜（CBDB 202946）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202946&o=json
            external_identifier: CBDB:202946
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.766Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_FRuDb3bpZJHXTfnB7v33VR
        subject_person_id: p_ejkhqRyi6zguVhFhs63Ax7
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1505年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EJgwXdbVWgeYQukXjVdttw
          claim_id: c_FRuDb3bpZJHXTfnB7v33VR
          source_id: s_WgvdJdiCbuQ4qcTNm7WYyj
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
        id: c_Y8CyXduNEZjYjgiMQApCuF
        subject_person_id: p_ejkhqRyi6zguVhFhs63Ax7
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
        - id: cs_xgE3DAdHp9cQcLms42YQsb
          claim_id: c_Y8CyXduNEZjYjgiMQApCuF
          source_id: s_WgvdJdiCbuQ4qcTNm7WYyj
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
        id: c_2wjC0S9K9dlJQWIxVm--U3
        subject_person_id: p_EENMQg8ZujQT1unQPpMBb1
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ejkhqRyi6zguVhFhs63Ax7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1NQZYJVjeE1NoYf5gnjwIr
          claim_id: c_2wjC0S9K9dlJQWIxVm--U3
          source_id: s_ZcZWeKvjxMt4rBpGSfC73u
          stance: supports
          locator: 嘉靖十四年進士登科錄:一卷，第三甲第一百零六名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ZcZWeKvjxMt4rBpGSfC73u
            source_type: api_record
            title: 中国历代人物传记资料库：王介（CBDB 297194）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297194&o=json
            external_identifier: CBDB:297194
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.561Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_EENMQg8ZujQT1unQPpMBb1
        status: active
        display_name: 王介
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_jly9r3NlMBbiNTsqb109iU
        subject_person_id: p_Gp3qfqFsLscRLVK1jJnGag
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_ejkhqRyi6zguVhFhs63Ax7
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WcRRSWJFpr1sPlNvFAy4HG
          claim_id: c_jly9r3NlMBbiNTsqb109iU
          source_id: s_3atLyFAm3u9fkWj65xdwCX
          stance: supports
          locator: 嘉靖十四年進士登科錄:一卷，第三甲第一百零六名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_3atLyFAm3u9fkWj65xdwCX
            source_type: api_record
            title: 中国历代人物传记资料库：王鑛（CBDB 297193）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297193&o=json
            external_identifier: CBDB:297193
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.560Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Gp3qfqFsLscRLVK1jJnGag
        status: active
        display_name: 王鑛
        merged_into_person_id: null
    - claim:
        id: c_8X2jwENaFRxfcsOlxXNCKB
        subject_person_id: p_p9ZgpaMWe2Spo55Z6Q5EfJ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_ejkhqRyi6zguVhFhs63Ax7
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TADfeLDMj_8uS-fH1Ha-86
          claim_id: c_8X2jwENaFRxfcsOlxXNCKB
          source_id: s_fj9gGUQDx496dK3VboCtH4
          stance: supports
          locator: 嘉靖十四年進士登科錄:一卷，第三甲第一百零六名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_fj9gGUQDx496dK3VboCtH4
            source_type: api_record
            title: 中国历代人物传记资料库：王玄（CBDB 297192）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297192&o=json
            external_identifier: CBDB:297192
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.558Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_p9ZgpaMWe2Spo55Z6Q5EfJ
        status: active
        display_name: 王玄
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王鏜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鏜 | accepted |
| birth.date | 1505年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_EENMQg8ZujQT1unQPpMBb1 | 王介 | accepted |
| ancestors | p_Gp3qfqFsLscRLVK1jJnGag | 王鑛 | accepted |
| ancestors | p_p9ZgpaMWe2Spo55Z6Q5EfJ | 王玄 | accepted |

## 外部来源

- [中国历代人物传记资料库：王介（CBDB 297194）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297194&o=json)
- [中国历代人物传记资料库：王鑛（CBDB 297193）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297193&o=json)
- [中国历代人物传记资料库：王鏜（CBDB 202946）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202946&o=json)
- [中国历代人物传记资料库：王玄（CBDB 297192）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297192&o=json)
