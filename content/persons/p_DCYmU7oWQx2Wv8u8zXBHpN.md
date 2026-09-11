---
schema: wang-person/v1
id: p_DCYmU7oWQx2Wv8u8zXBHpN
status: active
merged_into: null
display_name: 王世貞
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KPyGHdQgqZQVLQtnr32ZTL
        subject_person_id: p_DCYmU7oWQx2Wv8u8zXBHpN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世貞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_pHPvsupTu1DkAxeqZdJHm3
          claim_id: c_KPyGHdQgqZQVLQtnr32ZTL
          source_id: s_Mixd2YJGLooLBHpTLT2p6B
          stance: supports
          locator: CBDB:635719
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（635719）
          source: &a1
            id: s_Mixd2YJGLooLBHpTLT2p6B
            source_type: api_record
            title: 中国历代人物传记资料库：王世貞（CBDB 635719）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635719&o=json
            external_identifier: CBDB:635719
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.008Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Co3cNMx11xcMKubn2Fuf1u
        subject_person_id: p_DCYmU7oWQx2Wv8u8zXBHpN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世貞，清人物。籍贯祥符，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 635719）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_B_IYXcSQDn_nyJcCUkCsJH
          claim_id: c_Co3cNMx11xcMKubn2Fuf1u
          source_id: s_Mixd2YJGLooLBHpTLT2p6B
          stance: supports
          locator: CBDB:635719
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

# 王世貞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王世貞 | accepted |
| bio.summary | 王世貞，清人物。籍贯祥符，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 635719） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王世貞（CBDB 635719）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635719&o=json)
