---
schema: wang-person/v1
id: p_3ZUbAEHRXCpawiQsDMzfnb
status: active
merged_into: null
display_name: 王運開
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_idBL5Jeh33CobUG87L2HkZ
        subject_person_id: p_3ZUbAEHRXCpawiQsDMzfnb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王運開
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ELWGPnaMweA4cPa5FuhEiV
          claim_id: c_idBL5Jeh33CobUG87L2HkZ
          source_id: s_miGHqsCpiYpECxA4LH9vd6
          stance: supports
          locator: CBDB:71649
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71649）
          source: &a1
            id: s_miGHqsCpiYpECxA4LH9vd6
            source_type: api_record
            title: 中国历代人物传记资料库：王運開（CBDB 71649）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71649&o=json
            external_identifier: CBDB:71649
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.804Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_iVmUT5wZPjW7kZ91rcvEA8
        subject_person_id: p_3ZUbAEHRXCpawiQsDMzfnb
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1618年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GGPs8AKmvZ1LpMDZ2vJ1A4
          claim_id: c_iVmUT5wZPjW7kZ91rcvEA8
          source_id: s_miGHqsCpiYpECxA4LH9vd6
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
        id: c_M5kdE2U5AfiQjTkWhaCY45
        subject_person_id: p_3ZUbAEHRXCpawiQsDMzfnb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王運開（生于1618年），清人物。籍贯長垣。（中国历代人物传记资料库 CBDB 71649）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_pUt1hfwX_EMTwGPeg-FG86
          claim_id: c_M5kdE2U5AfiQjTkWhaCY45
          source_id: s_miGHqsCpiYpECxA4LH9vd6
          stance: supports
          locator: CBDB:71649
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

# 王運開

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王運開 | accepted |
| birth.date | 1618年 | accepted |
| bio.summary | 王運開（生于1618年），清人物。籍贯長垣。（中国历代人物传记资料库 CBDB 71649） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王運開（CBDB 71649）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71649&o=json)
