---
schema: wang-person/v1
id: p_3JiQe736DDPqYdSMXgoqKS
status: active
merged_into: null
display_name: 李氏
revision: 1
cbdb_id: 386288
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9IK_fsGDnMMbnvotJ75rY6
        subject_person_id: p_3JiQe736DDPqYdSMXgoqKS
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 李氏，史料所见人物。本项目依据《中国历代人物传记资料库：李氏(王桂妻)（CBDB 386288）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xPhaBiSJdsxxFyLgqz7UP6
          claim_id: c_9IK_fsGDnMMbnvotJ75rY6
          source_id: s_DyiTXTp6DtYgjZvOC6DqEL
          stance: supports
          locator: CBDB:386288
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_DyiTXTp6DtYgjZvOC6DqEL
            source_type: api_record
            title: 中国历代人物传记资料库：李氏(王桂妻)（CBDB 386288）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=386288&o=json
            external_identifier: CBDB:386288
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_QhHVt3B25c6Cd5EjP9Jrcz
        subject_person_id: p_3JiQe736DDPqYdSMXgoqKS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 李氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gxRbcj8cgAoepHAE5X0BAB
          claim_id: c_QhHVt3B25c6Cd5EjP9Jrcz
          source_id: s_DyiTXTp6DtYgjZvOC6DqEL
          stance: supports
          locator: CBDB:386288
          quotation: null
          interpretation_note: CBDB 明确记录的王桂配偶
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
        id: c_o0cBDFu7AhrUXaxwwh_61o
        subject_person_id: p_wKfvgdvNixuHKZaA84Vuyy
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_3JiQe736DDPqYdSMXgoqKS
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qrOCu_Q9C-rpFfsFuqCoSX
          claim_id: c_o0cBDFu7AhrUXaxwwh_61o
          source_id: s_DyiTXTp6DtYgjZvOC6DqEL
          stance: supports
          locator: CBDB 双向互证（妻子 李氏(王桂妻)）
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_wKfvgdvNixuHKZaA84Vuyy
        status: active
        display_name: 王桂
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 李氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 李氏，史料所见人物。本项目依据《中国历代人物传记资料库：李氏(王桂妻)（CBDB 386288）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 李氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_wKfvgdvNixuHKZaA84Vuyy | 王桂 | accepted |

## 外部来源

- [中国历代人物传记资料库：李氏(王桂妻)（CBDB 386288）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=386288&o=json)
