---
schema: wang-person/v1
id: p_dhcLe97bTrJknynFiENVQk
status: active
merged_into: null
display_name: 王從禮
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZqUxtUpzvAm62KG4oLYT3L
        subject_person_id: p_dhcLe97bTrJknynFiENVQk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王從禮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_gEaGRugFQ4pSCTygESKAP2
          claim_id: c_ZqUxtUpzvAm62KG4oLYT3L
          source_id: s_MJwVMFAtUHyas3VDB3zvLV
          stance: supports
          locator: CBDB:192787
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（192787）
          source: &a1
            id: s_MJwVMFAtUHyas3VDB3zvLV
            source_type: api_record
            title: 中国历代人物传记资料库：王從禮（CBDB 192787）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=192787&o=json
            external_identifier: CBDB:192787
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.414Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_8FAjLNj1FnC4gAJacMhfmX
        subject_person_id: p_dhcLe97bTrJknynFiENVQk
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 849年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3LvGv9gBgmaWShCQKT6h6i
          claim_id: c_8FAjLNj1FnC4gAJacMhfmX
          source_id: s_MJwVMFAtUHyas3VDB3zvLV
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
        id: c_UrRke6ojdJZVAMyMPsMA9B
        subject_person_id: p_dhcLe97bTrJknynFiENVQk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qqWo8B1GXJr4ihV3Cv8K3A
          claim_id: c_UrRke6ojdJZVAMyMPsMA9B
          source_id: s_MJwVMFAtUHyas3VDB3zvLV
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

# 王從禮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王從禮 | accepted |
| death.date | 849年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王從禮（CBDB 192787）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=192787&o=json)
