---
schema: wang-person/v1
id: p_sUyKWR7vX7qh5edSp2XgdW
status: active
merged_into: null
display_name: 王瑞雲
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_cesoDSK4zD99nXDBxJuVwK
        subject_person_id: p_sUyKWR7vX7qh5edSp2XgdW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑞雲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8fDWkBgnuzjMo3R98kEywE
          claim_id: c_cesoDSK4zD99nXDBxJuVwK
          source_id: s_p8QSX8dhu4DXHeESYw7qTE
          stance: supports
          locator: CBDB:639438
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639438）
          source: &a1
            id: s_p8QSX8dhu4DXHeESYw7qTE
            source_type: api_record
            title: 中国历代人物传记资料库：王瑞雲（CBDB 639438）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639438&o=json
            external_identifier: CBDB:639438
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.922Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EKS9kRd1AgTQXd15X38KJQ
        subject_person_id: p_sUyKWR7vX7qh5edSp2XgdW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑞雲，清人物。籍贯廣西直隸州，入仕縣學附生，曾任復設訓導。（中国历代人物传记资料库 CBDB 639438）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_rW2QOvRGruWu9bHnit0xQE
          claim_id: c_EKS9kRd1AgTQXd15X38KJQ
          source_id: s_p8QSX8dhu4DXHeESYw7qTE
          stance: supports
          locator: CBDB:639438
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

# 王瑞雲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瑞雲 | accepted |
| bio.summary | 王瑞雲，清人物。籍贯廣西直隸州，入仕縣學附生，曾任復設訓導。（中国历代人物传记资料库 CBDB 639438） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王瑞雲（CBDB 639438）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639438&o=json)
