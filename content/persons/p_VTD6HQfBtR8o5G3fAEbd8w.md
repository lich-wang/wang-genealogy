---
schema: wang-person/v1
id: p_VTD6HQfBtR8o5G3fAEbd8w
status: active
merged_into: null
display_name: 王同遊
cbdb_id: 321413
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EaAFb9jhRy1RKgoA6ynbv4
        subject_person_id: p_VTD6HQfBtR8o5G3fAEbd8w
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王同遊，明人物。嘉靖三十五年進士，籍贯輝縣。（中国历代人物传记资料库 CBDB 321413）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_FgUQ6crCF3e24ACxSlaGIg
          claim_id: c_EaAFb9jhRy1RKgoA6ynbv4
          source_id: s_qSYXFcGgmQp33QXiQ13Z55
          stance: supports
          locator: CBDB:321413
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_qSYXFcGgmQp33QXiQ13Z55
            source_type: api_record
            title: 中国历代人物传记资料库：王同遊（CBDB 321413）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=321413&o=json
            external_identifier: CBDB:321413
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.030Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_i5Vi4FbdDUaMQ8xJHFTtTt
        subject_person_id: p_VTD6HQfBtR8o5G3fAEbd8w
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王同遊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_QS3hbJtRBCs3vtvwdasC5S
          claim_id: c_i5Vi4FbdDUaMQ8xJHFTtTt
          source_id: s_qSYXFcGgmQp33QXiQ13Z55
          stance: supports
          locator: CBDB:321413
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3701-3800）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_0mdYC6p5oPsv35CtM3kEZI
        subject_person_id: p_kSZuSxLVRUx1AX2npsBxe9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_VTD6HQfBtR8o5G3fAEbd8w
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ISi1vNw0Pv-P6u1JDHPvTw
          claim_id: c_0mdYC6p5oPsv35CtM3kEZI
          source_id: s_PndKV7JqoVRVrTf7r6MRyn
          stance: supports
          locator: CBDB：兄弟 王同倫（204603）之父／母 王垽
          quotation: null
          interpretation_note: 由兄弟关系推断：王同遊 与 王同倫 为同胞（CBDB 记「兄」），王同倫 之父／母即 王同遊 之父／母。
          source:
            id: s_PndKV7JqoVRVrTf7r6MRyn
            source_type: api_record
            title: 中国历代人物传记资料库：王同遊（CBDB 321413）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=321413&o=json
            external_identifier: CBDB:321413
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_kSZuSxLVRUx1AX2npsBxe9
        status: active
        display_name: 王垽
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_cBWv_HfXVho3bX3q1iW8Xu
        subject_person_id: p_VTD6HQfBtR8o5G3fAEbd8w
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_jxJb77T2SQUuZWU7nrgLP5
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Aub-yaNdohfdautjYHr-0B
          claim_id: c_cBWv_HfXVho3bX3q1iW8Xu
          source_id: s_PndKV7JqoVRVrTf7r6MRyn
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 204603 王同倫）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_PndKV7JqoVRVrTf7r6MRyn
            source_type: api_record
            title: 中国历代人物传记资料库：王同遊（CBDB 321413）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=321413&o=json
            external_identifier: CBDB:321413
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_jxJb77T2SQUuZWU7nrgLP5
        status: active
        display_name: 王同倫
        merged_into_person_id: null
---

# 王同遊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王同遊，明人物。嘉靖三十五年進士，籍贯輝縣。（中国历代人物传记资料库 CBDB 321413） | accepted |
| name.primary | 王同遊 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_kSZuSxLVRUx1AX2npsBxe9 | 王垽 | accepted |
| other | p_jxJb77T2SQUuZWU7nrgLP5 | 王同倫 | accepted |

## 外部来源

- [中国历代人物传记资料库：王同遊（CBDB 321413）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=321413&o=json)
