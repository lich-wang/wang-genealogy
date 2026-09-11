---
schema: wang-person/v1
id: p_Sz7CGFC6CrX62uNv9EnUZB
status: active
merged_into: null
display_name: 王淑
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ARAY9KSTHBH2EW3m45vkLg
        subject_person_id: p_Sz7CGFC6CrX62uNv9EnUZB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王淑
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Kk8c9i85QNu7HR82VVLFKe
          claim_id: c_ARAY9KSTHBH2EW3m45vkLg
          source_id: s_dfkC4KJcmf7ieg5LRCZpQR
          stance: supports
          locator: CBDB:145483
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（145483）
          source: &a1
            id: s_dfkC4KJcmf7ieg5LRCZpQR
            source_type: api_record
            title: 中国历代人物传记资料库：王淑（CBDB 145483）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145483&o=json
            external_identifier: CBDB:145483
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.676Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_M2MUoWb6RumvFGTy2pmD9q
        subject_person_id: p_Sz7CGFC6CrX62uNv9EnUZB
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 762年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dNcbXRCsCv8BgsKNVdRjxC
          claim_id: c_M2MUoWb6RumvFGTy2pmD9q
          source_id: s_dfkC4KJcmf7ieg5LRCZpQR
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_G2bS2CEJdCZE9Gr4Bxnc8g
        subject_person_id: p_Sz7CGFC6CrX62uNv9EnUZB
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 800年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZhbA3TujVPNnEK371oyQwD
          claim_id: c_G2bS2CEJdCZE9Gr4Bxnc8g
          source_id: s_dfkC4KJcmf7ieg5LRCZpQR
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
        id: c_XhJfzcLX45BrpaWdaHj74N
        subject_person_id: p_Sz7CGFC6CrX62uNv9EnUZB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王淑（762年—800年），唐人物。籍贯穎陽。（中国历代人物传记资料库 CBDB 145483）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2FP3pQ7YnT7OuBXrAW34dx
          claim_id: c_XhJfzcLX45BrpaWdaHj74N
          source_id: s_dfkC4KJcmf7ieg5LRCZpQR
          stance: supports
          locator: CBDB:145483
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_qtpzDNteapllQ9nApY19rA
        subject_person_id: p_p1PEjQGbtwRZHYZidrvjuV
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Sz7CGFC6CrX62uNv9EnUZB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WrSovwj3GrOmVdsQobVO3k
          claim_id: c_qtpzDNteapllQ9nApY19rA
          source_id: s_dfkC4KJcmf7ieg5LRCZpQR
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_p1PEjQGbtwRZHYZidrvjuV
        status: active
        display_name: 王閏
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_htjh0U4g_sTSxFLUDoLyoi
        subject_person_id: p_Sz7CGFC6CrX62uNv9EnUZB
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_dgof42aZmCQYQ7o7thrq4w
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Xy0wTjVkr_PZXY_iPBPKQw
          claim_id: c_htjh0U4g_sTSxFLUDoLyoi
          source_id: s_nxHYb-V6EKIvYcZT5laQOs
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：丈夫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_nxHYb-V6EKIvYcZT5laQOs
            source_type: api_record
            title: 中国历代人物传记资料库：崔廞（CBDB 145637）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145637&o=json
            external_identifier: CBDB:145637
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_dgof42aZmCQYQ7o7thrq4w
        status: active
        display_name: 崔廞
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王淑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王淑 | accepted |
| birth.date | 762年 | accepted |
| death.date | 800年 | accepted |
| bio.summary | 王淑（762年—800年），唐人物。籍贯穎陽。（中国历代人物传记资料库 CBDB 145483） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_p1PEjQGbtwRZHYZidrvjuV | 王閏 | accepted |
| spouses | p_dgof42aZmCQYQ7o7thrq4w | 崔廞 | accepted |

## 外部来源

- [中国历代人物传记资料库：崔廞（CBDB 145637）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145637&o=json)
- [中国历代人物传记资料库：王淑（CBDB 145483）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145483&o=json)
