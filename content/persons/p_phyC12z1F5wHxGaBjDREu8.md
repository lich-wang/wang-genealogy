---
schema: wang-person/v1
id: p_phyC12z1F5wHxGaBjDREu8
status: active
merged_into: null
display_name: 王碩屏
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_bZ5zDhYDXNsEXGd1VL2wAG
        subject_person_id: p_phyC12z1F5wHxGaBjDREu8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王碩屏
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GVDevTqkzmaQ3ia9dnjK4M
          claim_id: c_bZ5zDhYDXNsEXGd1VL2wAG
          source_id: s_ZkMsBSzTzyy8WfTmQJfnke
          stance: supports
          locator: CBDB:558328
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（558328）
          source: &a1
            id: s_ZkMsBSzTzyy8WfTmQJfnke
            source_type: api_record
            title: 中国历代人物传记资料库：王碩屏（CBDB 558328）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=558328&o=json
            external_identifier: CBDB:558328
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.544Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MZ69cqWU4tVNi6JgD8gC4K
        subject_person_id: p_phyC12z1F5wHxGaBjDREu8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CtYtHimunmb3sv6UzHXigv
          claim_id: c_MZ69cqWU4tVNi6JgD8gC4K
          source_id: s_ZkMsBSzTzyy8WfTmQJfnke
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_20UgMmjoMdDpM0YxX7jM-a
        subject_person_id: p_JVX3N2NMUD29if1DKDiCKX
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_phyC12z1F5wHxGaBjDREu8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YulXLcOyjlUs80VSxNpFY2
          claim_id: c_20UgMmjoMdDpM0YxX7jM-a
          source_id: s_DspGZYh2g4o7w59P4qUXMY
          stance: supports
          locator: 南陽府志，lgid=878829：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_DspGZYh2g4o7w59P4qUXMY
            source_type: api_record
            title: 中国历代人物传记资料库：王路（CBDB 558326）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=558326&o=json
            external_identifier: CBDB:558326
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.697Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_JVX3N2NMUD29if1DKDiCKX
        status: active
        display_name: 王路
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王碩屏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王碩屏 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_JVX3N2NMUD29if1DKDiCKX | 王路 | accepted |

## 外部来源

- [中国历代人物传记资料库：王路（CBDB 558326）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=558326&o=json)
- [中国历代人物传记资料库：王碩屏（CBDB 558328）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=558328&o=json)
