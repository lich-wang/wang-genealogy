---
schema: wang-person/v1
id: p_netpjn2vvpbP4gRNZK5nnW
status: active
merged_into: null
display_name: 王畿
revision: 9
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_uuRzf7VVNGMcg8FD4j2o8W
        subject_person_id: p_netpjn2vvpbP4gRNZK5nnW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王畿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_pk1ncixo6xBcTDJAsP5WdD
          claim_id: c_uuRzf7VVNGMcg8FD4j2o8W
          source_id: s_TrML3YJ2G39dZdxXUabmPv
          stance: supports
          locator: CBDB:126814
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126814）
          source: &a1
            id: s_TrML3YJ2G39dZdxXUabmPv
            source_type: api_record
            title: 中国历代人物传记资料库：王畿（CBDB 126814）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126814&o=json
            external_identifier: CBDB:126814
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.225Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_4uu6CNkMtdrM2Si6AohU45
        subject_person_id: p_netpjn2vvpbP4gRNZK5nnW
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1498年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WQwexVy4eiFyZ4UJaMj8qL
          claim_id: c_4uu6CNkMtdrM2Si6AohU45
          source_id: s_TrML3YJ2G39dZdxXUabmPv
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_jrDBorkCnxfvmsCxQihCCQ
        subject_person_id: p_netpjn2vvpbP4gRNZK5nnW
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1583年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FP6xQp756wwzGFDPnAssyW
          claim_id: c_jrDBorkCnxfvmsCxQihCCQ
          source_id: s_TrML3YJ2G39dZdxXUabmPv
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2JQhJpRoyaCkaUNyTQVNNc
        subject_person_id: p_netpjn2vvpbP4gRNZK5nnW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nCbmdJafsdnCeECi4QD7dc
          claim_id: c_2JQhJpRoyaCkaUNyTQVNNc
          source_id: s_TrML3YJ2G39dZdxXUabmPv
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_fWXZAr-xrHITdNKtGW1ASs
        subject_person_id: p_8gY9eTVRT2EQWmPPoaXa3X
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_netpjn2vvpbP4gRNZK5nnW
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_arHMdzxH67c5uhvW4A5FTm
          claim_id: c_fWXZAr-xrHITdNKtGW1ASs
          source_id: s_ACJ8vLgd7tcqS4LiqB3W8Z
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第二百二十七名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ACJ8vLgd7tcqS4LiqB3W8Z
            source_type: api_record
            title: 中国历代人物传记资料库：王經（CBDB 232114）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=232114&o=json
            external_identifier: CBDB:232114
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.686Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_8gY9eTVRT2EQWmPPoaXa3X
        status: active
        display_name: 王經
        merged_into_person_id: null
  children:
    - claim:
        id: c_888FzvLEYSpB4IdTtDiJVM
        subject_person_id: p_netpjn2vvpbP4gRNZK5nnW
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_D3uVxqQFBH491G6DL79z4g
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YC4qV6kz5UEg2nvkQYRP_b
          claim_id: c_888FzvLEYSpB4IdTtDiJVM
          source_id: s_a17eQX1cUDwJwmRVnQj2MU
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第二百二十七名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_a17eQX1cUDwJwmRVnQj2MU
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王應楨（294872）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294872&o=json
            external_identifier: CBDB:294872
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T01:59:15.571Z
            metadata_json: null
      object_person:
        id: p_D3uVxqQFBH491G6DL79z4g
        status: active
        display_name: 王应桢
        merged_into_person_id: null
    - claim:
        id: c_7_E6u0J-AQIq7qs5vsze8x
        subject_person_id: p_netpjn2vvpbP4gRNZK5nnW
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_qYbHrFaVm7aZKdVMAZgyL1
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_i70kvsS1MjhQK0ifRY1rsi
          claim_id: c_7_E6u0J-AQIq7qs5vsze8x
          source_id: s_mrfXStHXQ7Kbkh4qZLKXEz
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第二百二十七名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_mrfXStHXQ7Kbkh4qZLKXEz
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王應斌（294875）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294875&o=json
            external_identifier: CBDB:294875
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T01:59:17.857Z
            metadata_json: null
      object_person:
        id: p_qYbHrFaVm7aZKdVMAZgyL1
        status: active
        display_name: 王应斌
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_f2AXD6hfBZdqQ8Riq-v52P
        subject_person_id: p_GwYZgMHCT7QS7yjR4GUr42
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_netpjn2vvpbP4gRNZK5nnW
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_e-9xlnUsw8vdU7PX7cB_or
          claim_id: c_f2AXD6hfBZdqQ8Riq-v52P
          source_id: s_xaG4v7hn4DKGXBy5ZqUmvZ
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第二百二十七名：丈夫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_xaG4v7hn4DKGXBy5ZqUmvZ
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：張氏（294865）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294865&o=json
            external_identifier: CBDB:294865
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T01:59:19.641Z
            metadata_json: null
      object_person:
        id: p_GwYZgMHCT7QS7yjR4GUr42
        status: active
        display_name: 张氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_-RioqltpBhlvUFcUxzMYw3
        subject_person_id: p_nk86JnBN3H44SSosh8zCKQ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_netpjn2vvpbP4gRNZK5nnW
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5sNpQ_o7HTDKm6699X1uAf
          claim_id: c_-RioqltpBhlvUFcUxzMYw3
          source_id: s_picJY4WWYs49eM1wbidthu
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第二百二十七名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_picJY4WWYs49eM1wbidthu
            source_type: api_record
            title: 中国历代人物传记资料库：王可旺（CBDB 294860）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294860&o=json
            external_identifier: CBDB:294860
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.475Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_nk86JnBN3H44SSosh8zCKQ
        status: active
        display_name: 王可旺
        merged_into_person_id: null
    - claim:
        id: c_LjtJ9ltq2c3y36dGRbuHkS
        subject_person_id: p_reuJ3Gy5K3tzEUt9VByf69
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_netpjn2vvpbP4gRNZK5nnW
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SsdmcH_AYfb_Hkp3gWtgoD
          claim_id: c_LjtJ9ltq2c3y36dGRbuHkS
          source_id: s_jC7QVg7b9xMaKB5QAPhZP2
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第二百二十七名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_jC7QVg7b9xMaKB5QAPhZP2
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王理（232113）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=232113&o=json
            external_identifier: CBDB:232113
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:06:18.936Z
            metadata_json: null
      object_person:
        id: p_reuJ3Gy5K3tzEUt9VByf69
        status: active
        display_name: 王理
        merged_into_person_id: null
  descendants:
    - claim:
        id: c_cfP9ta_jO0iwSm2kue8dmU
        subject_person_id: p_netpjn2vvpbP4gRNZK5nnW
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_4uQcLGsJMcc6S6nmViKGi7
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HJPBnxAu2Kc1Djcm5qHqrR
          claim_id: c_cfP9ta_jO0iwSm2kue8dmU
          source_id: s_jUpznhbdy97D8J8yRxixRR
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第二百二十七名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_jUpznhbdy97D8J8yRxixRR
            source_type: api_record
            title: 中国历代人物传记资料库：王繼炳（CBDB 294879）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294879&o=json
            external_identifier: CBDB:294879
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:03.722Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_4uQcLGsJMcc6S6nmViKGi7
        status: active
        display_name: 王繼炳
        merged_into_person_id: null
    - claim:
        id: c_XiQ4qMyf-fcE-YK-Vb6xBO
        subject_person_id: p_netpjn2vvpbP4gRNZK5nnW
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_bqD63aFdZJi7bNMGkx1CRn
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__L0Ru-GxD5vB-oBAdMy5Kr
          claim_id: c_XiQ4qMyf-fcE-YK-Vb6xBO
          source_id: s_n575Pge4P8TP3yRBKaL9Gu
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第二百二十七名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_n575Pge4P8TP3yRBKaL9Gu
            source_type: api_record
            title: 中国历代人物传记资料库：王繼耀（CBDB 294880）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294880&o=json
            external_identifier: CBDB:294880
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:03.722Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_bqD63aFdZJi7bNMGkx1CRn
        status: active
        display_name: 王繼耀
        merged_into_person_id: null
    - claim:
        id: c_JeRgfCQySft-86UVziy7xX
        subject_person_id: p_netpjn2vvpbP4gRNZK5nnW
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_RGbY3Rfo1GGBPB4tnQbHRP
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xSG33RmhOpDK1Vpj__7sos
          claim_id: c_JeRgfCQySft-86UVziy7xX
          source_id: s_ndt7K3NN6AJp1XTrq6GuRj
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第二百二十七名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ndt7K3NN6AJp1XTrq6GuRj
            source_type: api_record
            title: 中国历代人物传记资料库：王繼樸（CBDB 294878）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294878&o=json
            external_identifier: CBDB:294878
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:03.722Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_RGbY3Rfo1GGBPB4tnQbHRP
        status: active
        display_name: 王繼樸
        merged_into_person_id: null
    - claim:
        id: c_pAXLnInIz5lcVSD1Z7iRU5
        subject_person_id: p_netpjn2vvpbP4gRNZK5nnW
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_zan8j3U1RwJ9ZQKv5eQYFu
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0QYbSid9zOkhnj9ylvS_g_
          claim_id: c_pAXLnInIz5lcVSD1Z7iRU5
          source_id: s_cTyzkEcgF4eFBDDVUA6A9i
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第二百二十七名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_cTyzkEcgF4eFBDDVUA6A9i
            source_type: api_record
            title: 中国历代人物传记资料库：王繼晃（CBDB 294877）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294877&o=json
            external_identifier: CBDB:294877
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:03.722Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_zan8j3U1RwJ9ZQKv5eQYFu
        status: active
        display_name: 王繼晃
        merged_into_person_id: null
  other: []
---

# 王畿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王畿 | accepted |
| birth.date | 1498年 | accepted |
| death.date | 1583年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_8gY9eTVRT2EQWmPPoaXa3X | 王經 | accepted |
| children | p_D3uVxqQFBH491G6DL79z4g | 王应桢 | accepted |
| children | p_qYbHrFaVm7aZKdVMAZgyL1 | 王应斌 | accepted |
| spouses | p_GwYZgMHCT7QS7yjR4GUr42 | 张氏 | accepted |
| ancestors | p_nk86JnBN3H44SSosh8zCKQ | 王可旺 | accepted |
| ancestors | p_reuJ3Gy5K3tzEUt9VByf69 | 王理 | accepted |
| descendants | p_4uQcLGsJMcc6S6nmViKGi7 | 王繼炳 | accepted |
| descendants | p_bqD63aFdZJi7bNMGkx1CRn | 王繼耀 | accepted |
| descendants | p_RGbY3Rfo1GGBPB4tnQbHRP | 王繼樸 | accepted |
| descendants | p_zan8j3U1RwJ9ZQKv5eQYFu | 王繼晃 | accepted |

## 外部来源

- [中国历代人物传记资料库：王畿（CBDB 126814）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126814&o=json)
- [中国历代人物传记资料库：王繼炳（CBDB 294879）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294879&o=json)
- [中国历代人物传记资料库：王繼晃（CBDB 294877）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294877&o=json)
- [中国历代人物传记资料库：王繼樸（CBDB 294878）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294878&o=json)
- [中国历代人物传记资料库：王繼耀（CBDB 294880）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294880&o=json)
- [中国历代人物传记资料库：王經（CBDB 232114）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=232114&o=json)
- [中国历代人物传记资料库：王可旺（CBDB 294860）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294860&o=json)
- [CBDB 中国历代人物传记资料库：王理（232113）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=232113&o=json)
- [CBDB 中国历代人物传记资料库：王應斌（294875）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294875&o=json)
- [CBDB 中国历代人物传记资料库：王應楨（294872）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294872&o=json)
- [CBDB 中国历代人物传记资料库：張氏（294865）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294865&o=json)
