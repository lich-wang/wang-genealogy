---
schema: wang-person/v1
id: p_CtzM6SrBC88nz162s91Kx6
status: active
merged_into: null
display_name: 王用官
cbdb_id: 324566
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZLD5oyfW3U87WREcvfpFx3
        subject_person_id: p_CtzM6SrBC88nz162s91Kx6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王用官，明人物。嘉靖三十八年進士，籍贯南充。（中国历代人物传记资料库 CBDB 324566）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_1DJ-T6gXBzGyUERFfkOKml
          claim_id: c_ZLD5oyfW3U87WREcvfpFx3
          source_id: s_2QM2ZVH9uYg16F4Hf9PwQD
          stance: supports
          locator: CBDB:324566
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_2QM2ZVH9uYg16F4Hf9PwQD
            source_type: api_record
            title: 中国历代人物传记资料库：王用官（CBDB 324566）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324566&o=json
            external_identifier: CBDB:324566
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.922Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_4HZ5gxFSd5XVAPjaXbYxvw
        subject_person_id: p_CtzM6SrBC88nz162s91Kx6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王用官
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_6BgNLBprPtwMJnGakJAmN8
          claim_id: c_4HZ5gxFSd5XVAPjaXbYxvw
          source_id: s_2QM2ZVH9uYg16F4Hf9PwQD
          stance: supports
          locator: CBDB:324566
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3801-3900）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ahqxKCC1o0TU9ecvRZyxuz
        subject_person_id: p_oZ4kQSFi4x4MxZ3DEL5Xbj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_CtzM6SrBC88nz162s91Kx6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hif5hdsxaXDHsTzoX8EEAc
          claim_id: c_ahqxKCC1o0TU9ecvRZyxuz
          source_id: s_5IwcKFGZaB3bNW4H9a9lM7
          stance: supports
          locator: CBDB：兄弟 王用楨（204826）之父／母 王纘宗
          quotation: null
          interpretation_note: 由兄弟关系推断：王用官 与 王用楨 为同胞（CBDB 记「弟」），王用楨 之父／母即 王用官 之父／母。
          source:
            id: s_5IwcKFGZaB3bNW4H9a9lM7
            source_type: api_record
            title: 中国历代人物传记资料库：王用官（CBDB 324566）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324566&o=json
            external_identifier: CBDB:324566
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_oZ4kQSFi4x4MxZ3DEL5Xbj
        status: active
        display_name: 王纘宗
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_yeQrU9WJNLgTxMWAkqPGiz
        subject_person_id: p_CtzM6SrBC88nz162s91Kx6
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_hpB2Y5ktFHzZw4LUr2KGvj
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Fu0j86N1rhgtdqYyFo-XNw
          claim_id: c_yeQrU9WJNLgTxMWAkqPGiz
          source_id: s_5IwcKFGZaB3bNW4H9a9lM7
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 204826 王用楨）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_5IwcKFGZaB3bNW4H9a9lM7
            source_type: api_record
            title: 中国历代人物传记资料库：王用官（CBDB 324566）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324566&o=json
            external_identifier: CBDB:324566
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_hpB2Y5ktFHzZw4LUr2KGvj
        status: active
        display_name: 王用楨
        merged_into_person_id: null
---

# 王用官

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王用官，明人物。嘉靖三十八年進士，籍贯南充。（中国历代人物传记资料库 CBDB 324566） | accepted |
| name.primary | 王用官 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_oZ4kQSFi4x4MxZ3DEL5Xbj | 王纘宗 | accepted |
| other | p_hpB2Y5ktFHzZw4LUr2KGvj | 王用楨 | accepted |

## 外部来源

- [中国历代人物传记资料库：王用官（CBDB 324566）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324566&o=json)
