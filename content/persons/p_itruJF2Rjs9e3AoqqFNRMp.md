---
schema: wang-person/v1
id: p_itruJF2Rjs9e3AoqqFNRMp
status: active
merged_into: null
display_name: 王雄
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_fzUpq9j69S93XRzESaGiFH
        subject_person_id: p_itruJF2Rjs9e3AoqqFNRMp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王雄
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5v6w7NbwyPSHdPFKdTstAP
          claim_id: c_fzUpq9j69S93XRzESaGiFH
          source_id: s_kc8LxsQNpEeHt5xaFcw3Ma
          stance: supports
          locator: CBDB:68047
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（68047）
          source: &a1
            id: s_kc8LxsQNpEeHt5xaFcw3Ma
            source_type: api_record
            title: 中国历代人物传记资料库：王雄（CBDB 68047）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68047&o=json
            external_identifier: CBDB:68047
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.042Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_X3DRjerRQWnirDmiGAmYZV
        subject_person_id: p_itruJF2Rjs9e3AoqqFNRMp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王雄，元人物。籍贯廬州路，曾任都司都指揮使、指揮。（中国历代人物传记资料库 CBDB 68047）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_hpNz82sweWpr8dvVvjx72i
          claim_id: c_X3DRjerRQWnirDmiGAmYZV
          source_id: s_kc8LxsQNpEeHt5xaFcw3Ma
          stance: supports
          locator: CBDB:68047
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

# 王雄

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王雄 | accepted |
| bio.summary | 王雄，元人物。籍贯廬州路，曾任都司都指揮使、指揮。（中国历代人物传记资料库 CBDB 68047） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王雄（CBDB 68047）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68047&o=json)
