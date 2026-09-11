---
schema: wang-person/v1
id: p_UkukK9jtGHA5Nb8R5pgnpm
status: active
merged_into: null
display_name: 王播
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_66dyKRSYbCz4vWtfSGadPp
        subject_person_id: p_UkukK9jtGHA5Nb8R5pgnpm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王播
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5G7nA7hQu2CyMun56394g3
          claim_id: c_66dyKRSYbCz4vWtfSGadPp
          source_id: s_bLRkCHYeSNY1uk3iu5xfLZ
          stance: supports
          locator: CBDB:92109
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（92109）
          source: &a1
            id: s_bLRkCHYeSNY1uk3iu5xfLZ
            source_type: api_record
            title: 中国历代人物传记资料库：王播（CBDB 92109）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92109&o=json
            external_identifier: CBDB:92109
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.135Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_p9nsCXmq3d7i6AJUHFgXMm
        subject_person_id: p_UkukK9jtGHA5Nb8R5pgnpm
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 759年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QB92ATLFBG4UNv6uBc9Kvw
          claim_id: c_p9nsCXmq3d7i6AJUHFgXMm
          source_id: s_bLRkCHYeSNY1uk3iu5xfLZ
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
        id: c_x5NFoJMs4cRxCCHujSpbR9
        subject_person_id: p_UkukK9jtGHA5Nb8R5pgnpm
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 830年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SoLzRXp8vdjUWU1coiXtFU
          claim_id: c_x5NFoJMs4cRxCCHujSpbR9
          source_id: s_bLRkCHYeSNY1uk3iu5xfLZ
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
        id: c_vf1m9u5Xo2KJj3g1PJBkAC
        subject_person_id: p_UkukK9jtGHA5Nb8R5pgnpm
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
        - id: cs_jiDYBRa54S1S45jkUU4FA5
          claim_id: c_vf1m9u5Xo2KJj3g1PJBkAC
          source_id: s_bLRkCHYeSNY1uk3iu5xfLZ
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
        id: c_0fCIyzTTzB13jax4fu3kLQ
        subject_person_id: p_6YDDamD31FqdZsDuahyiXX
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_UkukK9jtGHA5Nb8R5pgnpm
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SZ8HnIfaoEpJEuN_g4KCSl
          claim_id: c_0fCIyzTTzB13jax4fu3kLQ
          source_id: s_mdsYqnaUWb8rvkx4qY5hGx
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_mdsYqnaUWb8rvkx4qY5hGx
            source_type: api_record
            title: 中国历代人物传记资料库：王恕（CBDB 145608）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145608&o=json
            external_identifier: CBDB:145608
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.684Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_6YDDamD31FqdZsDuahyiXX
        status: active
        display_name: 王恕
        merged_into_person_id: null
  children:
    - claim:
        id: c_zIHwfD1dCn4wEWFDiMFD8l
        subject_person_id: p_UkukK9jtGHA5Nb8R5pgnpm
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_PegFBQ8QQJ79Ew9RgWhWvv
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_38X8c1UlL6Ip1kLbaPW-0s
          claim_id: c_zIHwfD1dCn4wEWFDiMFD8l
          source_id: s_QnhYN5PPjJyBfMWdofYW2C
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_QnhYN5PPjJyBfMWdofYW2C
            source_type: api_record
            title: 中国历代人物传记资料库：王鎮（CBDB 175911）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175911&o=json
            external_identifier: CBDB:175911
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.195Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_PegFBQ8QQJ79Ew9RgWhWvv
        status: active
        display_name: 王鎮
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王播

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王播 | accepted |
| birth.date | 759年 | accepted |
| death.date | 830年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_6YDDamD31FqdZsDuahyiXX | 王恕 | accepted |
| children | p_PegFBQ8QQJ79Ew9RgWhWvv | 王鎮 | accepted |

## 外部来源

- [中国历代人物传记资料库：王播（CBDB 92109）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92109&o=json)
- [中国历代人物传记资料库：王恕（CBDB 145608）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145608&o=json)
- [中国历代人物传记资料库：王鎮（CBDB 175911）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175911&o=json)
