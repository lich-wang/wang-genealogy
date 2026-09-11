---
schema: wang-person/v1
id: p_eude2emeX1HsE9ua25BiMB
status: active
merged_into: null
display_name: 王珊
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_74T9ZQt9B7pndFWWxkoQXo
        subject_person_id: p_eude2emeX1HsE9ua25BiMB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CnBVCzpUeuH36x3gV6erLx
          claim_id: c_74T9ZQt9B7pndFWWxkoQXo
          source_id: s_1Mj6d1pEbvqAPH8FY5Q4Lb
          stance: supports
          locator: CBDB:259415
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（259415）
          source: &a1
            id: s_1Mj6d1pEbvqAPH8FY5Q4Lb
            source_type: api_record
            title: 中国历代人物传记资料库：王珊（CBDB 259415）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259415&o=json
            external_identifier: CBDB:259415
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.461Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jjetCiBTwJBKpE4spfD5ro
        subject_person_id: p_eude2emeX1HsE9ua25BiMB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珊，明人物。成化二十三年進士，籍贯和州。（中国历代人物传记资料库 CBDB 259415）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_1KLMjpvcoNBl4PQsbjIWXW
          claim_id: c_jjetCiBTwJBKpE4spfD5ro
          source_id: s_1Mj6d1pEbvqAPH8FY5Q4Lb
          stance: supports
          locator: CBDB:259415
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

# 王珊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王珊 | accepted |
| bio.summary | 王珊，明人物。成化二十三年進士，籍贯和州。（中国历代人物传记资料库 CBDB 259415） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王珊（CBDB 259415）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259415&o=json)
