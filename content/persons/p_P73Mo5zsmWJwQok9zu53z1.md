---
schema: wang-person/v1
id: p_P73Mo5zsmWJwQok9zu53z1
status: active
merged_into: null
display_name: 王繼文
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_335aLXw57GECpuetBwJdA7
        subject_person_id: p_P73Mo5zsmWJwQok9zu53z1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繼文
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_G63CDoyeLQLFgwWiVdcEW3
          claim_id: c_335aLXw57GECpuetBwJdA7
          source_id: s_27ABPxji6gMPGMPJkYjoFX
          stance: supports
          locator: CBDB:56878
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（56878）
          source: &a1
            id: s_27ABPxji6gMPGMPJkYjoFX
            source_type: api_record
            title: 中国历代人物传记资料库：王繼文（CBDB 56878）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56878&o=json
            external_identifier: CBDB:56878
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.773Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_QQGLBy1K3BcjzYQ3cFpAYg
        subject_person_id: p_P73Mo5zsmWJwQok9zu53z1
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1703年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1FpT3BLZ5aszyrk8WqGv5t
          claim_id: c_QQGLBy1K3BcjzYQ3cFpAYg
          source_id: s_27ABPxji6gMPGMPJkYjoFX
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LGVXbvdmDe2D8bK3yvjp62
        subject_person_id: p_P73Mo5zsmWJwQok9zu53z1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繼文（卒于1703年），清人物。籍贯漢軍鑲黃旗，入仕監生，曾任布政使、布政使司布政使、都御史。（中国历代人物传记资料库 CBDB 56878）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_hU4PfAijLIL8x5SGJToRrt
          claim_id: c_LGVXbvdmDe2D8bK3yvjp62
          source_id: s_27ABPxji6gMPGMPJkYjoFX
          stance: supports
          locator: CBDB:56878
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

# 王繼文

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王繼文 | accepted |
| death.date | 1703年 | accepted |
| bio.summary | 王繼文（卒于1703年），清人物。籍贯漢軍鑲黃旗，入仕監生，曾任布政使、布政使司布政使、都御史。（中国历代人物传记资料库 CBDB 56878） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王繼文（CBDB 56878）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56878&o=json)
