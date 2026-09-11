---
schema: wang-person/v1
id: p_ieLQfo4JiBcCmoacPQ8xqN
status: active
merged_into: null
display_name: 王萬章
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_xD3adZdPi72mm6L1wBGHzX
        subject_person_id: p_ieLQfo4JiBcCmoacPQ8xqN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王萬章
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Y2Q4EDLzFutHfVJHPKhBbG
          claim_id: c_xD3adZdPi72mm6L1wBGHzX
          source_id: s_pBmM2P8L8As5Tqy1in4v8m
          stance: supports
          locator: CBDB:475810
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（475810）
          source: &a1
            id: s_pBmM2P8L8As5Tqy1in4v8m
            source_type: api_record
            title: 中国历代人物传记资料库：王萬章（CBDB 475810）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=475810&o=json
            external_identifier: CBDB:475810
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.423Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_x3DQruCn2fMcCr3Ro44bGw
        subject_person_id: p_ieLQfo4JiBcCmoacPQ8xqN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王萬章，宋人物。曾任縣丞。（中国历代人物传记资料库 CBDB 475810）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Va97QilW3-sibXmtTfOTU7
          claim_id: c_x3DQruCn2fMcCr3Ro44bGw
          source_id: s_pBmM2P8L8As5Tqy1in4v8m
          stance: supports
          locator: CBDB:475810
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

# 王萬章

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王萬章 | accepted |
| bio.summary | 王萬章，宋人物。曾任縣丞。（中国历代人物传记资料库 CBDB 475810） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王萬章（CBDB 475810）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=475810&o=json)
