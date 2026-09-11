---
schema: wang-person/v1
id: p_Ws5CGzMeE3Qux95XV8TvFy
status: active
merged_into: null
display_name: 王大亨
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_yagGVZi2HKdXjFB7oHRfK9
        subject_person_id: p_Ws5CGzMeE3Qux95XV8TvFy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大亨
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_cxUw8Q6dxXDBGwtU1VDnb5
          claim_id: c_yagGVZi2HKdXjFB7oHRfK9
          source_id: s_hkjNDTSQ8uRdzZQapY8343
          stance: supports
          locator: CBDB:636883
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636883）
          source: &a1
            id: s_hkjNDTSQ8uRdzZQapY8343
            source_type: api_record
            title: 中国历代人物传记资料库：王大亨（CBDB 636883）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636883&o=json
            external_identifier: CBDB:636883
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.280Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zK5SfNLfi355x2Q9kpNCBG
        subject_person_id: p_Ws5CGzMeE3Qux95XV8TvFy
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大亨，清人物。籍贯晉江，入仕鄉貢舉人，曾任主事。（中国历代人物传记资料库 CBDB 636883）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_do_rX4ZAG72PFtH5e1Dxp-
          claim_id: c_zK5SfNLfi355x2Q9kpNCBG
          source_id: s_hkjNDTSQ8uRdzZQapY8343
          stance: supports
          locator: CBDB:636883
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

# 王大亨

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王大亨 | accepted |
| bio.summary | 王大亨，清人物。籍贯晉江，入仕鄉貢舉人，曾任主事。（中国历代人物传记资料库 CBDB 636883） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王大亨（CBDB 636883）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636883&o=json)
