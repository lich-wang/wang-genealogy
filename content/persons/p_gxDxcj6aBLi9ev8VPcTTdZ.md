---
schema: wang-person/v1
id: p_gxDxcj6aBLi9ev8VPcTTdZ
status: active
merged_into: null
display_name: 王威
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4XLewVq2Zkc1t7vtRHu3dZ
        subject_person_id: p_gxDxcj6aBLi9ev8VPcTTdZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王威
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4sm9TmSt6EPWBpTXgVjcEz
          claim_id: c_4XLewVq2Zkc1t7vtRHu3dZ
          source_id: s_wuQ1mFa4SsFgwVfVJodGXM
          stance: supports
          locator: CBDB:32777
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（32777）
          source: &a1
            id: s_wuQ1mFa4SsFgwVfVJodGXM
            source_type: api_record
            title: 中国历代人物传记资料库：王威（CBDB 32777）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=32777&o=json
            external_identifier: CBDB:32777
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.057Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_39Wzqi5K7MS7389rPzuNNf
        subject_person_id: p_gxDxcj6aBLi9ev8VPcTTdZ
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
        - id: cs_2U8wwEGWLhisM4aBpay3mX
          claim_id: c_39Wzqi5K7MS7389rPzuNNf
          source_id: s_wuQ1mFa4SsFgwVfVJodGXM
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
        id: c_DfO1ARC1T3BqryWWPOwCj-
        subject_person_id: p_Kn82XJwQpx8E7VuzZp5MUd
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_gxDxcj6aBLi9ev8VPcTTdZ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5l-S3JJcOHNCIvR7ERL8Hm
          claim_id: c_DfO1ARC1T3BqryWWPOwCj-
          source_id: s_wuQ1mFa4SsFgwVfVJodGXM
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Kn82XJwQpx8E7VuzZp5MUd
        status: active
        display_name: 王景肅
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王威

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王威 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Kn82XJwQpx8E7VuzZp5MUd | 王景肅 | accepted |

## 外部来源

- [中国历代人物传记资料库：王威（CBDB 32777）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=32777&o=json)
