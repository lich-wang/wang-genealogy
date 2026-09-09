---
schema: wang-person/v1
id: p_inHRkJpeuxanq9B23SeqGp
status: active
merged_into: null
display_name: 王履亨
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AW985PiE5GA9edzVw54XZ7
        subject_person_id: p_inHRkJpeuxanq9B23SeqGp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王履亨
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_m8JZEhEnEbL1ySuiQLX9i3
          claim_id: c_AW985PiE5GA9edzVw54XZ7
          source_id: s_jQ9Z6Ea8sTqBc3omc39E2T
          stance: supports
          locator: CBDB:69459
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（69459）
          source: &a1
            id: s_jQ9Z6Ea8sTqBc3omc39E2T
            source_type: api_record
            title: 中国历代人物传记资料库：王履亨（CBDB 69459）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69459&o=json
            external_identifier: CBDB:69459
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.279Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_sg1wWnArMwGwC525VcLt7N
        subject_person_id: p_inHRkJpeuxanq9B23SeqGp
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1844年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_damYfAGutYmxQFAwaR1WcE
          claim_id: c_sg1wWnArMwGwC525VcLt7N
          source_id: s_jQ9Z6Ea8sTqBc3omc39E2T
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1gCm4jXG7oqS8EaRi2AP2S
        subject_person_id: p_inHRkJpeuxanq9B23SeqGp
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
        - id: cs_BHARcVH3eKKAj2aPycrSGu
          claim_id: c_1gCm4jXG7oqS8EaRi2AP2S
          source_id: s_jQ9Z6Ea8sTqBc3omc39E2T
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

# 王履亨

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王履亨 | accepted |
| birth.date | 1844年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王履亨（CBDB 69459）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69459&o=json)
