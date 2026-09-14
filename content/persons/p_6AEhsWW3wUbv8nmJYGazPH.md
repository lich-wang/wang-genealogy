---
schema: wang-person/v1
id: p_6AEhsWW3wUbv8nmJYGazPH
status: active
merged_into: null
display_name: 王應參
cbdb_id: 313050
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JPpKJMtUk5U6QA4MMSo3ac
        subject_person_id: p_6AEhsWW3wUbv8nmJYGazPH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應參，明人物。嘉靖二十九年進士，籍贯聊城。（中国历代人物传记资料库 CBDB 313050）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_dAtuaK2A1DCk5kxfme9766
          claim_id: c_JPpKJMtUk5U6QA4MMSo3ac
          source_id: s_5rn6w1fGraJ63fTKjPKhki
          stance: supports
          locator: CBDB:313050
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_5rn6w1fGraJ63fTKjPKhki
            source_type: api_record
            title: 中国历代人物传记资料库：王應參（CBDB 313050）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313050&o=json
            external_identifier: CBDB:313050
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.030Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_jfhGGw2HrA18WAgDPWZPfH
        subject_person_id: p_6AEhsWW3wUbv8nmJYGazPH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應參
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_qsMjS21waNZrrcSBFQ7b2K
          claim_id: c_jfhGGw2HrA18WAgDPWZPfH
          source_id: s_5rn6w1fGraJ63fTKjPKhki
          stance: supports
          locator: CBDB:313050
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3701-3800）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_gATZ5v7IxNKqrR7xLVcV9i
        subject_person_id: p_vZNxiPDxgjLuXX3n9HfE91
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6AEhsWW3wUbv8nmJYGazPH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2mOZPtkQ2Lc8CGGn21glte
          claim_id: c_gATZ5v7IxNKqrR7xLVcV9i
          source_id: s_dr_LdH3nREb1AdLW00eU_u
          stance: supports
          locator: CBDB：兄弟 王應璧（203997）之父／母 王祿
          quotation: null
          interpretation_note: 由兄弟关系推断：王應參 与 王應璧 为同胞（CBDB 记「兄」），王應璧 之父／母即 王應參 之父／母。
          source:
            id: s_dr_LdH3nREb1AdLW00eU_u
            source_type: api_record
            title: 中国历代人物传记资料库：王應參（CBDB 313050）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313050&o=json
            external_identifier: CBDB:313050
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_vZNxiPDxgjLuXX3n9HfE91
        status: active
        display_name: 王祿
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_DtRuQizHSjoDqWwyuAAs6a
        subject_person_id: p_1ZWbH3Q2UJJJLSJ9mDZ9cG
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_6AEhsWW3wUbv8nmJYGazPH
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zK3xj5cBe5Htgdvop5LDF5
          claim_id: c_DtRuQizHSjoDqWwyuAAs6a
          source_id: s_dr_LdH3nREb1AdLW00eU_u
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 203997 王應璧）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_dr_LdH3nREb1AdLW00eU_u
            source_type: api_record
            title: 中国历代人物传记资料库：王應參（CBDB 313050）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313050&o=json
            external_identifier: CBDB:313050
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_1ZWbH3Q2UJJJLSJ9mDZ9cG
        status: active
        display_name: 王應璧
        merged_into_person_id: null
---

# 王應參

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王應參，明人物。嘉靖二十九年進士，籍贯聊城。（中国历代人物传记资料库 CBDB 313050） | accepted |
| name.primary | 王應參 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_vZNxiPDxgjLuXX3n9HfE91 | 王祿 | accepted |
| other | p_1ZWbH3Q2UJJJLSJ9mDZ9cG | 王應璧 | accepted |

## 外部来源

- [中国历代人物传记资料库：王應參（CBDB 313050）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313050&o=json)
