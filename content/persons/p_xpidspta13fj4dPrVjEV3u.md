---
schema: wang-person/v1
id: p_xpidspta13fj4dPrVjEV3u
status: active
merged_into: null
display_name: 王拱
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2xeTa5Co5xEtgng88nUcsS
        subject_person_id: p_xpidspta13fj4dPrVjEV3u
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王拱
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qotchPqeMb5RAiKmZckJ1e
          claim_id: c_2xeTa5Co5xEtgng88nUcsS
          source_id: s_c7zo21mwc7qe6v9579BE8b
          stance: supports
          locator: CBDB:384087
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（384087）
          source: &a1
            id: s_c7zo21mwc7qe6v9579BE8b
            source_type: api_record
            title: 中国历代人物传记资料库：王拱（CBDB 384087）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=384087&o=json
            external_identifier: CBDB:384087
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.863Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_mrPTtqLgxkDzojahRSpjWV
        subject_person_id: p_xpidspta13fj4dPrVjEV3u
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王拱，唐人物。曾任州刺史。（中国历代人物传记资料库 CBDB 384087）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_89jWMijNqLwdXlWEA3Injt
          claim_id: c_mrPTtqLgxkDzojahRSpjWV
          source_id: s_c7zo21mwc7qe6v9579BE8b
          stance: supports
          locator: CBDB:384087
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

# 王拱

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王拱 | accepted |
| bio.summary | 王拱，唐人物。曾任州刺史。（中国历代人物传记资料库 CBDB 384087） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王拱（CBDB 384087）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=384087&o=json)
