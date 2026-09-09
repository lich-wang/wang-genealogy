---
schema: wang-person/v1
id: p_zuN2NeH8wd4ZDgvZUr5kz7
status: active
merged_into: null
display_name: 王家樂
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_zNckVV3LxV83NNFiaLAAQt
        subject_person_id: p_zuN2NeH8wd4ZDgvZUr5kz7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王家樂
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6hihhYGoUE8584LmMTykpK
          claim_id: c_zNckVV3LxV83NNFiaLAAQt
          source_id: s_nK67RGoC1Rn14T1Rdmjazj
          stance: supports
          locator: CBDB:92070
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（92070）
          source: &a1
            id: s_nK67RGoC1Rn14T1Rdmjazj
            source_type: api_record
            title: 中国历代人物传记资料库：王家樂（CBDB 92070）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92070&o=json
            external_identifier: CBDB:92070
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.117Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_uXMjX7dE9a4zrKeGD6ky5E
        subject_person_id: p_zuN2NeH8wd4ZDgvZUr5kz7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为前蜀人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vSB46biF3qdb6oH33WLEdb
          claim_id: c_uXMjX7dE9a4zrKeGD6ky5E
          source_id: s_nK67RGoC1Rn14T1Rdmjazj
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

# 王家樂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王家樂 | accepted |
| bio.summary | CBDB 记载为前蜀人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王家樂（CBDB 92070）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92070&o=json)
