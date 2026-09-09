---
schema: wang-person/v1
id: p_DvtXxwG9PckoSY3Yp7UWGB
status: active
merged_into: null
display_name: 王文化
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AbFa1vRJBCh1sHuxaUX82W
        subject_person_id: p_DvtXxwG9PckoSY3Yp7UWGB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文化
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_fAkqK5kqB8cKMvTys978Qk
          claim_id: c_AbFa1vRJBCh1sHuxaUX82W
          source_id: s_VCtx1geuwFtPkG4pZnQqtF
          stance: supports
          locator: CBDB:19223
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（19223）
          source: &a1
            id: s_VCtx1geuwFtPkG4pZnQqtF
            source_type: api_record
            title: 中国历代人物传记资料库：王文化（CBDB 19223）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=19223&o=json
            external_identifier: CBDB:19223
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.729Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_cqNX6asCdPfuChFr5dBE2U
        subject_person_id: p_DvtXxwG9PckoSY3Yp7UWGB
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
        - id: cs_QrdyGcRqEJ9eSzL8AG9NRj
          claim_id: c_cqNX6asCdPfuChFr5dBE2U
          source_id: s_VCtx1geuwFtPkG4pZnQqtF
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

# 王文化

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文化 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王文化（CBDB 19223）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=19223&o=json)
