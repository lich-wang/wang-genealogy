---
schema: wang-person/v1
id: p_MBrPDvYR34aq1wQnSM6vm3
status: active
merged_into: null
display_name: 王才傑
cbdb_id: 261596
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KZfXqMh6F2FwbXQXdcMoUd
        subject_person_id: p_MBrPDvYR34aq1wQnSM6vm3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王才傑，明人物。弘治三年進士。（中国历代人物传记资料库 CBDB 261596）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_ISBIABi0HZ0X6aDML3br1-
          claim_id: c_KZfXqMh6F2FwbXQXdcMoUd
          source_id: s_Pu3hwbRB8d9afw7MPV3Jw8
          stance: supports
          locator: CBDB:261596
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_Pu3hwbRB8d9afw7MPV3Jw8
            source_type: api_record
            title: 中国历代人物传记资料库：王才傑（CBDB 261596）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261596&o=json
            external_identifier: CBDB:261596
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:00.581Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_8t3e5KdKqqVS8p46kUH95U
        subject_person_id: p_MBrPDvYR34aq1wQnSM6vm3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王才傑
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_m9pocakFN2WhNC4Knm5boh
          claim_id: c_8t3e5KdKqqVS8p46kUH95U
          source_id: s_Pu3hwbRB8d9afw7MPV3Jw8
          stance: supports
          locator: CBDB:261596
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3001-3100）｜历史性依据：CBDB 朝代 = 明
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
        id: c_L8c3QA3vt5b6K0CfxAN1Bc
        subject_person_id: p_MBrPDvYR34aq1wQnSM6vm3
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_S9XZsVMSPPCYHPg3x3s7jm
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4jf2Be_8JXx8rjcvpQJdRL
          claim_id: c_L8c3QA3vt5b6K0CfxAN1Bc
          source_id: s_Pu3hwbRB8d9afw7MPV3Jw8
          stance: supports
          locator: 弘治三年進士登科錄:一卷，第二甲第七十名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Pu3hwbRB8d9afw7MPV3Jw8
            source_type: api_record
            title: 中国历代人物传记资料库：王才傑（CBDB 261596）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261596&o=json
            external_identifier: CBDB:261596
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:00.581Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_S9XZsVMSPPCYHPg3x3s7jm
        status: active
        display_name: 王彥奇
        merged_into_person_id: null
  other: []
---

# 王才傑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王才傑，明人物。弘治三年進士。（中国历代人物传记资料库 CBDB 261596） | accepted |
| name.primary | 王才傑 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_S9XZsVMSPPCYHPg3x3s7jm | 王彥奇 | accepted |

## 外部来源

- [中国历代人物传记资料库：王才傑（CBDB 261596）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261596&o=json)
