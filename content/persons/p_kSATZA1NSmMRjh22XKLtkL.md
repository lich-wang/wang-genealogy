---
schema: wang-person/v1
id: p_kSATZA1NSmMRjh22XKLtkL
status: active
merged_into: null
display_name: 王舟瑤
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_rmmFq81gUo4oTrEjEfqA2e
        subject_person_id: p_kSATZA1NSmMRjh22XKLtkL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王舟瑤
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_UjWFtbXE441FaFefKWFgjp
          claim_id: c_rmmFq81gUo4oTrEjEfqA2e
          source_id: s_ySUtR4eG9j8bwW1AcJ4T1r
          stance: supports
          locator: CBDB:71589
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71589）
          source: &a1
            id: s_ySUtR4eG9j8bwW1AcJ4T1r
            source_type: api_record
            title: 中国历代人物传记资料库：王舟瑤（CBDB 71589）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71589&o=json
            external_identifier: CBDB:71589
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.770Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_UYmLQJJD3CZPLx8FjXLViP
        subject_person_id: p_kSATZA1NSmMRjh22XKLtkL
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1858年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vLJMjY2MyNk6gSQgRsHNvs
          claim_id: c_UYmLQJJD3CZPLx8FjXLViP
          source_id: s_ySUtR4eG9j8bwW1AcJ4T1r
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_VKJKydkCkWDKiaZDZvkhPy
        subject_person_id: p_kSATZA1NSmMRjh22XKLtkL
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1925年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_f7mwgj1iYMNW9Li77ZKuLB
          claim_id: c_VKJKydkCkWDKiaZDZvkhPy
          source_id: s_ySUtR4eG9j8bwW1AcJ4T1r
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_L6KBEaHEAZCTQGuJL4wnLR
        subject_person_id: p_kSATZA1NSmMRjh22XKLtkL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王舟瑤（1858年—1925年），中華民國人物。籍贯黃巖。（中国历代人物传记资料库 CBDB 71589）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_6SfjOStBfh6493UwGvRmD_
          claim_id: c_L6KBEaHEAZCTQGuJL4wnLR
          source_id: s_ySUtR4eG9j8bwW1AcJ4T1r
          stance: supports
          locator: CBDB:71589
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

# 王舟瑤

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王舟瑤 | accepted |
| birth.date | 1858年 | accepted |
| death.date | 1925年 | accepted |
| bio.summary | 王舟瑤（1858年—1925年），中華民國人物。籍贯黃巖。（中国历代人物传记资料库 CBDB 71589） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王舟瑤（CBDB 71589）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71589&o=json)
