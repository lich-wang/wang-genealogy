---
schema: wang-person/v1
id: p_1BKgqDdnsrgV2GCevBUtrp
status: active
merged_into: null
display_name: 王藻
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QLViYv38efp71J5UF59cj2
        subject_person_id: p_1BKgqDdnsrgV2GCevBUtrp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王藻
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_mFs15BL51Jp511LMtPkakY
          claim_id: c_QLViYv38efp71J5UF59cj2
          source_id: s_sVqDq5BWtgjnP8wyL4YBfr
          stance: supports
          locator: CBDB:386679
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（386679）
          source: &a1
            id: s_sVqDq5BWtgjnP8wyL4YBfr
            source_type: api_record
            title: 中国历代人物传记资料库：王藻（CBDB 386679）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=386679&o=json
            external_identifier: CBDB:386679
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.900Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MMou6gnkp1YNFZxd6pPNXy
        subject_person_id: p_1BKgqDdnsrgV2GCevBUtrp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王藻，元人物。籍贯金華，曾任判官、州判官。（中国历代人物传记资料库 CBDB 386679）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_gn2kG4nkqsq3DEVPvksHEr
          claim_id: c_MMou6gnkp1YNFZxd6pPNXy
          source_id: s_sVqDq5BWtgjnP8wyL4YBfr
          stance: supports
          locator: CBDB:386679
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_FtKlfeorK1OmymgLHk-PsG
        subject_person_id: p_7iL2YaUSwb4m6n9tZWZ4k5
        claim_kind: relationship
        predicate: kinship.mother_of
        object_person_id: p_1BKgqDdnsrgV2GCevBUtrp
        generation_count: null
        parent_role: mother
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_kv102CRNe5_2I6LNm9rtx1
          claim_id: c_FtKlfeorK1OmymgLHk-PsG
          source_id: s_ChR6kfJG4Zb-3Mcgq5qnXA
          stance: supports
          locator: CBDB 亲属：母（KinPerson 386677）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_ChR6kfJG4Zb-3Mcgq5qnXA
            source_type: api_record
            title: 中国历代人物传记资料库：王藻（CBDB 386679）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=386679&o=json
            external_identifier: CBDB:386679
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_7iL2YaUSwb4m6n9tZWZ4k5
        status: active
        display_name: 唐氏
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王藻

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王藻 | accepted |
| bio.summary | 王藻，元人物。籍贯金華，曾任判官、州判官。（中国历代人物传记资料库 CBDB 386679） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_7iL2YaUSwb4m6n9tZWZ4k5 | 唐氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：王藻（CBDB 386679）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=386679&o=json)
