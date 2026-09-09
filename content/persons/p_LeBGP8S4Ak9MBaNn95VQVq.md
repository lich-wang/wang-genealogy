---
schema: wang-person/v1
id: p_LeBGP8S4Ak9MBaNn95VQVq
status: active
merged_into: null
display_name: 王玉策
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NU3qBfb6HAGyDCoKPvNz94
        subject_person_id: p_LeBGP8S4Ak9MBaNn95VQVq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玉策
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JMQFU8wK2dwABb8ePcTnxw
          claim_id: c_NU3qBfb6HAGyDCoKPvNz94
          source_id: s_1xUQyCnWxXVPhgdcQvPPgV
          stance: supports
          locator: CBDB:639385
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639385）
          source: &a1
            id: s_1xUQyCnWxXVPhgdcQvPPgV
            source_type: api_record
            title: 中国历代人物传记资料库：王玉策（CBDB 639385）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639385&o=json
            external_identifier: CBDB:639385
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.926Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_XcFh1Ba7mMipJpTLLjtRKH
        subject_person_id: p_LeBGP8S4Ak9MBaNn95VQVq
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
        - id: cs_5UsnxJCAq5a9idwND35bXb
          claim_id: c_XcFh1Ba7mMipJpTLLjtRKH
          source_id: s_1xUQyCnWxXVPhgdcQvPPgV
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

# 王玉策

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王玉策 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王玉策（CBDB 639385）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639385&o=json)
