---
schema: wang-person/v1
id: p_AvcaPwSSq3Uk1GE9thkKb5
status: active
merged_into: null
display_name: 王玉玭
cbdb_id: 300440
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xF4oEGH5R8VFb1E1wFVsnM
        subject_person_id: p_AvcaPwSSq3Uk1GE9thkKb5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玉玭，明人物。嘉靖十七年進士。（中国历代人物传记资料库 CBDB 300440）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_OBQFPfnEQP_StfrD479l0e
          claim_id: c_xF4oEGH5R8VFb1E1wFVsnM
          source_id: s_7y4EiaxsnEtoTLrueGoZEK
          stance: supports
          locator: CBDB:300440
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_7y4EiaxsnEtoTLrueGoZEK
            source_type: api_record
            title: 中国历代人物传记资料库：王玉玭（CBDB 300440）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300440&o=json
            external_identifier: CBDB:300440
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:04.487Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_8211mxaKPg6ki53X9Vdzkx
        subject_person_id: p_AvcaPwSSq3Uk1GE9thkKb5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玉玭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_aRPm3pFN9T4GwaNT61SGK7
          claim_id: c_8211mxaKPg6ki53X9Vdzkx
          source_id: s_7y4EiaxsnEtoTLrueGoZEK
          stance: supports
          locator: CBDB:300440
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3501-3600）｜历史性依据：CBDB 朝代 = 明
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
        id: c_mAdLTu8ykxBj1fa3VQLsZQ
        subject_person_id: p_AvcaPwSSq3Uk1GE9thkKb5
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_VsUEBsvkAXXbA9FWfTN5pA
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_W5vDVAAuX3nXyR-sGoe1XW
          claim_id: c_mAdLTu8ykxBj1fa3VQLsZQ
          source_id: s_7y4EiaxsnEtoTLrueGoZEK
          stance: supports
          locator: 嘉靖十七年進士登科錄:一卷，第三甲第六十八名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_7y4EiaxsnEtoTLrueGoZEK
            source_type: api_record
            title: 中国历代人物传记资料库：王玉玭（CBDB 300440）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300440&o=json
            external_identifier: CBDB:300440
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:04.487Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_VsUEBsvkAXXbA9FWfTN5pA
        status: active
        display_name: 王國禎
        merged_into_person_id: null
  other: []
---

# 王玉玭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王玉玭，明人物。嘉靖十七年進士。（中国历代人物传记资料库 CBDB 300440） | accepted |
| name.primary | 王玉玭 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_VsUEBsvkAXXbA9FWfTN5pA | 王國禎 | accepted |

## 外部来源

- [中国历代人物传记资料库：王玉玭（CBDB 300440）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300440&o=json)
