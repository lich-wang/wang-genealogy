---
schema: wang-person/v1
id: p_6eaAjrU99rp44xUhiLPCEu
status: active
merged_into: null
display_name: 王寬
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ESnMgcwJiJE3mqc2wnVZg2
        subject_person_id: p_6eaAjrU99rp44xUhiLPCEu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_fADQFzh18xz8o8CHge7qKQ
          claim_id: c_ESnMgcwJiJE3mqc2wnVZg2
          source_id: s_s9zVDmPKCT16HccwhMXTbk
          stance: supports
          locator: CBDB:250019
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（250019）
          source: &a1
            id: s_s9zVDmPKCT16HccwhMXTbk
            source_type: api_record
            title: 中国历代人物传记资料库：王寬（CBDB 250019）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250019&o=json
            external_identifier: CBDB:250019
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.208Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_nBKV4LbJemdzrszibn63jp
        subject_person_id: p_6eaAjrU99rp44xUhiLPCEu
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Q4TqzpN6R6DCfTJ7c7gxhs
          claim_id: c_nBKV4LbJemdzrszibn63jp
          source_id: s_s9zVDmPKCT16HccwhMXTbk
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

# 王寬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王寬 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王寬（CBDB 250019）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250019&o=json)
