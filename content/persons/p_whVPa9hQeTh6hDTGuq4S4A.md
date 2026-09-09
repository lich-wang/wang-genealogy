---
schema: wang-person/v1
id: p_whVPa9hQeTh6hDTGuq4S4A
status: active
merged_into: null
display_name: 王昕
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6ZSMDc9hf1rfJQYFgmhH1y
        subject_person_id: p_whVPa9hQeTh6hDTGuq4S4A
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昕
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5nMeFVYaFosDwCfGdi4hq7
          claim_id: c_6ZSMDc9hf1rfJQYFgmhH1y
          source_id: s_2hzDgpq7AwTfivREDE5BQc
          stance: supports
          locator: CBDB:150492
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（150492）
          source: &a1
            id: s_2hzDgpq7AwTfivREDE5BQc
            source_type: api_record
            title: 中国历代人物传记资料库：王昕（CBDB 150492）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=150492&o=json
            external_identifier: CBDB:150492
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.816Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5ryQ36CJbNT5TgFHJkX6Bh
        subject_person_id: p_whVPa9hQeTh6hDTGuq4S4A
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_srinDQspdj3gen97YcLRAK
          claim_id: c_5ryQ36CJbNT5TgFHJkX6Bh
          source_id: s_2hzDgpq7AwTfivREDE5BQc
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

# 王昕

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王昕 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王昕（CBDB 150492）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=150492&o=json)
