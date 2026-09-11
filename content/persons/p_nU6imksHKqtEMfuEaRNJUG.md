---
schema: wang-person/v1
id: p_nU6imksHKqtEMfuEaRNJUG
status: active
merged_into: null
display_name: 王上客
cbdb_id: 191289
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hRDZGt48RLrSqNud915sC4
        subject_person_id: p_nU6imksHKqtEMfuEaRNJUG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王上客
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_pZHmwsiqFWBTbcdwuHWrdd
          claim_id: c_hRDZGt48RLrSqNud915sC4
          source_id: s_me9K8G3FtkpaRu1ypeJzht
          stance: supports
          locator: Q26209933
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: &a1
            id: s_me9K8G3FtkpaRu1ypeJzht
            source_type: api_record
            title: 维基数据：王上客（Q26209933）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q26209933
            external_identifier: Q26209933
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
        - id: cs_bHgs9VS8qLurVPPcTmuzFH
          claim_id: c_hRDZGt48RLrSqNud915sC4
          source_id: s_d1BioWBySRD3o5vSLFQQoJ
          stance: supports
          locator: CBDB:191289
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: &a2
            id: s_d1BioWBySRD3o5vSLFQQoJ
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王上客（191289）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191289&o=json
            external_identifier: CBDB:191289
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_W7M5eWFU22sy17aeVCt222
        subject_person_id: p_nU6imksHKqtEMfuEaRNJUG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: Tang dynasty person CBDB = 191289
          language: en
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9dojjSYJTe43eF7SmQaR3D
          claim_id: c_W7M5eWFU22sy17aeVCt222
          source_id: s_me9K8G3FtkpaRu1ypeJzht
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 维基数据条目描述
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_56F1NmX66mXQ8N6BDmNKEB
        subject_person_id: p_nU6imksHKqtEMfuEaRNJUG
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 738年
            calendar_note: 维基数据 P570 结构化日期，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ePQS7BFK78FTUU4oRFEtkA
          claim_id: c_56F1NmX66mXQ8N6BDmNKEB
          source_id: s_me9K8G3FtkpaRu1ypeJzht
          stance: supports
          locator: P570（死亡日期）
          quotation: null
          interpretation_note: 维基数据 P570
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_0R3AE0pPBL0X1PujE-IIGh
        subject_person_id: p_yAEnnc4ZJJBwEULXGP2WRZ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_nU6imksHKqtEMfuEaRNJUG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_U7NCGUXYolQ2tzgqPsMs2c
          claim_id: c_0R3AE0pPBL0X1PujE-IIGh
          source_id: s_d1BioWBySRD3o5vSLFQQoJ
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a2
      object_person:
        id: p_yAEnnc4ZJJBwEULXGP2WRZ
        status: active
        display_name: 王敬忠
        merged_into_person_id: null
  children:
    - claim:
        id: c_jRDAVr8k7sAXi4MJ9rNqgm
        subject_person_id: p_nU6imksHKqtEMfuEaRNJUG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Cce815uEoUo6yUTu46sgAK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_y99ccM4CYf9aCjGhswvTBd
          claim_id: c_jRDAVr8k7sAXi4MJ9rNqgm
          source_id: s_pS92jA51R1fPE55T5LbhbD
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_pS92jA51R1fPE55T5LbhbD
            source_type: api_record
            title: 维基数据：王暾（Q26209938）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q26209938
            external_identifier: Q26209938
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:29.703Z
            metadata_json: null
        - id: cs_8ZDJWRuxUfTWTsQEiouZ6a
          claim_id: c_jRDAVr8k7sAXi4MJ9rNqgm
          source_id: s_me9K8G3FtkpaRu1ypeJzht
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source: *a1
      object_person:
        id: p_Cce815uEoUo6yUTu46sgAK
        status: active
        display_name: 王暾
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王上客

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王上客 | accepted |
| bio.summary | Tang dynasty person CBDB = 191289 | accepted |
| death.date | 738年 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_yAEnnc4ZJJBwEULXGP2WRZ | 王敬忠 | accepted |
| children | p_Cce815uEoUo6yUTu46sgAK | 王暾 | accepted |

## 外部来源

- [维基数据：王上客（Q26209933）](https://www.wikidata.org/wiki/Q26209933)
- [维基数据：王暾（Q26209938）](https://www.wikidata.org/wiki/Q26209938)
- [CBDB 中国历代人物传记资料库：王上客（191289）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191289&o=json)
