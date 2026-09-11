---
schema: wang-person/v1
id: p_iftPinCxVdcHjHuC1HMM4z
status: active
merged_into: null
display_name: 王應鳳
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Vc6SkYiWNGW39LAykwxzqu
        subject_person_id: p_iftPinCxVdcHjHuC1HMM4z
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應鳳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_TFPH2yECJ7zSu7M1Chg47C
          claim_id: c_Vc6SkYiWNGW39LAykwxzqu
          source_id: s_RFBnFTv4pV7N5cLcg3R3Tv
          stance: supports
          locator: CBDB:313053
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（313053）
          source: &a1
            id: s_RFBnFTv4pV7N5cLcg3R3Tv
            source_type: api_record
            title: 中国历代人物传记资料库：王應鳳（CBDB 313053）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313053&o=json
            external_identifier: CBDB:313053
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.897Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_aUzE114DwVyBXrf22dL9K9
        subject_person_id: p_iftPinCxVdcHjHuC1HMM4z
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應鳳，明人物。嘉靖二十九年進士，籍贯聊城。（中国历代人物传记资料库 CBDB 313053）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2Af9yP8F7VsVRn9eJt-hBt
          claim_id: c_aUzE114DwVyBXrf22dL9K9
          source_id: s_RFBnFTv4pV7N5cLcg3R3Tv
          stance: supports
          locator: CBDB:313053
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

# 王應鳳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王應鳳 | accepted |
| bio.summary | 王應鳳，明人物。嘉靖二十九年進士，籍贯聊城。（中国历代人物传记资料库 CBDB 313053） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王應鳳（CBDB 313053）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313053&o=json)
