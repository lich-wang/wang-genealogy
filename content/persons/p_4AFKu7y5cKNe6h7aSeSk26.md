---
schema: wang-person/v1
id: p_4AFKu7y5cKNe6h7aSeSk26
status: active
merged_into: null
display_name: 王婢兒
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wmYsjQjtDkyUaDikCmjo5E
        subject_person_id: p_4AFKu7y5cKNe6h7aSeSk26
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王婢兒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9qWu3E2Q2KP4dZng93r5SE
          claim_id: c_wmYsjQjtDkyUaDikCmjo5E
          source_id: s_v9ruH9BS5qvkvSzL2gx5DB
          stance: supports
          locator: CBDB:696182
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（696182）
          source: &a1
            id: s_v9ruH9BS5qvkvSzL2gx5DB
            source_type: api_record
            title: 中国历代人物传记资料库：王婢兒（CBDB 696182）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=696182&o=json
            external_identifier: CBDB:696182
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.545Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5GGtHzGrhocPYNL5u1KWeU
        subject_person_id: p_4AFKu7y5cKNe6h7aSeSk26
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王婢兒，宋人物。籍贯上黨。（中国历代人物传记资料库 CBDB 696182）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_c9NVM6B1UvPBaYJB1YCuOy
          claim_id: c_5GGtHzGrhocPYNL5u1KWeU
          source_id: s_v9ruH9BS5qvkvSzL2gx5DB
          stance: supports
          locator: CBDB:696182
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_mYJDy-wlp3l7V-6wYImO9n
        subject_person_id: p_MRcNDk25WD9q2qKW2Sg6T2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4AFKu7y5cKNe6h7aSeSk26
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZIqfvTnZuXQQ9etFsxWKpf
          claim_id: c_mYJDy-wlp3l7V-6wYImO9n
          source_id: s_v9ruH9BS5qvkvSzL2gx5DB
          stance: supports
          locator: 新出宋代墓志碑刻輯錄，王誠墓誌：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_MRcNDk25WD9q2qKW2Sg6T2
        status: active
        display_name: 王誠
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王婢兒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王婢兒 | accepted |
| bio.summary | 王婢兒，宋人物。籍贯上黨。（中国历代人物传记资料库 CBDB 696182） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_MRcNDk25WD9q2qKW2Sg6T2 | 王誠 | accepted |

## 外部来源

- [中国历代人物传记资料库：王婢兒（CBDB 696182）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=696182&o=json)
