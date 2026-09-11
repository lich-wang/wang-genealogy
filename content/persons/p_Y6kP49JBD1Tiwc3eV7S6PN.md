---
schema: wang-person/v1
id: p_Y6kP49JBD1Tiwc3eV7S6PN
status: active
merged_into: null
display_name: 王履泰
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GhGajK3SUaagxPy5WSq13p
        subject_person_id: p_Y6kP49JBD1Tiwc3eV7S6PN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王履泰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DK3FMvNrEYP97VaPX5ehDV
          claim_id: c_GhGajK3SUaagxPy5WSq13p
          source_id: s_JHU3Ka6AFBTGaBdjnSZFr7
          stance: supports
          locator: CBDB:637322
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637322）
          source: &a1
            id: s_JHU3Ka6AFBTGaBdjnSZFr7
            source_type: api_record
            title: 中国历代人物传记资料库：王履泰（CBDB 637322）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637322&o=json
            external_identifier: CBDB:637322
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.382Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_68qbUjUn8uSVE9bgPHDDnM
        subject_person_id: p_Y6kP49JBD1Tiwc3eV7S6PN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王履泰，清人物。籍贯吳江，入仕監生，曾任河捕同知、知府。（中国历代人物传记资料库 CBDB 637322）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_8i3VX4XpbwU3VS9bKNCFAA
          claim_id: c_68qbUjUn8uSVE9bgPHDDnM
          source_id: s_JHU3Ka6AFBTGaBdjnSZFr7
          stance: supports
          locator: CBDB:637322
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

# 王履泰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王履泰 | accepted |
| bio.summary | 王履泰，清人物。籍贯吳江，入仕監生，曾任河捕同知、知府。（中国历代人物传记资料库 CBDB 637322） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王履泰（CBDB 637322）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637322&o=json)
