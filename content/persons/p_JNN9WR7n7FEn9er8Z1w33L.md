---
schema: wang-person/v1
id: p_JNN9WR7n7FEn9er8Z1w33L
status: active
merged_into: null
display_name: 王㔠
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_aZQR2kozDdaZvVGcZV31vL
        subject_person_id: p_JNN9WR7n7FEn9er8Z1w33L
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王㔠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Rs4wARJUWEHpTkEETeA3SJ
          claim_id: c_aZQR2kozDdaZvVGcZV31vL
          source_id: s_AnG4fdj6xtLPe21P6eRFdr
          stance: supports
          locator: CBDB:578612
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（578612）
          source: &a1
            id: s_AnG4fdj6xtLPe21P6eRFdr
            source_type: api_record
            title: 中国历代人物传记资料库：王㔠（CBDB 578612）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=578612&o=json
            external_identifier: CBDB:578612
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.731Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_S4eGiCCywshBWzoxN51uPi
        subject_person_id: p_JNN9WR7n7FEn9er8Z1w33L
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
        - id: cs_f5H2oop1iXADgdGP7Tsdkb
          claim_id: c_S4eGiCCywshBWzoxN51uPi
          source_id: s_AnG4fdj6xtLPe21P6eRFdr
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

# 王㔠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王㔠 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王㔠（CBDB 578612）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=578612&o=json)
