---
schema: wang-person/v1
id: p_ti6Fg8MT1rHxww4P7Fhfft
status: active
merged_into: null
display_name: 王天敘
revision: 2
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

## 外部来源

- [中国历代人物传记资料库：王天敘（CBDB 329103）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329103&o=json)
