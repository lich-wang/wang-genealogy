---
schema: wang-person/v1
id: p_yAEnnc4ZJJBwEULXGP2WRZ
status: active
merged_into: null
display_name: 王敬忠
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_JfVLAdsz7aoKQfS7JxqPa3
        subject_person_id: p_yAEnnc4ZJJBwEULXGP2WRZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敬忠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_oHHRKBS1Qh8s2T9kCy76pA
          claim_id: c_JfVLAdsz7aoKQfS7JxqPa3
          source_id: s_GspUPyACX6TpJQYJgebSor
          stance: supports
          locator: CBDB:191290
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（191290）
          source: &a1
            id: s_GspUPyACX6TpJQYJgebSor
            source_type: api_record
            title: 中国历代人物传记资料库：王敬忠（CBDB 191290）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191290&o=json
            external_identifier: CBDB:191290
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.358Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_YidndBdSAAtj92d3tjHiNc
        subject_person_id: p_yAEnnc4ZJJBwEULXGP2WRZ
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 701年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vgqFPHuMRT8M1DGY9hJRhr
          claim_id: c_YidndBdSAAtj92d3tjHiNc
          source_id: s_GspUPyACX6TpJQYJgebSor
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
        id: c_KgscjL9zWwJfQLx1nPC7j6
        subject_person_id: p_yAEnnc4ZJJBwEULXGP2WRZ
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
        - id: cs_sxjeCpjBt9bEphLe6XsLdK
          claim_id: c_KgscjL9zWwJfQLx1nPC7j6
          source_id: s_GspUPyACX6TpJQYJgebSor
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
        id: c_0riIPcU2saulc0hszrvcnZ
        subject_person_id: p_cAfDeDmGVLXrJWEBuPmaLA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_yAEnnc4ZJJBwEULXGP2WRZ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ftcf42eXkp0z8Om7jD5sRu
          claim_id: c_0riIPcU2saulc0hszrvcnZ
          source_id: s_NAarnj9zEKE2QWyBe5LmzB
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_NAarnj9zEKE2QWyBe5LmzB
            source_type: api_record
            title: 中国历代人物传记资料库：王顗（CBDB 191291）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191291&o=json
            external_identifier: CBDB:191291
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.359Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_cAfDeDmGVLXrJWEBuPmaLA
        status: active
        display_name: 王顗
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王敬忠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王敬忠 | accepted |
| death.date | 701年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_cAfDeDmGVLXrJWEBuPmaLA | 王顗 | accepted |

## 外部来源

- [中国历代人物传记资料库：王敬忠（CBDB 191290）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191290&o=json)
- [中国历代人物传记资料库：王顗（CBDB 191291）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191291&o=json)
