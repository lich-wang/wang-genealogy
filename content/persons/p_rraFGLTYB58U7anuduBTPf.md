---
schema: wang-person/v1
id: p_rraFGLTYB58U7anuduBTPf
status: active
merged_into: null
display_name: 王宗睿
cbdb_id: 240892
revision: 4
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_wCnefi7tkcc472XPc2nBE2
        subject_person_id: p_rraFGLTYB58U7anuduBTPf
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗睿，明人物。正統十三年進士，籍贯金谿。（中国历代人物传记资料库 CBDB 240892）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_OTaU-VrhHMcSrG2b5Qhrg7
          claim_id: c_wCnefi7tkcc472XPc2nBE2
          source_id: s_fxR7Q6sNf9HPL1s7Ds1N4g
          stance: supports
          locator: CBDB:240892
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_fxR7Q6sNf9HPL1s7Ds1N4g
            source_type: api_record
            title: 中国历代人物传记资料库：王宗睿（CBDB 240892）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=240892&o=json
            external_identifier: CBDB:240892
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:59.761Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_nF6pfZGJ5qZ9CNiZDw4HPh
        subject_person_id: p_rraFGLTYB58U7anuduBTPf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗睿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_7dXXtqDoMCthPfhFSFAwTQ
          claim_id: c_nF6pfZGJ5qZ9CNiZDw4HPh
          source_id: s_fxR7Q6sNf9HPL1s7Ds1N4g
          stance: supports
          locator: CBDB:240892
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2901-3000）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_iCr6jS2--ivxem38DBBJ_l
        subject_person_id: p_rraFGLTYB58U7anuduBTPf
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_oJFhqGsSYkYTeGZ7iNnAnA
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IkcadJ-fXF7TEYFNAJtjwe
          claim_id: c_iCr6jS2--ivxem38DBBJ_l
          source_id: s_scMdA5rQcxqY8W53jNHSqv
          stance: supports
          locator: 正統十三年進士登科錄:一卷，第三甲第三十名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_scMdA5rQcxqY8W53jNHSqv
            source_type: api_record
            title: 中国历代人物传记资料库：王芳（CBDB 208133）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208133&o=json
            external_identifier: CBDB:208133
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.946Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_oJFhqGsSYkYTeGZ7iNnAnA
        status: active
        display_name: 王芳
        merged_into_person_id: null
    - claim:
        id: c_BxYB3tP2yPZs7ollYk7CWK
        subject_person_id: p_rraFGLTYB58U7anuduBTPf
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_JxHXaVu4pEEMwDNPDgBMZB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vD-TdOeUBw6yUKT3Z5FHGV
          claim_id: c_BxYB3tP2yPZs7ollYk7CWK
          source_id: s_1Fj9hOrvmUcNt2yPKQaGKR
          stance: supports
          locator: CBDB：兄弟 王芳（208133）之父／母 王宗睿
          quotation: null
          interpretation_note: 由兄弟关系推断：王立 与 王芳 为同胞（CBDB 记「兄」），王芳 之父／母即 王立 之父／母。
          source:
            id: s_1Fj9hOrvmUcNt2yPKQaGKR
            source_type: api_record
            title: 中国历代人物传记资料库：王立（CBDB 240896）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=240896&o=json
            external_identifier: CBDB:240896
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_JxHXaVu4pEEMwDNPDgBMZB
        status: active
        display_name: 王立
        merged_into_person_id: null
    - claim:
        id: c_DDrFrgswSFBjh-Wbetb4-R
        subject_person_id: p_rraFGLTYB58U7anuduBTPf
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ksG3Fz76mqPbvBKEnoXz5Z
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_S8WlfRXcZU8KgIlVKNDtN0
          claim_id: c_DDrFrgswSFBjh-Wbetb4-R
          source_id: s_r0oaWHZx3oNdbP6nQvTZbz
          stance: supports
          locator: CBDB：兄弟 王芳（208133）之父／母 王宗睿
          quotation: null
          interpretation_note: 由兄弟关系推断：王仁 与 王芳 为同胞（CBDB 记「兄」），王芳 之父／母即 王仁 之父／母。
          source:
            id: s_r0oaWHZx3oNdbP6nQvTZbz
            source_type: api_record
            title: 中国历代人物传记资料库：王仁（CBDB 240895）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=240895&o=json
            external_identifier: CBDB:240895
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ksG3Fz76mqPbvBKEnoXz5Z
        status: active
        display_name: 王仁
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王宗睿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王宗睿，明人物。正統十三年進士，籍贯金谿。（中国历代人物传记资料库 CBDB 240892） | accepted |
| name.primary | 王宗睿 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_oJFhqGsSYkYTeGZ7iNnAnA | 王芳 | accepted |
| children | p_JxHXaVu4pEEMwDNPDgBMZB | 王立 | accepted |
| children | p_ksG3Fz76mqPbvBKEnoXz5Z | 王仁 | accepted |

## 外部来源

- [中国历代人物传记资料库：王芳（CBDB 208133）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208133&o=json)
- [中国历代人物传记资料库：王立（CBDB 240896）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=240896&o=json)
- [中国历代人物传记资料库：王仁（CBDB 240895）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=240895&o=json)
- [中国历代人物传记资料库：王宗睿（CBDB 240892）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=240892&o=json)
