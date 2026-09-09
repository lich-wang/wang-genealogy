---
schema: wang-person/v1
id: p_aJ6dFMrJQKZUqLWbp4A5nQ
status: active
merged_into: null
display_name: 王𥳑
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_cbpAVqa26Xphf6gVyocwD9
        subject_person_id: p_aJ6dFMrJQKZUqLWbp4A5nQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王𥳑
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qUG4GK82D4yf1fE6BdcRA5
          claim_id: c_cbpAVqa26Xphf6gVyocwD9
          source_id: s_n9cdZLkSwHXawev13XXDeX
          stance: supports
          locator: CBDB:689941
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（689941）
          source: &a1
            id: s_n9cdZLkSwHXawev13XXDeX
            source_type: api_record
            title: 中国历代人物传记资料库：王𥳑（CBDB 689941）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=689941&o=json
            external_identifier: CBDB:689941
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.479Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Mktbs7UgUCcpLByqNA4HVS
        subject_person_id: p_aJ6dFMrJQKZUqLWbp4A5nQ
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
        - id: cs_ELvj6JoMFUjNQpKFBb1Bjb
          claim_id: c_Mktbs7UgUCcpLByqNA4HVS
          source_id: s_n9cdZLkSwHXawev13XXDeX
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

# 王𥳑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王𥳑 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王𥳑（CBDB 689941）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=689941&o=json)
