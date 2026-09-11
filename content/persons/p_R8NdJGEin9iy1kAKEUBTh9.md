---
schema: wang-person/v1
id: p_R8NdJGEin9iy1kAKEUBTh9
status: active
merged_into: null
display_name: 王元賔
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FkPLTWHGDy3ERP8fFtGG58
        subject_person_id: p_R8NdJGEin9iy1kAKEUBTh9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元賔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_dSdCx67sCCN8Cpdy6o1E5D
          claim_id: c_FkPLTWHGDy3ERP8fFtGG58
          source_id: s_bMKTAS4intHL7PC9zFP2JH
          stance: supports
          locator: CBDB:453563
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（453563）
          source: &a1
            id: s_bMKTAS4intHL7PC9zFP2JH
            source_type: api_record
            title: 中国历代人物传记资料库：王元賔（CBDB 453563）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=453563&o=json
            external_identifier: CBDB:453563
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.407Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MTxu7f2LRWh4ePaCB7uJs8
        subject_person_id: p_R8NdJGEin9iy1kAKEUBTh9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元賔，清人物。入仕貢生 = 貢監生 (明清賓貢,功貢)，曾任訓導。（中国历代人物传记资料库 CBDB 453563）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_KhinA7ovW-OV-BYg8x5SKo
          claim_id: c_MTxu7f2LRWh4ePaCB7uJs8
          source_id: s_bMKTAS4intHL7PC9zFP2JH
          stance: supports
          locator: CBDB:453563
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

# 王元賔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王元賔 | accepted |
| bio.summary | 王元賔，清人物。入仕貢生 = 貢監生 (明清賓貢,功貢)，曾任訓導。（中国历代人物传记资料库 CBDB 453563） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王元賔（CBDB 453563）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=453563&o=json)
