---
schema: wang-person/v1
id: p_yS64DMwJqQcH65VK6185ia
status: active
merged_into: null
display_name: 王宗彥
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_q1ZN5qLsBRNQdESQKTq49a
        subject_person_id: p_yS64DMwJqQcH65VK6185ia
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗彥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5S2mEJaass5QbxGfqq9pKL
          claim_id: c_q1ZN5qLsBRNQdESQKTq49a
          source_id: s_Y3uSvv6M5qg3SjhigYyni8
          stance: supports
          locator: CBDB:36328
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（36328）
          source: &a1
            id: s_Y3uSvv6M5qg3SjhigYyni8
            source_type: api_record
            title: 中国历代人物传记资料库：王宗彥（CBDB 36328）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=36328&o=json
            external_identifier: CBDB:36328
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.168Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CcX34LMzDDRkQAGSpfNnk9
        subject_person_id: p_yS64DMwJqQcH65VK6185ia
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗彥，宋人物。入仕進士。（中国历代人物传记资料库 CBDB 36328）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_FepjkcYifEd9axDN2S7WcG
          claim_id: c_CcX34LMzDDRkQAGSpfNnk9
          source_id: s_Y3uSvv6M5qg3SjhigYyni8
          stance: supports
          locator: CBDB:36328
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

# 王宗彥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宗彥 | accepted |
| bio.summary | 王宗彥，宋人物。入仕進士。（中国历代人物传记资料库 CBDB 36328） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王宗彥（CBDB 36328）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=36328&o=json)
