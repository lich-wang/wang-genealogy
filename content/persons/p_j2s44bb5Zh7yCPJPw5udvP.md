---
schema: wang-person/v1
id: p_j2s44bb5Zh7yCPJPw5udvP
status: active
merged_into: null
display_name: 王鶴齡
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_L7UuU5fqHgRyMF16SXKq8v
        subject_person_id: p_j2s44bb5Zh7yCPJPw5udvP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鶴齡
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4HNrGjcaz5cZa9YaA2wCDU
          claim_id: c_L7UuU5fqHgRyMF16SXKq8v
          source_id: s_Q3W1Jzh9SED72tiNQ7ff7c
          stance: supports
          locator: CBDB:343275
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（343275）
          source: &a1
            id: s_Q3W1Jzh9SED72tiNQ7ff7c
            source_type: api_record
            title: 中国历代人物传记资料库：王鶴齡（CBDB 343275）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343275&o=json
            external_identifier: CBDB:343275
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.274Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_kHfk3EzZi8J6wysFPprqJG
        subject_person_id: p_j2s44bb5Zh7yCPJPw5udvP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鶴齡，明人物。明清進士進士，籍贯平陸，入仕進士。（中国历代人物传记资料库 CBDB 343275）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_wCextmO-vFd3wHaujO9Z1Q
          claim_id: c_kHfk3EzZi8J6wysFPprqJG
          source_id: s_Q3W1Jzh9SED72tiNQ7ff7c
          stance: supports
          locator: CBDB:343275
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

# 王鶴齡

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鶴齡 | accepted |
| bio.summary | 王鶴齡，明人物。明清進士進士，籍贯平陸，入仕進士。（中国历代人物传记资料库 CBDB 343275） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鶴齡（CBDB 343275）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343275&o=json)
