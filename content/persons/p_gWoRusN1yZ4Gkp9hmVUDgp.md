---
schema: wang-person/v1
id: p_gWoRusN1yZ4Gkp9hmVUDgp
status: active
merged_into: null
display_name: 王汝洪
cbdb_id: 266714
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_yLrMpCppEXm3MUJGKDemxj
        subject_person_id: p_gWoRusN1yZ4Gkp9hmVUDgp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝洪，明人物。弘治六年進士，籍贯中牟。（中国历代人物传记资料库 CBDB 266714）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_xvbAb80QJxGPXlaNVTk6J8
          claim_id: c_yLrMpCppEXm3MUJGKDemxj
          source_id: s_aW6zRoBZtsMmZXMTCNnkA6
          stance: supports
          locator: CBDB:266714
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_aW6zRoBZtsMmZXMTCNnkA6
            source_type: api_record
            title: 中国历代人物传记资料库：王汝洪（CBDB 266714）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266714&o=json
            external_identifier: CBDB:266714
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:01.428Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_7HEUJDivLsTfCjnoWdx6C1
        subject_person_id: p_gWoRusN1yZ4Gkp9hmVUDgp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝洪
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_AtVWfN1UjKfeMJ9fmHViMD
          claim_id: c_7HEUJDivLsTfCjnoWdx6C1
          source_id: s_aW6zRoBZtsMmZXMTCNnkA6
          stance: supports
          locator: CBDB:266714
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3101-3200）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Bj7fUyZVzbEaVRkq5CE0t1
        subject_person_id: p_uKE1GZcJjjWN4cHRBMP9aK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_gWoRusN1yZ4Gkp9hmVUDgp
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_12t_r7e0s1tS1wG3aMWWD2
          claim_id: c_Bj7fUyZVzbEaVRkq5CE0t1
          source_id: s_bcHEI74KYWJjvFER5kizJ9
          stance: supports
          locator: CBDB：兄弟 王汝清（201079）之父／母 王璿
          quotation: null
          interpretation_note: 由兄弟关系推断：王汝洪 与 王汝清 为同胞（CBDB 记「兄」），王汝清 之父／母即 王汝洪 之父／母。
          source:
            id: s_bcHEI74KYWJjvFER5kizJ9
            source_type: api_record
            title: 中国历代人物传记资料库：王汝洪（CBDB 266714）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266714&o=json
            external_identifier: CBDB:266714
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_uKE1GZcJjjWN4cHRBMP9aK
        status: active
        display_name: 王璿
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_KG7jr3qpvuqel7c3zlUiY1
        subject_person_id: p_gWoRusN1yZ4Gkp9hmVUDgp
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_tHYCzriS6LnJ4HHGiVfcHQ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qRYc8C-3ZSl4Rg7bhY99G5
          claim_id: c_KG7jr3qpvuqel7c3zlUiY1
          source_id: s_bcHEI74KYWJjvFER5kizJ9
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 201079 王汝清）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_bcHEI74KYWJjvFER5kizJ9
            source_type: api_record
            title: 中国历代人物传记资料库：王汝洪（CBDB 266714）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266714&o=json
            external_identifier: CBDB:266714
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_tHYCzriS6LnJ4HHGiVfcHQ
        status: active
        display_name: 王汝清
        merged_into_person_id: null
---

# 王汝洪

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王汝洪，明人物。弘治六年進士，籍贯中牟。（中国历代人物传记资料库 CBDB 266714） | accepted |
| name.primary | 王汝洪 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_uKE1GZcJjjWN4cHRBMP9aK | 王璿 | accepted |
| other | p_tHYCzriS6LnJ4HHGiVfcHQ | 王汝清 | accepted |

## 外部来源

- [中国历代人物传记资料库：王汝洪（CBDB 266714）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266714&o=json)
