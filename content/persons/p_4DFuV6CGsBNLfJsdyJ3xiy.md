---
schema: wang-person/v1
id: p_4DFuV6CGsBNLfJsdyJ3xiy
status: active
merged_into: null
display_name: 王廷簡
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_rAwEwBCE66sC8gtKKhJmNM
        subject_person_id: p_4DFuV6CGsBNLfJsdyJ3xiy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷簡
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_cBMDWyMeP6vFEe2tSwHFD9
          claim_id: c_rAwEwBCE66sC8gtKKhJmNM
          source_id: s_ARQKtERHmNGY6Hxj2bzaXN
          stance: supports
          locator: CBDB:205141
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（205141）
          source: &a1
            id: s_ARQKtERHmNGY6Hxj2bzaXN
            source_type: api_record
            title: 中国历代人物传记资料库：王廷簡（CBDB 205141）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205141&o=json
            external_identifier: CBDB:205141
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.854Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_B5n71jhn4JvGL9SybDSdt6
        subject_person_id: p_4DFuV6CGsBNLfJsdyJ3xiy
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1531年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PeXZxo27F7HMgFW4jSYj4j
          claim_id: c_B5n71jhn4JvGL9SybDSdt6
          source_id: s_ARQKtERHmNGY6Hxj2bzaXN
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xeGd1Sur2FeBFPRYBmcnof
        subject_person_id: p_4DFuV6CGsBNLfJsdyJ3xiy
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷簡（生于1531年），明人物。明清進士進士，籍贯邛州，入仕進士。（中国历代人物传记资料库 CBDB 205141）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Jb30YvV22CMSYXcHr8jchj
          claim_id: c_xeGd1Sur2FeBFPRYBmcnof
          source_id: s_ARQKtERHmNGY6Hxj2bzaXN
          stance: supports
          locator: CBDB:205141
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_e6bOCVRr1rxHSvK2by4ub9
        subject_person_id: p_HR4AmT7nnCGAtrL186TArG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4DFuV6CGsBNLfJsdyJ3xiy
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MCkpJvwCAc6KlMZnZLBQ5O
          claim_id: c_e6bOCVRr1rxHSvK2by4ub9
          source_id: s_ARQKtERHmNGY6Hxj2bzaXN
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第三甲第一百六十名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_HR4AmT7nnCGAtrL186TArG
        status: active
        display_name: 王聘
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_CbWnWNkQsxBiQRaa8A842B
        subject_person_id: p_4DFuV6CGsBNLfJsdyJ3xiy
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_dehHPqBzmeR27nUp5P9VCc
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vmepAaTq4kpljXCfSeLOEM
          claim_id: c_CbWnWNkQsxBiQRaa8A842B
          source_id: s_dHIMtIpHSVKAuMq0XhGgJp
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第三甲第一百六十名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_dHIMtIpHSVKAuMq0XhGgJp
            source_type: api_record
            title: 中国历代人物传记资料库：凃氏(王廷簡妻)（CBDB 328852）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328852&o=json
            external_identifier: CBDB:328852
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_dehHPqBzmeR27nUp5P9VCc
        status: active
        display_name: 凃氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_LhcPD8pAD9S2QXtrL9DKiy
        subject_person_id: p_8UiJxE94RAsuCL5DgziXax
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_4DFuV6CGsBNLfJsdyJ3xiy
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4AilQunnNcQTvnoaCb1J52
          claim_id: c_LhcPD8pAD9S2QXtrL9DKiy
          source_id: s_ARQKtERHmNGY6Hxj2bzaXN
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第三甲第一百六十名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_8UiJxE94RAsuCL5DgziXax
        status: active
        display_name: 王大端
        merged_into_person_id: null
    - claim:
        id: c_sXsj7dnILfKGId4QvDvlRD
        subject_person_id: p_2Tkg2qP4pMvRyrcpAtc29W
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_4DFuV6CGsBNLfJsdyJ3xiy
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bbzG0UIbhDDJ3Gy2GjBM3F
          claim_id: c_sXsj7dnILfKGId4QvDvlRD
          source_id: s_ARQKtERHmNGY6Hxj2bzaXN
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第三甲第一百六十名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_2Tkg2qP4pMvRyrcpAtc29W
        status: active
        display_name: 王禮冠
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王廷簡

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廷簡 | accepted |
| birth.date | 1531年 | accepted |
| bio.summary | 王廷簡（生于1531年），明人物。明清進士進士，籍贯邛州，入仕進士。（中国历代人物传记资料库 CBDB 205141） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_HR4AmT7nnCGAtrL186TArG | 王聘 | accepted |
| spouses | p_dehHPqBzmeR27nUp5P9VCc | 凃氏 | accepted |
| ancestors | p_8UiJxE94RAsuCL5DgziXax | 王大端 | accepted |
| ancestors | p_2Tkg2qP4pMvRyrcpAtc29W | 王禮冠 | accepted |

## 外部来源

- [中国历代人物传记资料库：凃氏(王廷簡妻)（CBDB 328852）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328852&o=json)
- [中国历代人物传记资料库：王廷簡（CBDB 205141）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205141&o=json)
