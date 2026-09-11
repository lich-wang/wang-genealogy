---
schema: wang-person/v1
id: p_8XwkeaX8Nw1CENfsVFbTk2
status: active
merged_into: null
display_name: 王承林
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_75qHny5GwLoQu5hC8eptwD
        subject_person_id: p_8XwkeaX8Nw1CENfsVFbTk2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王承林
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DQXm56FoBSCry15K9Dpxd8
          claim_id: c_75qHny5GwLoQu5hC8eptwD
          source_id: s_ie2Qqo4BBBXDRJxQ87PoTg
          stance: supports
          locator: CBDB:379978
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（379978）
          source: &a1
            id: s_ie2Qqo4BBBXDRJxQ87PoTg
            source_type: api_record
            title: 中国历代人物传记资料库：王承林（CBDB 379978）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=379978&o=json
            external_identifier: CBDB:379978
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.702Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Xxkii5hc2etN2YdVxc7r45
        subject_person_id: p_8XwkeaX8Nw1CENfsVFbTk2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王承林，唐人物。曾任州刺史。（中国历代人物传记资料库 CBDB 379978）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_UwPruG4o6wzHa6aokdgIS2
          claim_id: c_Xxkii5hc2etN2YdVxc7r45
          source_id: s_ie2Qqo4BBBXDRJxQ87PoTg
          stance: supports
          locator: CBDB:379978
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

# 王承林

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王承林 | accepted |
| bio.summary | 王承林，唐人物。曾任州刺史。（中国历代人物传记资料库 CBDB 379978） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王承林（CBDB 379978）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=379978&o=json)
