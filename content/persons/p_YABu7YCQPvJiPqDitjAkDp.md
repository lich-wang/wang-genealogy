---
schema: wang-person/v1
id: p_YABu7YCQPvJiPqDitjAkDp
status: active
merged_into: null
display_name: 王汝鹽
cbdb_id: 282879
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BiiDP8Prg2bVZCsDwYnKTS
        subject_person_id: p_YABu7YCQPvJiPqDitjAkDp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝鹽，明人物。正德十二年進士，籍贯華陽。（中国历代人物传记资料库 CBDB 282879）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_y_KW-EOeAIeAYmgFiDKAhs
          claim_id: c_BiiDP8Prg2bVZCsDwYnKTS
          source_id: s_pnotTbBfT2gP3bEJH1Pwx9
          stance: supports
          locator: CBDB:282879
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_pnotTbBfT2gP3bEJH1Pwx9
            source_type: api_record
            title: 中国历代人物传记资料库：王汝鹽（CBDB 282879）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282879&o=json
            external_identifier: CBDB:282879
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.953Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_nJ25C2v1CSGKyw5UN3gXgq
        subject_person_id: p_YABu7YCQPvJiPqDitjAkDp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝鹽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Lg2tVAQw5n86Z1vwE7HW8G
          claim_id: c_nJ25C2v1CSGKyw5UN3gXgq
          source_id: s_pnotTbBfT2gP3bEJH1Pwx9
          stance: supports
          locator: CBDB:282879
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3301-3400）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_q_eG5sXnO_d9aNSJQC9E7K
        subject_person_id: p_M8mLU7jMxuqHMpgBkkJ8hB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_YABu7YCQPvJiPqDitjAkDp
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_J2-mXpWIuoe2UAT-x1uJVj
          claim_id: c_q_eG5sXnO_d9aNSJQC9E7K
          source_id: s__QzDMBTTu6Obv1y018jGFe
          stance: supports
          locator: CBDB：兄弟 王汝梅（68445）之父／母 王弼
          quotation: null
          interpretation_note: 由兄弟关系推断：王汝鹽 与 王汝梅 为同胞（CBDB 记「弟」），王汝梅 之父／母即 王汝鹽 之父／母。
          source:
            id: s__QzDMBTTu6Obv1y018jGFe
            source_type: api_record
            title: 中国历代人物传记资料库：王汝鹽（CBDB 282879）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282879&o=json
            external_identifier: CBDB:282879
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_M8mLU7jMxuqHMpgBkkJ8hB
        status: active
        display_name: 王弼
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_josGWyHQ0LRBfDFLaYoRl6
        subject_person_id: p_YABu7YCQPvJiPqDitjAkDp
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_x6tYqQFJHDF8Lt8wgXM9MU
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LghWP6QwkUNfKdRsFClojE
          claim_id: c_josGWyHQ0LRBfDFLaYoRl6
          source_id: s__QzDMBTTu6Obv1y018jGFe
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 68445 王汝梅）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s__QzDMBTTu6Obv1y018jGFe
            source_type: api_record
            title: 中国历代人物传记资料库：王汝鹽（CBDB 282879）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282879&o=json
            external_identifier: CBDB:282879
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_x6tYqQFJHDF8Lt8wgXM9MU
        status: active
        display_name: 王汝梅
        merged_into_person_id: null
---

# 王汝鹽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王汝鹽，明人物。正德十二年進士，籍贯華陽。（中国历代人物传记资料库 CBDB 282879） | accepted |
| name.primary | 王汝鹽 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_M8mLU7jMxuqHMpgBkkJ8hB | 王弼 | accepted |
| other | p_x6tYqQFJHDF8Lt8wgXM9MU | 王汝梅 | accepted |

## 外部来源

- [中国历代人物传记资料库：王汝鹽（CBDB 282879）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282879&o=json)
