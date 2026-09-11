---
schema: wang-person/v1
id: p_9DFtN3jCgKeo29eVan9U4Z
status: active
merged_into: null
display_name: 王斗樞
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_iXDn5i1SmdEW3NCr1V1K9Q
        subject_person_id: p_9DFtN3jCgKeo29eVan9U4Z
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王斗樞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ZXiJfMVT74D7pChDZJwjuL
          claim_id: c_iXDn5i1SmdEW3NCr1V1K9Q
          source_id: s_jG36v6GEsbMXsWHAmckQ79
          stance: supports
          locator: CBDB:71438
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71438）
          source: &a1
            id: s_jG36v6GEsbMXsWHAmckQ79
            source_type: api_record
            title: 中国历代人物传记资料库：王斗樞（CBDB 71438）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71438&o=json
            external_identifier: CBDB:71438
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.671Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_FocTMGAdHsFP44ZJvm7EqZ
        subject_person_id: p_9DFtN3jCgKeo29eVan9U4Z
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1625年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_i4o5KbiTUNif4dDLqMMF2E
          claim_id: c_FocTMGAdHsFP44ZJvm7EqZ
          source_id: s_jG36v6GEsbMXsWHAmckQ79
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
        id: c_7sCBFd8CLB8vASFjWpAyTk
        subject_person_id: p_9DFtN3jCgKeo29eVan9U4Z
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王斗樞（生于1625年），清人物。籍贯諸城。（中国历代人物传记资料库 CBDB 71438）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_EPv9RDzO5LSrqGl3uIzuUr
          claim_id: c_7sCBFd8CLB8vASFjWpAyTk
          source_id: s_jG36v6GEsbMXsWHAmckQ79
          stance: supports
          locator: CBDB:71438
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

# 王斗樞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王斗樞 | accepted |
| birth.date | 1625年 | accepted |
| bio.summary | 王斗樞（生于1625年），清人物。籍贯諸城。（中国历代人物传记资料库 CBDB 71438） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王斗樞（CBDB 71438）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71438&o=json)
