---
schema: wang-person/v1
id: p_B9zZ1dWS88mCc3eFnzsa8t
status: active
merged_into: null
display_name: 王模
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DY6H1V8JXgtmquSPSie2DQ
        subject_person_id: p_B9zZ1dWS88mCc3eFnzsa8t
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王模
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_aHtPrPev858pDtP6bfApea
          claim_id: c_DY6H1V8JXgtmquSPSie2DQ
          source_id: s_mBHTCKSh3u9CP62B8VfDQd
          stance: supports
          locator: CBDB:294441
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（294441）
          source: &a1
            id: s_mBHTCKSh3u9CP62B8VfDQd
            source_type: api_record
            title: 中国历代人物传记资料库：王模（CBDB 294441）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294441&o=json
            external_identifier: CBDB:294441
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.459Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_m7KFh3HLLJADYKg3PfSU3L
        subject_person_id: p_B9zZ1dWS88mCc3eFnzsa8t
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王模，明人物。嘉靖十一年進士，籍贯象山，曾任訓術。（中国历代人物传记资料库 CBDB 294441）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs__-UpAlE5yiyLbf5m_iXDrX
          claim_id: c_m7KFh3HLLJADYKg3PfSU3L
          source_id: s_mBHTCKSh3u9CP62B8VfDQd
          stance: supports
          locator: CBDB:294441
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

# 王模

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王模 | accepted |
| bio.summary | 王模，明人物。嘉靖十一年進士，籍贯象山，曾任訓術。（中国历代人物传记资料库 CBDB 294441） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王模（CBDB 294441）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294441&o=json)
