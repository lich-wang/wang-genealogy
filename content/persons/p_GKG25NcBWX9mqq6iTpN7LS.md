---
schema: wang-person/v1
id: p_GKG25NcBWX9mqq6iTpN7LS
status: active
merged_into: null
display_name: 王言惠
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_J2gT1voHpobNXU1HZcaUoj
        subject_person_id: p_GKG25NcBWX9mqq6iTpN7LS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王言惠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Fa2U3LezeFv9CjkkS7xxBF
          claim_id: c_J2gT1voHpobNXU1HZcaUoj
          source_id: s_zSnpwWuVyXReNx3ZBBzr4t
          stance: supports
          locator: CBDB:71690
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71690）
          source: &a1
            id: s_zSnpwWuVyXReNx3ZBBzr4t
            source_type: api_record
            title: 中国历代人物传记资料库：王言惠（CBDB 71690）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71690&o=json
            external_identifier: CBDB:71690
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.832Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_CEZhAHoMKZaAm3fXcxFzuj
        subject_person_id: p_GKG25NcBWX9mqq6iTpN7LS
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1693年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Sjm3qVz6ooX2qDCTx7b9YM
          claim_id: c_CEZhAHoMKZaAm3fXcxFzuj
          source_id: s_zSnpwWuVyXReNx3ZBBzr4t
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
        id: c_3VjCczADRnRahoLUKwJEDK
        subject_person_id: p_GKG25NcBWX9mqq6iTpN7LS
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王言惠（生于1693年），清人物。明清進士進士，籍贯湖廣道，入仕進士。（中国历代人物传记资料库 CBDB 71690）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Kc9coqMC8qSbEqY0p5oXR1
          claim_id: c_3VjCczADRnRahoLUKwJEDK
          source_id: s_zSnpwWuVyXReNx3ZBBzr4t
          stance: supports
          locator: CBDB:71690
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

# 王言惠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王言惠 | accepted |
| birth.date | 1693年 | accepted |
| bio.summary | 王言惠（生于1693年），清人物。明清進士進士，籍贯湖廣道，入仕進士。（中国历代人物传记资料库 CBDB 71690） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王言惠（CBDB 71690）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71690&o=json)
