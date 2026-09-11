---
schema: wang-person/v1
id: p_tFk1tHcGUAR1tC7vTyPFfE
status: active
merged_into: null
display_name: 王濟
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_khbB9nUv9ABHxiz35j4u5T
        subject_person_id: p_tFk1tHcGUAR1tC7vTyPFfE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王濟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_85aQ1BpNyVv526fdxiqggm
          claim_id: c_khbB9nUv9ABHxiz35j4u5T
          source_id: s_WQfFxAcft877bB3kKoGJhP
          stance: supports
          locator: CBDB:380742
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（380742）
          source: &a1
            id: s_WQfFxAcft877bB3kKoGJhP
            source_type: api_record
            title: 中国历代人物传记资料库：王濟（CBDB 380742）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=380742&o=json
            external_identifier: CBDB:380742
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.731Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3Pw4hr9U5d678638z25BdB
        subject_person_id: p_tFk1tHcGUAR1tC7vTyPFfE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王濟，唐人物。曾任州刺史。（中国历代人物传记资料库 CBDB 380742）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_1GgL0bjbjn3GH3-3BYQ2f3
          claim_id: c_3Pw4hr9U5d678638z25BdB
          source_id: s_WQfFxAcft877bB3kKoGJhP
          stance: supports
          locator: CBDB:380742
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

# 王濟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王濟 | accepted |
| bio.summary | 王濟，唐人物。曾任州刺史。（中国历代人物传记资料库 CBDB 380742） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王濟（CBDB 380742）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=380742&o=json)
