---
schema: wang-person/v1
id: p_rwqaM71TLacKY3Qhq8k9PP
status: active
merged_into: null
display_name: 王實
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_RkzABxY63kNkAy9VWgxmey
        subject_person_id: p_rwqaM71TLacKY3Qhq8k9PP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王實
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_frUuWvtA7gVdme2HJRCCUP
          claim_id: c_RkzABxY63kNkAy9VWgxmey
          source_id: s_N97amyXEiVtp9fTVJzsuBd
          stance: supports
          locator: CBDB:175888
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175888）
          source: &a1
            id: s_N97amyXEiVtp9fTVJzsuBd
            source_type: api_record
            title: 中国历代人物传记资料库：王實（CBDB 175888）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175888&o=json
            external_identifier: CBDB:175888
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.177Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_ZVLr5sJCkHLfsDS2Q12Kqd
        subject_person_id: p_rwqaM71TLacKY3Qhq8k9PP
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 724年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3a3CJtWD6Hnge5e5HRTKBu
          claim_id: c_ZVLr5sJCkHLfsDS2Q12Kqd
          source_id: s_N97amyXEiVtp9fTVJzsuBd
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
        id: c_LEQYZjwfbqbL2dik2Duazz
        subject_person_id: p_rwqaM71TLacKY3Qhq8k9PP
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
        - id: cs_JHjrx7iYJn1f71RR712G2W
          claim_id: c_LEQYZjwfbqbL2dik2Duazz
          source_id: s_N97amyXEiVtp9fTVJzsuBd
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
        id: c_k3E9CUx43lIyFjqAXQIrQ6
        subject_person_id: p_rwqaM71TLacKY3Qhq8k9PP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_aT36ZKtHXC6aAaFGz8ZxGj
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TKTKnToetZ0KmE9nZYV1Qv
          claim_id: c_k3E9CUx43lIyFjqAXQIrQ6
          source_id: s_6idbvdgTP8dUpYmnrUJYbr
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_6idbvdgTP8dUpYmnrUJYbr
            source_type: api_record
            title: 中国历代人物传记资料库：王祚（CBDB 175889）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175889&o=json
            external_identifier: CBDB:175889
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.178Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_aT36ZKtHXC6aAaFGz8ZxGj
        status: active
        display_name: 王祚
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王實

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王實 | accepted |
| death.date | 724年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_aT36ZKtHXC6aAaFGz8ZxGj | 王祚 | accepted |

## 外部来源

- [中国历代人物传记资料库：王實（CBDB 175888）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175888&o=json)
- [中国历代人物传记资料库：王祚（CBDB 175889）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175889&o=json)
