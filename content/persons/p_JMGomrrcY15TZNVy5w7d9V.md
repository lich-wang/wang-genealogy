---
schema: wang-person/v1
id: p_JMGomrrcY15TZNVy5w7d9V
status: active
merged_into: null
display_name: 王用霑
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CaVUrmUDL9SyWBkuFEoePz
        subject_person_id: p_JMGomrrcY15TZNVy5w7d9V
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王用霑
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7dzqpJUgK9ZR9F4sQRX4Ja
          claim_id: c_CaVUrmUDL9SyWBkuFEoePz
          source_id: s_qYSsCUwh461fiBq3GTE2bg
          stance: supports
          locator: CBDB:490720
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（490720）
          source: &a1
            id: s_qYSsCUwh461fiBq3GTE2bg
            source_type: api_record
            title: 中国历代人物传记资料库：王用霑（CBDB 490720）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=490720&o=json
            external_identifier: CBDB:490720
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.140Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qPMKC75xMMqAJP1ZZL8Wo5
        subject_person_id: p_JMGomrrcY15TZNVy5w7d9V
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
        - id: cs_jHEWhogRJ5y8uNXqTSY8PM
          claim_id: c_qPMKC75xMMqAJP1ZZL8Wo5
          source_id: s_qYSsCUwh461fiBq3GTE2bg
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

# 王用霑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王用霑 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王用霑（CBDB 490720）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=490720&o=json)
