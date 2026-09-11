---
schema: wang-person/v1
id: p_Rh1A7Ueayko5J8fzSrKisQ
status: active
merged_into: null
display_name: 王一鳴
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BmDUCRdqCQjSwD4GQxq2iE
        subject_person_id: p_Rh1A7Ueayko5J8fzSrKisQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一鳴
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PYyW91yszqcNj2ya5PUoRS
          claim_id: c_BmDUCRdqCQjSwD4GQxq2iE
          source_id: s_qkyV72xVSmsqK22pZfWQM6
          stance: supports
          locator: CBDB:232196
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（232196）
          source: &a1
            id: s_qkyV72xVSmsqK22pZfWQM6
            source_type: api_record
            title: 中国历代人物传记资料库：王一鳴（CBDB 232196）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=232196&o=json
            external_identifier: CBDB:232196
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.688Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_UcPcEZVXbinFfwJGKNEz8M
        subject_person_id: p_Rh1A7Ueayko5J8fzSrKisQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一鳴，史料所见人物。本项目依据《中国历代人物传记资料库：王一鳴（CBDB 232196）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_UydrwoVOQT2CAH4aSVnnp4
          claim_id: c_UcPcEZVXbinFfwJGKNEz8M
          source_id: s_qkyV72xVSmsqK22pZfWQM6
          stance: supports
          locator: CBDB:232196
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
        id: c_gspYA6f3f3F-4XHOh1cxqF
        subject_person_id: p_Rh1A7Ueayko5J8fzSrKisQ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_NNN6o899F1M8yyQuHKMbNz
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_50jIVPyUT_HhNgyXeIzljf
          claim_id: c_gspYA6f3f3F-4XHOh1cxqF
          source_id: s_qkyV72xVSmsqK22pZfWQM6
          stance: supports
          locator: 萬曆二十年壬辰科進士歷履便覽:一卷，第三甲第三十九名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_NNN6o899F1M8yyQuHKMbNz
        status: active
        display_name: 王演疇
        merged_into_person_id: null
  other: []
---

# 王一鳴

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王一鳴 | accepted |
| bio.summary | 王一鳴，史料所见人物。本项目依据《中国历代人物传记资料库：王一鳴（CBDB 232196）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_NNN6o899F1M8yyQuHKMbNz | 王演疇 | accepted |

## 外部来源

- [中国历代人物传记资料库：王一鳴（CBDB 232196）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=232196&o=json)
