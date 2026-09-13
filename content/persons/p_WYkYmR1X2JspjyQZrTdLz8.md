---
schema: wang-person/v1
id: p_WYkYmR1X2JspjyQZrTdLz8
status: active
merged_into: null
display_name: 王學仕
cbdb_id: 316264
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_bTd8bjZcKVbN47QWApDaAr
        subject_person_id: p_WYkYmR1X2JspjyQZrTdLz8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王學仕，明人物。嘉靖三十二年進士，籍贯朝邑。（中国历代人物传记资料库 CBDB 316264）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_h-h0NLych66CvXr9y6p_rS
          claim_id: c_bTd8bjZcKVbN47QWApDaAr
          source_id: s_CAL3G7kMztL3NAonKaaZCH
          stance: supports
          locator: CBDB:316264
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_CAL3G7kMztL3NAonKaaZCH
            source_type: api_record
            title: 中国历代人物传记资料库：王學仕（CBDB 316264）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=316264&o=json
            external_identifier: CBDB:316264
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.030Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_NVoX3K3d721D23jQtEj5Rv
        subject_person_id: p_WYkYmR1X2JspjyQZrTdLz8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王學仕
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_pcqE6m8hay3Vu7GmgD3C1D
          claim_id: c_NVoX3K3d721D23jQtEj5Rv
          source_id: s_CAL3G7kMztL3NAonKaaZCH
          stance: supports
          locator: CBDB:316264
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3701-3800）｜历史性依据：CBDB 朝代 = 明
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

# 王學仕

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王學仕，明人物。嘉靖三十二年進士，籍贯朝邑。（中国历代人物传记资料库 CBDB 316264） | accepted |
| name.primary | 王學仕 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王學仕（CBDB 316264）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=316264&o=json)
