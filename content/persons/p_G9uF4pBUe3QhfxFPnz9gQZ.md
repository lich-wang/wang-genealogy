---
schema: wang-person/v1
id: p_G9uF4pBUe3QhfxFPnz9gQZ
status: active
merged_into: null
display_name: 王天甲
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7s3Jc2FKH7fmz5ap6y8JvN
        subject_person_id: p_G9uF4pBUe3QhfxFPnz9gQZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王天甲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Dkpyo46SruJ6B9FrwshPYC
          claim_id: c_7s3Jc2FKH7fmz5ap6y8JvN
          source_id: s_yYFasnsct99BKcVaZjriJ9
          stance: supports
          locator: CBDB:636935
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636935）
          source: &a1
            id: s_yYFasnsct99BKcVaZjriJ9
            source_type: api_record
            title: 中国历代人物传记资料库：王天甲（CBDB 636935）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636935&o=json
            external_identifier: CBDB:636935
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.153Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8QaAZJqqGWCAf96X4gbY4B
        subject_person_id: p_G9uF4pBUe3QhfxFPnz9gQZ
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
        - id: cs_rFiBJxvRkh8X6Awy6waErz
          claim_id: c_8QaAZJqqGWCAf96X4gbY4B
          source_id: s_yYFasnsct99BKcVaZjriJ9
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

# 王天甲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王天甲 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王天甲（CBDB 636935）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636935&o=json)
