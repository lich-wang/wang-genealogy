---
schema: wang-person/v1
id: p_NQ8mkgAu6KxcsGFUuZARwz
status: active
merged_into: null
display_name: 王學顏
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_iELA64zkdgKLmDH4JnnMvU
        subject_person_id: p_NQ8mkgAu6KxcsGFUuZARwz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王學顏
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JJq9sBLukB7jRk5PK6KYCe
          claim_id: c_iELA64zkdgKLmDH4JnnMvU
          source_id: s_7gBaFYMfCUTEmHDX1xquQA
          stance: supports
          locator: CBDB:211990
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（211990）
          source: &a1
            id: s_7gBaFYMfCUTEmHDX1xquQA
            source_type: api_record
            title: 中国历代人物传记资料库：王學顏（CBDB 211990）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211990&o=json
            external_identifier: CBDB:211990
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.044Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_UziEVMKgQUqS8Sb88oojax
        subject_person_id: p_NQ8mkgAu6KxcsGFUuZARwz
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王學顏，明人物。隆慶五年進士，籍贯濱州。（中国历代人物传记资料库 CBDB 211990）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_awMYbBYmFlwb5GaGjKIi3Z
          claim_id: c_UziEVMKgQUqS8Sb88oojax
          source_id: s_7gBaFYMfCUTEmHDX1xquQA
          stance: supports
          locator: CBDB:211990
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c__BrZvUJ8m2HmLwhu4PN_LG
        subject_person_id: p_aEy4RxmjmGXnETHRGP3pm2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_NQ8mkgAu6KxcsGFUuZARwz
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ahFyalo-IXJqxXS-VwkpZg
          claim_id: c__BrZvUJ8m2HmLwhu4PN_LG
          source_id: s_uEYEfT5G-KYUTJNIsunIxo
          stance: supports
          locator: CBDB：兄弟 王學書（206005）之父／母 王兌
          quotation: null
          interpretation_note: 由兄弟关系推断：王學顏 与 王學書 为同胞（CBDB 记「兄」），王學書 之父／母即 王學顏 之父／母。
          source:
            id: s_uEYEfT5G-KYUTJNIsunIxo
            source_type: api_record
            title: 中国历代人物传记资料库：王學顏（CBDB 211990）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211990&o=json
            external_identifier: CBDB:211990
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
        id: c_lAUeo-XBJuaht1Mevn8m1L
        subject_person_id: p_NQ8mkgAu6KxcsGFUuZARwz
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
        - id: cs_gL8F2nWgwlIROPM9_4JJFd
          claim_id: c_lAUeo-XBJuaht1Mevn8m1L
          source_id: s_uEYEfT5G-KYUTJNIsunIxo
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206005 王學書）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_uEYEfT5G-KYUTJNIsunIxo
            source_type: api_record
            title: 中国历代人物传记资料库：王學顏（CBDB 211990）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211990&o=json
            external_identifier: CBDB:211990
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_s3BG2bed1QUGktV4Jrg4UH
        status: active
        display_name: 王學書
        merged_into_person_id: null
---

# 王學顏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王學顏 | accepted |
| bio.summary | 王學顏，明人物。隆慶五年進士，籍贯濱州。（中国历代人物传记资料库 CBDB 211990） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_aEy4RxmjmGXnETHRGP3pm2 | 王兌 | accepted |
| other | p_s3BG2bed1QUGktV4Jrg4UH | 王學書 | accepted |

## 外部来源

- [中国历代人物传记资料库：王學顏（CBDB 211990）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211990&o=json)
