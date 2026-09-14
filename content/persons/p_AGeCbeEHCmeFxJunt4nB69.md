---
schema: wang-person/v1
id: p_AGeCbeEHCmeFxJunt4nB69
status: active
merged_into: null
display_name: 王繹
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XvRxRaAg2rP8BDspPSRBaH
        subject_person_id: p_AGeCbeEHCmeFxJunt4nB69
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繹
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_rBAR93NepC2MagN94bNS7q
          claim_id: c_XvRxRaAg2rP8BDspPSRBaH
          source_id: s_KvGzNEj5Nr5WVEqfovceWP
          stance: supports
          locator: CBDB:260408
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（260408）
          source: &a1
            id: s_KvGzNEj5Nr5WVEqfovceWP
            source_type: api_record
            title: 中国历代人物传记资料库：王繹（CBDB 260408）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260408&o=json
            external_identifier: CBDB:260408
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.511Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BCAFEQE6k7y13zqux69mu7
        subject_person_id: p_AGeCbeEHCmeFxJunt4nB69
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繹，明人物。成化二十三年進士，籍贯臨川。（中国历代人物传记资料库 CBDB 260408）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_GI_9ZWJexBMGWjDBZbZsN5
          claim_id: c_BCAFEQE6k7y13zqux69mu7
          source_id: s_KvGzNEj5Nr5WVEqfovceWP
          stance: supports
          locator: CBDB:260408
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_OkeSNz2Y9EljzavD35VG3o
        subject_person_id: p_v17Ui16KgEGN3E8zs7M4y6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_AGeCbeEHCmeFxJunt4nB69
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_r8C4Yu-1yUTNzYoW9oEOqM
          claim_id: c_OkeSNz2Y9EljzavD35VG3o
          source_id: s_jCDwt-_qJj4OzdRiGaRNTR
          stance: supports
          locator: CBDB：兄弟 王約（126619）之父／母 王義
          quotation: null
          interpretation_note: 由兄弟关系推断：王繹 与 王約 为同胞（CBDB 记「兄」），王約 之父／母即 王繹 之父／母。
          source:
            id: s_jCDwt-_qJj4OzdRiGaRNTR
            source_type: api_record
            title: 中国历代人物传记资料库：王繹（CBDB 260408）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260408&o=json
            external_identifier: CBDB:260408
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_v17Ui16KgEGN3E8zs7M4y6
        status: active
        display_name: 王義
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_mA60vzYhHHXqy3eYpNDiGi
        subject_person_id: p_AGeCbeEHCmeFxJunt4nB69
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_bkiJd7fMDoFB71EF4g2i5Z
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gSLAQY8DAkrsLO-b0_k399
          claim_id: c_mA60vzYhHHXqy3eYpNDiGi
          source_id: s_jCDwt-_qJj4OzdRiGaRNTR
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126619 王約）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_jCDwt-_qJj4OzdRiGaRNTR
            source_type: api_record
            title: 中国历代人物传记资料库：王繹（CBDB 260408）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260408&o=json
            external_identifier: CBDB:260408
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_bkiJd7fMDoFB71EF4g2i5Z
        status: active
        display_name: 王約
        merged_into_person_id: null
---

# 王繹

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王繹 | accepted |
| bio.summary | 王繹，明人物。成化二十三年進士，籍贯臨川。（中国历代人物传记资料库 CBDB 260408） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_v17Ui16KgEGN3E8zs7M4y6 | 王義 | accepted |
| other | p_bkiJd7fMDoFB71EF4g2i5Z | 王約 | accepted |

## 外部来源

- [中国历代人物传记资料库：王繹（CBDB 260408）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260408&o=json)
