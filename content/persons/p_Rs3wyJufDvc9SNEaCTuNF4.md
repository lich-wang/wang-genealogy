---
schema: wang-person/v1
id: p_Rs3wyJufDvc9SNEaCTuNF4
status: active
merged_into: null
display_name: 王式
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MPFqkVz7gdQhfGS42ECaYv
        subject_person_id: p_Rs3wyJufDvc9SNEaCTuNF4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王式
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4YvanMmJwsJcPpecF6bXcn
          claim_id: c_MPFqkVz7gdQhfGS42ECaYv
          source_id: s_Getbht3W4jrrVAJUEBAKBL
          stance: supports
          locator: CBDB:565037
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（565037）
          source: &a1
            id: s_Getbht3W4jrrVAJUEBAKBL
            source_type: api_record
            title: 中国历代人物传记资料库：王式（CBDB 565037）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=565037&o=json
            external_identifier: CBDB:565037
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.809Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_whkhsQktXjtYC7PxZj8BJM
        subject_person_id: p_Rs3wyJufDvc9SNEaCTuNF4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王式，清人物。籍贯太倉直隸州，身份为畫家。（中国历代人物传记资料库 CBDB 565037）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_1v0xovI3mIjMTxCEPHWI97
          claim_id: c_whkhsQktXjtYC7PxZj8BJM
          source_id: s_Getbht3W4jrrVAJUEBAKBL
          stance: supports
          locator: CBDB:565037
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

# 王式

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王式 | accepted |
| bio.summary | 王式，清人物。籍贯太倉直隸州，身份为畫家。（中国历代人物传记资料库 CBDB 565037） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王式（CBDB 565037）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=565037&o=json)
