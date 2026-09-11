---
schema: wang-person/v1
id: p_NA6uA34HWqF44rhfVg8JVc
status: active
merged_into: null
display_name: 王景肅
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_uXwMrV2Axfwx9minihShJn
        subject_person_id: p_NA6uA34HWqF44rhfVg8JVc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景肅
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_69ED4A8MXGA1PJps2VMBy5
          claim_id: c_uXwMrV2Axfwx9minihShJn
          source_id: s_WJradA74bz57LnNM1dUs5j
          stance: supports
          locator: CBDB:190796
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（190796）
          source: &a1
            id: s_WJradA74bz57LnNM1dUs5j
            source_type: api_record
            title: 中国历代人物传记资料库：王景肅（CBDB 190796）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=190796&o=json
            external_identifier: CBDB:190796
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.336Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_nsUavQpxWswBSF182rW43w
        subject_person_id: p_NA6uA34HWqF44rhfVg8JVc
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 747年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_19kH8cPb7CEpXck1MePtxa
          claim_id: c_nsUavQpxWswBSF182rW43w
          source_id: s_WJradA74bz57LnNM1dUs5j
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_vecxU51jBPg2SurJQqGDvF
        subject_person_id: p_NA6uA34HWqF44rhfVg8JVc
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
        - id: cs_ibMjGicGjPw6Hr9LN9ftzM
          claim_id: c_vecxU51jBPg2SurJQqGDvF
          source_id: s_WJradA74bz57LnNM1dUs5j
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
        id: c_5I4M1qxmic411YNiIPw9d3
        subject_person_id: p_NA6uA34HWqF44rhfVg8JVc
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_AJthCZJzr5eAL2kCMPefer
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JoYTxHTbOtshyH78dTWpQp
          claim_id: c_5I4M1qxmic411YNiIPw9d3
          source_id: s_9fnqQwS63W6YAWQtEUi1J4
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_9fnqQwS63W6YAWQtEUi1J4
            source_type: api_record
            title: 中国历代人物传记资料库：王政（CBDB 190795）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=190795&o=json
            external_identifier: CBDB:190795
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.335Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_AJthCZJzr5eAL2kCMPefer
        status: active
        display_name: 王政
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王景肅

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王景肅 | accepted |
| death.date | 747年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_AJthCZJzr5eAL2kCMPefer | 王政 | accepted |

## 外部来源

- [中国历代人物传记资料库：王景肅（CBDB 190796）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=190796&o=json)
- [中国历代人物传记资料库：王政（CBDB 190795）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=190795&o=json)
