---
schema: wang-person/v1
id: p_6Gr39uWBWBSaZ6zdiiC9X7
status: active
merged_into: null
display_name: 王家士
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1HdvBDdEDs5oBYmvFcsAY6
        subject_person_id: p_6Gr39uWBWBSaZ6zdiiC9X7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王家士
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MLsjCszx6iFYUqbH4FWktb
          claim_id: c_1HdvBDdEDs5oBYmvFcsAY6
          source_id: s_EBPr4FfrCPtDNa2TnHfaWj
          stance: supports
          locator: CBDB:551460
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（551460）
          source: &a1
            id: s_EBPr4FfrCPtDNa2TnHfaWj
            source_type: api_record
            title: 中国历代人物传记资料库：王家士（CBDB 551460）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=551460&o=json
            external_identifier: CBDB:551460
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.509Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_g9d8EBPCj7gjyMN34FtPTo
        subject_person_id: p_6Gr39uWBWBSaZ6zdiiC9X7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QeNyf9F8LCFgma376vH9E9
          claim_id: c_g9d8EBPCj7gjyMN34FtPTo
          source_id: s_EBPr4FfrCPtDNa2TnHfaWj
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
  spouses:
    - claim:
        id: c_oIRx2z4p8J6YdPCIHneE7t
        subject_person_id: p_6Gr39uWBWBSaZ6zdiiC9X7
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_WTBvV1dQNVSciRnC2pT1GP
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iDWMPmzKj-IShhUVxx5QC4
          claim_id: c_oIRx2z4p8J6YdPCIHneE7t
          source_id: s_yGRHsl3lCwBvkgNSDOFCxx
          stance: supports
          locator: 南陽府志，lgid=878669：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_yGRHsl3lCwBvkgNSDOFCxx
            source_type: api_record
            title: 中国历代人物传记资料库：蘇氏(王家士妻)（CBDB 551466）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=551466&o=json
            external_identifier: CBDB:551466
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_WTBvV1dQNVSciRnC2pT1GP
        status: active
        display_name: 蘇氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王家士

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王家士 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_WTBvV1dQNVSciRnC2pT1GP | 蘇氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：蘇氏(王家士妻)（CBDB 551466）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=551466&o=json)
- [中国历代人物传记资料库：王家士（CBDB 551460）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=551460&o=json)
