---
schema: wang-person/v1
id: p_a1LW3UXAK9wc1CYVZCMEiP
status: active
merged_into: null
display_name: 王時敘
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_J4FoMVoQkK4P27qyCHMdJK
        subject_person_id: p_a1LW3UXAK9wc1CYVZCMEiP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王時敘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5RbdCT85LJyU2ETGT75NG3
          claim_id: c_J4FoMVoQkK4P27qyCHMdJK
          source_id: s_KHXBPjy6iND8ThURNAoaMK
          stance: supports
          locator: CBDB:216141
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（216141）
          source: &a1
            id: s_KHXBPjy6iND8ThURNAoaMK
            source_type: api_record
            title: 中国历代人物传记资料库：王時敘（CBDB 216141）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216141&o=json
            external_identifier: CBDB:216141
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.220Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_V4W9C4J3V7BAC3PXZ7rNdJ
        subject_person_id: p_a1LW3UXAK9wc1CYVZCMEiP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王時敘，明人物。萬曆五年進士，曾任陰陽官。（中国历代人物传记资料库 CBDB 216141）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_cPVaeREh_kEJHRyIJ5wBkB
          claim_id: c_V4W9C4J3V7BAC3PXZ7rNdJ
          source_id: s_KHXBPjy6iND8ThURNAoaMK
          stance: supports
          locator: CBDB:216141
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
        id: c_1UouO3_-a3aKACP-lE50NR
        subject_person_id: p_a1LW3UXAK9wc1CYVZCMEiP
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_QQuUCHcAyLfkuJKD8SYwNJ
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__0w5Z83BXV_7GiG1yFjnCH
          claim_id: c_1UouO3_-a3aKACP-lE50NR
          source_id: s_KHXBPjy6iND8ThURNAoaMK
          stance: supports
          locator: 萬曆五年進士登科錄:一卷，第三甲第五名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_QQuUCHcAyLfkuJKD8SYwNJ
        status: active
        display_name: 王繼光
        merged_into_person_id: null
  other: []
---

# 王時敘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王時敘 | accepted |
| bio.summary | 王時敘，明人物。萬曆五年進士，曾任陰陽官。（中国历代人物传记资料库 CBDB 216141） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_QQuUCHcAyLfkuJKD8SYwNJ | 王繼光 | accepted |

## 外部来源

- [中国历代人物传记资料库：王時敘（CBDB 216141）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216141&o=json)
