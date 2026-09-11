---
schema: wang-person/v1
id: p_keBX1PuuV83YVGM5Ug1niN
status: active
merged_into: null
display_name: 王鑣
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_P5y8tkX6uWLDhT4jpjjvRH
        subject_person_id: p_keBX1PuuV83YVGM5Ug1niN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鑣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Ebbm4H5EGsGoepJGWV79Yp
          claim_id: c_P5y8tkX6uWLDhT4jpjjvRH
          source_id: s_bBKKqKRzfxKuDaFEaGk32M
          stance: supports
          locator: CBDB:476562
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（476562）
          source: &a1
            id: s_bBKKqKRzfxKuDaFEaGk32M
            source_type: api_record
            title: 中国历代人物传记资料库：王鑣（CBDB 476562）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=476562&o=json
            external_identifier: CBDB:476562
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.462Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_svKUUmL1xcxaHp8Kq2A9Jq
        subject_person_id: p_keBX1PuuV83YVGM5Ug1niN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鑣，清人物。曾任教諭。（中国历代人物传记资料库 CBDB 476562）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_1OUpiB5gub_m0W5jHSjIX6
          claim_id: c_svKUUmL1xcxaHp8Kq2A9Jq
          source_id: s_bBKKqKRzfxKuDaFEaGk32M
          stance: supports
          locator: CBDB:476562
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

# 王鑣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鑣 | accepted |
| bio.summary | 王鑣，清人物。曾任教諭。（中国历代人物传记资料库 CBDB 476562） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鑣（CBDB 476562）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=476562&o=json)
