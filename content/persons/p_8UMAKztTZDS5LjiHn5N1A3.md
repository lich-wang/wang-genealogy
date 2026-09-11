---
schema: wang-person/v1
id: p_8UMAKztTZDS5LjiHn5N1A3
status: active
merged_into: null
display_name: 王應文
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vVhQBMb5sBuywAD23WiGB4
        subject_person_id: p_8UMAKztTZDS5LjiHn5N1A3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應文
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KxxaFur76BGNsxuw5aYxHQ
          claim_id: c_vVhQBMb5sBuywAD23WiGB4
          source_id: s_t8P2DeiLobzNELLkNJn3qW
          stance: supports
          locator: CBDB:637986
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637986）
          source: &a1
            id: s_t8P2DeiLobzNELLkNJn3qW
            source_type: api_record
            title: 中国历代人物传记资料库：王應文（CBDB 637986）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637986&o=json
            external_identifier: CBDB:637986
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.580Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CcmB6LBELoAhrPzSAVr62z
        subject_person_id: p_8UMAKztTZDS5LjiHn5N1A3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應文，清人物。籍贯大興，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 637986）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_FQFB_6XEpoZK8mX5jrFQAk
          claim_id: c_CcmB6LBELoAhrPzSAVr62z
          source_id: s_t8P2DeiLobzNELLkNJn3qW
          stance: supports
          locator: CBDB:637986
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

# 王應文

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王應文 | accepted |
| bio.summary | 王應文，清人物。籍贯大興，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 637986） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王應文（CBDB 637986）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637986&o=json)
