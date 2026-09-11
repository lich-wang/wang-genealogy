---
schema: wang-person/v1
id: p_s7ZeZxPg3PoJQGSNQRRJQv
status: active
merged_into: null
display_name: 王國鼎
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MRGkPk31oYF4q3bhRRS7AZ
        subject_person_id: p_s7ZeZxPg3PoJQGSNQRRJQv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國鼎
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_w4N3QfAH3QLmiGPWszKSku
          claim_id: c_MRGkPk31oYF4q3bhRRS7AZ
          source_id: s_KER9U7AJQBqDJ1DL1XnCkb
          stance: supports
          locator: CBDB:512851
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（512851）
          source: &a1
            id: s_KER9U7AJQBqDJ1DL1XnCkb
            source_type: api_record
            title: 中国历代人物传记资料库：王國鼎（CBDB 512851）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=512851&o=json
            external_identifier: CBDB:512851
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.288Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_oR51n7dTQkGJDFjQXe6MWf
        subject_person_id: p_s7ZeZxPg3PoJQGSNQRRJQv
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國鼎，明人物。籍贯榆林衛，曾任僉事、守備、按察使司僉事。（中国历代人物传记资料库 CBDB 512851）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_rt8Ip4FKcJK1KwcMHTgi_w
          claim_id: c_oR51n7dTQkGJDFjQXe6MWf
          source_id: s_KER9U7AJQBqDJ1DL1XnCkb
          stance: supports
          locator: CBDB:512851
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
  ancestors:
    - claim:
        id: c_aQbIuhTeA9_u2BZ4xTbjcd
        subject_person_id: p_BFZFaDiENQCR7pFh7SaGyS
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_s7ZeZxPg3PoJQGSNQRRJQv
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MCVupap1OKu4EAKT0Fp_bT
          claim_id: c_aQbIuhTeA9_u2BZ4xTbjcd
          source_id: s_6T6hHHBQgVocrjof6bWTao
          stance: supports
          locator: 榆林府志，lgid=1046722：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_6T6hHHBQgVocrjof6bWTao
            source_type: api_record
            title: 中国历代人物传记资料库：王保（CBDB 512852）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=512852&o=json
            external_identifier: CBDB:512852
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.288Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_BFZFaDiENQCR7pFh7SaGyS
        status: active
        display_name: 王保
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王國鼎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王國鼎 | accepted |
| bio.summary | 王國鼎，明人物。籍贯榆林衛，曾任僉事、守備、按察使司僉事。（中国历代人物传记资料库 CBDB 512851） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_BFZFaDiENQCR7pFh7SaGyS | 王保 | accepted |

## 外部来源

- [中国历代人物传记资料库：王保（CBDB 512852）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=512852&o=json)
- [中国历代人物传记资料库：王國鼎（CBDB 512851）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=512851&o=json)
