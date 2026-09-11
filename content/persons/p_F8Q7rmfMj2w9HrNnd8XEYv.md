---
schema: wang-person/v1
id: p_F8Q7rmfMj2w9HrNnd8XEYv
status: active
merged_into: null
display_name: 王進學
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1XbbxgCx7pUG17t469cc7L
        subject_person_id: p_F8Q7rmfMj2w9HrNnd8XEYv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王進學
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ZPQKNf7E5P7knuebYR2Qxx
          claim_id: c_1XbbxgCx7pUG17t469cc7L
          source_id: s_BUjP1xdR4gJncEkDJM7z9L
          stance: supports
          locator: CBDB:494339
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（494339）
          source: &a1
            id: s_BUjP1xdR4gJncEkDJM7z9L
            source_type: api_record
            title: 中国历代人物传记资料库：王進學（CBDB 494339）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=494339&o=json
            external_identifier: CBDB:494339
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.443Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4qfQ8gC5L8Gc38rB7P1aLa
        subject_person_id: p_F8Q7rmfMj2w9HrNnd8XEYv
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王進學，清人物。曾任典史。（中国历代人物传记资料库 CBDB 494339）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_UsGpjyfudExVlXPF1BUk1t
          claim_id: c_4qfQ8gC5L8Gc38rB7P1aLa
          source_id: s_BUjP1xdR4gJncEkDJM7z9L
          stance: supports
          locator: CBDB:494339
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

# 王進學

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王進學 | accepted |
| bio.summary | 王進學，清人物。曾任典史。（中国历代人物传记资料库 CBDB 494339） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王進學（CBDB 494339）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=494339&o=json)
