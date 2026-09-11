---
schema: wang-person/v1
id: p_DV9hi6YABUhE77uo5QhrzJ
status: active
merged_into: null
display_name: 王槐兆
cbdb_id: 299908
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_AAMFxhsv6XW8WmFLdjPQz1
        subject_person_id: p_DV9hi6YABUhE77uo5QhrzJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王槐兆，明人物。中国历代人物传记资料库（CBDB）以人物编号 299908 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_PQcA6rsJ2FSdv6TmY9UrCM
          claim_id: c_AAMFxhsv6XW8WmFLdjPQz1
          source_id: s_aBmEvG2cJF9oQuDmLFDvpr
          stance: supports
          locator: CBDB:299908
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_aBmEvG2cJF9oQuDmLFDvpr
            source_type: api_record
            title: 中国历代人物传记资料库：王槐兆（CBDB 299908）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=299908&o=json
            external_identifier: CBDB:299908
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:04.487Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_nGmg8fEXgKAiomPZFX4tLz
        subject_person_id: p_DV9hi6YABUhE77uo5QhrzJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王槐兆
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Rn8hYr3vrB3vuM3jKyEgyS
          claim_id: c_nGmg8fEXgKAiomPZFX4tLz
          source_id: s_aBmEvG2cJF9oQuDmLFDvpr
          stance: supports
          locator: CBDB:299908
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3501-3600）｜历史性依据：CBDB 朝代 = 明
          source:
            id: s_aBmEvG2cJF9oQuDmLFDvpr
            source_type: api_record
            title: 中国历代人物传记资料库：王槐兆（CBDB 299908）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=299908&o=json
            external_identifier: CBDB:299908
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:04.487Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_xtN5rn9bzUKfcjvUhRhGCH
        subject_person_id: p_DV9hi6YABUhE77uo5QhrzJ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_acwBn4E2ueYuXmC3T9fy34
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SPnE6Q6ym2rhGBIny6Ew9f
          claim_id: c_xtN5rn9bzUKfcjvUhRhGCH
          source_id: s_5kvfUU16b6b7vdckWofLHL
          stance: supports
          locator: 嘉靖十七年進士登科錄:一卷，第三甲第十八名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_5kvfUU16b6b7vdckWofLHL
            source_type: api_record
            title: 中国历代人物传记资料库：王士翹（CBDB 203106）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203106&o=json
            external_identifier: CBDB:203106
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.775Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_acwBn4E2ueYuXmC3T9fy34
        status: active
        display_name: 王士翹
        merged_into_person_id: null
  other: []
---

# 王槐兆

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王槐兆，明人物。中国历代人物传记资料库（CBDB）以人物编号 299908 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王槐兆 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_acwBn4E2ueYuXmC3T9fy34 | 王士翹 | accepted |

## 外部来源

- [中国历代人物传记资料库：王槐兆（CBDB 299908）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=299908&o=json)
- [中国历代人物传记资料库：王士翹（CBDB 203106）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203106&o=json)
