---
schema: wang-person/v1
id: p_m2e3dzTxu7A7K31DGicryY
status: active
merged_into: null
display_name: 王言恭
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ioZUxsoaAvhpR77GZxvW9H
        subject_person_id: p_m2e3dzTxu7A7K31DGicryY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王言恭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_dTTKx19BQmUFbLUYyaPKAe
          claim_id: c_ioZUxsoaAvhpR77GZxvW9H
          source_id: s_WjepFHdB11tNr6wP3nBtT1
          stance: supports
          locator: CBDB:537214
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（537214）
          source: &a1
            id: s_WjepFHdB11tNr6wP3nBtT1
            source_type: api_record
            title: 中国历代人物传记资料库：王言恭（CBDB 537214）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=537214&o=json
            external_identifier: CBDB:537214
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.411Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_YMGZS1Wjh8iE4VVnmJErcN
        subject_person_id: p_m2e3dzTxu7A7K31DGicryY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王言恭，宋人物。籍贯全椒，入仕進士。（中国历代人物传记资料库 CBDB 537214）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_DCQ8-TibL9y7CDsHma4C2p
          claim_id: c_YMGZS1Wjh8iE4VVnmJErcN
          source_id: s_WjepFHdB11tNr6wP3nBtT1
          stance: supports
          locator: CBDB:537214
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

# 王言恭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王言恭 | accepted |
| bio.summary | 王言恭，宋人物。籍贯全椒，入仕進士。（中国历代人物传记资料库 CBDB 537214） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王言恭（CBDB 537214）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=537214&o=json)
