---
schema: wang-person/v1
id: p_D5jXQ7gpJqhusGJmWVw9DK
status: active
merged_into: null
display_name: 王良臣
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_bsNkzA5Cq6weXCSRxdjwGf
        subject_person_id: p_D5jXQ7gpJqhusGJmWVw9DK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王良臣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DktPUNMtCersJHYXahQP6K
          claim_id: c_bsNkzA5Cq6weXCSRxdjwGf
          source_id: s_phpLxVrzzLFGn5M6pNoXaf
          stance: supports
          locator: CBDB:38959
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（38959）
          source: &a1
            id: s_phpLxVrzzLFGn5M6pNoXaf
            source_type: api_record
            title: 中国历代人物传记资料库：王良臣（CBDB 38959）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38959&o=json
            external_identifier: CBDB:38959
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.569Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_aUzcNFo65LrtMyCFrtGCjm
        subject_person_id: p_D5jXQ7gpJqhusGJmWVw9DK
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1211年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jFSXupSx64M3JXxaLMqQUB
          claim_id: c_aUzcNFo65LrtMyCFrtGCjm
          source_id: s_phpLxVrzzLFGn5M6pNoXaf
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
        id: c_gMmxGgp59eZ8ZHS32y2U59
        subject_person_id: p_D5jXQ7gpJqhusGJmWVw9DK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tpDy5rsxHN9dnonuNvFPxm
          claim_id: c_gMmxGgp59eZ8ZHS32y2U59
          source_id: s_phpLxVrzzLFGn5M6pNoXaf
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

# 王良臣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王良臣 | accepted |
| birth.date | 1211年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王良臣（CBDB 38959）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38959&o=json)
