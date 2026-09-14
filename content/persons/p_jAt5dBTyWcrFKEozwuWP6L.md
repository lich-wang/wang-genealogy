---
schema: wang-person/v1
id: p_jAt5dBTyWcrFKEozwuWP6L
status: active
merged_into: null
display_name: 王樞
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_81m5oN2Ad7SDEZR2p9sVxm
        subject_person_id: p_jAt5dBTyWcrFKEozwuWP6L
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王樞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_kFqcwk4HhEMD4a5R9sHLBx
          claim_id: c_81m5oN2Ad7SDEZR2p9sVxm
          source_id: s_sNJMXsNE8VW84UPQuDZFJX
          stance: supports
          locator: CBDB:35623
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（35623）
          source: &a1
            id: s_sNJMXsNE8VW84UPQuDZFJX
            source_type: api_record
            title: 中国历代人物传记资料库：王樞（CBDB 35623）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35623&o=json
            external_identifier: CBDB:35623
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.148Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_L18MrKtcTD6DUhAWeKrNdt
        subject_person_id: p_jAt5dBTyWcrFKEozwuWP6L
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王樞，宋人物。籍贯長洲。（中国历代人物传记资料库 CBDB 35623）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_mCK5uKAlJ1-c_x8V-P90nw
          claim_id: c_L18MrKtcTD6DUhAWeKrNdt
          source_id: s_sNJMXsNE8VW84UPQuDZFJX
          stance: supports
          locator: CBDB:35623
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_9__-eGUperD5deSGP3MC6q
        subject_person_id: p_PQQ9B9zPBAjRcHDw7hpDP7
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_jAt5dBTyWcrFKEozwuWP6L
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_swjssuak-2EaOPT2XffhIJ
          claim_id: c_9__-eGUperD5deSGP3MC6q
          source_id: s_Vc6moXtCYjWoYZ8WWYAdXf
          stance: supports
          locator: CBDB 亲属：父（KinPerson 3974）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_Vc6moXtCYjWoYZ8WWYAdXf
            source_type: api_record
            title: 中国历代人物传记资料库：王樞（CBDB 35623）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35623&o=json
            external_identifier: CBDB:35623
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_PQQ9B9zPBAjRcHDw7hpDP7
        status: active
        display_name: 王述
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王樞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王樞 | accepted |
| bio.summary | 王樞，宋人物。籍贯長洲。（中国历代人物传记资料库 CBDB 35623） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_PQQ9B9zPBAjRcHDw7hpDP7 | 王述 | accepted |

## 外部来源

- [中国历代人物传记资料库：王樞（CBDB 35623）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35623&o=json)
