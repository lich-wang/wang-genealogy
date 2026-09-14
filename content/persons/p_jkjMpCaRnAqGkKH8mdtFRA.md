---
schema: wang-person/v1
id: p_jkjMpCaRnAqGkKH8mdtFRA
status: active
merged_into: null
display_name: 王時達
cbdb_id: 299512
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_o3RC4WJB8txocPtxkTKQUB
        subject_person_id: p_jkjMpCaRnAqGkKH8mdtFRA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王時達，明人物。嘉靖十七年進士，籍贯晉江。（中国历代人物传记资料库 CBDB 299512）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_lBczlE9QjjHOPBiCNaLmTf
          claim_id: c_o3RC4WJB8txocPtxkTKQUB
          source_id: s_JRWZuuxtGbQD9xgLiFzm3K
          stance: supports
          locator: CBDB:299512
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_JRWZuuxtGbQD9xgLiFzm3K
            source_type: api_record
            title: 中国历代人物传记资料库：王時達（CBDB 299512）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=299512&o=json
            external_identifier: CBDB:299512
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:04.487Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_HaBbQL6PAmDEgU2QvRcyxQ
        subject_person_id: p_jkjMpCaRnAqGkKH8mdtFRA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王時達
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_3riM692qvUuazEWZgL2UJN
          claim_id: c_HaBbQL6PAmDEgU2QvRcyxQ
          source_id: s_JRWZuuxtGbQD9xgLiFzm3K
          stance: supports
          locator: CBDB:299512
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3501-3600）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Vu-FzOy4gmgIw_GSDhDDmS
        subject_person_id: p_rLGPWGvpfkyHQHmKKEMECW
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_jkjMpCaRnAqGkKH8mdtFRA
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fvPyhF1HkoeQVCnbaNzesH
          claim_id: c_Vu-FzOy4gmgIw_GSDhDDmS
          source_id: s_zvKJHlknCwVKGQ5Pn9ZcKj
          stance: supports
          locator: CBDB：兄弟 王時儉（203083）之父／母 王縉
          quotation: null
          interpretation_note: 由兄弟关系推断：王時達 与 王時儉 为同胞（CBDB 记「兄」），王時儉 之父／母即 王時達 之父／母。
          source:
            id: s_zvKJHlknCwVKGQ5Pn9ZcKj
            source_type: api_record
            title: 中国历代人物传记资料库：王時達（CBDB 299512）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=299512&o=json
            external_identifier: CBDB:299512
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_rLGPWGvpfkyHQHmKKEMECW
        status: active
        display_name: 王縉
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_Tb-ZPO7DGkkySy73bQP21_
        subject_person_id: p_VC8bBPzAyQehLYq3eBykXc
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_jkjMpCaRnAqGkKH8mdtFRA
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_G3ZlEadXxQPxalgH7n_etn
          claim_id: c_Tb-ZPO7DGkkySy73bQP21_
          source_id: s_zvKJHlknCwVKGQ5Pn9ZcKj
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 203083 王時儉）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_zvKJHlknCwVKGQ5Pn9ZcKj
            source_type: api_record
            title: 中国历代人物传记资料库：王時達（CBDB 299512）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=299512&o=json
            external_identifier: CBDB:299512
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_VC8bBPzAyQehLYq3eBykXc
        status: active
        display_name: 王時儉
        merged_into_person_id: null
---

# 王時達

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王時達，明人物。嘉靖十七年進士，籍贯晉江。（中国历代人物传记资料库 CBDB 299512） | accepted |
| name.primary | 王時達 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_rLGPWGvpfkyHQHmKKEMECW | 王縉 | accepted |
| other | p_VC8bBPzAyQehLYq3eBykXc | 王時儉 | accepted |

## 外部来源

- [中国历代人物传记资料库：王時達（CBDB 299512）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=299512&o=json)
