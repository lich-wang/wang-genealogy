---
schema: wang-person/v1
id: p_zJ3UJ8jSDAiaUoCF5KqZP1
status: active
merged_into: null
display_name: 王淮
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_o1uUFZArXKyaVSg78hs6kE
        subject_person_id: p_zJ3UJ8jSDAiaUoCF5KqZP1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王淮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6iW2EwXEDouuQyXL8fssJW
          claim_id: c_o1uUFZArXKyaVSg78hs6kE
          source_id: s_2qeH9rBtQ2WSoFyBzjHoAy
          stance: supports
          locator: CBDB:342481
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（342481）
          source: &a1
            id: s_2qeH9rBtQ2WSoFyBzjHoAy
            source_type: api_record
            title: 中国历代人物传记资料库：王淮（CBDB 342481）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342481&o=json
            external_identifier: CBDB:342481
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.947Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZV3MtBtmz7zJgkPcUCvPok
        subject_person_id: p_zJ3UJ8jSDAiaUoCF5KqZP1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王淮，明人物。明清進士進士，籍贯福寧州，入仕進士。（中国历代人物传记资料库 CBDB 342481）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_-jGkpC-XeOkU1POxMJsZpz
          claim_id: c_ZV3MtBtmz7zJgkPcUCvPok
          source_id: s_2qeH9rBtQ2WSoFyBzjHoAy
          stance: supports
          locator: CBDB:342481
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

# 王淮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王淮 | accepted |
| bio.summary | 王淮，明人物。明清進士進士，籍贯福寧州，入仕進士。（中国历代人物传记资料库 CBDB 342481） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王淮（CBDB 342481）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342481&o=json)
