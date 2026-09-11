---
schema: wang-person/v1
id: p_zezzzdKE1RTk3SQticUuJW
status: active
merged_into: null
display_name: 王映庚
cbdb_id: 526916
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6KNnbRHo2eFMNbd1G4u4Ej
        subject_person_id: p_zezzzdKE1RTk3SQticUuJW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王映庚，清人物。中国历代人物传记资料库（CBDB）以人物编号 526916 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_BDWsESUGoKbKWzBRsq2Xj2
          claim_id: c_6KNnbRHo2eFMNbd1G4u4Ej
          source_id: s_xG47dcjMLQQPWGCDtPq7xF
          stance: supports
          locator: CBDB:526916
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_xG47dcjMLQQPWGCDtPq7xF
            source_type: api_record
            title: 中国历代人物传记资料库：王映庚（CBDB 526916）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526916&o=json
            external_identifier: CBDB:526916
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:19.665Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_S17dF7pcqzneGJd2VMRddA
        subject_person_id: p_zezzzdKE1RTk3SQticUuJW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王映庚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_tJkFEyFtGFDDYPnyD1r9Wz
          claim_id: c_S17dF7pcqzneGJd2VMRddA
          source_id: s_xG47dcjMLQQPWGCDtPq7xF
          stance: supports
          locator: CBDB:526916
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（7201-7229）｜历史性依据：CBDB 朝代 = 清
          source:
            id: s_xG47dcjMLQQPWGCDtPq7xF
            source_type: api_record
            title: 中国历代人物传记资料库：王映庚（CBDB 526916）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526916&o=json
            external_identifier: CBDB:526916
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:19.665Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_75zXH8RWO2_uV7eDD53JKb
        subject_person_id: p_uK6f3zJHrJTFkMSZTViNpK
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_zezzzdKE1RTk3SQticUuJW
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YKC1aR-5ntIgq91OE2ppJF
          claim_id: c_75zXH8RWO2_uV7eDD53JKb
          source_id: s_PH9MVT6mUY7zCGUeaat8NL
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），13095：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_PH9MVT6mUY7zCGUeaat8NL
            source_type: api_record
            title: 中国历代人物传记资料库：王鼎銘（CBDB 69390）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69390&o=json
            external_identifier: CBDB:69390
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.245Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_uK6f3zJHrJTFkMSZTViNpK
        status: active
        display_name: 王鼎銘
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王映庚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王映庚，清人物。中国历代人物传记资料库（CBDB）以人物编号 526916 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王映庚 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_uK6f3zJHrJTFkMSZTViNpK | 王鼎銘 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鼎銘（CBDB 69390）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69390&o=json)
- [中国历代人物传记资料库：王映庚（CBDB 526916）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526916&o=json)
