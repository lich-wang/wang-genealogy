---
schema: wang-person/v1
id: p_PpkBEPi7d8NtDFrxCXYCdk
status: active
merged_into: null
display_name: 王仁
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_cxdtPPENV4MJ5KxQC1vobB
        subject_person_id: p_PpkBEPi7d8NtDFrxCXYCdk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LmraF78m9tNduLimY3JBTM
          claim_id: c_cxdtPPENV4MJ5KxQC1vobB
          source_id: s_pX1q4tKUYX3q9jkVzfsFVb
          stance: supports
          locator: CBDB:143743
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（143743）
          source: &a1
            id: s_pX1q4tKUYX3q9jkVzfsFVb
            source_type: api_record
            title: 中国历代人物传记资料库：王仁（CBDB 143743）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=143743&o=json
            external_identifier: CBDB:143743
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.629Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_6CZWUYo1s4jQ4wkTYoVpoC
        subject_person_id: p_PpkBEPi7d8NtDFrxCXYCdk
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 649年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tvtzuLefnY1GL3LoHaR2mZ
          claim_id: c_6CZWUYo1s4jQ4wkTYoVpoC
          source_id: s_pX1q4tKUYX3q9jkVzfsFVb
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_4tPYXa5xWReg4VHjC2D6g7
        subject_person_id: p_PpkBEPi7d8NtDFrxCXYCdk
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 725年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RWJ7wkWkD49kd3Ler9xC6V
          claim_id: c_4tPYXa5xWReg4VHjC2D6g7
          source_id: s_pX1q4tKUYX3q9jkVzfsFVb
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6KqXgMAYXpCBC2cyz9kcF6
        subject_person_id: p_PpkBEPi7d8NtDFrxCXYCdk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_v6HgJt1XSwPw4r8pFyNApJ
          claim_id: c_6KqXgMAYXpCBC2cyz9kcF6
          source_id: s_pX1q4tKUYX3q9jkVzfsFVb
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Oq3rcK8AsncX5QXqyDU4AR
        subject_person_id: p_m23MVRaSUzaE8V6qkSLkaz
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_PpkBEPi7d8NtDFrxCXYCdk
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_w5ltmejliBXUtyfy9TgD0E
          claim_id: c_Oq3rcK8AsncX5QXqyDU4AR
          source_id: s_EoNM5Lbsx8gsA7vodZGiXR
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Kaiyuan160：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_EoNM5Lbsx8gsA7vodZGiXR
            source_type: api_record
            title: 中国历代人物传记资料库：王德（CBDB 164368）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=164368&o=json
            external_identifier: CBDB:164368
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.967Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_m23MVRaSUzaE8V6qkSLkaz
        status: active
        display_name: 王德
        merged_into_person_id: null
  children:
    - claim:
        id: c_GG4QgINxUKyDYbOmyWwArT
        subject_person_id: p_PpkBEPi7d8NtDFrxCXYCdk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8xBwqBUPDvrWQRrfE9jdvK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nL2d2wwsTcoptAygEjm2eT
          claim_id: c_GG4QgINxUKyDYbOmyWwArT
          source_id: s_TmY57QZnxUx7s4vMYKK9nW
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Kaiyuan160：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_TmY57QZnxUx7s4vMYKK9nW
            source_type: api_record
            title: 中国历代人物传记资料库：王紹先（CBDB 164372）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=164372&o=json
            external_identifier: CBDB:164372
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.967Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_8xBwqBUPDvrWQRrfE9jdvK
        status: active
        display_name: 王紹先
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王仁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王仁 | accepted |
| birth.date | 649年 | accepted |
| death.date | 725年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_m23MVRaSUzaE8V6qkSLkaz | 王德 | accepted |
| children | p_8xBwqBUPDvrWQRrfE9jdvK | 王紹先 | accepted |

## 外部来源

- [中国历代人物传记资料库：王德（CBDB 164368）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=164368&o=json)
- [中国历代人物传记资料库：王仁（CBDB 143743）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=143743&o=json)
- [中国历代人物传记资料库：王紹先（CBDB 164372）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=164372&o=json)
