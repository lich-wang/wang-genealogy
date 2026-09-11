---
schema: wang-person/v1
id: p_dgof42aZmCQYQ7o7thrq4w
status: active
merged_into: null
display_name: 崔廞
revision: 1
cbdb_id: 145637
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_j5cObI7ITgMw4yQNk0c4Qr
        subject_person_id: p_dgof42aZmCQYQ7o7thrq4w
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 崔廞（744—810），唐人物。籍贯河南，曾任陵臺令。（中国历代人物传记资料库 CBDB 145637）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_M-ULhqww5qw8wT3E_kyE0I
          claim_id: c_j5cObI7ITgMw4yQNk0c4Qr
          source_id: s_nxHYb-V6EKIvYcZT5laQOs
          stance: supports
          locator: CBDB:145637
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c__PzqcVLqWx7A9iFpTMPtVU
        subject_person_id: p_dgof42aZmCQYQ7o7thrq4w
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 崔廞
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DMFdt60XZbLEImkMLdmULZ
          claim_id: c__PzqcVLqWx7A9iFpTMPtVU
          source_id: s_nxHYb-V6EKIvYcZT5laQOs
          stance: supports
          locator: CBDB:145637
          quotation: null
          interpretation_note: CBDB 明确记录的王淑配偶
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
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
          source: *a1
      object_person:
        id: p_Sz7CGFC6CrX62uNv9EnUZB
        status: active
        display_name: 王淑
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 崔廞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 崔廞（744—810），唐人物。籍贯河南，曾任陵臺令。（中国历代人物传记资料库 CBDB 145637） | accepted |
| name.primary | 崔廞 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_Sz7CGFC6CrX62uNv9EnUZB | 王淑 | accepted |

## 外部来源

- [中国历代人物传记资料库：崔廞（CBDB 145637）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145637&o=json)
