---
schema: wang-person/v1
id: p_Av8E6JHr2j3BtFtrNxZFmr
status: active
merged_into: null
display_name: 王安國
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_RbV2HuJxQQtp5QM1iM73P5
        subject_person_id: p_Av8E6JHr2j3BtFtrNxZFmr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王安國
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_f32LaNuDu3vA8JcSBeEoqL
          claim_id: c_RbV2HuJxQQtp5QM1iM73P5
          source_id: s_DPr1nT3Df23mB79CKP6rZ8
          stance: supports
          locator: CBDB:701182
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（701182）
          source: &a1
            id: s_DPr1nT3Df23mB79CKP6rZ8
            source_type: api_record
            title: 中国历代人物传记资料库：王安國（CBDB 701182）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=701182&o=json
            external_identifier: CBDB:701182
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.798Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_J9DLQeZoiNksiGqn5q91Ju
        subject_person_id: p_Av8E6JHr2j3BtFtrNxZFmr
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1041年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Gd81WqZSWp1V1LzwcF4NLW
          claim_id: c_J9DLQeZoiNksiGqn5q91Ju
          source_id: s_DPr1nT3Df23mB79CKP6rZ8
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_Pt4P2eMiMFxsyRwoGC5SRh
        subject_person_id: p_Av8E6JHr2j3BtFtrNxZFmr
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1082年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_c2HPoPstzEzFrDpDmWdfab
          claim_id: c_Pt4P2eMiMFxsyRwoGC5SRh
          source_id: s_DPr1nT3Df23mB79CKP6rZ8
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_cF5BTNuaZbbYsYXSS4a1Ah
        subject_person_id: p_Av8E6JHr2j3BtFtrNxZFmr
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
        - id: cs_K3B6oNEktn61cAs8Yqiabm
          claim_id: c_cF5BTNuaZbbYsYXSS4a1Ah
          source_id: s_DPr1nT3Df23mB79CKP6rZ8
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

# 王安國

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王安國 | accepted |
| birth.date | 1041年 | accepted |
| death.date | 1082年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王安國（CBDB 701182）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=701182&o=json)
