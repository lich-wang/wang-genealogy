---
schema: wang-person/v1
id: p_Khzg6KKAHWYJwQcZ9DnzkS
status: active
merged_into: null
display_name: 王恭政
cbdb_id: 317768
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_d1F4LWcM42ACFmNxnL9m1j
        subject_person_id: p_Khzg6KKAHWYJwQcZ9DnzkS
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恭政，明人物。嘉靖三十二年進士。（中国历代人物传记资料库 CBDB 317768）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_geAbuvPfQYSZBbYnVGsyDy
          claim_id: c_d1F4LWcM42ACFmNxnL9m1j
          source_id: s_p8A1ybHAaQ6iuunjvAMZ7T
          stance: supports
          locator: CBDB:317768
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_p8A1ybHAaQ6iuunjvAMZ7T
            source_type: api_record
            title: 中国历代人物传记资料库：王恭政（CBDB 317768）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317768&o=json
            external_identifier: CBDB:317768
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.030Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_bmab99ZQrLMjuUXSMkzKVq
        subject_person_id: p_Khzg6KKAHWYJwQcZ9DnzkS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恭政
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_TpEa25X34VvFhrj437FhJF
          claim_id: c_bmab99ZQrLMjuUXSMkzKVq
          source_id: s_p8A1ybHAaQ6iuunjvAMZ7T
          stance: supports
          locator: CBDB:317768
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3701-3800）｜历史性依据：CBDB 朝代 = 明
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
        id: c_3j4wUEs2u5miskiFy-xRQP
        subject_person_id: p_Khzg6KKAHWYJwQcZ9DnzkS
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_dw1HkJvxeQbGLvtDiNGqfE
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_93byrH5e_daKtQT7Ezk9V5
          claim_id: c_3j4wUEs2u5miskiFy-xRQP
          source_id: s_p8A1ybHAaQ6iuunjvAMZ7T
          stance: supports
          locator: 嘉靖三十二年進士登科錄:一卷，第三甲第一百七十五名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_p8A1ybHAaQ6iuunjvAMZ7T
            source_type: api_record
            title: 中国历代人物传记资料库：王恭政（CBDB 317768）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317768&o=json
            external_identifier: CBDB:317768
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.030Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_dw1HkJvxeQbGLvtDiNGqfE
        status: active
        display_name: 王惟寧
        merged_into_person_id: null
  other: []
---

# 王恭政

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王恭政，明人物。嘉靖三十二年進士。（中国历代人物传记资料库 CBDB 317768） | accepted |
| name.primary | 王恭政 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_dw1HkJvxeQbGLvtDiNGqfE | 王惟寧 | accepted |

## 外部来源

- [中国历代人物传记资料库：王恭政（CBDB 317768）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317768&o=json)
