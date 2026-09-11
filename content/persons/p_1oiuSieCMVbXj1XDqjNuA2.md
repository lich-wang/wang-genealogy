---
schema: wang-person/v1
id: p_1oiuSieCMVbXj1XDqjNuA2
status: active
merged_into: null
display_name: 王礎
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MXFTX8Y642EwZ3HKM2WoMJ
        subject_person_id: p_1oiuSieCMVbXj1XDqjNuA2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王礎
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_maQiHd3hLj1i7cjFiBqJSV
          claim_id: c_MXFTX8Y642EwZ3HKM2WoMJ
          source_id: s_1QLvDYfeuEAHRWXRHjyZEU
          stance: supports
          locator: CBDB:157947
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（157947）
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KgHxaJJSbSAd5TL6AiyP3k
        subject_person_id: p_1oiuSieCMVbXj1XDqjNuA2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王礎，唐人物。籍贯太原，曾任觀察使。（中国历代人物传记资料库 CBDB 157947）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_NNawd3IjEahLTfS_4fMfoA
          claim_id: c_KgHxaJJSbSAd5TL6AiyP3k
          source_id: s_1QLvDYfeuEAHRWXRHjyZEU
          stance: supports
          locator: CBDB:157947
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
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
          source: *a1
      object_person:
        id: p_BebbGAkpNrhM7t1MBqkTy2
        status: active
        display_name: 王崟
        merged_into_person_id: null
  children:
    - claim:
        id: c_rL-kY6gk5aKQfPQYpxLpI0
        subject_person_id: p_1oiuSieCMVbXj1XDqjNuA2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8Nwq8JeFN35Jr7m5925uCr
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_z7F0rzqAzg7vbcuogPiV-7
          claim_id: c_rL-kY6gk5aKQfPQYpxLpI0
          source_id: s_1QLvDYfeuEAHRWXRHjyZEU
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)，R 26669：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_8Nwq8JeFN35Jr7m5925uCr
        status: active
        display_name: 王璠
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_1XZr8MAsfLQZUjK3ci9Cvx
        subject_person_id: p_1oiuSieCMVbXj1XDqjNuA2
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_6rmNH9TpfJz2BMZQnh16Lg
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_R5QEHXAejsHY7g4BNigFxr
          claim_id: c_1XZr8MAsfLQZUjK3ci9Cvx
          source_id: s_1QLvDYfeuEAHRWXRHjyZEU
          stance: supports
          locator: 唐代墓誌匯編:二卷，Dahe 67 YP NewEpitaphID=2966：孫女
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_6rmNH9TpfJz2BMZQnh16Lg
        status: active
        display_name: 王緩
        merged_into_person_id: null
  other: []
---

# 王礎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王礎 | accepted |
| bio.summary | 王礎，唐人物。籍贯太原，曾任觀察使。（中国历代人物传记资料库 CBDB 157947） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_BebbGAkpNrhM7t1MBqkTy2 | 王崟 | accepted |
| children | p_8Nwq8JeFN35Jr7m5925uCr | 王璠 | accepted |
| descendants | p_6rmNH9TpfJz2BMZQnh16Lg | 王緩 | accepted |

## 外部来源

- [中国历代人物传记资料库：王礎（CBDB 157947）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=157947&o=json)
