---
schema: wang-person/v1
id: p_k32g45q5JsQaD65qkta3Hz
status: active
merged_into: null
display_name: 王寂
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_yySoEgGVm7EBWTb5pXFiQA
        subject_person_id: p_k32g45q5JsQaD65qkta3Hz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寂
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3YTtBf3DkATSJ8Eb24vN85
          claim_id: c_yySoEgGVm7EBWTb5pXFiQA
          source_id: s_WhxHMqdZgj7w8JhfhfhPBj
          stance: supports
          locator: CBDB:35022
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（35022）
          source: &a1
            id: s_WhxHMqdZgj7w8JhfhfhPBj
            source_type: api_record
            title: 中国历代人物传记资料库：王寂（CBDB 35022）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35022&o=json
            external_identifier: CBDB:35022
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.101Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_dn1WVs71hKi2QPizcKhY6L
        subject_person_id: p_k32g45q5JsQaD65qkta3Hz
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寂，金人物。籍贯玉田，入仕進士，曾任轉運使。（中国历代人物传记资料库 CBDB 35022）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_yDx769NNiRKGLa2VmcRXo-
          claim_id: c_dn1WVs71hKi2QPizcKhY6L
          source_id: s_WhxHMqdZgj7w8JhfhfhPBj
          stance: supports
          locator: CBDB:35022
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_-GLzi4FfZ3x6Di1BKwlp45
        subject_person_id: p_k32g45q5JsQaD65qkta3Hz
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_xZpq5Wncb1eFGiKsRsheWy
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_eA01JbXjkgXRhR7vzb-LoI
          claim_id: c_-GLzi4FfZ3x6Di1BKwlp45
          source_id: s_QL4rQO6nUnnw1TOU_nEBwY
          stance: supports
          locator: CBDB 亲属：父（KinPerson 35022）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_QL4rQO6nUnnw1TOU_nEBwY
            source_type: api_record
            title: 中国历代人物传记资料库：王直哉（CBDB 35027）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35027&o=json
            external_identifier: CBDB:35027
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_xZpq5Wncb1eFGiKsRsheWy
        status: active
        display_name: 王直哉
        merged_into_person_id: null
    - claim:
        id: c_hy2BvckSdFqOxXlRb1ZUzX
        subject_person_id: p_k32g45q5JsQaD65qkta3Hz
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_yLG3jhB9BADCDQoFF7KaA1
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_wv7xQYwxn03jXmOZhU5Q1i
          claim_id: c_hy2BvckSdFqOxXlRb1ZUzX
          source_id: s_5LsJfdPr6rua-8WJcrv0eo
          stance: supports
          locator: CBDB 亲属：父（KinPerson 35022）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_5LsJfdPr6rua-8WJcrv0eo
            source_type: api_record
            title: 中国历代人物传记资料库：王欽哉（CBDB 35026）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35026&o=json
            external_identifier: CBDB:35026
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_yLG3jhB9BADCDQoFF7KaA1
        status: active
        display_name: 王欽哉
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_TzV0WGpzJnUjg6DokWxM0a
        subject_person_id: p_k32g45q5JsQaD65qkta3Hz
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_u3EmviMHvgDCHKHmV9hskZ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MUYfbL221YRf16vtmSTXfw
          claim_id: c_TzV0WGpzJnUjg6DokWxM0a
          source_id: s_R6COqWXb_xewMcwBoKSiP2
          stance: supports
          locator: CBDB 双向互证（妻子 張季玉）
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_R6COqWXb_xewMcwBoKSiP2
            source_type: api_record
            title: 中国历代人物传记资料库：張季玉（CBDB 35023）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35023&o=json
            external_identifier: CBDB:35023
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_u3EmviMHvgDCHKHmV9hskZ
        status: active
        display_name: 張季玉
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王寂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王寂 | accepted |
| bio.summary | 王寂，金人物。籍贯玉田，入仕進士，曾任轉運使。（中国历代人物传记资料库 CBDB 35022） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_xZpq5Wncb1eFGiKsRsheWy | 王直哉 | accepted |
| children | p_yLG3jhB9BADCDQoFF7KaA1 | 王欽哉 | accepted |
| spouses | p_u3EmviMHvgDCHKHmV9hskZ | 張季玉 | accepted |

## 外部来源

- [中国历代人物传记资料库：王寂（CBDB 35022）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35022&o=json)
- [中国历代人物传记资料库：王欽哉（CBDB 35026）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35026&o=json)
- [中国历代人物传记资料库：王直哉（CBDB 35027）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35027&o=json)
- [中国历代人物传记资料库：張季玉（CBDB 35023）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35023&o=json)
