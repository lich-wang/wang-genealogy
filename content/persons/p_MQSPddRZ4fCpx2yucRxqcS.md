---
schema: wang-person/v1
id: p_MQSPddRZ4fCpx2yucRxqcS
status: active
merged_into: null
display_name: 王迢
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BPZjN2v2QQTNgXLiCrFB2E
        subject_person_id: p_MQSPddRZ4fCpx2yucRxqcS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王迢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_hmS6SbcNPGS3DVjt4eNX1V
          claim_id: c_BPZjN2v2QQTNgXLiCrFB2E
          source_id: s_doSdG9nFVCFSzhj6eSWkyb
          stance: supports
          locator: CBDB:155480
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（155480）
          source: &a1
            id: s_doSdG9nFVCFSzhj6eSWkyb
            source_type: api_record
            title: 中国历代人物传记资料库：王迢（CBDB 155480）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=155480&o=json
            external_identifier: CBDB:155480
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.878Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_r34P6MGq41ge3WYowrAD5X
        subject_person_id: p_MQSPddRZ4fCpx2yucRxqcS
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_q2yFGA3qyLezshuY46t8ga
          claim_id: c_r34P6MGq41ge3WYowrAD5X
          source_id: s_doSdG9nFVCFSzhj6eSWkyb
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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

# 王迢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王迢 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王迢（CBDB 155480）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=155480&o=json)
