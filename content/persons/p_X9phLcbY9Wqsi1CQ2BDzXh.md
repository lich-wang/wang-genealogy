---
schema: wang-person/v1
id: p_X9phLcbY9Wqsi1CQ2BDzXh
status: active
merged_into: null
display_name: 王利謙
cbdb_id: 100173
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DDjfbQYDA3pRAMBDSbisWG
        subject_person_id: p_X9phLcbY9Wqsi1CQ2BDzXh
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王利謙，史料所见人物。本项目依据《中国历代人物传记资料库：王利謙（CBDB 100173）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_B_CISDPDMoklU0fCo_IB6C
          claim_id: c_DDjfbQYDA3pRAMBDSbisWG
          source_id: s_LKvsW29DXaHarCa8nweFRz
          stance: supports
          locator: CBDB:100173
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_LKvsW29DXaHarCa8nweFRz
            source_type: api_record
            title: 中国历代人物传记资料库：王利謙（CBDB 100173）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100173&o=json
            external_identifier: CBDB:100173
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:49.564Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_HADdTPhi48aoN6HRP9XxMY
        subject_person_id: p_X9phLcbY9Wqsi1CQ2BDzXh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王利謙
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_EsRC9QnZMa78ghpjEeXZSE
          claim_id: c_HADdTPhi48aoN6HRP9XxMY
          source_id: s_LKvsW29DXaHarCa8nweFRz
          stance: supports
          locator: CBDB:100173
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1601-1700）｜历史性依据：CBDB 朝代 = 清
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c__CZjzaTLrxCiI_r-35CYTd
        subject_person_id: p_nMGCJmQq2Zcy4irJuKbEXy
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_X9phLcbY9Wqsi1CQ2BDzXh
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_H6nRJeye-MHuJthvJpwfEF
          claim_id: c__CZjzaTLrxCiI_r-35CYTd
          source_id: s_camKSGdFC6NkAHaT57S6W8
          stance: supports
          locator: 吳門補乘，lgid=177497：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_camKSGdFC6NkAHaT57S6W8
            source_type: api_record
            title: 中国历代人物传记资料库：王遇亨（CBDB 640432）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640432&o=json
            external_identifier: CBDB:640432
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.260Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_nMGCJmQq2Zcy4irJuKbEXy
        status: active
        display_name: 王遇亨
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王利謙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王利謙，史料所见人物。本项目依据《中国历代人物传记资料库：王利謙（CBDB 100173）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王利謙 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_nMGCJmQq2Zcy4irJuKbEXy | 王遇亨 | accepted |

## 外部来源

- [中国历代人物传记资料库：王利謙（CBDB 100173）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100173&o=json)
- [中国历代人物传记资料库：王遇亨（CBDB 640432）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640432&o=json)
