---
schema: wang-person/v1
id: p_YpCvsg7tRj2LyMCCRWa4fB
status: active
merged_into: null
display_name: 王士汗
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_sUiGJbnrVbigBDpMNyNoJm
        subject_person_id: p_YpCvsg7tRj2LyMCCRWa4fB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士汗
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Gz75DGu43Av5etsRESYAP3
          claim_id: c_sUiGJbnrVbigBDpMNyNoJm
          source_id: s_oR6PQ2ahLp1B9wTeMQ3QZn
          stance: supports
          locator: CBDB:636802
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636802）
          source: &a1
            id: s_oR6PQ2ahLp1B9wTeMQ3QZn
            source_type: api_record
            title: 中国历代人物传记资料库：王士汗（CBDB 636802）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636802&o=json
            external_identifier: CBDB:636802
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.111Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GGekcJKtupsuLHMPusfVMS
        subject_person_id: p_YpCvsg7tRj2LyMCCRWa4fB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士汗，清人物。籍贯咸寧，入仕貢生 = 貢監生 (明清賓貢,功貢)，曾任縣丞。（中国历代人物传记资料库 CBDB 636802）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_CdqJu3C31y3jzn-XudRIjD
          claim_id: c_GGekcJKtupsuLHMPusfVMS
          source_id: s_oR6PQ2ahLp1B9wTeMQ3QZn
          stance: supports
          locator: CBDB:636802
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

# 王士汗

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王士汗 | accepted |
| bio.summary | 王士汗，清人物。籍贯咸寧，入仕貢生 = 貢監生 (明清賓貢,功貢)，曾任縣丞。（中国历代人物传记资料库 CBDB 636802） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王士汗（CBDB 636802）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636802&o=json)
