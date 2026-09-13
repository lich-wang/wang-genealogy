---
schema: wang-person/v1
id: p_kj7xLVAdnL38cq8xDTKsqF
status: active
merged_into: null
display_name: 王叔遇
cbdb_id: 157224
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5BptzY94Hb7JB7LJCrfiDc
        subject_person_id: p_kj7xLVAdnL38cq8xDTKsqF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王叔遇，史料所见人物。本项目依据《中国历代人物传记资料库：王叔遇（CBDB 157224）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_j0J1WHCgA5w55yoTBWTtUi
          claim_id: c_5BptzY94Hb7JB7LJCrfiDc
          source_id: s_MCYxkZEfp8k1XxDvQs3Mu8
          stance: supports
          locator: CBDB:157224
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_MCYxkZEfp8k1XxDvQs3Mu8
            source_type: api_record
            title: 中国历代人物传记资料库：王叔遇（CBDB 157224）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=157224&o=json
            external_identifier: CBDB:157224
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.122Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_GHKoboC4Zmcbv6TnBxwae2
        subject_person_id: p_kj7xLVAdnL38cq8xDTKsqF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王叔遇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_DquBTy19RJASsHmEKsGxDL
          claim_id: c_GHKoboC4Zmcbv6TnBxwae2
          source_id: s_MCYxkZEfp8k1XxDvQs3Mu8
          stance: supports
          locator: CBDB:157224
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2201-2300）｜历史性依据：CBDB 朝代 = 唐
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_tvho6qH7EAHB-8SLkJC7nV
        subject_person_id: p_z5fd9doZBpHnhM7XG6sUvg
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_kj7xLVAdnL38cq8xDTKsqF
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Yk3KfFGOscMbdaLMOPpHEr
          claim_id: c_tvho6qH7EAHB-8SLkJC7nV
          source_id: s_MCYxkZEfp8k1XxDvQs3Mu8
          stance: supports
          locator: 唐代墓誌匯編:二卷，Yuanhe 148：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_MCYxkZEfp8k1XxDvQs3Mu8
            source_type: api_record
            title: 中国历代人物传记资料库：王叔遇（CBDB 157224）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=157224&o=json
            external_identifier: CBDB:157224
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.122Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_z5fd9doZBpHnhM7XG6sUvg
        status: active
        display_name: 王佺
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王叔遇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王叔遇，史料所见人物。本项目依据《中国历代人物传记资料库：王叔遇（CBDB 157224）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王叔遇 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_z5fd9doZBpHnhM7XG6sUvg | 王佺 | accepted |

## 外部来源

- [中国历代人物传记资料库：王叔遇（CBDB 157224）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=157224&o=json)
