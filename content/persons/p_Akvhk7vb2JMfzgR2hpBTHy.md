---
schema: wang-person/v1
id: p_Akvhk7vb2JMfzgR2hpBTHy
status: active
merged_into: null
display_name: 王浦
revision: 8
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_X767NtFFv11YtevqXpv6kU
        subject_person_id: p_Akvhk7vb2JMfzgR2hpBTHy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王浦
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LoN3y3epMn6fkn4Sry3czv
          claim_id: c_X767NtFFv11YtevqXpv6kU
          source_id: s_FfvRYCEMRU5qP63TuKR5SZ
          stance: supports
          locator: CBDB:294329
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（294329）
          source: &a1
            id: s_FfvRYCEMRU5qP63TuKR5SZ
            source_type: api_record
            title: 中国历代人物传记资料库：王浦（CBDB 294329）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294329&o=json
            external_identifier: CBDB:294329
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.447Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_bs2GA4npAtMPQZeQNH2Jok
        subject_person_id: p_Akvhk7vb2JMfzgR2hpBTHy
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王浦，明人物。嘉靖十一年進士，籍贯無錫。（中国历代人物传记资料库 CBDB 294329）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_qLO3uSk29p7Y7fT6PO5xOG
          claim_id: c_bs2GA4npAtMPQZeQNH2Jok
          source_id: s_FfvRYCEMRU5qP63TuKR5SZ
          stance: supports
          locator: CBDB:294329
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
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
          source:
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
      object_person:
        id: p_AKiZ73AHqEtzATAkDq6m9S
        status: active
        display_name: 王瑛
        merged_into_person_id: null
    - claim:
        id: c_LUun7yFgv38Fk2QSWVOZS5
        subject_person_id: p_Akvhk7vb2JMfzgR2hpBTHy
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2nmMHyWojYhzuf8VWXMo75
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BuRivyBIhUgfG1m3VWuxAX
          claim_id: c_LUun7yFgv38Fk2QSWVOZS5
          source_id: s_v-_QQLo9yft8_JIBAU7Tit
          stance: supports
          locator: CBDB：兄弟 王瑛（126750）之父／母 王浦
          quotation: null
          interpretation_note: 由兄弟关系推断：王琨 与 王瑛 为同胞（CBDB 记「兄」），王瑛 之父／母即 王琨 之父／母。
          source:
            id: s_v-_QQLo9yft8_JIBAU7Tit
            source_type: api_record
            title: 中国历代人物传记资料库：王琨（CBDB 294336）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294336&o=json
            external_identifier: CBDB:294336
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_2nmMHyWojYhzuf8VWXMo75
        status: active
        display_name: 王琨
        merged_into_person_id: null
    - claim:
        id: c_1BjNxZby-YfNjbPfyesU_H
        subject_person_id: p_Akvhk7vb2JMfzgR2hpBTHy
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_34xqpNhmzmXMTk6BUFCqCC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_z2Hs3n-OuCqU_MHBP9lL_E
          claim_id: c_1BjNxZby-YfNjbPfyesU_H
          source_id: s_Ia8IrBd6XE9mEIleyiBNxf
          stance: supports
          locator: CBDB：兄弟 王瑛（126750）之父／母 王浦
          quotation: null
          interpretation_note: 由兄弟关系推断：王玲 与 王瑛 为同胞（CBDB 记「兄」），王瑛 之父／母即 王玲 之父／母。
          source:
            id: s_Ia8IrBd6XE9mEIleyiBNxf
            source_type: api_record
            title: 中国历代人物传记资料库：王玲（CBDB 294337）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294337&o=json
            external_identifier: CBDB:294337
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_34xqpNhmzmXMTk6BUFCqCC
        status: active
        display_name: 王玲
        merged_into_person_id: null
    - claim:
        id: c_nypc_nCsLrhA3Kjportjs6
        subject_person_id: p_Akvhk7vb2JMfzgR2hpBTHy
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_54tQEvUmCVraK3tVi5uZxk
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dQIzi5hc2hoinVua9EFhMX
          claim_id: c_nypc_nCsLrhA3Kjportjs6
          source_id: s_T1mQAoJ4D6blez-3zhGBTL
          stance: supports
          locator: CBDB：兄弟 王瑛（126750）之父／母 王浦
          quotation: null
          interpretation_note: 由兄弟关系推断：王環 与 王瑛 为同胞（CBDB 记「弟」），王瑛 之父／母即 王環 之父／母。
          source:
            id: s_T1mQAoJ4D6blez-3zhGBTL
            source_type: api_record
            title: 中国历代人物传记资料库：王環（CBDB 294335）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294335&o=json
            external_identifier: CBDB:294335
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_54tQEvUmCVraK3tVi5uZxk
        status: active
        display_name: 王環
        merged_into_person_id: null
    - claim:
        id: c_xyWcpeSKaQrzx0VQGXAtE5
        subject_person_id: p_Akvhk7vb2JMfzgR2hpBTHy
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7Q4CpSjUFp6tFRpGQNX8nF
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0G77Qg8_5vDTXj2SA44_MP
          claim_id: c_xyWcpeSKaQrzx0VQGXAtE5
          source_id: s_xnZyLGIAv6v4Xw0y-1BSA6
          stance: supports
          locator: CBDB：兄弟 王瑛（126750）之父／母 王浦
          quotation: null
          interpretation_note: 由兄弟关系推断：王瓏 与 王瑛 为同胞（CBDB 记「兄」），王瑛 之父／母即 王瓏 之父／母。
          source:
            id: s_xnZyLGIAv6v4Xw0y-1BSA6
            source_type: api_record
            title: 中国历代人物传记资料库：王瓏（CBDB 294338）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294338&o=json
            external_identifier: CBDB:294338
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_7Q4CpSjUFp6tFRpGQNX8nF
        status: active
        display_name: 王瓏
        merged_into_person_id: null
    - claim:
        id: c_TZNE5BMaW-_pnAeOopJp4C
        subject_person_id: p_Akvhk7vb2JMfzgR2hpBTHy
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_BqxVUTRSmrX33praoogLZo
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Q2nZvq5Sst4lWir18-97pY
          claim_id: c_TZNE5BMaW-_pnAeOopJp4C
          source_id: s_t82DkmTh9NJCfuKGOAxbWR
          stance: supports
          locator: CBDB：兄弟 王瑛（126750）之父／母 王浦
          quotation: null
          interpretation_note: 由兄弟关系推断：王頊 与 王瑛 为同胞（CBDB 记「兄」），王瑛 之父／母即 王頊 之父／母。
          source:
            id: s_t82DkmTh9NJCfuKGOAxbWR
            source_type: api_record
            title: 中国历代人物传记资料库：王頊（CBDB 294339）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294339&o=json
            external_identifier: CBDB:294339
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_BqxVUTRSmrX33praoogLZo
        status: active
        display_name: 王頊
        merged_into_person_id: null
    - claim:
        id: c_xZTocyECtKu0wQKD-vigZZ
        subject_person_id: p_Akvhk7vb2JMfzgR2hpBTHy
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_VPBzVv78CoP5XVnnwvn14Q
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_F1wOe0HgCmDzMzNXi7vOka
          claim_id: c_xZTocyECtKu0wQKD-vigZZ
          source_id: s_vTSLNsM_bkakuNw3_wvqXY
          stance: supports
          locator: CBDB：兄弟 王瑛（126750）之父／母 王浦
          quotation: null
          interpretation_note: 由兄弟关系推断：王瓉 与 王瑛 为同胞（CBDB 记「弟」），王瑛 之父／母即 王瓉 之父／母。
          source:
            id: s_vTSLNsM_bkakuNw3_wvqXY
            source_type: api_record
            title: 中国历代人物传记资料库：王瓉（CBDB 294334）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294334&o=json
            external_identifier: CBDB:294334
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_VPBzVv78CoP5XVnnwvn14Q
        status: active
        display_name: 王瓉
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王浦

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王浦 | accepted |
| bio.summary | 王浦，明人物。嘉靖十一年進士，籍贯無錫。（中国历代人物传记资料库 CBDB 294329） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_AKiZ73AHqEtzATAkDq6m9S | 王瑛 | accepted |
| children | p_2nmMHyWojYhzuf8VWXMo75 | 王琨 | accepted |
| children | p_34xqpNhmzmXMTk6BUFCqCC | 王玲 | accepted |
| children | p_54tQEvUmCVraK3tVi5uZxk | 王環 | accepted |
| children | p_7Q4CpSjUFp6tFRpGQNX8nF | 王瓏 | accepted |
| children | p_BqxVUTRSmrX33praoogLZo | 王頊 | accepted |
| children | p_VPBzVv78CoP5XVnnwvn14Q | 王瓉 | accepted |

## 外部来源

- [中国历代人物传记资料库：王環（CBDB 294335）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294335&o=json)
- [中国历代人物传记资料库：王琨（CBDB 294336）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294336&o=json)
- [中国历代人物传记资料库：王玲（CBDB 294337）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294337&o=json)
- [中国历代人物传记资料库：王瓏（CBDB 294338）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294338&o=json)
- [中国历代人物传记资料库：王浦（CBDB 294329）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294329&o=json)
- [中国历代人物传记资料库：王頊（CBDB 294339）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294339&o=json)
- [中国历代人物传记资料库：王瑛（CBDB 126750）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126750&o=json)
- [中国历代人物传记资料库：王瓉（CBDB 294334）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294334&o=json)
