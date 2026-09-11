---
schema: wang-person/v1
id: p_dJdz9HPpQYHFBKKBn1SMNB
status: active
merged_into: null
display_name: 王麟標
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_pmtJpM6yByKHr3DkSYw25J
        subject_person_id: p_dJdz9HPpQYHFBKKBn1SMNB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王麟標
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_crsDUcfLK9mVJC6VjWnnQ4
          claim_id: c_pmtJpM6yByKHr3DkSYw25J
          source_id: s_1onLxyAquQPwn8oWiFFE4V
          stance: supports
          locator: CBDB:72224
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（72224）
          source: &a1
            id: s_1onLxyAquQPwn8oWiFFE4V
            source_type: api_record
            title: 中国历代人物传记资料库：王麟標（CBDB 72224）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72224&o=json
            external_identifier: CBDB:72224
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.058Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_2XrLAkFU2VGkqMXJ4higVi
        subject_person_id: p_dJdz9HPpQYHFBKKBn1SMNB
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1625年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wRPSXZNFK423ZuPPCQL6fC
          claim_id: c_2XrLAkFU2VGkqMXJ4higVi
          source_id: s_1onLxyAquQPwn8oWiFFE4V
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_fL6xqW717SoGMRWEMTx5aA
        subject_person_id: p_dJdz9HPpQYHFBKKBn1SMNB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王麟標（生于1625年），清人物。籍贯綏德直隸州直轄地方，入仕進士，曾任知縣。（中国历代人物传记资料库 CBDB 72224）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_1kuCPVgKn0962XIZ6rlCw7
          claim_id: c_fL6xqW717SoGMRWEMTx5aA
          source_id: s_1onLxyAquQPwn8oWiFFE4V
          stance: supports
          locator: CBDB:72224
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

# 王麟標

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王麟標 | accepted |
| birth.date | 1625年 | accepted |
| bio.summary | 王麟標（生于1625年），清人物。籍贯綏德直隸州直轄地方，入仕進士，曾任知縣。（中国历代人物传记资料库 CBDB 72224） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王麟標（CBDB 72224）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72224&o=json)
