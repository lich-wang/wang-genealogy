---
schema: wang-person/v1
id: p_fTq13uPzWkC4P4VnXkb6pi
status: active
merged_into: null
display_name: 王樹鼎
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LJnMd5bpdShfLQ4bXL24j2
        subject_person_id: p_fTq13uPzWkC4P4VnXkb6pi
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王樹鼎
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PL6nJkcDsTPL3SKQACMJFL
          claim_id: c_LJnMd5bpdShfLQ4bXL24j2
          source_id: s_RHirk3kZhzkcAm64LrVLTW
          stance: supports
          locator: CBDB:71861
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71861）
          source: &a1
            id: s_RHirk3kZhzkcAm64LrVLTW
            source_type: api_record
            title: 中国历代人物传记资料库：王樹鼎（CBDB 71861）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71861&o=json
            external_identifier: CBDB:71861
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.902Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_Shxy7LmziHDgHEFPr9KR8g
        subject_person_id: p_fTq13uPzWkC4P4VnXkb6pi
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1835年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zr5QvBndUgaHaiqJ1gkgx6
          claim_id: c_Shxy7LmziHDgHEFPr9KR8g
          source_id: s_RHirk3kZhzkcAm64LrVLTW
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
        id: c_YPHiRRNJXWKx66FnLNxxAY
        subject_person_id: p_fTq13uPzWkC4P4VnXkb6pi
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王樹鼎（生于1835年），清人物。籍贯靈丘。（中国历代人物传记资料库 CBDB 71861）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_uEtHOwfZ8s5FG2hmUMBbrs
          claim_id: c_YPHiRRNJXWKx66FnLNxxAY
          source_id: s_RHirk3kZhzkcAm64LrVLTW
          stance: supports
          locator: CBDB:71861
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

# 王樹鼎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王樹鼎 | accepted |
| birth.date | 1835年 | accepted |
| bio.summary | 王樹鼎（生于1835年），清人物。籍贯靈丘。（中国历代人物传记资料库 CBDB 71861） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王樹鼎（CBDB 71861）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71861&o=json)
