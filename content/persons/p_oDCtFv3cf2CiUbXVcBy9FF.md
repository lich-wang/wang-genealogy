---
schema: wang-person/v1
id: p_oDCtFv3cf2CiUbXVcBy9FF
status: active
merged_into: null
display_name: 王廷榦
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_nHtzhEdEYX5HxXcFh6V5Xn
        subject_person_id: p_oDCtFv3cf2CiUbXVcBy9FF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷榦
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8m784mdFRZLGuv2Ug25T6s
          claim_id: c_nHtzhEdEYX5HxXcFh6V5Xn
          source_id: s_1raHT5WktiXo8Cx29ateix
          stance: supports
          locator: CBDB:126553
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126553）
          source: &a1
            id: s_1raHT5WktiXo8Cx29ateix
            source_type: api_record
            title: 中国历代人物传记资料库：王廷榦（CBDB 126553）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126553&o=json
            external_identifier: CBDB:126553
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.021Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_oGNo5Ae6XftjFD7E7FArt2
        subject_person_id: p_oDCtFv3cf2CiUbXVcBy9FF
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1516年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3eE5QJFm6KUcYqcs9Q6a6K
          claim_id: c_oGNo5Ae6XftjFD7E7FArt2
          source_id: s_1raHT5WktiXo8Cx29ateix
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
        id: c_kdzgAStB1eJys9Ecc34AQ1
        subject_person_id: p_oDCtFv3cf2CiUbXVcBy9FF
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
        - id: cs_vYbJzAw6dJ7dZ3L7tWt85M
          claim_id: c_kdzgAStB1eJys9Ecc34AQ1
          source_id: s_1raHT5WktiXo8Cx29ateix
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
        id: c_YILQ7RzAt-O1YkUkB9QI4F
        subject_person_id: p_11RhKLzn2Mi6Moy5jEp4MD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_oDCtFv3cf2CiUbXVcBy9FF
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_32UHQh4Fdj4J7BssaAtSLY
          claim_id: c_YILQ7RzAt-O1YkUkB9QI4F
          source_id: s_5ARCmWyZdEEd1UcgNfncxT
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第六名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_5ARCmWyZdEEd1UcgNfncxT
            source_type: api_record
            title: 中国历代人物传记资料库：王汝猷（CBDB 291880）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291880&o=json
            external_identifier: CBDB:291880
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.365Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_11RhKLzn2Mi6Moy5jEp4MD
        status: active
        display_name: 王汝猷
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王廷榦

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廷榦 | accepted |
| birth.date | 1516年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_11RhKLzn2Mi6Moy5jEp4MD | 王汝猷 | accepted |

## 外部来源

- [中国历代人物传记资料库：王汝猷（CBDB 291880）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291880&o=json)
- [中国历代人物传记资料库：王廷榦（CBDB 126553）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126553&o=json)
