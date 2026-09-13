---
schema: wang-person/v1
id: p_KqcphAEnogCKRbv8TNBY9D
status: active
merged_into: null
display_name: 王峘
cbdb_id: 209784
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xZUqtuLSpC4LJPizJAN9qN
        subject_person_id: p_KqcphAEnogCKRbv8TNBY9D
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王峘，明人物。隆慶五年進士。（中国历代人物传记资料库 CBDB 209784）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_x3zT25VezrAn68d5aBch7S
          claim_id: c_xZUqtuLSpC4LJPizJAN9qN
          source_id: s_y4ecSDKCyeu9kV4WPKWWTc
          stance: supports
          locator: CBDB:209784
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_y4ecSDKCyeu9kV4WPKWWTc
            source_type: api_record
            title: 中国历代人物传记资料库：王峘（CBDB 209784）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209784&o=json
            external_identifier: CBDB:209784
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:55.593Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_112n7FQf9a6uYGgpgLe5N2
        subject_person_id: p_KqcphAEnogCKRbv8TNBY9D
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王峘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_txhdqmEByLKEGJ5cKWN9sQ
          claim_id: c_112n7FQf9a6uYGgpgLe5N2
          source_id: s_y4ecSDKCyeu9kV4WPKWWTc
          stance: supports
          locator: CBDB:209784
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2401-2500）｜历史性依据：CBDB 朝代 = 明
          source: *a1
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
        id: c_Z1Wl5sZGjclQGxBB0JGFe3
        subject_person_id: p_KqcphAEnogCKRbv8TNBY9D
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Eo3x5BVMmizyxxEaJmawa5
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_H1GJxU-96CT5OTFE_Z2lZb
          claim_id: c_Z1Wl5sZGjclQGxBB0JGFe3
          source_id: s_y4ecSDKCyeu9kV4WPKWWTc
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第八十六名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_y4ecSDKCyeu9kV4WPKWWTc
            source_type: api_record
            title: 中国历代人物传记资料库：王峘（CBDB 209784）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209784&o=json
            external_identifier: CBDB:209784
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:55.593Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_Eo3x5BVMmizyxxEaJmawa5
        status: active
        display_name: 王嘉柔
        merged_into_person_id: null
  other: []
---

# 王峘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王峘，明人物。隆慶五年進士。（中国历代人物传记资料库 CBDB 209784） | accepted |
| name.primary | 王峘 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_Eo3x5BVMmizyxxEaJmawa5 | 王嘉柔 | accepted |

## 外部来源

- [中国历代人物传记资料库：王峘（CBDB 209784）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209784&o=json)
