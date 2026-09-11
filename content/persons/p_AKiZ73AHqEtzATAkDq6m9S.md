---
schema: wang-person/v1
id: p_AKiZ73AHqEtzATAkDq6m9S
status: active
merged_into: null
display_name: 王瑛
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6DAjfZZGvt4yLS8DMzTTXG
        subject_person_id: p_AKiZ73AHqEtzATAkDq6m9S
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑛
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GXRaNmPKq1HiNVphwDkAcC
          claim_id: c_6DAjfZZGvt4yLS8DMzTTXG
          source_id: s_GWdGKWBoQ5Yau2CR5qC4YT
          stance: supports
          locator: CBDB:126750
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126750）
          source: &a1
            id: s_GWdGKWBoQ5Yau2CR5qC4YT
            source_type: api_record
            title: 中国历代人物传记资料库：王瑛（CBDB 126750）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126750&o=json
            external_identifier: CBDB:126750
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.175Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_SxtFerVw9yrLyTkespuvHv
        subject_person_id: p_AKiZ73AHqEtzATAkDq6m9S
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑛，明人物。明清進士進士，籍贯無錫，入仕進士，曾任巡按、御史、吏部觀政。（中国历代人物传记资料库 CBDB 126750）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_vOhGJ9if-ln-SB2Yh_Jj8E
          claim_id: c_SxtFerVw9yrLyTkespuvHv
          source_id: s_GWdGKWBoQ5Yau2CR5qC4YT
          stance: supports
          locator: CBDB:126750
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_mctpZa3yPN1TrvVoZFT0AX
        subject_person_id: p_Akvhk7vb2JMfzgR2hpBTHy
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_AKiZ73AHqEtzATAkDq6m9S
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_T7mpuOtST0OGY7cGTeSiCo
          claim_id: c_mctpZa3yPN1TrvVoZFT0AX
          source_id: s_GWdGKWBoQ5Yau2CR5qC4YT
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第一百九十四名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Akvhk7vb2JMfzgR2hpBTHy
        status: active
        display_name: 王浦
        merged_into_person_id: null
  children:
    - claim:
        id: c_4Oq9pQrhIngITQLjg6DF91
        subject_person_id: p_AKiZ73AHqEtzATAkDq6m9S
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ad32BrcoPU4xRMCM2tcFkg
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9Q1a-TrUhRFq4WUoas_Lh7
          claim_id: c_4Oq9pQrhIngITQLjg6DF91
          source_id: s_GWdGKWBoQ5Yau2CR5qC4YT
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第一百九十四名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_ad32BrcoPU4xRMCM2tcFkg
        status: active
        display_name: 王同穀
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_sJndmJ9N10-UV3Nw3J0Tmh
        subject_person_id: p_AKiZ73AHqEtzATAkDq6m9S
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_mP42sF7Pz1aHi6ct9ZxHBG
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_C9wFs5N2Kvw6qTNY6amZZw
          claim_id: c_sJndmJ9N10-UV3Nw3J0Tmh
          source_id: s_WOZe830AR-CTley6useY-y
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第一百九十四名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_WOZe830AR-CTley6useY-y
            source_type: api_record
            title: 中国历代人物传记资料库：韓氏(王瑛妻)（CBDB 294333）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294333&o=json
            external_identifier: CBDB:294333
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_mP42sF7Pz1aHi6ct9ZxHBG
        status: active
        display_name: 韓氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_2uf8fSMtbkpT8qNe04XEXU
        subject_person_id: p_vRn2WKQKBd5Sg93jKcigfC
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_AKiZ73AHqEtzATAkDq6m9S
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_22LjhYU42udEkw1mzzyGFP
          claim_id: c_2uf8fSMtbkpT8qNe04XEXU
          source_id: s_GWdGKWBoQ5Yau2CR5qC4YT
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第一百九十四名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_vRn2WKQKBd5Sg93jKcigfC
        status: active
        display_name: 王惠
        merged_into_person_id: null
    - claim:
        id: c_RELXBiI-GiEsjjNvbpFqfF
        subject_person_id: p_yNNNmbkNz4tjQELrTMo9G6
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_AKiZ73AHqEtzATAkDq6m9S
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PFKy2HJXLwtKaAL9iVfW1Q
          claim_id: c_RELXBiI-GiEsjjNvbpFqfF
          source_id: s_GWdGKWBoQ5Yau2CR5qC4YT
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第一百九十四名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_yNNNmbkNz4tjQELrTMo9G6
        status: active
        display_name: 王誠
        merged_into_person_id: null
  descendants:
    - claim:
        id: c_uPkr4uZ_2JxcCvMz0URHe9
        subject_person_id: p_AKiZ73AHqEtzATAkDq6m9S
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_2EfMZkQk81KS57VSPMi2J4
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9Q2CboJK1mD6sPLzvlR405
          claim_id: c_uPkr4uZ_2JxcCvMz0URHe9
          source_id: s_5jffiP2hWVwSEFfBYB1tuQ
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第一百九十四名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_5jffiP2hWVwSEFfBYB1tuQ
            source_type: api_record
            title: 中国历代人物传记资料库：王國棟（CBDB 294343）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294343&o=json
            external_identifier: CBDB:294343
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.453Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_2EfMZkQk81KS57VSPMi2J4
        status: active
        display_name: 王國棟
        merged_into_person_id: null
    - claim:
        id: c_4rz44bjAgbMKbELKXbSQ15
        subject_person_id: p_AKiZ73AHqEtzATAkDq6m9S
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_FzpdN1uPjGmcS3aDNyQmWj
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uSBK1x-5Zts-est7zMC7br
          claim_id: c_4rz44bjAgbMKbELKXbSQ15
          source_id: s_GWdGKWBoQ5Yau2CR5qC4YT
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第一百九十四名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_FzpdN1uPjGmcS3aDNyQmWj
        status: active
        display_name: 王國某
        merged_into_person_id: null
    - claim:
        id: c_re03WUtRUa3l64N_RavqCX
        subject_person_id: p_AKiZ73AHqEtzATAkDq6m9S
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_JTChHsZVDfsnxvSTDx9TGK
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xucmpxK4ufEvB_NZs-A_5k
          claim_id: c_re03WUtRUa3l64N_RavqCX
          source_id: s_GWdGKWBoQ5Yau2CR5qC4YT
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第一百九十四名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_JTChHsZVDfsnxvSTDx9TGK
        status: active
        display_name: 王國樟
        merged_into_person_id: null
    - claim:
        id: c_q9OXv3f11V7Moqay2BmUxa
        subject_person_id: p_AKiZ73AHqEtzATAkDq6m9S
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_762tNXdWHxEbGfGirMVWrg
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gp87wc0GvqHTaBtOP5cTlH
          claim_id: c_q9OXv3f11V7Moqay2BmUxa
          source_id: s_GWdGKWBoQ5Yau2CR5qC4YT
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第一百九十四名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_762tNXdWHxEbGfGirMVWrg
        status: active
        display_name: 王我紹
        merged_into_person_id: null
    - claim:
        id: c_R9v0v9jqjYP9hsL5jyQ6d6
        subject_person_id: p_AKiZ73AHqEtzATAkDq6m9S
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_wz4pJgc965ouacnW2mcZzq
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rOVV0XKpeqxILCJlbaCM4x
          claim_id: c_R9v0v9jqjYP9hsL5jyQ6d6
          source_id: s_GWdGKWBoQ5Yau2CR5qC4YT
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第一百九十四名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_wz4pJgc965ouacnW2mcZzq
        status: active
        display_name: 王我繩
        merged_into_person_id: null
    - claim:
        id: c_8DVogOM0lzIwZUHIpXPNiV
        subject_person_id: p_AKiZ73AHqEtzATAkDq6m9S
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_483rCrUSV4E5iUAQP3zRH5
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PL0EOG6R1Lu4KgmZs5BxHC
          claim_id: c_8DVogOM0lzIwZUHIpXPNiV
          source_id: s_GWdGKWBoQ5Yau2CR5qC4YT
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第一百九十四名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_483rCrUSV4E5iUAQP3zRH5
        status: active
        display_name: 王我繼
        merged_into_person_id: null
    - claim:
        id: c_D7MQpUH_YjzMkKAFN_5FJ7
        subject_person_id: p_AKiZ73AHqEtzATAkDq6m9S
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_NSTcEL8SAjqtv6PMNVftwk
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mLbLTAQOfEczvh3SeI2kBV
          claim_id: c_D7MQpUH_YjzMkKAFN_5FJ7
          source_id: s_GWdGKWBoQ5Yau2CR5qC4YT
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第一百九十四名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_NSTcEL8SAjqtv6PMNVftwk
        status: active
        display_name: 王我纉
        merged_into_person_id: null
    - claim:
        id: c_WFPNU6cGz2_pa_dHbAQdG5
        subject_person_id: p_AKiZ73AHqEtzATAkDq6m9S
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_GwWuRRmf5dXBwYozFd7a2R
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WbSytV4mEw-zFHj37ghHx5
          claim_id: c_WFPNU6cGz2_pa_dHbAQdG5
          source_id: s_GWdGKWBoQ5Yau2CR5qC4YT
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第一百九十四名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_GwWuRRmf5dXBwYozFd7a2R
        status: active
        display_name: 王我緒
        merged_into_person_id: null
    - claim:
        id: c_VnNfUlrbmMwgt3i-Lx2P-k
        subject_person_id: p_AKiZ73AHqEtzATAkDq6m9S
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_BF9K4fSAWYNv4UXXSFvrUG
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iBVf5LFn0hMzbUISsV7MGH
          claim_id: c_VnNfUlrbmMwgt3i-Lx2P-k
          source_id: s_GWdGKWBoQ5Yau2CR5qC4YT
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第一百九十四名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_BF9K4fSAWYNv4UXXSFvrUG
        status: active
        display_name: 王我續
        merged_into_person_id: null
    - claim:
        id: c_7EoFNp8Zs8A0t80cm3bcgu
        subject_person_id: p_AKiZ73AHqEtzATAkDq6m9S
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_QeMDjDxt6SVQT5rWaY8bBw
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dXPSmNaU0NAjR0K1txge1E
          claim_id: c_7EoFNp8Zs8A0t80cm3bcgu
          source_id: s_GWdGKWBoQ5Yau2CR5qC4YT
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第一百九十四名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_QeMDjDxt6SVQT5rWaY8bBw
        status: active
        display_name: 王我統
        merged_into_person_id: null
  other: []
---

# 王瑛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瑛 | accepted |
| bio.summary | 王瑛，明人物。明清進士進士，籍贯無錫，入仕進士，曾任巡按、御史、吏部觀政。（中国历代人物传记资料库 CBDB 126750） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Akvhk7vb2JMfzgR2hpBTHy | 王浦 | accepted |
| children | p_ad32BrcoPU4xRMCM2tcFkg | 王同穀 | accepted |
| spouses | p_mP42sF7Pz1aHi6ct9ZxHBG | 韓氏 | accepted |
| ancestors | p_vRn2WKQKBd5Sg93jKcigfC | 王惠 | accepted |
| ancestors | p_yNNNmbkNz4tjQELrTMo9G6 | 王誠 | accepted |
| descendants | p_2EfMZkQk81KS57VSPMi2J4 | 王國棟 | accepted |
| descendants | p_FzpdN1uPjGmcS3aDNyQmWj | 王國某 | accepted |
| descendants | p_JTChHsZVDfsnxvSTDx9TGK | 王國樟 | accepted |
| descendants | p_762tNXdWHxEbGfGirMVWrg | 王我紹 | accepted |
| descendants | p_wz4pJgc965ouacnW2mcZzq | 王我繩 | accepted |
| descendants | p_483rCrUSV4E5iUAQP3zRH5 | 王我繼 | accepted |
| descendants | p_NSTcEL8SAjqtv6PMNVftwk | 王我纉 | accepted |
| descendants | p_GwWuRRmf5dXBwYozFd7a2R | 王我緒 | accepted |
| descendants | p_BF9K4fSAWYNv4UXXSFvrUG | 王我續 | accepted |
| descendants | p_QeMDjDxt6SVQT5rWaY8bBw | 王我統 | accepted |

## 外部来源

- [中国历代人物传记资料库：韓氏(王瑛妻)（CBDB 294333）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294333&o=json)
- [中国历代人物传记资料库：王國棟（CBDB 294343）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294343&o=json)
- [中国历代人物传记资料库：王瑛（CBDB 126750）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126750&o=json)
