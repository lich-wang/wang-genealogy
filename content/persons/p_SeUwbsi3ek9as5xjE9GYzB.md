---
schema: wang-person/v1
id: p_SeUwbsi3ek9as5xjE9GYzB
status: active
merged_into: null
display_name: 王敏道
revision: 12
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_UPcAxgBZsGFWjVqV5WZfVf
        subject_person_id: p_SeUwbsi3ek9as5xjE9GYzB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敏道
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_o5seQViG42LkKmhArKvrHx
          claim_id: c_UPcAxgBZsGFWjVqV5WZfVf
          source_id: s_6kwmYf1L3ZceQWBXBcMTf8
          stance: supports
          locator: CBDB:287084
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（287084）
          source: &a1
            id: s_6kwmYf1L3ZceQWBXBcMTf8
            source_type: api_record
            title: 中国历代人物传记资料库：王敏道（CBDB 287084）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287084&o=json
            external_identifier: CBDB:287084
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.250Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LS5mnJ8McYfs8xvAj242Lt
        subject_person_id: p_SeUwbsi3ek9as5xjE9GYzB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敏道，明人物。永樂十年進士，籍贯南康。（中国历代人物传记资料库 CBDB 287084）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ZBYNRJvQ-n1N4D76-T7NVw
          claim_id: c_LS5mnJ8McYfs8xvAj242Lt
          source_id: s_6kwmYf1L3ZceQWBXBcMTf8
          stance: supports
          locator: CBDB:287084
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_gzXtf57vMFWevysZ8_7Iyw
        subject_person_id: p_SeUwbsi3ek9as5xjE9GYzB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_s2J6v6Z1BCr8cEtWSejd2v
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UDI_bH0f9RYZ6GuF-d0dMF
          claim_id: c_gzXtf57vMFWevysZ8_7Iyw
          source_id: s_6kwmYf1L3ZceQWBXBcMTf8
          stance: supports
          locator: 永樂十年進士登科錄:一卷，第三甲第三十九名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_s2J6v6Z1BCr8cEtWSejd2v
        status: active
        display_name: 王時習
        merged_into_person_id: null
    - claim:
        id: c_nttW_IFqubde3Rfryt1XCd
        subject_person_id: p_SeUwbsi3ek9as5xjE9GYzB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3jj1QTWJPD4wDNKMDdPvcK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QtbA3SVZTb0RFieQVHJzcl
          claim_id: c_nttW_IFqubde3Rfryt1XCd
          source_id: s_2bSvugRNfKKCIz566ocSl4
          stance: supports
          locator: CBDB：兄弟 王時習（202373）之父／母 王敏道
          quotation: null
          interpretation_note: 由兄弟关系推断：王時俊 与 王時習 为同胞（CBDB 记「兄」），王時習 之父／母即 王時俊 之父／母。
          source:
            id: s_2bSvugRNfKKCIz566ocSl4
            source_type: api_record
            title: 中国历代人物传记资料库：王時俊（CBDB 287092）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287092&o=json
            external_identifier: CBDB:287092
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_3jj1QTWJPD4wDNKMDdPvcK
        status: active
        display_name: 王時俊
        merged_into_person_id: null
    - claim:
        id: c_ncSSaxbgnzlUR8QS_EEbo5
        subject_person_id: p_SeUwbsi3ek9as5xjE9GYzB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_BXAv45PCN4HiV4iu43Sso3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RsBwTn37kP_Bk6t5XgREz2
          claim_id: c_ncSSaxbgnzlUR8QS_EEbo5
          source_id: s_mNUzcTxu3y_CbRU3rE-Xhx
          stance: supports
          locator: CBDB：兄弟 王時習（202373）之父／母 王敏道
          quotation: null
          interpretation_note: 由兄弟关系推断：王時方 与 王時習 为同胞（CBDB 记「兄」），王時習 之父／母即 王時方 之父／母。
          source:
            id: s_mNUzcTxu3y_CbRU3rE-Xhx
            source_type: api_record
            title: 中国历代人物传记资料库：王時方（CBDB 287094）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287094&o=json
            external_identifier: CBDB:287094
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_BXAv45PCN4HiV4iu43Sso3
        status: active
        display_name: 王時方
        merged_into_person_id: null
    - claim:
        id: c_pxyl9cRxVnMFmd6jp9GKlG
        subject_person_id: p_SeUwbsi3ek9as5xjE9GYzB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DbQa1LeKcZQQ96f1WNkK2a
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RUl1ioe_93AxIXILp_WKNo
          claim_id: c_pxyl9cRxVnMFmd6jp9GKlG
          source_id: s_TZuCkxn47Rs3Owmc3LELr3
          stance: supports
          locator: CBDB：兄弟 王時習（202373）之父／母 王敏道
          quotation: null
          interpretation_note: 由兄弟关系推断：王時某 与 王時習 为同胞（CBDB 记「兄」），王時習 之父／母即 王時某 之父／母。
          source:
            id: s_TZuCkxn47Rs3Owmc3LELr3
            source_type: api_record
            title: 中国历代人物传记资料库：王時某（CBDB 287093）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287093&o=json
            external_identifier: CBDB:287093
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_DbQa1LeKcZQQ96f1WNkK2a
        status: active
        display_name: 王時某
        merged_into_person_id: null
    - claim:
        id: c_sz3m4eSaqHe4z8Q0ShoDdF
        subject_person_id: p_SeUwbsi3ek9as5xjE9GYzB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_EjfvNZV4MZXzkEhT5KVGi1
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5xNtxSz79hb8kmS_KY-X1w
          claim_id: c_sz3m4eSaqHe4z8Q0ShoDdF
          source_id: s_ScEW4IWoxjBVOgYGKv4EyZ
          stance: supports
          locator: CBDB：兄弟 王時習（202373）之父／母 王敏道
          quotation: null
          interpretation_note: 由兄弟关系推断：王時昶 与 王時習 为同胞（CBDB 记「兄」），王時習 之父／母即 王時昶 之父／母。
          source:
            id: s_ScEW4IWoxjBVOgYGKv4EyZ
            source_type: api_record
            title: 中国历代人物传记资料库：王時昶（CBDB 287098）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287098&o=json
            external_identifier: CBDB:287098
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_EjfvNZV4MZXzkEhT5KVGi1
        status: active
        display_name: 王時昶
        merged_into_person_id: null
    - claim:
        id: c_K6i_aWsgVyBSuoZtccTR0M
        subject_person_id: p_SeUwbsi3ek9as5xjE9GYzB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Lmqnm8oPSNLn94tawP91fT
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_blpSfDXnRrw5dhF7ctQYAt
          claim_id: c_K6i_aWsgVyBSuoZtccTR0M
          source_id: s_r8DJUtIWzwD1PtSzDc3vBl
          stance: supports
          locator: CBDB：兄弟 王時習（202373）之父／母 王敏道
          quotation: null
          interpretation_note: 由兄弟关系推断：王時昌 与 王時習 为同胞（CBDB 记「兄」），王時習 之父／母即 王時昌 之父／母。
          source:
            id: s_r8DJUtIWzwD1PtSzDc3vBl
            source_type: api_record
            title: 中国历代人物传记资料库：王時昌（CBDB 287095）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287095&o=json
            external_identifier: CBDB:287095
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Lmqnm8oPSNLn94tawP91fT
        status: active
        display_name: 王時昌
        merged_into_person_id: null
    - claim:
        id: c_hriYGfi2PJGezZ5DrJMmYS
        subject_person_id: p_SeUwbsi3ek9as5xjE9GYzB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_MB6gEJBWL8UhCatFpRHAQw
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jV0_QqdefG3h00riZ2j38b
          claim_id: c_hriYGfi2PJGezZ5DrJMmYS
          source_id: s_SbqRPndsVdzoyUNVhYNUcE
          stance: supports
          locator: CBDB：兄弟 王時習（202373）之父／母 王敏道
          quotation: null
          interpretation_note: 由兄弟关系推断：王時昱 与 王時習 为同胞（CBDB 记「兄」），王時習 之父／母即 王時昱 之父／母。
          source:
            id: s_SbqRPndsVdzoyUNVhYNUcE
            source_type: api_record
            title: 中国历代人物传记资料库：王時昱（CBDB 287091）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287091&o=json
            external_identifier: CBDB:287091
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_MB6gEJBWL8UhCatFpRHAQw
        status: active
        display_name: 王時昱
        merged_into_person_id: null
    - claim:
        id: c_gjRoWBMhubUp1Y7503OBW1
        subject_person_id: p_SeUwbsi3ek9as5xjE9GYzB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Tt5rjzPc6tmNvVadja1GQ6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_klnMk67ZBBP3ESiHlSr75o
          claim_id: c_gjRoWBMhubUp1Y7503OBW1
          source_id: s_tZW9YMmWjUvnrde_0vTG0I
          stance: supports
          locator: CBDB：兄弟 王時習（202373）之父／母 王敏道
          quotation: null
          interpretation_note: 由兄弟关系推断：王時亨 与 王時習 为同胞（CBDB 记「兄」），王時習 之父／母即 王時亨 之父／母。
          source:
            id: s_tZW9YMmWjUvnrde_0vTG0I
            source_type: api_record
            title: 中国历代人物传记资料库：王時亨（CBDB 287089）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287089&o=json
            external_identifier: CBDB:287089
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Tt5rjzPc6tmNvVadja1GQ6
        status: active
        display_name: 王時亨
        merged_into_person_id: null
    - claim:
        id: c_UqoxsVYbyvcLfpgYws0qBW
        subject_person_id: p_SeUwbsi3ek9as5xjE9GYzB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_gxdvmoLmnhP9FqKQCCSChB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_onIL-vZkrlaD4BjkirXsvX
          claim_id: c_UqoxsVYbyvcLfpgYws0qBW
          source_id: s_qAgkAR1039SPNW8AOd4dLf
          stance: supports
          locator: CBDB：兄弟 王時習（202373）之父／母 王敏道
          quotation: null
          interpretation_note: 由兄弟关系推断：王時用 与 王時習 为同胞（CBDB 记「兄」），王時習 之父／母即 王時用 之父／母。
          source:
            id: s_qAgkAR1039SPNW8AOd4dLf
            source_type: api_record
            title: 中国历代人物传记资料库：王時用（CBDB 287088）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287088&o=json
            external_identifier: CBDB:287088
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_gxdvmoLmnhP9FqKQCCSChB
        status: active
        display_name: 王時用
        merged_into_person_id: null
    - claim:
        id: c_cibb7o9jDvKwKKW9QgQal7
        subject_person_id: p_SeUwbsi3ek9as5xjE9GYzB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_sj2b2LsFFAKHhMYVpG5DqE
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nst-MG4DIfaRJRLe-aK4GE
          claim_id: c_cibb7o9jDvKwKKW9QgQal7
          source_id: s_0DHYBfreyc4kQJ5PgG7OC7
          stance: supports
          locator: CBDB：兄弟 王時習（202373）之父／母 王敏道
          quotation: null
          interpretation_note: 由兄弟关系推断：王時彥 与 王時習 为同胞（CBDB 记「兄」），王時習 之父／母即 王時彥 之父／母。
          source:
            id: s_0DHYBfreyc4kQJ5PgG7OC7
            source_type: api_record
            title: 中国历代人物传记资料库：王時彥（CBDB 287099）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287099&o=json
            external_identifier: CBDB:287099
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_sj2b2LsFFAKHhMYVpG5DqE
        status: active
        display_name: 王時彥
        merged_into_person_id: null
    - claim:
        id: c_gbDZN6-fUj3FfpZYfsWSb_
        subject_person_id: p_SeUwbsi3ek9as5xjE9GYzB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_y5BraMjSLkJg7wJzUqfvAg
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Rq4S80os-3HRg-6m95Z0KV
          claim_id: c_gbDZN6-fUj3FfpZYfsWSb_
          source_id: s_4ouFMZZAdas_VNmoqmIt1b
          stance: supports
          locator: CBDB：兄弟 王時習（202373）之父／母 王敏道
          quotation: null
          interpretation_note: 由兄弟关系推断：王時閏 与 王時習 为同胞（CBDB 记「兄」），王時習 之父／母即 王時閏 之父／母。
          source:
            id: s_4ouFMZZAdas_VNmoqmIt1b
            source_type: api_record
            title: 中国历代人物传记资料库：王時閏（CBDB 287090）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287090&o=json
            external_identifier: CBDB:287090
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_y5BraMjSLkJg7wJzUqfvAg
        status: active
        display_name: 王時閏
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王敏道

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王敏道 | accepted |
| bio.summary | 王敏道，明人物。永樂十年進士，籍贯南康。（中国历代人物传记资料库 CBDB 287084） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_s2J6v6Z1BCr8cEtWSejd2v | 王時習 | accepted |
| children | p_3jj1QTWJPD4wDNKMDdPvcK | 王時俊 | accepted |
| children | p_BXAv45PCN4HiV4iu43Sso3 | 王時方 | accepted |
| children | p_DbQa1LeKcZQQ96f1WNkK2a | 王時某 | accepted |
| children | p_EjfvNZV4MZXzkEhT5KVGi1 | 王時昶 | accepted |
| children | p_Lmqnm8oPSNLn94tawP91fT | 王時昌 | accepted |
| children | p_MB6gEJBWL8UhCatFpRHAQw | 王時昱 | accepted |
| children | p_Tt5rjzPc6tmNvVadja1GQ6 | 王時亨 | accepted |
| children | p_gxdvmoLmnhP9FqKQCCSChB | 王時用 | accepted |
| children | p_sj2b2LsFFAKHhMYVpG5DqE | 王時彥 | accepted |
| children | p_y5BraMjSLkJg7wJzUqfvAg | 王時閏 | accepted |

## 外部来源

- [中国历代人物传记资料库：王敏道（CBDB 287084）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287084&o=json)
- [中国历代人物传记资料库：王時昌（CBDB 287095）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287095&o=json)
- [中国历代人物传记资料库：王時昶（CBDB 287098）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287098&o=json)
- [中国历代人物传记资料库：王時方（CBDB 287094）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287094&o=json)
- [中国历代人物传记资料库：王時亨（CBDB 287089）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287089&o=json)
- [中国历代人物传记资料库：王時俊（CBDB 287092）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287092&o=json)
- [中国历代人物传记资料库：王時某（CBDB 287093）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287093&o=json)
- [中国历代人物传记资料库：王時閏（CBDB 287090）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287090&o=json)
- [中国历代人物传记资料库：王時彥（CBDB 287099）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287099&o=json)
- [中国历代人物传记资料库：王時用（CBDB 287088）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287088&o=json)
- [中国历代人物传记资料库：王時昱（CBDB 287091）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287091&o=json)
