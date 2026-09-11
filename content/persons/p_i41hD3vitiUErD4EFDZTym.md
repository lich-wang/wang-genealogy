---
schema: wang-person/v1
id: p_i41hD3vitiUErD4EFDZTym
status: active
merged_into: null
display_name: 王天成
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ExFSjJGo9eh1oFWiSCwdEM
        subject_person_id: p_i41hD3vitiUErD4EFDZTym
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王天成
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6HA2a4GViBAGpZU4uTmXLH
          claim_id: c_ExFSjJGo9eh1oFWiSCwdEM
          source_id: s_LfGPEoMmAwU52rMK61e23p
          stance: supports
          locator: CBDB:24047
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（24047）
          source: &a1
            id: s_LfGPEoMmAwU52rMK61e23p
            source_type: api_record
            title: 中国历代人物传记资料库：王天成（CBDB 24047）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=24047&o=json
            external_identifier: CBDB:24047
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.894Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_eVQXoq5QJcg3m8L2RsxzTv
        subject_person_id: p_i41hD3vitiUErD4EFDZTym
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王天成，宋人物。籍贯長安。（中国历代人物传记资料库 CBDB 24047）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_js6Z6pMARqDJW7FT8HSD2m
          claim_id: c_eVQXoq5QJcg3m8L2RsxzTv
          source_id: s_LfGPEoMmAwU52rMK61e23p
          stance: supports
          locator: CBDB:24047
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_WnKLZ16FMAJyxT9wy_lb3I
        subject_person_id: p_PdEwi2FLPSg5Jw9L8yXAaW
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_i41hD3vitiUErD4EFDZTym
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Uv7meoGDW1Oypc2o0klfB3
          claim_id: c_WnKLZ16FMAJyxT9wy_lb3I
          source_id: s_LfGPEoMmAwU52rMK61e23p
          stance: supports
          locator: CBDB 双向互证（父 王韶 ⇄ 子 王天成）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_PdEwi2FLPSg5Jw9L8yXAaW
        status: active
        display_name: 王韶
        merged_into_person_id: null
  children:
    - claim:
        id: c_Cac4s1Zy9gJB-s_GR7X2hP
        subject_person_id: p_i41hD3vitiUErD4EFDZTym
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_paeiTkCs16bPdo21GgKDac
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QsHb2toN3piEAxv-VA-czQ
          claim_id: c_Cac4s1Zy9gJB-s_GR7X2hP
          source_id: s_LfGPEoMmAwU52rMK61e23p
          stance: supports
          locator: CBDB 双向互证（子 王用 ⇄ 父 王天成）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_paeiTkCs16bPdo21GgKDac
        status: active
        display_name: 王用
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王天成

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王天成 | accepted |
| bio.summary | 王天成，宋人物。籍贯長安。（中国历代人物传记资料库 CBDB 24047） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_PdEwi2FLPSg5Jw9L8yXAaW | 王韶 | accepted |
| children | p_paeiTkCs16bPdo21GgKDac | 王用 | accepted |

## 外部来源

- [中国历代人物传记资料库：王天成（CBDB 24047）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=24047&o=json)
