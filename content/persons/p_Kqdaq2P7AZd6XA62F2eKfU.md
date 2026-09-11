---
schema: wang-person/v1
id: p_Kqdaq2P7AZd6XA62F2eKfU
status: active
merged_into: null
display_name: 王錫章
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6CFamwDoYfPRYZvio3VDwJ
        subject_person_id: p_Kqdaq2P7AZd6XA62F2eKfU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錫章
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_RoNZQsAsqfPDAp19MLBrhz
          claim_id: c_6CFamwDoYfPRYZvio3VDwJ
          source_id: s_UE1cPbbBPqARDJVLYkdfLP
          stance: supports
          locator: CBDB:640639
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640639）
          source: &a1
            id: s_UE1cPbbBPqARDJVLYkdfLP
            source_type: api_record
            title: 中国历代人物传记资料库：王錫章（CBDB 640639）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640639&o=json
            external_identifier: CBDB:640639
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.166Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_k1Qp3mNYrBPL6QyxAB9v8J
        subject_person_id: p_Kqdaq2P7AZd6XA62F2eKfU
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錫章，清人物。籍贯潮州府，曾任訓導。（中国历代人物传记资料库 CBDB 640639）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_GMLTAVdeOg3Mscr5mVde1Q
          claim_id: c_k1Qp3mNYrBPL6QyxAB9v8J
          source_id: s_UE1cPbbBPqARDJVLYkdfLP
          stance: supports
          locator: CBDB:640639
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

# 王錫章

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王錫章 | accepted |
| bio.summary | 王錫章，清人物。籍贯潮州府，曾任訓導。（中国历代人物传记资料库 CBDB 640639） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王錫章（CBDB 640639）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640639&o=json)
