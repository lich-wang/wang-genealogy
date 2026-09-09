---
schema: wang-person/v1
id: p_kHVCbQrPTb4PRaxA94yCUZ
status: active
merged_into: null
display_name: 王褒
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_D6BQ4Mne3jDeT5rtey7K4n
        subject_person_id: p_kHVCbQrPTb4PRaxA94yCUZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王褒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_f1VBeYhVBJ89mb5uvHtaWK
          claim_id: c_D6BQ4Mne3jDeT5rtey7K4n
          source_id: s_wt3xEWCYt4GhUDa4qm8q6s
          stance: supports
          locator: CBDB:462981
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（462981）
          source: &a1
            id: s_wt3xEWCYt4GhUDa4qm8q6s
            source_type: api_record
            title: 中国历代人物传记资料库：王褒（CBDB 462981）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=462981&o=json
            external_identifier: CBDB:462981
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.868Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EUy6Ve78nA92FUADux9QW1
        subject_person_id: p_kHVCbQrPTb4PRaxA94yCUZ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为北周人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_X7jbnCFCwkfG1W4PnAKhCP
          claim_id: c_EUy6Ve78nA92FUADux9QW1
          source_id: s_wt3xEWCYt4GhUDa4qm8q6s
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

# 王褒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王褒 | accepted |
| bio.summary | CBDB 记载为北周人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王褒（CBDB 462981）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=462981&o=json)
