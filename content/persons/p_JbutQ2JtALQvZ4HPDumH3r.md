---
schema: wang-person/v1
id: p_JbutQ2JtALQvZ4HPDumH3r
status: active
merged_into: null
display_name: 王義
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_nrmuaNbNzuc2628tspV1B6
        subject_person_id: p_JbutQ2JtALQvZ4HPDumH3r
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王義
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HdRaMpnLbjVY4yU4EVpk8X
          claim_id: c_nrmuaNbNzuc2628tspV1B6
          source_id: s_dT1TexKzQv21kf2QmrXTd4
          stance: supports
          locator: CBDB:490435
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（490435）
          source: &a1
            id: s_dT1TexKzQv21kf2QmrXTd4
            source_type: api_record
            title: 中国历代人物传记资料库：王義（CBDB 490435）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=490435&o=json
            external_identifier: CBDB:490435
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.116Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_yNynvGXvrJtmPC8RQDS1L4
        subject_person_id: p_JbutQ2JtALQvZ4HPDumH3r
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王義，清人物。入仕貢生: 歲貢、常貢、挨貢，曾任訓導。（中国历代人物传记资料库 CBDB 490435）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_OTUmz0fz5qySEbL9rvpqfM
          claim_id: c_yNynvGXvrJtmPC8RQDS1L4
          source_id: s_dT1TexKzQv21kf2QmrXTd4
          stance: supports
          locator: CBDB:490435
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

# 王義

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王義 | accepted |
| bio.summary | 王義，清人物。入仕貢生: 歲貢、常貢、挨貢，曾任訓導。（中国历代人物传记资料库 CBDB 490435） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王義（CBDB 490435）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=490435&o=json)
