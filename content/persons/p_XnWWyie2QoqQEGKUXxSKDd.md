---
schema: wang-person/v1
id: p_XnWWyie2QoqQEGKUXxSKDd
status: active
merged_into: null
display_name: 王尭基
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hH6fQxUMLQEuLxK68AUg7E
        subject_person_id: p_XnWWyie2QoqQEGKUXxSKDd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王尭基
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2yKbEkg9T3FCqftog1PegG
          claim_id: c_hH6fQxUMLQEuLxK68AUg7E
          source_id: s_UbCp6da1GLHgKAWNjd6qx5
          stance: supports
          locator: CBDB:572758
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（572758）
          source: &a1
            id: s_UbCp6da1GLHgKAWNjd6qx5
            source_type: api_record
            title: 中国历代人物传记资料库：王尭基（CBDB 572758）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=572758&o=json
            external_identifier: CBDB:572758
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.652Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_idyBpKSnz7FFEEG1FACe4j
        subject_person_id: p_XnWWyie2QoqQEGKUXxSKDd
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王尭基，宋人物。曾任左驍衛上將軍。（中国历代人物传记资料库 CBDB 572758）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_WyPQdlFb2WR156YPLxNnWF
          claim_id: c_idyBpKSnz7FFEEG1FACe4j
          source_id: s_UbCp6da1GLHgKAWNjd6qx5
          stance: supports
          locator: CBDB:572758
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_NpTHXqxuZONg0mK1k1WNBi
        subject_person_id: p_XnWWyie2QoqQEGKUXxSKDd
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_F6MGX9AM41o32x7Ua37zoL
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_i0j-IuwsDAFWNc5sdT3pFg
          claim_id: c_NpTHXqxuZONg0mK1k1WNBi
          source_id: s_QHcTVDFF18xEJhK6F5gREL
          stance: supports
          locator: 范太史集，卷四六《右監門衛大將軍妻王氏墓志銘》：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_QHcTVDFF18xEJhK6F5gREL
            source_type: api_record
            title: 中国历代人物传记资料库：王諤（CBDB 572760）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=572760&o=json
            external_identifier: CBDB:572760
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.892Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_F6MGX9AM41o32x7Ua37zoL
        status: active
        display_name: 王諤
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王尭基

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王尭基 | accepted |
| bio.summary | 王尭基，宋人物。曾任左驍衛上將軍。（中国历代人物传记资料库 CBDB 572758） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_F6MGX9AM41o32x7Ua37zoL | 王諤 | accepted |

## 外部来源

- [中国历代人物传记资料库：王諤（CBDB 572760）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=572760&o=json)
- [中国历代人物传记资料库：王尭基（CBDB 572758）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=572758&o=json)
