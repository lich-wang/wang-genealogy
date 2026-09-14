---
schema: wang-person/v1
id: p_yPDG6qr1bXraqFkBrL15Y6
status: active
merged_into: null
display_name: 王光宇
revision: 8
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_64edeag7T2NdU1rZw7sqyM
        subject_person_id: p_yPDG6qr1bXraqFkBrL15Y6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王光宇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_VVaoEYiWZvANPAX61tufpV
          claim_id: c_64edeag7T2NdU1rZw7sqyM
          source_id: s_hGG9frsW4BTFPj6nEKs31P
          stance: supports
          locator: CBDB:202958
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（202958）
          source: &a1
            id: s_hGG9frsW4BTFPj6nEKs31P
            source_type: api_record
            title: 中国历代人物传记资料库：王光宇（CBDB 202958）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202958&o=json
            external_identifier: CBDB:202958
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.766Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_5J6kKvXV2QStUfY2WV6QHo
        subject_person_id: p_yPDG6qr1bXraqFkBrL15Y6
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1510年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7s29LwGR71X6JkpoLXFo4b
          claim_id: c_5J6kKvXV2QStUfY2WV6QHo
          source_id: s_hGG9frsW4BTFPj6nEKs31P
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
        id: c_KNXUNfCUg1ZSi5KTYLUk5e
        subject_person_id: p_yPDG6qr1bXraqFkBrL15Y6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王光宇（生于1510年），明人物。明清進士進士，籍贯臨晉，入仕進士，曾任分巡道。（中国历代人物传记资料库 CBDB 202958）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_RMWemxGi9uUc8zQGPY1x1c
          claim_id: c_KNXUNfCUg1ZSi5KTYLUk5e
          source_id: s_hGG9frsW4BTFPj6nEKs31P
          stance: supports
          locator: CBDB:202958
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_N2IilvP6o6Vx5R8ivYlIjv
        subject_person_id: p_epYzvTR9hN3wwDSSzwW3ua
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_yPDG6qr1bXraqFkBrL15Y6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HB7JY8kBjRNgIYvzfNZBYM
          claim_id: c_N2IilvP6o6Vx5R8ivYlIjv
          source_id: s_NsU6DF3ZC5DB9uJmv2KDuW
          stance: supports
          locator: 嘉靖十四年進士登科錄:一卷，第三甲第一百二十二名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_NsU6DF3ZC5DB9uJmv2KDuW
            source_type: api_record
            title: 中国历代人物传记资料库：王謙益（CBDB 297373）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297373&o=json
            external_identifier: CBDB:297373
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.571Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_epYzvTR9hN3wwDSSzwW3ua
        status: active
        display_name: 王謙益
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_vrP4Sj38Deqcgka-4amMmx
        subject_person_id: p_Kv4LMMVfgEU1T319wNAXqE
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_yPDG6qr1bXraqFkBrL15Y6
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Yxd2lwvsHC87hYD8Q0x4jC
          claim_id: c_vrP4Sj38Deqcgka-4amMmx
          source_id: s_KpasLPaTVNB5aKq5WpyYPm
          stance: supports
          locator: 嘉靖十四年進士登科錄:一卷，第三甲第一百二十二名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_KpasLPaTVNB5aKq5WpyYPm
            source_type: api_record
            title: 中国历代人物传记资料库：王進（CBDB 297372）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297372&o=json
            external_identifier: CBDB:297372
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.570Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Kv4LMMVfgEU1T319wNAXqE
        status: active
        display_name: 王進
        merged_into_person_id: null
    - claim:
        id: c_ItBZ_SiMEENwg2-YCd4mcL
        subject_person_id: p_pzge2b5NR4hBamAocAmYqR
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_yPDG6qr1bXraqFkBrL15Y6
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_T61ydH2iRidUUZWOFfkkXE
          claim_id: c_ItBZ_SiMEENwg2-YCd4mcL
          source_id: s_dyTeZAv89hcNNYbDpPHhut
          stance: supports
          locator: 嘉靖十四年進士登科錄:一卷，第三甲第一百二十二名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_dyTeZAv89hcNNYbDpPHhut
            source_type: api_record
            title: 中国历代人物传记资料库：王玘（CBDB 297371）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297371&o=json
            external_identifier: CBDB:297371
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.567Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_pzge2b5NR4hBamAocAmYqR
        status: active
        display_name: 王玘
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_GlNDxqIofHn2jz01TTCkhQ
        subject_person_id: p_1FFsqRFebi26v7Y7w87KMn
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_yPDG6qr1bXraqFkBrL15Y6
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OB5wDa2WMNNRG42eUPpWK4
          claim_id: c_GlNDxqIofHn2jz01TTCkhQ
          source_id: s__P6g7E7KgQXmgxWg4i4Dry
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202958 王光宇）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s__P6g7E7KgQXmgxWg4i4Dry
            source_type: api_record
            title: 中国历代人物传记资料库：王光庭（CBDB 297381）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297381&o=json
            external_identifier: CBDB:297381
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_1FFsqRFebi26v7Y7w87KMn
        status: active
        display_name: 王光庭
        merged_into_person_id: null
    - claim:
        id: c_o2bWLF8KzRnXbS83sEXjPX
        subject_person_id: p_CqdH2vNBX5dBAHtdLtF8hN
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_yPDG6qr1bXraqFkBrL15Y6
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Aun9higfjmdu7hhm2TJl5H
          claim_id: c_o2bWLF8KzRnXbS83sEXjPX
          source_id: s_EZC0-C4HKXIiJEAqWHFyC4
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202958 王光宇）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_EZC0-C4HKXIiJEAqWHFyC4
            source_type: api_record
            title: 中国历代人物传记资料库：王光宙（CBDB 297378）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297378&o=json
            external_identifier: CBDB:297378
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_CqdH2vNBX5dBAHtdLtF8hN
        status: active
        display_name: 王光宙
        merged_into_person_id: null
    - claim:
        id: c_LYUnpRLsmLMskfDwMGmNzY
        subject_person_id: p_V898suxPCSrLXwSuQBHL2A
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_yPDG6qr1bXraqFkBrL15Y6
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3cIMb2GTbt6hMp1sKnddTa
          claim_id: c_LYUnpRLsmLMskfDwMGmNzY
          source_id: s_0DJaVD3Q6MMcBA1L_VtGiG
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202958 王光宇）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_0DJaVD3Q6MMcBA1L_VtGiG
            source_type: api_record
            title: 中国历代人物传记资料库：王光宅（CBDB 297379）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297379&o=json
            external_identifier: CBDB:297379
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_V898suxPCSrLXwSuQBHL2A
        status: active
        display_name: 王光宅
        merged_into_person_id: null
    - claim:
        id: c_qQ6hUtNAE2bvMsp_kv76BM
        subject_person_id: p_n4W76agmMSwS5KaFeJrxVE
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_yPDG6qr1bXraqFkBrL15Y6
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EvWQiV6nLlcbmupg4O7uuj
          claim_id: c_qQ6hUtNAE2bvMsp_kv76BM
          source_id: s_unVr5mrbTD1AFTF45yB5fJ
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 202958 王光宇）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_unVr5mrbTD1AFTF45yB5fJ
            source_type: api_record
            title: 中国历代人物传记资料库：王光世（CBDB 297377）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297377&o=json
            external_identifier: CBDB:297377
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_n4W76agmMSwS5KaFeJrxVE
        status: active
        display_name: 王光世
        merged_into_person_id: null
---

# 王光宇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王光宇 | accepted |
| birth.date | 1510年 | accepted |
| bio.summary | 王光宇（生于1510年），明人物。明清進士進士，籍贯臨晉，入仕進士，曾任分巡道。（中国历代人物传记资料库 CBDB 202958） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_epYzvTR9hN3wwDSSzwW3ua | 王謙益 | accepted |
| ancestors | p_Kv4LMMVfgEU1T319wNAXqE | 王進 | accepted |
| ancestors | p_pzge2b5NR4hBamAocAmYqR | 王玘 | accepted |
| other | p_1FFsqRFebi26v7Y7w87KMn | 王光庭 | accepted |
| other | p_CqdH2vNBX5dBAHtdLtF8hN | 王光宙 | accepted |
| other | p_V898suxPCSrLXwSuQBHL2A | 王光宅 | accepted |
| other | p_n4W76agmMSwS5KaFeJrxVE | 王光世 | accepted |

## 外部来源

- [中国历代人物传记资料库：王光世（CBDB 297377）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297377&o=json)
- [中国历代人物传记资料库：王光庭（CBDB 297381）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297381&o=json)
- [中国历代人物传记资料库：王光宇（CBDB 202958）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202958&o=json)
- [中国历代人物传记资料库：王光宅（CBDB 297379）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297379&o=json)
- [中国历代人物传记资料库：王光宙（CBDB 297378）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297378&o=json)
- [中国历代人物传记资料库：王進（CBDB 297372）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297372&o=json)
- [中国历代人物传记资料库：王玘（CBDB 297371）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297371&o=json)
- [中国历代人物传记资料库：王謙益（CBDB 297373）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297373&o=json)
