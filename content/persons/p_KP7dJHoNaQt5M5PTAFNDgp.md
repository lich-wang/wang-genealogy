---
schema: wang-person/v1
id: p_KP7dJHoNaQt5M5PTAFNDgp
status: active
merged_into: null
display_name: 王衍頤
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_PvwkDkwi14CEuZLSmm1953
        subject_person_id: p_KP7dJHoNaQt5M5PTAFNDgp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王衍頤
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qaB2bYqAtHUymieXfpAj2N
          claim_id: c_PvwkDkwi14CEuZLSmm1953
          source_id: s_Ee1vaq6Q3r77J7WF4Qb4Go
          stance: supports
          locator: CBDB:640208
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640208）
          source: &a1
            id: s_Ee1vaq6Q3r77J7WF4Qb4Go
            source_type: api_record
            title: 中国历代人物传记资料库：王衍頤（CBDB 640208）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640208&o=json
            external_identifier: CBDB:640208
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.185Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8ALnDXypa6Py6st5S7PCQu
        subject_person_id: p_KP7dJHoNaQt5M5PTAFNDgp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王衍頤，清人物。籍贯曹州府，入仕廩貢生，曾任復設訓導。（中国历代人物传记资料库 CBDB 640208）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_N5t6r4NEY63Zs0Vi0SUYuu
          claim_id: c_8ALnDXypa6Py6st5S7PCQu
          source_id: s_Ee1vaq6Q3r77J7WF4Qb4Go
          stance: supports
          locator: CBDB:640208
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

# 王衍頤

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王衍頤 | accepted |
| bio.summary | 王衍頤，清人物。籍贯曹州府，入仕廩貢生，曾任復設訓導。（中国历代人物传记资料库 CBDB 640208） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王衍頤（CBDB 640208）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640208&o=json)
