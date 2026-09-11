---
schema: wang-person/v1
id: p_LRBha92FbXBVkFKFDykUTk
status: active
merged_into: null
display_name: 王冰
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FCkae6T7sTVa6TCABJrYW3
        subject_person_id: p_LRBha92FbXBVkFKFDykUTk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王冰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5CeH51bKJn2AKssV3TPraR
          claim_id: c_FCkae6T7sTVa6TCABJrYW3
          source_id: s_1kTdcPspA9aYE7u1sZKtcf
          stance: supports
          locator: CBDB:379745
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（379745）
          source: &a1
            id: s_1kTdcPspA9aYE7u1sZKtcf
            source_type: api_record
            title: 中国历代人物传记资料库：王冰（CBDB 379745）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=379745&o=json
            external_identifier: CBDB:379745
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.693Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_psBcq97XQPuQt8fxVS7sbs
        subject_person_id: p_LRBha92FbXBVkFKFDykUTk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王冰，唐人物。曾任州刺史。（中国历代人物传记资料库 CBDB 379745）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_FcQhc7hTeErbHcEVRFMzIM
          claim_id: c_psBcq97XQPuQt8fxVS7sbs
          source_id: s_1kTdcPspA9aYE7u1sZKtcf
          stance: supports
          locator: CBDB:379745
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

# 王冰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王冰 | accepted |
| bio.summary | 王冰，唐人物。曾任州刺史。（中国历代人物传记资料库 CBDB 379745） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王冰（CBDB 379745）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=379745&o=json)
