---
schema: wang-person/v1
id: p_S4N2Cev8cRhe7jcPfNaRgM
status: active
merged_into: null
display_name: 王處廉
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_uJgU6XAjYdmUqXDMKNzJaj
        subject_person_id: p_S4N2Cev8cRhe7jcPfNaRgM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王處廉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8xTgGqGa7RKyvYA1WaUEET
          claim_id: c_uJgU6XAjYdmUqXDMKNzJaj
          source_id: s_S3QZnAK5T62oAi1ZixcCai
          stance: supports
          locator: CBDB:32173
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（32173）
          source: &a1
            id: s_S3QZnAK5T62oAi1ZixcCai
            source_type: api_record
            title: 中国历代人物传记资料库：王處廉（CBDB 32173）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=32173&o=json
            external_identifier: CBDB:32173
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.047Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CUa7eGKgpPGFQvkaS79EzL
        subject_person_id: p_S4N2Cev8cRhe7jcPfNaRgM
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
        - id: cs_jaJ11B1WoGptAuSmzXFN61
          claim_id: c_CUa7eGKgpPGFQvkaS79EzL
          source_id: s_S3QZnAK5T62oAi1ZixcCai
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
        id: c_s4sW51UjGM0ZnXF8bEyecw
        subject_person_id: p_S4N2Cev8cRhe7jcPfNaRgM
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_N23fZgsLd2MYVBKHbDuh9T
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SlEvDM-RMIvtQJ-Li95033
          claim_id: c_s4sW51UjGM0ZnXF8bEyecw
          source_id: s_S3QZnAK5T62oAi1ZixcCai
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_N23fZgsLd2MYVBKHbDuh9T
        status: active
        display_name: 王維
        merged_into_person_id: null
    - claim:
        id: c_3VcUUluWeMQouhds4B6dFT
        subject_person_id: p_S4N2Cev8cRhe7jcPfNaRgM
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_g6dF114X12m5d8tCHGiM7v
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XBbuPetI0VZ7IfD5jbDMEC
          claim_id: c_3VcUUluWeMQouhds4B6dFT
          source_id: s_S3QZnAK5T62oAi1ZixcCai
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_g6dF114X12m5d8tCHGiM7v
        status: active
        display_name: 王缙
        merged_into_person_id: null
    - claim:
        id: c_Rsa4ryC4oc9FaDmkXh2yFa
        subject_person_id: p_S4N2Cev8cRhe7jcPfNaRgM
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_jcRs628fmTNgkA6qAAYtH9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ORG7N3wJ5bXTfl562IGYOF
          claim_id: c_Rsa4ryC4oc9FaDmkXh2yFa
          source_id: s_S3QZnAK5T62oAi1ZixcCai
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_jcRs628fmTNgkA6qAAYtH9
        status: active
        display_name: 王𬘘
        merged_into_person_id: null
    - claim:
        id: c_VRGcu_dER3XnWZkKPuIeHA
        subject_person_id: p_S4N2Cev8cRhe7jcPfNaRgM
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ArCUPxq9hGppQo3HaUfMgD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PQc8zetgqRmPsxd7sIaKk3
          claim_id: c_VRGcu_dER3XnWZkKPuIeHA
          source_id: s_S3QZnAK5T62oAi1ZixcCai
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_ArCUPxq9hGppQo3HaUfMgD
        status: active
        display_name: 王繟
        merged_into_person_id: null
    - claim:
        id: c_785_ode5cBk68qponeySu7
        subject_person_id: p_S4N2Cev8cRhe7jcPfNaRgM
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_24MCLxi9vqWot9y9ra6B3D
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iBk1wDfyJPIlAKlIt7-cdH
          claim_id: c_785_ode5cBk68qponeySu7
          source_id: s_S3QZnAK5T62oAi1ZixcCai
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_24MCLxi9vqWot9y9ra6B3D
        status: active
        display_name: 王紘
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王處廉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王處廉 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_N23fZgsLd2MYVBKHbDuh9T | 王維 | accepted |
| children | p_g6dF114X12m5d8tCHGiM7v | 王缙 | accepted |
| children | p_jcRs628fmTNgkA6qAAYtH9 | 王𬘘 | accepted |
| children | p_ArCUPxq9hGppQo3HaUfMgD | 王繟 | accepted |
| children | p_24MCLxi9vqWot9y9ra6B3D | 王紘 | accepted |

## 外部来源

- [中国历代人物传记资料库：王處廉（CBDB 32173）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=32173&o=json)
