---
schema: wang-person/v1
id: p_59xj5My1eSs685Q2JzMfTB
status: active
merged_into: null
display_name: 王封溁
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_nAniKZ2D6rKiFhFCDKgz3g
        subject_person_id: p_59xj5My1eSs685Q2JzMfTB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王封溁
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7dPCKN2YJqVNA8jQafPMB9
          claim_id: c_nAniKZ2D6rKiFhFCDKgz3g
          source_id: s_bUCH72MhuApW3NDV2NRGVH
          stance: supports
          locator: CBDB:71844
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71844）
          source: &a1
            id: s_bUCH72MhuApW3NDV2NRGVH
            source_type: api_record
            title: 中国历代人物传记资料库：王封溁（CBDB 71844）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71844&o=json
            external_identifier: CBDB:71844
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.896Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_gMAJtgfDTXGGW9wydh4EcK
        subject_person_id: p_59xj5My1eSs685Q2JzMfTB
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1641年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_X94uyY9uEcVHf8892JbWCx
          claim_id: c_gMAJtgfDTXGGW9wydh4EcK
          source_id: s_bUCH72MhuApW3NDV2NRGVH
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
        id: c_Au3CMvtQu1TWwC9KHNHADP
        subject_person_id: p_59xj5My1eSs685Q2JzMfTB
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1703年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WTH6hGxp4jWCJxRuTbQsBR
          claim_id: c_Au3CMvtQu1TWwC9KHNHADP
          source_id: s_bUCH72MhuApW3NDV2NRGVH
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
        id: c_na9CR2mNV6yajL89whhxjb
        subject_person_id: p_59xj5My1eSs685Q2JzMfTB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王封溁（1641年—1703年），清人物。籍贯黃岡。（中国历代人物传记资料库 CBDB 71844）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_oGsJSeP93reFYI1mLGJHaw
          claim_id: c_na9CR2mNV6yajL89whhxjb
          source_id: s_bUCH72MhuApW3NDV2NRGVH
          stance: supports
          locator: CBDB:71844
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

# 王封溁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王封溁 | accepted |
| birth.date | 1641年 | accepted |
| death.date | 1703年 | accepted |
| bio.summary | 王封溁（1641年—1703年），清人物。籍贯黃岡。（中国历代人物传记资料库 CBDB 71844） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王封溁（CBDB 71844）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71844&o=json)
