---
schema: wang-person/v1
id: p_miziP4o1dvPJFQh5oBz2tf
status: active
merged_into: null
display_name: 王葆
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_r1ybeRBcgi1Eb8gCUvQX34
        subject_person_id: p_miziP4o1dvPJFQh5oBz2tf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王葆
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_q7YgkvNQZnxaNKDvwsZUDc
          claim_id: c_r1ybeRBcgi1Eb8gCUvQX34
          source_id: s_CG1HMzc7ZvzT2pC1QuFcyk
          stance: supports
          locator: CBDB:7086
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（7086）
          source: &a1
            id: s_CG1HMzc7ZvzT2pC1QuFcyk
            source_type: api_record
            title: 中国历代人物传记资料库：王葆（CBDB 7086）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=7086&o=json
            external_identifier: CBDB:7086
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.472Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_fMvVJurhMwLoZ9zDBzMDc6
        subject_person_id: p_miziP4o1dvPJFQh5oBz2tf
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1098年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sevtpDNPDpDtG2i11B3ykZ
          claim_id: c_fMvVJurhMwLoZ9zDBzMDc6
          source_id: s_CG1HMzc7ZvzT2pC1QuFcyk
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
        id: c_iAsBVjzz7z8BFXLgwkrH7z
        subject_person_id: p_miziP4o1dvPJFQh5oBz2tf
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1167年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UG4qPL2EJ698dMHXqVugs7
          claim_id: c_iAsBVjzz7z8BFXLgwkrH7z
          source_id: s_CG1HMzc7ZvzT2pC1QuFcyk
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
        id: c_vWDKBDKMXx3BqNwPQYtn67
        subject_person_id: p_miziP4o1dvPJFQh5oBz2tf
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dL3N1NqPoEx6x33PxR7kGE
          claim_id: c_vWDKBDKMXx3BqNwPQYtn67
          source_id: s_CG1HMzc7ZvzT2pC1QuFcyk
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_4crV9CHaqqKGD3BO4UwTRO
        subject_person_id: p_CK6Y18Q5DxUjTmD2p14zev
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_miziP4o1dvPJFQh5oBz2tf
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oQUyu-TMt_TQNOjYv94X7-
          claim_id: c_4crV9CHaqqKGD3BO4UwTRO
          source_id: s_zBQKrWZxZroHPiVGevWHNK
          stance: supports
          locator: 宋人傳記資料索引(電子版)，1072：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_zBQKrWZxZroHPiVGevWHNK
            source_type: api_record
            title: 中国历代人物传记资料库：王億（CBDB 18663）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=18663&o=json
            external_identifier: CBDB:18663
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.713Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_CK6Y18Q5DxUjTmD2p14zev
        status: active
        display_name: 王億
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王葆

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王葆 | accepted |
| birth.date | 1098年 | accepted |
| death.date | 1167年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_CK6Y18Q5DxUjTmD2p14zev | 王億 | accepted |

## 外部来源

- [中国历代人物传记资料库：王葆（CBDB 7086）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=7086&o=json)
- [中国历代人物传记资料库：王億（CBDB 18663）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=18663&o=json)
