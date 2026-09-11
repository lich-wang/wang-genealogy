---
schema: wang-person/v1
id: p_egMUbgLN9j3QmuDAjjLATD
status: active
merged_into: null
display_name: 王良駿
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Vegrm6HJGH7su9q39wDG3n
        subject_person_id: p_egMUbgLN9j3QmuDAjjLATD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王良駿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ksD5BtwNrT3mX33ooEw2ad
          claim_id: c_Vegrm6HJGH7su9q39wDG3n
          source_id: s_8HAhXTQZvUPekme68rD5Su
          stance: supports
          locator: CBDB:495137
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（495137）
          source: &a1
            id: s_8HAhXTQZvUPekme68rD5Su
            source_type: api_record
            title: 中国历代人物传记资料库：王良駿（CBDB 495137）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=495137&o=json
            external_identifier: CBDB:495137
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.479Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xXJLmJw7DszJJgTGCtGF3A
        subject_person_id: p_egMUbgLN9j3QmuDAjjLATD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王良駿，清人物。入仕行伍，曾任參將。（中国历代人物传记资料库 CBDB 495137）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_JIOTHUcisJRsPe1Y8OT9bN
          claim_id: c_xXJLmJw7DszJJgTGCtGF3A
          source_id: s_8HAhXTQZvUPekme68rD5Su
          stance: supports
          locator: CBDB:495137
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

# 王良駿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王良駿 | accepted |
| bio.summary | 王良駿，清人物。入仕行伍，曾任參將。（中国历代人物传记资料库 CBDB 495137） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王良駿（CBDB 495137）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=495137&o=json)
