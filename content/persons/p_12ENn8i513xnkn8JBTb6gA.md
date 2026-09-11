---
schema: wang-person/v1
id: p_12ENn8i513xnkn8JBTb6gA
status: active
merged_into: null
display_name: 王溥
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_U7vQTEvEPJU8Yc6SUp5fsX
        subject_person_id: p_12ENn8i513xnkn8JBTb6gA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王溥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_fnZUnGWRsLJKAEK6dprKqc
          claim_id: c_U7vQTEvEPJU8Yc6SUp5fsX
          source_id: s_F3UPSz5VW8gNYjakcLBu2F
          stance: supports
          locator: CBDB:209008
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（209008）
          source: &a1
            id: s_F3UPSz5VW8gNYjakcLBu2F
            source_type: api_record
            title: 中国历代人物传记资料库：王溥（CBDB 209008）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209008&o=json
            external_identifier: CBDB:209008
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.972Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Hnyp3d3WiHUPJnd9a2UKn6
        subject_person_id: p_12ENn8i513xnkn8JBTb6gA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王溥，明人物。隆慶五年進士，入仕考上會試/貢士。（中国历代人物传记资料库 CBDB 209008）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_bkCJfpz-G-K8vXV63FEsOV
          claim_id: c_Hnyp3d3WiHUPJnd9a2UKn6
          source_id: s_F3UPSz5VW8gNYjakcLBu2F
          stance: supports
          locator: CBDB:209008
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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
        id: c_0-gHK5Oo6UfXURvKwxT8uO
        subject_person_id: p_12ENn8i513xnkn8JBTb6gA
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_WpmK1LLF92wQ4nu3TJsJw7
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ygh185pQ7kO2FiufdgFdc3
          claim_id: c_0-gHK5Oo6UfXURvKwxT8uO
          source_id: s_F3UPSz5VW8gNYjakcLBu2F
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第二十名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_WpmK1LLF92wQ4nu3TJsJw7
        status: active
        display_name: 王庭
        merged_into_person_id: null
  other: []
---

# 王溥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王溥 | accepted |
| bio.summary | 王溥，明人物。隆慶五年進士，入仕考上會試/貢士。（中国历代人物传记资料库 CBDB 209008） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_WpmK1LLF92wQ4nu3TJsJw7 | 王庭 | accepted |

## 外部来源

- [中国历代人物传记资料库：王溥（CBDB 209008）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209008&o=json)
