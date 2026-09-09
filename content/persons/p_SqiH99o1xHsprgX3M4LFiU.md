---
schema: wang-person/v1
id: p_SqiH99o1xHsprgX3M4LFiU
status: active
merged_into: null
display_name: 王槩
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_aDaPin7yU5KKjXXCVRU8LQ
        subject_person_id: p_SqiH99o1xHsprgX3M4LFiU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王槩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Uu65TBL1xeEXzvnYHy3WKW
          claim_id: c_aDaPin7yU5KKjXXCVRU8LQ
          source_id: s_px6cSnZ6padc8KiTSvC9ZX
          stance: supports
          locator: CBDB:71258
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71258）
          source: &a1
            id: s_px6cSnZ6padc8KiTSvC9ZX
            source_type: api_record
            title: 中国历代人物传记资料库：王槩（CBDB 71258）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71258&o=json
            external_identifier: CBDB:71258
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.535Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_8ciAN9RUexhNrdr8C6UenR
        subject_person_id: p_SqiH99o1xHsprgX3M4LFiU
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1645年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_StpKLCdf1v7Q4nFvsobe4p
          claim_id: c_8ciAN9RUexhNrdr8C6UenR
          source_id: s_px6cSnZ6padc8KiTSvC9ZX
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
        id: c_HN4FdpLWD6g1ZZqJwNFQ8i
        subject_person_id: p_SqiH99o1xHsprgX3M4LFiU
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1710年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hFy3T64AiEg7fLBCpZjK8K
          claim_id: c_HN4FdpLWD6g1ZZqJwNFQ8i
          source_id: s_px6cSnZ6padc8KiTSvC9ZX
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
        id: c_1uQr3mNo8eZTLcmpz8B6cJ
        subject_person_id: p_SqiH99o1xHsprgX3M4LFiU
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qxwBoYhDrF3j1ct4CbbNEf
          claim_id: c_1uQr3mNo8eZTLcmpz8B6cJ
          source_id: s_px6cSnZ6padc8KiTSvC9ZX
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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

# 王槩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王槩 | accepted |
| birth.date | 1645年 | accepted |
| death.date | 1710年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王槩（CBDB 71258）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71258&o=json)
