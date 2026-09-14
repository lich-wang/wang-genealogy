---
schema: wang-person/v1
id: p_Zcz83DeLhhPhuUY8WLCB8G
status: active
merged_into: null
display_name: 王鳴鹿
cbdb_id: 285500
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_g1K42gp19n9r9pFRs83Me9
        subject_person_id: p_Zcz83DeLhhPhuUY8WLCB8G
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鳴鹿，明人物。正德十六年進士，籍贯巫山。（中国历代人物传记资料库 CBDB 285500）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_9lCV7UVGBRCgLwGQwen_40
          claim_id: c_g1K42gp19n9r9pFRs83Me9
          source_id: s_URR1aXcUSA9WUCGQ2AsfVD
          stance: supports
          locator: CBDB:285500
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_URR1aXcUSA9WUCGQ2AsfVD
            source_type: api_record
            title: 中国历代人物传记资料库：王鳴鹿（CBDB 285500）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285500&o=json
            external_identifier: CBDB:285500
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.953Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_zqEKNKZr6TAWEqGN59y9TE
        subject_person_id: p_Zcz83DeLhhPhuUY8WLCB8G
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鳴鹿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_M4G7Khe637etyPws1fp1gE
          claim_id: c_zqEKNKZr6TAWEqGN59y9TE
          source_id: s_URR1aXcUSA9WUCGQ2AsfVD
          stance: supports
          locator: CBDB:285500
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3301-3400）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_PGiaoo2_bgYfqH8wzdW5Rv
        subject_person_id: p_LKUBnXvN3RatPV3fcj6pke
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Zcz83DeLhhPhuUY8WLCB8G
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JUbDmGR7mbzVLsnUNaDnv9
          claim_id: c_PGiaoo2_bgYfqH8wzdW5Rv
          source_id: s_8FIVTJ8KF0lNSy8Mb9rcMe
          stance: supports
          locator: CBDB：兄弟 王鳴鳳（202244）之父／母 王珎
          quotation: null
          interpretation_note: 由兄弟关系推断：王鳴鹿 与 王鳴鳳 为同胞（CBDB 记「兄」），王鳴鳳 之父／母即 王鳴鹿 之父／母。
          source:
            id: s_8FIVTJ8KF0lNSy8Mb9rcMe
            source_type: api_record
            title: 中国历代人物传记资料库：王鳴鹿（CBDB 285500）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285500&o=json
            external_identifier: CBDB:285500
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_LKUBnXvN3RatPV3fcj6pke
        status: active
        display_name: 王珎
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_gHH0Fw3RINrCb1g7Y_QsXx
        subject_person_id: p_Zcz83DeLhhPhuUY8WLCB8G
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_rT3bK3RVCNfBJPQAtdAstK
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_T3mkI9o1xNbXKMD8wqwFTW
          claim_id: c_gHH0Fw3RINrCb1g7Y_QsXx
          source_id: s_8FIVTJ8KF0lNSy8Mb9rcMe
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202244 王鳴鳳）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_8FIVTJ8KF0lNSy8Mb9rcMe
            source_type: api_record
            title: 中国历代人物传记资料库：王鳴鹿（CBDB 285500）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285500&o=json
            external_identifier: CBDB:285500
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_rT3bK3RVCNfBJPQAtdAstK
        status: active
        display_name: 王鳴鳳
        merged_into_person_id: null
---

# 王鳴鹿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王鳴鹿，明人物。正德十六年進士，籍贯巫山。（中国历代人物传记资料库 CBDB 285500） | accepted |
| name.primary | 王鳴鹿 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_LKUBnXvN3RatPV3fcj6pke | 王珎 | accepted |
| other | p_rT3bK3RVCNfBJPQAtdAstK | 王鳴鳳 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鳴鹿（CBDB 285500）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285500&o=json)
