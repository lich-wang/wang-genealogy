---
schema: wang-person/v1
id: p_V2mCqmjfJdicZ6MY5zVdKT
status: active
merged_into: null
display_name: 王殿魁
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AZZ1M13oRnycXFa6vMq1oY
        subject_person_id: p_V2mCqmjfJdicZ6MY5zVdKT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王殿魁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_inNp9xSGHcEAhdxZia8zYa
          claim_id: c_AZZ1M13oRnycXFa6vMq1oY
          source_id: s_E6U2wLd3YG934SPxSDQJgz
          stance: supports
          locator: CBDB:638942
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638942）
          source: &a1
            id: s_E6U2wLd3YG934SPxSDQJgz
            source_type: api_record
            title: 中国历代人物传记资料库：王殿魁（CBDB 638942）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638942&o=json
            external_identifier: CBDB:638942
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.818Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gdHSBNknayiCnw99Ka62cK
        subject_person_id: p_V2mCqmjfJdicZ6MY5zVdKT
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王殿魁，清人物。籍贯渭南，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 638942）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_uBu8Xf38dlNJNWlXegJCID
          claim_id: c_gdHSBNknayiCnw99Ka62cK
          source_id: s_E6U2wLd3YG934SPxSDQJgz
          stance: supports
          locator: CBDB:638942
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

# 王殿魁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王殿魁 | accepted |
| bio.summary | 王殿魁，清人物。籍贯渭南，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 638942） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王殿魁（CBDB 638942）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638942&o=json)
