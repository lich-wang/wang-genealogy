---
schema: wang-person/v1
id: p_yRutPFDvCwc8UqtRtJny4B
status: active
merged_into: null
display_name: 王世美
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6cqZbVzWtat8co4EA3Dd5x
        subject_person_id: p_yRutPFDvCwc8UqtRtJny4B
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世美
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_gTTz7PP2X75vs5ZE7v8LAZ
          claim_id: c_6cqZbVzWtat8co4EA3Dd5x
          source_id: s_rsiRe5f4dYD5fLtLLh2koA
          stance: supports
          locator: CBDB:474478
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（474478）
          source: &a1
            id: s_rsiRe5f4dYD5fLtLLh2koA
            source_type: api_record
            title: 中国历代人物传记资料库：王世美（CBDB 474478）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=474478&o=json
            external_identifier: CBDB:474478
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.368Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KCzR6bU456RzFxEGJBByRq
        subject_person_id: p_yRutPFDvCwc8UqtRtJny4B
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
        - id: cs_ZFHCDaewmHEBFKLimE9exS
          claim_id: c_KCzR6bU456RzFxEGJBByRq
          source_id: s_rsiRe5f4dYD5fLtLLh2koA
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

# 王世美

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王世美 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王世美（CBDB 474478）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=474478&o=json)
