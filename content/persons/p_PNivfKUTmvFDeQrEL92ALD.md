---
schema: wang-person/v1
id: p_PNivfKUTmvFDeQrEL92ALD
status: active
merged_into: null
display_name: 王欽
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_UPaHGXXirkNNY3zPEYP7vA
        subject_person_id: p_PNivfKUTmvFDeQrEL92ALD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王欽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_bDX8pxNsbrcydoEUBnP4xC
          claim_id: c_UPaHGXXirkNNY3zPEYP7vA
          source_id: s_Eb6hetc5gVEGDZ53xF8W25
          stance: supports
          locator: CBDB:284223
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（284223）
          source: &a1
            id: s_Eb6hetc5gVEGDZ53xF8W25
            source_type: api_record
            title: 中国历代人物传记资料库：王欽（CBDB 284223）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284223&o=json
            external_identifier: CBDB:284223
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.188Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_G3HoW6ZHR6WDSuAY17ec3Z
        subject_person_id: p_PNivfKUTmvFDeQrEL92ALD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王欽，明人物。正德十六年進士，籍贯德化。（中国历代人物传记资料库 CBDB 284223）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_M8ZUcYUFW2uEIgyQJS3BNj
          claim_id: c_G3HoW6ZHR6WDSuAY17ec3Z
          source_id: s_Eb6hetc5gVEGDZ53xF8W25
          stance: supports
          locator: CBDB:284223
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_wRMfIX7ebtOsEBoR-iA0lR
        subject_person_id: p_PNivfKUTmvFDeQrEL92ALD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_gqRqyCB9SbCQ4hrRNwLZxF
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TZhzgBog8ncVQGVZoHK8hZ
          claim_id: c_wRMfIX7ebtOsEBoR-iA0lR
          source_id: s_Eb6hetc5gVEGDZ53xF8W25
          stance: supports
          locator: 正德十六年登科錄:一卷，第三甲第七名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_gqRqyCB9SbCQ4hrRNwLZxF
        status: active
        display_name: 王汝賓
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王欽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王欽 | accepted |
| bio.summary | 王欽，明人物。正德十六年進士，籍贯德化。（中国历代人物传记资料库 CBDB 284223） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_gqRqyCB9SbCQ4hrRNwLZxF | 王汝賓 | accepted |

## 外部来源

- [中国历代人物传记资料库：王欽（CBDB 284223）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284223&o=json)
