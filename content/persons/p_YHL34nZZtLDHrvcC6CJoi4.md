---
schema: wang-person/v1
id: p_YHL34nZZtLDHrvcC6CJoi4
status: active
merged_into: null
display_name: 王儒
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BAqzoEiZGMM7cGDCn71U3Q
        subject_person_id: p_YHL34nZZtLDHrvcC6CJoi4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王儒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_SCWKZV4Q1i3z2r4LNhquYq
          claim_id: c_BAqzoEiZGMM7cGDCn71U3Q
          source_id: s_1aSJHhQkNH7bXQwFcYKbDt
          stance: supports
          locator: CBDB:271501
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（271501）
          source: &a1
            id: s_1aSJHhQkNH7bXQwFcYKbDt
            source_type: api_record
            title: 中国历代人物传记资料库：王儒（CBDB 271501）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271501&o=json
            external_identifier: CBDB:271501
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.876Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZkQM2TZjYjUNXJtntejoGk
        subject_person_id: p_YHL34nZZtLDHrvcC6CJoi4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王儒，明人物。弘治十五年進士，籍贯三河。（中国历代人物传记资料库 CBDB 271501）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_umkaptP_Rh89jCOZd_Tv-_
          claim_id: c_ZkQM2TZjYjUNXJtntejoGk
          source_id: s_1aSJHhQkNH7bXQwFcYKbDt
          stance: supports
          locator: CBDB:271501
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_WYNlAeIXeGx-DbJJQbxXu4
        subject_person_id: p_zTj1eNcAG3BPvbBjiJxYtN
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_YHL34nZZtLDHrvcC6CJoi4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ua7ZuId6YS3XPhu7RoG9vF
          claim_id: c_WYNlAeIXeGx-DbJJQbxXu4
          source_id: s_McS1hZdiCX2xgujX2PcR5i
          stance: supports
          locator: CBDB：兄弟 王俸（201386）之父／母 王文琮
          quotation: null
          interpretation_note: 由兄弟关系推断：王儒 与 王俸 为同胞（CBDB 记「兄」），王俸 之父／母即 王儒 之父／母。
          source:
            id: s_McS1hZdiCX2xgujX2PcR5i
            source_type: api_record
            title: 中国历代人物传记资料库：王儒（CBDB 271501）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271501&o=json
            external_identifier: CBDB:271501
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_zTj1eNcAG3BPvbBjiJxYtN
        status: active
        display_name: 王文琮
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_hDia2GVQj0etlz5BtACCqb
        subject_person_id: p_YHL34nZZtLDHrvcC6CJoi4
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_dz9UYGUCmAwX3qeez8fHjJ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eLX9F_0-s8on63wASW2bD0
          claim_id: c_hDia2GVQj0etlz5BtACCqb
          source_id: s_McS1hZdiCX2xgujX2PcR5i
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 201386 王俸）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_McS1hZdiCX2xgujX2PcR5i
            source_type: api_record
            title: 中国历代人物传记资料库：王儒（CBDB 271501）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271501&o=json
            external_identifier: CBDB:271501
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_dz9UYGUCmAwX3qeez8fHjJ
        status: active
        display_name: 王俸
        merged_into_person_id: null
---

# 王儒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王儒 | accepted |
| bio.summary | 王儒，明人物。弘治十五年進士，籍贯三河。（中国历代人物传记资料库 CBDB 271501） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_zTj1eNcAG3BPvbBjiJxYtN | 王文琮 | accepted |
| other | p_dz9UYGUCmAwX3qeez8fHjJ | 王俸 | accepted |

## 外部来源

- [中国历代人物传记资料库：王儒（CBDB 271501）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271501&o=json)
