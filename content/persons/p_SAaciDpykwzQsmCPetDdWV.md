---
schema: wang-person/v1
id: p_SAaciDpykwzQsmCPetDdWV
status: active
merged_into: null
display_name: 王學禮
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_81QYMFoep1WXHsZvEwDU5D
        subject_person_id: p_SAaciDpykwzQsmCPetDdWV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王學禮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2P3kFUxfAz92fGURUBPydP
          claim_id: c_81QYMFoep1WXHsZvEwDU5D
          source_id: s_zW5np9D4GgfW2PohZQEqc3
          stance: supports
          locator: CBDB:512855
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（512855）
          source: &a1
            id: s_zW5np9D4GgfW2PohZQEqc3
            source_type: api_record
            title: 中国历代人物传记资料库：王學禮（CBDB 512855）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=512855&o=json
            external_identifier: CBDB:512855
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.290Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_i2fpr4Vr1NGQTzNTenF778
        subject_person_id: p_SAaciDpykwzQsmCPetDdWV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王學禮，明人物。籍贯榆林衛。（中国历代人物传记资料库 CBDB 512855）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_-xMHgRRbZKOiVCF6FFrLiJ
          claim_id: c_i2fpr4Vr1NGQTzNTenF778
          source_id: s_zW5np9D4GgfW2PohZQEqc3
          stance: supports
          locator: CBDB:512855
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_YtEeLx6rt5tTaUq_wsgzmI
        subject_person_id: p_BFZFaDiENQCR7pFh7SaGyS
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_SAaciDpykwzQsmCPetDdWV
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hAYAX8uqZ_LbC1yAOFpPZh
          claim_id: c_YtEeLx6rt5tTaUq_wsgzmI
          source_id: s_6T6hHHBQgVocrjof6bWTao
          stance: supports
          locator: 榆林府志，lgid=1046722：子
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
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王學禮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王學禮 | accepted |
| bio.summary | 王學禮，明人物。籍贯榆林衛。（中国历代人物传记资料库 CBDB 512855） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_BFZFaDiENQCR7pFh7SaGyS | 王保 | accepted |

## 外部来源

- [中国历代人物传记资料库：王保（CBDB 512852）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=512852&o=json)
- [中国历代人物传记资料库：王學禮（CBDB 512855）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=512855&o=json)
