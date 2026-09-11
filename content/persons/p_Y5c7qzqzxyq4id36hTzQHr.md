---
schema: wang-person/v1
id: p_Y5c7qzqzxyq4id36hTzQHr
status: active
merged_into: null
display_name: 王興
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DfZTZuB6pLGRJwNsbBeaek
        subject_person_id: p_Y5c7qzqzxyq4id36hTzQHr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王興
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4x8wrPQcrzDcQHCFKBQsKx
          claim_id: c_DfZTZuB6pLGRJwNsbBeaek
          source_id: s_1bTU4QUZ7hBqnDNxcJXgVF
          stance: supports
          locator: CBDB:457788
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（457788）
          source: &a1
            id: s_1bTU4QUZ7hBqnDNxcJXgVF
            source_type: api_record
            title: 中国历代人物传记资料库：王興（CBDB 457788）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=457788&o=json
            external_identifier: CBDB:457788
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.615Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_sze3ZqiJFkCJNV3oLGPPKz
        subject_person_id: p_Y5c7qzqzxyq4id36hTzQHr
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王興，明人物。曾任訓導。（中国历代人物传记资料库 CBDB 457788）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_aDzae72JPHpY_4l_8L4uIa
          claim_id: c_sze3ZqiJFkCJNV3oLGPPKz
          source_id: s_1bTU4QUZ7hBqnDNxcJXgVF
          stance: supports
          locator: CBDB:457788
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

# 王興

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王興 | accepted |
| bio.summary | 王興，明人物。曾任訓導。（中国历代人物传记资料库 CBDB 457788） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王興（CBDB 457788）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=457788&o=json)
