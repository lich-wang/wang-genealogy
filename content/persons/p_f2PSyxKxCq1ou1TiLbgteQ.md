---
schema: wang-person/v1
id: p_f2PSyxKxCq1ou1TiLbgteQ
status: active
merged_into: null
display_name: 王球
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Q4dScvWJX4QkttrmPmycZy
        subject_person_id: p_f2PSyxKxCq1ou1TiLbgteQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王球
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qLdNtn1HQAE5V5HCvBVzdb
          claim_id: c_Q4dScvWJX4QkttrmPmycZy
          source_id: s_gDNntX3A65YHmWJCeqcGBQ
          stance: supports
          locator: CBDB:1769
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（1769）
          source: &a1
            id: s_gDNntX3A65YHmWJCeqcGBQ
            source_type: api_record
            title: 中国历代人物传记资料库：王球（CBDB 1769）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1769&o=json
            external_identifier: CBDB:1769
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.216Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EkUDxn2P9BAS2QGh3mzQMN
        subject_person_id: p_f2PSyxKxCq1ou1TiLbgteQ
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
        - id: cs_gsYyHeWFoh13mPoPA8fg2X
          claim_id: c_EkUDxn2P9BAS2QGh3mzQMN
          source_id: s_gDNntX3A65YHmWJCeqcGBQ
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_odGmFFygD6ckPOzNg9wNrh
        subject_person_id: p_BsUPyN3PgHdrLvMeySeRLR
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_f2PSyxKxCq1ou1TiLbgteQ
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sRhMZOJIz0yPXl_FnjyuOo
          claim_id: c_odGmFFygD6ckPOzNg9wNrh
          source_id: s_UfMwzBzQdJFPXQcTGd87aq
          stance: supports
          locator: CBDB 双向互证（孫 王球 ⇄ 祖父 王贄）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_UfMwzBzQdJFPXQcTGd87aq
            source_type: api_record
            title: 中国历代人物传记资料库：王贄（CBDB 1781）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1781&o=json
            external_identifier: CBDB:1781
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.243Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_BsUPyN3PgHdrLvMeySeRLR
        status: active
        display_name: 王贄
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王球

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王球 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_BsUPyN3PgHdrLvMeySeRLR | 王贄 | accepted |

## 外部来源

- [中国历代人物传记资料库：王球（CBDB 1769）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1769&o=json)
- [中国历代人物传记资料库：王贄（CBDB 1781）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1781&o=json)
