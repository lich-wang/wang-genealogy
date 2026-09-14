---
schema: wang-person/v1
id: p_LqS3PiT77hGU8z9r23UiGH
status: active
merged_into: null
display_name: 王僅
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_F6hBGE8cj2vvsN4roZusqN
        subject_person_id: p_LqS3PiT77hGU8z9r23UiGH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王僅
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_842D1JVNXqKhAMWvLW5Rgr
          claim_id: c_F6hBGE8cj2vvsN4roZusqN
          source_id: s_Ayqp1eDqk6xtUAwVsNPAQq
          stance: supports
          locator: CBDB:271500
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（271500）
          source: &a1
            id: s_Ayqp1eDqk6xtUAwVsNPAQq
            source_type: api_record
            title: 中国历代人物传记资料库：王僅（CBDB 271500）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271500&o=json
            external_identifier: CBDB:271500
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.875Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gkE6pJWDWdEYpvb7yHt87V
        subject_person_id: p_LqS3PiT77hGU8z9r23UiGH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王僅，明人物。弘治十五年進士，籍贯三河。（中国历代人物传记资料库 CBDB 271500）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_92M9bZH-kk0bd9qtCNQS59
          claim_id: c_gkE6pJWDWdEYpvb7yHt87V
          source_id: s_Ayqp1eDqk6xtUAwVsNPAQq
          stance: supports
          locator: CBDB:271500
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_-6-mfftOI2F6OaErdLUk8F
        subject_person_id: p_zTj1eNcAG3BPvbBjiJxYtN
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_LqS3PiT77hGU8z9r23UiGH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_roshLyGQxIx0TvnkP6CBVa
          claim_id: c_-6-mfftOI2F6OaErdLUk8F
          source_id: s_8Y9GlNuRXWz4cJDiTsJNeg
          stance: supports
          locator: CBDB：兄弟 王俸（201386）之父／母 王文琮
          quotation: null
          interpretation_note: 由兄弟关系推断：王僅 与 王俸 为同胞（CBDB 记「兄」），王俸 之父／母即 王僅 之父／母。
          source:
            id: s_8Y9GlNuRXWz4cJDiTsJNeg
            source_type: api_record
            title: 中国历代人物传记资料库：王僅（CBDB 271500）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271500&o=json
            external_identifier: CBDB:271500
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
        id: c_FpTc_mJM-_K7ojCcnp_oCB
        subject_person_id: p_LqS3PiT77hGU8z9r23UiGH
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
        - id: cs_EAixVohIlEiBy2ppXsPZ7a
          claim_id: c_FpTc_mJM-_K7ojCcnp_oCB
          source_id: s_8Y9GlNuRXWz4cJDiTsJNeg
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 201386 王俸）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_8Y9GlNuRXWz4cJDiTsJNeg
            source_type: api_record
            title: 中国历代人物传记资料库：王僅（CBDB 271500）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271500&o=json
            external_identifier: CBDB:271500
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_dz9UYGUCmAwX3qeez8fHjJ
        status: active
        display_name: 王俸
        merged_into_person_id: null
---

# 王僅

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王僅 | accepted |
| bio.summary | 王僅，明人物。弘治十五年進士，籍贯三河。（中国历代人物传记资料库 CBDB 271500） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_zTj1eNcAG3BPvbBjiJxYtN | 王文琮 | accepted |
| other | p_dz9UYGUCmAwX3qeez8fHjJ | 王俸 | accepted |

## 外部来源

- [中国历代人物传记资料库：王僅（CBDB 271500）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271500&o=json)
