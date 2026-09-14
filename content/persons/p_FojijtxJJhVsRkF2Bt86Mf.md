---
schema: wang-person/v1
id: p_FojijtxJJhVsRkF2Bt86Mf
status: active
merged_into: null
display_name: 王汝登
cbdb_id: 211985
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_E26ACdkZgaWncJePBTf2ay
        subject_person_id: p_FojijtxJJhVsRkF2Bt86Mf
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝登，明人物。隆慶五年進士，籍贯濱州。（中国历代人物传记资料库 CBDB 211985）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_ufH7wZBp4oytDqt2xaApvl
          claim_id: c_E26ACdkZgaWncJePBTf2ay
          source_id: s_H26WxfGfQTX9CajqwAiWhz
          stance: supports
          locator: CBDB:211985
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_H26WxfGfQTX9CajqwAiWhz
            source_type: api_record
            title: 中国历代人物传记资料库：王汝登（CBDB 211985）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211985&o=json
            external_identifier: CBDB:211985
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:55.593Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_P3Vh5ByP7Q2EaidUYoL9Qq
        subject_person_id: p_FojijtxJJhVsRkF2Bt86Mf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝登
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_P8qUpTqGYdhrWNFYTCVf46
          claim_id: c_P3Vh5ByP7Q2EaidUYoL9Qq
          source_id: s_H26WxfGfQTX9CajqwAiWhz
          stance: supports
          locator: CBDB:211985
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2401-2500）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_GPkYsri_vTStPlOJ6m5sfZ
        subject_person_id: p_aEy4RxmjmGXnETHRGP3pm2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_FojijtxJJhVsRkF2Bt86Mf
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5ltSD-k-OOsQ0P4WW3oWMs
          claim_id: c_GPkYsri_vTStPlOJ6m5sfZ
          source_id: s_Sw7CD430-HgYfjclhXVKs8
          stance: supports
          locator: CBDB：兄弟 王學書（206005）之父／母 王兌
          quotation: null
          interpretation_note: 由兄弟关系推断：王汝登 与 王學書 为同胞（CBDB 记「弟」），王學書 之父／母即 王汝登 之父／母。
          source:
            id: s_Sw7CD430-HgYfjclhXVKs8
            source_type: api_record
            title: 中国历代人物传记资料库：王汝登（CBDB 211985）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211985&o=json
            external_identifier: CBDB:211985
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
        id: c_B6c2EylRim1cRtGjE6f7Xh
        subject_person_id: p_FojijtxJJhVsRkF2Bt86Mf
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_s3BG2bed1QUGktV4Jrg4UH
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6UzFvzWDTJyZrfRfoRcZ4q
          claim_id: c_B6c2EylRim1cRtGjE6f7Xh
          source_id: s_Sw7CD430-HgYfjclhXVKs8
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 206005 王學書）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Sw7CD430-HgYfjclhXVKs8
            source_type: api_record
            title: 中国历代人物传记资料库：王汝登（CBDB 211985）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211985&o=json
            external_identifier: CBDB:211985
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_s3BG2bed1QUGktV4Jrg4UH
        status: active
        display_name: 王學書
        merged_into_person_id: null
---

# 王汝登

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王汝登，明人物。隆慶五年進士，籍贯濱州。（中国历代人物传记资料库 CBDB 211985） | accepted |
| name.primary | 王汝登 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_aEy4RxmjmGXnETHRGP3pm2 | 王兌 | accepted |
| other | p_s3BG2bed1QUGktV4Jrg4UH | 王學書 | accepted |

## 外部来源

- [中国历代人物传记资料库：王汝登（CBDB 211985）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211985&o=json)
