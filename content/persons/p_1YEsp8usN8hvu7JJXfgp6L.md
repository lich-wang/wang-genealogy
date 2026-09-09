---
schema: wang-person/v1
id: p_1YEsp8usN8hvu7JJXfgp6L
status: active
merged_into: null
display_name: 王靜
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BYA2ts73HuauBSqoYRT7CE
        subject_person_id: p_1YEsp8usN8hvu7JJXfgp6L
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王靜
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_cVQehWWPiZMg3CxjSSmk9v
          claim_id: c_BYA2ts73HuauBSqoYRT7CE
          source_id: s_NZ5Akywg5CsdKiDqtFB2HZ
          stance: supports
          locator: CBDB:556104
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（556104）
          source: &a1
            id: s_NZ5Akywg5CsdKiDqtFB2HZ
            source_type: api_record
            title: 中国历代人物传记资料库：王靜（CBDB 556104）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=556104&o=json
            external_identifier: CBDB:556104
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.648Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DZNc1Y8kXRfxFKjguwy83J
        subject_person_id: p_1YEsp8usN8hvu7JJXfgp6L
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DydGrHmT8M9v2d4rwJRsGf
          claim_id: c_DZNc1Y8kXRfxFKjguwy83J
          source_id: s_NZ5Akywg5CsdKiDqtFB2HZ
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

# 王靜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王靜 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王靜（CBDB 556104）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=556104&o=json)
