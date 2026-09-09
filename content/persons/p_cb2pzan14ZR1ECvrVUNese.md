---
schema: wang-person/v1
id: p_cb2pzan14ZR1ECvrVUNese
status: active
merged_into: null
display_name: 王胡
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZxtxVNTGdQFAwosKLnTVWJ
        subject_person_id: p_cb2pzan14ZR1ECvrVUNese
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王胡
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9w63dS7Nf5kpCuaybNf8C8
          claim_id: c_ZxtxVNTGdQFAwosKLnTVWJ
          source_id: s_mtoajfRU5iL74uCLWmM7bH
          stance: supports
          locator: CBDB:142838
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（142838）
          source: &a1
            id: s_mtoajfRU5iL74uCLWmM7bH
            source_type: api_record
            title: 中国历代人物传记资料库：王胡（CBDB 142838）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=142838&o=json
            external_identifier: CBDB:142838
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.217Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_NKfgCBML4nDaFFXDUyJ49Z
        subject_person_id: p_cb2pzan14ZR1ECvrVUNese
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 634年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XWMrxd814gqanmratT8qJj
          claim_id: c_NKfgCBML4nDaFFXDUyJ49Z
          source_id: s_mtoajfRU5iL74uCLWmM7bH
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_H9pczE2Cwz5pSBCPX6Af8n
        subject_person_id: p_cb2pzan14ZR1ECvrVUNese
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 714年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JCidnvMBA2DXj3kVdnCAn9
          claim_id: c_H9pczE2Cwz5pSBCPX6Af8n
          source_id: s_mtoajfRU5iL74uCLWmM7bH
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
        id: c_BZuMmaZUj9WkuLynH51xE5
        subject_person_id: p_cb2pzan14ZR1ECvrVUNese
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为周人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tBP7UFU7zMRSnvY2jc58fF
          claim_id: c_BZuMmaZUj9WkuLynH51xE5
          source_id: s_mtoajfRU5iL74uCLWmM7bH
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

# 王胡

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王胡 | accepted |
| birth.date | 634年 | accepted |
| death.date | 714年 | accepted |
| bio.summary | CBDB 记载为周人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王胡（CBDB 142838）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=142838&o=json)
