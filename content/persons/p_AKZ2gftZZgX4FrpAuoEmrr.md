---
schema: wang-person/v1
id: p_AKZ2gftZZgX4FrpAuoEmrr
status: active
merged_into: null
display_name: 王大璡
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Pav1p2PL342zPgcmE3GVAV
        subject_person_id: p_AKZ2gftZZgX4FrpAuoEmrr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大璡
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CZevVL5cvy4U5eG3QybKkX
          claim_id: c_Pav1p2PL342zPgcmE3GVAV
          source_id: s_Zt1D1onoqtnSNKY27MPrp6
          stance: supports
          locator: CBDB:175908
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175908）
          source: &a1
            id: s_Zt1D1onoqtnSNKY27MPrp6
            source_type: api_record
            title: 中国历代人物传记资料库：王大璡（CBDB 175908）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175908&o=json
            external_identifier: CBDB:175908
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.191Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_5csTB3aTVCqBRwuNxEXWKm
        subject_person_id: p_AKZ2gftZZgX4FrpAuoEmrr
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 708年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PcMsNrDUXPwumnB9eksY8N
          claim_id: c_5csTB3aTVCqBRwuNxEXWKm
          source_id: s_Zt1D1onoqtnSNKY27MPrp6
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
        id: c_orXxGmcsSQfTwJCPfdyYoP
        subject_person_id: p_AKZ2gftZZgX4FrpAuoEmrr
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
        - id: cs_TsAfbFdQUQn8jBLqTx186n
          claim_id: c_orXxGmcsSQfTwJCPfdyYoP
          source_id: s_Zt1D1onoqtnSNKY27MPrp6
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
        id: c_pKu0XXir2nkoK2IUIeGyfx
        subject_person_id: p_Sb4f5XL91qrUC4exqrWvh6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_AKZ2gftZZgX4FrpAuoEmrr
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dwHwbvHFR2lxVrzXPrZ_xd
          claim_id: c_pKu0XXir2nkoK2IUIeGyfx
          source_id: s_Zt1D1onoqtnSNKY27MPrp6
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Sb4f5XL91qrUC4exqrWvh6
        status: active
        display_name: 王滿
        merged_into_person_id: null
  children:
    - claim:
        id: c_zUSZN7g_QsEhMGtRZ9VKg7
        subject_person_id: p_AKZ2gftZZgX4FrpAuoEmrr
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3qWfT8w8DDy3nf5xUmvWDV
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9b8FGLoLGdqW6Jolt8SRki
          claim_id: c_zUSZN7g_QsEhMGtRZ9VKg7
          source_id: s_7ZTzGQgijMZG7GFaBdnP9x
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_7ZTzGQgijMZG7GFaBdnP9x
            source_type: api_record
            title: 中国历代人物传记资料库：王昇（CBDB 175909）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175909&o=json
            external_identifier: CBDB:175909
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.192Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_3qWfT8w8DDy3nf5xUmvWDV
        status: active
        display_name: 王昇
        merged_into_person_id: null
    - claim:
        id: c_ogHZjx3FluXIPM18IeyTIS
        subject_person_id: p_AKZ2gftZZgX4FrpAuoEmrr
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ABhP9dLJkoCKUQ61Qu5HUw
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sjCACd4XbgKX1YAd3zhvHO
          claim_id: c_ogHZjx3FluXIPM18IeyTIS
          source_id: s_3uUvSiF32n3jreDLQ9Ftpn
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_3uUvSiF32n3jreDLQ9Ftpn
            source_type: api_record
            title: 中国历代人物传记资料库：王昪（CBDB 175910）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175910&o=json
            external_identifier: CBDB:175910
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.194Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_ABhP9dLJkoCKUQ61Qu5HUw
        status: active
        display_name: 王昪
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王大璡

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王大璡 | accepted |
| death.date | 708年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Sb4f5XL91qrUC4exqrWvh6 | 王滿 | accepted |
| children | p_3qWfT8w8DDy3nf5xUmvWDV | 王昇 | accepted |
| children | p_ABhP9dLJkoCKUQ61Qu5HUw | 王昪 | accepted |

## 外部来源

- [中国历代人物传记资料库：王昪（CBDB 175910）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175910&o=json)
- [中国历代人物传记资料库：王大璡（CBDB 175908）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175908&o=json)
- [中国历代人物传记资料库：王昇（CBDB 175909）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175909&o=json)
