---
schema: wang-person/v1
id: p_EbnPei14Yt5DuHpobpEWS9
status: active
merged_into: null
display_name: 王應奎
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2RvFqSPHfbN8C9S79CCWBk
        subject_person_id: p_EbnPei14Yt5DuHpobpEWS9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應奎
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Vi3p7Gh98Fyqyd7DAZqAkh
          claim_id: c_2RvFqSPHfbN8C9S79CCWBk
          source_id: s_ggmSKTXaU61u1VczmZz7MM
          stance: supports
          locator: CBDB:212305
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（212305）
          source: &a1
            id: s_ggmSKTXaU61u1VczmZz7MM
            source_type: api_record
            title: 中国历代人物传记资料库：王應奎（CBDB 212305）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212305&o=json
            external_identifier: CBDB:212305
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.082Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_dChckPZrJpCv17t1b6bbfL
        subject_person_id: p_EbnPei14Yt5DuHpobpEWS9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應奎，明人物。萬曆二年進士，籍贯慈溪，曾任倉大使。（中国历代人物传记资料库 CBDB 212305）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_mVSZ9GkV9vTKI1rS0NtqEf
          claim_id: c_dChckPZrJpCv17t1b6bbfL
          source_id: s_ggmSKTXaU61u1VczmZz7MM
          stance: supports
          locator: CBDB:212305
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

# 王應奎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王應奎 | accepted |
| bio.summary | 王應奎，明人物。萬曆二年進士，籍贯慈溪，曾任倉大使。（中国历代人物传记资料库 CBDB 212305） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王應奎（CBDB 212305）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212305&o=json)
