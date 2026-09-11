---
schema: wang-person/v1
id: p_d2Y4XR8FFfBFEELcP2ApbV
status: active
merged_into: null
display_name: 王璵
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_37fLu8y1KaLXaN4S5A6AF8
        subject_person_id: p_d2Y4XR8FFfBFEELcP2ApbV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璵
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_twhMh86dKpWj9G2e5fDDSA
          claim_id: c_37fLu8y1KaLXaN4S5A6AF8
          source_id: s_CSFEbx5QRzDfEJN5yEoy2x
          stance: supports
          locator: CBDB:481491
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（481491）
          source: &a1
            id: s_CSFEbx5QRzDfEJN5yEoy2x
            source_type: api_record
            title: 中国历代人物传记资料库：王璵（CBDB 481491）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=481491&o=json
            external_identifier: CBDB:481491
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.689Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RxF8UGWuUkAJwJKX3Y3CAx
        subject_person_id: p_d2Y4XR8FFfBFEELcP2ApbV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璵，明人物。曾任訓導。（中国历代人物传记资料库 CBDB 481491）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_MXaMnMcj0PKXhGnTwF1quZ
          claim_id: c_RxF8UGWuUkAJwJKX3Y3CAx
          source_id: s_CSFEbx5QRzDfEJN5yEoy2x
          stance: supports
          locator: CBDB:481491
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

# 王璵

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王璵 | accepted |
| bio.summary | 王璵，明人物。曾任訓導。（中国历代人物传记资料库 CBDB 481491） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王璵（CBDB 481491）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=481491&o=json)
