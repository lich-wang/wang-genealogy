---
schema: wang-person/v1
id: p_yc7YZ6d6tqFYL2K4N2c9HV
status: active
merged_into: null
display_name: 王蒙泉
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_A7vubSk4oLboGNT4ygKKPW
        subject_person_id: p_yc7YZ6d6tqFYL2K4N2c9HV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王蒙泉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LNyLQf3Qd98oiaFg359fe8
          claim_id: c_A7vubSk4oLboGNT4ygKKPW
          source_id: s_9uNxuNxEvFZwyt97bTm3FC
          stance: supports
          locator: CBDB:640144
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640144）
          source: &a1
            id: s_9uNxuNxEvFZwyt97bTm3FC
            source_type: api_record
            title: 中国历代人物传记资料库：王蒙泉（CBDB 640144）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640144&o=json
            external_identifier: CBDB:640144
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.030Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MCqXgG7MUr8dLTNjCcP3g5
        subject_person_id: p_yc7YZ6d6tqFYL2K4N2c9HV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王蒙泉，清人物。籍贯河間府，入仕廩貢生，曾任教授。（中国历代人物传记资料库 CBDB 640144）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_mHefa-DR_qf2X5Nbf4wcwU
          claim_id: c_MCqXgG7MUr8dLTNjCcP3g5
          source_id: s_9uNxuNxEvFZwyt97bTm3FC
          stance: supports
          locator: CBDB:640144
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

# 王蒙泉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王蒙泉 | accepted |
| bio.summary | 王蒙泉，清人物。籍贯河間府，入仕廩貢生，曾任教授。（中国历代人物传记资料库 CBDB 640144） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王蒙泉（CBDB 640144）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640144&o=json)
