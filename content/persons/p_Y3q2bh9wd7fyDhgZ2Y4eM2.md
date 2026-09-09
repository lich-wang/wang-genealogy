---
schema: wang-person/v1
id: p_Y3q2bh9wd7fyDhgZ2Y4eM2
status: active
merged_into: null
display_name: 王皇后
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5vVCkQL2KTVpNBkqRQXBbE
        subject_person_id: p_Y3q2bh9wd7fyDhgZ2Y4eM2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王皇后
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PaAEZ8KBpxbcDoFKG8NYzJ
          claim_id: c_5vVCkQL2KTVpNBkqRQXBbE
          source_id: s_p7s8P1MPPi4nAo9HHgbpf6
          stance: supports
          locator: CBDB:445530
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（445530）
          source: &a1
            id: s_p7s8P1MPPi4nAo9HHgbpf6
            source_type: api_record
            title: 中国历代人物传记资料库：王皇后（CBDB 445530）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=445530&o=json
            external_identifier: CBDB:445530
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.155Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_tcjRUSjkr8RJ93AAnEpxA7
        subject_person_id: p_Y3q2bh9wd7fyDhgZ2Y4eM2
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
        - id: cs_H25ufHVu3Bmhb1vLdQfp9b
          claim_id: c_tcjRUSjkr8RJ93AAnEpxA7
          source_id: s_p7s8P1MPPi4nAo9HHgbpf6
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
  descendants: []
  other: []
---

# 王皇后

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王皇后 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王皇后（CBDB 445530）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=445530&o=json)
