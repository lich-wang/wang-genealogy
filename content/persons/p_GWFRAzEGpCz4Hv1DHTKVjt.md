---
schema: wang-person/v1
id: p_GWFRAzEGpCz4Hv1DHTKVjt
status: active
merged_into: null
display_name: 王萬鑑
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_y3b5fnZmWYEJ8oqfMjkgad
        subject_person_id: p_GWFRAzEGpCz4Hv1DHTKVjt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王萬鑑
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1CCKhMCC418R2ksaNvP7TH
          claim_id: c_y3b5fnZmWYEJ8oqfMjkgad
          source_id: s_LsAjpPazoWfJ62eySmwm5m
          stance: supports
          locator: CBDB:700317
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（700317）
          source: &a1
            id: s_LsAjpPazoWfJ62eySmwm5m
            source_type: api_record
            title: 中国历代人物传记资料库：王萬鑑（CBDB 700317）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=700317&o=json
            external_identifier: CBDB:700317
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.592Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_iBbDhLGnAiLtNDZKVwte6Y
        subject_person_id: p_GWFRAzEGpCz4Hv1DHTKVjt
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
        - id: cs_1ixo6UQaXtcHxBNLsoarQU
          claim_id: c_iBbDhLGnAiLtNDZKVwte6Y
          source_id: s_LsAjpPazoWfJ62eySmwm5m
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

# 王萬鑑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王萬鑑 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王萬鑑（CBDB 700317）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=700317&o=json)
