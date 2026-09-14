---
schema: wang-person/v1
id: p_xHg2A6nupwgnkXwUBjo6ef
status: active
merged_into: null
display_name: 王苾
cbdb_id: 286133
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MBQeyBrF8SX2XwGJjCvdbb
        subject_person_id: p_xHg2A6nupwgnkXwUBjo6ef
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王苾，明人物。正德十六年進士，籍贯石首。（中国历代人物传记资料库 CBDB 286133）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_q-LJmLNHPYXjRzUOaigsIt
          claim_id: c_MBQeyBrF8SX2XwGJjCvdbb
          source_id: s_3n86ejyimz38k8LChWn6TS
          stance: supports
          locator: CBDB:286133
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_3n86ejyimz38k8LChWn6TS
            source_type: api_record
            title: 中国历代人物传记资料库：王苾（CBDB 286133）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=286133&o=json
            external_identifier: CBDB:286133
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.953Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_6cP4Qh3pHj6xdEbHYVuX8K
        subject_person_id: p_xHg2A6nupwgnkXwUBjo6ef
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王苾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_AAnLGcfKvAGGFXmpVAhEqG
          claim_id: c_6cP4Qh3pHj6xdEbHYVuX8K
          source_id: s_3n86ejyimz38k8LChWn6TS
          stance: supports
          locator: CBDB:286133
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3301-3400）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_nQlFwLWRh-ON6jO5UGxn1u
        subject_person_id: p_1VVqD7EPGnVHF4wrhTw5JU
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_xHg2A6nupwgnkXwUBjo6ef
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nGldr6fGbe98b2mMfB-6eQ
          claim_id: c_nQlFwLWRh-ON6jO5UGxn1u
          source_id: s_j3XAl0msjRL8M3UuY69BqZ
          stance: supports
          locator: CBDB：兄弟 王芳（202288）之父／母 王伯載
          quotation: null
          interpretation_note: 由兄弟关系推断：王苾 与 王芳 为同胞（CBDB 记「弟」），王芳 之父／母即 王苾 之父／母。
          source:
            id: s_j3XAl0msjRL8M3UuY69BqZ
            source_type: api_record
            title: 中国历代人物传记资料库：王苾（CBDB 286133）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=286133&o=json
            external_identifier: CBDB:286133
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_1VVqD7EPGnVHF4wrhTw5JU
        status: active
        display_name: 王伯載
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_vmH49cUbBh3PEdrbq3mVWn
        subject_person_id: p_AEPDTFs3e2Ci1GpeDM9fLo
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_xHg2A6nupwgnkXwUBjo6ef
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PQbQwZ8MtO07mi-SSDnuDn
          claim_id: c_vmH49cUbBh3PEdrbq3mVWn
          source_id: s_j3XAl0msjRL8M3UuY69BqZ
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 202288 王芳）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_j3XAl0msjRL8M3UuY69BqZ
            source_type: api_record
            title: 中国历代人物传记资料库：王苾（CBDB 286133）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=286133&o=json
            external_identifier: CBDB:286133
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_AEPDTFs3e2Ci1GpeDM9fLo
        status: active
        display_name: 王芳
        merged_into_person_id: null
---

# 王苾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王苾，明人物。正德十六年進士，籍贯石首。（中国历代人物传记资料库 CBDB 286133） | accepted |
| name.primary | 王苾 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_1VVqD7EPGnVHF4wrhTw5JU | 王伯載 | accepted |
| other | p_AEPDTFs3e2Ci1GpeDM9fLo | 王芳 | accepted |

## 外部来源

- [中国历代人物传记资料库：王苾（CBDB 286133）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=286133&o=json)
