---
schema: wang-person/v1
id: p_uzLPWq66u7cfNYyrb8gQ8t
status: active
merged_into: null
display_name: 王璆
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_oifGsWEE8HvR2QAq5tGFqf
        subject_person_id: p_uzLPWq66u7cfNYyrb8gQ8t
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璆
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GnvE6mC7VxvET9uSHFkbDb
          claim_id: c_oifGsWEE8HvR2QAq5tGFqf
          source_id: s_F15gr6tZSv9fpE9gcRZLd9
          stance: supports
          locator: CBDB:158110
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（158110）
          source: &a1
            id: s_F15gr6tZSv9fpE9gcRZLd9
            source_type: api_record
            title: 中国历代人物传记资料库：王璆（CBDB 158110）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=158110&o=json
            external_identifier: CBDB:158110
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.919Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HR7jMgZ4ARfBHVe74CcJfH
        subject_person_id: p_uzLPWq66u7cfNYyrb8gQ8t
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
        - id: cs_z3A62wFGUk5NiFQmCCJbxB
          claim_id: c_HR7jMgZ4ARfBHVe74CcJfH
          source_id: s_F15gr6tZSv9fpE9gcRZLd9
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
        id: c_X09ROq1gLyYSCb2pO4Tw_v
        subject_person_id: p_uzLPWq66u7cfNYyrb8gQ8t
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_C649FKyy6vwpLVe271ivnZ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cZxJ1Hw_PrVRGmZ-ivGGyz
          claim_id: c_X09ROq1gLyYSCb2pO4Tw_v
          source_id: s_4JWUyKmFJjRKU2cyP2B97v
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_4JWUyKmFJjRKU2cyP2B97v
            source_type: api_record
            title: 中国历代人物传记资料库：王恩（CBDB 158106）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=158106&o=json
            external_identifier: CBDB:158106
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.917Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_C649FKyy6vwpLVe271ivnZ
        status: active
        display_name: 王恩
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_syPz1B7WJeFNgb_d_elFUI
        subject_person_id: p_uzLPWq66u7cfNYyrb8gQ8t
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_kVMprEyYd61FrSnBQEVsST
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GM8Rr5c4IZCLXBe64shSeT
          claim_id: c_syPz1B7WJeFNgb_d_elFUI
          source_id: s_F15gr6tZSv9fpE9gcRZLd9
          stance: supports
          locator: 唐代墓誌匯編:二卷，Dahe 94：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_kVMprEyYd61FrSnBQEVsST
        status: active
        display_name: 王仕倫
        merged_into_person_id: null
  other: []
---

# 王璆

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王璆 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_C649FKyy6vwpLVe271ivnZ | 王恩 | accepted |
| descendants | p_kVMprEyYd61FrSnBQEVsST | 王仕倫 | accepted |

## 外部来源

- [中国历代人物传记资料库：王恩（CBDB 158106）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=158106&o=json)
- [中国历代人物传记资料库：王璆（CBDB 158110）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=158110&o=json)
