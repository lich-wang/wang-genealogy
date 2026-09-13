---
schema: wang-person/v1
id: p_o7D2MU72mH25Jvuq1USmMP
status: active
merged_into: null
display_name: 王大雍
cbdb_id: 301954
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_t1cx6pY4GJDhzzTYUAN8id
        subject_person_id: p_o7D2MU72mH25Jvuq1USmMP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大雍，明人物。嘉靖十七年進士，籍贯安邱。（中国历代人物传记资料库 CBDB 301954）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs__M3VTMxZokHwI7KryRh0D4
          claim_id: c_t1cx6pY4GJDhzzTYUAN8id
          source_id: s_M7KD1aoESvtrJ6hT4FLSZp
          stance: supports
          locator: CBDB:301954
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_M7KD1aoESvtrJ6hT4FLSZp
            source_type: api_record
            title: 中国历代人物传记资料库：王大雍（CBDB 301954）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=301954&o=json
            external_identifier: CBDB:301954
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:04.487Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Rn83a7Bt6wbKLX9mAozueF
        subject_person_id: p_o7D2MU72mH25Jvuq1USmMP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大雍
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_5x2SuNHazsAJzLajeKkLDM
          claim_id: c_Rn83a7Bt6wbKLX9mAozueF
          source_id: s_M7KD1aoESvtrJ6hT4FLSZp
          stance: supports
          locator: CBDB:301954
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
  descendants: []
  other: []
---

# 王大雍

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王大雍，明人物。嘉靖十七年進士，籍贯安邱。（中国历代人物传记资料库 CBDB 301954） | accepted |
| name.primary | 王大雍 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王大雍（CBDB 301954）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=301954&o=json)
