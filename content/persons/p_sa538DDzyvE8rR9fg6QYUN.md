---
schema: wang-person/v1
id: p_sa538DDzyvE8rR9fg6QYUN
status: active
merged_into: null
display_name: 王玘
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_jBku98oijuBFLP4296SotU
        subject_person_id: p_sa538DDzyvE8rR9fg6QYUN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_SDKF2NMKE3yguaM2EsA5tL
          claim_id: c_jBku98oijuBFLP4296SotU
          source_id: s_MyrJ2YK1Gv4wzT1pfsKJJu
          stance: supports
          locator: CBDB:249585
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（249585）
          source: &a1
            id: s_MyrJ2YK1Gv4wzT1pfsKJJu
            source_type: api_record
            title: 中国历代人物传记资料库：王玘（CBDB 249585）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=249585&o=json
            external_identifier: CBDB:249585
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.180Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PF9ZGgaycy1Y8nRYzG3gk5
        subject_person_id: p_sa538DDzyvE8rR9fg6QYUN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玘，明人物。成化十一年進士，籍贯棗陽。（中国历代人物传记资料库 CBDB 249585）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ns-Se5Bl9UYEAFuW-3hqOo
          claim_id: c_PF9ZGgaycy1Y8nRYzG3gk5
          source_id: s_MyrJ2YK1Gv4wzT1pfsKJJu
          stance: supports
          locator: CBDB:249585
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_b1mCUfhe2oscR7eM3iASi2
        subject_person_id: p_VAeNtqM8ukkfLvnyiw11uS
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_sa538DDzyvE8rR9fg6QYUN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_x1ORm8bVScTkrhmkFveejh
          claim_id: c_b1mCUfhe2oscR7eM3iASi2
          source_id: s_dWwCcE_DmaBbeq7SmWDUSv
          stance: supports
          locator: CBDB：兄弟 王琰（199781）之父／母 王成
          quotation: null
          interpretation_note: 由兄弟关系推断：王玘 与 王琰 为同胞（CBDB 记「弟」），王琰 之父／母即 王玘 之父／母。
          source:
            id: s_dWwCcE_DmaBbeq7SmWDUSv
            source_type: api_record
            title: 中国历代人物传记资料库：王玘（CBDB 249585）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=249585&o=json
            external_identifier: CBDB:249585
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_VAeNtqM8ukkfLvnyiw11uS
        status: active
        display_name: 王成
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_N3abr2FwDKA0rZH6d7Obcv
        subject_person_id: p_jAmChPEVMec3gdCzVZvmN7
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_sa538DDzyvE8rR9fg6QYUN
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GGBWC1hce7hUW8B7V0w27w
          claim_id: c_N3abr2FwDKA0rZH6d7Obcv
          source_id: s_dWwCcE_DmaBbeq7SmWDUSv
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 199781 王琰）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_dWwCcE_DmaBbeq7SmWDUSv
            source_type: api_record
            title: 中国历代人物传记资料库：王玘（CBDB 249585）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=249585&o=json
            external_identifier: CBDB:249585
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_jAmChPEVMec3gdCzVZvmN7
        status: active
        display_name: 王琰
        merged_into_person_id: null
---

# 王玘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王玘 | accepted |
| bio.summary | 王玘，明人物。成化十一年進士，籍贯棗陽。（中国历代人物传记资料库 CBDB 249585） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_VAeNtqM8ukkfLvnyiw11uS | 王成 | accepted |
| other | p_jAmChPEVMec3gdCzVZvmN7 | 王琰 | accepted |

## 外部来源

- [中国历代人物传记资料库：王玘（CBDB 249585）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=249585&o=json)
