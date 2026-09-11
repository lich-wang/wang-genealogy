---
schema: wang-person/v1
id: p_FQiANb3FNiA1WU8FEg63E7
status: active
merged_into: null
display_name: 王鳴鳳
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_JJLLFqk5Kg1qmqSp8saZP9
        subject_person_id: p_FQiANb3FNiA1WU8FEg63E7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鳴鳳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_d3vXtrjwYA3PdCRV2QeG14
          claim_id: c_JJLLFqk5Kg1qmqSp8saZP9
          source_id: s_YUne5iUCeMnKLZen569Lk4
          stance: supports
          locator: CBDB:574135
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（574135）
          source: &a1
            id: s_YUne5iUCeMnKLZen569Lk4
            source_type: api_record
            title: 中国历代人物传记资料库：王鳴鳳（CBDB 574135）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=574135&o=json
            external_identifier: CBDB:574135
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.911Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_AWG7pRCNQLBzpVAoGCaMWw
        subject_person_id: p_FQiANb3FNiA1WU8FEg63E7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鳴鳳，清人物。籍贯孝感，曾任雲騎尉。（中国历代人物传记资料库 CBDB 574135）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_fg-UhviF9eJNPPzJiO05Wf
          claim_id: c_AWG7pRCNQLBzpVAoGCaMWw
          source_id: s_YUne5iUCeMnKLZen569Lk4
          stance: supports
          locator: CBDB:574135
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

# 王鳴鳳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鳴鳳 | accepted |
| bio.summary | 王鳴鳳，清人物。籍贯孝感，曾任雲騎尉。（中国历代人物传记资料库 CBDB 574135） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鳴鳳（CBDB 574135）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=574135&o=json)
