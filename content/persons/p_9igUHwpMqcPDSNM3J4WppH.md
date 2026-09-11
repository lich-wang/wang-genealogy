---
schema: wang-person/v1
id: p_9igUHwpMqcPDSNM3J4WppH
status: active
merged_into: null
display_name: 王之正
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6XzBN9zK67Yo276GM1hLUf
        subject_person_id: p_9igUHwpMqcPDSNM3J4WppH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之正
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PF2DATXt2fFCezU9HMqBSt
          claim_id: c_6XzBN9zK67Yo276GM1hLUf
          source_id: s_u9tp5MDQ4QKRs9ZhvuzU3W
          stance: supports
          locator: CBDB:474490
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（474490）
          source: &a1
            id: s_u9tp5MDQ4QKRs9ZhvuzU3W
            source_type: api_record
            title: 中国历代人物传记资料库：王之正（CBDB 474490）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=474490&o=json
            external_identifier: CBDB:474490
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.370Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_mZ7w5dSF7ZgiL4gDH1EKbo
        subject_person_id: p_9igUHwpMqcPDSNM3J4WppH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之正，清人物。入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 474490）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_TBiZWz4pW2hKun_oLVWQa4
          claim_id: c_mZ7w5dSF7ZgiL4gDH1EKbo
          source_id: s_u9tp5MDQ4QKRs9ZhvuzU3W
          stance: supports
          locator: CBDB:474490
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

# 王之正

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王之正 | accepted |
| bio.summary | 王之正，清人物。入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 474490） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王之正（CBDB 474490）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=474490&o=json)
