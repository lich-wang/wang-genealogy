---
schema: wang-person/v1
id: p_jwjXPYAnDBoPhwLAxh38AP
status: active
merged_into: null
display_name: 王愷
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GdLMvcnSy5sq76Y9zhNwjR
        subject_person_id: p_jwjXPYAnDBoPhwLAxh38AP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王愷
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_79fBBiAkBsEJP6Hce4XzS8
          claim_id: c_GdLMvcnSy5sq76Y9zhNwjR
          source_id: s_oWkU4Na53JkhKfZA7G71Q7
          stance: supports
          locator: CBDB:495399
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（495399）
          source: &a1
            id: s_oWkU4Na53JkhKfZA7G71Q7
            source_type: api_record
            title: 中国历代人物传记资料库：王愷（CBDB 495399）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=495399&o=json
            external_identifier: CBDB:495399
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.491Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PPfZ9aP5ZHiX9eLhuGY8P3
        subject_person_id: p_jwjXPYAnDBoPhwLAxh38AP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王愷，明人物。入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 495399）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_8v2kL56eCGTX2X_GwGowj_
          claim_id: c_PPfZ9aP5ZHiX9eLhuGY8P3
          source_id: s_oWkU4Na53JkhKfZA7G71Q7
          stance: supports
          locator: CBDB:495399
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

# 王愷

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王愷 | accepted |
| bio.summary | 王愷，明人物。入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 495399） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王愷（CBDB 495399）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=495399&o=json)
