---
schema: wang-person/v1
id: p_VQNSNTbohZEpT6x9kpQL48
status: active
merged_into: null
display_name: 王丕蒲
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hDUZZVf9ocNqyCtEQo1UbM
        subject_person_id: p_VQNSNTbohZEpT6x9kpQL48
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王丕蒲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CDG3J2n2abvTA7jtQAZb8a
          claim_id: c_hDUZZVf9ocNqyCtEQo1UbM
          source_id: s_BxzfUj4C8QM23ScL4CqW9k
          stance: supports
          locator: CBDB:635662
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（635662）
          source: &a1
            id: s_BxzfUj4C8QM23ScL4CqW9k
            source_type: api_record
            title: 中国历代人物传记资料库：王丕蒲（CBDB 635662）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635662&o=json
            external_identifier: CBDB:635662
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.751Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MUjuVtKitiBjQDm7XntD5Q
        subject_person_id: p_VQNSNTbohZEpT6x9kpQL48
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王丕蒲，清人物。籍贯武定直隸州，入仕廩貢生，曾任復設訓導。（中国历代人物传记资料库 CBDB 635662）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_j2vkp5jBMcUixmQ6OnvjOv
          claim_id: c_MUjuVtKitiBjQDm7XntD5Q
          source_id: s_BxzfUj4C8QM23ScL4CqW9k
          stance: supports
          locator: CBDB:635662
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

# 王丕蒲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王丕蒲 | accepted |
| bio.summary | 王丕蒲，清人物。籍贯武定直隸州，入仕廩貢生，曾任復設訓導。（中国历代人物传记资料库 CBDB 635662） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王丕蒲（CBDB 635662）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635662&o=json)
