---
schema: wang-person/v1
id: p_5nS6PQQKS1RKzEGzYbpg5E
status: active
merged_into: null
display_name: 王璞
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_18JxPsRHUNEUkoEYPmnaZB
        subject_person_id: p_5nS6PQQKS1RKzEGzYbpg5E
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Ury7J2TG7PRrvnyaM9p3RC
          claim_id: c_18JxPsRHUNEUkoEYPmnaZB
          source_id: s_prxspTLTgbE23XMJLPQWPa
          stance: supports
          locator: CBDB:70414
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（70414）
          source: &a1
            id: s_prxspTLTgbE23XMJLPQWPa
            source_type: api_record
            title: 中国历代人物传记资料库：王璞（CBDB 70414）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=70414&o=json
            external_identifier: CBDB:70414
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.309Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3sDztnqg4Fu9xLppLV7FMR
        subject_person_id: p_5nS6PQQKS1RKzEGzYbpg5E
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
        - id: cs_bmQ5Kjbb9rb33LQBU7JmZv
          claim_id: c_3sDztnqg4Fu9xLppLV7FMR
          source_id: s_prxspTLTgbE23XMJLPQWPa
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

# 王璞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王璞 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王璞（CBDB 70414）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=70414&o=json)
