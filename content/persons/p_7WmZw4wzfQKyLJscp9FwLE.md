---
schema: wang-person/v1
id: p_7WmZw4wzfQKyLJscp9FwLE
status: active
merged_into: null
display_name: 王賢
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Qv3Kt8Dn1hhDiWYvJeod2S
        subject_person_id: p_7WmZw4wzfQKyLJscp9FwLE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王賢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_S27B8QaNRDdCPaL6v59391
          claim_id: c_Qv3Kt8Dn1hhDiWYvJeod2S
          source_id: s_at5Mnbju4HM6xZZm9VHFBd
          stance: supports
          locator: CBDB:640341
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640341）
          source: &a1
            id: s_at5Mnbju4HM6xZZm9VHFBd
            source_type: api_record
            title: 中国历代人物传记资料库：王賢（CBDB 640341）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640341&o=json
            external_identifier: CBDB:640341
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.084Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_smgop1TCbKTuRYBGySs6gH
        subject_person_id: p_7WmZw4wzfQKyLJscp9FwLE
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
        - id: cs_MHiuYK82SRAy5mokVSMTmx
          claim_id: c_smgop1TCbKTuRYBGySs6gH
          source_id: s_at5Mnbju4HM6xZZm9VHFBd
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

# 王賢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王賢 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王賢（CBDB 640341）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640341&o=json)
