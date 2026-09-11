---
schema: wang-person/v1
id: p_T2JshioRPfxgoYHCxfDYxt
status: active
merged_into: null
display_name: 王守忠
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hp2a3Va1v3XVEcECAC94MZ
        subject_person_id: p_T2JshioRPfxgoYHCxfDYxt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王守忠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Tc188hLzhgyVzMx4YB8zs3
          claim_id: c_hp2a3Va1v3XVEcECAC94MZ
          source_id: s_Fq5R2VS8R7SH5rkUUQdJnA
          stance: supports
          locator: CBDB:175748
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175748）
          source: &a1
            id: s_Fq5R2VS8R7SH5rkUUQdJnA
            source_type: api_record
            title: 中国历代人物传记资料库：王守忠（CBDB 175748）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175748&o=json
            external_identifier: CBDB:175748
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.097Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_gq2srHx687byhiNaAhQGs3
        subject_person_id: p_T2JshioRPfxgoYHCxfDYxt
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 706年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VtDTDmKkt6BFa2HaGs6zdR
          claim_id: c_gq2srHx687byhiNaAhQGs3
          source_id: s_Fq5R2VS8R7SH5rkUUQdJnA
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
        id: c_5ZD29EptFEKddDHWdmgF7m
        subject_person_id: p_T2JshioRPfxgoYHCxfDYxt
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
        - id: cs_CKJuVNz9b7EZMrhSacoukK
          claim_id: c_5ZD29EptFEKddDHWdmgF7m
          source_id: s_Fq5R2VS8R7SH5rkUUQdJnA
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
        id: c_L-lE43duIFewLDEXCegzqn
        subject_person_id: p_d3rRMY3j92nB8V1GyfMiLc
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_T2JshioRPfxgoYHCxfDYxt
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7AFniuGNveJkLtIPAGgRyo
          claim_id: c_L-lE43duIFewLDEXCegzqn
          source_id: s_Lz1aJbKkYc62PVeN7aXUjx
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Lz1aJbKkYc62PVeN7aXUjx
            source_type: api_record
            title: 中国历代人物传记资料库：王同人（CBDB 175747）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175747&o=json
            external_identifier: CBDB:175747
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.096Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_d3rRMY3j92nB8V1GyfMiLc
        status: active
        display_name: 王同人
        merged_into_person_id: null
  children:
    - claim:
        id: c_hWlbRY8jKkwukua4nJHtvb
        subject_person_id: p_T2JshioRPfxgoYHCxfDYxt
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_46vuDp5qDdtqpcJ6ZkX8YK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cNP1oYaknCFrq8HRvql9LW
          claim_id: c_hWlbRY8jKkwukua4nJHtvb
          source_id: s_U99Gg7N16FefkhowDRfv35
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_U99Gg7N16FefkhowDRfv35
            source_type: api_record
            title: 中国历代人物传记资料库：王思訥（CBDB 175750）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175750&o=json
            external_identifier: CBDB:175750
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.099Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_46vuDp5qDdtqpcJ6ZkX8YK
        status: active
        display_name: 王思訥
        merged_into_person_id: null
    - claim:
        id: c_nNJdvJohsZwxr73H0Wq8TY
        subject_person_id: p_T2JshioRPfxgoYHCxfDYxt
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_EYZbMdgB89m9nTMAVEYZW1
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uXk67nWdtq04zSgOa4gm-9
          claim_id: c_nNJdvJohsZwxr73H0Wq8TY
          source_id: s_N6fdUC1wQvY1MF4eo2RbmL
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_N6fdUC1wQvY1MF4eo2RbmL
            source_type: api_record
            title: 中国历代人物传记资料库：王仲璋（CBDB 175753）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175753&o=json
            external_identifier: CBDB:175753
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.256Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_EYZbMdgB89m9nTMAVEYZW1
        status: active
        display_name: 王仲璋
        merged_into_person_id: null
    - claim:
        id: c_KNxwxz9w4u0bGtDaJouQkP
        subject_person_id: p_T2JshioRPfxgoYHCxfDYxt
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_rMGD3X3Jy1G7DwLK9bM7tA
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XlHRT7vKSyNTfOxydx1jTE
          claim_id: c_KNxwxz9w4u0bGtDaJouQkP
          source_id: s_qo1JYQyZDHttCzzUABDvwp
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_qo1JYQyZDHttCzzUABDvwp
            source_type: api_record
            title: 中国历代人物传记资料库：王愛景（CBDB 175749）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175749&o=json
            external_identifier: CBDB:175749
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.254Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_rMGD3X3Jy1G7DwLK9bM7tA
        status: active
        display_name: 王愛景
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王守忠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王守忠 | accepted |
| death.date | 706年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_d3rRMY3j92nB8V1GyfMiLc | 王同人 | accepted |
| children | p_46vuDp5qDdtqpcJ6ZkX8YK | 王思訥 | accepted |
| children | p_EYZbMdgB89m9nTMAVEYZW1 | 王仲璋 | accepted |
| children | p_rMGD3X3Jy1G7DwLK9bM7tA | 王愛景 | accepted |

## 外部来源

- [中国历代人物传记资料库：王愛景（CBDB 175749）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175749&o=json)
- [中国历代人物传记资料库：王守忠（CBDB 175748）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175748&o=json)
- [中国历代人物传记资料库：王思訥（CBDB 175750）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175750&o=json)
- [中国历代人物传记资料库：王同人（CBDB 175747）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175747&o=json)
- [中国历代人物传记资料库：王仲璋（CBDB 175753）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175753&o=json)
