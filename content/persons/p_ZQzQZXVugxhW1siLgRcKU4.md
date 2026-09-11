---
schema: wang-person/v1
id: p_ZQzQZXVugxhW1siLgRcKU4
status: active
merged_into: null
display_name: 王良珉
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_rHb7hB4fhAEJnzSzyVCgai
        subject_person_id: p_ZQzQZXVugxhW1siLgRcKU4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王良珉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5iQyXYesBsFhiQW8sPVLGM
          claim_id: c_rHb7hB4fhAEJnzSzyVCgai
          source_id: s_BMp645LqPPMaz4eQgPqGMe
          stance: supports
          locator: CBDB:28104
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（28104）
          source: &a1
            id: s_BMp645LqPPMaz4eQgPqGMe
            source_type: api_record
            title: 中国历代人物传记资料库：王良珉（CBDB 28104）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=28104&o=json
            external_identifier: CBDB:28104
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.962Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NBtnLz8A5eWtVg1UorQ4nd
        subject_person_id: p_ZQzQZXVugxhW1siLgRcKU4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王良珉，元人物。籍贯義烏。（中国历代人物传记资料库 CBDB 28104）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_fS2wCv4qZZr_dZ60d4BvpS
          claim_id: c_NBtnLz8A5eWtVg1UorQ4nd
          source_id: s_BMp645LqPPMaz4eQgPqGMe
          stance: supports
          locator: CBDB:28104
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

# 王良珉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王良珉 | accepted |
| bio.summary | 王良珉，元人物。籍贯義烏。（中国历代人物传记资料库 CBDB 28104） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王良珉（CBDB 28104）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=28104&o=json)
