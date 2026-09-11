---
schema: wang-person/v1
id: p_CDDfB7o74FSj3mNF8dWBGL
status: active
merged_into: null
display_name: 王樹鍭
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_smCCgpcGuEdyESiCuxxQKL
        subject_person_id: p_CDDfB7o74FSj3mNF8dWBGL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王樹鍭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KqH8Dj4dLiq6C2AKV5HkT8
          claim_id: c_smCCgpcGuEdyESiCuxxQKL
          source_id: s_7s8aHhnc1pNq2yMpETTKSE
          stance: supports
          locator: CBDB:638870
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638870）
          source: &a1
            id: s_7s8aHhnc1pNq2yMpETTKSE
            source_type: api_record
            title: 中国历代人物传记资料库：王樹鍭（CBDB 638870）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638870&o=json
            external_identifier: CBDB:638870
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.773Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_o4wtMQUYYU3fFcFNGMsmfd
        subject_person_id: p_CDDfB7o74FSj3mNF8dWBGL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王樹鍭，清人物。籍贯楚雄，入仕優貢生，曾任復設訓導。（中国历代人物传记资料库 CBDB 638870）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ooxijAsq0ZqimETZhulyTX
          claim_id: c_o4wtMQUYYU3fFcFNGMsmfd
          source_id: s_7s8aHhnc1pNq2yMpETTKSE
          stance: supports
          locator: CBDB:638870
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

# 王樹鍭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王樹鍭 | accepted |
| bio.summary | 王樹鍭，清人物。籍贯楚雄，入仕優貢生，曾任復設訓導。（中国历代人物传记资料库 CBDB 638870） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王樹鍭（CBDB 638870）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638870&o=json)
