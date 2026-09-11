---
schema: wang-person/v1
id: p_1Z6ZWrj7diHL9FZFAFvqzn
status: active
merged_into: null
display_name: 王慶埏
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_rA7zFNKf7LZidtNbMD8gC5
        subject_person_id: p_1Z6ZWrj7diHL9FZFAFvqzn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王慶埏
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_SRWGPxRUBf7DKQkNCQCPgE
          claim_id: c_rA7zFNKf7LZidtNbMD8gC5
          source_id: s_JgZSBpw2SsaRQZKkC5QjPg
          stance: supports
          locator: CBDB:341597
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（341597）
          source: &a1
            id: s_JgZSBpw2SsaRQZKkC5QjPg
            source_type: api_record
            title: 中国历代人物传记资料库：王慶埏（CBDB 341597）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=341597&o=json
            external_identifier: CBDB:341597
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.609Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_AJ5r66MLCbL5TvBrHc2nnT
        subject_person_id: p_1Z6ZWrj7diHL9FZFAFvqzn
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王慶埏，清人物。明清進士進士，籍贯會稽，入仕進士。（中国历代人物传记资料库 CBDB 341597）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Mh1v7faJ9iU1vBUHPMNsvL
          claim_id: c_AJ5r66MLCbL5TvBrHc2nnT
          source_id: s_JgZSBpw2SsaRQZKkC5QjPg
          stance: supports
          locator: CBDB:341597
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

# 王慶埏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王慶埏 | accepted |
| bio.summary | 王慶埏，清人物。明清進士進士，籍贯會稽，入仕進士。（中国历代人物传记资料库 CBDB 341597） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王慶埏（CBDB 341597）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=341597&o=json)
