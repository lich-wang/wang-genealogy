---
schema: wang-person/v1
id: p_J21cSSYW3eKSPLsPxoXNuc
status: active
merged_into: null
display_name: 王賢
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Njkk6f49U4uTGCem52xU4G
        subject_person_id: p_J21cSSYW3eKSPLsPxoXNuc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王賢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FC9bTEwF9e5hBp5roSTBqz
          claim_id: c_Njkk6f49U4uTGCem52xU4G
          source_id: s_TPXdMwPxZmVHVFVJ8mE9mA
          stance: supports
          locator: CBDB:494173
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（494173）
          source: &a1
            id: s_TPXdMwPxZmVHVFVJ8mE9mA
            source_type: api_record
            title: 中国历代人物传记资料库：王賢（CBDB 494173）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=494173&o=json
            external_identifier: CBDB:494173
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.414Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_y8B3UhRMXCx4feF1epWVYc
        subject_person_id: p_J21cSSYW3eKSPLsPxoXNuc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王賢，明人物。入仕監生，曾任知縣。（中国历代人物传记资料库 CBDB 494173）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_W9LFrKJt7XJSIdu4g8GRT1
          claim_id: c_y8B3UhRMXCx4feF1epWVYc
          source_id: s_TPXdMwPxZmVHVFVJ8mE9mA
          stance: supports
          locator: CBDB:494173
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
  descendants: []
  other: []
---

# 王賢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王賢 | accepted |
| bio.summary | 王賢，明人物。入仕監生，曾任知縣。（中国历代人物传记资料库 CBDB 494173） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王賢（CBDB 494173）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=494173&o=json)
