---
schema: wang-person/v1
id: p_p9mzdy1irhE4XfhGMPnKSu
status: active
merged_into: null
display_name: 王愔
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3T5fh95qkcCQq89LuTBC5f
        subject_person_id: p_p9mzdy1irhE4XfhGMPnKSu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王愔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_gPg12irnLPLXCAM885JN8G
          claim_id: c_3T5fh95qkcCQq89LuTBC5f
          source_id: s_6BM1sPCB7rTF8GuhMnFJLY
          stance: supports
          locator: CBDB:150818
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（150818）
          source: &a1
            id: s_6BM1sPCB7rTF8GuhMnFJLY
            source_type: api_record
            title: 中国历代人物传记资料库：王愔（CBDB 150818）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=150818&o=json
            external_identifier: CBDB:150818
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.828Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BnXeNjhMjEe2qQYn6MfyJR
        subject_person_id: p_p9mzdy1irhE4XfhGMPnKSu
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
        - id: cs_CSrjfvsPTC7WRKjRpufVCP
          claim_id: c_BnXeNjhMjEe2qQYn6MfyJR
          source_id: s_6BM1sPCB7rTF8GuhMnFJLY
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

# 王愔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王愔 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王愔（CBDB 150818）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=150818&o=json)
