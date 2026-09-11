---
schema: wang-person/v1
id: p_7iitVAMc3DKp3oMEVJh77W
status: active
merged_into: null
display_name: 王能
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_jS33zdECs8tje6jGM6wBqN
        subject_person_id: p_7iitVAMc3DKp3oMEVJh77W
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王能
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_AV6xQV4ZQq31FPxqcMFiNd
          claim_id: c_jS33zdECs8tje6jGM6wBqN
          source_id: s_nWM2yTRXMjw7b8yX7AKvg8
          stance: supports
          locator: CBDB:255754
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（255754）
          source: &a1
            id: s_nWM2yTRXMjw7b8yX7AKvg8
            source_type: api_record
            title: 中国历代人物传记资料库：王能（CBDB 255754）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255754&o=json
            external_identifier: CBDB:255754
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.350Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_dKfDKMS7C3p65EPW5M3xhq
        subject_person_id: p_7iitVAMc3DKp3oMEVJh77W
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HoRDAgxwnB6quoNKSwuvgH
          claim_id: c_dKfDKMS7C3p65EPW5M3xhq
          source_id: s_nWM2yTRXMjw7b8yX7AKvg8
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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
        id: c_Mj9NhUOZ1oLhNoCbcMtLby
        subject_person_id: p_7iitVAMc3DKp3oMEVJh77W
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_qcp613MEZvW9QYvDGgbu1f
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GwXvgwZkOyrbLT78ssoJgW
          claim_id: c_Mj9NhUOZ1oLhNoCbcMtLby
          source_id: s_nWM2yTRXMjw7b8yX7AKvg8
          stance: supports
          locator: 成化十七年進士登科錄:一卷，第三甲第十四名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_qcp613MEZvW9QYvDGgbu1f
        status: active
        display_name: 王寅
        merged_into_person_id: null
  other: []
---

# 王能

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王能 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_qcp613MEZvW9QYvDGgbu1f | 王寅 | accepted |

## 外部来源

- [中国历代人物传记资料库：王能（CBDB 255754）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255754&o=json)
