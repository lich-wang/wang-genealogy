---
schema: wang-person/v1
id: p_iptxK2VF91hPh5kchncZeJ
status: active
merged_into: null
display_name: 王卿霖
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Wmz6TDLT3LHnRmAa2ymioD
        subject_person_id: p_iptxK2VF91hPh5kchncZeJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王卿霖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_k43HEJ8fq8C7YtkqDgysHK
          claim_id: c_Wmz6TDLT3LHnRmAa2ymioD
          source_id: s_rsa9HMJxWHC1F4TD2tMvGV
          stance: supports
          locator: CBDB:636442
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636442）
          source: &a1
            id: s_rsa9HMJxWHC1F4TD2tMvGV
            source_type: api_record
            title: 中国历代人物传记资料库：王卿霖（CBDB 636442）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636442&o=json
            external_identifier: CBDB:636442
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.991Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9FjsbpAG3iAC15EzMRVHdk
        subject_person_id: p_iptxK2VF91hPh5kchncZeJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XRQviMpXW6Q8po79YJ23tk
          claim_id: c_9FjsbpAG3iAC15EzMRVHdk
          source_id: s_rsa9HMJxWHC1F4TD2tMvGV
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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

# 王卿霖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王卿霖 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王卿霖（CBDB 636442）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636442&o=json)
