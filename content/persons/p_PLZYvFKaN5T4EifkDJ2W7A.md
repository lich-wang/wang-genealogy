---
schema: wang-person/v1
id: p_PLZYvFKaN5T4EifkDJ2W7A
status: active
merged_into: null
display_name: 王守業
cbdb_id: 219514
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_mcP8MQF5vdxCGyaZHu36xH
        subject_person_id: p_PLZYvFKaN5T4EifkDJ2W7A
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王守業，明人物。萬曆八年進士，籍贯溧水，曾任訓導。（中国历代人物传记资料库 CBDB 219514）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_kpv7tSf8R2k2K6CY5NWA3J
          claim_id: c_mcP8MQF5vdxCGyaZHu36xH
          source_id: s_wSB3LAVhWLeZ739JHeTtav
          stance: supports
          locator: CBDB:219514
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_wSB3LAVhWLeZ739JHeTtav
            source_type: api_record
            title: 中国历代人物传记资料库：王守業（CBDB 219514）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=219514&o=json
            external_identifier: CBDB:219514
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:56.502Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_KeRDaJmCEay4u3gXvCxFqT
        subject_person_id: p_PLZYvFKaN5T4EifkDJ2W7A
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王守業
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_kAAZCKQW51u1MiwxiLyZKN
          claim_id: c_KeRDaJmCEay4u3gXvCxFqT
          source_id: s_wSB3LAVhWLeZ739JHeTtav
          stance: supports
          locator: CBDB:219514
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2501-2600）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_byY0WAPwj5pl1ABYDfZvGZ
        subject_person_id: p_ds9RMJLAa1YbfRpjpasrUW
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_PLZYvFKaN5T4EifkDJ2W7A
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cebaMdBlbDV6h10APO8Rul
          claim_id: c_byY0WAPwj5pl1ABYDfZvGZ
          source_id: s_pkExdS1vZltPbNdow4F8IA
          stance: supports
          locator: CBDB：兄弟 王守素（206541）之父／母 王鼐
          quotation: null
          interpretation_note: 由兄弟关系推断：王守業 与 王守素 为同胞（CBDB 记「弟」），王守素 之父／母即 王守業 之父／母。
          source:
            id: s_pkExdS1vZltPbNdow4F8IA
            source_type: api_record
            title: 中国历代人物传记资料库：王守業（CBDB 219514）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=219514&o=json
            external_identifier: CBDB:219514
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ds9RMJLAa1YbfRpjpasrUW
        status: active
        display_name: 王鼐
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_gc2TyfUVho1t9plip7UgW-
        subject_person_id: p_PLZYvFKaN5T4EifkDJ2W7A
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_TEYvtaRNz7eTYDE23W5t5H
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gSbNT3DsQRZOUqLNGlCFPx
          claim_id: c_gc2TyfUVho1t9plip7UgW-
          source_id: s_pkExdS1vZltPbNdow4F8IA
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 206541 王守素）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_pkExdS1vZltPbNdow4F8IA
            source_type: api_record
            title: 中国历代人物传记资料库：王守業（CBDB 219514）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=219514&o=json
            external_identifier: CBDB:219514
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_TEYvtaRNz7eTYDE23W5t5H
        status: active
        display_name: 王守素
        merged_into_person_id: null
---

# 王守業

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王守業，明人物。萬曆八年進士，籍贯溧水，曾任訓導。（中国历代人物传记资料库 CBDB 219514） | accepted |
| name.primary | 王守業 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ds9RMJLAa1YbfRpjpasrUW | 王鼐 | accepted |
| other | p_TEYvtaRNz7eTYDE23W5t5H | 王守素 | accepted |

## 外部来源

- [中国历代人物传记资料库：王守業（CBDB 219514）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=219514&o=json)
