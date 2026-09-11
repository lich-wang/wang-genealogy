---
schema: wang-person/v1
id: p_PR7TK6LVhPa1oHrRjcgeQC
status: active
merged_into: null
display_name: 王溥
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_bHcsrps9riJBpyqQYcc6cB
        subject_person_id: p_PR7TK6LVhPa1oHrRjcgeQC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王溥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zDGuTNMozqoE3K2ukYugNR
          claim_id: c_bHcsrps9riJBpyqQYcc6cB
          source_id: s_VR32L6tQL5oCdMxP4Ubx1E
          stance: supports
          locator: CBDB:71257
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71257）
          source: &a1
            id: s_VR32L6tQL5oCdMxP4Ubx1E
            source_type: api_record
            title: 中国历代人物传记资料库：王溥（CBDB 71257）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71257&o=json
            external_identifier: CBDB:71257
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.532Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_tK92PDgfTGV8bogJLpu8jL
        subject_person_id: p_PR7TK6LVhPa1oHrRjcgeQC
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1669年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FsnHyrX5tQUBNJL2LjDox7
          claim_id: c_tK92PDgfTGV8bogJLpu8jL
          source_id: s_VR32L6tQL5oCdMxP4Ubx1E
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
        id: c_MA1ZnZFv8mWWs95q3bhGWn
        subject_person_id: p_PR7TK6LVhPa1oHrRjcgeQC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王溥（生于1669年），清人物。籍贯錢塘。（中国历代人物传记资料库 CBDB 71257）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_anK_6W674vbDF8TeMmZSPd
          claim_id: c_MA1ZnZFv8mWWs95q3bhGWn
          source_id: s_VR32L6tQL5oCdMxP4Ubx1E
          stance: supports
          locator: CBDB:71257
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

# 王溥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王溥 | accepted |
| birth.date | 1669年 | accepted |
| bio.summary | 王溥（生于1669年），清人物。籍贯錢塘。（中国历代人物传记资料库 CBDB 71257） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王溥（CBDB 71257）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71257&o=json)
