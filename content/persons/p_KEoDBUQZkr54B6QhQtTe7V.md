---
schema: wang-person/v1
id: p_KEoDBUQZkr54B6QhQtTe7V
status: active
merged_into: null
display_name: 王寬
revision: 10
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_SnFLYaYZG6kHAuEoTuUQKC
        subject_person_id: p_KEoDBUQZkr54B6QhQtTe7V
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7HiRGJGyeFBPF6mYhDBCMd
          claim_id: c_SnFLYaYZG6kHAuEoTuUQKC
          source_id: s_buh6GdarQeqSi4ruLF1vxG
          stance: supports
          locator: CBDB:327151
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（327151）
          source: &a1
            id: s_buh6GdarQeqSi4ruLF1vxG
            source_type: api_record
            title: 中国历代人物传记资料库：王寬（CBDB 327151）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327151&o=json
            external_identifier: CBDB:327151
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.235Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CY6vRGq6kPf58JeosUWYCc
        subject_person_id: p_KEoDBUQZkr54B6QhQtTe7V
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寬，明人物。嘉靖四十一年進士，籍贯東陽，曾任教諭。（中国历代人物传记资料库 CBDB 327151）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_JAJK5VWFkD5djZ_WgKYUAz
          claim_id: c_CY6vRGq6kPf58JeosUWYCc
          source_id: s_buh6GdarQeqSi4ruLF1vxG
          stance: supports
          locator: CBDB:327151
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_wETXaKSC5Z0nxMP5SToY92
        subject_person_id: p_KEoDBUQZkr54B6QhQtTe7V
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_BxK799vwCxhyA6JGbqpHzN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mdco735JDEM6RGyx1FiU7O
          claim_id: c_wETXaKSC5Z0nxMP5SToY92
          source_id: s_n8fY6D3sur5MtKi8shwUp7
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第三甲第三名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_n8fY6D3sur5MtKi8shwUp7
            source_type: api_record
            title: 中国历代人物传记资料库：王乾章（CBDB 126679）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126679&o=json
            external_identifier: CBDB:126679
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.181Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_BxK799vwCxhyA6JGbqpHzN
        status: active
        display_name: 王乾章
        merged_into_person_id: null
    - claim:
        id: c_VNSb-32hqkWOA8C0APgJW1
        subject_person_id: p_KEoDBUQZkr54B6QhQtTe7V
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3LzjFw3hzkBCPgK2bCPt2t
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_43z7wATdP1T8wDBMeedArl
          claim_id: c_VNSb-32hqkWOA8C0APgJW1
          source_id: s_kqNFqJgLlGmtMcXIwO0yiT
          stance: supports
          locator: CBDB：兄弟 王乾章（126679）之父／母 王寬
          quotation: null
          interpretation_note: 由兄弟关系推断：王孝章 与 王乾章 为同胞（CBDB 记「弟」），王乾章 之父／母即 王孝章 之父／母。
          source:
            id: s_kqNFqJgLlGmtMcXIwO0yiT
            source_type: api_record
            title: 中国历代人物传记资料库：王孝章（CBDB 327160）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327160&o=json
            external_identifier: CBDB:327160
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_3LzjFw3hzkBCPgK2bCPt2t
        status: active
        display_name: 王孝章
        merged_into_person_id: null
    - claim:
        id: c_J6t90Z2d8o17eNvHbSTFx9
        subject_person_id: p_KEoDBUQZkr54B6QhQtTe7V
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_C49cRVtvgLkUKUPRthcKXq
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9MRIUt5a1KPg-31uI9sORM
          claim_id: c_J6t90Z2d8o17eNvHbSTFx9
          source_id: s_cfzmObTR3gNbwdACIdcprQ
          stance: supports
          locator: CBDB：兄弟 王乾章（126679）之父／母 王寬
          quotation: null
          interpretation_note: 由兄弟关系推断：王顒 与 王乾章 为同胞（CBDB 记「弟」），王乾章 之父／母即 王顒 之父／母。
          source:
            id: s_cfzmObTR3gNbwdACIdcprQ
            source_type: api_record
            title: 中国历代人物传记资料库：王顒（CBDB 327156）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327156&o=json
            external_identifier: CBDB:327156
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_C49cRVtvgLkUKUPRthcKXq
        status: active
        display_name: 王顒
        merged_into_person_id: null
    - claim:
        id: c_K2R3Zu0JzLuf-q5T-fyB5E
        subject_person_id: p_KEoDBUQZkr54B6QhQtTe7V
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_F1QVSUh1zQdUjCVdWEwPTv
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_d6e-uW-erHXP47jNMo1Cj0
          claim_id: c_K2R3Zu0JzLuf-q5T-fyB5E
          source_id: s_HRjhwEgV2Xmz1_iIC9miOs
          stance: supports
          locator: CBDB：兄弟 王乾章（126679）之父／母 王寬
          quotation: null
          interpretation_note: 由兄弟关系推断：王樂章 与 王乾章 为同胞（CBDB 记「弟」），王乾章 之父／母即 王樂章 之父／母。
          source:
            id: s_HRjhwEgV2Xmz1_iIC9miOs
            source_type: api_record
            title: 中国历代人物传记资料库：王樂章（CBDB 327158）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327158&o=json
            external_identifier: CBDB:327158
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_F1QVSUh1zQdUjCVdWEwPTv
        status: active
        display_name: 王樂章
        merged_into_person_id: null
    - claim:
        id: c_Hly-t9yun16RHNmI4CEol2
        subject_person_id: p_KEoDBUQZkr54B6QhQtTe7V
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Q6rPqztXmcyfmokBJdU5qV
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UZLkKkAQ7FLKV2SZGwYkD8
          claim_id: c_Hly-t9yun16RHNmI4CEol2
          source_id: s_mljHPOcpa4oBRidwU6zQTG
          stance: supports
          locator: CBDB：兄弟 王乾章（126679）之父／母 王寬
          quotation: null
          interpretation_note: 由兄弟关系推断：王惠章 与 王乾章 为同胞（CBDB 记「弟」），王乾章 之父／母即 王惠章 之父／母。
          source:
            id: s_mljHPOcpa4oBRidwU6zQTG
            source_type: api_record
            title: 中国历代人物传记资料库：王惠章（CBDB 327159）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327159&o=json
            external_identifier: CBDB:327159
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Q6rPqztXmcyfmokBJdU5qV
        status: active
        display_name: 王惠章
        merged_into_person_id: null
    - claim:
        id: c_r6zHuem5fp0uiHBFrDrWnO
        subject_person_id: p_KEoDBUQZkr54B6QhQtTe7V
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_c8r2Ubqr461ALieEYa3N36
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sCXVEXXFiqEjWu2NFd2Vd5
          claim_id: c_r6zHuem5fp0uiHBFrDrWnO
          source_id: s_5RUbYRW2GVeoazOLA6XpNC
          stance: supports
          locator: CBDB：兄弟 王乾章（126679）之父／母 王寬
          quotation: null
          interpretation_note: 由兄弟关系推断：王建章 与 王乾章 为同胞（CBDB 记「兄」），王乾章 之父／母即 王建章 之父／母。
          source:
            id: s_5RUbYRW2GVeoazOLA6XpNC
            source_type: api_record
            title: 中国历代人物传记资料库：王建章（CBDB 327163）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327163&o=json
            external_identifier: CBDB:327163
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_c8r2Ubqr461ALieEYa3N36
        status: active
        display_name: 王建章
        merged_into_person_id: null
    - claim:
        id: c_7OcdIzF8fMaAWiXbCmaLIZ
        subject_person_id: p_KEoDBUQZkr54B6QhQtTe7V
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_s91dnPRqMJdG7bgXAhHHH8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nQna3c5GBbjPTAvAzbBuVY
          claim_id: c_7OcdIzF8fMaAWiXbCmaLIZ
          source_id: s_fgipfiWwL50dWJW_6mdtdz
          stance: supports
          locator: CBDB：兄弟 王乾章（126679）之父／母 王寬
          quotation: null
          interpretation_note: 由兄弟关系推断：王大章 与 王乾章 为同胞（CBDB 记「兄」），王乾章 之父／母即 王大章 之父／母。
          source:
            id: s_fgipfiWwL50dWJW_6mdtdz
            source_type: api_record
            title: 中国历代人物传记资料库：王大章（CBDB 327162）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327162&o=json
            external_identifier: CBDB:327162
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_s91dnPRqMJdG7bgXAhHHH8
        status: active
        display_name: 王大章
        merged_into_person_id: null
    - claim:
        id: c_NxcZ47u5QY5fJzuBTFhoyp
        subject_person_id: p_KEoDBUQZkr54B6QhQtTe7V
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_tpLWJtXNDzw4MG6mGpFC51
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6xvVdyWkVvN_w8ECUe5CJX
          claim_id: c_NxcZ47u5QY5fJzuBTFhoyp
          source_id: s_hKg41OHHhtZbU3-5sxG889
          stance: supports
          locator: CBDB：兄弟 王乾章（126679）之父／母 王寬
          quotation: null
          interpretation_note: 由兄弟关系推断：王熲 与 王乾章 为同胞（CBDB 记「弟」），王乾章 之父／母即 王熲 之父／母。
          source:
            id: s_hKg41OHHhtZbU3-5sxG889
            source_type: api_record
            title: 中国历代人物传记资料库：王熲（CBDB 327157）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327157&o=json
            external_identifier: CBDB:327157
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_tpLWJtXNDzw4MG6mGpFC51
        status: active
        display_name: 王熲
        merged_into_person_id: null
    - claim:
        id: c_BO-Pj5LqzAf4U0thCSY1KY
        subject_person_id: p_KEoDBUQZkr54B6QhQtTe7V
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_tpNza8wZ1oWga6ypdCgL8c
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_N2jGh-IrlqoYHq3QiC1snB
          claim_id: c_BO-Pj5LqzAf4U0thCSY1KY
          source_id: s_c2Qgi3sYb-L6Jr5ZZ5ESjY
          stance: supports
          locator: CBDB：兄弟 王乾章（126679）之父／母 王寬
          quotation: null
          interpretation_note: 由兄弟关系推断：王廷章 与 王乾章 为同胞（CBDB 记「弟」），王乾章 之父／母即 王廷章 之父／母。
          source:
            id: s_c2Qgi3sYb-L6Jr5ZZ5ESjY
            source_type: api_record
            title: 中国历代人物传记资料库：王廷章（CBDB 327161）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327161&o=json
            external_identifier: CBDB:327161
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_tpNza8wZ1oWga6ypdCgL8c
        status: active
        display_name: 王廷章
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王寬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王寬 | accepted |
| bio.summary | 王寬，明人物。嘉靖四十一年進士，籍贯東陽，曾任教諭。（中国历代人物传记资料库 CBDB 327151） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_BxK799vwCxhyA6JGbqpHzN | 王乾章 | accepted |
| children | p_3LzjFw3hzkBCPgK2bCPt2t | 王孝章 | accepted |
| children | p_C49cRVtvgLkUKUPRthcKXq | 王顒 | accepted |
| children | p_F1QVSUh1zQdUjCVdWEwPTv | 王樂章 | accepted |
| children | p_Q6rPqztXmcyfmokBJdU5qV | 王惠章 | accepted |
| children | p_c8r2Ubqr461ALieEYa3N36 | 王建章 | accepted |
| children | p_s91dnPRqMJdG7bgXAhHHH8 | 王大章 | accepted |
| children | p_tpLWJtXNDzw4MG6mGpFC51 | 王熲 | accepted |
| children | p_tpNza8wZ1oWga6ypdCgL8c | 王廷章 | accepted |

## 外部来源

- [中国历代人物传记资料库：王大章（CBDB 327162）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327162&o=json)
- [中国历代人物传记资料库：王惠章（CBDB 327159）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327159&o=json)
- [中国历代人物传记资料库：王建章（CBDB 327163）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327163&o=json)
- [中国历代人物传记资料库：王熲（CBDB 327157）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327157&o=json)
- [中国历代人物传记资料库：王寬（CBDB 327151）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327151&o=json)
- [中国历代人物传记资料库：王樂章（CBDB 327158）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327158&o=json)
- [中国历代人物传记资料库：王乾章（CBDB 126679）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126679&o=json)
- [中国历代人物传记资料库：王廷章（CBDB 327161）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327161&o=json)
- [中国历代人物传记资料库：王孝章（CBDB 327160）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327160&o=json)
- [中国历代人物传记资料库：王顒（CBDB 327156）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327156&o=json)
