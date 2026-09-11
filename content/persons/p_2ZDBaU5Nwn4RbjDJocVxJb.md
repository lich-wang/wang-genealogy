---
schema: wang-person/v1
id: p_2ZDBaU5Nwn4RbjDJocVxJb
status: active
merged_into: null
display_name: 王璡
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_L21N58PNhgAyV9M7YNFw5i
        subject_person_id: p_2ZDBaU5Nwn4RbjDJocVxJb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璡
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_djN64WDW2sAJXCCjk7vubq
          claim_id: c_L21N58PNhgAyV9M7YNFw5i
          source_id: s_snxK4rogo6NP8tAqs2GoDn
          stance: supports
          locator: CBDB:159904
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（159904）
          source: &a1
            id: s_snxK4rogo6NP8tAqs2GoDn
            source_type: api_record
            title: 中国历代人物传记资料库：王璡（CBDB 159904）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=159904&o=json
            external_identifier: CBDB:159904
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.935Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BywpyeNY9iKMbvFenfhJp3
        subject_person_id: p_2ZDBaU5Nwn4RbjDJocVxJb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璡，唐人物。籍贯范陽，曾任太子洗馬。（中国历代人物传记资料库 CBDB 159904）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_W5xEOAEtdvNrs24In4A4Kw
          claim_id: c_BywpyeNY9iKMbvFenfhJp3
          source_id: s_snxK4rogo6NP8tAqs2GoDn
          stance: supports
          locator: CBDB:159904
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_j88TdH9etf1l2fxLhPAnOz
        subject_person_id: p_GEj55QSzaDKEGYX42EjoQd
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2ZDBaU5Nwn4RbjDJocVxJb
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vxkyFPqriJ0y6wwDIaUlPJ
          claim_id: c_j88TdH9etf1l2fxLhPAnOz
          source_id: s_snxK4rogo6NP8tAqs2GoDn
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_GEj55QSzaDKEGYX42EjoQd
        status: active
        display_name: 王晏
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王璡

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王璡 | accepted |
| bio.summary | 王璡，唐人物。籍贯范陽，曾任太子洗馬。（中国历代人物传记资料库 CBDB 159904） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_GEj55QSzaDKEGYX42EjoQd | 王晏 | accepted |

## 外部来源

- [中国历代人物传记资料库：王璡（CBDB 159904）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=159904&o=json)
