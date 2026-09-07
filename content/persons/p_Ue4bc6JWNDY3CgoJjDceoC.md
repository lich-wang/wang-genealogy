---
schema: wang-person/v1
id: p_Ue4bc6JWNDY3CgoJjDceoC
status: active
merged_into: null
display_name: 王丕
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_i9tesbodRKdZjTEujDH7Cg
        subject_person_id: p_Ue4bc6JWNDY3CgoJjDceoC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王丕，宋人物。CBDB 记录其籍贯记录为鉅野，入仕记录为科舉: 進士(籠統)。中国历代人物传记资料库（CBDB）以人物编号 26228 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_keQ8BayeD6UFxB5GnP4aRE
          claim_id: c_i9tesbodRKdZjTEujDH7Cg
          source_id: s_7fjU4ew89CPXuYB51QW2G2
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_7fjU4ew89CPXuYB51QW2G2
            source_type: api_record
            title: 维基数据：王丕（Q45409552）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45409552
            external_identifier: Q45409552
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:14.259Z
            metadata_json: null
        - id: cs_bRPskgv0ymScYqeAjAb9P7
          claim_id: c_i9tesbodRKdZjTEujDH7Cg
          source_id: s_EiMgRxz8FvPwrjw5WC3uNG
          stance: supports
          locator: CBDB:26228
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_EiMgRxz8FvPwrjw5WC3uNG
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王丕（26228）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=26228&o=json
            external_identifier: CBDB:26228
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:06:14.430Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_MEMfJNcxrNgRLpAZSjRsk9
        subject_person_id: p_Ue4bc6JWNDY3CgoJjDceoC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王丕
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_AoNYBh5Es3a8hFjABDEGfm
          claim_id: c_MEMfJNcxrNgRLpAZSjRsk9
          source_id: s_7fjU4ew89CPXuYB51QW2G2
          stance: supports
          locator: Q45409552
          quotation: null
          interpretation_note: null
          source:
            id: s_7fjU4ew89CPXuYB51QW2G2
            source_type: api_record
            title: 维基数据：王丕（Q45409552）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45409552
            external_identifier: Q45409552
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:14.259Z
            metadata_json: null
        - id: cs_t1shpDQ8JHd6wVTJk6L59H
          claim_id: c_MEMfJNcxrNgRLpAZSjRsk9
          source_id: s_EiMgRxz8FvPwrjw5WC3uNG
          stance: supports
          locator: Q45409552
          quotation: null
          interpretation_note: null
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

# 王丕

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王丕，宋人物。CBDB 记录其籍贯记录为鉅野，入仕记录为科舉: 進士(籠統)。中国历代人物传记资料库（CBDB）以人物编号 26228 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王丕 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [维基数据：王丕（Q45409552）](https://www.wikidata.org/wiki/Q45409552)
- [CBDB 中国历代人物传记资料库：王丕（26228）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=26228&o=json)
