---
schema: wang-person/v1
id: p_6d5u4KXShYSqA6iWUHjoz7
status: active
merged_into: null
display_name: 王誥
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NVBfLLC1FwmFYLMKk74pEq
        subject_person_id: p_6d5u4KXShYSqA6iWUHjoz7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王誥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MEZvZF11EPAJRN9Vg3a8YJ
          claim_id: c_NVBfLLC1FwmFYLMKk74pEq
          source_id: s_U37EY32i9zKpRAwQuV8DD6
          stance: supports
          locator: CBDB:338053
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（338053）
          source: &a1
            id: s_U37EY32i9zKpRAwQuV8DD6
            source_type: api_record
            title: 中国历代人物传记资料库：王誥（CBDB 338053）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=338053&o=json
            external_identifier: CBDB:338053
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.533Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_77c7wxfBk3VwWWc2qaAgWk
        subject_person_id: p_6d5u4KXShYSqA6iWUHjoz7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王誥，明人物。天順八年進士，籍贯寧晉。（中国历代人物传记资料库 CBDB 338053）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_KVEB_LVKFRfk_-xAQWVEvn
          claim_id: c_77c7wxfBk3VwWWc2qaAgWk
          source_id: s_U37EY32i9zKpRAwQuV8DD6
          stance: supports
          locator: CBDB:338053
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_apmR9lvV_sCRbeczeM9-uU
        subject_person_id: p_mkEUUStA3H6zxa8Vzv7LyH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6d5u4KXShYSqA6iWUHjoz7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_s1QqWFZF3FHbvmhE0UTUzE
          claim_id: c_apmR9lvV_sCRbeczeM9-uU
          source_id: s_YlnKUFUreSQAoU5JD8dpsR
          stance: supports
          locator: CBDB：兄弟 王詔（67938）之父／母 王昂
          quotation: null
          interpretation_note: 由兄弟关系推断：王誥 与 王詔 为同胞（CBDB 记「兄」），王詔 之父／母即 王誥 之父／母。
          source:
            id: s_YlnKUFUreSQAoU5JD8dpsR
            source_type: api_record
            title: 中国历代人物传记资料库：王誥（CBDB 338053）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=338053&o=json
            external_identifier: CBDB:338053
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_mkEUUStA3H6zxa8Vzv7LyH
        status: active
        display_name: 王昂
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_cgZxDlxTVud9-mLsfNI1kT
        subject_person_id: p_3NK6EhTAXgAtmFG5Dkqh4A
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_6d5u4KXShYSqA6iWUHjoz7
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iVnzlLpPj2zN2JYfSVRJ4Z
          claim_id: c_cgZxDlxTVud9-mLsfNI1kT
          source_id: s_YlnKUFUreSQAoU5JD8dpsR
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 67938 王詔）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_YlnKUFUreSQAoU5JD8dpsR
            source_type: api_record
            title: 中国历代人物传记资料库：王誥（CBDB 338053）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=338053&o=json
            external_identifier: CBDB:338053
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_3NK6EhTAXgAtmFG5Dkqh4A
        status: active
        display_name: 王詔
        merged_into_person_id: null
---

# 王誥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王誥 | accepted |
| bio.summary | 王誥，明人物。天順八年進士，籍贯寧晉。（中国历代人物传记资料库 CBDB 338053） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_mkEUUStA3H6zxa8Vzv7LyH | 王昂 | accepted |
| other | p_3NK6EhTAXgAtmFG5Dkqh4A | 王詔 | accepted |

## 外部来源

- [中国历代人物传记资料库：王誥（CBDB 338053）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=338053&o=json)
