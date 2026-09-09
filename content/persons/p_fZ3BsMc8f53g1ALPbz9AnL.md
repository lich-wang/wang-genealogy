---
schema: wang-person/v1
id: p_fZ3BsMc8f53g1ALPbz9AnL
status: active
merged_into: null
display_name: 王樹政
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QM5yAXgSNPeZVwQiW5PX1H
        subject_person_id: p_fZ3BsMc8f53g1ALPbz9AnL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王樹政
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5L8nKor8Vwp58UsTEccfRp
          claim_id: c_QM5yAXgSNPeZVwQiW5PX1H
          source_id: s_ks2LnNsq4RaQvbZtapgsme
          stance: supports
          locator: CBDB:638847
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638847）
          source: &a1
            id: s_ks2LnNsq4RaQvbZtapgsme
            source_type: api_record
            title: 中国历代人物传记资料库：王樹政（CBDB 638847）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638847&o=json
            external_identifier: CBDB:638847
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.767Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_B5DnTPmpmwWaYxcD5F6sfp
        subject_person_id: p_fZ3BsMc8f53g1ALPbz9AnL
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
        - id: cs_oRRxZ1jgeVEdev1AJcwawn
          claim_id: c_B5DnTPmpmwWaYxcD5F6sfp
          source_id: s_ks2LnNsq4RaQvbZtapgsme
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

# 王樹政

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王樹政 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王樹政（CBDB 638847）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638847&o=json)
