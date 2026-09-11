---
schema: wang-person/v1
id: p_RQNnvu8c2y9N9EYgnmFtCC
status: active
merged_into: null
display_name: 王期古
cbdb_id: 204782
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5zJhWkMDkRY8UCmujAjH1S
        subject_person_id: p_RQNnvu8c2y9N9EYgnmFtCC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王期古（生于1532年），明人物。中国历代人物传记资料库（CBDB）以人物编号 204782 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_yYb-1pVyF_fsMCDj4CLPr6
          claim_id: c_5zJhWkMDkRY8UCmujAjH1S
          source_id: s_vTEotz3xJ459ST4EDWc78v
          stance: supports
          locator: CBDB:204782
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_vTEotz3xJ459ST4EDWc78v
            source_type: api_record
            title: 中国历代人物传记资料库：王期古（CBDB 204782）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204782&o=json
            external_identifier: CBDB:204782
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_ypi7eXyQya7H841mYXqonY
        subject_person_id: p_RQNnvu8c2y9N9EYgnmFtCC
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1532年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1532-01-01
            latest: 1532-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_3tM6cs9STGdAZ26L2y1J3A
          claim_id: c_ypi7eXyQya7H841mYXqonY
          source_id: s_vTEotz3xJ459ST4EDWc78v
          stance: supports
          locator: CBDB:204782
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（701-800）｜历史性依据：CBDB 生年 = 1532
          source:
            id: s_vTEotz3xJ459ST4EDWc78v
            source_type: api_record
            title: 中国历代人物传记资料库：王期古（CBDB 204782）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204782&o=json
            external_identifier: CBDB:204782
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_E34jUEsvqY6j47RPz3rBYd
        subject_person_id: p_RQNnvu8c2y9N9EYgnmFtCC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王期古
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_vpb8WWW9Kkeu9WA2kX3jzQ
          claim_id: c_E34jUEsvqY6j47RPz3rBYd
          source_id: s_vTEotz3xJ459ST4EDWc78v
          stance: supports
          locator: CBDB:204782
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（701-800）｜历史性依据：CBDB 生年 = 1532
          source:
            id: s_vTEotz3xJ459ST4EDWc78v
            source_type: api_record
            title: 中国历代人物传记资料库：王期古（CBDB 204782）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204782&o=json
            external_identifier: CBDB:204782
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_IIKxFUYVQ2jNFiitw3_nAV
        subject_person_id: p_CEMGnZJGkUBUQcSpdxgPnV
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_RQNnvu8c2y9N9EYgnmFtCC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rnZv0S5o9s1WptRo03P3Uz
          claim_id: c_IIKxFUYVQ2jNFiitw3_nAV
          source_id: s_HA313k62mqABMKAfGCy37D
          stance: supports
          locator: 嘉靖三十八年進士登科錄:一卷，第三甲第九名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_HA313k62mqABMKAfGCy37D
            source_type: api_record
            title: 中国历代人物传记资料库：王龍（CBDB 324014）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324014&o=json
            external_identifier: CBDB:324014
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.158Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_CEMGnZJGkUBUQcSpdxgPnV
        status: active
        display_name: 王龍
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王期古

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王期古（生于1532年），明人物。中国历代人物传记资料库（CBDB）以人物编号 204782 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| birth.date | 1532年 | accepted |
| name.primary | 王期古 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_CEMGnZJGkUBUQcSpdxgPnV | 王龍 | accepted |

## 外部来源

- [中国历代人物传记资料库：王龍（CBDB 324014）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324014&o=json)
- [中国历代人物传记资料库：王期古（CBDB 204782）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204782&o=json)
