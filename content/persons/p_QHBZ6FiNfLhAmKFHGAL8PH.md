---
schema: wang-person/v1
id: p_QHBZ6FiNfLhAmKFHGAL8PH
status: active
merged_into: null
display_name: 王本立
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ziRuUWoWiosehFr5QwSSg1
        subject_person_id: p_QHBZ6FiNfLhAmKFHGAL8PH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王本立
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_vaDpGUqwtXgaqiTy2pgwse
          claim_id: c_ziRuUWoWiosehFr5QwSSg1
          source_id: s_TSXa8gCKYB2mKRfGfgJrg6
          stance: supports
          locator: CBDB:185123
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（185123）
          source: &a1
            id: s_TSXa8gCKYB2mKRfGfgJrg6
            source_type: api_record
            title: 中国历代人物传记资料库：王本立（CBDB 185123）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=185123&o=json
            external_identifier: CBDB:185123
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.238Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_yEZsoE4ypGQqn1PUWEcWEP
        subject_person_id: p_QHBZ6FiNfLhAmKFHGAL8PH
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 851年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MsbebBLAnue8MUo5B9BrzP
          claim_id: c_yEZsoE4ypGQqn1PUWEcWEP
          source_id: s_TSXa8gCKYB2mKRfGfgJrg6
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
        id: c_VBm6JM4PTpKKbHG915SSQx
        subject_person_id: p_QHBZ6FiNfLhAmKFHGAL8PH
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
        - id: cs_5kCY6nvcg9b217XsMkS542
          claim_id: c_VBm6JM4PTpKKbHG915SSQx
          source_id: s_TSXa8gCKYB2mKRfGfgJrg6
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_lxajtJOgcWv_ZWRAHg6H76
        subject_person_id: p_vvHSQNDSfE6nLUen9b792c
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_QHBZ6FiNfLhAmKFHGAL8PH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uyauJ51ZtrcGk2n92AyMn_
          claim_id: c_lxajtJOgcWv_ZWRAHg6H76
          source_id: s_TSXa8gCKYB2mKRfGfgJrg6
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_vvHSQNDSfE6nLUen9b792c
        status: active
        display_name: 王正言
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王本立

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王本立 | accepted |
| death.date | 851年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_vvHSQNDSfE6nLUen9b792c | 王正言 | accepted |

## 外部来源

- [中国历代人物传记资料库：王本立（CBDB 185123）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=185123&o=json)
