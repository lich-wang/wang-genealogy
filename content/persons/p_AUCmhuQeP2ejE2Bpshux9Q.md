---
schema: wang-person/v1
id: p_AUCmhuQeP2ejE2Bpshux9Q
status: active
merged_into: null
display_name: 王冠
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XKdkHoFFq4tnQx2xTaAS6S
        subject_person_id: p_AUCmhuQeP2ejE2Bpshux9Q
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王冠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QbabFekbNHVzyhWezCPodH
          claim_id: c_XKdkHoFFq4tnQx2xTaAS6S
          source_id: s_GRnrZyNSazSCNHqbsRuPAa
          stance: supports
          locator: CBDB:243170
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（243170）
          source: &a1
            id: s_GRnrZyNSazSCNHqbsRuPAa
            source_type: api_record
            title: 中国历代人物传记资料库：王冠（CBDB 243170）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=243170&o=json
            external_identifier: CBDB:243170
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.990Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_kfWdSrDzQtoNBLhcJCN52G
        subject_person_id: p_AUCmhuQeP2ejE2Bpshux9Q
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王冠，明人物。成化五年進士，籍贯常熟。（中国历代人物传记资料库 CBDB 243170）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_hZ_0IGCRJdOuHpl1BUyy6Q
          claim_id: c_kfWdSrDzQtoNBLhcJCN52G
          source_id: s_GRnrZyNSazSCNHqbsRuPAa
          stance: supports
          locator: CBDB:243170
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_xIy9bK0TJfW7twSqlR-rdn
        subject_person_id: p_hh7o2AX3pCLwbnQdJRNfAA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_AUCmhuQeP2ejE2Bpshux9Q
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qB7yTjruPi9MuhTf_zvUw3
          claim_id: c_xIy9bK0TJfW7twSqlR-rdn
          source_id: s_sE_MkIZJ9_dO3SOR3MIx-j
          stance: supports
          locator: CBDB：兄弟 王鼎（67755）之父／母 王綱
          quotation: null
          interpretation_note: 由兄弟关系推断：王冠 与 王鼎 为同胞（CBDB 记「兄」），王鼎 之父／母即 王冠 之父／母。
          source:
            id: s_sE_MkIZJ9_dO3SOR3MIx-j
            source_type: api_record
            title: 中国历代人物传记资料库：王冠（CBDB 243170）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=243170&o=json
            external_identifier: CBDB:243170
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_hh7o2AX3pCLwbnQdJRNfAA
        status: active
        display_name: 王綱
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_3R83Y_OJRHXjqh41o2Jyal
        subject_person_id: p_AUCmhuQeP2ejE2Bpshux9Q
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_GiENj1L3SMUyiHFegryAJV
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1jSQGujF36Qx-uAvOTQbda
          claim_id: c_3R83Y_OJRHXjqh41o2Jyal
          source_id: s_sE_MkIZJ9_dO3SOR3MIx-j
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 67755 王鼎）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_sE_MkIZJ9_dO3SOR3MIx-j
            source_type: api_record
            title: 中国历代人物传记资料库：王冠（CBDB 243170）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=243170&o=json
            external_identifier: CBDB:243170
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_GiENj1L3SMUyiHFegryAJV
        status: active
        display_name: 王鼎
        merged_into_person_id: null
---

# 王冠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王冠 | accepted |
| bio.summary | 王冠，明人物。成化五年進士，籍贯常熟。（中国历代人物传记资料库 CBDB 243170） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_hh7o2AX3pCLwbnQdJRNfAA | 王綱 | accepted |
| other | p_GiENj1L3SMUyiHFegryAJV | 王鼎 | accepted |

## 外部来源

- [中国历代人物传记资料库：王冠（CBDB 243170）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=243170&o=json)
