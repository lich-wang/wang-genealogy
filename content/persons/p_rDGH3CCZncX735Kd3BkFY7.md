---
schema: wang-person/v1
id: p_rDGH3CCZncX735Kd3BkFY7
status: active
merged_into: null
display_name: 王世望
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2mkQpkcRuJ6JrXPDTuCmYx
        subject_person_id: p_rDGH3CCZncX735Kd3BkFY7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世望
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_nZ2VZjV4Yny3eH5577sK9s
          claim_id: c_2mkQpkcRuJ6JrXPDTuCmYx
          source_id: s_ZYgmBPQm6QMB4FduePGamy
          stance: supports
          locator: CBDB:309382
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（309382）
          source: &a1
            id: s_ZYgmBPQm6QMB4FduePGamy
            source_type: api_record
            title: 中国历代人物传记资料库：王世望（CBDB 309382）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309382&o=json
            external_identifier: CBDB:309382
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.815Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_TZ5mT766SPzAzxUGAHq8N8
        subject_person_id: p_rDGH3CCZncX735Kd3BkFY7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世望，明人物。嘉靖二十六年進士，籍贯崑山。（中国历代人物传记资料库 CBDB 309382）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_zX4ZbwbPOQLPN3JZnGU6sC
          claim_id: c_TZ5mT766SPzAzxUGAHq8N8
          source_id: s_ZYgmBPQm6QMB4FduePGamy
          stance: supports
          locator: CBDB:309382
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

# 王世望

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王世望 | accepted |
| bio.summary | 王世望，明人物。嘉靖二十六年進士，籍贯崑山。（中国历代人物传记资料库 CBDB 309382） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王世望（CBDB 309382）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309382&o=json)
