---
schema: wang-person/v1
id: p_VZWy8NpsmDrkZ7B4eEbrF2
status: active
merged_into: null
display_name: 王略
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_47bD6ypbMqqYUKDLCn6eCy
        subject_person_id: p_VZWy8NpsmDrkZ7B4eEbrF2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王略
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_w6PWDDqwRoV5zLR4npLFRY
          claim_id: c_47bD6ypbMqqYUKDLCn6eCy
          source_id: s_2zzaMnEcsbhtb3b3SDyBPW
          stance: supports
          locator: CBDB:572640
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（572640）
          source: &a1
            id: s_2zzaMnEcsbhtb3b3SDyBPW
            source_type: api_record
            title: 中国历代人物传记资料库：王略（CBDB 572640）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=572640&o=json
            external_identifier: CBDB:572640
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.889Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hzmXp4zgyuHwyS2BPWcqza
        subject_person_id: p_VZWy8NpsmDrkZ7B4eEbrF2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王略，宋人物。曾任太常寺博士。（中国历代人物传记资料库 CBDB 572640）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_cAPdmOq-o0m0gRRYkA2lnx
          claim_id: c_hzmXp4zgyuHwyS2BPWcqza
          source_id: s_2zzaMnEcsbhtb3b3SDyBPW
          stance: supports
          locator: CBDB:572640
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

# 王略

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王略 | accepted |
| bio.summary | 王略，宋人物。曾任太常寺博士。（中国历代人物传记资料库 CBDB 572640） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王略（CBDB 572640）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=572640&o=json)
