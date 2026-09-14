---
schema: wang-person/v1
id: p_djPzJATqP8N3fAgZuiGdme
status: active
merged_into: null
display_name: 王琥
revision: 10
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_gKXYTMEfWy1359vGaS27r6
        subject_person_id: p_djPzJATqP8N3fAgZuiGdme
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8CRpHGA5VEuoxZ5bDjctTE
          claim_id: c_gKXYTMEfWy1359vGaS27r6
          source_id: s_VF36nge6KQN5v437W8CR1Z
          stance: supports
          locator: CBDB:300354
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（300354）
          source: &a1
            id: s_VF36nge6KQN5v437W8CR1Z
            source_type: api_record
            title: 中国历代人物传记资料库：王琥（CBDB 300354）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300354&o=json
            external_identifier: CBDB:300354
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.625Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_t1aGC365c3uMaf6pWvm6V2
        subject_person_id: p_djPzJATqP8N3fAgZuiGdme
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琥，明人物。嘉靖十七年進士，籍贯晉江。（中国历代人物传记资料库 CBDB 300354）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_IbVd1QVH5o_B9PHRO8ULoC
          claim_id: c_t1aGC365c3uMaf6pWvm6V2
          source_id: s_VF36nge6KQN5v437W8CR1Z
          stance: supports
          locator: CBDB:300354
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c__rQgbjFd8gbRnF4kpoeRE4
        subject_person_id: p_djPzJATqP8N3fAgZuiGdme
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_PBPvLNJEK4jPNCWDSKfDp5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_U_BaWOxyl630bmI3nZJADM
          claim_id: c__rQgbjFd8gbRnF4kpoeRE4
          source_id: s_VF36nge6KQN5v437W8CR1Z
          stance: supports
          locator: 嘉靖十七年進士登科錄:一卷，第三甲第六十名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_PBPvLNJEK4jPNCWDSKfDp5
        status: active
        display_name: 王春復
        merged_into_person_id: null
    - claim:
        id: c_2VajivG6p8HZTi3qUu1NFF
        subject_person_id: p_djPzJATqP8N3fAgZuiGdme
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2mASBqm4okacG3erqHNN5H
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YZUS62ZdotuFdfWPJN0hBS
          claim_id: c_2VajivG6p8HZTi3qUu1NFF
          source_id: s_QncvpqGjUFRwzVhImHBoCH
          stance: supports
          locator: CBDB：兄弟 王春復（203136）之父／母 王琥
          quotation: null
          interpretation_note: 由兄弟关系推断：王初復 与 王春復 为同胞（CBDB 记「兄」），王春復 之父／母即 王初復 之父／母。
          source:
            id: s_QncvpqGjUFRwzVhImHBoCH
            source_type: api_record
            title: 中国历代人物传记资料库：王初復（CBDB 300365）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300365&o=json
            external_identifier: CBDB:300365
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_2mASBqm4okacG3erqHNN5H
        status: active
        display_name: 王初復
        merged_into_person_id: null
    - claim:
        id: c_lhoRTNIpzw0BA0KUXWY6IS
        subject_person_id: p_djPzJATqP8N3fAgZuiGdme
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_CQfx9Ba3WNyA32G4VxP7dC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7CsIgFQb4eFTXY-denv1zL
          claim_id: c_lhoRTNIpzw0BA0KUXWY6IS
          source_id: s_Siz5-VUTpExUTc3rZkN-Cf
          stance: supports
          locator: CBDB：兄弟 王春復（203136）之父／母 王琥
          quotation: null
          interpretation_note: 由兄弟关系推断：王速復 与 王春復 为同胞（CBDB 记「兄」），王春復 之父／母即 王速復 之父／母。
          source:
            id: s_Siz5-VUTpExUTc3rZkN-Cf
            source_type: api_record
            title: 中国历代人物传记资料库：王速復（CBDB 300364）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300364&o=json
            external_identifier: CBDB:300364
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_CQfx9Ba3WNyA32G4VxP7dC
        status: active
        display_name: 王速復
        merged_into_person_id: null
    - claim:
        id: c_hTHCt_moUd2JZxKcxI86rS
        subject_person_id: p_djPzJATqP8N3fAgZuiGdme
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_RQRCLMoA3oW26KGLDs6H6M
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZRnOgdsF7kqzHJnkubPoHv
          claim_id: c_hTHCt_moUd2JZxKcxI86rS
          source_id: s_ZW49eB8yQL_P1_MziNJWsy
          stance: supports
          locator: CBDB：兄弟 王春復（203136）之父／母 王琥
          quotation: null
          interpretation_note: 由兄弟关系推断：王陽復 与 王春復 为同胞（CBDB 记「弟」），王春復 之父／母即 王陽復 之父／母。
          source:
            id: s_ZW49eB8yQL_P1_MziNJWsy
            source_type: api_record
            title: 中国历代人物传记资料库：王陽復（CBDB 300359）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300359&o=json
            external_identifier: CBDB:300359
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_RQRCLMoA3oW26KGLDs6H6M
        status: active
        display_name: 王陽復
        merged_into_person_id: null
    - claim:
        id: c_ZkJ6W4qxZ5_9ClWRoMdpMK
        subject_person_id: p_djPzJATqP8N3fAgZuiGdme
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_fmoAMRAFhJB4TCz6oG2LKn
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_68NvIsVPVPFz-e-vCW-11h
          claim_id: c_ZkJ6W4qxZ5_9ClWRoMdpMK
          source_id: s_fuUWAKUI2rxazA99vrJgAZ
          stance: supports
          locator: CBDB：兄弟 王春復（203136）之父／母 王琥
          quotation: null
          interpretation_note: 由兄弟关系推断：王休復 与 王春復 为同胞（CBDB 记「弟」），王春復 之父／母即 王休復 之父／母。
          source:
            id: s_fuUWAKUI2rxazA99vrJgAZ
            source_type: api_record
            title: 中国历代人物传记资料库：王休復（CBDB 300358）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300358&o=json
            external_identifier: CBDB:300358
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_fmoAMRAFhJB4TCz6oG2LKn
        status: active
        display_name: 王休復
        merged_into_person_id: null
    - claim:
        id: c_DSOGjANUbSZrhEvCea8kM7
        subject_person_id: p_djPzJATqP8N3fAgZuiGdme
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_hij62KiNEfX1vVHo6K2VDF
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_In6HZKjjXd2_j10_zUlVZr
          claim_id: c_DSOGjANUbSZrhEvCea8kM7
          source_id: s_CDGUu0UF1J3LAWn42sAKJt
          stance: supports
          locator: CBDB：兄弟 王春復（203136）之父／母 王琥
          quotation: null
          interpretation_note: 由兄弟关系推断：王克復 与 王春復 为同胞（CBDB 记「弟」），王春復 之父／母即 王克復 之父／母。
          source:
            id: s_CDGUu0UF1J3LAWn42sAKJt
            source_type: api_record
            title: 中国历代人物传记资料库：王克復（CBDB 300361）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300361&o=json
            external_identifier: CBDB:300361
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_hij62KiNEfX1vVHo6K2VDF
        status: active
        display_name: 王克復
        merged_into_person_id: null
    - claim:
        id: c_B5OqQs0ihEcZyLZa3P2qpk
        subject_person_id: p_djPzJATqP8N3fAgZuiGdme
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_iSpvyGUT53CspFRmELkfKQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BzRv3JuM9k1vJuspGvZVnS
          claim_id: c_B5OqQs0ihEcZyLZa3P2qpk
          source_id: s_JoUqi0phScLCNC_ewSPXwG
          stance: supports
          locator: CBDB：兄弟 王春復（203136）之父／母 王琥
          quotation: null
          interpretation_note: 由兄弟关系推断：王三復 与 王春復 为同胞（CBDB 记「兄」），王春復 之父／母即 王三復 之父／母。
          source:
            id: s_JoUqi0phScLCNC_ewSPXwG
            source_type: api_record
            title: 中国历代人物传记资料库：王三復（CBDB 300363）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300363&o=json
            external_identifier: CBDB:300363
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_iSpvyGUT53CspFRmELkfKQ
        status: active
        display_name: 王三復
        merged_into_person_id: null
    - claim:
        id: c_Wlnbo6BESbabTCui3tIuuR
        subject_person_id: p_djPzJATqP8N3fAgZuiGdme
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_rP1SdxkNvEkxQt1vGkS8G4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FuU5xxGQE3OgRLuPamCExl
          claim_id: c_Wlnbo6BESbabTCui3tIuuR
          source_id: s_YkscnFtX-eClZXZ_lxkDOF
          stance: supports
          locator: CBDB：兄弟 王春復（203136）之父／母 王琥
          quotation: null
          interpretation_note: 由兄弟关系推断：王禮復 与 王春復 为同胞（CBDB 记「兄」），王春復 之父／母即 王禮復 之父／母。
          source:
            id: s_YkscnFtX-eClZXZ_lxkDOF
            source_type: api_record
            title: 中国历代人物传记资料库：王禮復（CBDB 300366）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300366&o=json
            external_identifier: CBDB:300366
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_rP1SdxkNvEkxQt1vGkS8G4
        status: active
        display_name: 王禮復
        merged_into_person_id: null
    - claim:
        id: c_keuJ_txcEyC3D7imVoSq60
        subject_person_id: p_djPzJATqP8N3fAgZuiGdme
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_vikXrBMKnbMBLaHcYcsA5k
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tcSpLp5mwb_7tIfzZl9hMG
          claim_id: c_keuJ_txcEyC3D7imVoSq60
          source_id: s_dGt3DpgDWM9-2jdJMTDHWR
          stance: supports
          locator: CBDB：兄弟 王春復（203136）之父／母 王琥
          quotation: null
          interpretation_note: 由兄弟关系推断：王德復 与 王春復 为同胞（CBDB 记「弟」），王春復 之父／母即 王德復 之父／母。
          source:
            id: s_dGt3DpgDWM9-2jdJMTDHWR
            source_type: api_record
            title: 中国历代人物传记资料库：王德復（CBDB 300362）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300362&o=json
            external_identifier: CBDB:300362
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_vikXrBMKnbMBLaHcYcsA5k
        status: active
        display_name: 王德復
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王琥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王琥 | accepted |
| bio.summary | 王琥，明人物。嘉靖十七年進士，籍贯晉江。（中国历代人物传记资料库 CBDB 300354） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_PBPvLNJEK4jPNCWDSKfDp5 | 王春復 | accepted |
| children | p_2mASBqm4okacG3erqHNN5H | 王初復 | accepted |
| children | p_CQfx9Ba3WNyA32G4VxP7dC | 王速復 | accepted |
| children | p_RQRCLMoA3oW26KGLDs6H6M | 王陽復 | accepted |
| children | p_fmoAMRAFhJB4TCz6oG2LKn | 王休復 | accepted |
| children | p_hij62KiNEfX1vVHo6K2VDF | 王克復 | accepted |
| children | p_iSpvyGUT53CspFRmELkfKQ | 王三復 | accepted |
| children | p_rP1SdxkNvEkxQt1vGkS8G4 | 王禮復 | accepted |
| children | p_vikXrBMKnbMBLaHcYcsA5k | 王德復 | accepted |

## 外部来源

- [中国历代人物传记资料库：王初復（CBDB 300365）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300365&o=json)
- [中国历代人物传记资料库：王德復（CBDB 300362）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300362&o=json)
- [中国历代人物传记资料库：王琥（CBDB 300354）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300354&o=json)
- [中国历代人物传记资料库：王克復（CBDB 300361）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300361&o=json)
- [中国历代人物传记资料库：王禮復（CBDB 300366）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300366&o=json)
- [中国历代人物传记资料库：王三復（CBDB 300363）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300363&o=json)
- [中国历代人物传记资料库：王速復（CBDB 300364）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300364&o=json)
- [中国历代人物传记资料库：王休復（CBDB 300358）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300358&o=json)
- [中国历代人物传记资料库：王陽復（CBDB 300359）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300359&o=json)
