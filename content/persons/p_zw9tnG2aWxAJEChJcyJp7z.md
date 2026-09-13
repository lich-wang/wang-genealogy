---
schema: wang-person/v1
id: p_zw9tnG2aWxAJEChJcyJp7z
status: active
merged_into: null
display_name: 王志嚴
cbdb_id: 275659
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_nxLPJsnyuAhDgCo5z8jMcc
        subject_person_id: p_zw9tnG2aWxAJEChJcyJp7z
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王志嚴，明人物。弘治十八年進士。（中国历代人物传记资料库 CBDB 275659）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_vhclaKDyZlCtggaxiB7rFN
          claim_id: c_nxLPJsnyuAhDgCo5z8jMcc
          source_id: s_U8spKeS4EYPNWtvE1UynDm
          stance: supports
          locator: CBDB:275659
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_U8spKeS4EYPNWtvE1UynDm
            source_type: api_record
            title: 中国历代人物传记资料库：王志嚴（CBDB 275659）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=275659&o=json
            external_identifier: CBDB:275659
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.295Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_VQUd2LvqKCCtDNQPCzRh8G
        subject_person_id: p_zw9tnG2aWxAJEChJcyJp7z
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王志嚴
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_NPUpEFFZsxdbudkFSGHuhH
          claim_id: c_VQUd2LvqKCCtDNQPCzRh8G
          source_id: s_U8spKeS4EYPNWtvE1UynDm
          stance: supports
          locator: CBDB:275659
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3201-3300）｜历史性依据：CBDB 朝代 = 明
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
        id: c_lqroLLOh4SmcrDcN16lNdR
        subject_person_id: p_zw9tnG2aWxAJEChJcyJp7z
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_LvB1BmafWakeZPFiqa6trK
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_F6vAyJgGsWXR8GBs7XdD0q
          claim_id: c_lqroLLOh4SmcrDcN16lNdR
          source_id: s_U8spKeS4EYPNWtvE1UynDm
          stance: supports
          locator: 弘治十八年進士登科錄:一卷，第三甲第二百零一名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_U8spKeS4EYPNWtvE1UynDm
            source_type: api_record
            title: 中国历代人物传记资料库：王志嚴（CBDB 275659）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=275659&o=json
            external_identifier: CBDB:275659
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.295Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_LvB1BmafWakeZPFiqa6trK
        status: active
        display_name: 王偉
        merged_into_person_id: null
  other: []
---

# 王志嚴

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王志嚴，明人物。弘治十八年進士。（中国历代人物传记资料库 CBDB 275659） | accepted |
| name.primary | 王志嚴 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_LvB1BmafWakeZPFiqa6trK | 王偉 | accepted |

## 外部来源

- [中国历代人物传记资料库：王志嚴（CBDB 275659）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=275659&o=json)
