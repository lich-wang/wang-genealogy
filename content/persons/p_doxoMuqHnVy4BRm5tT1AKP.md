---
schema: wang-person/v1
id: p_doxoMuqHnVy4BRm5tT1AKP
status: active
merged_into: null
display_name: 王述
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_bbVuU6exay2dkL3Jr8gskf
        subject_person_id: p_doxoMuqHnVy4BRm5tT1AKP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王述
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NA8z7YohG9yPrK9vCiB238
          claim_id: c_bbVuU6exay2dkL3Jr8gskf
          source_id: s_kEF4T2TLp18FejZAwi7cVj
          stance: supports
          locator: CBDB:640390
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640390）
          source: &a1
            id: s_kEF4T2TLp18FejZAwi7cVj
            source_type: api_record
            title: 中国历代人物传记资料库：王述（CBDB 640390）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640390&o=json
            external_identifier: CBDB:640390
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.090Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Ec5DWUJWWPhPuXg4rSFyLu
        subject_person_id: p_doxoMuqHnVy4BRm5tT1AKP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王述，清人物。籍贯汾西，入仕貢生: 拔貢，曾任復設教諭。（中国历代人物传记资料库 CBDB 640390）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_SSA5zVuCmgl6VBW3LTnTgo
          claim_id: c_Ec5DWUJWWPhPuXg4rSFyLu
          source_id: s_kEF4T2TLp18FejZAwi7cVj
          stance: supports
          locator: CBDB:640390
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

# 王述

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王述 | accepted |
| bio.summary | 王述，清人物。籍贯汾西，入仕貢生: 拔貢，曾任復設教諭。（中国历代人物传记资料库 CBDB 640390） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王述（CBDB 640390）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640390&o=json)
