---
schema: wang-person/v1
id: p_dRVmEZ68zjbicBeGc6ycW6
status: active
merged_into: null
display_name: 王贍
cbdb_id: 45833
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_e299rNxXG51ziTUYB6jgCY
        subject_person_id: p_dRVmEZ68zjbicBeGc6ycW6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王贍（卒于1099年），宋人物。籍贯寧遠，曾任皇城使、禮賓使。（中国历代人物传记资料库 CBDB 45833）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_3OKPuZcCGU9W876IGtQ1It
          claim_id: c_e299rNxXG51ziTUYB6jgCY
          source_id: s_bd5jPBZDBSUCC7dHz23x6K
          stance: supports
          locator: CBDB:45833
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_bd5jPBZDBSUCC7dHz23x6K
            source_type: api_record
            title: 中国历代人物传记资料库：王贍（CBDB 45833）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=45833&o=json
            external_identifier: CBDB:45833
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:05.401Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_8idbxEoJgU1NLYEDVVAHZZ
        subject_person_id: p_dRVmEZ68zjbicBeGc6ycW6
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1099年
            calendar_note: CBDB 卒年字段，精度：年
            earliest: 1099-01-01
            latest: 1099-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Y3QL8VTvKFg5qkXwG23ZRi
          claim_id: c_8idbxEoJgU1NLYEDVVAHZZ
          source_id: s_bd5jPBZDBSUCC7dHz23x6K
          stance: supports
          locator: CBDB:45833
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1-100）｜历史性依据：CBDB 卒年 = 1099
          source:
            id: s_bd5jPBZDBSUCC7dHz23x6K
            source_type: api_record
            title: 中国历代人物传记资料库：王贍（CBDB 45833）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=45833&o=json
            external_identifier: CBDB:45833
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:05.401Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_J799LdAPgwD8Js846PFHWt
        subject_person_id: p_dRVmEZ68zjbicBeGc6ycW6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王贍
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_HzpLt62WCg6VRgLQp16RJQ
          claim_id: c_J799LdAPgwD8Js846PFHWt
          source_id: s_bd5jPBZDBSUCC7dHz23x6K
          stance: supports
          locator: CBDB:45833
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1-100）｜历史性依据：CBDB 卒年 = 1099
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_TQpFSmMd5IBEWXHZSNB9B2
        subject_person_id: p_nbBA76J4d7cdNx4kb5xfXu
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_dRVmEZ68zjbicBeGc6ycW6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yeGY-jBgLRDL_FlnwJwVXA
          claim_id: c_TQpFSmMd5IBEWXHZSNB9B2
          source_id: s_bd5jPBZDBSUCC7dHz23x6K
          stance: supports
          locator: 宋人傳記資料索引(電子版)，1299：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_bd5jPBZDBSUCC7dHz23x6K
            source_type: api_record
            title: 中国历代人物传记资料库：王贍（CBDB 45833）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=45833&o=json
            external_identifier: CBDB:45833
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:05.401Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_nbBA76J4d7cdNx4kb5xfXu
        status: active
        display_name: 王君萬
        merged_into_person_id: null
  children:
    - claim:
        id: c_Pr6hC7CvJIiopVBbXAFToH
        subject_person_id: p_dRVmEZ68zjbicBeGc6ycW6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_YV8YmoA2TvybxG3V748AUq
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_q1aLWiLyo94BkrdvpPECeI
          claim_id: c_Pr6hC7CvJIiopVBbXAFToH
          source_id: s_YMzpnri64aVuPGZEQbiBBf
          stance: supports
          locator: 宋史：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_YMzpnri64aVuPGZEQbiBBf
            source_type: api_record
            title: 中国历代人物传记资料库：王珏（CBDB 119726）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=119726&o=json
            external_identifier: CBDB:119726
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.887Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_YV8YmoA2TvybxG3V748AUq
        status: active
        display_name: 王珏
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王贍

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王贍（卒于1099年），宋人物。籍贯寧遠，曾任皇城使、禮賓使。（中国历代人物传记资料库 CBDB 45833） | accepted |
| death.date | 1099年 | accepted |
| name.primary | 王贍 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_nbBA76J4d7cdNx4kb5xfXu | 王君萬 | accepted |
| children | p_YV8YmoA2TvybxG3V748AUq | 王珏 | accepted |

## 外部来源

- [中国历代人物传记资料库：王珏（CBDB 119726）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=119726&o=json)
- [中国历代人物传记资料库：王贍（CBDB 45833）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=45833&o=json)
