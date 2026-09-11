---
schema: wang-person/v1
id: p_e3SrkT3CpraVn4JNXqKWsE
status: active
merged_into: null
display_name: 王德沛
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hkeMDPNzR5MzPhfNxcZL75
        subject_person_id: p_e3SrkT3CpraVn4JNXqKWsE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德沛
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_K2dyX59gDGRpAqA2bHY4mF
          claim_id: c_hkeMDPNzR5MzPhfNxcZL75
          source_id: s_38L2fWayT6ZHmzpn9vNmsC
          stance: supports
          locator: CBDB:414561
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（414561）
          source: &a1
            id: s_38L2fWayT6ZHmzpn9vNmsC
            source_type: api_record
            title: 中国历代人物传记资料库：王德沛（CBDB 414561）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=414561&o=json
            external_identifier: CBDB:414561
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.965Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gckRATbRtMCBF3aQocmvRD
        subject_person_id: p_e3SrkT3CpraVn4JNXqKWsE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德沛，明人物。曾任縣丞。（中国历代人物传记资料库 CBDB 414561）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2aNRVu88MrS2iXVRvWdC0Z
          claim_id: c_gckRATbRtMCBF3aQocmvRD
          source_id: s_38L2fWayT6ZHmzpn9vNmsC
          stance: supports
          locator: CBDB:414561
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

# 王德沛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王德沛 | accepted |
| bio.summary | 王德沛，明人物。曾任縣丞。（中国历代人物传记资料库 CBDB 414561） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王德沛（CBDB 414561）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=414561&o=json)
