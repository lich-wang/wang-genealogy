---
schema: wang-person/v1
id: p_56uyEnAkJaHCKdt6ziQAbm
status: active
merged_into: null
display_name: 王里
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_tyDxLSnt3aDtAQcjvFcPzN
        subject_person_id: p_56uyEnAkJaHCKdt6ziQAbm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王里
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_D937rFa4xRZ7fkfP9RMCsf
          claim_id: c_tyDxLSnt3aDtAQcjvFcPzN
          source_id: s_CZd8TEaokZWVhzuyKovVdC
          stance: supports
          locator: CBDB:12912
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（12912）
          source: &a1
            id: s_CZd8TEaokZWVhzuyKovVdC
            source_type: api_record
            title: 中国历代人物传记资料库：王里（CBDB 12912）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=12912&o=json
            external_identifier: CBDB:12912
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.614Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_mHD4CuAft1TBQrcMKPmVyb
        subject_person_id: p_56uyEnAkJaHCKdt6ziQAbm
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1235年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5UE2AcDtfyAneVpYPFAgQj
          claim_id: c_mHD4CuAft1TBQrcMKPmVyb
          source_id: s_CZd8TEaokZWVhzuyKovVdC
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HPq7i1wwEuJfotQyhDFqmZ
        subject_person_id: p_56uyEnAkJaHCKdt6ziQAbm
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xQ2mUPu13LVdbLN7QWksxz
          claim_id: c_HPq7i1wwEuJfotQyhDFqmZ
          source_id: s_CZd8TEaokZWVhzuyKovVdC
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
        id: c_Kzf77WNXFXbBgVdUH1kxrZ
        subject_person_id: p_A1138VJxBzA36XW5H1g132
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_56uyEnAkJaHCKdt6ziQAbm
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hwAYjDsWjzoXyoj7LMMLA3
          claim_id: c_Kzf77WNXFXbBgVdUH1kxrZ
          source_id: s_CZd8TEaokZWVhzuyKovVdC
          stance: supports
          locator: 寶祐登科錄：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_A1138VJxBzA36XW5H1g132
        status: active
        display_name: 王與定
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_O1ZomtSMjg9mx-dgbFQcL5
        subject_person_id: p_kKgEpvLxasvW2i8pMhrp8K
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_56uyEnAkJaHCKdt6ziQAbm
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Za91evkJiTiTPftmZEqc6c
          claim_id: c_O1ZomtSMjg9mx-dgbFQcL5
          source_id: s_CZd8TEaokZWVhzuyKovVdC
          stance: supports
          locator: 寶祐登科錄：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_kKgEpvLxasvW2i8pMhrp8K
        status: active
        display_name: 王贄
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王里

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王里 | accepted |
| birth.date | 1235年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_A1138VJxBzA36XW5H1g132 | 王與定 | accepted |
| ancestors | p_kKgEpvLxasvW2i8pMhrp8K | 王贄 | accepted |

## 外部来源

- [中国历代人物传记资料库：王里（CBDB 12912）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=12912&o=json)
