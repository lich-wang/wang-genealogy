---
schema: wang-person/v1
id: p_CCx4JtB1z8W6aQU5GLXyXD
status: active
merged_into: null
display_name: 王撫棠
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2MLriA5V9Rze9y5hx5Ds8N
        subject_person_id: p_CCx4JtB1z8W6aQU5GLXyXD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王撫棠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_TkNVPUFw5Wtn9WpiPeQB4F
          claim_id: c_2MLriA5V9Rze9y5hx5Ds8N
          source_id: s_UVwzkV2Q5octdAm28ycCwo
          stance: supports
          locator: CBDB:638156
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638156）
          source: &a1
            id: s_UVwzkV2Q5octdAm28ycCwo
            source_type: api_record
            title: 中国历代人物传记资料库：王撫棠（CBDB 638156）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638156&o=json
            external_identifier: CBDB:638156
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.545Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_VnsExeP3VMZ9v9kwi6Tfyr
        subject_person_id: p_CCx4JtB1z8W6aQU5GLXyXD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王撫棠，清人物。籍贯會稽，入仕監生，曾任知府。（中国历代人物传记资料库 CBDB 638156）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_rDyuNrvUR4QdZRyVvbEz6I
          claim_id: c_VnsExeP3VMZ9v9kwi6Tfyr
          source_id: s_UVwzkV2Q5octdAm28ycCwo
          stance: supports
          locator: CBDB:638156
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

# 王撫棠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王撫棠 | accepted |
| bio.summary | 王撫棠，清人物。籍贯會稽，入仕監生，曾任知府。（中国历代人物传记资料库 CBDB 638156） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王撫棠（CBDB 638156）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638156&o=json)
