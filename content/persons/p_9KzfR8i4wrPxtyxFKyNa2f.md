---
schema: wang-person/v1
id: p_9KzfR8i4wrPxtyxFKyNa2f
status: active
merged_into: null
display_name: 王懷鈺
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wxdmzFb8vPycDJLJ4Rp435
        subject_person_id: p_9KzfR8i4wrPxtyxFKyNa2f
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王懷鈺
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_k2mYviyypfyQdTcUn5XUBS
          claim_id: c_wxdmzFb8vPycDJLJ4Rp435
          source_id: s_rWU77LFz46p258xNvEXKGD
          stance: supports
          locator: CBDB:638032
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638032）
          source: &a1
            id: s_rWU77LFz46p258xNvEXKGD
            source_type: api_record
            title: 中国历代人物传记资料库：王懷鈺（CBDB 638032）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638032&o=json
            external_identifier: CBDB:638032
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.490Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jE6dJWc3Ded2hQSSdGNwwc
        subject_person_id: p_9KzfR8i4wrPxtyxFKyNa2f
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
        - id: cs_ygRRXkZpPWJ1yKtUCv2V4D
          claim_id: c_jE6dJWc3Ded2hQSSdGNwwc
          source_id: s_rWU77LFz46p258xNvEXKGD
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

# 王懷鈺

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王懷鈺 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王懷鈺（CBDB 638032）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638032&o=json)
