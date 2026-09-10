---
schema: wang-person/v1
id: p_jhGmz5PBmstGBfB54XPkH7
status: active
merged_into: null
display_name: 王重
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_oKnGwLz2J3695y1uidT856
        subject_person_id: p_jhGmz5PBmstGBfB54XPkH7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王重
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4LpJPtcFsBXQdSFKxKJZ2F
          claim_id: c_oKnGwLz2J3695y1uidT856
          source_id: s_8KQXdAGUQNLSGE52uUZPXp
          stance: supports
          locator: CBDB:175706
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175706）
          source: &a1
            id: s_8KQXdAGUQNLSGE52uUZPXp
            source_type: api_record
            title: 中国历代人物传记资料库：王重（CBDB 175706）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175706&o=json
            external_identifier: CBDB:175706
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.067Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_iKDVCA6UkQXvDPoNHmNhFE
        subject_person_id: p_jhGmz5PBmstGBfB54XPkH7
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 804年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pdE2TtSbR4bY6RLoqEvN2B
          claim_id: c_iKDVCA6UkQXvDPoNHmNhFE
          source_id: s_8KQXdAGUQNLSGE52uUZPXp
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JRhWezzFPkesjbbf9qeB8D
        subject_person_id: p_jhGmz5PBmstGBfB54XPkH7
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
        - id: cs_wwW23DboqYHMM8QDLHRAFz
          claim_id: c_JRhWezzFPkesjbbf9qeB8D
          source_id: s_8KQXdAGUQNLSGE52uUZPXp
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
        id: c_Tf6I7JGIrKIKyioYLxiezE
        subject_person_id: p_jhGmz5PBmstGBfB54XPkH7
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_151uuMUSjiwaW5J3ojMDHN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vCVQhAh8waEdKQijhmwTWu
          claim_id: c_Tf6I7JGIrKIKyioYLxiezE
          source_id: s_HATxY3Z3SoqUg3tZsxTGNh
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)，R 8112：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_HATxY3Z3SoqUg3tZsxTGNh
            source_type: api_record
            title: 中国历代人物传记资料库：王君仲（CBDB 175708）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175708&o=json
            external_identifier: CBDB:175708
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.069Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_151uuMUSjiwaW5J3ojMDHN
        status: active
        display_name: 王君仲
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王重

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王重 | accepted |
| death.date | 804年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_151uuMUSjiwaW5J3ojMDHN | 王君仲 | accepted |

## 外部来源

- [中国历代人物传记资料库：王君仲（CBDB 175708）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175708&o=json)
- [中国历代人物传记资料库：王重（CBDB 175706）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175706&o=json)
