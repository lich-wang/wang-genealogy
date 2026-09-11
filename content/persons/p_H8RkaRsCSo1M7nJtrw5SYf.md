---
schema: wang-person/v1
id: p_H8RkaRsCSo1M7nJtrw5SYf
status: active
merged_into: null
display_name: 王簡
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3pwavGKxr19fjEHef8G8RY
        subject_person_id: p_H8RkaRsCSo1M7nJtrw5SYf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王簡
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_L2re32D19FEVm4a8K28XcJ
          claim_id: c_3pwavGKxr19fjEHef8G8RY
          source_id: s_Ufw49Up1CMm6fehnFELy8S
          stance: supports
          locator: CBDB:159953
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（159953）
          source: &a1
            id: s_Ufw49Up1CMm6fehnFELy8S
            source_type: api_record
            title: 中国历代人物传记资料库：王簡（CBDB 159953）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=159953&o=json
            external_identifier: CBDB:159953
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.936Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_obTBnQP7UbCpKS4e1QyNp3
        subject_person_id: p_H8RkaRsCSo1M7nJtrw5SYf
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mHFNqNhi5mAfKRwWgDVoHo
          claim_id: c_obTBnQP7UbCpKS4e1QyNp3
          source_id: s_Ufw49Up1CMm6fehnFELy8S
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
        id: c_hotDnTRPO_dSrBfedzKyiy
        subject_person_id: p_H8RkaRsCSo1M7nJtrw5SYf
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_buHPPD7o3Zg7opBbsnKMQ6
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8KMd_wfA1sA6S7DzhLUm8e
          claim_id: c_hotDnTRPO_dSrBfedzKyiy
          source_id: s_996GfbKAQ5DEPwFZuhv8rv
          stance: supports
          locator: 唐代墓誌匯編:二卷，Dazhong 148：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_996GfbKAQ5DEPwFZuhv8rv
            source_type: api_record
            title: 中国历代人物传记资料库：王公素（CBDB 141742）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141742&o=json
            external_identifier: CBDB:141742
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.566Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_buHPPD7o3Zg7opBbsnKMQ6
        status: active
        display_name: 王公素
        merged_into_person_id: null
  other: []
---

# 王簡

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王簡 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_buHPPD7o3Zg7opBbsnKMQ6 | 王公素 | accepted |

## 外部来源

- [中国历代人物传记资料库：王公素（CBDB 141742）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141742&o=json)
- [中国历代人物传记资料库：王簡（CBDB 159953）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=159953&o=json)
