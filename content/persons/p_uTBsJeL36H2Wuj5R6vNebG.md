---
schema: wang-person/v1
id: p_uTBsJeL36H2Wuj5R6vNebG
status: active
merged_into: null
display_name: 王得眾
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1AgKuhbmEtdKGHFh85Nmrh
        subject_person_id: p_uTBsJeL36H2Wuj5R6vNebG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王得眾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_yVDtMXxe2vX3nXQEPYX31L
          claim_id: c_1AgKuhbmEtdKGHFh85Nmrh
          source_id: s_w3mgwhVmKCbkSK97x3xge4
          stance: supports
          locator: CBDB:637649
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637649）
          source: &a1
            id: s_w3mgwhVmKCbkSK97x3xge4
            source_type: api_record
            title: 中国历代人物传记资料库：王得眾（CBDB 637649）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637649&o=json
            external_identifier: CBDB:637649
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.384Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KWkArrU6V2PfdHf6uvko9f
        subject_person_id: p_uTBsJeL36H2Wuj5R6vNebG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王得眾，清人物。籍贯甘肅省，入仕行伍，曾任千總。（中国历代人物传记资料库 CBDB 637649）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_RDraYTJQTV38L-Xvow4Lry
          claim_id: c_KWkArrU6V2PfdHf6uvko9f
          source_id: s_w3mgwhVmKCbkSK97x3xge4
          stance: supports
          locator: CBDB:637649
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

# 王得眾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王得眾 | accepted |
| bio.summary | 王得眾，清人物。籍贯甘肅省，入仕行伍，曾任千總。（中国历代人物传记资料库 CBDB 637649） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王得眾（CBDB 637649）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637649&o=json)
