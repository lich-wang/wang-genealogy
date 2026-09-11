---
schema: wang-person/v1
id: p_ew7R1N5L2QnrU7947sAJ3g
status: active
merged_into: null
display_name: 王炳
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KAjNNmJ6vTXTZwaR5sjzbd
        subject_person_id: p_ew7R1N5L2QnrU7947sAJ3g
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王炳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_sNaRMDErHLe7jJ3nZob79m
          claim_id: c_KAjNNmJ6vTXTZwaR5sjzbd
          source_id: s_afV8R3kjo2Jjo4AwsFfBr5
          stance: supports
          locator: CBDB:296935
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（296935）
          source: &a1
            id: s_afV8R3kjo2Jjo4AwsFfBr5
            source_type: api_record
            title: 中国历代人物传记资料库：王炳（CBDB 296935）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=296935&o=json
            external_identifier: CBDB:296935
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.530Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EPqA9ziaxK2R3ZBHsP2P8s
        subject_person_id: p_ew7R1N5L2QnrU7947sAJ3g
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王炳，明人物。嘉靖十四年進士，籍贯金壇。（中国历代人物传记资料库 CBDB 296935）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_lLVp1EFlQX9rSgJ-A3PODu
          claim_id: c_EPqA9ziaxK2R3ZBHsP2P8s
          source_id: s_afV8R3kjo2Jjo4AwsFfBr5
          stance: supports
          locator: CBDB:296935
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

# 王炳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王炳 | accepted |
| bio.summary | 王炳，明人物。嘉靖十四年進士，籍贯金壇。（中国历代人物传记资料库 CBDB 296935） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王炳（CBDB 296935）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=296935&o=json)
