---
schema: wang-person/v1
id: p_1rksTfkThDoK87xQymRLD5
status: active
merged_into: null
display_name: 王節
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DEW1ta6N5rEiwN5iuoEn5f
        subject_person_id: p_1rksTfkThDoK87xQymRLD5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王節
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2g4vGsJ68SVBGHzEeyATgW
          claim_id: c_DEW1ta6N5rEiwN5iuoEn5f
          source_id: s_29iRghoQK6s2K9KKWGHd1A
          stance: supports
          locator: CBDB:215870
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（215870）
          source: &a1
            id: s_29iRghoQK6s2K9KKWGHd1A
            source_type: api_record
            title: 中国历代人物传记资料库：王節（CBDB 215870）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215870&o=json
            external_identifier: CBDB:215870
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.202Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_T7b2o9DARcyaLgT9eaAZaT
        subject_person_id: p_1rksTfkThDoK87xQymRLD5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王節，明人物。萬曆五年進士，籍贯蒲州，入仕學校: 生員(庠生)。（中国历代人物传记资料库 CBDB 215870）"
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_OfhITvIMiw-O4sbqmjFLzn
          claim_id: c_T7b2o9DARcyaLgT9eaAZaT
          source_id: s_29iRghoQK6s2K9KKWGHd1A
          stance: supports
          locator: CBDB:215870
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

# 王節

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王節 | accepted |
| bio.summary | 王節，明人物。萬曆五年進士，籍贯蒲州，入仕學校: 生員(庠生)。（中国历代人物传记资料库 CBDB 215870） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王節（CBDB 215870）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215870&o=json)
