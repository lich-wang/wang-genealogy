---
schema: wang-person/v1
id: p_j4JnCmRKYH94287C5o7uex
status: active
merged_into: null
display_name: 王玄
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_WoMV4L4ZnJmeK4wNexbR9E
        subject_person_id: p_j4JnCmRKYH94287C5o7uex
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玄
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_TRk27AjTUrB8C7vZnX2JH1
          claim_id: c_WoMV4L4ZnJmeK4wNexbR9E
          source_id: s_atZTZHBrHbzruTPYSJzGxJ
          stance: supports
          locator: CBDB:273124
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（273124）
          source: &a1
            id: s_atZTZHBrHbzruTPYSJzGxJ
            source_type: api_record
            title: 中国历代人物传记资料库：王玄（CBDB 273124）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273124&o=json
            external_identifier: CBDB:273124
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.896Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5LeBJYU1eTQKq4uF3tDzEJ
        subject_person_id: p_j4JnCmRKYH94287C5o7uex
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
        - id: cs_vEMPL6K99tc4v9Wou61NMq
          claim_id: c_5LeBJYU1eTQKq4uF3tDzEJ
          source_id: s_atZTZHBrHbzruTPYSJzGxJ
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
        id: c_Bw9qux3nhRdHE9NqJCe7SA
        subject_person_id: p_j4JnCmRKYH94287C5o7uex
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_WrcoN9CL6jsGtB4NtmzaYe
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Jt5x5uMzL5JxX852JkN_Rv
          claim_id: c_Bw9qux3nhRdHE9NqJCe7SA
          source_id: s_atZTZHBrHbzruTPYSJzGxJ
          stance: supports
          locator: 弘治十八年進士登科錄:一卷，第二甲第四十四名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_WrcoN9CL6jsGtB4NtmzaYe
        status: active
        display_name: 王良翰
        merged_into_person_id: null
  other: []
---

# 王玄

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王玄 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_WrcoN9CL6jsGtB4NtmzaYe | 王良翰 | accepted |

## 外部来源

- [中国历代人物传记资料库：王玄（CBDB 273124）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273124&o=json)
