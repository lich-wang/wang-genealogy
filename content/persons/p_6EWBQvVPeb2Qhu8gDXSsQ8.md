---
schema: wang-person/v1
id: p_6EWBQvVPeb2Qhu8gDXSsQ8
status: active
merged_into: null
display_name: 王濟
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Sq3vBCRjCBQfsna3VxAvXC
        subject_person_id: p_6EWBQvVPeb2Qhu8gDXSsQ8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王濟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7iYu7EwZyF7PkwM7qgjK2m
          claim_id: c_Sq3vBCRjCBQfsna3VxAvXC
          source_id: s_wLEbWYLLazDhSugeJUxnDY
          stance: supports
          locator: CBDB:312870
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（312870）
          source: &a1
            id: s_wLEbWYLLazDhSugeJUxnDY
            source_type: api_record
            title: 中国历代人物传记资料库：王濟（CBDB 312870）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312870&o=json
            external_identifier: CBDB:312870
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.887Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4eRgZMwu8h8S8CQqGBX9Mo
        subject_person_id: p_6EWBQvVPeb2Qhu8gDXSsQ8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QMgnWchVkVN8HWM22jmrZK
          claim_id: c_4eRgZMwu8h8S8CQqGBX9Mo
          source_id: s_wLEbWYLLazDhSugeJUxnDY
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
        id: c_IQZzv_eCU81cn9pEzs95Ur
        subject_person_id: p_6EWBQvVPeb2Qhu8gDXSsQ8
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3m7CP7DGKJ8uiCH5xxVdzo
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_m5D4GfM4aBvUFTlUmLPx3W
          claim_id: c_IQZzv_eCU81cn9pEzs95Ur
          source_id: s_bZsmvVZ8aVw1owZkSWkXLZ
          stance: supports
          locator: 嘉靖二十九年進士登科錄:一卷，第三甲第十九名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_bZsmvVZ8aVw1owZkSWkXLZ
            source_type: api_record
            title: 中国历代人物传记资料库：王極（CBDB 203985）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203985&o=json
            external_identifier: CBDB:203985
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.810Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_3m7CP7DGKJ8uiCH5xxVdzo
        status: active
        display_name: 王極
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王濟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王濟 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_3m7CP7DGKJ8uiCH5xxVdzo | 王極 | accepted |

## 外部来源

- [中国历代人物传记资料库：王極（CBDB 203985）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203985&o=json)
- [中国历代人物传记资料库：王濟（CBDB 312870）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312870&o=json)
