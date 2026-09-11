---
schema: wang-person/v1
id: p_YDogWT4KygVBvqVBhLrJzu
status: active
merged_into: null
display_name: 王之幹
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_abcn43aEkyjhserNHmxcUk
        subject_person_id: p_YDogWT4KygVBvqVBhLrJzu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之幹
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_o7MA9a8uiGvYVPoEkYLrFp
          claim_id: c_abcn43aEkyjhserNHmxcUk
          source_id: s_PQN5GL7A3wS7UnqFpmxwny
          stance: supports
          locator: CBDB:342568
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（342568）
          source: &a1
            id: s_PQN5GL7A3wS7UnqFpmxwny
            source_type: api_record
            title: 中国历代人物传记资料库：王之幹（CBDB 342568）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342568&o=json
            external_identifier: CBDB:342568
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.974Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_sbfiD5c7vYL3ecxSy3WX3W
        subject_person_id: p_YDogWT4KygVBvqVBhLrJzu
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之幹，清人物。明清進士進士，籍贯開泰，入仕進士。（中国历代人物传记资料库 CBDB 342568）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_8SBEv80uVYpJNtZLrYzvff
          claim_id: c_sbfiD5c7vYL3ecxSy3WX3W
          source_id: s_PQN5GL7A3wS7UnqFpmxwny
          stance: supports
          locator: CBDB:342568
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

# 王之幹

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王之幹 | accepted |
| bio.summary | 王之幹，清人物。明清進士進士，籍贯開泰，入仕進士。（中国历代人物传记资料库 CBDB 342568） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王之幹（CBDB 342568）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342568&o=json)
