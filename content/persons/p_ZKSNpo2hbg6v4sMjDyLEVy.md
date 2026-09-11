---
schema: wang-person/v1
id: p_ZKSNpo2hbg6v4sMjDyLEVy
status: active
merged_into: null
display_name: 王請軾
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_59hGU8qHhXBUGwjhU7Ko8f
        subject_person_id: p_ZKSNpo2hbg6v4sMjDyLEVy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王請軾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_EGcFNPPB8ctHSa7q9dQ8jc
          claim_id: c_59hGU8qHhXBUGwjhU7Ko8f
          source_id: s_1K1ogvhFR71v7kzicAiG2e
          stance: supports
          locator: CBDB:71980
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71980）
          source: &a1
            id: s_1K1ogvhFR71v7kzicAiG2e
            source_type: api_record
            title: 中国历代人物传记资料库：王請軾（CBDB 71980）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71980&o=json
            external_identifier: CBDB:71980
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.947Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_nFP4cVuS4KFu2MDcVarH3C
        subject_person_id: p_ZKSNpo2hbg6v4sMjDyLEVy
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1636年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_S9NvsLZKPMZhp7oR2cwR7V
          claim_id: c_nFP4cVuS4KFu2MDcVarH3C
          source_id: s_1K1ogvhFR71v7kzicAiG2e
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
        id: c_5b2mkntDgjTooQ8DmX57pF
        subject_person_id: p_ZKSNpo2hbg6v4sMjDyLEVy
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王請軾（生于1636年），清人物。籍贯即墨。（中国历代人物传记资料库 CBDB 71980）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs__0qK_NGLMHi_Ngl6ioAMC1
          claim_id: c_5b2mkntDgjTooQ8DmX57pF
          source_id: s_1K1ogvhFR71v7kzicAiG2e
          stance: supports
          locator: CBDB:71980
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

# 王請軾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王請軾 | accepted |
| birth.date | 1636年 | accepted |
| bio.summary | 王請軾（生于1636年），清人物。籍贯即墨。（中国历代人物传记资料库 CBDB 71980） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王請軾（CBDB 71980）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71980&o=json)
