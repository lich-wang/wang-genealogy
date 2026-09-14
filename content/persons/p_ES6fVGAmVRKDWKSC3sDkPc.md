---
schema: wang-person/v1
id: p_ES6fVGAmVRKDWKSC3sDkPc
status: active
merged_into: null
display_name: 王宗武
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XrDC1fDccc16ARaKwhfxSe
        subject_person_id: p_ES6fVGAmVRKDWKSC3sDkPc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗武
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LJyZ2sKjz7Noaq9q1rJdFh
          claim_id: c_XrDC1fDccc16ARaKwhfxSe
          source_id: s_82jPeEPHpKMB4YdcCMLSsR
          stance: supports
          locator: CBDB:307076
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（307076）
          source: &a1
            id: s_82jPeEPHpKMB4YdcCMLSsR
            source_type: api_record
            title: 中国历代人物传记资料库：王宗武（CBDB 307076）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=307076&o=json
            external_identifier: CBDB:307076
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.785Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MWag9Vp5RXP4A5e1pWtxT9
        subject_person_id: p_ES6fVGAmVRKDWKSC3sDkPc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗武，明人物。嘉靖二十三年進士，籍贯沂州。（中国历代人物传记资料库 CBDB 307076）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_FkBFMjPQTws6m2ipXq6m97
          claim_id: c_MWag9Vp5RXP4A5e1pWtxT9
          source_id: s_82jPeEPHpKMB4YdcCMLSsR
          stance: supports
          locator: CBDB:307076
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_IjF5kMOvdJYGWM21wvaIN4
        subject_person_id: p_jgqvj6yRuFScRYzYpcimRZ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ES6fVGAmVRKDWKSC3sDkPc
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uZjH6KsUCLNxcHN1B375m6
          claim_id: c_IjF5kMOvdJYGWM21wvaIN4
          source_id: s_aARlbiNBq2--W3bx2PoXgd
          stance: supports
          locator: CBDB：兄弟 王宗性（203595）之父／母 王士彦
          quotation: null
          interpretation_note: 由兄弟关系推断：王宗武 与 王宗性 为同胞（CBDB 记「弟」），王宗性 之父／母即 王宗武 之父／母。
          source:
            id: s_aARlbiNBq2--W3bx2PoXgd
            source_type: api_record
            title: 中国历代人物传记资料库：王宗武（CBDB 307076）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=307076&o=json
            external_identifier: CBDB:307076
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_jgqvj6yRuFScRYzYpcimRZ
        status: active
        display_name: 王士彦
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_FdNBjgpr57mZlBfAtG5W0Y
        subject_person_id: p_ABHWjEscFjoCVEgF2qr4dX
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ES6fVGAmVRKDWKSC3sDkPc
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_K14KqPk9HiqxTX-2XU6fam
          claim_id: c_FdNBjgpr57mZlBfAtG5W0Y
          source_id: s_aARlbiNBq2--W3bx2PoXgd
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 203595 王宗性）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_aARlbiNBq2--W3bx2PoXgd
            source_type: api_record
            title: 中国历代人物传记资料库：王宗武（CBDB 307076）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=307076&o=json
            external_identifier: CBDB:307076
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ABHWjEscFjoCVEgF2qr4dX
        status: active
        display_name: 王宗性
        merged_into_person_id: null
---

# 王宗武

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宗武 | accepted |
| bio.summary | 王宗武，明人物。嘉靖二十三年進士，籍贯沂州。（中国历代人物传记资料库 CBDB 307076） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_jgqvj6yRuFScRYzYpcimRZ | 王士彦 | accepted |
| other | p_ABHWjEscFjoCVEgF2qr4dX | 王宗性 | accepted |

## 外部来源

- [中国历代人物传记资料库：王宗武（CBDB 307076）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=307076&o=json)
