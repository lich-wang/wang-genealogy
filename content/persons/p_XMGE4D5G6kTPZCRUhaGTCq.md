---
schema: wang-person/v1
id: p_XMGE4D5G6kTPZCRUhaGTCq
status: active
merged_into: null
display_name: 王錦
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_h4p54xfNNx9Wz1HQ5JT5dR
        subject_person_id: p_XMGE4D5G6kTPZCRUhaGTCq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錦
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CzQztTRBDmwMDCtyL9tYqg
          claim_id: c_h4p54xfNNx9Wz1HQ5JT5dR
          source_id: s_VKvwKQYXhv3jpXkXmJGCuD
          stance: supports
          locator: CBDB:343796
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（343796）
          source: &a1
            id: s_VKvwKQYXhv3jpXkXmJGCuD
            source_type: api_record
            title: 中国历代人物传记资料库：王錦（CBDB 343796）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343796&o=json
            external_identifier: CBDB:343796
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.509Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_TxqKF6yo2ETazJhXGjcq8r
        subject_person_id: p_XMGE4D5G6kTPZCRUhaGTCq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錦，清人物。明清進士進士，籍贯大興，入仕進士。（中国历代人物传记资料库 CBDB 343796）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_LisCQL089v3sChul0xGKDb
          claim_id: c_TxqKF6yo2ETazJhXGjcq8r
          source_id: s_VKvwKQYXhv3jpXkXmJGCuD
          stance: supports
          locator: CBDB:343796
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

# 王錦

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王錦 | accepted |
| bio.summary | 王錦，清人物。明清進士進士，籍贯大興，入仕進士。（中国历代人物传记资料库 CBDB 343796） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王錦（CBDB 343796）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343796&o=json)
