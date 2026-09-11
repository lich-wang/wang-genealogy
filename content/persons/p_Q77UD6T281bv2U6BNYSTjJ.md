---
schema: wang-person/v1
id: p_Q77UD6T281bv2U6BNYSTjJ
status: active
merged_into: null
display_name: 王希賢
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9wB8LcdAgu6kMSPx2vN6PA
        subject_person_id: p_Q77UD6T281bv2U6BNYSTjJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王希賢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2GjH5crU9q3uuJ7168dJu3
          claim_id: c_9wB8LcdAgu6kMSPx2vN6PA
          source_id: s_Xw34hBKGV4fxGSCGucmh28
          stance: supports
          locator: CBDB:255102
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（255102）
          source: &a1
            id: s_Xw34hBKGV4fxGSCGucmh28
            source_type: api_record
            title: 中国历代人物传记资料库：王希賢（CBDB 255102）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255102&o=json
            external_identifier: CBDB:255102
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.328Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qcnqFo5v8FRgmX8XcT6Fpn
        subject_person_id: p_Q77UD6T281bv2U6BNYSTjJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王希賢，明人物。成化十七年進士。（中国历代人物传记资料库 CBDB 255102）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_n-bgRjb1Op7Z0nT3E4n7PS
          claim_id: c_qcnqFo5v8FRgmX8XcT6Fpn
          source_id: s_Xw34hBKGV4fxGSCGucmh28
          stance: supports
          locator: CBDB:255102
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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
        id: c_fdwqn518h5LNI4WeUhNoSF
        subject_person_id: p_Q77UD6T281bv2U6BNYSTjJ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_QLg57kGsktZ3ogwQyMCe5D
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HdiIY9qlZeLb7URv2T9YcJ
          claim_id: c_fdwqn518h5LNI4WeUhNoSF
          source_id: s_Xw34hBKGV4fxGSCGucmh28
          stance: supports
          locator: 成化十七年進士登科錄:一卷，第二甲第四十名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_QLg57kGsktZ3ogwQyMCe5D
        status: active
        display_name: 王濟
        merged_into_person_id: null
  other: []
---

# 王希賢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王希賢 | accepted |
| bio.summary | 王希賢，明人物。成化十七年進士。（中国历代人物传记资料库 CBDB 255102） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_QLg57kGsktZ3ogwQyMCe5D | 王濟 | accepted |

## 外部来源

- [中国历代人物传记资料库：王希賢（CBDB 255102）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255102&o=json)
