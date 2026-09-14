---
schema: wang-person/v1
id: p_rEn5d5M4F5rsvt2FFZCJAG
status: active
merged_into: null
display_name: 王學洛
cbdb_id: 328257
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xJV2AXCPHNYaFBj2yN3B3G
        subject_person_id: p_rEn5d5M4F5rsvt2FFZCJAG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王學洛，明人物。嘉靖四十一年進士，籍贯朝邑。（中国历代人物传记资料库 CBDB 328257）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_FhZU1HPk1JsW1VdF8FPquf
          claim_id: c_xJV2AXCPHNYaFBj2yN3B3G
          source_id: s_msrUJ6pe1XXTZBJ418Ux4a
          stance: supports
          locator: CBDB:328257
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_msrUJ6pe1XXTZBJ418Ux4a
            source_type: api_record
            title: 中国历代人物传记资料库：王學洛（CBDB 328257）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328257&o=json
            external_identifier: CBDB:328257
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:07.614Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_CtEweBy2PTAX5z2D4gqka4
        subject_person_id: p_rEn5d5M4F5rsvt2FFZCJAG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王學洛
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_GEpLvw75g5XkTxPMvCc9hW
          claim_id: c_CtEweBy2PTAX5z2D4gqka4
          source_id: s_msrUJ6pe1XXTZBJ418Ux4a
          stance: supports
          locator: CBDB:328257
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3901-4000）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_gHirKNoKSsPLlB7oYDXoDg
        subject_person_id: p_4rZFET2VU5QfJTezy8ktoQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_rEn5d5M4F5rsvt2FFZCJAG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pIPQmBMfoYS2MuaR_nJLfE
          claim_id: c_gHirKNoKSsPLlB7oYDXoDg
          source_id: s_uEgBcY-it8n3FgujHeRCze
          stance: supports
          locator: CBDB：兄弟 王學古（205095）之父／母 王來召
          quotation: null
          interpretation_note: 由兄弟关系推断：王學洛 与 王學古 为同胞（CBDB 记「兄」），王學古 之父／母即 王學洛 之父／母。
          source:
            id: s_uEgBcY-it8n3FgujHeRCze
            source_type: api_record
            title: 中国历代人物传记资料库：王學洛（CBDB 328257）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328257&o=json
            external_identifier: CBDB:328257
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_4rZFET2VU5QfJTezy8ktoQ
        status: active
        display_name: 王來召
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_-WfCPvG_25fvj_sHqo8qpv
        subject_person_id: p_EubdaeFSWc8pKsGxhe2PFM
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_rEn5d5M4F5rsvt2FFZCJAG
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_a09L9tvB3TO66bZUcwTYwF
          claim_id: c_-WfCPvG_25fvj_sHqo8qpv
          source_id: s_uEgBcY-it8n3FgujHeRCze
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205095 王學古）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_uEgBcY-it8n3FgujHeRCze
            source_type: api_record
            title: 中国历代人物传记资料库：王學洛（CBDB 328257）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328257&o=json
            external_identifier: CBDB:328257
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_EubdaeFSWc8pKsGxhe2PFM
        status: active
        display_name: 王學古
        merged_into_person_id: null
---

# 王學洛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王學洛，明人物。嘉靖四十一年進士，籍贯朝邑。（中国历代人物传记资料库 CBDB 328257） | accepted |
| name.primary | 王學洛 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_4rZFET2VU5QfJTezy8ktoQ | 王來召 | accepted |
| other | p_EubdaeFSWc8pKsGxhe2PFM | 王學古 | accepted |

## 外部来源

- [中国历代人物传记资料库：王學洛（CBDB 328257）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328257&o=json)
