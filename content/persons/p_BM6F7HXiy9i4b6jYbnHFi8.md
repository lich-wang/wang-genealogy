---
schema: wang-person/v1
id: p_BM6F7HXiy9i4b6jYbnHFi8
status: active
merged_into: null
display_name: 王宰
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HfeMh4bbznp6zY64MJCP7r
        subject_person_id: p_BM6F7HXiy9i4b6jYbnHFi8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4B53zi95YuwfEdeZ1mMFcu
          claim_id: c_HfeMh4bbznp6zY64MJCP7r
          source_id: s_iuKCJ8aFT8NRixN7MKoPG7
          stance: supports
          locator: CBDB:378879
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（378879）
          source: &a1
            id: s_iuKCJ8aFT8NRixN7MKoPG7
            source_type: api_record
            title: 中国历代人物传记资料库：王宰（CBDB 378879）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=378879&o=json
            external_identifier: CBDB:378879
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.673Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_AiCGT7yCowhD5do7RdoS7Y
        subject_person_id: p_BM6F7HXiy9i4b6jYbnHFi8
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
        - id: cs_tZdkKaPKynigVLRVrs4qYj
          claim_id: c_AiCGT7yCowhD5do7RdoS7Y
          source_id: s_iuKCJ8aFT8NRixN7MKoPG7
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

# 王宰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宰 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王宰（CBDB 378879）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=378879&o=json)
