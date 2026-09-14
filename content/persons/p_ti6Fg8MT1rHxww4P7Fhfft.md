---
schema: wang-person/v1
id: p_ti6Fg8MT1rHxww4P7Fhfft
status: active
merged_into: null
display_name: 王天敘
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KbkQwckZ8irmEHRBByKW4e
        subject_person_id: p_ti6Fg8MT1rHxww4P7Fhfft
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王天敘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3ezYwEW2UvAxL7ff83UUxw
          claim_id: c_KbkQwckZ8irmEHRBByKW4e
          source_id: s_2KZkRk6rJcccWy1v6z7dBg
          stance: supports
          locator: CBDB:329103
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（329103）
          source: &a1
            id: s_2KZkRk6rJcccWy1v6z7dBg
            source_type: api_record
            title: 中国历代人物传记资料库：王天敘（CBDB 329103）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329103&o=json
            external_identifier: CBDB:329103
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.317Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_i2ENJrKtYnt7dwDGB6G3Um
        subject_person_id: p_ti6Fg8MT1rHxww4P7Fhfft
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王天敘，明人物。嘉靖四十一年進士，籍贯滕縣。（中国历代人物传记资料库 CBDB 329103）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_muN42GcdnCknAKAA47AqWR
          claim_id: c_i2ENJrKtYnt7dwDGB6G3Um
          source_id: s_2KZkRk6rJcccWy1v6z7dBg
          stance: supports
          locator: CBDB:329103
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_NBa7jbAG96nTYAG017O_-x
        subject_person_id: p_ti6Fg8MT1rHxww4P7Fhfft
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_oCU6m3KhN1qYCRgVAU6mzE
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Qv1h8HKtj7AjgmCEWZ3A-3
          claim_id: c_NBa7jbAG96nTYAG017O_-x
          source_id: s_2KZkRk6rJcccWy1v6z7dBg
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第三甲第一百八十四名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_oCU6m3KhN1qYCRgVAU6mzE
        status: active
        display_name: 王嘉賓
        merged_into_person_id: null
    - claim:
        id: c_0gJXPYSAXRx4ZoQXoRKXCF
        subject_person_id: p_ti6Fg8MT1rHxww4P7Fhfft
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_YSsBJmFuNZkJBwTRdMV85G
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UprJHDaWcK9fhn4gab9ofg
          claim_id: c_0gJXPYSAXRx4ZoQXoRKXCF
          source_id: s_GHscoiRwIOfgT3jB0SLy4A
          stance: supports
          locator: CBDB：兄弟 王嘉賓（126781）之父／母 王天敘
          quotation: null
          interpretation_note: 由兄弟关系推断：王元賓 与 王嘉賓 为同胞（CBDB 记「兄」），王嘉賓 之父／母即 王元賓 之父／母。
          source:
            id: s_GHscoiRwIOfgT3jB0SLy4A
            source_type: api_record
            title: 中国历代人物传记资料库：王元賓（CBDB 329106）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329106&o=json
            external_identifier: CBDB:329106
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_YSsBJmFuNZkJBwTRdMV85G
        status: active
        display_name: 王元賓
        merged_into_person_id: null
    - claim:
        id: c_A36nM7Dx0fil9EPOES9mBD
        subject_person_id: p_ti6Fg8MT1rHxww4P7Fhfft
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_miRWGgdwUfGS5JhZC9Zpup
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2kY-ze-n1CnRBWsZeBbK6Y
          claim_id: c_A36nM7Dx0fil9EPOES9mBD
          source_id: s_HetSdFzoln-en3TZCzUDyy
          stance: supports
          locator: CBDB：兄弟 王嘉賓（126781）之父／母 王天敘
          quotation: null
          interpretation_note: 由兄弟关系推断：王种賓 与 王嘉賓 为同胞（CBDB 记「兄」），王嘉賓 之父／母即 王种賓 之父／母。
          source:
            id: s_HetSdFzoln-en3TZCzUDyy
            source_type: api_record
            title: 中国历代人物传记资料库：王种賓（CBDB 329107）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329107&o=json
            external_identifier: CBDB:329107
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_miRWGgdwUfGS5JhZC9Zpup
        status: active
        display_name: 王种賓
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王天敘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王天敘 | accepted |
| bio.summary | 王天敘，明人物。嘉靖四十一年進士，籍贯滕縣。（中国历代人物传记资料库 CBDB 329103） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_oCU6m3KhN1qYCRgVAU6mzE | 王嘉賓 | accepted |
| children | p_YSsBJmFuNZkJBwTRdMV85G | 王元賓 | accepted |
| children | p_miRWGgdwUfGS5JhZC9Zpup | 王种賓 | accepted |

## 外部来源

- [中国历代人物传记资料库：王天敘（CBDB 329103）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329103&o=json)
- [中国历代人物传记资料库：王元賓（CBDB 329106）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329106&o=json)
- [中国历代人物传记资料库：王种賓（CBDB 329107）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329107&o=json)
