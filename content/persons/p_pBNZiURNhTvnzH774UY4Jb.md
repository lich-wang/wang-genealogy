---
schema: wang-person/v1
id: p_pBNZiURNhTvnzH774UY4Jb
status: active
merged_into: null
display_name: 王玉
revision: 6
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MmpWCvKQ2xjSDZKX74QA1v
        subject_person_id: p_pBNZiURNhTvnzH774UY4Jb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QFtRM2SWe2Dojz2P6H57Vt
          claim_id: c_MmpWCvKQ2xjSDZKX74QA1v
          source_id: s_H4kgRTdbTVdJtFNPuG4pBb
          stance: supports
          locator: CBDB:298281
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（298281）
          source: &a1
            id: s_H4kgRTdbTVdJtFNPuG4pBb
            source_type: api_record
            title: 中国历代人物传记资料库：王玉（CBDB 298281）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298281&o=json
            external_identifier: CBDB:298281
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.585Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jKPkW7QgALBBetKzrCDTgS
        subject_person_id: p_pBNZiURNhTvnzH774UY4Jb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玉，明人物。嘉靖十四年進士，籍贯盩厔。（中国历代人物传记资料库 CBDB 298281）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_fgsc9QWHU1t4GyZvimM6e8
          claim_id: c_jKPkW7QgALBBetKzrCDTgS
          source_id: s_H4kgRTdbTVdJtFNPuG4pBb
          stance: supports
          locator: CBDB:298281
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_3q4B5wHp8u0fs_tr8HNQbF
        subject_person_id: p_pBNZiURNhTvnzH774UY4Jb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_UjZpJ3nna6WnKHPp7DAt53
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bz3NvJQD52xRNlA8rTUl0l
          claim_id: c_3q4B5wHp8u0fs_tr8HNQbF
          source_id: s_H4kgRTdbTVdJtFNPuG4pBb
          stance: supports
          locator: 嘉靖十四年進士登科錄:一卷，第三甲第二百名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_UjZpJ3nna6WnKHPp7DAt53
        status: active
        display_name: 王三聘
        merged_into_person_id: null
    - claim:
        id: c__iEHa86rH1ivWzVg4YItCF
        subject_person_id: p_pBNZiURNhTvnzH774UY4Jb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Dg5GK114HkjHWiUQqQdGGD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vJ5yTPFQibN8NwANYRI-Ia
          claim_id: c__iEHa86rH1ivWzVg4YItCF
          source_id: s_yJLRPmdwTvlPLhp2vUwc6Z
          stance: supports
          locator: CBDB：兄弟 王三聘（203007）之父／母 王玉
          quotation: null
          interpretation_note: 由兄弟关系推断：王來訪 与 王三聘 为同胞（CBDB 记「弟」），王三聘 之父／母即 王來訪 之父／母。
          source:
            id: s_yJLRPmdwTvlPLhp2vUwc6Z
            source_type: api_record
            title: 中国历代人物传记资料库：王來訪（CBDB 298284）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298284&o=json
            external_identifier: CBDB:298284
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Dg5GK114HkjHWiUQqQdGGD
        status: active
        display_name: 王來訪
        merged_into_person_id: null
    - claim:
        id: c_jRtePYNsLelpmltdkf9blK
        subject_person_id: p_pBNZiURNhTvnzH774UY4Jb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_dBgtSV57fJkv67NjDtRSHX
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_m9_fI8zhKoyrV_AdoG7LT_
          claim_id: c_jRtePYNsLelpmltdkf9blK
          source_id: s_6q_dQ67hZ8G00PAo7XlDGj
          stance: supports
          locator: CBDB：兄弟 王三聘（203007）之父／母 王玉
          quotation: null
          interpretation_note: 由兄弟关系推断：王三顧 与 王三聘 为同胞（CBDB 记「弟」），王三聘 之父／母即 王三顧 之父／母。
          source:
            id: s_6q_dQ67hZ8G00PAo7XlDGj
            source_type: api_record
            title: 中国历代人物传记资料库：王三顧（CBDB 298285）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298285&o=json
            external_identifier: CBDB:298285
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_dBgtSV57fJkv67NjDtRSHX
        status: active
        display_name: 王三顧
        merged_into_person_id: null
    - claim:
        id: c_tcELV1XtYUDBVKeCLLGdCU
        subject_person_id: p_pBNZiURNhTvnzH774UY4Jb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_jF7kSC1exGE3NKz6j8BUB2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BbZf-dokACzdYhvQbB8BIJ
          claim_id: c_tcELV1XtYUDBVKeCLLGdCU
          source_id: s_0McAxH8raK1ITX6Tiqogzl
          stance: supports
          locator: CBDB：兄弟 王三聘（203007）之父／母 王玉
          quotation: null
          interpretation_note: 由兄弟关系推断：王三重 与 王三聘 为同胞（CBDB 记「弟」），王三聘 之父／母即 王三重 之父／母。
          source:
            id: s_0McAxH8raK1ITX6Tiqogzl
            source_type: api_record
            title: 中国历代人物传记资料库：王三重（CBDB 298286）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298286&o=json
            external_identifier: CBDB:298286
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_jF7kSC1exGE3NKz6j8BUB2
        status: active
        display_name: 王三重
        merged_into_person_id: null
    - claim:
        id: c_HXOI6pk8K8aD7oHvd01jBY
        subject_person_id: p_pBNZiURNhTvnzH774UY4Jb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_sMLavYdiyQMuQNN6oGpHaE
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_m2Vb350_9AuH-3h4vyFMhg
          claim_id: c_HXOI6pk8K8aD7oHvd01jBY
          source_id: s_jmKSDkr0-ctVnoFDypU4nB
          stance: supports
          locator: CBDB：兄弟 王三聘（203007）之父／母 王玉
          quotation: null
          interpretation_note: 由兄弟关系推断：王三槐 与 王三聘 为同胞（CBDB 记「兄」），王三聘 之父／母即 王三槐 之父／母。
          source:
            id: s_jmKSDkr0-ctVnoFDypU4nB
            source_type: api_record
            title: 中国历代人物传记资料库：王三槐（CBDB 298287）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298287&o=json
            external_identifier: CBDB:298287
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_sMLavYdiyQMuQNN6oGpHaE
        status: active
        display_name: 王三槐
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王玉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王玉 | accepted |
| bio.summary | 王玉，明人物。嘉靖十四年進士，籍贯盩厔。（中国历代人物传记资料库 CBDB 298281） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_UjZpJ3nna6WnKHPp7DAt53 | 王三聘 | accepted |
| children | p_Dg5GK114HkjHWiUQqQdGGD | 王來訪 | accepted |
| children | p_dBgtSV57fJkv67NjDtRSHX | 王三顧 | accepted |
| children | p_jF7kSC1exGE3NKz6j8BUB2 | 王三重 | accepted |
| children | p_sMLavYdiyQMuQNN6oGpHaE | 王三槐 | accepted |

## 外部来源

- [中国历代人物传记资料库：王來訪（CBDB 298284）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298284&o=json)
- [中国历代人物传记资料库：王三顧（CBDB 298285）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298285&o=json)
- [中国历代人物传记资料库：王三槐（CBDB 298287）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298287&o=json)
- [中国历代人物传记资料库：王三重（CBDB 298286）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298286&o=json)
- [中国历代人物传记资料库：王玉（CBDB 298281）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298281&o=json)
