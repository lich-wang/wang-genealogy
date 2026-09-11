---
schema: wang-person/v1
id: p_gUhWpKhF9MjeYLh73NSpPS
status: active
merged_into: null
display_name: 王溥
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_fiT78rNpPemLMtC2FtM5mu
        subject_person_id: p_gUhWpKhF9MjeYLh73NSpPS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王溥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NHE83E3jHMcw48Sqdre3Ys
          claim_id: c_fiT78rNpPemLMtC2FtM5mu
          source_id: s_n1MeKqusbnBN87xC8tHw2w
          stance: supports
          locator: CBDB:465146
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（465146）
          source: &a1
            id: s_n1MeKqusbnBN87xC8tHw2w
            source_type: api_record
            title: 中国历代人物传记资料库：王溥（CBDB 465146）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=465146&o=json
            external_identifier: CBDB:465146
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.927Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_YKBGTmMy4Pq1VKQuZ5kNUm
        subject_person_id: p_gUhWpKhF9MjeYLh73NSpPS
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王溥，清人物。曾任知縣。（中国历代人物传记资料库 CBDB 465146）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_SFt0uptabYOZ6lRX7flI34
          claim_id: c_YKBGTmMy4Pq1VKQuZ5kNUm
          source_id: s_n1MeKqusbnBN87xC8tHw2w
          stance: supports
          locator: CBDB:465146
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

# 王溥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王溥 | accepted |
| bio.summary | 王溥，清人物。曾任知縣。（中国历代人物传记资料库 CBDB 465146） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王溥（CBDB 465146）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=465146&o=json)
