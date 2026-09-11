---
schema: wang-person/v1
id: p_vmsyMcQLaLp1U9Y47Rm2hQ
status: active
merged_into: null
display_name: 王企靖
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_PP4RCbnnHLbVVqtNV8hrMJ
        subject_person_id: p_vmsyMcQLaLp1U9Y47Rm2hQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王企靖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_L8ikDjFTbJ5e9XYzyr6528
          claim_id: c_PP4RCbnnHLbVVqtNV8hrMJ
          source_id: s_Fu9s9fdVwCy5ET517JfFL5
          stance: supports
          locator: CBDB:71595
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71595）
          source: &a1
            id: s_Fu9s9fdVwCy5ET517JfFL5
            source_type: api_record
            title: 中国历代人物传记资料库：王企靖（CBDB 71595）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71595&o=json
            external_identifier: CBDB:71595
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.776Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_ucayuq18hw31r6ExLEAyRZ
        subject_person_id: p_vmsyMcQLaLp1U9Y47Rm2hQ
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1665年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_m557zqztr3goT48pfUeAg3
          claim_id: c_ucayuq18hw31r6ExLEAyRZ
          source_id: s_Fu9s9fdVwCy5ET517JfFL5
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
        id: c_Yj2rsDBQdCbjdcH7AYEi1E
        subject_person_id: p_vmsyMcQLaLp1U9Y47Rm2hQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王企靖（生于1665年），清人物。籍贯雄縣。（中国历代人物传记资料库 CBDB 71595）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_sH8jXCG58HvEEHVt6LyuSH
          claim_id: c_Yj2rsDBQdCbjdcH7AYEi1E
          source_id: s_Fu9s9fdVwCy5ET517JfFL5
          stance: supports
          locator: CBDB:71595
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

# 王企靖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王企靖 | accepted |
| birth.date | 1665年 | accepted |
| bio.summary | 王企靖（生于1665年），清人物。籍贯雄縣。（中国历代人物传记资料库 CBDB 71595） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王企靖（CBDB 71595）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71595&o=json)
