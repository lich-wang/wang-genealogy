---
schema: wang-person/v1
id: p_kiWfPSdqMP6VR37Vgw2hC3
status: active
merged_into: null
display_name: 王觀成
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_fhjR1hY8T9FmRyM7H3TgLu
        subject_person_id: p_kiWfPSdqMP6VR37Vgw2hC3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王觀成
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5qeRtHSeF5CL3YRvw2BDBS
          claim_id: c_fhjR1hY8T9FmRyM7H3TgLu
          source_id: s_9QH5drPA4UQntLwJW8CUgV
          stance: supports
          locator: CBDB:640250
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640250）
          source: &a1
            id: s_9QH5drPA4UQntLwJW8CUgV
            source_type: api_record
            title: 中国历代人物传记资料库：王觀成（CBDB 640250）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640250&o=json
            external_identifier: CBDB:640250
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.057Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9iwkTwNFmy1NFGzCSQPxhS
        subject_person_id: p_kiWfPSdqMP6VR37Vgw2hC3
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
        - id: cs_yk4oAjB4yxKx51LF4yQodn
          claim_id: c_9iwkTwNFmy1NFGzCSQPxhS
          source_id: s_9QH5drPA4UQntLwJW8CUgV
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

# 王觀成

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王觀成 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王觀成（CBDB 640250）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640250&o=json)
