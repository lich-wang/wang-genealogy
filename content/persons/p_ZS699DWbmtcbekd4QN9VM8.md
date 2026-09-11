---
schema: wang-person/v1
id: p_ZS699DWbmtcbekd4QN9VM8
status: active
merged_into: null
display_name: 王慶元
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_WX2w3TcjNi1ZwpiF3j9JdL
        subject_person_id: p_ZS699DWbmtcbekd4QN9VM8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王慶元
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8rnhsJB9Xw5qc97xKqukGJ
          claim_id: c_WX2w3TcjNi1ZwpiF3j9JdL
          source_id: s_ghLNJYFPTB9j22Xb3QQ2kJ
          stance: supports
          locator: CBDB:157449
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（157449）
          source: &a1
            id: s_ghLNJYFPTB9j22Xb3QQ2kJ
            source_type: api_record
            title: 中国历代人物传记资料库：王慶元（CBDB 157449）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=157449&o=json
            external_identifier: CBDB:157449
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.905Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FJWZjSiPa95TDxGED57uoJ
        subject_person_id: p_ZS699DWbmtcbekd4QN9VM8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王慶元，唐人物。籍贯琅琊。（中国历代人物传记资料库 CBDB 157449）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_YeXutVXThnv3-xZ2Bps__1
          claim_id: c_FJWZjSiPa95TDxGED57uoJ
          source_id: s_ghLNJYFPTB9j22Xb3QQ2kJ
          stance: supports
          locator: CBDB:157449
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_dw664uslV51snO0_fcPNiS
        subject_person_id: p_JPAESna4EE9p8VuH1GHtxr
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ZS699DWbmtcbekd4QN9VM8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_u3cJRGk-lYdgwhKu2_nYNX
          claim_id: c_dw664uslV51snO0_fcPNiS
          source_id: s_TWZEZfgfGcHBDAgWV8zJf7
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_TWZEZfgfGcHBDAgWV8zJf7
            source_type: api_record
            title: 中国历代人物传记资料库：王端（CBDB 141562）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141562&o=json
            external_identifier: CBDB:141562
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.560Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_JPAESna4EE9p8VuH1GHtxr
        status: active
        display_name: 王端
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王慶元

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王慶元 | accepted |
| bio.summary | 王慶元，唐人物。籍贯琅琊。（中国历代人物传记资料库 CBDB 157449） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_JPAESna4EE9p8VuH1GHtxr | 王端 | accepted |

## 外部来源

- [中国历代人物传记资料库：王端（CBDB 141562）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141562&o=json)
- [中国历代人物传记资料库：王慶元（CBDB 157449）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=157449&o=json)
