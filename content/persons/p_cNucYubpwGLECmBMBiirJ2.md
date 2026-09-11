---
schema: wang-person/v1
id: p_cNucYubpwGLECmBMBiirJ2
status: active
merged_into: null
display_name: 王文傑
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_rKeLJV2GEGd2RZP1xkc9xH
        subject_person_id: p_cNucYubpwGLECmBMBiirJ2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文傑
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_H3ZVEJ7kgpe49MC98Bd31k
          claim_id: c_rKeLJV2GEGd2RZP1xkc9xH
          source_id: s_WrCwn1gC1AK95QuepezXeA
          stance: supports
          locator: CBDB:638232
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638232）
          source: &a1
            id: s_WrCwn1gC1AK95QuepezXeA
            source_type: api_record
            title: 中国历代人物传记资料库：王文傑（CBDB 638232）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638232&o=json
            external_identifier: CBDB:638232
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.634Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_E7xvaGN7o6eqLkLrLwUs9u
        subject_person_id: p_cNucYubpwGLECmBMBiirJ2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王文傑，清人物。籍贯龍安府，入仕貢生: 拔貢，曾任復設教諭。（中国历代人物传记资料库 CBDB 638232）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_V1sdU-g0DXlXMUSWNL7kS2
          claim_id: c_E7xvaGN7o6eqLkLrLwUs9u
          source_id: s_WrCwn1gC1AK95QuepezXeA
          stance: supports
          locator: CBDB:638232
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

# 王文傑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文傑 | accepted |
| bio.summary | 王文傑，清人物。籍贯龍安府，入仕貢生: 拔貢，曾任復設教諭。（中国历代人物传记资料库 CBDB 638232） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王文傑（CBDB 638232）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638232&o=json)
