---
schema: wang-person/v1
id: p_oShGPWRUUN6brzr17EdqQw
status: active
merged_into: null
display_name: 王應期
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_adCJWTMp6PnwTMfB4K7BnF
        subject_person_id: p_oShGPWRUUN6brzr17EdqQw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應期
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_TLhQY2q3f6iEQzm8b3L9aL
          claim_id: c_adCJWTMp6PnwTMfB4K7BnF
          source_id: s_jPPBL33UjgyaXvD48g7NHg
          stance: supports
          locator: CBDB:23513
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（23513）
          source: &a1
            id: s_jPPBL33UjgyaXvD48g7NHg
            source_type: api_record
            title: 中国历代人物传记资料库：王應期（CBDB 23513）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23513&o=json
            external_identifier: CBDB:23513
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.884Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xE15DMLY5m53xAqAka1kVM
        subject_person_id: p_oShGPWRUUN6brzr17EdqQw
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應期，宋人物。籍贯墊江。（中国历代人物传记资料库 CBDB 23513）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2Aw0jSxqdla_olGNVmdzxd
          claim_id: c_xE15DMLY5m53xAqAka1kVM
          source_id: s_jPPBL33UjgyaXvD48g7NHg
          stance: supports
          locator: CBDB:23513
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_-e4ysxXuYsuH2hxKObr0U1
        subject_person_id: p_zCbWF6CJ6KC4k63KFLLK3D
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_oShGPWRUUN6brzr17EdqQw
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ujDOHyoYVTbg40eh51hVjE
          claim_id: c_-e4ysxXuYsuH2hxKObr0U1
          source_id: s_jPPBL33UjgyaXvD48g7NHg
          stance: supports
          locator: CBDB 双向互证（父 王仁皎 ⇄ 子 王應期）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_zCbWF6CJ6KC4k63KFLLK3D
        status: active
        display_name: 王仁皎
        merged_into_person_id: null
  children:
    - claim:
        id: c_ZgP5BUhanmbnMObyd57Luz
        subject_person_id: p_oShGPWRUUN6brzr17EdqQw
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8MRwXztEw6F7DDCzvcdtNu
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_um0WZyIlfVutD-f3-t4KgA
          claim_id: c_ZgP5BUhanmbnMObyd57Luz
          source_id: s_Aj3s8nTDdmoBjtCjFyF8MM
          stance: supports
          locator: CBDB 双向互证（父 王應期 ⇄ 子 王鎬）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_Aj3s8nTDdmoBjtCjFyF8MM
            source_type: api_record
            title: 中国历代人物传记资料库：王鎬（CBDB 23514）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23514&o=json
            external_identifier: CBDB:23514
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.884Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_8MRwXztEw6F7DDCzvcdtNu
        status: active
        display_name: 王鎬
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王應期

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王應期 | accepted |
| bio.summary | 王應期，宋人物。籍贯墊江。（中国历代人物传记资料库 CBDB 23513） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_zCbWF6CJ6KC4k63KFLLK3D | 王仁皎 | accepted |
| children | p_8MRwXztEw6F7DDCzvcdtNu | 王鎬 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鎬（CBDB 23514）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23514&o=json)
- [中国历代人物传记资料库：王應期（CBDB 23513）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23513&o=json)
