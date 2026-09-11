---
schema: wang-person/v1
id: p_TG677A2uqsLQn3jRYXYFJs
status: active
merged_into: null
display_name: 王彭
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_xDFtFwohQ6SPHmgue7B9wB
        subject_person_id: p_TG677A2uqsLQn3jRYXYFJs
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_kwvAMFNEpNsesDE1BRPmQy
          claim_id: c_xDFtFwohQ6SPHmgue7B9wB
          source_id: s_TNK1FaDgrsDfksiJtc7iJq
          stance: supports
          locator: CBDB:11691
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（11691）
          source: &a1
            id: s_TNK1FaDgrsDfksiJtc7iJq
            source_type: api_record
            title: 中国历代人物传记资料库：王彭（CBDB 11691）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=11691&o=json
            external_identifier: CBDB:11691
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.571Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_fpFwT3Mvd3atSbRuVRPDZV
        subject_person_id: p_TG677A2uqsLQn3jRYXYFJs
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CkfN5vpZKt6Mts3fj6rN1M
          claim_id: c_fpFwT3Mvd3atSbRuVRPDZV
          source_id: s_TNK1FaDgrsDfksiJtc7iJq
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
        id: c_4-9vs1F09CnFWVfwO1sMDz
        subject_person_id: p_QoJPmnH2p3TN2WeA18wP8z
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_TG677A2uqsLQn3jRYXYFJs
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GGfpDglShaumpv0a_PMlTM
          claim_id: c_4-9vs1F09CnFWVfwO1sMDz
          source_id: s_1Zsci6iF4Arcot2TKBLMBo
          stance: supports
          locator: 宋人傳記資料索引(電子版)，987：子
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
  children:
    - claim:
        id: c_3ev0Q-zrgW5Su1xitHZgZA
        subject_person_id: p_TG677A2uqsLQn3jRYXYFJs
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_zX3iZuoe53FuMaMd8wH2WY
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qsb1RQNvCD56UeEIJzh3N6
          claim_id: c_3ev0Q-zrgW5Su1xitHZgZA
          source_id: s_BqygPZhGhbG1i66s8Xw36n
          stance: supports
          locator: CBDB 双向互证（父 王彭 ⇄ 子 王讜）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_BqygPZhGhbG1i66s8Xw36n
            source_type: api_record
            title: 中国历代人物传记资料库：王讜（CBDB 1889）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1889&o=json
            external_identifier: CBDB:1889
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.376Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_zX3iZuoe53FuMaMd8wH2WY
        status: active
        display_name: 王讜
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
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
          source:
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
        id: p_g1Zwm5njGBgG9tiNz4CK8m
        status: active
        display_name: 王全斌
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王彭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王彭 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_QoJPmnH2p3TN2WeA18wP8z | 王凱 | accepted |
| children | p_zX3iZuoe53FuMaMd8wH2WY | 王讜 | accepted |
| ancestors | p_g1Zwm5njGBgG9tiNz4CK8m | 王全斌 | accepted |

## 外部来源

- [中国历代人物传记资料库：王讜（CBDB 1889）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1889&o=json)
- [中国历代人物传记资料库：王凱（CBDB 7379）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=7379&o=json)
- [中国历代人物传记资料库：王彭（CBDB 11691）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=11691&o=json)
- [中国历代人物传记资料库：王全斌（CBDB 11689）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=11689&o=json)
