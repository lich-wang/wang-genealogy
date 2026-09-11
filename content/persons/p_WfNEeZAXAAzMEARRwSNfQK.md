---
schema: wang-person/v1
id: p_WfNEeZAXAAzMEARRwSNfQK
status: active
merged_into: null
display_name: 王爵
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QNKSj5EYY7UuamQ1cBni7F
        subject_person_id: p_WfNEeZAXAAzMEARRwSNfQK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王爵
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_gK3jQJSBeAhHy3BmmGGcCA
          claim_id: c_QNKSj5EYY7UuamQ1cBni7F
          source_id: s_CmiJpuGK8tBGCG53a8c3EY
          stance: supports
          locator: CBDB:477595
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（477595）
          source: &a1
            id: s_CmiJpuGK8tBGCG53a8c3EY
            source_type: api_record
            title: 中国历代人物传记资料库：王爵（CBDB 477595）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=477595&o=json
            external_identifier: CBDB:477595
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.541Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_dfW2R2kdxDepK75bg599TL
        subject_person_id: p_WfNEeZAXAAzMEARRwSNfQK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王爵，明人物。入仕監生，曾任百戶、典史、縣丞。（中国历代人物传记资料库 CBDB 477595）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_59zPh9ZlCBnQ8iTvr7W8Sq
          claim_id: c_dfW2R2kdxDepK75bg599TL
          source_id: s_CmiJpuGK8tBGCG53a8c3EY
          stance: supports
          locator: CBDB:477595
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

# 王爵

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王爵 | accepted |
| bio.summary | 王爵，明人物。入仕監生，曾任百戶、典史、縣丞。（中国历代人物传记资料库 CBDB 477595） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王爵（CBDB 477595）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=477595&o=json)
