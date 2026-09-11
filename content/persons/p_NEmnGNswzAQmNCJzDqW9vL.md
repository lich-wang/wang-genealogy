---
schema: wang-person/v1
id: p_NEmnGNswzAQmNCJzDqW9vL
status: active
merged_into: null
display_name: 王辛
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DLeHQ8vfu7oLgm7rTB8DqZ
        subject_person_id: p_NEmnGNswzAQmNCJzDqW9vL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王辛
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Z5qyrpzNwVJaxNLPhKyXbq
          claim_id: c_DLeHQ8vfu7oLgm7rTB8DqZ
          source_id: s_MMWeEaoGS7jGvvyFXP6UN8
          stance: supports
          locator: CBDB:71085
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71085）
          source: &a1
            id: s_MMWeEaoGS7jGvvyFXP6UN8
            source_type: api_record
            title: 中国历代人物传记资料库：王辛（CBDB 71085）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71085&o=json
            external_identifier: CBDB:71085
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.355Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_wFEqFxDc42stRa5u8snvW7
        subject_person_id: p_NEmnGNswzAQmNCJzDqW9vL
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1620年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_d4i9rfjr7BdT2mSeuAX224
          claim_id: c_wFEqFxDc42stRa5u8snvW7
          source_id: s_MMWeEaoGS7jGvvyFXP6UN8
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
        id: c_QZckHkGRGMWsHzHPGKaEr4
        subject_person_id: p_NEmnGNswzAQmNCJzDqW9vL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王辛（生于1620年），清人物。籍贯宛平。（中国历代人物传记资料库 CBDB 71085）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_n3wkIumVOoEy5Qig8dnYMw
          claim_id: c_QZckHkGRGMWsHzHPGKaEr4
          source_id: s_MMWeEaoGS7jGvvyFXP6UN8
          stance: supports
          locator: CBDB:71085
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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

# 王辛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王辛 | accepted |
| birth.date | 1620年 | accepted |
| bio.summary | 王辛（生于1620年），清人物。籍贯宛平。（中国历代人物传记资料库 CBDB 71085） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王辛（CBDB 71085）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71085&o=json)
