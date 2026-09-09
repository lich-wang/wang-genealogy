---
schema: wang-person/v1
id: p_ziFePMbdNLKAgyGGN4BwgX
status: active
merged_into: null
display_name: 王洙
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MfTEFvsXmENiw1bGRYN8Gs
        subject_person_id: p_ziFePMbdNLKAgyGGN4BwgX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王洙
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jyjGHQ4C1CT6viuX331Rrw
          claim_id: c_MfTEFvsXmENiw1bGRYN8Gs
          source_id: s_NW4LqP9V92uigTz1fJ2X9z
          stance: supports
          locator: CBDB:202146
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（202146）
          source: &a1
            id: s_NW4LqP9V92uigTz1fJ2X9z
            source_type: api_record
            title: 中国历代人物传记资料库：王洙（CBDB 202146）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202146&o=json
            external_identifier: CBDB:202146
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.724Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_CzrjkbD9L9cDeK8D6c91pg
        subject_person_id: p_ziFePMbdNLKAgyGGN4BwgX
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1485年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_awAm6hBHohSPBinMZQC8fY
          claim_id: c_CzrjkbD9L9cDeK8D6c91pg
          source_id: s_NW4LqP9V92uigTz1fJ2X9z
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
        id: c_ULND44rGUNcFBTN87p16q9
        subject_person_id: p_ziFePMbdNLKAgyGGN4BwgX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KbAGoFnVGK3GW59iQyyBPX
          claim_id: c_ULND44rGUNcFBTN87p16q9
          source_id: s_NW4LqP9V92uigTz1fJ2X9z
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

# 王洙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王洙 | accepted |
| birth.date | 1485年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王洙（CBDB 202146）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202146&o=json)
