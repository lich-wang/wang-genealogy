---
schema: wang-person/v1
id: p_2pz1La3gnmxK1AmRKNDz1j
status: active
merged_into: null
display_name: 王穆
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_xbeLZjYqzCBdnSzufwWyfP
        subject_person_id: p_2pz1La3gnmxK1AmRKNDz1j
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王穆
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PpPP6JiQ7GqyDyfdZFaRDU
          claim_id: c_xbeLZjYqzCBdnSzufwWyfP
          source_id: s_Ui1qct61arJqeXHUf2jurC
          stance: supports
          locator: CBDB:271506
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（271506）
          source: &a1
            id: s_Ui1qct61arJqeXHUf2jurC
            source_type: api_record
            title: 中国历代人物传记资料库：王穆（CBDB 271506）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271506&o=json
            external_identifier: CBDB:271506
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.877Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QzUZnfNgWVz92e54kiMwTR
        subject_person_id: p_2pz1La3gnmxK1AmRKNDz1j
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王穆，明人物。景泰五年進士，籍贯金谿。（中国历代人物传记资料库 CBDB 271506）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Hs8-l2SErJv7_w90yGvQcT
          claim_id: c_QzUZnfNgWVz92e54kiMwTR
          source_id: s_Ui1qct61arJqeXHUf2jurC
          stance: supports
          locator: CBDB:271506
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

# 王穆

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王穆 | accepted |
| bio.summary | 王穆，明人物。景泰五年進士，籍贯金谿。（中国历代人物传记资料库 CBDB 271506） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王穆（CBDB 271506）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271506&o=json)
