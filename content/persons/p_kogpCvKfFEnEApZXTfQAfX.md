---
schema: wang-person/v1
id: p_kogpCvKfFEnEApZXTfQAfX
status: active
merged_into: null
display_name: 王紹曾
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_xAdoGPArpVCaUwk3VtoGTr
        subject_person_id: p_kogpCvKfFEnEApZXTfQAfX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紹曾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_445pHrs71y51oc4qXKG84t
          claim_id: c_xAdoGPArpVCaUwk3VtoGTr
          source_id: s_imd39sspWh2Fh8jynqjDeT
          stance: supports
          locator: CBDB:342432
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（342432）
          source: &a1
            id: s_imd39sspWh2Fh8jynqjDeT
            source_type: api_record
            title: 中国历代人物传记资料库：王紹曾（CBDB 342432）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342432&o=json
            external_identifier: CBDB:342432
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.930Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9AqMCZxXEuj3c1Pce8f2iN
        subject_person_id: p_kogpCvKfFEnEApZXTfQAfX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紹曾，清人物。明清進士進士，籍贯金山，入仕進士，曾任編修、鄉試考官。（中国历代人物传记资料库 CBDB 342432）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2Y9TayGrnuL6TmneZr3fmQ
          claim_id: c_9AqMCZxXEuj3c1Pce8f2iN
          source_id: s_imd39sspWh2Fh8jynqjDeT
          stance: supports
          locator: CBDB:342432
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

# 王紹曾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王紹曾 | accepted |
| bio.summary | 王紹曾，清人物。明清進士進士，籍贯金山，入仕進士，曾任編修、鄉試考官。（中国历代人物传记资料库 CBDB 342432） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王紹曾（CBDB 342432）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342432&o=json)
