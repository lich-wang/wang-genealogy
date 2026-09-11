---
schema: wang-person/v1
id: p_MCutbyvi1BeB1uNuEEF1Tp
status: active
merged_into: null
display_name: 王廷陞
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Sjgx36k9ah9LmDcZM6CY1G
        subject_person_id: p_MCutbyvi1BeB1uNuEEF1Tp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷陞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_hCcgL7sHAD9d5wZC1KF97K
          claim_id: c_Sjgx36k9ah9LmDcZM6CY1G
          source_id: s_nLQZxLJnyJV64ya3xQi6Np
          stance: supports
          locator: CBDB:691659
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（691659）
          source: &a1
            id: s_nLQZxLJnyJV64ya3xQi6Np
            source_type: api_record
            title: 中国历代人物传记资料库：王廷陞（CBDB 691659）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=691659&o=json
            external_identifier: CBDB:691659
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.620Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9CYrPr1YnPjp3ARdA9BGVR
        subject_person_id: p_MCutbyvi1BeB1uNuEEF1Tp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vkZS7WSQVKpAWsV49Cw8xM
          claim_id: c_9CYrPr1YnPjp3ARdA9BGVR
          source_id: s_nLQZxLJnyJV64ya3xQi6Np
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_71pzSJCZamLBogxzWXw69F
        subject_person_id: p_MCutbyvi1BeB1uNuEEF1Tp
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_eUmtuNNbB8F8KL1nKF31rD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IMzyK0ndrUWdlkRp4cvcNO
          claim_id: c_71pzSJCZamLBogxzWXw69F
          source_id: s_2T8zpJWX5dQNPTQi99QWzz
          stance: supports
          locator: (道光)徽州府志:十六卷卷首一卷，lgid=1160833：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_2T8zpJWX5dQNPTQi99QWzz
            source_type: api_record
            title: 中国历代人物传记资料库：王大成（CBDB 691540）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=691540&o=json
            external_identifier: CBDB:691540
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.612Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_eUmtuNNbB8F8KL1nKF31rD
        status: active
        display_name: 王大成
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王廷陞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廷陞 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_eUmtuNNbB8F8KL1nKF31rD | 王大成 | accepted |

## 外部来源

- [中国历代人物传记资料库：王大成（CBDB 691540）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=691540&o=json)
- [中国历代人物传记资料库：王廷陞（CBDB 691659）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=691659&o=json)
