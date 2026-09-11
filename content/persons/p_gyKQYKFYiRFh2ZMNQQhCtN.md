---
schema: wang-person/v1
id: p_gyKQYKFYiRFh2ZMNQQhCtN
status: active
merged_into: null
display_name: 王鼎
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3f7Mgo6ax5SEwGZgfXxb51
        subject_person_id: p_gyKQYKFYiRFh2ZMNQQhCtN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鼎
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Hx1GfjK8w8BKytKofcNEja
          claim_id: c_3f7Mgo6ax5SEwGZgfXxb51
          source_id: s_ZPcP2xH4Y4hnxAihVeKS3n
          stance: supports
          locator: CBDB:247835
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（247835）
          source: &a1
            id: s_ZPcP2xH4Y4hnxAihVeKS3n
            source_type: api_record
            title: 中国历代人物传记资料库：王鼎（CBDB 247835）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247835&o=json
            external_identifier: CBDB:247835
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.140Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_tKKcw7dZxiKLRD8ekCvoti
        subject_person_id: p_gyKQYKFYiRFh2ZMNQQhCtN
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
        - id: cs_3DFqd1HVWZHL6Jy5JQ2VNw
          claim_id: c_tKKcw7dZxiKLRD8ekCvoti
          source_id: s_ZPcP2xH4Y4hnxAihVeKS3n
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_7S9B0nRR_Nt552O7Y4OlqJ
        subject_person_id: p_gyKQYKFYiRFh2ZMNQQhCtN
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ZjuF9BMneyLuUjQuike359
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cdL8oxnH6I3BT8AlityvOB
          claim_id: c_7S9B0nRR_Nt552O7Y4OlqJ
          source_id: s_ZPcP2xH4Y4hnxAihVeKS3n
          stance: supports
          locator: 成化十一年進士登科錄:一卷，第二甲第二十一名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_ZjuF9BMneyLuUjQuike359
        status: active
        display_name: 王鍃
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王鼎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鼎 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_ZjuF9BMneyLuUjQuike359 | 王鍃 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鼎（CBDB 247835）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247835&o=json)
