---
schema: wang-person/v1
id: p_woaKciykU5f6sViKiS8fnk
status: active
merged_into: null
display_name: 王大觀
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8265UM7vCWdjm1uoMap7Qs
        subject_person_id: p_woaKciykU5f6sViKiS8fnk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大觀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QAoadnkTgmNiiJ92C2wMW8
          claim_id: c_8265UM7vCWdjm1uoMap7Qs
          source_id: s_tpEp3vUQ6sYj1VLicYjwLE
          stance: supports
          locator: CBDB:175746
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175746）
          source: &a1
            id: s_tpEp3vUQ6sYj1VLicYjwLE
            source_type: api_record
            title: 中国历代人物传记资料库：王大觀（CBDB 175746）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175746&o=json
            external_identifier: CBDB:175746
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.095Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_GyhtFKiAHi2gfEBeGuetVg
        subject_person_id: p_woaKciykU5f6sViKiS8fnk
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 632年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_k595jBPzMZU4i5qYm38HmH
          claim_id: c_GyhtFKiAHi2gfEBeGuetVg
          source_id: s_tpEp3vUQ6sYj1VLicYjwLE
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
        id: c_tz3PKD95qkkNcijGyC8pfR
        subject_person_id: p_woaKciykU5f6sViKiS8fnk
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
        - id: cs_A7CbMm14Z1HwpX3QyGxnhN
          claim_id: c_tz3PKD95qkkNcijGyC8pfR
          source_id: s_tpEp3vUQ6sYj1VLicYjwLE
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

# 王大觀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王大觀 | accepted |
| death.date | 632年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王大觀（CBDB 175746）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175746&o=json)
