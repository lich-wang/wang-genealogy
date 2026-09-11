---
schema: wang-person/v1
id: p_9D3oCBGs8V2hsXrFih4BP6
status: active
merged_into: null
display_name: 王抃
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9zaCKcGqirS4kYNbFcQLT6
        subject_person_id: p_9D3oCBGs8V2hsXrFih4BP6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王抃
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_kfkf377s94EniLMJW7wp6u
          claim_id: c_9zaCKcGqirS4kYNbFcQLT6
          source_id: s_bRPdBEmGwkME1hrQ5KE3zU
          stance: supports
          locator: CBDB:39015
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（39015）
          source: &a1
            id: s_bRPdBEmGwkME1hrQ5KE3zU
            source_type: api_record
            title: 中国历代人物传记资料库：王抃（CBDB 39015）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=39015&o=json
            external_identifier: CBDB:39015
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.585Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_dUHGcupwxMrz6k8YNQ6Aio
        subject_person_id: p_9D3oCBGs8V2hsXrFih4BP6
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1184年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jdAKSdxK2EiuPc9TDdv9Uy
          claim_id: c_dUHGcupwxMrz6k8YNQ6Aio
          source_id: s_bRPdBEmGwkME1hrQ5KE3zU
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FHW3QVBw3LNv4dHeAd5G8T
        subject_person_id: p_9D3oCBGs8V2hsXrFih4BP6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王抃（卒于1184年），宋人物。曾任觀察使、知閤門事。（中国历代人物传记资料库 CBDB 39015）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Tuk-V-F7koa1_3MIlgqV5k
          claim_id: c_FHW3QVBw3LNv4dHeAd5G8T
          source_id: s_bRPdBEmGwkME1hrQ5KE3zU
          stance: supports
          locator: CBDB:39015
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

# 王抃

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王抃 | accepted |
| death.date | 1184年 | accepted |
| bio.summary | 王抃（卒于1184年），宋人物。曾任觀察使、知閤門事。（中国历代人物传记资料库 CBDB 39015） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王抃（CBDB 39015）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=39015&o=json)
