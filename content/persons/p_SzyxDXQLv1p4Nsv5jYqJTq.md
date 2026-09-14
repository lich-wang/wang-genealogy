---
schema: wang-person/v1
id: p_SzyxDXQLv1p4Nsv5jYqJTq
status: active
merged_into: null
display_name: 王欽
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_nH6ySNVo4j1U8MGD2gQ3Cg
        subject_person_id: p_SzyxDXQLv1p4Nsv5jYqJTq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王欽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_U9wqYcKyBjpgMmNpqN7zBw
          claim_id: c_nH6ySNVo4j1U8MGD2gQ3Cg
          source_id: s_T9BLTRkjrAKZBwbC88EKMU
          stance: supports
          locator: CBDB:292619
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（292619）
          source: &a1
            id: s_T9BLTRkjrAKZBwbC88EKMU
            source_type: api_record
            title: 中国历代人物传记资料库：王欽（CBDB 292619）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292619&o=json
            external_identifier: CBDB:292619
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.410Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_cAEAgSpg9xe7v5iK6RThLQ
        subject_person_id: p_SzyxDXQLv1p4Nsv5jYqJTq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王欽，明人物。嘉靖十一年進士，曾任戶部主事。（中国历代人物传记资料库 CBDB 292619）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_UF8nAZAEsLLA6btOLJbWXv
          claim_id: c_cAEAgSpg9xe7v5iK6RThLQ
          source_id: s_T9BLTRkjrAKZBwbC88EKMU
          stance: supports
          locator: CBDB:292619
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_S2gtwZpi1Qx_HSpjyatkIg
        subject_person_id: p_MjhM3ee1A3Kj24vm13PmPv
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_SzyxDXQLv1p4Nsv5jYqJTq
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ImdrmxAI44_mrS92BOSijF
          claim_id: c_S2gtwZpi1Qx_HSpjyatkIg
          source_id: s_B7oNq3sSrVIM8RbQsi7lSQ
          stance: supports
          locator: CBDB：兄弟 王釴（202700）之父／母 王昇
          quotation: null
          interpretation_note: 由兄弟关系推断：王欽 与 王釴 为同胞（CBDB 记「弟」），王釴 之父／母即 王欽 之父／母。
          source:
            id: s_B7oNq3sSrVIM8RbQsi7lSQ
            source_type: api_record
            title: 中国历代人物传记资料库：王欽（CBDB 292619）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292619&o=json
            external_identifier: CBDB:292619
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_MjhM3ee1A3Kj24vm13PmPv
        status: active
        display_name: 王昇
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_EI6hhvzzgTiH6MH6CE9ycq
        subject_person_id: p_5PGL3HfhnkubibTnY8wvjU
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_SzyxDXQLv1p4Nsv5jYqJTq
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1q3U7_CT4RlSugtPFL3ac8
          claim_id: c_EI6hhvzzgTiH6MH6CE9ycq
          source_id: s_B7oNq3sSrVIM8RbQsi7lSQ
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 202700 王釴）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_B7oNq3sSrVIM8RbQsi7lSQ
            source_type: api_record
            title: 中国历代人物传记资料库：王欽（CBDB 292619）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292619&o=json
            external_identifier: CBDB:292619
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_5PGL3HfhnkubibTnY8wvjU
        status: active
        display_name: 王釴
        merged_into_person_id: null
---

# 王欽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王欽 | accepted |
| bio.summary | 王欽，明人物。嘉靖十一年進士，曾任戶部主事。（中国历代人物传记资料库 CBDB 292619） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_MjhM3ee1A3Kj24vm13PmPv | 王昇 | accepted |
| other | p_5PGL3HfhnkubibTnY8wvjU | 王釴 | accepted |

## 外部来源

- [中国历代人物传记资料库：王欽（CBDB 292619）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292619&o=json)
