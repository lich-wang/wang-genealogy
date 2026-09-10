---
schema: wang-person/v1
id: p_tBUiiaLdovkgJJmciCi2LY
status: active
merged_into: null
display_name: 王震
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_gmrSG14EjMkpoNTBCstJqv
        subject_person_id: p_tBUiiaLdovkgJJmciCi2LY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王震
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_SCeSFQHTA4sR436yCorNH7
          claim_id: c_gmrSG14EjMkpoNTBCstJqv
          source_id: s_2sQXBnwC7FTaxVt97akyPp
          stance: supports
          locator: CBDB:198755
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（198755）
          source: &a1
            id: s_2sQXBnwC7FTaxVt97akyPp
            source_type: api_record
            title: 中国历代人物传记资料库：王震（CBDB 198755）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198755&o=json
            external_identifier: CBDB:198755
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.507Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_aVScZPJvtpcaXFrz3AGHf9
        subject_person_id: p_tBUiiaLdovkgJJmciCi2LY
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1430年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HhtYmk3tJVAP539N8CKDeH
          claim_id: c_aVScZPJvtpcaXFrz3AGHf9
          source_id: s_2sQXBnwC7FTaxVt97akyPp
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
        id: c_BPM3BcSeLkPnhQn9R3PJGq
        subject_person_id: p_tBUiiaLdovkgJJmciCi2LY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wMbSKaWrBAGJwDPUeF6xPc
          claim_id: c_BPM3BcSeLkPnhQn9R3PJGq
          source_id: s_2sQXBnwC7FTaxVt97akyPp
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
        id: c_HNyOIC3JkFGCmYxxyeZ4Ms
        subject_person_id: p_12q5jBq6XL9aBiWK6P4q54
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_tBUiiaLdovkgJJmciCi2LY
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hxTMkSls_a0c9QuW_8ghKR
          claim_id: c_HNyOIC3JkFGCmYxxyeZ4Ms
          source_id: s_E93zvFaFewyEzb6NDGtBap
          stance: supports
          locator: 天順四年進士登科錄:一卷，第二甲第三十三名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_E93zvFaFewyEzb6NDGtBap
            source_type: api_record
            title: 中国历代人物传记资料库：王理（CBDB 312785）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312785&o=json
            external_identifier: CBDB:312785
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.883Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_12q5jBq6XL9aBiWK6P4q54
        status: active
        display_name: 王理
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王震

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王震 | accepted |
| birth.date | 1430年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_12q5jBq6XL9aBiWK6P4q54 | 王理 | accepted |

## 外部来源

- [中国历代人物传记资料库：王理（CBDB 312785）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312785&o=json)
- [中国历代人物传记资料库：王震（CBDB 198755）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198755&o=json)
