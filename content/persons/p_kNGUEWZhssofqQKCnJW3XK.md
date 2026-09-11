---
schema: wang-person/v1
id: p_kNGUEWZhssofqQKCnJW3XK
status: active
merged_into: null
display_name: 王啟芳
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Nh78BSmR6w48VejdQmo8VX
        subject_person_id: p_kNGUEWZhssofqQKCnJW3XK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王啟芳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KB42tyJ1NoQb63d6a9HCXt
          claim_id: c_Nh78BSmR6w48VejdQmo8VX
          source_id: s_Wz1kXuQmT7igr9a14dVx8h
          stance: supports
          locator: CBDB:215722
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（215722）
          source: &a1
            id: s_Wz1kXuQmT7igr9a14dVx8h
            source_type: api_record
            title: 中国历代人物传记资料库：王啟芳（CBDB 215722）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215722&o=json
            external_identifier: CBDB:215722
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.190Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Z2GjoAfu9M6n8QYR3ghMz3
        subject_person_id: p_kNGUEWZhssofqQKCnJW3XK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王啟芳，明人物。萬曆五年進士，籍贯華亭。（中国历代人物传记资料库 CBDB 215722）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_RI-BMn7iScdRpdODlp0Wom
          claim_id: c_Z2GjoAfu9M6n8QYR3ghMz3
          source_id: s_Wz1kXuQmT7igr9a14dVx8h
          stance: supports
          locator: CBDB:215722
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_1SDMDxaR_1zvLS2HdPCX_9
        subject_person_id: p_kNGUEWZhssofqQKCnJW3XK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_P7cZrKpwh44EGMwMKR3XMy
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5QaEATmyy8kHc2KZjMRtte
          claim_id: c_1SDMDxaR_1zvLS2HdPCX_9
          source_id: s_Wz1kXuQmT7igr9a14dVx8h
          stance: supports
          locator: 萬曆五年進士登科錄:一卷，第二甲第二十四名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_P7cZrKpwh44EGMwMKR3XMy
        status: active
        display_name: 王明時
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王啟芳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王啟芳 | accepted |
| bio.summary | 王啟芳，明人物。萬曆五年進士，籍贯華亭。（中国历代人物传记资料库 CBDB 215722） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_P7cZrKpwh44EGMwMKR3XMy | 王明時 | accepted |

## 外部来源

- [中国历代人物传记资料库：王啟芳（CBDB 215722）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215722&o=json)
