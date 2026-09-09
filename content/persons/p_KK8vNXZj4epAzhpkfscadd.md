---
schema: wang-person/v1
id: p_KK8vNXZj4epAzhpkfscadd
status: active
merged_into: null
display_name: 王士珪
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_fUhvqF6NL94i6mTH9U6776
        subject_person_id: p_KK8vNXZj4epAzhpkfscadd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士珪
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_eRic4rKx4vhUC4DsyD4vWF
          claim_id: c_fUhvqF6NL94i6mTH9U6776
          source_id: s_aj2bpvK3RYzoft4W5D6CQJ
          stance: supports
          locator: CBDB:570980
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（570980）
          source: &a1
            id: s_aj2bpvK3RYzoft4W5D6CQJ
            source_type: api_record
            title: 中国历代人物传记资料库：王士珪（CBDB 570980）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=570980&o=json
            external_identifier: CBDB:570980
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.646Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2WB7hjk2nATwiHMQLhxD1e
        subject_person_id: p_KK8vNXZj4epAzhpkfscadd
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
        - id: cs_9MHon71Tv5nUUTynARp5E1
          claim_id: c_2WB7hjk2nATwiHMQLhxD1e
          source_id: s_aj2bpvK3RYzoft4W5D6CQJ
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

# 王士珪

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王士珪 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王士珪（CBDB 570980）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=570980&o=json)
