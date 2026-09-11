---
schema: wang-person/v1
id: p_LPTRCqyRqSnG4YGTZge7S6
status: active
merged_into: null
display_name: 王秀
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_r3E94uysqDfcVTuRXLfsfr
        subject_person_id: p_LPTRCqyRqSnG4YGTZge7S6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王秀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_UgXBv4Dmw52ELaxxGNcsZh
          claim_id: c_r3E94uysqDfcVTuRXLfsfr
          source_id: s_32J8cHnjgZyE1VzDRHA6GK
          stance: supports
          locator: CBDB:163047
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（163047）
          source: &a1
            id: s_32J8cHnjgZyE1VzDRHA6GK
            source_type: api_record
            title: 中国历代人物传记资料库：王秀（CBDB 163047）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=163047&o=json
            external_identifier: CBDB:163047
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.957Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_oFvfwGVU25tH8xPS15qzuJ
        subject_person_id: p_LPTRCqyRqSnG4YGTZge7S6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王秀，史料所见人物。本项目依据《中国历代人物传记资料库：王秀（CBDB 163047）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_JmUl7wGszuLHw0K3098-Ap
          claim_id: c_oFvfwGVU25tH8xPS15qzuJ
          source_id: s_32J8cHnjgZyE1VzDRHA6GK
          stance: supports
          locator: CBDB:163047
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_deEVGPSq68jBydjU_n6z9l
        subject_person_id: p_LPTRCqyRqSnG4YGTZge7S6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_hH347VTdzpHFec1Sm33N8h
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nl5eYGiopxNHNivzBPbaB1
          claim_id: c_deEVGPSq68jBydjU_n6z9l
          source_id: s_x2WSNyfoKvEb7sG24AQ3U1
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Changshou2：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_x2WSNyfoKvEb7sG24AQ3U1
            source_type: api_record
            title: 中国历代人物传记资料库：王挺（CBDB 142769）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=142769&o=json
            external_identifier: CBDB:142769
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.595Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_hH347VTdzpHFec1Sm33N8h
        status: active
        display_name: 王挺
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王秀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王秀 | accepted |
| bio.summary | 王秀，史料所见人物。本项目依据《中国历代人物传记资料库：王秀（CBDB 163047）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_hH347VTdzpHFec1Sm33N8h | 王挺 | accepted |

## 外部来源

- [中国历代人物传记资料库：王挺（CBDB 142769）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=142769&o=json)
- [中国历代人物传记资料库：王秀（CBDB 163047）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=163047&o=json)
