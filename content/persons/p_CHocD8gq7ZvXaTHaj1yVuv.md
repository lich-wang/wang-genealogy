---
schema: wang-person/v1
id: p_CHocD8gq7ZvXaTHaj1yVuv
status: active
merged_into: null
display_name: 王鑌
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_fcH9CcTQDyJtQEzycBFELN
        subject_person_id: p_CHocD8gq7ZvXaTHaj1yVuv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鑌
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_uwT2qWDQhjCyyAdB7VL4E9
          claim_id: c_fcH9CcTQDyJtQEzycBFELN
          source_id: s_iKdze6NRJwtZaxm7yResEz
          stance: supports
          locator: CBDB:271361
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（271361）
          source: &a1
            id: s_iKdze6NRJwtZaxm7yResEz
            source_type: api_record
            title: 中国历代人物传记资料库：王鑌（CBDB 271361）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271361&o=json
            external_identifier: CBDB:271361
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.870Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_SfqYsLa7u8TuV2cFCySt8D
        subject_person_id: p_CHocD8gq7ZvXaTHaj1yVuv
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鑌，明人物。弘治十五年進士，籍贯宛平。（中国历代人物传记资料库 CBDB 271361）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_R25uvNp_ZpIS5ZAwlILKsa
          claim_id: c_SfqYsLa7u8TuV2cFCySt8D
          source_id: s_iKdze6NRJwtZaxm7yResEz
          stance: supports
          locator: CBDB:271361
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

# 王鑌

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鑌 | accepted |
| bio.summary | 王鑌，明人物。弘治十五年進士，籍贯宛平。（中国历代人物传记资料库 CBDB 271361） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鑌（CBDB 271361）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271361&o=json)
