---
schema: wang-person/v1
id: p_aZsGNoB7j1sPKn5vF3aTAu
status: active
merged_into: null
display_name: 王昕甄
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4gSDniLnGUtxaDvx7yQEn9
        subject_person_id: p_aZsGNoB7j1sPKn5vF3aTAu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昕甄
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_kAwJH95mnBZnfk1HDREHeE
          claim_id: c_4gSDniLnGUtxaDvx7yQEn9
          source_id: s_yFkE7jm3ZaKY4uTAALpfUN
          stance: supports
          locator: CBDB:638397
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638397）
          source: &a1
            id: s_yFkE7jm3ZaKY4uTAALpfUN
            source_type: api_record
            title: 中国历代人物传记资料库：王昕甄（CBDB 638397）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638397&o=json
            external_identifier: CBDB:638397
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.617Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_dbbu14hGk7B1WKGkHQH4tk
        subject_person_id: p_aZsGNoB7j1sPKn5vF3aTAu
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
        - id: cs_FQrBaNnCzGG4vh4ok8obUi
          claim_id: c_dbbu14hGk7B1WKGkHQH4tk
          source_id: s_yFkE7jm3ZaKY4uTAALpfUN
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

# 王昕甄

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王昕甄 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王昕甄（CBDB 638397）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638397&o=json)
