---
schema: wang-person/v1
id: p_2hYFczFXSMMXJ25M18ZPJD
status: active
merged_into: null
display_name: 王乂衡
cbdb_id: 264447
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_UF4HVLkejiTxZFhbmbMae4
        subject_person_id: p_2hYFczFXSMMXJ25M18ZPJD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王乂衡，史料所见人物。本项目依据《中国历代人物传记资料库：王乂衡（CBDB 264447）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_LrWIliWSVGCphoZITulwZw
          claim_id: c_UF4HVLkejiTxZFhbmbMae4
          source_id: s_H8haDxmhkZnrpPHJ6M7d2i
          stance: supports
          locator: CBDB:264447
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_H8haDxmhkZnrpPHJ6M7d2i
            source_type: api_record
            title: 中国历代人物传记资料库：王乂衡（CBDB 264447）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264447&o=json
            external_identifier: CBDB:264447
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:01.428Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_QmsnvTJpAc3DSHYJ7FGDHK
        subject_person_id: p_2hYFczFXSMMXJ25M18ZPJD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王乂衡
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_oSU1M2zuJV2GrKwc38nSpp
          claim_id: c_QmsnvTJpAc3DSHYJ7FGDHK
          source_id: s_H8haDxmhkZnrpPHJ6M7d2i
          stance: supports
          locator: CBDB:264447
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3101-3200）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_uDkGDF4HH4xoypvFieCHEJ
        subject_person_id: p_2hYFczFXSMMXJ25M18ZPJD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_tcnRstaNUF5RMY944rGoMz
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gXPoaC1DPdGnjaeB_NLQI-
          claim_id: c_uDkGDF4HH4xoypvFieCHEJ
          source_id: s_H8haDxmhkZnrpPHJ6M7d2i
          stance: supports
          locator: 弘治六年進士登科錄:一卷，第二甲第六十二名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_H8haDxmhkZnrpPHJ6M7d2i
            source_type: api_record
            title: 中国历代人物传记资料库：王乂衡（CBDB 264447）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264447&o=json
            external_identifier: CBDB:264447
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:01.428Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_tcnRstaNUF5RMY944rGoMz
        status: active
        display_name: 王大用
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王乂衡

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王乂衡，史料所见人物。本项目依据《中国历代人物传记资料库：王乂衡（CBDB 264447）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王乂衡 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_tcnRstaNUF5RMY944rGoMz | 王大用 | accepted |

## 外部来源

- [中国历代人物传记资料库：王乂衡（CBDB 264447）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264447&o=json)
