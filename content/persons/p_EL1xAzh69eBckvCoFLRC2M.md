---
schema: wang-person/v1
id: p_EL1xAzh69eBckvCoFLRC2M
status: active
merged_into: null
display_name: 王紀
revision: 10
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_akfjdNZPG8TQskorc9N2hH
        subject_person_id: p_EL1xAzh69eBckvCoFLRC2M
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_oCXkHKp9zk2Ake5EiHeaMN
          claim_id: c_akfjdNZPG8TQskorc9N2hH
          source_id: s_rthLjWyt6aPyKHFsejFoGT
          stance: supports
          locator: CBDB:304149
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（304149）
          source: &a1
            id: s_rthLjWyt6aPyKHFsejFoGT
            source_type: api_record
            title: 中国历代人物传记资料库：王紀（CBDB 304149）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304149&o=json
            external_identifier: CBDB:304149
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.703Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_wgfSUbw4MAg2DN25i6Hcb5
        subject_person_id: p_EL1xAzh69eBckvCoFLRC2M
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紀，明人物。嘉靖二十年進士，籍贯晉江，曾任吏部員外郎。（中国历代人物传记资料库 CBDB 304149）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_67uRvBSbhQPDEaoxd_M4BX
          claim_id: c_wgfSUbw4MAg2DN25i6Hcb5
          source_id: s_rthLjWyt6aPyKHFsejFoGT
          stance: supports
          locator: CBDB:304149
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_fAIMBC1grvzG0gatA6XXbn
        subject_person_id: p_EL1xAzh69eBckvCoFLRC2M
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_V5Z6bC9P1YiqepVeP78NQA
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZRk4tkubFIvKPn23O0HmtZ
          claim_id: c_fAIMBC1grvzG0gatA6XXbn
          source_id: s_rthLjWyt6aPyKHFsejFoGT
          stance: supports
          locator: 嘉靖二十年進士登科錄:一卷，第三甲第一百零六名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_V5Z6bC9P1YiqepVeP78NQA
        status: active
        display_name: 王惟中
        merged_into_person_id: null
    - claim:
        id: c_TTdL8TxE4HMzBnzQ_6nSKA
        subject_person_id: p_EL1xAzh69eBckvCoFLRC2M
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_L6Nb2tacxbY42RoxdDaS26
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8KOg2IJBuc1ef5eAwYO0g-
          claim_id: c_TTdL8TxE4HMzBnzQ_6nSKA
          source_id: s_rKdRWoEiYybUdEygdo06bn
          stance: supports
          locator: CBDB：兄弟 王惟中（203400）之父／母 王紀
          quotation: null
          interpretation_note: 由兄弟关系推断：王叔中 与 王惟中 为同胞（CBDB 记「弟」），王惟中 之父／母即 王叔中 之父／母。
          source:
            id: s_rKdRWoEiYybUdEygdo06bn
            source_type: api_record
            title: 中国历代人物传记资料库：王叔中（CBDB 304153）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304153&o=json
            external_identifier: CBDB:304153
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_L6Nb2tacxbY42RoxdDaS26
        status: active
        display_name: 王叔中
        merged_into_person_id: null
    - claim:
        id: c_2M7cZfd0GMh8LhxG-BO88d
        subject_person_id: p_EL1xAzh69eBckvCoFLRC2M
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_LzKzBUerAfGDhBNRUiQn4j
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_W2lPoffNrWwv3rH2EpR-CY
          claim_id: c_2M7cZfd0GMh8LhxG-BO88d
          source_id: s_KLhwm8XfdDwkQlAwnuzyCd
          stance: supports
          locator: CBDB：兄弟 王惟中（203400）之父／母 王紀
          quotation: null
          interpretation_note: 由兄弟关系推断：王愷中 与 王惟中 为同胞（CBDB 记「兄」），王惟中 之父／母即 王愷中 之父／母。
          source:
            id: s_KLhwm8XfdDwkQlAwnuzyCd
            source_type: api_record
            title: 中国历代人物传记资料库：王愷中（CBDB 304158）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304158&o=json
            external_identifier: CBDB:304158
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_LzKzBUerAfGDhBNRUiQn4j
        status: active
        display_name: 王愷中
        merged_into_person_id: null
    - claim:
        id: c_nkf0HKb9HIvvGl5Pj8j-Oj
        subject_person_id: p_EL1xAzh69eBckvCoFLRC2M
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_fFe8329FzkfXNjioB6seLD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Vh8DlxoaJNOTpNH7JGcM_I
          claim_id: c_nkf0HKb9HIvvGl5Pj8j-Oj
          source_id: s_UnpKknb-kHfN3BumWb204i
          stance: supports
          locator: CBDB：兄弟 王惟中（203400）之父／母 王紀
          quotation: null
          interpretation_note: 由兄弟关系推断：王性中 与 王惟中 为同胞（CBDB 记「兄」），王惟中 之父／母即 王性中 之父／母。
          source:
            id: s_UnpKknb-kHfN3BumWb204i
            source_type: api_record
            title: 中国历代人物传记资料库：王性中（CBDB 304156）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304156&o=json
            external_identifier: CBDB:304156
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_fFe8329FzkfXNjioB6seLD
        status: active
        display_name: 王性中
        merged_into_person_id: null
    - claim:
        id: c_m-n0oSJay4wFy43tz0Pqrg
        subject_person_id: p_EL1xAzh69eBckvCoFLRC2M
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_fHC6Woi4nxEQwtu2HA5Dcc
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uCIuwCfns5msuSJSW2YM3h
          claim_id: c_m-n0oSJay4wFy43tz0Pqrg
          source_id: s_lAbpmb1pM17sdLf6QWrvJu
          stance: supports
          locator: CBDB：兄弟 王惟中（203400）之父／母 王紀
          quotation: null
          interpretation_note: 由兄弟关系推断：王慎中 与 王惟中 为同胞（CBDB 记「弟」），王惟中 之父／母即 王慎中 之父／母。
          source:
            id: s_lAbpmb1pM17sdLf6QWrvJu
            source_type: api_record
            title: 中国历代人物传记资料库：王慎中（CBDB 34700）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=34700&o=json
            external_identifier: CBDB:34700
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_fHC6Woi4nxEQwtu2HA5Dcc
        status: active
        display_name: 王慎中
        merged_into_person_id: null
    - claim:
        id: c_JC9s1cYqpKgwd57NkyXV0A
        subject_person_id: p_EL1xAzh69eBckvCoFLRC2M
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_gKNJ2G66J5Tx6NjFf4uFH2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_W23Yu-FG3U6GcDhTS07iKb
          claim_id: c_JC9s1cYqpKgwd57NkyXV0A
          source_id: s_Jp6r3biKglVXW7JMskC71l
          stance: supports
          locator: CBDB：兄弟 王惟中（203400）之父／母 王紀
          quotation: null
          interpretation_note: 由兄弟关系推断：王孟中 与 王惟中 为同胞（CBDB 记「弟」），王惟中 之父／母即 王孟中 之父／母。
          source:
            id: s_Jp6r3biKglVXW7JMskC71l
            source_type: api_record
            title: 中国历代人物传记资料库：王孟中（CBDB 304152）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304152&o=json
            external_identifier: CBDB:304152
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_gKNJ2G66J5Tx6NjFf4uFH2
        status: active
        display_name: 王孟中
        merged_into_person_id: null
    - claim:
        id: c_vBQsfY0QduKWLXQuQ5Sk2f
        subject_person_id: p_EL1xAzh69eBckvCoFLRC2M
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_r6H9zhBwHH7pzeWxF3frCR
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DuNyGQhr3En_RxtFr7WMoh
          claim_id: c_vBQsfY0QduKWLXQuQ5Sk2f
          source_id: s__W-eGFZ0N8GcXxYOxmVeCH
          stance: supports
          locator: CBDB：兄弟 王惟中（203400）之父／母 王紀
          quotation: null
          interpretation_note: 由兄弟关系推断：王恆中 与 王惟中 为同胞（CBDB 记「弟」），王惟中 之父／母即 王恆中 之父／母。
          source:
            id: s__W-eGFZ0N8GcXxYOxmVeCH
            source_type: api_record
            title: 中国历代人物传记资料库：王恆中（CBDB 304154）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304154&o=json
            external_identifier: CBDB:304154
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_r6H9zhBwHH7pzeWxF3frCR
        status: active
        display_name: 王恆中
        merged_into_person_id: null
    - claim:
        id: c_llrp7wosJvH1ck8mJytnSY
        subject_person_id: p_EL1xAzh69eBckvCoFLRC2M
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_uvGecG8gEMhVWD61MN1JQz
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qteelBXt5bpNofel7OhjAx
          claim_id: c_llrp7wosJvH1ck8mJytnSY
          source_id: s_7jmiTBMNFJdaiVJMgkKggn
          stance: supports
          locator: CBDB：兄弟 王惟中（203400）之父／母 王紀
          quotation: null
          interpretation_note: 由兄弟关系推断：王敬中 与 王惟中 为同胞（CBDB 记「兄」），王惟中 之父／母即 王敬中 之父／母。
          source:
            id: s_7jmiTBMNFJdaiVJMgkKggn
            source_type: api_record
            title: 中国历代人物传记资料库：王敬中（CBDB 304157）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304157&o=json
            external_identifier: CBDB:304157
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_uvGecG8gEMhVWD61MN1JQz
        status: active
        display_name: 王敬中
        merged_into_person_id: null
    - claim:
        id: c_VGbM0TNsI8Cxn5Il4Hgqgz
        subject_person_id: p_EL1xAzh69eBckvCoFLRC2M
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_y8e2xqPCMkfRYEcZvTsyDs
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cTtPbOGAhDx0BeZo7BUhZk
          claim_id: c_VGbM0TNsI8Cxn5Il4Hgqgz
          source_id: s_GzcrEBIihp2xVVeNUV9fJj
          stance: supports
          locator: CBDB：兄弟 王惟中（203400）之父／母 王紀
          quotation: null
          interpretation_note: 由兄弟关系推断：王致中 与 王惟中 为同胞（CBDB 记「兄」），王惟中 之父／母即 王致中 之父／母。
          source:
            id: s_GzcrEBIihp2xVVeNUV9fJj
            source_type: api_record
            title: 中国历代人物传记资料库：王致中（CBDB 304160）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304160&o=json
            external_identifier: CBDB:304160
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_y8e2xqPCMkfRYEcZvTsyDs
        status: active
        display_name: 王致中
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王紀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王紀 | accepted |
| bio.summary | 王紀，明人物。嘉靖二十年進士，籍贯晉江，曾任吏部員外郎。（中国历代人物传记资料库 CBDB 304149） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_V5Z6bC9P1YiqepVeP78NQA | 王惟中 | accepted |
| children | p_L6Nb2tacxbY42RoxdDaS26 | 王叔中 | accepted |
| children | p_LzKzBUerAfGDhBNRUiQn4j | 王愷中 | accepted |
| children | p_fFe8329FzkfXNjioB6seLD | 王性中 | accepted |
| children | p_fHC6Woi4nxEQwtu2HA5Dcc | 王慎中 | accepted |
| children | p_gKNJ2G66J5Tx6NjFf4uFH2 | 王孟中 | accepted |
| children | p_r6H9zhBwHH7pzeWxF3frCR | 王恆中 | accepted |
| children | p_uvGecG8gEMhVWD61MN1JQz | 王敬中 | accepted |
| children | p_y8e2xqPCMkfRYEcZvTsyDs | 王致中 | accepted |

## 外部来源

- [中国历代人物传记资料库：王恆中（CBDB 304154）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304154&o=json)
- [中国历代人物传记资料库：王紀（CBDB 304149）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304149&o=json)
- [中国历代人物传记资料库：王敬中（CBDB 304157）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304157&o=json)
- [中国历代人物传记资料库：王愷中（CBDB 304158）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304158&o=json)
- [中国历代人物传记资料库：王孟中（CBDB 304152）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304152&o=json)
- [中国历代人物传记资料库：王慎中（CBDB 34700）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=34700&o=json)
- [中国历代人物传记资料库：王叔中（CBDB 304153）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304153&o=json)
- [中国历代人物传记资料库：王性中（CBDB 304156）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304156&o=json)
- [中国历代人物传记资料库：王致中（CBDB 304160）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304160&o=json)
