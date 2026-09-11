---
schema: wang-person/v1
id: p_Sb4f5XL91qrUC4exqrWvh6
status: active
merged_into: null
display_name: 王滿
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_973KSdwPNuHQhycptf5yi8
        subject_person_id: p_Sb4f5XL91qrUC4exqrWvh6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王滿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_TQgDMJXvHic8zYjRF9L8tv
          claim_id: c_973KSdwPNuHQhycptf5yi8
          source_id: s_ykXRfs64cPuRFH9TDkAEDE
          stance: supports
          locator: CBDB:192012
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（192012）
          source: &a1
            id: s_ykXRfs64cPuRFH9TDkAEDE
            source_type: api_record
            title: 中国历代人物传记资料库：王滿（CBDB 192012）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=192012&o=json
            external_identifier: CBDB:192012
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.386Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_HV2swRgg1zFmQnJpF9rLia
        subject_person_id: p_Sb4f5XL91qrUC4exqrWvh6
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 671年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_htQ1DEFY6wAeGvyYNsyYp7
          claim_id: c_HV2swRgg1zFmQnJpF9rLia
          source_id: s_ykXRfs64cPuRFH9TDkAEDE
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
        id: c_gsoRJ5TmvgAoNZ2uCPF1CY
        subject_person_id: p_Sb4f5XL91qrUC4exqrWvh6
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
        - id: cs_zozWwhdr9aKS2P1UUGpVGV
          claim_id: c_gsoRJ5TmvgAoNZ2uCPF1CY
          source_id: s_ykXRfs64cPuRFH9TDkAEDE
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
          source:
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
      object_person:
        id: p_AKZ2gftZZgX4FrpAuoEmrr
        status: active
        display_name: 王大璡
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王滿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王滿 | accepted |
| death.date | 671年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_AKZ2gftZZgX4FrpAuoEmrr | 王大璡 | accepted |

## 外部来源

- [中国历代人物传记资料库：王大璡（CBDB 175908）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175908&o=json)
- [中国历代人物传记资料库：王滿（CBDB 192012）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=192012&o=json)
