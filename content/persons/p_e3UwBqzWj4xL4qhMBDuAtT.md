---
schema: wang-person/v1
id: p_e3UwBqzWj4xL4qhMBDuAtT
status: active
merged_into: null
display_name: 王珂
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZUpdixWAxMNnD5hwpQuEJ7
        subject_person_id: p_e3UwBqzWj4xL4qhMBDuAtT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珂
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_o8NemdYxMFjtDEh1ZeJXwW
          claim_id: c_ZUpdixWAxMNnD5hwpQuEJ7
          source_id: s_ToDGb7pbKgDmYyVbhYo3Hz
          stance: supports
          locator: CBDB:510407
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（510407）
          source: &a1
            id: s_ToDGb7pbKgDmYyVbhYo3Hz
            source_type: api_record
            title: 中国历代人物传记资料库：王珂（CBDB 510407）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=510407&o=json
            external_identifier: CBDB:510407
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.235Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MWEEPYMDu4a9MrKR4Ujui9
        subject_person_id: p_e3UwBqzWj4xL4qhMBDuAtT
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王珂，清人物。入仕貢生: 歲貢、常貢、挨貢，曾任訓導。（中国历代人物传记资料库 CBDB 510407）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_-x-XlGw2fhHNJwvoSqscGZ
          claim_id: c_MWEEPYMDu4a9MrKR4Ujui9
          source_id: s_ToDGb7pbKgDmYyVbhYo3Hz
          stance: supports
          locator: CBDB:510407
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

# 王珂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王珂 | accepted |
| bio.summary | 王珂，清人物。入仕貢生: 歲貢、常貢、挨貢，曾任訓導。（中国历代人物传记资料库 CBDB 510407） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王珂（CBDB 510407）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=510407&o=json)
