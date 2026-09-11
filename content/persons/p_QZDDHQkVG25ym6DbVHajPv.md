---
schema: wang-person/v1
id: p_QZDDHQkVG25ym6DbVHajPv
status: active
merged_into: null
display_name: 王晤
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_EeW7qQpNYr3MvB8b1pu5PS
        subject_person_id: p_QZDDHQkVG25ym6DbVHajPv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王晤
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_rLKX87tg1CcJ9P7sTn9NxQ
          claim_id: c_EeW7qQpNYr3MvB8b1pu5PS
          source_id: s_Ey7DUM5rgNLcQggtBAQhcW
          stance: supports
          locator: CBDB:208873
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（208873）
          source: &a1
            id: s_Ey7DUM5rgNLcQggtBAQhcW
            source_type: api_record
            title: 中国历代人物传记资料库：王晤（CBDB 208873）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208873&o=json
            external_identifier: CBDB:208873
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.966Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jf3MYQ4xoaGYgEC1Miyxb7
        subject_person_id: p_QZDDHQkVG25ym6DbVHajPv
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王晤，明人物。隆慶五年進士，籍贯淄川。（中国历代人物传记资料库 CBDB 208873）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_nxgZYEtmKfLPZbCsyvc29j
          claim_id: c_jf3MYQ4xoaGYgEC1Miyxb7
          source_id: s_Ey7DUM5rgNLcQggtBAQhcW
          stance: supports
          locator: CBDB:208873
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

# 王晤

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王晤 | accepted |
| bio.summary | 王晤，明人物。隆慶五年進士，籍贯淄川。（中国历代人物传记资料库 CBDB 208873） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王晤（CBDB 208873）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208873&o=json)
