---
schema: wang-person/v1
id: p_V5Z6bC9P1YiqepVeP78NQA
status: active
merged_into: null
display_name: 王惟中
revision: 12
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KpULz4gaLcgxwBobfADSec
        subject_person_id: p_V5Z6bC9P1YiqepVeP78NQA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王惟中
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PdRM4FZnf6eHBMaAKp51na
          claim_id: c_KpULz4gaLcgxwBobfADSec
          source_id: s_CSGknEjdBsBVTNawoU8C1V
          stance: supports
          locator: CBDB:203400
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（203400）
          source: &a1
            id: s_CSGknEjdBsBVTNawoU8C1V
            source_type: api_record
            title: 中国历代人物传记资料库：王惟中（CBDB 203400）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203400&o=json
            external_identifier: CBDB:203400
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.784Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_GbB21KdXtVSNauoTT9a9gr
        subject_person_id: p_V5Z6bC9P1YiqepVeP78NQA
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1511年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4oipRHyq3TGFH2BNNupZKh
          claim_id: c_GbB21KdXtVSNauoTT9a9gr
          source_id: s_CSGknEjdBsBVTNawoU8C1V
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
        id: c_54BwuK8ToLjyHe6SXa9CFP
        subject_person_id: p_V5Z6bC9P1YiqepVeP78NQA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王惟中（生于1511年），明人物。嘉靖二十年進士，籍贯晉江，入仕進士。（中国历代人物传记资料库 CBDB 203400）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_lBz2OmSeLYxeiZ9fyWU7WT
          claim_id: c_54BwuK8ToLjyHe6SXa9CFP
          source_id: s_CSGknEjdBsBVTNawoU8C1V
          stance: supports
          locator: CBDB:203400
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
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
          source:
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
      object_person:
        id: p_EL1xAzh69eBckvCoFLRC2M
        status: active
        display_name: 王紀
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_rpfCSFqHRlsmxDZmpzQyj6
        subject_person_id: p_2xVygTqZoaWJZPr3k3KVru
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_V5Z6bC9P1YiqepVeP78NQA
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uZ4pZvj3ZF3zGc9SL1t6Jf
          claim_id: c_rpfCSFqHRlsmxDZmpzQyj6
          source_id: s_XD6LofnkHt84jKnYi2PXmq
          stance: supports
          locator: 嘉靖二十年進士登科錄:一卷，第三甲第一百零六名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_XD6LofnkHt84jKnYi2PXmq
            source_type: api_record
            title: 中国历代人物传记资料库：王寰（CBDB 304147）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304147&o=json
            external_identifier: CBDB:304147
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.702Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_2xVygTqZoaWJZPr3k3KVru
        status: active
        display_name: 王寰
        merged_into_person_id: null
    - claim:
        id: c_fSpcvdKjWpZ3bv2aCune6j
        subject_person_id: p_dhViQGfAS7Kif9LatNZWPh
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_V5Z6bC9P1YiqepVeP78NQA
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jGYWVHHdNg7POwwmA82xQ5
          claim_id: c_fSpcvdKjWpZ3bv2aCune6j
          source_id: s_DFGGuZ3eoThNFGBmCAx152
          stance: supports
          locator: 嘉靖二十年進士登科錄:一卷，第三甲第一百零六名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_DFGGuZ3eoThNFGBmCAx152
            source_type: api_record
            title: 中国历代人物传记资料库：王瑞昌（CBDB 304146）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304146&o=json
            external_identifier: CBDB:304146
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:04.487Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_dhViQGfAS7Kif9LatNZWPh
        status: active
        display_name: 王瑞昌
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_wuV3HXRuNRRmz0Hzmi7oqZ
        subject_person_id: p_L6Nb2tacxbY42RoxdDaS26
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_V5Z6bC9P1YiqepVeP78NQA
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NKeJJujbxQY28craRxvej-
          claim_id: c_wuV3HXRuNRRmz0Hzmi7oqZ
          source_id: s_rKdRWoEiYybUdEygdo06bn
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 203400 王惟中）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_SRL6mLM7b-5H-V4FjsvTr-
        subject_person_id: p_LzKzBUerAfGDhBNRUiQn4j
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_V5Z6bC9P1YiqepVeP78NQA
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_g48j2TFddgkvaBO7djO2XS
          claim_id: c_SRL6mLM7b-5H-V4FjsvTr-
          source_id: s_KLhwm8XfdDwkQlAwnuzyCd
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 203400 王惟中）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_gY8it7iQVSmRDgihUHmeWU
        subject_person_id: p_V5Z6bC9P1YiqepVeP78NQA
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_fFe8329FzkfXNjioB6seLD
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xYb08hSYwOaUa5vopVwA9G
          claim_id: c_gY8it7iQVSmRDgihUHmeWU
          source_id: s_UnpKknb-kHfN3BumWb204i
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 203400 王惟中）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_vozZ2AlNkxRQsPprH0DFDw
        subject_person_id: p_V5Z6bC9P1YiqepVeP78NQA
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_fHC6Woi4nxEQwtu2HA5Dcc
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UxP_WLxvLPKCVwIvfOVk9B
          claim_id: c_vozZ2AlNkxRQsPprH0DFDw
          source_id: s_lAbpmb1pM17sdLf6QWrvJu
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 203400 王惟中）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_RTBkM_PU135QsiPuDlzGfo
        subject_person_id: p_V5Z6bC9P1YiqepVeP78NQA
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_gKNJ2G66J5Tx6NjFf4uFH2
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZvbkbRud8SP97uShE8_z4k
          claim_id: c_RTBkM_PU135QsiPuDlzGfo
          source_id: s_Jp6r3biKglVXW7JMskC71l
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 203400 王惟中）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_4sOh_dp9MlwrKrHFOwyEtg
        subject_person_id: p_V5Z6bC9P1YiqepVeP78NQA
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_r6H9zhBwHH7pzeWxF3frCR
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FqfSboUIPuZHqVeAAbQMZ8
          claim_id: c_4sOh_dp9MlwrKrHFOwyEtg
          source_id: s__W-eGFZ0N8GcXxYOxmVeCH
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 203400 王惟中）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_FJSSH_OvOI1yPlpz7lFpMN
        subject_person_id: p_V5Z6bC9P1YiqepVeP78NQA
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_uvGecG8gEMhVWD61MN1JQz
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ovsa8lginq0q1W1DTfHATt
          claim_id: c_FJSSH_OvOI1yPlpz7lFpMN
          source_id: s_7jmiTBMNFJdaiVJMgkKggn
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 203400 王惟中）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_qhUZNmRKGIHkEVtUEeormW
        subject_person_id: p_V5Z6bC9P1YiqepVeP78NQA
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_y8e2xqPCMkfRYEcZvTsyDs
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xAJIWdzHVgCATkAA20wDWd
          claim_id: c_qhUZNmRKGIHkEVtUEeormW
          source_id: s_GzcrEBIihp2xVVeNUV9fJj
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 203400 王惟中）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
---

# 王惟中

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王惟中 | accepted |
| birth.date | 1511年 | accepted |
| bio.summary | 王惟中（生于1511年），明人物。嘉靖二十年進士，籍贯晉江，入仕進士。（中国历代人物传记资料库 CBDB 203400） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_EL1xAzh69eBckvCoFLRC2M | 王紀 | accepted |
| ancestors | p_2xVygTqZoaWJZPr3k3KVru | 王寰 | accepted |
| ancestors | p_dhViQGfAS7Kif9LatNZWPh | 王瑞昌 | accepted |
| other | p_L6Nb2tacxbY42RoxdDaS26 | 王叔中 | accepted |
| other | p_LzKzBUerAfGDhBNRUiQn4j | 王愷中 | accepted |
| other | p_fFe8329FzkfXNjioB6seLD | 王性中 | accepted |
| other | p_fHC6Woi4nxEQwtu2HA5Dcc | 王慎中 | accepted |
| other | p_gKNJ2G66J5Tx6NjFf4uFH2 | 王孟中 | accepted |
| other | p_r6H9zhBwHH7pzeWxF3frCR | 王恆中 | accepted |
| other | p_uvGecG8gEMhVWD61MN1JQz | 王敬中 | accepted |
| other | p_y8e2xqPCMkfRYEcZvTsyDs | 王致中 | accepted |

## 外部来源

- [中国历代人物传记资料库：王恆中（CBDB 304154）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304154&o=json)
- [中国历代人物传记资料库：王寰（CBDB 304147）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304147&o=json)
- [中国历代人物传记资料库：王紀（CBDB 304149）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304149&o=json)
- [中国历代人物传记资料库：王敬中（CBDB 304157）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304157&o=json)
- [中国历代人物传记资料库：王愷中（CBDB 304158）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304158&o=json)
- [中国历代人物传记资料库：王孟中（CBDB 304152）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304152&o=json)
- [中国历代人物传记资料库：王瑞昌（CBDB 304146）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304146&o=json)
- [中国历代人物传记资料库：王慎中（CBDB 34700）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=34700&o=json)
- [中国历代人物传记资料库：王叔中（CBDB 304153）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304153&o=json)
- [中国历代人物传记资料库：王惟中（CBDB 203400）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203400&o=json)
- [中国历代人物传记资料库：王性中（CBDB 304156）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304156&o=json)
- [中国历代人物传记资料库：王致中（CBDB 304160）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304160&o=json)
