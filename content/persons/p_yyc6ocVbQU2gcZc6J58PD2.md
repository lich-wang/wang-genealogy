---
schema: wang-person/v1
id: p_yyc6ocVbQU2gcZc6J58PD2
status: active
merged_into: null
display_name: 王學禮
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_EsU1m4qrm6gKTSgVGRorgh
        subject_person_id: p_yyc6ocVbQU2gcZc6J58PD2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王學禮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zcFCq6E8QrHpC6asFX81Sm
          claim_id: c_EsU1m4qrm6gKTSgVGRorgh
          source_id: s_rZfyz1sizKQQoebbq1dKuD
          stance: supports
          locator: CBDB:211988
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（211988）
          source: &a1
            id: s_rZfyz1sizKQQoebbq1dKuD
            source_type: api_record
            title: 中国历代人物传记资料库：王學禮（CBDB 211988）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211988&o=json
            external_identifier: CBDB:211988
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.041Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ni3mXHQmYJW6a8QD1vJpMn
        subject_person_id: p_yyc6ocVbQU2gcZc6J58PD2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王學禮，明人物。隆慶五年進士，籍贯濱州，曾任縣丞。（中国历代人物传记资料库 CBDB 211988）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_NX1PLvVgldcTNW12es0zyS
          claim_id: c_ni3mXHQmYJW6a8QD1vJpMn
          source_id: s_rZfyz1sizKQQoebbq1dKuD
          stance: supports
          locator: CBDB:211988
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_eYEOvkO4rRPde2_fwlqk8a
        subject_person_id: p_aEy4RxmjmGXnETHRGP3pm2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_yyc6ocVbQU2gcZc6J58PD2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8jJM34iVzqqdHajo5ZcwA3
          claim_id: c_eYEOvkO4rRPde2_fwlqk8a
          source_id: s_bZMw6hrocfvibHXAoJfadR
          stance: supports
          locator: CBDB：兄弟 王學書（206005）之父／母 王兌
          quotation: null
          interpretation_note: 由兄弟关系推断：王學禮 与 王學書 为同胞（CBDB 记「兄」），王學書 之父／母即 王學禮 之父／母。
          source:
            id: s_bZMw6hrocfvibHXAoJfadR
            source_type: api_record
            title: 中国历代人物传记资料库：王學禮（CBDB 211988）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211988&o=json
            external_identifier: CBDB:211988
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_aEy4RxmjmGXnETHRGP3pm2
        status: active
        display_name: 王兌
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_J5ILs7re9v7G1u1W2803py
        subject_person_id: p_s3BG2bed1QUGktV4Jrg4UH
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_yyc6ocVbQU2gcZc6J58PD2
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OAn0F12SUScxIuMcOePAp_
          claim_id: c_J5ILs7re9v7G1u1W2803py
          source_id: s_bZMw6hrocfvibHXAoJfadR
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206005 王學書）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_bZMw6hrocfvibHXAoJfadR
            source_type: api_record
            title: 中国历代人物传记资料库：王學禮（CBDB 211988）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211988&o=json
            external_identifier: CBDB:211988
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_s3BG2bed1QUGktV4Jrg4UH
        status: active
        display_name: 王學書
        merged_into_person_id: null
---

# 王學禮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王學禮 | accepted |
| bio.summary | 王學禮，明人物。隆慶五年進士，籍贯濱州，曾任縣丞。（中国历代人物传记资料库 CBDB 211988） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_aEy4RxmjmGXnETHRGP3pm2 | 王兌 | accepted |
| other | p_s3BG2bed1QUGktV4Jrg4UH | 王學書 | accepted |

## 外部来源

- [中国历代人物传记资料库：王學禮（CBDB 211988）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211988&o=json)
