---
schema: wang-person/v1
id: p_vvcJcBMSzDc9YxytK6NCq6
status: active
merged_into: null
display_name: 王士全
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_kBAjaV4P8tqBg8uCN6zS6P
        subject_person_id: p_vvcJcBMSzDc9YxytK6NCq6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士全
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KrAHKcqCpjavR8seD64B3q
          claim_id: c_kBAjaV4P8tqBg8uCN6zS6P
          source_id: s_YYWQk4d97vs9V3Hpf5J9bY
          stance: supports
          locator: CBDB:636792
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636792）
          source: &a1
            id: s_YYWQk4d97vs9V3Hpf5J9bY
            source_type: api_record
            title: 中国历代人物传记资料库：王士全（CBDB 636792）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636792&o=json
            external_identifier: CBDB:636792
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.254Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_V8ew4BXGvn2Qd48HswDPtE
        subject_person_id: p_vvcJcBMSzDc9YxytK6NCq6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士全，清人物。籍贯宛平，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 636792）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_KGCih59itXj5eSy5zD6ctW
          claim_id: c_V8ew4BXGvn2Qd48HswDPtE
          source_id: s_YYWQk4d97vs9V3Hpf5J9bY
          stance: supports
          locator: CBDB:636792
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

# 王士全

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王士全 | accepted |
| bio.summary | 王士全，清人物。籍贯宛平，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 636792） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王士全（CBDB 636792）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636792&o=json)
