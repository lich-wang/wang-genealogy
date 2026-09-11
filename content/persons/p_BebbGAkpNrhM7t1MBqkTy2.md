---
schema: wang-person/v1
id: p_BebbGAkpNrhM7t1MBqkTy2
status: active
merged_into: null
display_name: 王崟
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_SqwAjkB7M3sYBWi4tN56Ef
        subject_person_id: p_BebbGAkpNrhM7t1MBqkTy2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王崟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8DeQBz1zf4XT88yeYdZ9Hq
          claim_id: c_SqwAjkB7M3sYBWi4tN56Ef
          source_id: s_cpHKe2VFE454CeAqDJm1vK
          stance: supports
          locator: CBDB:157952
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（157952）
          source: &a1
            id: s_cpHKe2VFE454CeAqDJm1vK
            source_type: api_record
            title: 中国历代人物传记资料库：王崟（CBDB 157952）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=157952&o=json
            external_identifier: CBDB:157952
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.915Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_B9JjFKr8aRGUgGnxDPK3h8
        subject_person_id: p_BebbGAkpNrhM7t1MBqkTy2
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
        - id: cs_DaX9sB84G2WxMfJqHh2qsQ
          claim_id: c_B9JjFKr8aRGUgGnxDPK3h8
          source_id: s_cpHKe2VFE454CeAqDJm1vK
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
        id: c_ZZpe67JK_JtubTZDM2yX8X
        subject_person_id: p_QkhCaGoZhcyF2De4tN5s15
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_BebbGAkpNrhM7t1MBqkTy2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EyUi1u66sZ7P9tEnHBftBY
          claim_id: c_ZZpe67JK_JtubTZDM2yX8X
          source_id: s_cpHKe2VFE454CeAqDJm1vK
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_QkhCaGoZhcyF2De4tN5s15
        status: active
        display_name: 王文济
        merged_into_person_id: null
  children:
    - claim:
        id: c_pRVp0tZRI6X49ZXaUTjfzW
        subject_person_id: p_BebbGAkpNrhM7t1MBqkTy2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1oiuSieCMVbXj1XDqjNuA2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fU4EBRVBEuOz9fJxevKbdE
          claim_id: c_pRVp0tZRI6X49ZXaUTjfzW
          source_id: s_1QLvDYfeuEAHRWXRHjyZEU
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)，R 8284：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_1QLvDYfeuEAHRWXRHjyZEU
            source_type: api_record
            title: 中国历代人物传记资料库：王礎（CBDB 157947）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=157947&o=json
            external_identifier: CBDB:157947
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.915Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_1oiuSieCMVbXj1XDqjNuA2
        status: active
        display_name: 王礎
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王崟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王崟 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_QkhCaGoZhcyF2De4tN5s15 | 王文济 | accepted |
| children | p_1oiuSieCMVbXj1XDqjNuA2 | 王礎 | accepted |

## 外部来源

- [中国历代人物传记资料库：王礎（CBDB 157947）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=157947&o=json)
- [中国历代人物传记资料库：王崟（CBDB 157952）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=157952&o=json)
