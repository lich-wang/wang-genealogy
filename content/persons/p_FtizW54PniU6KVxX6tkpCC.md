---
schema: wang-person/v1
id: p_FtizW54PniU6KVxX6tkpCC
status: active
merged_into: null
display_name: 江鰲
revision: 1
cbdb_id: 70003
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_pq99de3GCSc15O9FgmH_71
        subject_person_id: p_FtizW54PniU6KVxX6tkpCC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 江鰲，史料所见人物。本项目依据《中国历代人物传记资料库：江鰲（CBDB 70003）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bleZAvvpcb41SUjqzry_-E
          claim_id: c_pq99de3GCSc15O9FgmH_71
          source_id: s_CFfEHk-bK1giP5mItbjccW
          stance: supports
          locator: CBDB:70003
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_CFfEHk-bK1giP5mItbjccW
            source_type: api_record
            title: 中国历代人物传记资料库：江鰲（CBDB 70003）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=70003&o=json
            external_identifier: CBDB:70003
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_djrfmK6n7PEOAjN6aiUYvy
        subject_person_id: p_FtizW54PniU6KVxX6tkpCC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 江鰲
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Yd6iOyl9FAGkvWl-MVm-iF
          claim_id: c_djrfmK6n7PEOAjN6aiUYvy
          source_id: s_CFfEHk-bK1giP5mItbjccW
          stance: supports
          locator: CBDB:70003
          quotation: null
          interpretation_note: CBDB 明确记录的王幼貞配偶
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
        id: c_0DFmH3w0PK6W_p8rIwJTLp
        subject_person_id: p_Yep3jv444A6aFd4NH6cndv
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_FtizW54PniU6KVxX6tkpCC
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tupdrJjRssnmQ0FhRHBv_P
          claim_id: c_0DFmH3w0PK6W_p8rIwJTLp
          source_id: s_CFfEHk-bK1giP5mItbjccW
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #1346, HuWenKai #231：丈夫"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Yep3jv444A6aFd4NH6cndv
        status: active
        display_name: 王幼貞
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 江鰲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 江鰲，史料所见人物。本项目依据《中国历代人物传记资料库：江鰲（CBDB 70003）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 江鰲 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_Yep3jv444A6aFd4NH6cndv | 王幼貞 | accepted |

## 外部来源

- [中国历代人物传记资料库：江鰲（CBDB 70003）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=70003&o=json)
