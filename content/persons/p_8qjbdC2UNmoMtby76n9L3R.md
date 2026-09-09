---
schema: wang-person/v1
id: p_8qjbdC2UNmoMtby76n9L3R
status: active
merged_into: null
display_name: 王玉
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qt6wS55j5nX7v2zA3nBZaN
        subject_person_id: p_8qjbdC2UNmoMtby76n9L3R
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MzfD8i3oJgufb6gs9wouUV
          claim_id: c_qt6wS55j5nX7v2zA3nBZaN
          source_id: s_f2hjA77B4T7vs4GtUJt6Tp
          stance: supports
          locator: CBDB:697171
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（697171）
          source: &a1
            id: s_f2hjA77B4T7vs4GtUJt6Tp
            source_type: api_record
            title: 中国历代人物传记资料库：王玉（CBDB 697171）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=697171&o=json
            external_identifier: CBDB:697171
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.716Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HD5DqLewStG1MQ9288EhJF
        subject_person_id: p_8qjbdC2UNmoMtby76n9L3R
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YH6F77ewd3DL2L3zR8LUGu
          claim_id: c_HD5DqLewStG1MQ9288EhJF
          source_id: s_f2hjA77B4T7vs4GtUJt6Tp
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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

# 王玉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王玉 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王玉（CBDB 697171）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=697171&o=json)
