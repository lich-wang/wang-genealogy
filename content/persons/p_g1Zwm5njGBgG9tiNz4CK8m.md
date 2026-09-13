---
schema: wang-person/v1
id: p_g1Zwm5njGBgG9tiNz4CK8m
status: active
merged_into: null
display_name: 王全斌
cbdb_id: 11689
revision: 4
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QJdMmqM5nhHV4R2WV8Ymb5
        subject_person_id: p_g1Zwm5njGBgG9tiNz4CK8m
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王全斌，史料所见人物。本项目依据《中国历代人物传记资料库：王全斌（CBDB 11689）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_KfgcVzP-VekSa_Oq-RlKjL
          claim_id: c_QJdMmqM5nhHV4R2WV8Ymb5
          source_id: s_Fdf7Gn5JLEsZX3eJwKcsbG
          stance: supports
          locator: CBDB:11689
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_Fdf7Gn5JLEsZX3eJwKcsbG
            source_type: api_record
            title: 中国历代人物传记资料库：王全斌（CBDB 11689）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=11689&o=json
            external_identifier: CBDB:11689
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:44.071Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Q4M8xQqMzGeqS2E5GKmHPq
        subject_person_id: p_g1Zwm5njGBgG9tiNz4CK8m
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王全斌
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_dhgvhFEqfj3xPXeZ6K2xra
          claim_id: c_Q4M8xQqMzGeqS2E5GKmHPq
          source_id: s_Fdf7Gn5JLEsZX3eJwKcsbG
          stance: supports
          locator: CBDB:11689
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（901-1000）｜历史性依据：CBDB 朝代 = 宋
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_3oOaVa-EBf6gaMYttbh0nf
        subject_person_id: p_g1Zwm5njGBgG9tiNz4CK8m
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_G2nFDbvnbsRwbtBHUM7UBY
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_36Wb3W1PUbhY8hQNhMIMij
          claim_id: c_3oOaVa-EBf6gaMYttbh0nf
          source_id: s_5X9rvCY3C5oEeiEJxBUPxN
          stance: supports
          locator: 宋人傳記資料索引(電子版)，1477：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_5X9rvCY3C5oEeiEJxBUPxN
            source_type: api_record
            title: 中国历代人物传记资料库：王永昌（CBDB 17242）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17242&o=json
            external_identifier: CBDB:17242
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.657Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_G2nFDbvnbsRwbtBHUM7UBY
        status: active
        display_name: 王永昌
        merged_into_person_id: null
    - claim:
        id: c_LdxE1dfnmwu8IW9kRFlILC
        subject_person_id: p_g1Zwm5njGBgG9tiNz4CK8m
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_oF3PDnVnW73ydu6324XHnB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BOcTlfHEV5jOb0Yzu99NZX
          claim_id: c_LdxE1dfnmwu8IW9kRFlILC
          source_id: s_Fdf7Gn5JLEsZX3eJwKcsbG
          stance: supports
          locator: 宋人傳記資料索引(電子版)，2026：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: &a2
            id: s_Fdf7Gn5JLEsZX3eJwKcsbG
            source_type: api_record
            title: 中国历代人物传记资料库：王全斌（CBDB 11689）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=11689&o=json
            external_identifier: CBDB:11689
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:44.071Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_oF3PDnVnW73ydu6324XHnB
        status: active
        display_name: 王審銳
        merged_into_person_id: null
    - claim:
        id: c_sCyEeYUgTlfjDqEEHJ7ra3
        subject_person_id: p_g1Zwm5njGBgG9tiNz4CK8m
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5iuF56QtzML5N9vH86cANF
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Nu538H_hO4jSGQZeJP9f8N
          claim_id: c_sCyEeYUgTlfjDqEEHJ7ra3
          source_id: s_Fdf7Gn5JLEsZX3eJwKcsbG
          stance: supports
          locator: 宋人傳記資料索引(電子版)，2025：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a2
      object_person:
        id: p_5iuF56QtzML5N9vH86cANF
        status: active
        display_name: 王審鈞
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_lw7PReM5HO93hBLAfMM1e-
        subject_person_id: p_g1Zwm5njGBgG9tiNz4CK8m
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_QoJPmnH2p3TN2WeA18wP8z
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WUG2eBeyqcbUj4YJkrdtUI
          claim_id: c_lw7PReM5HO93hBLAfMM1e-
          source_id: s_1Zsci6iF4Arcot2TKBLMBo
          stance: supports
          locator: 宋人傳記資料索引(電子版)：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_1Zsci6iF4Arcot2TKBLMBo
            source_type: api_record
            title: 中国历代人物传记资料库：王凱（CBDB 7379）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=7379&o=json
            external_identifier: CBDB:7379
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.481Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_QoJPmnH2p3TN2WeA18wP8z
        status: active
        display_name: 王凱
        merged_into_person_id: null
    - claim:
        id: c_bVbAIhcrT-jY272YR8CNTH
        subject_person_id: p_g1Zwm5njGBgG9tiNz4CK8m
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_TG677A2uqsLQn3jRYXYFJs
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZTNd9JPwh8HtBPO7QUJCaz
          claim_id: c_bVbAIhcrT-jY272YR8CNTH
          source_id: s_Fdf7Gn5JLEsZX3eJwKcsbG
          stance: supports
          locator: 宋人傳記資料索引(電子版)，987：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a2
      object_person:
        id: p_TG677A2uqsLQn3jRYXYFJs
        status: active
        display_name: 王彭
        merged_into_person_id: null
  other: []
---

# 王全斌

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王全斌，史料所见人物。本项目依据《中国历代人物传记资料库：王全斌（CBDB 11689）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王全斌 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_G2nFDbvnbsRwbtBHUM7UBY | 王永昌 | accepted |
| children | p_oF3PDnVnW73ydu6324XHnB | 王審銳 | accepted |
| children | p_5iuF56QtzML5N9vH86cANF | 王審鈞 | accepted |
| descendants | p_QoJPmnH2p3TN2WeA18wP8z | 王凱 | accepted |
| descendants | p_TG677A2uqsLQn3jRYXYFJs | 王彭 | accepted |

## 外部来源

- [中国历代人物传记资料库：王凱（CBDB 7379）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=7379&o=json)
- [中国历代人物传记资料库：王全斌（CBDB 11689）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=11689&o=json)
- [中国历代人物传记资料库：王永昌（CBDB 17242）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17242&o=json)
