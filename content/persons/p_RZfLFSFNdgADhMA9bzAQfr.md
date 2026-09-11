---
schema: wang-person/v1
id: p_RZfLFSFNdgADhMA9bzAQfr
status: active
merged_into: null
display_name: 王肇履
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_C2W2nMTN8sDan3pyPTTFuP
        subject_person_id: p_RZfLFSFNdgADhMA9bzAQfr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王肇履
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3Tqj3wUAnZwtbGpmPuEdfJ
          claim_id: c_C2W2nMTN8sDan3pyPTTFuP
          source_id: s_YYoG9k4SYgJCR19q3xNF9H
          stance: supports
          locator: CBDB:639971
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639971）
          source: &a1
            id: s_YYoG9k4SYgJCR19q3xNF9H
            source_type: api_record
            title: 中国历代人物传记资料库：王肇履（CBDB 639971）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639971&o=json
            external_identifier: CBDB:639971
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.106Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_WbqPtZQrCfbsvEcPnByytB
        subject_person_id: p_RZfLFSFNdgADhMA9bzAQfr
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王肇履，清人物。籍贯四川省，入仕監生，曾任復設訓導。（中国历代人物传记资料库 CBDB 639971）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_jq1xHl_ZSG6kz9iTpyTp73
          claim_id: c_WbqPtZQrCfbsvEcPnByytB
          source_id: s_YYoG9k4SYgJCR19q3xNF9H
          stance: supports
          locator: CBDB:639971
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

# 王肇履

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王肇履 | accepted |
| bio.summary | 王肇履，清人物。籍贯四川省，入仕監生，曾任復設訓導。（中国历代人物传记资料库 CBDB 639971） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王肇履（CBDB 639971）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639971&o=json)
