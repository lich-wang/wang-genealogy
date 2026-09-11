---
schema: wang-person/v1
id: p_RhDAKgtQcF6Z8oKs1zuCaK
status: active
merged_into: null
display_name: 王文紀
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_WWNEkakt3cySrJqDWEQ8pJ
        subject_person_id: p_RhDAKgtQcF6Z8oKs1zuCaK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文紀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_EhSSsDGE3gNviqVMmbhqCq
          claim_id: c_WWNEkakt3cySrJqDWEQ8pJ
          source_id: s_5TtZQhexaBnY27EuADxquz
          stance: supports
          locator: CBDB:700895
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（700895）
          source: &a1
            id: s_5TtZQhexaBnY27EuADxquz
            source_type: api_record
            title: 中国历代人物传记资料库：王文紀（CBDB 700895）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=700895&o=json
            external_identifier: CBDB:700895
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.600Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_M9JbpmwDmpG8Y9HhZX5URN
        subject_person_id: p_RhDAKgtQcF6Z8oKs1zuCaK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文紀，史料所见人物。本项目依据《中国历代人物传记资料库：王文紀（CBDB 700895）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_rLPli3GBHcmBKHbQb8Bk6n
          claim_id: c_M9JbpmwDmpG8Y9HhZX5URN
          source_id: s_5TtZQhexaBnY27EuADxquz
          stance: supports
          locator: CBDB:700895
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_4YsjIe1qWSuqJWTKAMdvif
        subject_person_id: p_RhDAKgtQcF6Z8oKs1zuCaK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_CNQq29PPARqLQdyYsUrpxT
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WBXvnEN8G-v7gg3Fn1SlJu
          claim_id: c_4YsjIe1qWSuqJWTKAMdvif
          source_id: s_F9s62EoXN9pasHwFnDDFVS
          stance: supports
          locator: 新出宋代墓志碑刻輯錄，北宋卷226 王辯墓志：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_F9s62EoXN9pasHwFnDDFVS
            source_type: api_record
            title: 中国历代人物传记资料库：王辯（CBDB 700887）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=700887&o=json
            external_identifier: CBDB:700887
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.783Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_CNQq29PPARqLQdyYsUrpxT
        status: active
        display_name: 王辯
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王文紀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文紀 | accepted |
| bio.summary | 王文紀，史料所见人物。本项目依据《中国历代人物传记资料库：王文紀（CBDB 700895）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_CNQq29PPARqLQdyYsUrpxT | 王辯 | accepted |

## 外部来源

- [中国历代人物传记资料库：王辯（CBDB 700887）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=700887&o=json)
- [中国历代人物传记资料库：王文紀（CBDB 700895）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=700895&o=json)
