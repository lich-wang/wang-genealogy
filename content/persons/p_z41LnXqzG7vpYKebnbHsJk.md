---
schema: wang-person/v1
id: p_z41LnXqzG7vpYKebnbHsJk
status: active
merged_into: null
display_name: 王迎
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_xBRcAV5gRkw6Yd7L78qKfD
        subject_person_id: p_z41LnXqzG7vpYKebnbHsJk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王迎
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KkFjHg4JFZr9e3QDkuNMTf
          claim_id: c_xBRcAV5gRkw6Yd7L78qKfD
          source_id: s_YTbvMzww5q8VsS23QrtiKB
          stance: supports
          locator: CBDB:290815
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（290815）
          source: &a1
            id: s_YTbvMzww5q8VsS23QrtiKB
            source_type: api_record
            title: 中国历代人物传记资料库：王迎（CBDB 290815）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290815&o=json
            external_identifier: CBDB:290815
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.347Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_V78hY8DYqAXcoBeN4iqmnL
        subject_person_id: p_z41LnXqzG7vpYKebnbHsJk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王迎，明人物。嘉靖十一年進士，籍贯南充。（中国历代人物传记资料库 CBDB 290815）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_hlCEJj1OHrNUA8d_bPVsey
          claim_id: c_V78hY8DYqAXcoBeN4iqmnL
          source_id: s_YTbvMzww5q8VsS23QrtiKB
          stance: supports
          locator: CBDB:290815
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

# 王迎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王迎 | accepted |
| bio.summary | 王迎，明人物。嘉靖十一年進士，籍贯南充。（中国历代人物传记资料库 CBDB 290815） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王迎（CBDB 290815）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290815&o=json)
