---
schema: wang-person/v1
id: p_EqxEZL7yVcMvo6XgXwwzcD
status: active
merged_into: null
display_name: 王一槐
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QqKj6hknH3yPY8hyHir83h
        subject_person_id: p_EqxEZL7yVcMvo6XgXwwzcD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一槐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_pR5ZBbBpnnQ1DGrAA6aF7F
          claim_id: c_QqKj6hknH3yPY8hyHir83h
          source_id: s_XLb6wyRako4EjZ15n9Hpu3
          stance: supports
          locator: CBDB:477304
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（477304）
          source: &a1
            id: s_XLb6wyRako4EjZ15n9Hpu3
            source_type: api_record
            title: 中国历代人物传记资料库：王一槐（CBDB 477304）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=477304&o=json
            external_identifier: CBDB:477304
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.514Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_254fLSHvdfBZDNFACjB7Af
        subject_person_id: p_EqxEZL7yVcMvo6XgXwwzcD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一槐，明人物。入仕鄉貢舉人，曾任教諭。（中国历代人物传记资料库 CBDB 477304）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_WarFeUr8_1QhC9Y5GzyvEn
          claim_id: c_254fLSHvdfBZDNFACjB7Af
          source_id: s_XLb6wyRako4EjZ15n9Hpu3
          stance: supports
          locator: CBDB:477304
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

# 王一槐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王一槐 | accepted |
| bio.summary | 王一槐，明人物。入仕鄉貢舉人，曾任教諭。（中国历代人物传记资料库 CBDB 477304） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王一槐（CBDB 477304）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=477304&o=json)
