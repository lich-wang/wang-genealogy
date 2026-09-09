---
schema: wang-person/v1
id: p_gbG7ApcEri2g2HbS3ANnzm
status: active
merged_into: null
display_name: 王聰
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_eG29yCPX953ktN4EpSoyQE
        subject_person_id: p_gbG7ApcEri2g2HbS3ANnzm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王聰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_p29B4Z7nG4FM5dYvJHu39S
          claim_id: c_eG29yCPX953ktN4EpSoyQE
          source_id: s_iBbxjufT1X6mwQgfbKZuyQ
          stance: supports
          locator: CBDB:245241
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（245241）
          source: &a1
            id: s_iBbxjufT1X6mwQgfbKZuyQ
            source_type: api_record
            title: 中国历代人物传记资料库：王聰（CBDB 245241）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245241&o=json
            external_identifier: CBDB:245241
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.056Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hEBFvW1SZAyTe2mVoR41ci
        subject_person_id: p_gbG7ApcEri2g2HbS3ANnzm
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
        - id: cs_MQHwQ2VhXXtbF1pM5Q36FD
          claim_id: c_hEBFvW1SZAyTe2mVoR41ci
          source_id: s_iBbxjufT1X6mwQgfbKZuyQ
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

# 王聰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王聰 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王聰（CBDB 245241）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245241&o=json)
