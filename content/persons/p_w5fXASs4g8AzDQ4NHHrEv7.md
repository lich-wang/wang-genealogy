---
schema: wang-person/v1
id: p_w5fXASs4g8AzDQ4NHHrEv7
status: active
merged_into: null
display_name: 王湧
revision: 12
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_iBuaCGSW58MtS9mrh4Ln23
        subject_person_id: p_w5fXASs4g8AzDQ4NHHrEv7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王湧
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_t6R3nLTmfCNSC515KkBSDN
          claim_id: c_iBuaCGSW58MtS9mrh4Ln23
          source_id: s_fFP76qM8mRHfLkqmZSpu9Q
          stance: supports
          locator: CBDB:213978
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（213978）
          source: &a1
            id: s_fFP76qM8mRHfLkqmZSpu9Q
            source_type: api_record
            title: 中国历代人物传记资料库：王湧（CBDB 213978）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213978&o=json
            external_identifier: CBDB:213978
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.133Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4qGLxEHDH8xay5bAPDt7P2
        subject_person_id: p_w5fXASs4g8AzDQ4NHHrEv7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王湧，明人物。萬曆二年進士，籍贯南城，入仕監生。（中国历代人物传记资料库 CBDB 213978）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_8EUG7nTUELoaUUHg2XRFK0
          claim_id: c_4qGLxEHDH8xay5bAPDt7P2
          source_id: s_fFP76qM8mRHfLkqmZSpu9Q
          stance: supports
          locator: CBDB:213978
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_wyNqnoYbBIaqm4DY-IcgRb
        subject_person_id: p_w5fXASs4g8AzDQ4NHHrEv7
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_HfLk9ptSCZD1pXUYCky88S
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GRl7uUuBQCryXGHOEaPExu
          claim_id: c_wyNqnoYbBIaqm4DY-IcgRb
          source_id: s_fFP76qM8mRHfLkqmZSpu9Q
          stance: supports
          locator: 萬曆二年進士登科錄:一卷，第三甲第八十四名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_HfLk9ptSCZD1pXUYCky88S
        status: active
        display_name: 王一言
        merged_into_person_id: null
    - claim:
        id: c_ZkDGSUu-7XCkG1-xSBgsAP
        subject_person_id: p_w5fXASs4g8AzDQ4NHHrEv7
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4YukAyrWLgRehW7Qz3TA7Z
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-tIIrP-GXukmOhAfhjDhW9
          claim_id: c_ZkDGSUu-7XCkG1-xSBgsAP
          source_id: s_y98RtRXywai9hI9ZkoFVZb
          stance: supports
          locator: CBDB：兄弟 王一言（206148）之父／母 王湧
          quotation: null
          interpretation_note: 由兄弟关系推断：王一龍 与 王一言 为同胞（CBDB 记「兄」），王一言 之父／母即 王一龍 之父／母。
          source:
            id: s_y98RtRXywai9hI9ZkoFVZb
            source_type: api_record
            title: 中国历代人物传记资料库：王一龍（CBDB 213985）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213985&o=json
            external_identifier: CBDB:213985
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_4YukAyrWLgRehW7Qz3TA7Z
        status: active
        display_name: 王一龍
        merged_into_person_id: null
    - claim:
        id: c_q7kMarYpnv80JuyBBPe5rL
        subject_person_id: p_w5fXASs4g8AzDQ4NHHrEv7
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4vHM6gNZTvxZM2XR9bP4ac
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LCDmJyabt9ozeJ1dsA8JXx
          claim_id: c_q7kMarYpnv80JuyBBPe5rL
          source_id: s_wXmxvYxHORYZnLLLD1FM6D
          stance: supports
          locator: CBDB：兄弟 王一言（206148）之父／母 王湧
          quotation: null
          interpretation_note: 由兄弟关系推断：王一經 与 王一言 为同胞（CBDB 记「兄」），王一言 之父／母即 王一經 之父／母。
          source:
            id: s_wXmxvYxHORYZnLLLD1FM6D
            source_type: api_record
            title: 中国历代人物传记资料库：王一經（CBDB 213990）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213990&o=json
            external_identifier: CBDB:213990
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_4vHM6gNZTvxZM2XR9bP4ac
        status: active
        display_name: 王一經
        merged_into_person_id: null
    - claim:
        id: c_p4hvEc8f3Ru8ih2XMugAx7
        subject_person_id: p_w5fXASs4g8AzDQ4NHHrEv7
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8yA38mLKkSBSoPttddDF9L
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GOPB2Ba7WTDxfdlxdMddUD
          claim_id: c_p4hvEc8f3Ru8ih2XMugAx7
          source_id: s_6BerxPZX6yj-4Z8XuEAv1c
          stance: supports
          locator: CBDB：兄弟 王一言（206148）之父／母 王湧
          quotation: null
          interpretation_note: 由兄弟关系推断：王一舉 与 王一言 为同胞（CBDB 记「兄」），王一言 之父／母即 王一舉 之父／母。
          source:
            id: s_6BerxPZX6yj-4Z8XuEAv1c
            source_type: api_record
            title: 中国历代人物传记资料库：王一舉（CBDB 213986）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213986&o=json
            external_identifier: CBDB:213986
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_8yA38mLKkSBSoPttddDF9L
        status: active
        display_name: 王一舉
        merged_into_person_id: null
    - claim:
        id: c_rd9XDu1hY4vV2xOzCA7RJI
        subject_person_id: p_w5fXASs4g8AzDQ4NHHrEv7
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_9kssxifapNve63ckwVF8c1
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xarmDZZq4TeRqb_7hUZ4g4
          claim_id: c_rd9XDu1hY4vV2xOzCA7RJI
          source_id: s_42cgDSd_6_DqK2Vu457A6i
          stance: supports
          locator: CBDB：兄弟 王一言（206148）之父／母 王湧
          quotation: null
          interpretation_note: 由兄弟关系推断：王一元 与 王一言 为同胞（CBDB 记「兄」），王一言 之父／母即 王一元 之父／母。
          source:
            id: s_42cgDSd_6_DqK2Vu457A6i
            source_type: api_record
            title: 中国历代人物传记资料库：王一元（CBDB 213982）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213982&o=json
            external_identifier: CBDB:213982
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_9kssxifapNve63ckwVF8c1
        status: active
        display_name: 王一元
        merged_into_person_id: null
    - claim:
        id: c_HMco7J7rcTA3IP3xz51KSD
        subject_person_id: p_w5fXASs4g8AzDQ4NHHrEv7
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_C745Q6Xo91hq74REVnbJ56
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QkUbSrjJyzvfvWhjK9NvQr
          claim_id: c_HMco7J7rcTA3IP3xz51KSD
          source_id: s_PLyM90ElP0HS6i07V2XdeY
          stance: supports
          locator: CBDB：兄弟 王一言（206148）之父／母 王湧
          quotation: null
          interpretation_note: 由兄弟关系推断：王一本 与 王一言 为同胞（CBDB 记「兄」），王一言 之父／母即 王一本 之父／母。
          source:
            id: s_PLyM90ElP0HS6i07V2XdeY
            source_type: api_record
            title: 中国历代人物传记资料库：王一本（CBDB 213988）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213988&o=json
            external_identifier: CBDB:213988
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_C745Q6Xo91hq74REVnbJ56
        status: active
        display_name: 王一本
        merged_into_person_id: null
    - claim:
        id: c_-ZjCWbFb7LdW6eblgcNb7V
        subject_person_id: p_w5fXASs4g8AzDQ4NHHrEv7
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Frzy82Pddoh3noG2YBakWo
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SCihYbE2YMyCb4ail2YtXd
          claim_id: c_-ZjCWbFb7LdW6eblgcNb7V
          source_id: s_L7pC-ZBh8RNXz-cqbu07Vh
          stance: supports
          locator: CBDB：兄弟 王一言（206148）之父／母 王湧
          quotation: null
          interpretation_note: 由兄弟关系推断：王一揆 与 王一言 为同胞（CBDB 记「兄」），王一言 之父／母即 王一揆 之父／母。
          source:
            id: s_L7pC-ZBh8RNXz-cqbu07Vh
            source_type: api_record
            title: 中国历代人物传记资料库：王一揆（CBDB 213983）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213983&o=json
            external_identifier: CBDB:213983
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Frzy82Pddoh3noG2YBakWo
        status: active
        display_name: 王一揆
        merged_into_person_id: null
    - claim:
        id: c_nxJGEDjEFqLutdtJlga-J0
        subject_person_id: p_w5fXASs4g8AzDQ4NHHrEv7
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_MNka8FxmrpKqyMcrF14VqK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_g_cNvlWZIn_W0B8f2mCIYB
          claim_id: c_nxJGEDjEFqLutdtJlga-J0
          source_id: s_8O-4Aheyqgf767VtOgM7k6
          stance: supports
          locator: CBDB：兄弟 王一言（206148）之父／母 王湧
          quotation: null
          interpretation_note: 由兄弟关系推断：王一鳳 与 王一言 为同胞（CBDB 记「兄」），王一言 之父／母即 王一鳳 之父／母。
          source:
            id: s_8O-4Aheyqgf767VtOgM7k6
            source_type: api_record
            title: 中国历代人物传记资料库：王一鳳（CBDB 213989）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213989&o=json
            external_identifier: CBDB:213989
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_MNka8FxmrpKqyMcrF14VqK
        status: active
        display_name: 王一鳳
        merged_into_person_id: null
    - claim:
        id: c_AYX93OOLf44r7oOBLXx3gM
        subject_person_id: p_w5fXASs4g8AzDQ4NHHrEv7
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_NN2hQz1jpPDW7ogPyofiyM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_60MUGhqT36say70bbzn9ux
          claim_id: c_AYX93OOLf44r7oOBLXx3gM
          source_id: s_pwW3p2jG4fdTPSnoRFGVRr
          stance: supports
          locator: CBDB：兄弟 王一言（206148）之父／母 王湧
          quotation: null
          interpretation_note: 由兄弟关系推断：王一科 与 王一言 为同胞（CBDB 记「兄」），王一言 之父／母即 王一科 之父／母。
          source:
            id: s_pwW3p2jG4fdTPSnoRFGVRr
            source_type: api_record
            title: 中国历代人物传记资料库：王一科（CBDB 213984）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213984&o=json
            external_identifier: CBDB:213984
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_NN2hQz1jpPDW7ogPyofiyM
        status: active
        display_name: 王一科
        merged_into_person_id: null
    - claim:
        id: c_ne24sXbcYriW_PclB_jniF
        subject_person_id: p_w5fXASs4g8AzDQ4NHHrEv7
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_WpNmWhrQX1ERu4VzkaK7Hp
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fVGXC-q5D8iAVQS0S4erCA
          claim_id: c_ne24sXbcYriW_PclB_jniF
          source_id: s_4IMxvUj39GVf-aE-LfTHW5
          stance: supports
          locator: CBDB：兄弟 王一言（206148）之父／母 王湧
          quotation: null
          interpretation_note: 由兄弟关系推断：王一正 与 王一言 为同胞（CBDB 记「兄」），王一言 之父／母即 王一正 之父／母。
          source:
            id: s_4IMxvUj39GVf-aE-LfTHW5
            source_type: api_record
            title: 中国历代人物传记资料库：王一正（CBDB 213987）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213987&o=json
            external_identifier: CBDB:213987
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_WpNmWhrQX1ERu4VzkaK7Hp
        status: active
        display_name: 王一正
        merged_into_person_id: null
    - claim:
        id: c_uJQmJsU45E3vSDTOBuYQAi
        subject_person_id: p_w5fXASs4g8AzDQ4NHHrEv7
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_sN3PcXnM88ou4acFpbnUWs
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GZIiEpDCiz73_qwHPKX2me
          claim_id: c_uJQmJsU45E3vSDTOBuYQAi
          source_id: s_U3PU8sspWP2_97UTWKTBsk
          stance: supports
          locator: CBDB：兄弟 王一言（206148）之父／母 王湧
          quotation: null
          interpretation_note: 由兄弟关系推断：王一成 与 王一言 为同胞（CBDB 记「兄」），王一言 之父／母即 王一成 之父／母。
          source:
            id: s_U3PU8sspWP2_97UTWKTBsk
            source_type: api_record
            title: 中国历代人物传记资料库：王一成（CBDB 213991）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213991&o=json
            external_identifier: CBDB:213991
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_sN3PcXnM88ou4acFpbnUWs
        status: active
        display_name: 王一成
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王湧

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王湧 | accepted |
| bio.summary | 王湧，明人物。萬曆二年進士，籍贯南城，入仕監生。（中国历代人物传记资料库 CBDB 213978） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_HfLk9ptSCZD1pXUYCky88S | 王一言 | accepted |
| children | p_4YukAyrWLgRehW7Qz3TA7Z | 王一龍 | accepted |
| children | p_4vHM6gNZTvxZM2XR9bP4ac | 王一經 | accepted |
| children | p_8yA38mLKkSBSoPttddDF9L | 王一舉 | accepted |
| children | p_9kssxifapNve63ckwVF8c1 | 王一元 | accepted |
| children | p_C745Q6Xo91hq74REVnbJ56 | 王一本 | accepted |
| children | p_Frzy82Pddoh3noG2YBakWo | 王一揆 | accepted |
| children | p_MNka8FxmrpKqyMcrF14VqK | 王一鳳 | accepted |
| children | p_NN2hQz1jpPDW7ogPyofiyM | 王一科 | accepted |
| children | p_WpNmWhrQX1ERu4VzkaK7Hp | 王一正 | accepted |
| children | p_sN3PcXnM88ou4acFpbnUWs | 王一成 | accepted |

## 外部来源

- [中国历代人物传记资料库：王一本（CBDB 213988）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213988&o=json)
- [中国历代人物传记资料库：王一成（CBDB 213991）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213991&o=json)
- [中国历代人物传记资料库：王一鳳（CBDB 213989）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213989&o=json)
- [中国历代人物传记资料库：王一經（CBDB 213990）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213990&o=json)
- [中国历代人物传记资料库：王一舉（CBDB 213986）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213986&o=json)
- [中国历代人物传记资料库：王一科（CBDB 213984）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213984&o=json)
- [中国历代人物传记资料库：王一揆（CBDB 213983）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213983&o=json)
- [中国历代人物传记资料库：王一龍（CBDB 213985）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213985&o=json)
- [中国历代人物传记资料库：王一元（CBDB 213982）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213982&o=json)
- [中国历代人物传记资料库：王一正（CBDB 213987）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213987&o=json)
- [中国历代人物传记资料库：王湧（CBDB 213978）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213978&o=json)
