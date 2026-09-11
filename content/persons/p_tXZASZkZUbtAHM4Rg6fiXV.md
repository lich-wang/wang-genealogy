---
schema: wang-person/v1
id: p_tXZASZkZUbtAHM4Rg6fiXV
status: active
merged_into: null
display_name: 王逢年
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_WsnNqUAfNEe9QdvQewWuKX
        subject_person_id: p_tXZASZkZUbtAHM4Rg6fiXV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王逢年
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_x39c4nNRa4WdQUTt6u3jYf
          claim_id: c_WsnNqUAfNEe9QdvQewWuKX
          source_id: s_2amJnBHLFEU78yAFc6hn52
          stance: supports
          locator: CBDB:126693
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126693）
          source: &a1
            id: s_2amJnBHLFEU78yAFc6hn52
            source_type: api_record
            title: 中国历代人物传记资料库：王逢年（CBDB 126693）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126693&o=json
            external_identifier: CBDB:126693
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.130Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_yWodEFSJ6REgQ5LtHpsns8
        subject_person_id: p_tXZASZkZUbtAHM4Rg6fiXV
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
        - id: cs_L4YQLrjDmUojG8N7sr1PP4
          claim_id: c_yWodEFSJ6REgQ5LtHpsns8
          source_id: s_2amJnBHLFEU78yAFc6hn52
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_yd2bB5x4FLIJRA-0Y23OYs
        subject_person_id: p_uQx6CsD653L6hRpaz3mPf9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_tXZASZkZUbtAHM4Rg6fiXV
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zgSnWnBzxgTRzGobq79NXg
          claim_id: c_yd2bB5x4FLIJRA-0Y23OYs
          source_id: s_2amJnBHLFEU78yAFc6hn52
          stance: supports
          locator: 江南通志，lgid=65724：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_uQx6CsD653L6hRpaz3mPf9
        status: active
        display_name: 王同祖
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王逢年

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王逢年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_uQx6CsD653L6hRpaz3mPf9 | 王同祖 | accepted |

## 外部来源

- [中国历代人物传记资料库：王逢年（CBDB 126693）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126693&o=json)
