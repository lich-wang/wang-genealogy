---
schema: wang-person/v1
id: p_bLUGSv1PWEQ4C2gg5f9NGS
status: active
merged_into: null
display_name: 王有成
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_tLKS8NbyRTFfwqwyxwTbc4
        subject_person_id: p_bLUGSv1PWEQ4C2gg5f9NGS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王有成
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_iEXtGtrtmSPPi2ArnQQYDi
          claim_id: c_tLKS8NbyRTFfwqwyxwTbc4
          source_id: s_1UXdgnQyj46APGRS3QCcuf
          stance: supports
          locator: CBDB:342989
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（342989）
          source: &a1
            id: s_1UXdgnQyj46APGRS3QCcuf
            source_type: api_record
            title: 中国历代人物传记资料库：王有成（CBDB 342989）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342989&o=json
            external_identifier: CBDB:342989
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.152Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_uTf2BCb7d7ViQR22iDThFx
        subject_person_id: p_bLUGSv1PWEQ4C2gg5f9NGS
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王有成，清人物。明清進士進士，籍贯夏津，入仕進士。（中国历代人物传记资料库 CBDB 342989）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_r3Rbfi5Xfy_8YYGINf1Hll
          claim_id: c_uTf2BCb7d7ViQR22iDThFx
          source_id: s_1UXdgnQyj46APGRS3QCcuf
          stance: supports
          locator: CBDB:342989
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

# 王有成

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王有成 | accepted |
| bio.summary | 王有成，清人物。明清進士進士，籍贯夏津，入仕進士。（中国历代人物传记资料库 CBDB 342989） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王有成（CBDB 342989）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342989&o=json)
