---
schema: wang-person/v1
id: p_ZKExNdwnxpeE8sg2jcvYug
status: active
merged_into: null
display_name: 王鼎彥
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_yBqHDkGNanrj6EPqDTgcbk
        subject_person_id: p_ZKExNdwnxpeE8sg2jcvYug
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鼎彥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_sCiwcMBHiMG1ddS3bMVifT
          claim_id: c_yBqHDkGNanrj6EPqDTgcbk
          source_id: s_e1DPxLt1htu1n61mu8K29F
          stance: supports
          locator: CBDB:573684
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（573684）
          source: &a1
            id: s_e1DPxLt1htu1n61mu8K29F
            source_type: api_record
            title: 中国历代人物传记资料库：王鼎彥（CBDB 573684）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=573684&o=json
            external_identifier: CBDB:573684
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.661Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_e3qhhFdC24gFKrEjjCEVVa
        subject_person_id: p_ZKExNdwnxpeE8sg2jcvYug
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鼎彥，明人物。籍贯蒲圻，入仕鄉貢舉人，曾任參議。（中国历代人物传记资料库 CBDB 573684）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Kknu_EqswYtV38pSZj4Vjy
          claim_id: c_e3qhhFdC24gFKrEjjCEVVa
          source_id: s_e1DPxLt1htu1n61mu8K29F
          stance: supports
          locator: CBDB:573684
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

# 王鼎彥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鼎彥 | accepted |
| bio.summary | 王鼎彥，明人物。籍贯蒲圻，入仕鄉貢舉人，曾任參議。（中国历代人物传记资料库 CBDB 573684） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鼎彥（CBDB 573684）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=573684&o=json)
