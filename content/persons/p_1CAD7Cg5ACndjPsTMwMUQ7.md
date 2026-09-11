---
schema: wang-person/v1
id: p_1CAD7Cg5ACndjPsTMwMUQ7
status: merged
merged_into: p_SAKZSsVXkQRnwcLYqa1oYe
display_name: 王越
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DKFTWTCvq3ZWN3WDS1aSTq
        subject_person_id: p_1CAD7Cg5ACndjPsTMwMUQ7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王越
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_tVyUkBsvzDnPtV75G8jryJ
          claim_id: c_DKFTWTCvq3ZWN3WDS1aSTq
          source_id: s_qxt5DMMgSNVDRYEUqG9Gbk
          stance: supports
          locator: CBDB:467429
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（467429）
          source: &a1
            id: s_qxt5DMMgSNVDRYEUqG9Gbk
            source_type: api_record
            title: 中国历代人物传记资料库：王越（CBDB 467429）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=467429&o=json
            external_identifier: CBDB:467429
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.026Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_f7ohzhPefnjqNJB6gS1p2r
        subject_person_id: p_1CAD7Cg5ACndjPsTMwMUQ7
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
        - id: cs_HGH1NE58JfMBadVUBjPVSr
          claim_id: c_f7ohzhPefnjqNJB6gS1p2r
          source_id: s_qxt5DMMgSNVDRYEUqG9Gbk
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
        id: c_yRasBDGKYPRv72VbmPfc-S
        subject_person_id: p_6Uj7h3k6AcMQquEzQiGzSE
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1CAD7Cg5ACndjPsTMwMUQ7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GjXgDsoSU8t_Fv_Akj0pbr
          claim_id: c_yRasBDGKYPRv72VbmPfc-S
          source_id: s_NEzjHDBB2Kg1mmKGjUD75D
          stance: supports
          locator: 景泰二年進士登科錄:一卷，第三甲第六名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_NEzjHDBB2Kg1mmKGjUD75D
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王頤（326773）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326773&o=json
            external_identifier: CBDB:326773
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T01:59:33.688Z
            metadata_json: null
      object_person:
        id: p_6Uj7h3k6AcMQquEzQiGzSE
        status: active
        display_name: 王颐
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_f59mcrHIgC1cT678byQnAa
        subject_person_id: p_nbMxKWfrWz4c9en3TGuwmJ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_1CAD7Cg5ACndjPsTMwMUQ7
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Jlwzfa4Z3n7JMCu8mYpGO1
          claim_id: c_f59mcrHIgC1cT678byQnAa
          source_id: s_wKLY4TKnxgLaFf21jYqdjR
          stance: supports
          locator: 景泰二年進士登科錄:一卷，第三甲第六名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_wKLY4TKnxgLaFf21jYqdjR
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王顯道（326551）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326551&o=json
            external_identifier: CBDB:326551
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person:
        id: p_nbMxKWfrWz4c9en3TGuwmJ
        status: active
        display_name: 王显道
        merged_into_person_id: null
  descendants:
    - claim:
        id: c_V0nq7IVQHmkt7sdmaHwt09
        subject_person_id: p_1CAD7Cg5ACndjPsTMwMUQ7
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_7o2TASpnCzbdm18pkh4MB9
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_N7BvqbHFlg7GmRnXd9aDlB
          claim_id: c_V0nq7IVQHmkt7sdmaHwt09
          source_id: s_Eg7rYV1QysKSrKCpqbJW7t
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），11081：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Eg7rYV1QysKSrKCpqbJW7t
            source_type: api_record
            title: 中国历代人物传记资料库：王紹思（CBDB 524789）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=524789&o=json
            external_identifier: CBDB:524789
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:17.868Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_7o2TASpnCzbdm18pkh4MB9
        status: active
        display_name: 王紹思
        merged_into_person_id: null
  other: []
---

# 王越

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王越 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_6Uj7h3k6AcMQquEzQiGzSE | 王颐 | accepted |
| ancestors | p_nbMxKWfrWz4c9en3TGuwmJ | 王显道 | accepted |
| descendants | p_7o2TASpnCzbdm18pkh4MB9 | 王紹思 | accepted |

## 外部来源

- [中国历代人物传记资料库：王紹思（CBDB 524789）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=524789&o=json)
- [中国历代人物传记资料库：王越（CBDB 467429）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=467429&o=json)
- [CBDB 中国历代人物传记资料库：王顯道（326551）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326551&o=json)
- [CBDB 中国历代人物传记资料库：王頤（326773）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326773&o=json)
