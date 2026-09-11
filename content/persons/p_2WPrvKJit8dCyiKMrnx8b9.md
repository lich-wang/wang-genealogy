---
schema: wang-person/v1
id: p_2WPrvKJit8dCyiKMrnx8b9
status: merged
merged_into: p_awcmjvARumCUVcUWMzCoPg
display_name: 王裁
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_siRahKt1YM3CfyfojQPHXj
        subject_person_id: p_2WPrvKJit8dCyiKMrnx8b9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王裁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_kSpSKmRuVrtHbUJyXmo9yv
          claim_id: c_siRahKt1YM3CfyfojQPHXj
          source_id: s_YpwtQt8N9KZN9K8QTwkzLB
          stance: supports
          locator: CBDB:25787
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（25787）
          source: &a1
            id: s_YpwtQt8N9KZN9K8QTwkzLB
            source_type: api_record
            title: 中国历代人物传记资料库：王裁（CBDB 25787）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25787&o=json
            external_identifier: CBDB:25787
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.917Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4LLHRKxxh3UCh7CcB8dbB7
        subject_person_id: p_2WPrvKJit8dCyiKMrnx8b9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为西晉人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NNPFTYj2tuSjeESa6yRj2d
          claim_id: c_4LLHRKxxh3UCh7CcB8dbB7
          source_id: s_YpwtQt8N9KZN9K8QTwkzLB
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

# 王裁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王裁 | accepted |
| bio.summary | CBDB 记载为西晉人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王裁（CBDB 25787）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25787&o=json)
