---
schema: wang-person/v1
id: p_hUcqH8wEhAcTVtdJoniucN
status: active
merged_into: null
display_name: 王岳
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HBH6i93PGA4hB71BpDcp12
        subject_person_id: p_hUcqH8wEhAcTVtdJoniucN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王岳
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_F1MLXp9n8GJ5hRGQkvRaVS
          claim_id: c_HBH6i93PGA4hB71BpDcp12
          source_id: s_6QJAuYVA8nCPDs6LA6MCp3
          stance: supports
          locator: CBDB:483764
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（483764）
          source: &a1
            id: s_6QJAuYVA8nCPDs6LA6MCp3
            source_type: api_record
            title: 中国历代人物传记资料库：王岳（CBDB 483764）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=483764&o=json
            external_identifier: CBDB:483764
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.812Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MWuUcupkV85EnUt8AU2oZC
        subject_person_id: p_hUcqH8wEhAcTVtdJoniucN
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
        - id: cs_EebYqApoo7jJfeXKd4y3Aa
          claim_id: c_MWuUcupkV85EnUt8AU2oZC
          source_id: s_6QJAuYVA8nCPDs6LA6MCp3
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

# 王岳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王岳 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王岳（CBDB 483764）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=483764&o=json)
