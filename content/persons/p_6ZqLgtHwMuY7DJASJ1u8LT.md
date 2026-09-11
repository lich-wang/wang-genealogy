---
schema: wang-person/v1
id: p_6ZqLgtHwMuY7DJASJ1u8LT
status: active
merged_into: null
display_name: 王采蘩
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_mpipokiQgYpJ3pTPuCjVmU
        subject_person_id: p_6ZqLgtHwMuY7DJASJ1u8LT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王采蘩
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DUEYYp9Bm6798AKj73FbAz
          claim_id: c_mpipokiQgYpJ3pTPuCjVmU
          source_id: s_rSjGPng3EbeDA3Em4jGfGL
          stance: supports
          locator: CBDB:55199
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（55199）
          source: &a1
            id: s_rSjGPng3EbeDA3Em4jGfGL
            source_type: api_record
            title: 中国历代人物传记资料库：王采蘩（CBDB 55199）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=55199&o=json
            external_identifier: CBDB:55199
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.731Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZA6thzuiJS4da9GXyx1rm1
        subject_person_id: p_6ZqLgtHwMuY7DJASJ1u8LT
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王采蘩，史料所见人物。本项目依据《中国历代人物传记资料库：王采蘩（CBDB 55199）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_wJjSsxoaeE8BqS9R5wtHXc
          claim_id: c_ZA6thzuiJS4da9GXyx1rm1
          source_id: s_rSjGPng3EbeDA3Em4jGfGL
          stance: supports
          locator: CBDB:55199
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
  spouses:
    - claim:
        id: c_EjT1-cjiamoyA7PVg6fsjZ
        subject_person_id: p_6ZqLgtHwMuY7DJASJ1u8LT
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_ufvMzBsepEapU5aybFCq9Y
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4GW6KeMli4UFvjejk--ki9
          claim_id: c_EjT1-cjiamoyA7PVg6fsjZ
          source_id: s_Mkkyn7kECQg6AdhebQNWDD
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #3604：丈夫"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Mkkyn7kECQg6AdhebQNWDD
            source_type: api_record
            title: 中国历代人物传记资料库：陸斗岑（CBDB 55205）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=55205&o=json
            external_identifier: CBDB:55205
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_ufvMzBsepEapU5aybFCq9Y
        status: active
        display_name: 陸斗岑
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王采蘩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王采蘩 | accepted |
| bio.summary | 王采蘩，史料所见人物。本项目依据《中国历代人物传记资料库：王采蘩（CBDB 55199）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_ufvMzBsepEapU5aybFCq9Y | 陸斗岑 | accepted |

## 外部来源

- [中国历代人物传记资料库：陸斗岑（CBDB 55205）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=55205&o=json)
- [中国历代人物传记资料库：王采蘩（CBDB 55199）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=55199&o=json)
