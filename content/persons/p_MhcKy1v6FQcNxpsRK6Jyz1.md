---
schema: wang-person/v1
id: p_MhcKy1v6FQcNxpsRK6Jyz1
status: active
merged_into: null
display_name: 李臨皐
revision: 1
cbdb_id: 56708
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PcA9yq5f2MI4BnrpEaxjaK
        subject_person_id: p_MhcKy1v6FQcNxpsRK6Jyz1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 李臨皐，史料所见人物。本项目依据《中国历代人物传记资料库：李臨皐（CBDB 56708）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kMqK5bI8NAd96rFbTMkYXR
          claim_id: c_PcA9yq5f2MI4BnrpEaxjaK
          source_id: s_F2BOjHVGOk7hBLeK6Uq6zY
          stance: supports
          locator: CBDB:56708
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_F2BOjHVGOk7hBLeK6Uq6zY
            source_type: api_record
            title: 中国历代人物传记资料库：李臨皐（CBDB 56708）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56708&o=json
            external_identifier: CBDB:56708
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_XKVdXTsgClc1XlOH0mBQ_E
        subject_person_id: p_MhcKy1v6FQcNxpsRK6Jyz1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 李臨皐
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Op9B3eZesuEuvCf23aw3ST
          claim_id: c_XKVdXTsgClc1XlOH0mBQ_E
          source_id: s_F2BOjHVGOk7hBLeK6Uq6zY
          stance: supports
          locator: CBDB:56708
          quotation: null
          interpretation_note: CBDB 明确记录的王範配偶
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
        id: c_VDGVmfcUD7qloIjA0oBTgW
        subject_person_id: p_UYBuVTndSb5GudLhvCgJqg
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_MhcKy1v6FQcNxpsRK6Jyz1
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hGFfiBpPd8kksOv9InY_hs
          claim_id: c_VDGVmfcUD7qloIjA0oBTgW
          source_id: s_F2BOjHVGOk7hBLeK6Uq6zY
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #1130, HuWenKai #254：丈夫"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_UYBuVTndSb5GudLhvCgJqg
        status: active
        display_name: 王範
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 李臨皐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 李臨皐，史料所见人物。本项目依据《中国历代人物传记资料库：李臨皐（CBDB 56708）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 李臨皐 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_UYBuVTndSb5GudLhvCgJqg | 王範 | accepted |

## 外部来源

- [中国历代人物传记资料库：李臨皐（CBDB 56708）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56708&o=json)
