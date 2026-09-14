---
schema: wang-person/v1
id: p_gwQYvJWcczCUjWgNMYwV7a
status: active
merged_into: null
display_name: 王之干
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Jsj2rjArFEev7EqstqaW74
        subject_person_id: p_gwQYvJWcczCUjWgNMYwV7a
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之干
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2danSCrmNDCQS5PAEyPcQ3
          claim_id: c_Jsj2rjArFEev7EqstqaW74
          source_id: s_g7v6Fndya5bTbJfj1ivEtT
          stance: supports
          locator: CBDB:328694
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（328694）
          source: &a1
            id: s_g7v6Fndya5bTbJfj1ivEtT
            source_type: api_record
            title: 中国历代人物传记资料库：王之干（CBDB 328694）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328694&o=json
            external_identifier: CBDB:328694
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.311Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DzfPKtW48ozwMCE51jiJVB
        subject_person_id: p_gwQYvJWcczCUjWgNMYwV7a
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之干，明人物。嘉靖四十一年進士，籍贯新城，入仕考上會試/貢士。（中国历代人物传记资料库 CBDB 328694）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_3wm2WebxCeC-P_HZrFDp7U
          claim_id: c_DzfPKtW48ozwMCE51jiJVB
          source_id: s_g7v6Fndya5bTbJfj1ivEtT
          stance: supports
          locator: CBDB:328694
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_uCXXVhm9UXKJAv4sQz2xBh
        subject_person_id: p_2XaF6KrMwGSDeaU76DAGrz
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_gwQYvJWcczCUjWgNMYwV7a
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_w2yQgh6vdqNEAfJO35ESDA
          claim_id: c_uCXXVhm9UXKJAv4sQz2xBh
          source_id: s_2U3vUl2rEYxXtU-u5ZXRzD
          stance: supports
          locator: CBDB：兄弟 王之垣（126464）之父／母 王重光
          quotation: null
          interpretation_note: 由兄弟关系推断：王之干 与 王之垣 为同胞（CBDB 记「兄」），王之垣 之父／母即 王之干 之父／母。
          source:
            id: s_2U3vUl2rEYxXtU-u5ZXRzD
            source_type: api_record
            title: 中国历代人物传记资料库：王之干（CBDB 328694）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328694&o=json
            external_identifier: CBDB:328694
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_2XaF6KrMwGSDeaU76DAGrz
        status: active
        display_name: 王重光
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_3gIthBr4Z8pPSL4E8ba4xH
        subject_person_id: p_5yFg7DjLcFzFQKDBRDnwdx
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_gwQYvJWcczCUjWgNMYwV7a
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0nP3yAqaE9wqRcnRBOvK6L
          claim_id: c_3gIthBr4Z8pPSL4E8ba4xH
          source_id: s_2U3vUl2rEYxXtU-u5ZXRzD
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126464 王之垣）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_2U3vUl2rEYxXtU-u5ZXRzD
            source_type: api_record
            title: 中国历代人物传记资料库：王之干（CBDB 328694）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328694&o=json
            external_identifier: CBDB:328694
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_5yFg7DjLcFzFQKDBRDnwdx
        status: active
        display_name: 王之垣
        merged_into_person_id: null
---

# 王之干

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王之干 | accepted |
| bio.summary | 王之干，明人物。嘉靖四十一年進士，籍贯新城，入仕考上會試/貢士。（中国历代人物传记资料库 CBDB 328694） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_2XaF6KrMwGSDeaU76DAGrz | 王重光 | accepted |
| other | p_5yFg7DjLcFzFQKDBRDnwdx | 王之垣 | accepted |

## 外部来源

- [中国历代人物传记资料库：王之干（CBDB 328694）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328694&o=json)
