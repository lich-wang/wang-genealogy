---
schema: wang-person/v1
id: p_MQYZ5YiKKdwGdf91aBTnYX
status: active
merged_into: null
display_name: 王宗義
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KNSxL3YFMQ1j2ebrRFdwSw
        subject_person_id: p_MQYZ5YiKKdwGdf91aBTnYX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗義
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_V493ZDsk2h23jUx9nH3x4A
          claim_id: c_KNSxL3YFMQ1j2ebrRFdwSw
          source_id: s_my4maJ235JPrdHGJZeTGRT
          stance: supports
          locator: CBDB:508652
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（508652）
          source: &a1
            id: s_my4maJ235JPrdHGJZeTGRT
            source_type: api_record
            title: 中国历代人物传记资料库：王宗義（CBDB 508652）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=508652&o=json
            external_identifier: CBDB:508652
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.101Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LY8uCaKgMp6Gc2FC4y3u2u
        subject_person_id: p_MQYZ5YiKKdwGdf91aBTnYX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗義，明人物。曾任縣丞。（中国历代人物传记资料库 CBDB 508652）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_q7Bdxr-29-2_oPD8DrX5xe
          claim_id: c_LY8uCaKgMp6Gc2FC4y3u2u
          source_id: s_my4maJ235JPrdHGJZeTGRT
          stance: supports
          locator: CBDB:508652
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

# 王宗義

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宗義 | accepted |
| bio.summary | 王宗義，明人物。曾任縣丞。（中国历代人物传记资料库 CBDB 508652） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王宗義（CBDB 508652）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=508652&o=json)
