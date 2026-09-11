---
schema: wang-person/v1
id: p_bDay8j7j9e9LoMHfJLghTE
status: active
merged_into: null
display_name: 王喜
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_dG9MEFNSpGET96RNPCog1D
        subject_person_id: p_bDay8j7j9e9LoMHfJLghTE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王喜
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_yp8GHF5PsAKJxZoT9gEiRR
          claim_id: c_dG9MEFNSpGET96RNPCog1D
          source_id: s_n1LJq6kHcsf8ahRA3sp8yt
          stance: supports
          locator: CBDB:463944
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（463944）
          source: &a1
            id: s_n1LJq6kHcsf8ahRA3sp8yt
            source_type: api_record
            title: 中国历代人物传记资料库：王喜（CBDB 463944）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=463944&o=json
            external_identifier: CBDB:463944
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.887Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7fNYwShgCGMBU814pd91AF
        subject_person_id: p_bDay8j7j9e9LoMHfJLghTE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王喜，宋人物。曾任統領。（中国历代人物传记资料库 CBDB 463944）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_r3u5JzwdTQUz7lK-nieKHc
          claim_id: c_7fNYwShgCGMBU814pd91AF
          source_id: s_n1LJq6kHcsf8ahRA3sp8yt
          stance: supports
          locator: CBDB:463944
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

# 王喜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王喜 | accepted |
| bio.summary | 王喜，宋人物。曾任統領。（中国历代人物传记资料库 CBDB 463944） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王喜（CBDB 463944）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=463944&o=json)
