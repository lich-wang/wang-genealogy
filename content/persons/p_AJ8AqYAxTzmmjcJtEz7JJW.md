---
schema: wang-person/v1
id: p_AJ8AqYAxTzmmjcJtEz7JJW
status: active
merged_into: null
display_name: 王錦龍
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_xuVesCWfHDbM3MbF8Vs8KY
        subject_person_id: p_AJ8AqYAxTzmmjcJtEz7JJW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錦龍
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Z4xe9mpDPd7wFQjTMsPwc9
          claim_id: c_xuVesCWfHDbM3MbF8Vs8KY
          source_id: s_89GQeKhQD3RTrmyHJP7FMS
          stance: supports
          locator: CBDB:640588
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640588）
          source: &a1
            id: s_89GQeKhQD3RTrmyHJP7FMS
            source_type: api_record
            title: 中国历代人物传记资料库：王錦龍（CBDB 640588）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640588&o=json
            external_identifier: CBDB:640588
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.307Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_nR1W9e2aENS2ggcEB2rtNk
        subject_person_id: p_AJ8AqYAxTzmmjcJtEz7JJW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XS2yJ7Canw95zpLSrL1bWm
          claim_id: c_nR1W9e2aENS2ggcEB2rtNk
          source_id: s_89GQeKhQD3RTrmyHJP7FMS
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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

# 王錦龍

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王錦龍 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王錦龍（CBDB 640588）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640588&o=json)
