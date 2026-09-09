---
schema: wang-person/v1
id: p_AZ9sTjiiVDDjzecmG4UuBn
status: active
merged_into: null
display_name: 王惟義
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_gBvqGRJ4dXsV773fFJMq1s
        subject_person_id: p_AZ9sTjiiVDDjzecmG4UuBn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王惟義
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_skcfFJhyXZif5m5fSTjMwZ
          claim_id: c_gBvqGRJ4dXsV773fFJMq1s
          source_id: s_CzrKuB5khe9w32c1V3hf5n
          stance: supports
          locator: CBDB:19887
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（19887）
          source: &a1
            id: s_CzrKuB5khe9w32c1V3hf5n
            source_type: api_record
            title: 中国历代人物传记资料库：王惟義（CBDB 19887）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=19887&o=json
            external_identifier: CBDB:19887
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.749Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_avvC46oiSg3McyXXBjnQmJ
        subject_person_id: p_AZ9sTjiiVDDjzecmG4UuBn
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GasuTT7DjSbzYQRPWJ9brA
          claim_id: c_avvC46oiSg3McyXXBjnQmJ
          source_id: s_CzrKuB5khe9w32c1V3hf5n
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

# 王惟義

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王惟義 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王惟義（CBDB 19887）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=19887&o=json)
