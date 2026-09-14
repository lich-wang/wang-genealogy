---
schema: wang-person/v1
id: p_dFBcsKbnFVcHN4YTvXeRwY
status: active
merged_into: null
display_name: 王麟
cbdb_id: 220261
revision: 10
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_pGLuwhHobES9F1Ptp7GL8P
        subject_person_id: p_dFBcsKbnFVcHN4YTvXeRwY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王麟，明人物。隆慶五年進士，曾任都察院右副都御史、戶部主事、戶部左侍郎。（中国历代人物传记资料库 CBDB 220261）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_5494Kqae9FdXQAF8tqSKF4
          claim_id: c_pGLuwhHobES9F1Ptp7GL8P
          source_id: s_WQuJfewNt1rKQX9Pq57QHd
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_WQuJfewNt1rKQX9Pq57QHd
            source_type: api_record
            title: 维基数据：王麟（Q45450873）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45450873
            external_identifier: Q45450873
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:09.271Z
            metadata_json: null
        - id: cs_dkRj5Z5gD6yCskjS6iV2rG
          claim_id: c_pGLuwhHobES9F1Ptp7GL8P
          source_id: s_3zCeacwcDkrZyMjH7kCBJZ
          stance: supports
          locator: CBDB:220261
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_3zCeacwcDkrZyMjH7kCBJZ
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王麟（220261）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220261&o=json
            external_identifier: CBDB:220261
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:00:09.445Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_os2RZc3BC6SB9Kd9KZtWEX
        subject_person_id: p_dFBcsKbnFVcHN4YTvXeRwY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王麟
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_YkHDUzRTEMdNfa54tQeVmx
          claim_id: c_os2RZc3BC6SB9Kd9KZtWEX
          source_id: s_WQuJfewNt1rKQX9Pq57QHd
          stance: supports
          locator: Q45450873
          quotation: null
          interpretation_note: null
          source:
            id: s_WQuJfewNt1rKQX9Pq57QHd
            source_type: api_record
            title: 维基数据：王麟（Q45450873）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45450873
            external_identifier: Q45450873
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:09.271Z
            metadata_json: null
        - id: cs_bK6XAdUgLCVn4rjrPR7E1U
          claim_id: c_os2RZc3BC6SB9Kd9KZtWEX
          source_id: s_3zCeacwcDkrZyMjH7kCBJZ
          stance: supports
          locator: Q45450873
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_D39qRDRw1F2kLMDLbM7at4
        subject_person_id: p_XwKHLH17io2m6CKt414qzT
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_dFBcsKbnFVcHN4YTvXeRwY
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Nywd4GBn5gqwJ8VHyUtjw8
          claim_id: c_D39qRDRw1F2kLMDLbM7at4
          source_id: s_WQuJfewNt1rKQX9Pq57QHd
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source: &a2
            id: s_WQuJfewNt1rKQX9Pq57QHd
            source_type: api_record
            title: 维基数据：王麟（Q45450873）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45450873
            external_identifier: Q45450873
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:09.271Z
            metadata_json: null
        - id: cs_6JaqJygAi633QQJiNUC7uF
          claim_id: c_D39qRDRw1F2kLMDLbM7at4
          source_id: s_FJJor8JkBzSB2pWbDy1n7F
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_FJJor8JkBzSB2pWbDy1n7F
            source_type: api_record
            title: 维基数据：王伍（Q45601163）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45601163
            external_identifier: Q45601163
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:19.152Z
            metadata_json: null
      object_person:
        id: p_XwKHLH17io2m6CKt414qzT
        status: active
        display_name: 王伍
        merged_into_person_id: null
  children:
    - claim:
        id: c_Nw61d7HJToYHaXgVDnf18a
        subject_person_id: p_dFBcsKbnFVcHN4YTvXeRwY
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_2XaF6KrMwGSDeaU76DAGrz
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_CwrPUqKsuoEL4C5dNUuhKS
          claim_id: c_Nw61d7HJToYHaXgVDnf18a
          source_id: s_WQuJfewNt1rKQX9Pq57QHd
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_WQuJfewNt1rKQX9Pq57QHd
            source_type: api_record
            title: 维基数据：王麟（Q45450873）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45450873
            external_identifier: Q45450873
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:09.271Z
            metadata_json: null
        - id: cs_stD4KTJQYPCcozLam7NEjU
          claim_id: c_Nw61d7HJToYHaXgVDnf18a
          source_id: s_8v97D6aRgy5zRhLaWeAPgN
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_8v97D6aRgy5zRhLaWeAPgN
            source_type: api_record
            title: 维基数据：王重光（Q15935070）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15935070
            external_identifier: Q15935070
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:48:33.095Z
            metadata_json: null
      object_person:
        id: p_2XaF6KrMwGSDeaU76DAGrz
        status: active
        display_name: 王重光
        merged_into_person_id: null
    - claim:
        id: c_17QZSPwXaa7Hizzokvq4X7
        subject_person_id: p_dFBcsKbnFVcHN4YTvXeRwY
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_CVwNugtPLMKx2eABoAcjQ3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Tbau1mBgUSQT1qEzpBLxzA
          claim_id: c_17QZSPwXaa7Hizzokvq4X7
          source_id: s_WQuJfewNt1rKQX9Pq57QHd
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source: *a2
        - id: cs_kgUa6m5DKzx92d9dWUuMGM
          claim_id: c_17QZSPwXaa7Hizzokvq4X7
          source_id: s_BaAZc4Uf49RJDM6y27MpqX
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_BaAZc4Uf49RJDM6y27MpqX
            source_type: api_record
            title: 维基数据：王耿光（Q45610509）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45610509
            external_identifier: Q45610509
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:20.507Z
            metadata_json: null
      object_person:
        id: p_CVwNugtPLMKx2eABoAcjQ3
        status: active
        display_name: 王耿光
        merged_into_person_id: null
    - claim:
        id: c_bKD0_FwFXiLSji31Zh2HQb
        subject_person_id: p_dFBcsKbnFVcHN4YTvXeRwY
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_61kjaaMY9u9B6Ma71PVpWz
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Fg2DyI09cw-uGGHnf2TpPB
          claim_id: c_bKD0_FwFXiLSji31Zh2HQb
          source_id: s_SGLbQhoGgUhBdb_A_rFm0-
          stance: supports
          locator: CBDB：兄弟 王重光（126622）之父／母 王麟
          quotation: null
          interpretation_note: 由兄弟关系推断：王國光 与 王重光 为同胞（CBDB 记「兄」），王重光 之父／母即 王國光 之父／母。
          source:
            id: s_SGLbQhoGgUhBdb_A_rFm0-
            source_type: api_record
            title: 中国历代人物传记资料库：王國光（CBDB 302578）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302578&o=json
            external_identifier: CBDB:302578
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_61kjaaMY9u9B6Ma71PVpWz
        status: active
        display_name: 王國光
        merged_into_person_id: null
    - claim:
        id: c_c6uQ7UDeMhE_ew2OzlS1V9
        subject_person_id: p_dFBcsKbnFVcHN4YTvXeRwY
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_Gi48MNHtxeTJW8qw2951CB
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tls3dpltl_xBrDAyxMWhbr
          claim_id: c_c6uQ7UDeMhE_ew2OzlS1V9
          source_id: s_1bI4vZDxGzcV__G8xqYSwC
          stance: supports
          locator: CBDB：兄弟 王重光（126622）之父／母 王麟
          quotation: null
          interpretation_note: 由兄弟关系推断：王文光 与 王重光 为同胞（CBDB 记「兄」），王重光 之父／母即 王文光 之父／母。
          source:
            id: s_1bI4vZDxGzcV__G8xqYSwC
            source_type: api_record
            title: 中国历代人物传记资料库：王文光（CBDB 302577）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302577&o=json
            external_identifier: CBDB:302577
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Gi48MNHtxeTJW8qw2951CB
        status: active
        display_name: 王文光
        merged_into_person_id: null
    - claim:
        id: c_ULaJrG3WlPBTStjYpcIr7F
        subject_person_id: p_dFBcsKbnFVcHN4YTvXeRwY
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_hDyZQSHWHsFFPKm2JctusX
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iu3cqLnWSk7S6fbsgQoCuF
          claim_id: c_ULaJrG3WlPBTStjYpcIr7F
          source_id: s_Ic4H41V8EoY7NeRY5Hg9ae
          stance: supports
          locator: CBDB：兄弟 王重光（126622）之父／母 王麟
          quotation: null
          interpretation_note: 由兄弟关系推断：王恩光 与 王重光 为同胞（CBDB 记「兄」），王重光 之父／母即 王恩光 之父／母。
          source:
            id: s_Ic4H41V8EoY7NeRY5Hg9ae
            source_type: api_record
            title: 中国历代人物传记资料库：王恩光（CBDB 302576）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302576&o=json
            external_identifier: CBDB:302576
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_hDyZQSHWHsFFPKm2JctusX
        status: active
        display_name: 王恩光
        merged_into_person_id: null
    - claim:
        id: c_HxaiEf_AZFc85O5uChSCYA
        subject_person_id: p_dFBcsKbnFVcHN4YTvXeRwY
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_ifmJrvRgbTeXUGYWBAdKAv
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RCPsj_h_rW51qYgirCu1W-
          claim_id: c_HxaiEf_AZFc85O5uChSCYA
          source_id: s_6hRD_t8oL4N8GKl--ArcEx
          stance: supports
          locator: CBDB：兄弟 王重光（126622）之父／母 王麟
          quotation: null
          interpretation_note: 由兄弟关系推断：王近光 与 王重光 为同胞（CBDB 记「兄」），王重光 之父／母即 王近光 之父／母。
          source:
            id: s_6hRD_t8oL4N8GKl--ArcEx
            source_type: api_record
            title: 中国历代人物传记资料库：王近光（CBDB 302579）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302579&o=json
            external_identifier: CBDB:302579
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ifmJrvRgbTeXUGYWBAdKAv
        status: active
        display_name: 王近光
        merged_into_person_id: null
    - claim:
        id: c_EHHNoc6WB5TJ0VFSfj6YMs
        subject_person_id: p_dFBcsKbnFVcHN4YTvXeRwY
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_zUY4r4df4r2Qz1qyzFCgeP
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZrZcgHV_yNxI9u-irmc3Py
          claim_id: c_EHHNoc6WB5TJ0VFSfj6YMs
          source_id: s_1dDPRHCbuXntFarwIutTVW
          stance: supports
          locator: CBDB：兄弟 王重光（126622）之父／母 王麟
          quotation: null
          interpretation_note: 由兄弟关系推断：王觀光 与 王重光 为同胞（CBDB 记「兄」），王重光 之父／母即 王觀光 之父／母。
          source:
            id: s_1dDPRHCbuXntFarwIutTVW
            source_type: api_record
            title: 中国历代人物传记资料库：王觀光（CBDB 302580）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302580&o=json
            external_identifier: CBDB:302580
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_zUY4r4df4r2Qz1qyzFCgeP
        status: active
        display_name: 王觀光
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_P17Pj_2krE8r923oIzfvdK
        subject_person_id: p_dFBcsKbnFVcHN4YTvXeRwY
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_mNbLtBp7NLKek2NHmVT5fp
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__OUH7KFisnfMSIxF4-4c71
          claim_id: c_P17Pj_2krE8r923oIzfvdK
          source_id: s_3zCeacwcDkrZyMjH7kCBJZ
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第二百三十二名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_mNbLtBp7NLKek2NHmVT5fp
        status: active
        display_name: 王象乾
        merged_into_person_id: null
    - claim:
        id: c_LPlgnMFus4S4GK2p24QtGH
        subject_person_id: p_dFBcsKbnFVcHN4YTvXeRwY
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_1vwHH8EjSEP1q2oifpwF8P
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_M66q6aSYDZbgu8fri12Wsj
          claim_id: c_LPlgnMFus4S4GK2p24QtGH
          source_id: s_3zCeacwcDkrZyMjH7kCBJZ
          stance: supports
          locator: 萬曆三十八年庚戌科序齒錄:一卷，第三甲第二百四十名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_1vwHH8EjSEP1q2oifpwF8P
        status: active
        display_name: 王象春
        merged_into_person_id: null
    - claim:
        id: c_7MzhQ_wgdLFEWEMwoevtDD
        subject_person_id: p_dFBcsKbnFVcHN4YTvXeRwY
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_UCuWmdu88wkXMEGK9geKmL
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_W7CSaf4PMQbVAuBx9ATPH1
          claim_id: c_7MzhQ_wgdLFEWEMwoevtDD
          source_id: s_3zCeacwcDkrZyMjH7kCBJZ
          stance: supports
          locator: 萬曆八年進士登科錄:一卷，第三甲第八十七名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_UCuWmdu88wkXMEGK9geKmL
        status: active
        display_name: 王象蒙
        merged_into_person_id: null
  other: []
---

# 王麟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王麟，明人物。隆慶五年進士，曾任都察院右副都御史、戶部主事、戶部左侍郎。（中国历代人物传记资料库 CBDB 220261） | accepted |
| name.primary | 王麟 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_XwKHLH17io2m6CKt414qzT | 王伍 | accepted |
| children | p_2XaF6KrMwGSDeaU76DAGrz | 王重光 | accepted |
| children | p_CVwNugtPLMKx2eABoAcjQ3 | 王耿光 | accepted |
| children | p_61kjaaMY9u9B6Ma71PVpWz | 王國光 | accepted |
| children | p_Gi48MNHtxeTJW8qw2951CB | 王文光 | accepted |
| children | p_hDyZQSHWHsFFPKm2JctusX | 王恩光 | accepted |
| children | p_ifmJrvRgbTeXUGYWBAdKAv | 王近光 | accepted |
| children | p_zUY4r4df4r2Qz1qyzFCgeP | 王觀光 | accepted |
| descendants | p_mNbLtBp7NLKek2NHmVT5fp | 王象乾 | accepted |
| descendants | p_1vwHH8EjSEP1q2oifpwF8P | 王象春 | accepted |
| descendants | p_UCuWmdu88wkXMEGK9geKmL | 王象蒙 | accepted |

## 外部来源

- [维基数据：王耿光（Q45610509）](https://www.wikidata.org/wiki/Q45610509)
- [维基数据：王麟（Q45450873）](https://www.wikidata.org/wiki/Q45450873)
- [维基数据：王伍（Q45601163）](https://www.wikidata.org/wiki/Q45601163)
- [维基数据：王重光（Q15935070）](https://www.wikidata.org/wiki/Q15935070)
- [中国历代人物传记资料库：王恩光（CBDB 302576）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302576&o=json)
- [中国历代人物传记资料库：王觀光（CBDB 302580）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302580&o=json)
- [中国历代人物传记资料库：王國光（CBDB 302578）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302578&o=json)
- [中国历代人物传记资料库：王近光（CBDB 302579）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302579&o=json)
- [中国历代人物传记资料库：王文光（CBDB 302577）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302577&o=json)
- [CBDB 中国历代人物传记资料库：王麟（220261）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220261&o=json)
