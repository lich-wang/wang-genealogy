---
schema: wang-person/v1
id: p_x2jGj5g4CvT1eXBPSR7agR
status: active
merged_into: null
display_name: 王統仁
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CX9K1mWzkRuPKqwj1fTMAR
        subject_person_id: p_x2jGj5g4CvT1eXBPSR7agR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王統仁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_C3GdF57SPGLE1WoY9HB61e
          claim_id: c_CX9K1mWzkRuPKqwj1fTMAR
          source_id: s_P32JqRqGC8i4M1JCUmfF9A
          stance: supports
          locator: CBDB:71928
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71928）
          source: &a1
            id: s_P32JqRqGC8i4M1JCUmfF9A
            source_type: api_record
            title: 中国历代人物传记资料库：王統仁（CBDB 71928）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71928&o=json
            external_identifier: CBDB:71928
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.928Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_ewCv9KkhokGe1bd5Q5XNxX
        subject_person_id: p_x2jGj5g4CvT1eXBPSR7agR
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1777年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gLxKEKKGpVS92j6vm7xAWx
          claim_id: c_ewCv9KkhokGe1bd5Q5XNxX
          source_id: s_P32JqRqGC8i4M1JCUmfF9A
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
        id: c_DNZN15LMLWWJEDpYV7wrtK
        subject_person_id: p_x2jGj5g4CvT1eXBPSR7agR
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王統仁（生于1777年），清人物。籍贯樂陵。（中国历代人物传记资料库 CBDB 71928）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_csKca6NRoodV0WlNceZE1y
          claim_id: c_DNZN15LMLWWJEDpYV7wrtK
          source_id: s_P32JqRqGC8i4M1JCUmfF9A
          stance: supports
          locator: CBDB:71928
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

# 王統仁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王統仁 | accepted |
| birth.date | 1777年 | accepted |
| bio.summary | 王統仁（生于1777年），清人物。籍贯樂陵。（中国历代人物传记资料库 CBDB 71928） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王統仁（CBDB 71928）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71928&o=json)
