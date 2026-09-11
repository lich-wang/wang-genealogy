---
schema: wang-person/v1
id: p_fB4krwdYrXiiabiLDNJxxM
status: active
merged_into: null
display_name: 王文秀
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_u3RjZ5kNVvARCHeyzrLLWH
        subject_person_id: p_fB4krwdYrXiiabiLDNJxxM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文秀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_k2noRhF1cu7FF1SP4mn827
          claim_id: c_u3RjZ5kNVvARCHeyzrLLWH
          source_id: s_3LkMQ4qhakMeB5gY5ACdJi
          stance: supports
          locator: CBDB:578609
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（578609）
          source: &a1
            id: s_3LkMQ4qhakMeB5gY5ACdJi
            source_type: api_record
            title: 中国历代人物传记资料库：王文秀（CBDB 578609）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=578609&o=json
            external_identifier: CBDB:578609
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.979Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MovnFwks7mwZjncgKBQ6St
        subject_person_id: p_fB4krwdYrXiiabiLDNJxxM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文秀，清人物。籍贯長安，入仕世襲(替)，曾任騎都尉。（中国历代人物传记资料库 CBDB 578609）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_DYuDqL9SbWQDK7xbW14179
          claim_id: c_MovnFwks7mwZjncgKBQ6St
          source_id: s_3LkMQ4qhakMeB5gY5ACdJi
          stance: supports
          locator: CBDB:578609
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ErCqlgZaSbX5LUbZA5dff7
        subject_person_id: p_XBdYGhhY6KYRHheCG3YBMX
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_fB4krwdYrXiiabiLDNJxxM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_09h6Cp0YdngJtl5cCNr0MK
          claim_id: c_ErCqlgZaSbX5LUbZA5dff7
          source_id: s_3LkMQ4qhakMeB5gY5ACdJi
          stance: supports
          locator: 陝西通志，lgid=1018935-1018936：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_XBdYGhhY6KYRHheCG3YBMX
        status: active
        display_name: 王平
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王文秀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文秀 | accepted |
| bio.summary | 王文秀，清人物。籍贯長安，入仕世襲(替)，曾任騎都尉。（中国历代人物传记资料库 CBDB 578609） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_XBdYGhhY6KYRHheCG3YBMX | 王平 | accepted |

## 外部来源

- [中国历代人物传记资料库：王文秀（CBDB 578609）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=578609&o=json)
