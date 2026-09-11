---
schema: wang-person/v1
id: p_W4S4g2HEVtqCKp53qNXn9F
status: active
merged_into: null
display_name: 王丕顯
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1J6NNQCFMK625B5NqVuhwn
        subject_person_id: p_W4S4g2HEVtqCKp53qNXn9F
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王丕顯
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_gBg3S93xvMBtddVGGi65Eh
          claim_id: c_1J6NNQCFMK625B5NqVuhwn
          source_id: s_wNDpQWGXq5SJbyCBtG2tZY
          stance: supports
          locator: CBDB:341763
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（341763）
          source: &a1
            id: s_wNDpQWGXq5SJbyCBtG2tZY
            source_type: api_record
            title: 中国历代人物传记资料库：王丕顯（CBDB 341763）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=341763&o=json
            external_identifier: CBDB:341763
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.699Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_UmvKYK4ehUv4Qvt2WYWe3i
        subject_person_id: p_W4S4g2HEVtqCKp53qNXn9F
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王丕顯，清人物。明清進士進士，籍贯五臺，入仕進士，曾任知縣、縣知縣。（中国历代人物传记资料库 CBDB 341763）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_J8m2p4JhnPsLZwuwc9lmfB
          claim_id: c_UmvKYK4ehUv4Qvt2WYWe3i
          source_id: s_wNDpQWGXq5SJbyCBtG2tZY
          stance: supports
          locator: CBDB:341763
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

# 王丕顯

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王丕顯 | accepted |
| bio.summary | 王丕顯，清人物。明清進士進士，籍贯五臺，入仕進士，曾任知縣、縣知縣。（中国历代人物传记资料库 CBDB 341763） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王丕顯（CBDB 341763）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=341763&o=json)
