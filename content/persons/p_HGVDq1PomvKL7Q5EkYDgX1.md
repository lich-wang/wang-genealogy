---
schema: wang-person/v1
id: p_HGVDq1PomvKL7Q5EkYDgX1
status: active
merged_into: null
display_name: 王鑨
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_o1t45TJWyZcBsPpZJFwe8v
        subject_person_id: p_HGVDq1PomvKL7Q5EkYDgX1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鑨
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_AUD94Q2zBbqkcdUfquCXD6
          claim_id: c_o1t45TJWyZcBsPpZJFwe8v
          source_id: s_nrJgB7rVmTFoWPh9wUuut7
          stance: supports
          locator: CBDB:471067
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（471067）
          source: &a1
            id: s_nrJgB7rVmTFoWPh9wUuut7
            source_type: api_record
            title: 中国历代人物传记资料库：王鑨（CBDB 471067）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=471067&o=json
            external_identifier: CBDB:471067
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.167Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Zz1Xrew2mj1GDNnfEhKGpP
        subject_person_id: p_HGVDq1PomvKL7Q5EkYDgX1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鑨，清人物。入仕貢生 = 貢監生 (明清賓貢,功貢)，曾任知縣。（中国历代人物传记资料库 CBDB 471067）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_3tVj36hFfKJ1mnaCAbI4Cq
          claim_id: c_Zz1Xrew2mj1GDNnfEhKGpP
          source_id: s_nrJgB7rVmTFoWPh9wUuut7
          stance: supports
          locator: CBDB:471067
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

# 王鑨

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鑨 | accepted |
| bio.summary | 王鑨，清人物。入仕貢生 = 貢監生 (明清賓貢,功貢)，曾任知縣。（中国历代人物传记资料库 CBDB 471067） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鑨（CBDB 471067）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=471067&o=json)
