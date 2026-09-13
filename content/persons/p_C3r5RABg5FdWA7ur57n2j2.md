---
schema: wang-person/v1
id: p_C3r5RABg5FdWA7ur57n2j2
status: active
merged_into: null
display_name: 王天和
cbdb_id: 473214
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9qASw1jekUK5bEeU8V3j8d
        subject_person_id: p_C3r5RABg5FdWA7ur57n2j2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王天和，明人物。籍贯永豐，曾任教諭、訓導。（中国历代人物传记资料库 CBDB 473214）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_LWWVHAZweCvB23vOCbRyQn
          claim_id: c_9qASw1jekUK5bEeU8V3j8d
          source_id: s_34AFJ6FS1TNrDEjPPq1X3J
          stance: supports
          locator: CBDB:473214
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_34AFJ6FS1TNrDEjPPq1X3J
            source_type: api_record
            title: 中国历代人物传记资料库：王天和（CBDB 473214）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=473214&o=json
            external_identifier: CBDB:473214
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:14.754Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_kZD1FBD8CmWZx6Sy53Yy9P
        subject_person_id: p_C3r5RABg5FdWA7ur57n2j2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王天和
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_WYPRSoQUtFUPr7ufsz3Wfq
          claim_id: c_kZD1FBD8CmWZx6Sy53Yy9P
          source_id: s_34AFJ6FS1TNrDEjPPq1X3J
          stance: supports
          locator: CBDB:473214
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（6701-6800）｜历史性依据：CBDB 朝代 = 明
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

# 王天和

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王天和，明人物。籍贯永豐，曾任教諭、訓導。（中国历代人物传记资料库 CBDB 473214） | accepted |
| name.primary | 王天和 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王天和（CBDB 473214）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=473214&o=json)
