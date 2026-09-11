---
schema: wang-person/v1
id: p_R7vBQanupHLJfEUqidyjHE
status: active
merged_into: null
display_name: 王福
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_UF1J2xNrA85k3FT79PtpKe
        subject_person_id: p_R7vBQanupHLJfEUqidyjHE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王福
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GDC9P212fZkLLhD83keGGP
          claim_id: c_UF1J2xNrA85k3FT79PtpKe
          source_id: s_uggLr3nx9ZZEF3B8iAnE3n
          stance: supports
          locator: CBDB:461298
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（461298）
          source: &a1
            id: s_uggLr3nx9ZZEF3B8iAnE3n
            source_type: api_record
            title: 中国历代人物传记资料库：王福（CBDB 461298）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=461298&o=json
            external_identifier: CBDB:461298
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.809Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Nb3UBUv7GEJEmcZHSR8X6Y
        subject_person_id: p_R7vBQanupHLJfEUqidyjHE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王福，明人物。曾任主簿。（中国历代人物传记资料库 CBDB 461298）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_A1GQNYsnSknXp9Nq-jb2Mj
          claim_id: c_Nb3UBUv7GEJEmcZHSR8X6Y
          source_id: s_uggLr3nx9ZZEF3B8iAnE3n
          stance: supports
          locator: CBDB:461298
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

# 王福

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王福 | accepted |
| bio.summary | 王福，明人物。曾任主簿。（中国历代人物传记资料库 CBDB 461298） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王福（CBDB 461298）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=461298&o=json)
