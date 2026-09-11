---
schema: wang-person/v1
id: p_mKMrX2S81upyk91oh4bEbv
status: active
merged_into: null
display_name: 王立中
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_UveYNF8ZHDe1d2v1AJrHDG
        subject_person_id: p_mKMrX2S81upyk91oh4bEbv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王立中
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6p2xDHqRbw9qf7sDRCjvmB
          claim_id: c_UveYNF8ZHDe1d2v1AJrHDG
          source_id: s_7j3XuSKEMbXipNA9YtQSSb
          stance: supports
          locator: CBDB:470033
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（470033）
          source: &a1
            id: s_7j3XuSKEMbXipNA9YtQSSb
            source_type: api_record
            title: 中国历代人物传记资料库：王立中（CBDB 470033）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=470033&o=json
            external_identifier: CBDB:470033
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.136Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7zwcp6N6GG4AfZEGJn5VT5
        subject_person_id: p_mKMrX2S81upyk91oh4bEbv
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王立中，元人物。曾任散府知府或府尹。（中国历代人物传记资料库 CBDB 470033）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_aXU1qYc0GioRlxuvbZyCb6
          claim_id: c_7zwcp6N6GG4AfZEGJn5VT5
          source_id: s_7j3XuSKEMbXipNA9YtQSSb
          stance: supports
          locator: CBDB:470033
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

# 王立中

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王立中 | accepted |
| bio.summary | 王立中，元人物。曾任散府知府或府尹。（中国历代人物传记资料库 CBDB 470033） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王立中（CBDB 470033）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=470033&o=json)
