---
schema: wang-person/v1
id: p_2oBMKGr1DAqCME4t371Nb4
status: active
merged_into: null
display_name: 王邦瑞
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CYG7Sk59Q4N5EKbRdLesNk
        subject_person_id: p_2oBMKGr1DAqCME4t371Nb4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王邦瑞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_eiBwrRMByyjz7BR4EmZx6h
          claim_id: c_CYG7Sk59Q4N5EKbRdLesNk
          source_id: s_BCacVC6Pog6z5xqmnp1T73
          stance: supports
          locator: CBDB:502898
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（502898）
          source: &a1
            id: s_BCacVC6Pog6z5xqmnp1T73
            source_type: api_record
            title: 中国历代人物传记资料库：王邦瑞（CBDB 502898）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=502898&o=json
            external_identifier: CBDB:502898
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.887Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZD1gADWHbKsSCkiGWiUu8e
        subject_person_id: p_2oBMKGr1DAqCME4t371Nb4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_G3aPNxCENBKopB1cXgUSBa
          claim_id: c_ZD1gADWHbKsSCkiGWiUu8e
          source_id: s_BCacVC6Pog6z5xqmnp1T73
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

# 王邦瑞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王邦瑞 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王邦瑞（CBDB 502898）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=502898&o=json)
