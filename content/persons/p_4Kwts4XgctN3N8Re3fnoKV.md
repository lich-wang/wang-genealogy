---
schema: wang-person/v1
id: p_4Kwts4XgctN3N8Re3fnoKV
status: active
merged_into: null
display_name: 王璠
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ymveDF72pcSuZEi2ci6ZjS
        subject_person_id: p_4Kwts4XgctN3N8Re3fnoKV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LzJhTNMt1iAbYMixQsq1d2
          claim_id: c_ymveDF72pcSuZEi2ci6ZjS
          source_id: s_FrL4BytNQTwfCA7nJvcoVz
          stance: supports
          locator: CBDB:341889
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（341889）
          source: &a1
            id: s_FrL4BytNQTwfCA7nJvcoVz
            source_type: api_record
            title: 中国历代人物传记资料库：王璠（CBDB 341889）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=341889&o=json
            external_identifier: CBDB:341889
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.754Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_dZPwYBomVM76AU8AZP83qq
        subject_person_id: p_4Kwts4XgctN3N8Re3fnoKV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璠，清人物。明清進士進士，籍贯福山，入仕進士。（中国历代人物传记资料库 CBDB 341889）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_IUUJNvAEww0Emhqdmbp4D9
          claim_id: c_dZPwYBomVM76AU8AZP83qq
          source_id: s_FrL4BytNQTwfCA7nJvcoVz
          stance: supports
          locator: CBDB:341889
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

# 王璠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王璠 | accepted |
| bio.summary | 王璠，清人物。明清進士進士，籍贯福山，入仕進士。（中国历代人物传记资料库 CBDB 341889） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王璠（CBDB 341889）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=341889&o=json)
