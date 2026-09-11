---
schema: wang-person/v1
id: p_BSMWoaEXNaNDq5E2Xvs6YC
status: active
merged_into: null
display_name: 王價齢
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_zaLympTKC9CPwwvKhA6PNG
        subject_person_id: p_BSMWoaEXNaNDq5E2Xvs6YC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王價齢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7Dec8YNuC9tocigZ1ZX7Q3
          claim_id: c_zaLympTKC9CPwwvKhA6PNG
          source_id: s_95JwBYWDfYpj1sVWAdimkn
          stance: supports
          locator: CBDB:635963
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（635963）
          source: &a1
            id: s_95JwBYWDfYpj1sVWAdimkn
            source_type: api_record
            title: 中国历代人物传记资料库：王價齢（CBDB 635963）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635963&o=json
            external_identifier: CBDB:635963
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.843Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BVei978HHxZjiTke5bfPxN
        subject_person_id: p_BSMWoaEXNaNDq5E2Xvs6YC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王價齢，清人物。籍贯武威，曾任典史。（中国历代人物传记资料库 CBDB 635963）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_bq85SEFz8g5OikGkkKPLUM
          claim_id: c_BVei978HHxZjiTke5bfPxN
          source_id: s_95JwBYWDfYpj1sVWAdimkn
          stance: supports
          locator: CBDB:635963
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

# 王價齢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王價齢 | accepted |
| bio.summary | 王價齢，清人物。籍贯武威，曾任典史。（中国历代人物传记资料库 CBDB 635963） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王價齢（CBDB 635963）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635963&o=json)
