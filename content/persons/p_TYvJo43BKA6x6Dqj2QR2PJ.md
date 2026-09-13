---
schema: wang-person/v1
id: p_TYvJo43BKA6x6Dqj2QR2PJ
status: active
merged_into: null
display_name: 王允濟
cbdb_id: 23651
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZoTH5xgvcuHFMyXuzP9Tbh
        subject_person_id: p_TYvJo43BKA6x6Dqj2QR2PJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王允濟，宋人物。籍贯錢塘，入仕進士。（中国历代人物传记资料库 CBDB 23651）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_G8f81f2DmRsIpueGBmbR1f
          claim_id: c_ZoTH5xgvcuHFMyXuzP9Tbh
          source_id: s_QqVFpV8mwtr6wVm6FsLqiB
          stance: supports
          locator: CBDB:23651
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_QqVFpV8mwtr6wVm6FsLqiB
            source_type: api_record
            title: 中国历代人物传记资料库：王允濟（CBDB 23651）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23651&o=json
            external_identifier: CBDB:23651
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:45.019Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_McBcLxbRg8KytnVB7yiQCu
        subject_person_id: p_TYvJo43BKA6x6Dqj2QR2PJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王允濟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_33BZ7CRhDSKFsbF3SQGHX4
          claim_id: c_McBcLxbRg8KytnVB7yiQCu
          source_id: s_QqVFpV8mwtr6wVm6FsLqiB
          stance: supports
          locator: CBDB:23651
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1001-1100）｜历史性依据：CBDB 朝代 = 宋
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_3ucohSGV0I8zmOyO_gdat-
        subject_person_id: p_Jzy9nZapWwZfBJyYh44MuQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_TYvJo43BKA6x6Dqj2QR2PJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4RSXCpvrvaSQdGbXhZVkeT
          claim_id: c_3ucohSGV0I8zmOyO_gdat-
          source_id: s_GaBEDkbrHxJxk3yFFC3Eei
          stance: supports
          locator: CBDB 双向互证（子 王允濟 ⇄ 父 王琮）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_GaBEDkbrHxJxk3yFFC3Eei
            source_type: api_record
            title: 中国历代人物传记资料库：王琮（CBDB 23650）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23650&o=json
            external_identifier: CBDB:23650
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.889Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Jzy9nZapWwZfBJyYh44MuQ
        status: active
        display_name: 王琮
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王允濟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王允濟，宋人物。籍贯錢塘，入仕進士。（中国历代人物传记资料库 CBDB 23651） | accepted |
| name.primary | 王允濟 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Jzy9nZapWwZfBJyYh44MuQ | 王琮 | accepted |

## 外部来源

- [中国历代人物传记资料库：王琮（CBDB 23650）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23650&o=json)
- [中国历代人物传记资料库：王允濟（CBDB 23651）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23651&o=json)
