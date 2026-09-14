---
schema: wang-person/v1
id: p_UjZpJ3nna6WnKHPp7DAt53
status: active
merged_into: null
display_name: 王三聘
revision: 8
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qxENmt67WZ7pmuKvoyPD7i
        subject_person_id: p_UjZpJ3nna6WnKHPp7DAt53
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王三聘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_R45aGTvLh7QDx4d2m33BnJ
          claim_id: c_qxENmt67WZ7pmuKvoyPD7i
          source_id: s_VeAAfBxe8QmHhEieXsCmM1
          stance: supports
          locator: CBDB:203007
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（203007）
          source: &a1
            id: s_VeAAfBxe8QmHhEieXsCmM1
            source_type: api_record
            title: 中国历代人物传记资料库：王三聘（CBDB 203007）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203007&o=json
            external_identifier: CBDB:203007
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.771Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_6HuPkqtQAyaaxwJBBs6HYL
        subject_person_id: p_UjZpJ3nna6WnKHPp7DAt53
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1501年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZWubW6i5qdcwySEAPxogmN
          claim_id: c_6HuPkqtQAyaaxwJBBs6HYL
          source_id: s_VeAAfBxe8QmHhEieXsCmM1
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
        id: c_w3JquwYQe57nyeMeNGnLVf
        subject_person_id: p_UjZpJ3nna6WnKHPp7DAt53
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王三聘（生于1501年），明人物。明清進士進士，籍贯盩厔，入仕進士。（中国历代人物传记资料库 CBDB 203007）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ANNZlSJuLTLuF7Xy3jXH-R
          claim_id: c_w3JquwYQe57nyeMeNGnLVf
          source_id: s_VeAAfBxe8QmHhEieXsCmM1
          stance: supports
          locator: CBDB:203007
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
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
          source:
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
      object_person:
        id: p_pBNZiURNhTvnzH774UY4Jb
        status: active
        display_name: 王玉
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_LR3NapQrlgbbwygOwglIkX
        subject_person_id: p_71d1dBTdsdBJjjgDNyHHUE
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_UjZpJ3nna6WnKHPp7DAt53
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FobqQC7sXuCmkqXKQgVh5z
          claim_id: c_LR3NapQrlgbbwygOwglIkX
          source_id: s_LEH2rTcjbyiPTcicePA3qK
          stance: supports
          locator: 嘉靖十四年進士登科錄:一卷，第三甲第二百名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_LEH2rTcjbyiPTcicePA3qK
            source_type: api_record
            title: 中国历代人物传记资料库：王連（CBDB 298278）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298278&o=json
            external_identifier: CBDB:298278
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.584Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_71d1dBTdsdBJjjgDNyHHUE
        status: active
        display_name: 王連
        merged_into_person_id: null
    - claim:
        id: c_906FLyp1hOtIR6hmGaao0g
        subject_person_id: p_Mdksq8j5SVp3pVE2nRfG3X
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_UjZpJ3nna6WnKHPp7DAt53
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_E-TpDlyYXN_4fa2VMiVSyS
          claim_id: c_906FLyp1hOtIR6hmGaao0g
          source_id: s_n7gAPZkjMyohitLNz6SDeQ
          stance: supports
          locator: 嘉靖十四年進士登科錄:一卷，第三甲第二百名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_n7gAPZkjMyohitLNz6SDeQ
            source_type: api_record
            title: 中国历代人物传记资料库：王宰（CBDB 298279）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298279&o=json
            external_identifier: CBDB:298279
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.584Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Mdksq8j5SVp3pVE2nRfG3X
        status: active
        display_name: 王宰
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_T-lOC63ATEphejBpsLvhuO
        subject_person_id: p_Dg5GK114HkjHWiUQqQdGGD
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_UjZpJ3nna6WnKHPp7DAt53
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FyU5FejQkq8OTtueRxKdcU
          claim_id: c_T-lOC63ATEphejBpsLvhuO
          source_id: s_yJLRPmdwTvlPLhp2vUwc6Z
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 203007 王三聘）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_ZHCYxLYX2lIRXYM3q8-hsq
        subject_person_id: p_UjZpJ3nna6WnKHPp7DAt53
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_dBgtSV57fJkv67NjDtRSHX
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_klfPCZr_DQU6wdQLz2oQjc
          claim_id: c_ZHCYxLYX2lIRXYM3q8-hsq
          source_id: s_6q_dQ67hZ8G00PAo7XlDGj
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 203007 王三聘）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_4aEUbltfBYeclwF4Zdeu8j
        subject_person_id: p_UjZpJ3nna6WnKHPp7DAt53
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_jF7kSC1exGE3NKz6j8BUB2
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mSgRmztx5PaVipQUBcbyDs
          claim_id: c_4aEUbltfBYeclwF4Zdeu8j
          source_id: s_0McAxH8raK1ITX6Tiqogzl
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 203007 王三聘）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_qhvokQCIKCA74g62TdJtPs
        subject_person_id: p_UjZpJ3nna6WnKHPp7DAt53
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_sMLavYdiyQMuQNN6oGpHaE
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QecxBjZNN5T0-slXSeJJ4Y
          claim_id: c_qhvokQCIKCA74g62TdJtPs
          source_id: s_jmKSDkr0-ctVnoFDypU4nB
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 203007 王三聘）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
---

# 王三聘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王三聘 | accepted |
| birth.date | 1501年 | accepted |
| bio.summary | 王三聘（生于1501年），明人物。明清進士進士，籍贯盩厔，入仕進士。（中国历代人物传记资料库 CBDB 203007） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_pBNZiURNhTvnzH774UY4Jb | 王玉 | accepted |
| ancestors | p_71d1dBTdsdBJjjgDNyHHUE | 王連 | accepted |
| ancestors | p_Mdksq8j5SVp3pVE2nRfG3X | 王宰 | accepted |
| other | p_Dg5GK114HkjHWiUQqQdGGD | 王來訪 | accepted |
| other | p_dBgtSV57fJkv67NjDtRSHX | 王三顧 | accepted |
| other | p_jF7kSC1exGE3NKz6j8BUB2 | 王三重 | accepted |
| other | p_sMLavYdiyQMuQNN6oGpHaE | 王三槐 | accepted |

## 外部来源

- [中国历代人物传记资料库：王來訪（CBDB 298284）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298284&o=json)
- [中国历代人物传记资料库：王連（CBDB 298278）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298278&o=json)
- [中国历代人物传记资料库：王三顧（CBDB 298285）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298285&o=json)
- [中国历代人物传记资料库：王三槐（CBDB 298287）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298287&o=json)
- [中国历代人物传记资料库：王三聘（CBDB 203007）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203007&o=json)
- [中国历代人物传记资料库：王三重（CBDB 298286）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298286&o=json)
- [中国历代人物传记资料库：王玉（CBDB 298281）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298281&o=json)
- [中国历代人物传记资料库：王宰（CBDB 298279）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298279&o=json)
