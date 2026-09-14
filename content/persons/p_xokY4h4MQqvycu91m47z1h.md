---
schema: wang-person/v1
id: p_xokY4h4MQqvycu91m47z1h
status: active
merged_into: null
display_name: 王安道
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KkL2CKTy3fmYPm22ytZvNg
        subject_person_id: p_xokY4h4MQqvycu91m47z1h
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王安道
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ChZeiDd2J9hxoaQmDAF1cG
          claim_id: c_KkL2CKTy3fmYPm22ytZvNg
          source_id: s_3FBw5E2VuTmFWGsPWKLaCv
          stance: supports
          locator: CBDB:38670
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（38670）
          source: &a1
            id: s_3FBw5E2VuTmFWGsPWKLaCv
            source_type: api_record
            title: 中国历代人物传记资料库：王安道（CBDB 38670）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38670&o=json
            external_identifier: CBDB:38670
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.525Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_A8e5R3JbA83HgHiZPpGWYi
        subject_person_id: p_xokY4h4MQqvycu91m47z1h
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王安道，元人物。籍贯鄞縣，入仕進士，曾任禮儀院。（中国历代人物传记资料库 CBDB 38670）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_YnadYGhyPpQKrSfSGrc91t
          claim_id: c_A8e5R3JbA83HgHiZPpGWYi
          source_id: s_3FBw5E2VuTmFWGsPWKLaCv
          stance: supports
          locator: CBDB:38670
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_u7ndaXs8HVlaehvrYs2Lai
        subject_person_id: p_RA8LBgUDtrLLPDFgrdefPD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_xokY4h4MQqvycu91m47z1h
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_j0iw5HdVdr34Xt44VnXOE0
          claim_id: c_u7ndaXs8HVlaehvrYs2Lai
          source_id: s_cO1NoyEBD23tScjiOpqfIm
          stance: supports
          locator: CBDB：兄弟 王文貫（25596）之父／母 王時敘
          quotation: null
          interpretation_note: 由兄弟关系推断：王安道 与 王文貫 为同胞（CBDB 记「兄」），王文貫 之父／母即 王安道 之父／母。
          source:
            id: s_cO1NoyEBD23tScjiOpqfIm
            source_type: api_record
            title: 中国历代人物传记资料库：王安道（CBDB 38670）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38670&o=json
            external_identifier: CBDB:38670
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_RA8LBgUDtrLLPDFgrdefPD
        status: active
        display_name: 王時敘
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_f8hK2c41z_zsavaFvuv4vY
        subject_person_id: p_P4oAEcF78neAuvnwQBF9EK
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_xokY4h4MQqvycu91m47z1h
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BDn2WnnnJ7Uv6-9auQrluC
          claim_id: c_f8hK2c41z_zsavaFvuv4vY
          source_id: s_cO1NoyEBD23tScjiOpqfIm
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 25596 王文貫）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_cO1NoyEBD23tScjiOpqfIm
            source_type: api_record
            title: 中国历代人物传记资料库：王安道（CBDB 38670）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38670&o=json
            external_identifier: CBDB:38670
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_P4oAEcF78neAuvnwQBF9EK
        status: active
        display_name: 王文貫
        merged_into_person_id: null
---

# 王安道

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王安道 | accepted |
| bio.summary | 王安道，元人物。籍贯鄞縣，入仕進士，曾任禮儀院。（中国历代人物传记资料库 CBDB 38670） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_RA8LBgUDtrLLPDFgrdefPD | 王時敘 | accepted |
| other | p_P4oAEcF78neAuvnwQBF9EK | 王文貫 | accepted |

## 外部来源

- [中国历代人物传记资料库：王安道（CBDB 38670）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38670&o=json)
