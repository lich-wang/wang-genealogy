---
schema: wang-person/v1
id: p_mBV7ZbmMChkcVwucyWGBXe
status: active
merged_into: null
display_name: 王士駿
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NzyE9HD5qGeH2TQSfVxzdR
        subject_person_id: p_mBV7ZbmMChkcVwucyWGBXe
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士駿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7hawxC1EBBHB4PNfekncmu
          claim_id: c_NzyE9HD5qGeH2TQSfVxzdR
          source_id: s_nwCdg4CZoZiUdJ8ubPTWde
          stance: supports
          locator: CBDB:71324
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71324）
          source: &a1
            id: s_nwCdg4CZoZiUdJ8ubPTWde
            source_type: api_record
            title: 中国历代人物传记资料库：王士駿（CBDB 71324）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71324&o=json
            external_identifier: CBDB:71324
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.595Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_RXJ3WLHGo8bjWDNuTwAMo6
        subject_person_id: p_mBV7ZbmMChkcVwucyWGBXe
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1848年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EQaMk47KoYn7GQXzNRXA7D
          claim_id: c_RXJ3WLHGo8bjWDNuTwAMo6
          source_id: s_nwCdg4CZoZiUdJ8ubPTWde
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
        id: c_TMjARn9XEjpAztbChaBdPK
        subject_person_id: p_mBV7ZbmMChkcVwucyWGBXe
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士駿（生于1848年），清人物。籍贯秀水。（中国历代人物传记资料库 CBDB 71324）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_7aCR4GCRSDdf_gA9wSPM9S
          claim_id: c_TMjARn9XEjpAztbChaBdPK
          source_id: s_nwCdg4CZoZiUdJ8ubPTWde
          stance: supports
          locator: CBDB:71324
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

# 王士駿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王士駿 | accepted |
| birth.date | 1848年 | accepted |
| bio.summary | 王士駿（生于1848年），清人物。籍贯秀水。（中国历代人物传记资料库 CBDB 71324） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王士駿（CBDB 71324）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71324&o=json)
