---
schema: wang-person/v1
id: p_Kgv5GqFNcLGvJNB7gg1h8u
status: active
merged_into: null
display_name: 王道焜
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6kbbrDLwyUEVfvS9h5RGEP
        subject_person_id: p_Kgv5GqFNcLGvJNB7gg1h8u
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王道焜
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_V2nyHEwz1sYENYuEDJAmNF
          claim_id: c_6kbbrDLwyUEVfvS9h5RGEP
          source_id: s_kbNdmNZ7kKaBq5o7ddZ2xX
          stance: supports
          locator: CBDB:124346
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（124346）
          source: &a1
            id: s_kbNdmNZ7kKaBq5o7ddZ2xX
            source_type: api_record
            title: 中国历代人物传记资料库：王道焜（CBDB 124346）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=124346&o=json
            external_identifier: CBDB:124346
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.174Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_EuRyA4LMaVp7DZJcqXruVM
        subject_person_id: p_Kgv5GqFNcLGvJNB7gg1h8u
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1645年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1RjyLmSP3jDnUbE3DQ6GRQ
          claim_id: c_EuRyA4LMaVp7DZJcqXruVM
          source_id: s_kbNdmNZ7kKaBq5o7ddZ2xX
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
        id: c_c35PBBHJv4HaatFjH5DpqJ
        subject_person_id: p_Kgv5GqFNcLGvJNB7gg1h8u
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
        - id: cs_VAyNFPEEp3zuzSRs5fBANp
          claim_id: c_c35PBBHJv4HaatFjH5DpqJ
          source_id: s_kbNdmNZ7kKaBq5o7ddZ2xX
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

# 王道焜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王道焜 | accepted |
| death.date | 1645年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王道焜（CBDB 124346）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=124346&o=json)
