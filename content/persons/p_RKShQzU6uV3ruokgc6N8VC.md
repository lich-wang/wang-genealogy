---
schema: wang-person/v1
id: p_RKShQzU6uV3ruokgc6N8VC
status: active
merged_into: null
display_name: 王惟明
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_dv2fn5RDb3hB4GLaA5ZA5L
        subject_person_id: p_RKShQzU6uV3ruokgc6N8VC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王惟明
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_xKf2TtKYTry2XdtAbUZns6
          claim_id: c_dv2fn5RDb3hB4GLaA5ZA5L
          source_id: s_8i37KR5Z7jsNKTZGcpQVPs
          stance: supports
          locator: CBDB:544195
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（544195）
          source: &a1
            id: s_8i37KR5Z7jsNKTZGcpQVPs
            source_type: api_record
            title: 中国历代人物传记资料库：王惟明（CBDB 544195）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=544195&o=json
            external_identifier: CBDB:544195
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.492Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3ykHJM7wHKbFz2P3bFxn7V
        subject_person_id: p_RKShQzU6uV3ruokgc6N8VC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DV3tF2xvnfz87YoBMk2cSi
          claim_id: c_3ykHJM7wHKbFz2P3bFxn7V
          source_id: s_8i37KR5Z7jsNKTZGcpQVPs
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

# 王惟明

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王惟明 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王惟明（CBDB 544195）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=544195&o=json)
