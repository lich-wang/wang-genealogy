---
schema: wang-person/v1
id: p_oSk8NVfBAKE4981PspXopR
status: active
merged_into: null
display_name: 王柱
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CgMt3fWRLdf6TD1dVw81sd
        subject_person_id: p_oSk8NVfBAKE4981PspXopR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王柱
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CdZrpXFNbwyFGDeKRHJMgB
          claim_id: c_CgMt3fWRLdf6TD1dVw81sd
          source_id: s_BvH9Gij87YGonj5MGvcMi8
          stance: supports
          locator: CBDB:312878
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（312878）
          source: &a1
            id: s_BvH9Gij87YGonj5MGvcMi8
            source_type: api_record
            title: 中国历代人物传记资料库：王柱（CBDB 312878）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312878&o=json
            external_identifier: CBDB:312878
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.889Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qFZpb5Lee82aWBo2Aua57Q
        subject_person_id: p_oSk8NVfBAKE4981PspXopR
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王柱，明人物。嘉靖二十九年進士，籍贯無為州。（中国历代人物传记资料库 CBDB 312878）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_YS0uXQoLYKVJphkPhjNzlo
          claim_id: c_qFZpb5Lee82aWBo2Aua57Q
          source_id: s_BvH9Gij87YGonj5MGvcMi8
          stance: supports
          locator: CBDB:312878
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

# 王柱

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王柱 | accepted |
| bio.summary | 王柱，明人物。嘉靖二十九年進士，籍贯無為州。（中国历代人物传记资料库 CBDB 312878） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王柱（CBDB 312878）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312878&o=json)
