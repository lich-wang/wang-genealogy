---
schema: wang-person/v1
id: p_rZWB2t7F4tJTCLfyS4DHGZ
status: active
merged_into: null
display_name: 王士能
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7W1xu7sZUwFM2GqkUusVh8
        subject_person_id: p_rZWB2t7F4tJTCLfyS4DHGZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士能
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HX2qfMT984MmTFmez6tewQ
          claim_id: c_7W1xu7sZUwFM2GqkUusVh8
          source_id: s_msKJoHWF6w48UB19gvMFzo
          stance: supports
          locator: CBDB:126445
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126445）
          source: &a1
            id: s_msKJoHWF6w48UB19gvMFzo
            source_type: api_record
            title: 中国历代人物传记资料库：王士能（CBDB 126445）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126445&o=json
            external_identifier: CBDB:126445
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.963Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_SBRD2KNprdtWfWgEexDaTH
        subject_person_id: p_rZWB2t7F4tJTCLfyS4DHGZ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士能，明人物。籍贯濟寧州，身份为徵至京師。（中国历代人物传记资料库 CBDB 126445）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_eD8DT1TwYBwE5Y35ZvYr5k
          claim_id: c_SBRD2KNprdtWfWgEexDaTH
          source_id: s_msKJoHWF6w48UB19gvMFzo
          stance: supports
          locator: CBDB:126445
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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

# 王士能

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王士能 | accepted |
| bio.summary | 王士能，明人物。籍贯濟寧州，身份为徵至京師。（中国历代人物传记资料库 CBDB 126445） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王士能（CBDB 126445）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126445&o=json)
