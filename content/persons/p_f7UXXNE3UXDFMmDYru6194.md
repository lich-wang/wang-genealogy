---
schema: wang-person/v1
id: p_f7UXXNE3UXDFMmDYru6194
status: active
merged_into: null
display_name: 王宗華
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GhUL3m7nBBdSwNxEAWH1gW
        subject_person_id: p_f7UXXNE3UXDFMmDYru6194
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗華
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zD2BpVWx9sGNWc8KQH63E7
          claim_id: c_GhUL3m7nBBdSwNxEAWH1gW
          source_id: s_H3ri3bJnFkC4gYQ7abNUo6
          stance: supports
          locator: CBDB:288566
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（288566）
          source: &a1
            id: s_H3ri3bJnFkC4gYQ7abNUo6
            source_type: api_record
            title: 中国历代人物传记资料库：王宗華（CBDB 288566）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288566&o=json
            external_identifier: CBDB:288566
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.294Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_f3DMGN5WcoaSTZGSpv2yEK
        subject_person_id: p_f7UXXNE3UXDFMmDYru6194
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗華，明人物。嘉靖八年進士，籍贯武邑。（中国历代人物传记资料库 CBDB 288566）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_QXXGtjdciK3utF9OO7NCJT
          claim_id: c_f3DMGN5WcoaSTZGSpv2yEK
          source_id: s_H3ri3bJnFkC4gYQ7abNUo6
          stance: supports
          locator: CBDB:288566
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Tuga-OZUypZtNKa3f8t1Vg
        subject_person_id: p_wfbyDLXDm9dw8R5wz4t1Hc
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_f7UXXNE3UXDFMmDYru6194
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tidPV0Ox2ZYTIaWtC34MqB
          claim_id: c_Tuga-OZUypZtNKa3f8t1Vg
          source_id: s_rOI9kVMluA8XpnaUOyNYIZ
          stance: supports
          locator: CBDB：兄弟 王宗恆（202460）之父／母 王璠
          quotation: null
          interpretation_note: 由兄弟关系推断：王宗華 与 王宗恆 为同胞（CBDB 记「弟」），王宗恆 之父／母即 王宗華 之父／母。
          source:
            id: s_rOI9kVMluA8XpnaUOyNYIZ
            source_type: api_record
            title: 中国历代人物传记资料库：王宗華（CBDB 288566）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288566&o=json
            external_identifier: CBDB:288566
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_wfbyDLXDm9dw8R5wz4t1Hc
        status: active
        display_name: 王璠
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_kQvhWCfAtTsoxT5tx6gzlo
        subject_person_id: p_JirTxmVijtiT96YhPfvEVf
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_f7UXXNE3UXDFMmDYru6194
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AdgALP1tIlq05v9BpjZFbV
          claim_id: c_kQvhWCfAtTsoxT5tx6gzlo
          source_id: s_rOI9kVMluA8XpnaUOyNYIZ
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 202460 王宗恆）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_rOI9kVMluA8XpnaUOyNYIZ
            source_type: api_record
            title: 中国历代人物传记资料库：王宗華（CBDB 288566）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288566&o=json
            external_identifier: CBDB:288566
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_JirTxmVijtiT96YhPfvEVf
        status: active
        display_name: 王宗恆
        merged_into_person_id: null
---

# 王宗華

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宗華 | accepted |
| bio.summary | 王宗華，明人物。嘉靖八年進士，籍贯武邑。（中国历代人物传记资料库 CBDB 288566） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_wfbyDLXDm9dw8R5wz4t1Hc | 王璠 | accepted |
| other | p_JirTxmVijtiT96YhPfvEVf | 王宗恆 | accepted |

## 外部来源

- [中国历代人物传记资料库：王宗華（CBDB 288566）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288566&o=json)
