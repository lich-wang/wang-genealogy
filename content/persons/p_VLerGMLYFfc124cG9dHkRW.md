---
schema: wang-person/v1
id: p_VLerGMLYFfc124cG9dHkRW
status: active
merged_into: null
display_name: 王諤
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ao8NjEU879pqEEyFMetw2W
        subject_person_id: p_VLerGMLYFfc124cG9dHkRW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王諤
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ofQjAjrk3sjnckAhfBSrSg
          claim_id: c_ao8NjEU879pqEEyFMetw2W
          source_id: s_d1jzJbVfMEh3yem7WXP9zV
          stance: supports
          locator: CBDB:560906
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（560906）
          source: &a1
            id: s_d1jzJbVfMEh3yem7WXP9zV
            source_type: api_record
            title: 中国历代人物传记资料库：王諤（CBDB 560906）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=560906&o=json
            external_identifier: CBDB:560906
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.731Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_iAXGvGwU49E2AvYw5zBruP
        subject_person_id: p_VLerGMLYFfc124cG9dHkRW
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1545年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_omqEPUsKtAv7MKYd53gDgk
          claim_id: c_iAXGvGwU49E2AvYw5zBruP
          source_id: s_d1jzJbVfMEh3yem7WXP9zV
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
        id: c_ch4rNTWj7MCyfsZsXZ9n2D
        subject_person_id: p_VLerGMLYFfc124cG9dHkRW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王諤（卒于1545年），明人物。籍贯奉化，身份为畫家。（中国历代人物传记资料库 CBDB 560906）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_MLpZtiS-bfuaHAnW8RoGAK
          claim_id: c_ch4rNTWj7MCyfsZsXZ9n2D
          source_id: s_d1jzJbVfMEh3yem7WXP9zV
          stance: supports
          locator: CBDB:560906
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王諤

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王諤 | accepted |
| death.date | 1545年 | accepted |
| bio.summary | 王諤（卒于1545年），明人物。籍贯奉化，身份为畫家。（中国历代人物传记资料库 CBDB 560906） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王諤（CBDB 560906）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=560906&o=json)
