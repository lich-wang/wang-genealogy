---
schema: wang-person/v1
id: p_pvmU3hyrtv96iRTXB7uUB8
status: active
merged_into: null
display_name: 王志伊
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_yiuofwS6J83t25ynPApS1S
        subject_person_id: p_pvmU3hyrtv96iRTXB7uUB8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王志伊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9i1WAo93pEEv5uZNJvhHW7
          claim_id: c_yiuofwS6J83t25ynPApS1S
          source_id: s_PQDgvCbrP2DT4QPzY64KJx
          stance: supports
          locator: CBDB:637746
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637746）
          source: &a1
            id: s_PQDgvCbrP2DT4QPzY64KJx
            source_type: api_record
            title: 中国历代人物传记资料库：王志伊（CBDB 637746）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637746&o=json
            external_identifier: CBDB:637746
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.512Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_oEwwAaeMWwdff7aZRbAG3B
        subject_person_id: p_pvmU3hyrtv96iRTXB7uUB8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王志伊，清人物。籍贯錢塘，曾任教諭。（中国历代人物传记资料库 CBDB 637746）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_kwxoQRsBG4Ui0igSujZDHB
          claim_id: c_oEwwAaeMWwdff7aZRbAG3B
          source_id: s_PQDgvCbrP2DT4QPzY64KJx
          stance: supports
          locator: CBDB:637746
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

# 王志伊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王志伊 | accepted |
| bio.summary | 王志伊，清人物。籍贯錢塘，曾任教諭。（中国历代人物传记资料库 CBDB 637746） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王志伊（CBDB 637746）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637746&o=json)
