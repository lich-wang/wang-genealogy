---
schema: wang-person/v1
id: p_SKKWaTeWq4p8iTyWiTdZLD
status: active
merged_into: null
display_name: 王迪
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_oTkyq9j4fQRANe4qQZWZ1G
        subject_person_id: p_SKKWaTeWq4p8iTyWiTdZLD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王迪
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5Rn3ci4hW4iwyJ8jZ6A9Et
          claim_id: c_oTkyq9j4fQRANe4qQZWZ1G
          source_id: s_JCgPwBLSBfJtgn9yxNnsTE
          stance: supports
          locator: CBDB:269537
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（269537）
          source: &a1
            id: s_JCgPwBLSBfJtgn9yxNnsTE
            source_type: api_record
            title: 中国历代人物传记资料库：王迪（CBDB 269537）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=269537&o=json
            external_identifier: CBDB:269537
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.814Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Pgxmad3DDaLggnby2TFQWD
        subject_person_id: p_SKKWaTeWq4p8iTyWiTdZLD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王迪，明人物。弘治九年進士。（中国历代人物传记资料库 CBDB 269537）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Gu6xZXK3Td04rg4JlhjSkj
          claim_id: c_Pgxmad3DDaLggnby2TFQWD
          source_id: s_JCgPwBLSBfJtgn9yxNnsTE
          stance: supports
          locator: CBDB:269537
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_xIB3C8-oyYje_NBNlPHIFX
        subject_person_id: p_SKKWaTeWq4p8iTyWiTdZLD
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Yg7KAN2d9TocKbC2usfc4o
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aLxuibhvLhW5erl-yFj0mY
          claim_id: c_xIB3C8-oyYje_NBNlPHIFX
          source_id: s_JCgPwBLSBfJtgn9yxNnsTE
          stance: supports
          locator: 弘治九年進士登科錄:一卷，第三甲第一百七十五名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Yg7KAN2d9TocKbC2usfc4o
        status: active
        display_name: 王尚賓
        merged_into_person_id: null
  other: []
---

# 王迪

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王迪 | accepted |
| bio.summary | 王迪，明人物。弘治九年進士。（中国历代人物传记资料库 CBDB 269537） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_Yg7KAN2d9TocKbC2usfc4o | 王尚賓 | accepted |

## 外部来源

- [中国历代人物传记资料库：王迪（CBDB 269537）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=269537&o=json)
