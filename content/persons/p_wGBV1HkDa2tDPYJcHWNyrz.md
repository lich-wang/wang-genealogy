---
schema: wang-person/v1
id: p_wGBV1HkDa2tDPYJcHWNyrz
status: active
merged_into: null
display_name: 王絪
cbdb_id: 3994
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_fQhE49dG38NUi6GNzRNQjp
        subject_person_id: p_wGBV1HkDa2tDPYJcHWNyrz
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王絪，宋人物。籍贯南城，入仕進士，曾任通仕郎、縣丞。（中国历代人物传记资料库 CBDB 3994）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_iKtNhE8M-AQcwLeQho1X8M
          claim_id: c_fQhE49dG38NUi6GNzRNQjp
          source_id: s_7tevt1LdUnRfduF5nmti4F
          stance: supports
          locator: CBDB:3994
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_7tevt1LdUnRfduF5nmti4F
            source_type: api_record
            title: 中国历代人物传记资料库：王絪（CBDB 3994）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3994&o=json
            external_identifier: CBDB:3994
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_3GaUrM8V2PEp2TL1MnBst5
        subject_person_id: p_wGBV1HkDa2tDPYJcHWNyrz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王絪
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_KtTdLxKhs9TGUjcwjQ4cKL
          claim_id: c_3GaUrM8V2PEp2TL1MnBst5
          source_id: s_7tevt1LdUnRfduF5nmti4F
          stance: supports
          locator: CBDB:3994
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（801-900）｜历史性依据：CBDB 朝代 = 宋
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

# 王絪

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王絪，宋人物。籍贯南城，入仕進士，曾任通仕郎、縣丞。（中国历代人物传记资料库 CBDB 3994） | accepted |
| name.primary | 王絪 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王絪（CBDB 3994）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3994&o=json)
