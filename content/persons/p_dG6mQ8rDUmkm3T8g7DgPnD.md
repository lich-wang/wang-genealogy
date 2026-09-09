---
schema: wang-person/v1
id: p_dG6mQ8rDUmkm3T8g7DgPnD
status: active
merged_into: null
display_name: 王素
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_WyZFVNruuDYqHkPxzhaVnG
        subject_person_id: p_dG6mQ8rDUmkm3T8g7DgPnD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王素
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_nTU7C9NWCVuBZG37YSK2KY
          claim_id: c_WyZFVNruuDYqHkPxzhaVnG
          source_id: s_hUrucqoBAom2cjDzWxaG65
          stance: supports
          locator: CBDB:304954
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（304954）
          source: &a1
            id: s_hUrucqoBAom2cjDzWxaG65
            source_type: api_record
            title: 中国历代人物传记资料库：王素（CBDB 304954）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304954&o=json
            external_identifier: CBDB:304954
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.736Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PoMdFb9RHY12SE521wqDmw
        subject_person_id: p_dG6mQ8rDUmkm3T8g7DgPnD
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
        - id: cs_EQPTqtAMMKKsjXmTuyKxTS
          claim_id: c_PoMdFb9RHY12SE521wqDmw
          source_id: s_hUrucqoBAom2cjDzWxaG65
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

# 王素

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王素 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王素（CBDB 304954）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304954&o=json)
