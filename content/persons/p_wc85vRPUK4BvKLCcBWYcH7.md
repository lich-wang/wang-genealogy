---
schema: wang-person/v1
id: p_wc85vRPUK4BvKLCcBWYcH7
status: active
merged_into: null
display_name: 王宗業
cbdb_id: 307074
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GUK4wH8teV96Jqi3Do6jfD
        subject_person_id: p_wc85vRPUK4BvKLCcBWYcH7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗業，明人物。嘉靖二十三年進士，籍贯沂州。（中国历代人物传记资料库 CBDB 307074）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_Kund2yYMuesLBeOVHXk4Wf
          claim_id: c_GUK4wH8teV96Jqi3Do6jfD
          source_id: s_WM3Nv5jLyg5ptLHnX7bqbx
          stance: supports
          locator: CBDB:307074
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_WM3Nv5jLyg5ptLHnX7bqbx
            source_type: api_record
            title: 中国历代人物传记资料库：王宗業（CBDB 307074）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=307074&o=json
            external_identifier: CBDB:307074
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:05.361Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_fwwfk4TKoyfC61LMvA9ymQ
        subject_person_id: p_wc85vRPUK4BvKLCcBWYcH7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗業
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_KX25V1enmzBinj7Yr1LH2N
          claim_id: c_fwwfk4TKoyfC61LMvA9ymQ
          source_id: s_WM3Nv5jLyg5ptLHnX7bqbx
          stance: supports
          locator: CBDB:307074
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3601-3700）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_6CIN_-Z43eq9J-WBZXAMKt
        subject_person_id: p_jgqvj6yRuFScRYzYpcimRZ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_wc85vRPUK4BvKLCcBWYcH7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QrQlLHWBVvSvc3pYxD-mkf
          claim_id: c_6CIN_-Z43eq9J-WBZXAMKt
          source_id: s_f--_21QikDbboERE5vEkVr
          stance: supports
          locator: CBDB：兄弟 王宗性（203595）之父／母 王士彦
          quotation: null
          interpretation_note: 由兄弟关系推断：王宗業 与 王宗性 为同胞（CBDB 记「弟」），王宗性 之父／母即 王宗業 之父／母。
          source:
            id: s_f--_21QikDbboERE5vEkVr
            source_type: api_record
            title: 中国历代人物传记资料库：王宗業（CBDB 307074）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=307074&o=json
            external_identifier: CBDB:307074
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_jgqvj6yRuFScRYzYpcimRZ
        status: active
        display_name: 王士彦
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_oEZnQPILw2JiWQlaBDyWy9
        subject_person_id: p_ABHWjEscFjoCVEgF2qr4dX
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_wc85vRPUK4BvKLCcBWYcH7
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NwhKb2X85cDfuQgrN5wwvh
          claim_id: c_oEZnQPILw2JiWQlaBDyWy9
          source_id: s_f--_21QikDbboERE5vEkVr
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 203595 王宗性）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_f--_21QikDbboERE5vEkVr
            source_type: api_record
            title: 中国历代人物传记资料库：王宗業（CBDB 307074）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=307074&o=json
            external_identifier: CBDB:307074
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ABHWjEscFjoCVEgF2qr4dX
        status: active
        display_name: 王宗性
        merged_into_person_id: null
---

# 王宗業

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王宗業，明人物。嘉靖二十三年進士，籍贯沂州。（中国历代人物传记资料库 CBDB 307074） | accepted |
| name.primary | 王宗業 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_jgqvj6yRuFScRYzYpcimRZ | 王士彦 | accepted |
| other | p_ABHWjEscFjoCVEgF2qr4dX | 王宗性 | accepted |

## 外部来源

- [中国历代人物传记资料库：王宗業（CBDB 307074）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=307074&o=json)
