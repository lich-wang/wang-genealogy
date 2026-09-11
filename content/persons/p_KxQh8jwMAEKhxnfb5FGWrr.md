---
schema: wang-person/v1
id: p_KxQh8jwMAEKhxnfb5FGWrr
status: active
merged_into: null
display_name: 王拱
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QtehCA3fhrwLrN9hV5CFtr
        subject_person_id: p_KxQh8jwMAEKhxnfb5FGWrr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王拱
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_f1dYTv98vsjimcnnJyLFJk
          claim_id: c_QtehCA3fhrwLrN9hV5CFtr
          source_id: s_sNWDaurr6LfpuaESKYZ8tv
          stance: supports
          locator: CBDB:175688
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175688）
          source: &a1
            id: s_sNWDaurr6LfpuaESKYZ8tv
            source_type: api_record
            title: 中国历代人物传记资料库：王拱（CBDB 175688）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175688&o=json
            external_identifier: CBDB:175688
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.056Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_8j5dFaVixgiAJjNFa6cYxp
        subject_person_id: p_KxQh8jwMAEKhxnfb5FGWrr
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 811年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_y9cMDCgJi8VWzQ7NNC5yjb
          claim_id: c_8j5dFaVixgiAJjNFa6cYxp
          source_id: s_sNWDaurr6LfpuaESKYZ8tv
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
        id: c_69owtZ8QHTRG4iG51aybVP
        subject_person_id: p_KxQh8jwMAEKhxnfb5FGWrr
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王拱（卒于811年），唐人物。籍贯萬年，曾任觀察使。（中国历代人物传记资料库 CBDB 175688）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_6RHsdsi1EbP6xY1d7i_qRh
          claim_id: c_69owtZ8QHTRG4iG51aybVP
          source_id: s_sNWDaurr6LfpuaESKYZ8tv
          stance: supports
          locator: CBDB:175688
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_fex_gX6CYCdlb-vSbjJySC
        subject_person_id: p_b8y6y9gNYN8bGvEML8ePbK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_KxQh8jwMAEKhxnfb5FGWrr
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HXAvk7VlIXoklPDvE5OV31
          claim_id: c_fex_gX6CYCdlb-vSbjJySC
          source_id: s_zRFhN5GjEDUVqAxP4jD6t5
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_zRFhN5GjEDUVqAxP4jD6t5
            source_type: api_record
            title: 中国历代人物传记资料库：王重明（CBDB 175687）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175687&o=json
            external_identifier: CBDB:175687
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.056Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_b8y6y9gNYN8bGvEML8ePbK
        status: active
        display_name: 王重明
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王拱

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王拱 | accepted |
| death.date | 811年 | accepted |
| bio.summary | 王拱（卒于811年），唐人物。籍贯萬年，曾任觀察使。（中国历代人物传记资料库 CBDB 175688） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_b8y6y9gNYN8bGvEML8ePbK | 王重明 | accepted |

## 外部来源

- [中国历代人物传记资料库：王拱（CBDB 175688）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175688&o=json)
- [中国历代人物传记资料库：王重明（CBDB 175687）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175687&o=json)
