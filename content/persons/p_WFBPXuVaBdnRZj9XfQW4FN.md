---
schema: wang-person/v1
id: p_WFBPXuVaBdnRZj9XfQW4FN
status: active
merged_into: null
display_name: 王式軾
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AheK6X7nsqESn77SHX3sQ4
        subject_person_id: p_WFBPXuVaBdnRZj9XfQW4FN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王式軾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_RKdXCLXfKFsM8jtDRtwa64
          claim_id: c_AheK6X7nsqESn77SHX3sQ4
          source_id: s_9VaH22JWw5YGuvkMgmzyHJ
          stance: supports
          locator: CBDB:637608
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637608）
          source: &a1
            id: s_9VaH22JWw5YGuvkMgmzyHJ
            source_type: api_record
            title: 中国历代人物传记资料库：王式軾（CBDB 637608）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637608&o=json
            external_identifier: CBDB:637608
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.375Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_u3sYFwUMA4UK1BrUmcy7y9
        subject_person_id: p_WFBPXuVaBdnRZj9XfQW4FN
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
        - id: cs_eBCQsVt1kGHDRk6mNasEKQ
          claim_id: c_u3sYFwUMA4UK1BrUmcy7y9
          source_id: s_9VaH22JWw5YGuvkMgmzyHJ
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

# 王式軾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王式軾 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王式軾（CBDB 637608）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637608&o=json)
