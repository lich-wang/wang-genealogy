---
schema: wang-person/v1
id: p_KTynjRn7fpCYtyL7AxGceQ
status: active
merged_into: null
display_name: 王鳴世
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wJ5YCzXRd2b8aZ9gJRsHNA
        subject_person_id: p_KTynjRn7fpCYtyL7AxGceQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鳴世
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CUmnMqdR8BjM5TSBcC9peb
          claim_id: c_wJ5YCzXRd2b8aZ9gJRsHNA
          source_id: s_ikZJ4e9qDEAtCUBJUDZruN
          stance: supports
          locator: CBDB:527008
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（527008）
          source: &a1
            id: s_ikZJ4e9qDEAtCUBJUDZruN
            source_type: api_record
            title: 中国历代人物传记资料库：王鳴世（CBDB 527008）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=527008&o=json
            external_identifier: CBDB:527008
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.331Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xGmzLCtrBsKX1ozvuik5JS
        subject_person_id: p_KTynjRn7fpCYtyL7AxGceQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鳴世，史料所见人物。本项目依据《中国历代人物传记资料库：王鳴世（CBDB 527008）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_1keM6jGPata66jf92zUNsT
          claim_id: c_xGmzLCtrBsKX1ozvuik5JS
          source_id: s_ikZJ4e9qDEAtCUBJUDZruN
          stance: supports
          locator: CBDB:527008
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
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
        id: c_INA5ybAhKZOGJOY6LH_isd
        subject_person_id: p_KTynjRn7fpCYtyL7AxGceQ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_HEUcerQJFyi9et4579m3gv
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3OxpsVtMqEc-M6GlBilI52
          claim_id: c_INA5ybAhKZOGJOY6LH_isd
          source_id: s_wRUdnTyP5CUA1SubSNpUQe
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），13172：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_wRUdnTyP5CUA1SubSNpUQe
            source_type: api_record
            title: 中国历代人物传记资料库：王遵訓（CBDB 69461）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69461&o=json
            external_identifier: CBDB:69461
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.280Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_HEUcerQJFyi9et4579m3gv
        status: active
        display_name: 王遵訓
        merged_into_person_id: null
  other: []
---

# 王鳴世

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鳴世 | accepted |
| bio.summary | 王鳴世，史料所见人物。本项目依据《中国历代人物传记资料库：王鳴世（CBDB 527008）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_HEUcerQJFyi9et4579m3gv | 王遵訓 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鳴世（CBDB 527008）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=527008&o=json)
- [中国历代人物传记资料库：王遵訓（CBDB 69461）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69461&o=json)
