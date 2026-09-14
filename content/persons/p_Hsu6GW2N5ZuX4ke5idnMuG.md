---
schema: wang-person/v1
id: p_Hsu6GW2N5ZuX4ke5idnMuG
status: active
merged_into: null
display_name: 王三顧
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_apt8F54qW77kx3q266RyNi
        subject_person_id: p_Hsu6GW2N5ZuX4ke5idnMuG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王三顧
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_wcrxuwY4HV2j522gqUcRdw
          claim_id: c_apt8F54qW77kx3q266RyNi
          source_id: s_K4uFasXh8mq1nd9aHZed6Y
          stance: supports
          locator: CBDB:287530
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（287530）
          source: &a1
            id: s_K4uFasXh8mq1nd9aHZed6Y
            source_type: api_record
            title: 中国历代人物传记资料库：王三顧（CBDB 287530）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287530&o=json
            external_identifier: CBDB:287530
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.266Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GrYf7DDjNK6E9jU6RFxH8E
        subject_person_id: p_Hsu6GW2N5ZuX4ke5idnMuG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王三顧，明人物。嘉靖八年進士，籍贯崑山。（中国历代人物传记资料库 CBDB 287530）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_V6jgf82IB4fTfJp-aNxPDT
          claim_id: c_GrYf7DDjNK6E9jU6RFxH8E
          source_id: s_K4uFasXh8mq1nd9aHZed6Y
          stance: supports
          locator: CBDB:287530
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_k_aMiro9jwnS9ELnHaNk8d
        subject_person_id: p_VmxMBQPfyxUr32ATQz1Ta9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Hsu6GW2N5ZuX4ke5idnMuG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PLQL113GH7UbXIG2Ru4zCM
          claim_id: c_k_aMiro9jwnS9ELnHaNk8d
          source_id: s_KHTK5I1LGrj_VghOQ-G0WU
          stance: supports
          locator: CBDB：兄弟 王三接（126450）之父／母 王時暘
          quotation: null
          interpretation_note: 由兄弟关系推断：王三顧 与 王三接 为同胞（CBDB 记「兄」），王三接 之父／母即 王三顧 之父／母。
          source:
            id: s_KHTK5I1LGrj_VghOQ-G0WU
            source_type: api_record
            title: 中国历代人物传记资料库：王三顧（CBDB 287530）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287530&o=json
            external_identifier: CBDB:287530
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_VmxMBQPfyxUr32ATQz1Ta9
        status: active
        display_name: 王時暘
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_03V4cO3in_Gwy3sads4RgW
        subject_person_id: p_GQ5Yfy9Q67yZ3hJuaQcGg3
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Hsu6GW2N5ZuX4ke5idnMuG
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GJjmtn9QLfqfeiuGpisH-t
          claim_id: c_03V4cO3in_Gwy3sads4RgW
          source_id: s_KHTK5I1LGrj_VghOQ-G0WU
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126450 王三接）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_KHTK5I1LGrj_VghOQ-G0WU
            source_type: api_record
            title: 中国历代人物传记资料库：王三顧（CBDB 287530）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287530&o=json
            external_identifier: CBDB:287530
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_GQ5Yfy9Q67yZ3hJuaQcGg3
        status: active
        display_name: 王三接
        merged_into_person_id: null
    - claim:
        id: c_WGC2g82sPqxwjjgPYFKc7r
        subject_person_id: p_Hsu6GW2N5ZuX4ke5idnMuG
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Tx5e1nr85Ax8xBvbkFoMbF
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_u22_RxVIEoPx0YrBYnIBON
          claim_id: c_WGC2g82sPqxwjjgPYFKc7r
          source_id: s_KHTK5I1LGrj_VghOQ-G0WU
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202405 王三錫）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_KHTK5I1LGrj_VghOQ-G0WU
            source_type: api_record
            title: 中国历代人物传记资料库：王三顧（CBDB 287530）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287530&o=json
            external_identifier: CBDB:287530
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Tx5e1nr85Ax8xBvbkFoMbF
        status: active
        display_name: 王三錫
        merged_into_person_id: null
---

# 王三顧

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王三顧 | accepted |
| bio.summary | 王三顧，明人物。嘉靖八年進士，籍贯崑山。（中国历代人物传记资料库 CBDB 287530） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_VmxMBQPfyxUr32ATQz1Ta9 | 王時暘 | accepted |
| other | p_GQ5Yfy9Q67yZ3hJuaQcGg3 | 王三接 | accepted |
| other | p_Tx5e1nr85Ax8xBvbkFoMbF | 王三錫 | accepted |

## 外部来源

- [中国历代人物传记资料库：王三顧（CBDB 287530）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287530&o=json)
