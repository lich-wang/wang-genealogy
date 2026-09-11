---
schema: wang-person/v1
id: p_GogHJAJ44t1k18B95kqjNK
status: active
merged_into: null
display_name: 葉氏
revision: 1
cbdb_id: 693582
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XVgy9tKvWFa2aJsEFDjc5-
        subject_person_id: p_GogHJAJ44t1k18B95kqjNK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 葉氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OE4s8gsEb347IJt2v9W9XR
          claim_id: c_XVgy9tKvWFa2aJsEFDjc5-
          source_id: s_jaDu7YyBk6bpOmWfPckYYu
          stance: supports
          locator: CBDB:693582
          quotation: null
          interpretation_note: CBDB 明确记录的王熙恩配偶
          source: &a1
            id: s_jaDu7YyBk6bpOmWfPckYYu
            source_type: api_record
            title: 中国历代人物传记资料库：葉氏(王熙恩妻)（CBDB 693582）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=693582&o=json
            external_identifier: CBDB:693582
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_dw7Li63whtxcK0OtCw15HX
        subject_person_id: p_5DEyTVsteHsxKJcdQRnDue
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_GogHJAJ44t1k18B95kqjNK
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nTi-kOH52vjpWvBxt2Ul3T
          claim_id: c_dw7Li63whtxcK0OtCw15HX
          source_id: s_jaDu7YyBk6bpOmWfPckYYu
          stance: supports
          locator: 蘇州府志，lgid=169728：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_5DEyTVsteHsxKJcdQRnDue
        status: active
        display_name: 王熙恩
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 葉氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 葉氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_5DEyTVsteHsxKJcdQRnDue | 王熙恩 | accepted |

## 外部来源

- [中国历代人物传记资料库：葉氏(王熙恩妻)（CBDB 693582）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=693582&o=json)
