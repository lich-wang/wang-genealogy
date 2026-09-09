---
schema: wang-person/v1
id: p_oL4sEC8RjRxThS6ATE5WjX
status: active
merged_into: null
display_name: 王用
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_V9xDioVQGM84Las8Q6B58w
        subject_person_id: p_oL4sEC8RjRxThS6ATE5WjX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王用
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_17q3XHkgi1h7c4hPP2j13E
          claim_id: c_V9xDioVQGM84Las8Q6B58w
          source_id: s_oqNgQtfVymdbPXAM7WfTVe
          stance: supports
          locator: CBDB:324013
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（324013）
          source: &a1
            id: s_oqNgQtfVymdbPXAM7WfTVe
            source_type: api_record
            title: 中国历代人物传记资料库：王用（CBDB 324013）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324013&o=json
            external_identifier: CBDB:324013
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.157Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Jym4A8KR6DRjr11gLHeo8Q
        subject_person_id: p_oL4sEC8RjRxThS6ATE5WjX
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
        - id: cs_uR3uRur2s3cVbFG3ELnoui
          claim_id: c_Jym4A8KR6DRjr11gLHeo8Q
          source_id: s_oqNgQtfVymdbPXAM7WfTVe
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

# 王用

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王用 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王用（CBDB 324013）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324013&o=json)
