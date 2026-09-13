---
schema: wang-person/v1
id: p_V1WNcEWFyMKGiDwCARFKJg
status: active
merged_into: null
display_name: 王令仙
cbdb_id: 155789
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Ptz7CnrdAKL8NjkWqGuXUA
        subject_person_id: p_V1WNcEWFyMKGiDwCARFKJg
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王令仙，唐人物。籍贯安次。（中国历代人物传记资料库 CBDB 155789）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_BUkHrgxkQdFDV0yBcTAkc8
          claim_id: c_Ptz7CnrdAKL8NjkWqGuXUA
          source_id: s_oprmJQDAhL9A6EWQ5yiDzp
          stance: supports
          locator: CBDB:155789
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_oprmJQDAhL9A6EWQ5yiDzp
            source_type: api_record
            title: 中国历代人物传记资料库：王令仙（CBDB 155789）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=155789&o=json
            external_identifier: CBDB:155789
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.122Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_uUY9UTGqY5JxBv3FMcz1LM
        subject_person_id: p_V1WNcEWFyMKGiDwCARFKJg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王令仙
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_PSWGBdHuvLAjnSgQMezfMd
          claim_id: c_uUY9UTGqY5JxBv3FMcz1LM
          source_id: s_oprmJQDAhL9A6EWQ5yiDzp
          stance: supports
          locator: CBDB:155789
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2201-2300）｜历史性依据：CBDB 朝代 = 唐
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_0s7F0jmpFWbWbxlfS7zhs7
        subject_person_id: p_V1WNcEWFyMKGiDwCARFKJg
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_R1RF133N5mwNT6YsnkkDcE
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YjXA2HBP9M7tk-kFPogCe3
          claim_id: c_0s7F0jmpFWbWbxlfS7zhs7
          source_id: s_rErY2LTTPyhEcZTnzj5Up6
          stance: supports
          locator: 唐代墓誌匯編:二卷，Zhenyuan 76：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_rErY2LTTPyhEcZTnzj5Up6
            source_type: api_record
            title: 中国历代人物传记资料库：王仲堪（CBDB 141326）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141326&o=json
            external_identifier: CBDB:141326
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:39.240Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_R1RF133N5mwNT6YsnkkDcE
        status: active
        display_name: 王仲堪
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王令仙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王令仙，唐人物。籍贯安次。（中国历代人物传记资料库 CBDB 155789） | accepted |
| name.primary | 王令仙 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_R1RF133N5mwNT6YsnkkDcE | 王仲堪 | accepted |

## 外部来源

- [中国历代人物传记资料库：王令仙（CBDB 155789）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=155789&o=json)
- [中国历代人物传记资料库：王仲堪（CBDB 141326）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141326&o=json)
