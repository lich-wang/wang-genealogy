---
schema: wang-person/v1
id: p_ksG3Fz76mqPbvBKEnoXz5Z
status: active
merged_into: null
display_name: 王仁
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Bq24KgvKpVGF3i644LXhKD
        subject_person_id: p_ksG3Fz76mqPbvBKEnoXz5Z
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_xSKZNYMsE3KPChtLA1Bn9u
          claim_id: c_Bq24KgvKpVGF3i644LXhKD
          source_id: s_MT6Ewuo5R1jzZZyEzy78MN
          stance: supports
          locator: CBDB:240895
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（240895）
          source: &a1
            id: s_MT6Ewuo5R1jzZZyEzy78MN
            source_type: api_record
            title: 中国历代人物传记资料库：王仁（CBDB 240895）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=240895&o=json
            external_identifier: CBDB:240895
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.927Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zQaV6svrtaYsCJnMZEdiUE
        subject_person_id: p_ksG3Fz76mqPbvBKEnoXz5Z
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仁，明人物。正統十三年進士，籍贯金谿。（中国历代人物传记资料库 CBDB 240895）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_fKpyZchF0zf-nB55x43at-
          claim_id: c_zQaV6svrtaYsCJnMZEdiUE
          source_id: s_MT6Ewuo5R1jzZZyEzy78MN
          stance: supports
          locator: CBDB:240895
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
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
        id: p_rraFGLTYB58U7anuduBTPf
        status: active
        display_name: 王宗睿
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_bNEp_60bR9H_XBj2iB75oN
        subject_person_id: p_ksG3Fz76mqPbvBKEnoXz5Z
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_oJFhqGsSYkYTeGZ7iNnAnA
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LQmYUotF5Rvn_9md4fJcNe
          claim_id: c_bNEp_60bR9H_XBj2iB75oN
          source_id: s_r0oaWHZx3oNdbP6nQvTZbz
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 208133 王芳）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: p_oJFhqGsSYkYTeGZ7iNnAnA
        status: active
        display_name: 王芳
        merged_into_person_id: null
---

# 王仁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王仁 | accepted |
| bio.summary | 王仁，明人物。正統十三年進士，籍贯金谿。（中国历代人物传记资料库 CBDB 240895） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_rraFGLTYB58U7anuduBTPf | 王宗睿 | accepted |
| other | p_oJFhqGsSYkYTeGZ7iNnAnA | 王芳 | accepted |

## 外部来源

- [中国历代人物传记资料库：王仁（CBDB 240895）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=240895&o=json)
