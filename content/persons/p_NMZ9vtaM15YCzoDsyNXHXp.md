---
schema: wang-person/v1
id: p_NMZ9vtaM15YCzoDsyNXHXp
status: active
merged_into: null
display_name: 王孚
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3NfT6wwUbH634ik2navqC6
        subject_person_id: p_NMZ9vtaM15YCzoDsyNXHXp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王孚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_kMJpHAYLbYQQ1Ni6Y4uHKP
          claim_id: c_3NfT6wwUbH634ik2navqC6
          source_id: s_hZqiJ2iNsjdZ1mtJLHw5Bw
          stance: supports
          locator: CBDB:505613
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（505613）
          source: &a1
            id: s_hZqiJ2iNsjdZ1mtJLHw5Bw
            source_type: api_record
            title: 中国历代人物传记资料库：王孚（CBDB 505613）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=505613&o=json
            external_identifier: CBDB:505613
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.968Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8qfE1NAJCas2ZxDzr7Vqn3
        subject_person_id: p_NMZ9vtaM15YCzoDsyNXHXp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王孚，明人物。曾任訓導。（中国历代人物传记资料库 CBDB 505613）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_uWNbofX0oN_JP7TnK7le0O
          claim_id: c_8qfE1NAJCas2ZxDzr7Vqn3
          source_id: s_hZqiJ2iNsjdZ1mtJLHw5Bw
          stance: supports
          locator: CBDB:505613
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

# 王孚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王孚 | accepted |
| bio.summary | 王孚，明人物。曾任訓導。（中国历代人物传记资料库 CBDB 505613） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王孚（CBDB 505613）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=505613&o=json)
