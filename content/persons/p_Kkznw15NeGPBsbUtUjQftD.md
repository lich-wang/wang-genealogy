---
schema: wang-person/v1
id: p_Kkznw15NeGPBsbUtUjQftD
status: active
merged_into: null
display_name: 周源瀚
revision: 1
cbdb_id: 120471
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_B2aYx0ik0N079JL-zcQQcZ
        subject_person_id: p_Kkznw15NeGPBsbUtUjQftD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 周源瀚，史料所见人物。本项目依据《中国历代人物传记资料库：周源瀚（CBDB 120471）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qfobX_eG6S276Lqmz41vfD
          claim_id: c_B2aYx0ik0N079JL-zcQQcZ
          source_id: s_rY_47Z6y-s-iN3yQqwDanK
          stance: supports
          locator: CBDB:120471
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_rY_47Z6y-s-iN3yQqwDanK
            source_type: api_record
            title: 中国历代人物传记资料库：周源瀚（CBDB 120471）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=120471&o=json
            external_identifier: CBDB:120471
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_aW012iqDuopCTKL4cU5hr4
        subject_person_id: p_Kkznw15NeGPBsbUtUjQftD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 周源瀚
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XNMeDkZZ-9ze6wjswl8DLz
          claim_id: c_aW012iqDuopCTKL4cU5hr4
          source_id: s_rY_47Z6y-s-iN3yQqwDanK
          stance: supports
          locator: CBDB:120471
          quotation: null
          interpretation_note: CBDB 明确记录的王仙姿配偶
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_YVEvyg3eCoMc5lTm0gC-5A
        subject_person_id: p_hiVAr6WUUN6ACAQdKNTSg2
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_Kkznw15NeGPBsbUtUjQftD
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ic936pyg7epXqROnoP3Js3
          claim_id: c_YVEvyg3eCoMc5lTm0gC-5A
          source_id: s_rY_47Z6y-s-iN3yQqwDanK
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #2293：丈夫"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_hiVAr6WUUN6ACAQdKNTSg2
        status: active
        display_name: 王仙姿
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 周源瀚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 周源瀚，史料所见人物。本项目依据《中国历代人物传记资料库：周源瀚（CBDB 120471）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 周源瀚 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_hiVAr6WUUN6ACAQdKNTSg2 | 王仙姿 | accepted |

## 外部来源

- [中国历代人物传记资料库：周源瀚（CBDB 120471）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=120471&o=json)
