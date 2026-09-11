---
schema: wang-person/v1
id: p_tMF4S3tE76KKriKkr7ysUH
status: active
merged_into: null
display_name: 王澄
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1CgHdpcDi3X28MZCmAcSFn
        subject_person_id: p_tMF4S3tE76KKriKkr7ysUH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王澄
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Kx19EPMPmn3ba5YmYaZt6e
          claim_id: c_1CgHdpcDi3X28MZCmAcSFn
          source_id: s_MzHmtKoC6nWGoVfbzphQoM
          stance: supports
          locator: CBDB:687613
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（687613）
          source: &a1
            id: s_MzHmtKoC6nWGoVfbzphQoM
            source_type: api_record
            title: 中国历代人物传记资料库：王澄（CBDB 687613）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=687613&o=json
            external_identifier: CBDB:687613
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.452Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_wdT63wnSxQS7DCu7ziFP69
        subject_person_id: p_tMF4S3tE76KKriKkr7ysUH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王澄，宋人物。籍贯德安，入仕進士。（中国历代人物传记资料库 CBDB 687613）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_WCWhYNICEEjMMVmpbdVGbg
          claim_id: c_wdT63wnSxQS7DCu7ziFP69
          source_id: s_MzHmtKoC6nWGoVfbzphQoM
          stance: supports
          locator: CBDB:687613
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

# 王澄

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王澄 | accepted |
| bio.summary | 王澄，宋人物。籍贯德安，入仕進士。（中国历代人物传记资料库 CBDB 687613） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王澄（CBDB 687613）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=687613&o=json)
