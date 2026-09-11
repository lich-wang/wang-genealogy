---
schema: wang-person/v1
id: p_qZkN8xrVwF2tSmSA9Y6KbW
status: active
merged_into: null
display_name: 費氏
revision: 1
cbdb_id: 304533
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_A7O4IaSBBYBWQGvy9kkprt
        subject_person_id: p_qZkN8xrVwF2tSmSA9Y6KbW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 費氏，明人物。嘉靖二十年進士。（中国历代人物传记资料库 CBDB 304533）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-4lkFCsFXYUnFFgS2z0M-I
          claim_id: c_A7O4IaSBBYBWQGvy9kkprt
          source_id: s_RcFCMmTChAEGIRPn-zOsB0
          stance: supports
          locator: CBDB:304533
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_RcFCMmTChAEGIRPn-zOsB0
            source_type: api_record
            title: 中国历代人物传记资料库：費氏(王交妻)（CBDB 304533）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304533&o=json
            external_identifier: CBDB:304533
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Qu73NlFRVup8q2PsYgvHV1
        subject_person_id: p_qZkN8xrVwF2tSmSA9Y6KbW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 費氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_i-s_Rfn6S4vHARBeUgnFtm
          claim_id: c_Qu73NlFRVup8q2PsYgvHV1
          source_id: s_RcFCMmTChAEGIRPn-zOsB0
          stance: supports
          locator: CBDB:304533
          quotation: null
          interpretation_note: CBDB 明确记录的王交配偶
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
        id: c_-kKIIKxw2RUTjEJ8XKL-Bu
        subject_person_id: p_JML3zLgbrajmhN4fDU1Pka
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_qZkN8xrVwF2tSmSA9Y6KbW
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-7_MXwMEpLvPeT4tbzPVMJ
          claim_id: c_-kKIIKxw2RUTjEJ8XKL-Bu
          source_id: s_RcFCMmTChAEGIRPn-zOsB0
          stance: supports
          locator: 嘉靖二十年進士登科錄:一卷，第三甲第一百三十九名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_JML3zLgbrajmhN4fDU1Pka
        status: active
        display_name: 王交
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 費氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 費氏，明人物。嘉靖二十年進士。（中国历代人物传记资料库 CBDB 304533） | accepted |
| name.primary | 費氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_JML3zLgbrajmhN4fDU1Pka | 王交 | accepted |

## 外部来源

- [中国历代人物传记资料库：費氏(王交妻)（CBDB 304533）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304533&o=json)
