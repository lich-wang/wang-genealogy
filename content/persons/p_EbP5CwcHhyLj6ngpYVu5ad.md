---
schema: wang-person/v1
id: p_EbP5CwcHhyLj6ngpYVu5ad
status: active
merged_into: null
display_name: 王齊
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_chCDanaqDCB63XASCZ51E8
        subject_person_id: p_EbP5CwcHhyLj6ngpYVu5ad
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王齊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_eLsMcaWMfyEh326KU2PW3c
          claim_id: c_chCDanaqDCB63XASCZ51E8
          source_id: s_6ipmewd8kLs5VFrEaZ9E21
          stance: supports
          locator: CBDB:137933
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（137933）
          source: &a1
            id: s_6ipmewd8kLs5VFrEaZ9E21
            source_type: api_record
            title: 中国历代人物传记资料库：王齊（CBDB 137933）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=137933&o=json
            external_identifier: CBDB:137933
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.353Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HP82L9HJBKSgNZ4E9phedB
        subject_person_id: p_EbP5CwcHhyLj6ngpYVu5ad
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王齊，宋人物。寶祐進士，籍贯永福。（中国历代人物传记资料库 CBDB 137933）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_P16hCHsYWATW8QvVGygBtA
          claim_id: c_HP82L9HJBKSgNZ4E9phedB
          source_id: s_6ipmewd8kLs5VFrEaZ9E21
          stance: supports
          locator: CBDB:137933
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
        id: c_YLYS-EoCqJyXoIoEToIIyQ
        subject_person_id: p_EbP5CwcHhyLj6ngpYVu5ad
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_mmwATqRLjoRdB6PX8Fk2Af
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FZ2PX5Z0ruib9vKmkJYsw3
          claim_id: c_YLYS-EoCqJyXoIoEToIIyQ
          source_id: s_6ipmewd8kLs5VFrEaZ9E21
          stance: supports
          locator: 寶祐登科錄：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_mmwATqRLjoRdB6PX8Fk2Af
        status: active
        display_name: 王夢高
        merged_into_person_id: null
    - claim:
        id: c_aA6CSpJ_alqqSOazCAxCU4
        subject_person_id: p_EbP5CwcHhyLj6ngpYVu5ad
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_6yQuV8W1juBXMRuevQX1tR
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_U9HwE7NPE8bDPpbeX_Rg_w
          claim_id: c_aA6CSpJ_alqqSOazCAxCU4
          source_id: s_6ipmewd8kLs5VFrEaZ9E21
          stance: supports
          locator: 寶祐登科錄：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_6yQuV8W1juBXMRuevQX1tR
        status: active
        display_name: 王良翁
        merged_into_person_id: null
  other: []
---

# 王齊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王齊 | accepted |
| bio.summary | 王齊，宋人物。寶祐進士，籍贯永福。（中国历代人物传记资料库 CBDB 137933） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_mmwATqRLjoRdB6PX8Fk2Af | 王夢高 | accepted |
| descendants | p_6yQuV8W1juBXMRuevQX1tR | 王良翁 | accepted |

## 外部来源

- [中国历代人物传记资料库：王齊（CBDB 137933）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=137933&o=json)
