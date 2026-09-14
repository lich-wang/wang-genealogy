---
schema: wang-person/v1
id: p_nvjhD4CaEbQDddhE2Ws1A1
status: active
merged_into: null
display_name: 王佐
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3oT6AKD48Rm6jWF3yRuW1H
        subject_person_id: p_nvjhD4CaEbQDddhE2Ws1A1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_R3Dny1uqZP7GUPgokzBFru
          claim_id: c_3oT6AKD48Rm6jWF3yRuW1H
          source_id: s_d4FnEdHL5MkGEAxPYSPcrk
          stance: supports
          locator: CBDB:45793
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（45793）
          source: &a1
            id: s_d4FnEdHL5MkGEAxPYSPcrk
            source_type: api_record
            title: 中国历代人物传记资料库：王佐（CBDB 45793）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=45793&o=json
            external_identifier: CBDB:45793
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.658Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZQNi1D6auEKGGKyzHpFwK1
        subject_person_id: p_nvjhD4CaEbQDddhE2Ws1A1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佐，宋人物。籍贯長汀，入仕特奏名進士、特奏名諸科 、大挑，曾任司法參軍。（中国历代人物传记资料库 CBDB 45793）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_1RtlmGHCMGSD11UBtm7FVc
          claim_id: c_ZQNi1D6auEKGGKyzHpFwK1
          source_id: s_d4FnEdHL5MkGEAxPYSPcrk
          stance: supports
          locator: CBDB:45793
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
  other:
    - claim:
        id: c_umpsscKyoKPRsdrGntitc9
        subject_person_id: p_KBknKa5FUH6bVFjEGk8tJP
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_nvjhD4CaEbQDddhE2Ws1A1
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kMGBQ4HeXusXR5iDGPIR7s
          claim_id: c_umpsscKyoKPRsdrGntitc9
          source_id: s_KL3Nxb_toVxSopxvpeYjl5
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 45793 王佐）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_KL3Nxb_toVxSopxvpeYjl5
            source_type: api_record
            title: 中国历代人物传记资料库：王仕（CBDB 38680）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38680&o=json
            external_identifier: CBDB:38680
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_KBknKa5FUH6bVFjEGk8tJP
        status: active
        display_name: 王仕
        merged_into_person_id: null
---

# 王佐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王佐 | accepted |
| bio.summary | 王佐，宋人物。籍贯長汀，入仕特奏名進士、特奏名諸科 、大挑，曾任司法參軍。（中国历代人物传记资料库 CBDB 45793） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| other | p_KBknKa5FUH6bVFjEGk8tJP | 王仕 | accepted |

## 外部来源

- [中国历代人物传记资料库：王仕（CBDB 38680）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38680&o=json)
- [中国历代人物传记资料库：王佐（CBDB 45793）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=45793&o=json)
