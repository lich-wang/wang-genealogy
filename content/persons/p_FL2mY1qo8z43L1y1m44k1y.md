---
schema: wang-person/v1
id: p_FL2mY1qo8z43L1y1m44k1y
status: active
merged_into: null
display_name: 王廷鶴
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_knTDCU41q5P3r1R1qNR7dE
        subject_person_id: p_FL2mY1qo8z43L1y1m44k1y
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷鶴
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_RdX3EbJtFubC97K1NnuanV
          claim_id: c_knTDCU41q5P3r1R1qNR7dE
          source_id: s_nfpDFtBshnzMC3q2VJpz1S
          stance: supports
          locator: CBDB:506868
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（506868）
          source: &a1
            id: s_nfpDFtBshnzMC3q2VJpz1S
            source_type: api_record
            title: 中国历代人物传记资料库：王廷鶴（CBDB 506868）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=506868&o=json
            external_identifier: CBDB:506868
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.013Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7Lc54KGPsZhppF5pYnt7iu
        subject_person_id: p_FL2mY1qo8z43L1y1m44k1y
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷鶴，明人物。曾任訓導。（中国历代人物传记资料库 CBDB 506868）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_17IpqRcwJMRgDkhcpU2byb
          claim_id: c_7Lc54KGPsZhppF5pYnt7iu
          source_id: s_nfpDFtBshnzMC3q2VJpz1S
          stance: supports
          locator: CBDB:506868
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

# 王廷鶴

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廷鶴 | accepted |
| bio.summary | 王廷鶴，明人物。曾任訓導。（中国历代人物传记资料库 CBDB 506868） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王廷鶴（CBDB 506868）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=506868&o=json)
