---
schema: wang-person/v1
id: p_P7w7GSVTke7Bcq4tTxxYVb
status: active
merged_into: null
display_name: 王崇學
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_PLcqGxW5GfQs1PC5yBeh32
        subject_person_id: p_P7w7GSVTke7Bcq4tTxxYVb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王崇學
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_44jxC5Q3dAntr7XCMsDvxY
          claim_id: c_PLcqGxW5GfQs1PC5yBeh32
          source_id: s_rvBG3LGRtsDuaykYn25zs4
          stance: supports
          locator: CBDB:301929
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（301929）
          source: &a1
            id: s_rvBG3LGRtsDuaykYn25zs4
            source_type: api_record
            title: 中国历代人物传记资料库：王崇學（CBDB 301929）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=301929&o=json
            external_identifier: CBDB:301929
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.643Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_bHUJ595vPDkv9d2VDdc15k
        subject_person_id: p_P7w7GSVTke7Bcq4tTxxYVb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王崇學，明人物。嘉靖十七年進士，籍贯淄川。（中国历代人物传记资料库 CBDB 301929）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_OOJMIfXae_jB3BGiNPrg7u
          claim_id: c_bHUJ595vPDkv9d2VDdc15k
          source_id: s_rvBG3LGRtsDuaykYn25zs4
          stance: supports
          locator: CBDB:301929
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

# 王崇學

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王崇學 | accepted |
| bio.summary | 王崇學，明人物。嘉靖十七年進士，籍贯淄川。（中国历代人物传记资料库 CBDB 301929） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王崇學（CBDB 301929）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=301929&o=json)
