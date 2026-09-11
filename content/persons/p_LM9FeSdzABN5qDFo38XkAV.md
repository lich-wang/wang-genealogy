---
schema: wang-person/v1
id: p_LM9FeSdzABN5qDFo38XkAV
status: active
merged_into: null
display_name: 王金鑾
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_jTrpZsxJZaSm49dX4PyFGi
        subject_person_id: p_LM9FeSdzABN5qDFo38XkAV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王金鑾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zFLb1bFUu5a2Lp26wA8won
          claim_id: c_jTrpZsxJZaSm49dX4PyFGi
          source_id: s_Uu2h1EbMp8GbxYtQrLr8Q4
          stance: supports
          locator: CBDB:640533
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640533）
          source: &a1
            id: s_Uu2h1EbMp8GbxYtQrLr8Q4
            source_type: api_record
            title: 中国历代人物传记资料库：王金鑾（CBDB 640533）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640533&o=json
            external_identifier: CBDB:640533
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.288Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_D4PhrEuFBCAiDh3e4NdHqP
        subject_person_id: p_LM9FeSdzABN5qDFo38XkAV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王金鑾，清人物。籍贯鳳翔，入仕貢生: 恩貢，曾任復設教諭。（中国历代人物传记资料库 CBDB 640533）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_gi53e3mxBA3178isnpKmi0
          claim_id: c_D4PhrEuFBCAiDh3e4NdHqP
          source_id: s_Uu2h1EbMp8GbxYtQrLr8Q4
          stance: supports
          locator: CBDB:640533
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

# 王金鑾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王金鑾 | accepted |
| bio.summary | 王金鑾，清人物。籍贯鳳翔，入仕貢生: 恩貢，曾任復設教諭。（中国历代人物传记资料库 CBDB 640533） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王金鑾（CBDB 640533）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640533&o=json)
