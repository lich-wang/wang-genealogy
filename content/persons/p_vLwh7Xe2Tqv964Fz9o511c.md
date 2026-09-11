---
schema: wang-person/v1
id: p_vLwh7Xe2Tqv964Fz9o511c
status: active
merged_into: null
display_name: 王溥
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_tpCDrpDUqSt7qZS997yVxb
        subject_person_id: p_vLwh7Xe2Tqv964Fz9o511c
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王溥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_dPBjdhiBu9Eb3prx66QmYE
          claim_id: c_tpCDrpDUqSt7qZS997yVxb
          source_id: s_fmAZgw7K6FLFFqaLCbC9vy
          stance: supports
          locator: CBDB:342688
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（342688）
          source: &a1
            id: s_fmAZgw7K6FLFFqaLCbC9vy
            source_type: api_record
            title: 中国历代人物传记资料库：王溥（CBDB 342688）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342688&o=json
            external_identifier: CBDB:342688
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.016Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DBFib5Je6jzg7JhxRFmeJ4
        subject_person_id: p_vLwh7Xe2Tqv964Fz9o511c
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王溥，明人物。明清進士進士，籍贯臨桂，入仕進士。（中国历代人物传记资料库 CBDB 342688）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Rn3oswB8A_EzSPv8WOEBCq
          claim_id: c_DBFib5Je6jzg7JhxRFmeJ4
          source_id: s_fmAZgw7K6FLFFqaLCbC9vy
          stance: supports
          locator: CBDB:342688
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

# 王溥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王溥 | accepted |
| bio.summary | 王溥，明人物。明清進士進士，籍贯臨桂，入仕進士。（中国历代人物传记资料库 CBDB 342688） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王溥（CBDB 342688）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342688&o=json)
