---
schema: wang-person/v1
id: p_eYTYqcoj54BTfQQyLN9VGt
status: active
merged_into: null
display_name: 王稟
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_kzqRhjBHneVxRrUL3xsaK5
        subject_person_id: p_eYTYqcoj54BTfQQyLN9VGt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王稟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_fL2dK2524SihNP182ZqtHV
          claim_id: c_kzqRhjBHneVxRrUL3xsaK5
          source_id: s_y6cJN6d8qGdLeC2YMZr5RC
          stance: supports
          locator: CBDB:38148
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（38148）
          source: &a1
            id: s_y6cJN6d8qGdLeC2YMZr5RC
            source_type: api_record
            title: 中国历代人物传记资料库：王稟（CBDB 38148）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38148&o=json
            external_identifier: CBDB:38148
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.375Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_jpGqYrAN3scY4qwsmaV4X1
        subject_person_id: p_eYTYqcoj54BTfQQyLN9VGt
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1126年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UksFTvrB4ahzV8gKmWJ1Jj
          claim_id: c_jpGqYrAN3scY4qwsmaV4X1
          source_id: s_y6cJN6d8qGdLeC2YMZr5RC
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
        id: c_U6XBGcoBc95pugDqPF2qzq
        subject_person_id: p_eYTYqcoj54BTfQQyLN9VGt
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
        - id: cs_TAJPGS8jD3CxDtkX42mN7N
          claim_id: c_U6XBGcoBc95pugDqPF2qzq
          source_id: s_y6cJN6d8qGdLeC2YMZr5RC
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_js73RwQKO16eDRfMbS0CIX
        subject_person_id: p_eYTYqcoj54BTfQQyLN9VGt
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7SVydL41UGsuFHeEEHBj78
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_d9x641BwsibWoKhL4ZKOOX
          claim_id: c_js73RwQKO16eDRfMbS0CIX
          source_id: s_335th5Kc8BNajJTR1uZmmW
          stance: supports
          locator: 吳中冢墓遺文，18-758：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_335th5Kc8BNajJTR1uZmmW
            source_type: api_record
            title: 中国历代人物传记资料库：王薿（CBDB 570602）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=570602&o=json
            external_identifier: CBDB:570602
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.642Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_7SVydL41UGsuFHeEEHBj78
        status: active
        display_name: 王薿
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_Ez6WKrbF1dofFOBTlvzDCf
        subject_person_id: p_4DMwFrJ3LdwEVHWXHa7AR4
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_eYTYqcoj54BTfQQyLN9VGt
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BfdhjA1cQ9qC6drvmCmvpW
          claim_id: c_Ez6WKrbF1dofFOBTlvzDCf
          source_id: s_nV4MaUuWGdefQd96RaG1Wf
          stance: supports
          locator: 宋人傳記資料索引(電子版)，1034：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_nV4MaUuWGdefQd96RaG1Wf
            source_type: api_record
            title: 中国历代人物传记资料库：王珪（CBDB 38294）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38294&o=json
            external_identifier: CBDB:38294
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.424Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_4DMwFrJ3LdwEVHWXHa7AR4
        status: active
        display_name: 王珪
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王稟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王稟 | accepted |
| death.date | 1126年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_7SVydL41UGsuFHeEEHBj78 | 王薿 | accepted |
| ancestors | p_4DMwFrJ3LdwEVHWXHa7AR4 | 王珪 | accepted |

## 外部来源

- [中国历代人物传记资料库：王稟（CBDB 38148）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38148&o=json)
- [中国历代人物传记资料库：王珪（CBDB 38294）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38294&o=json)
- [中国历代人物传记资料库：王薿（CBDB 570602）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=570602&o=json)
