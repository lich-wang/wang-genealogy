---
schema: wang-person/v1
id: p_hSnCpaxd77DNMCyoijzhKd
status: active
merged_into: null
display_name: 王明惠
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DsPEHy8bGxTe4kD21mA2ue
        subject_person_id: p_hSnCpaxd77DNMCyoijzhKd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王明惠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_f83LCC4Fz6U7KF669HP1X7
          claim_id: c_DsPEHy8bGxTe4kD21mA2ue
          source_id: s_1NjB3xXRaBkLJ3BgaaQsGB
          stance: supports
          locator: CBDB:579183
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（579183）
          source: &a1
            id: s_1NjB3xXRaBkLJ3BgaaQsGB
            source_type: api_record
            title: 中国历代人物传记资料库：王明惠（CBDB 579183）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=579183&o=json
            external_identifier: CBDB:579183
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.734Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_yYbHb4Mc6WqUGcebVGNfbc
        subject_person_id: p_hSnCpaxd77DNMCyoijzhKd
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1908年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZpW6pjwyvhYPF3yBFHmMK1
          claim_id: c_yYbHb4Mc6WqUGcebVGNfbc
          source_id: s_1NjB3xXRaBkLJ3BgaaQsGB
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GXUN3MtZE38CebL72WjtNc
        subject_person_id: p_hSnCpaxd77DNMCyoijzhKd
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
        - id: cs_aBtqcqRt3Rj8W58NTYFAvi
          claim_id: c_GXUN3MtZE38CebL72WjtNc
          source_id: s_1NjB3xXRaBkLJ3BgaaQsGB
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

# 王明惠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王明惠 | accepted |
| birth.date | 1908年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王明惠（CBDB 579183）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=579183&o=json)
