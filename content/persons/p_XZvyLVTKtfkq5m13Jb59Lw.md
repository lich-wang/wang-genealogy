---
schema: wang-person/v1
id: p_XZvyLVTKtfkq5m13Jb59Lw
status: active
merged_into: null
display_name: 王禮
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_kDktdAi5z9coKngaH64iZq
        subject_person_id: p_XZvyLVTKtfkq5m13Jb59Lw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王禮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Fp9ia6873g6QquHWErKQF5
          claim_id: c_kDktdAi5z9coKngaH64iZq
          source_id: s_bQsANNShYtsArA4H1sqMM1
          stance: supports
          locator: CBDB:35519
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（35519）
          source: &a1
            id: s_bQsANNShYtsArA4H1sqMM1
            source_type: api_record
            title: 中国历代人物传记资料库：王禮（CBDB 35519）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35519&o=json
            external_identifier: CBDB:35519
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.137Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_5UZRUvAMaDTNdt1We7GATB
        subject_person_id: p_XZvyLVTKtfkq5m13Jb59Lw
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1314年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Hx5Gf6gj5Ti3iEduKsbhoK
          claim_id: c_5UZRUvAMaDTNdt1We7GATB
          source_id: s_bQsANNShYtsArA4H1sqMM1
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
        id: c_LMQX9ANwEQ6MNMDwyLo8f5
        subject_person_id: p_XZvyLVTKtfkq5m13Jb59Lw
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1386年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZEqNiNkZ6dxmy6zjuWezzi
          claim_id: c_LMQX9ANwEQ6MNMDwyLo8f5
          source_id: s_bQsANNShYtsArA4H1sqMM1
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
        id: c_G1he8J6VY364qm5VXQWB7z
        subject_person_id: p_XZvyLVTKtfkq5m13Jb59Lw
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王禮（1314年—1386年），元人物。籍贯廬陵，身份为隱居授徒，入仕鄉貢舉人，曾任幕府、縣主簿、縣學教諭。（中国历代人物传记资料库 CBDB 35519）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_w22krKV8LJ7JROq2Kjlx8k
          claim_id: c_G1he8J6VY364qm5VXQWB7z
          source_id: s_bQsANNShYtsArA4H1sqMM1
          stance: supports
          locator: CBDB:35519
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_TedE179yjePMgpR9Ly41qM
        subject_person_id: p_6VfyaJrbVtLEDBvH7EiLTz
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_XZvyLVTKtfkq5m13Jb59Lw
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_uVgCTMBahV-Omz-sy4VGbG
          claim_id: c_TedE179yjePMgpR9Ly41qM
          source_id: s_CyfOwWLT1oKAoRslFZ5X6N
          stance: supports
          locator: CBDB 亲属：父（KinPerson 35516）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_CyfOwWLT1oKAoRslFZ5X6N
            source_type: api_record
            title: 中国历代人物传记资料库：王禮（CBDB 35519）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35519&o=json
            external_identifier: CBDB:35519
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_6VfyaJrbVtLEDBvH7EiLTz
        status: active
        display_name: 王斯覺
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王禮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王禮 | accepted |
| birth.date | 1314年 | accepted |
| death.date | 1386年 | accepted |
| bio.summary | 王禮（1314年—1386年），元人物。籍贯廬陵，身份为隱居授徒，入仕鄉貢舉人，曾任幕府、縣主簿、縣學教諭。（中国历代人物传记资料库 CBDB 35519） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_6VfyaJrbVtLEDBvH7EiLTz | 王斯覺 | accepted |

## 外部来源

- [中国历代人物传记资料库：王禮（CBDB 35519）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35519&o=json)
