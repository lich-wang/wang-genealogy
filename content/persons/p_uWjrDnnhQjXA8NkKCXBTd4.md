---
schema: wang-person/v1
id: p_uWjrDnnhQjXA8NkKCXBTd4
status: active
merged_into: null
display_name: 王學詩
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1U97i1WwQENLGukkaGW4uV
        subject_person_id: p_uWjrDnnhQjXA8NkKCXBTd4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王學詩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_TRsU4crDqWXinB3FSLKg7R
          claim_id: c_1U97i1WwQENLGukkaGW4uV
          source_id: s_i8ANPQnAAEz8RAFCD5Ajc6
          stance: supports
          locator: CBDB:211987
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（211987）
          source: &a1
            id: s_i8ANPQnAAEz8RAFCD5Ajc6
            source_type: api_record
            title: 中国历代人物传记资料库：王學詩（CBDB 211987）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211987&o=json
            external_identifier: CBDB:211987
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.040Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_wHHbGZCf8UXEPZUtYFjJtZ
        subject_person_id: p_uWjrDnnhQjXA8NkKCXBTd4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王學詩，明人物。隆慶五年進士，籍贯濱州。（中国历代人物传记资料库 CBDB 211987）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Ml_FHlsBWJmCiJtsp4Hi3R
          claim_id: c_wHHbGZCf8UXEPZUtYFjJtZ
          source_id: s_i8ANPQnAAEz8RAFCD5Ajc6
          stance: supports
          locator: CBDB:211987
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

# 王學詩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王學詩 | accepted |
| bio.summary | 王學詩，明人物。隆慶五年進士，籍贯濱州。（中国历代人物传记资料库 CBDB 211987） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王學詩（CBDB 211987）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211987&o=json)
