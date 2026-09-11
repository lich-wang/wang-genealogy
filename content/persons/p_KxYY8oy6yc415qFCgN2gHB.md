---
schema: wang-person/v1
id: p_KxYY8oy6yc415qFCgN2gHB
status: active
merged_into: null
display_name: 王公袞
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vUq9qrTVHWTC5kkSBHMx2P
        subject_person_id: p_KxYY8oy6yc415qFCgN2gHB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王公袞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_nfWb4H343o9S9HmZCDUgcW
          claim_id: c_vUq9qrTVHWTC5kkSBHMx2P
          source_id: s_3MFhhwQEnqWzzXJYaujN8k
          stance: supports
          locator: CBDB:38293
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（38293）
          source: &a1
            id: s_3MFhhwQEnqWzzXJYaujN8k
            source_type: api_record
            title: 中国历代人物传记资料库：王公袞（CBDB 38293）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38293&o=json
            external_identifier: CBDB:38293
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.423Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Sq3GP7FMxB1CYuVN5pMCnF
        subject_person_id: p_KxYY8oy6yc415qFCgN2gHB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王公袞，宋人物。曾任尚書省工部屯田司員外郎。（中国历代人物传记资料库 CBDB 38293）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_mOSdW6W1EUUBdXL0MxjxGX
          claim_id: c_Sq3GP7FMxB1CYuVN5pMCnF
          source_id: s_3MFhhwQEnqWzzXJYaujN8k
          stance: supports
          locator: CBDB:38293
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

# 王公袞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王公袞 | accepted |
| bio.summary | 王公袞，宋人物。曾任尚書省工部屯田司員外郎。（中国历代人物传记资料库 CBDB 38293） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王公袞（CBDB 38293）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38293&o=json)
