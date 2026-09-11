---
schema: wang-person/v1
id: p_F8GLnKe26a767PE1nSR6i2
status: active
merged_into: null
display_name: 王光岳
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BsgggHiGP8u68qjYH2Ek8x
        subject_person_id: p_F8GLnKe26a767PE1nSR6i2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王光岳
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_sPSUYpqLCvgUGfspQKwnpU
          claim_id: c_BsgggHiGP8u68qjYH2Ek8x
          source_id: s_ja9bAuWvLY8X7FCXUpnae3
          stance: supports
          locator: CBDB:636245
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636245）
          source: &a1
            id: s_ja9bAuWvLY8X7FCXUpnae3
            source_type: api_record
            title: 中国历代人物传记资料库：王光岳（CBDB 636245）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636245&o=json
            external_identifier: CBDB:636245
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.930Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_fT4BiPwJSsF3QpEDnJMUcv
        subject_person_id: p_F8GLnKe26a767PE1nSR6i2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王光岳，清人物。籍贯光州直隸州直轄地方，曾任訓導。（中国历代人物传记资料库 CBDB 636245）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_5Utq-j4QxclZ6ctB7bBp94
          claim_id: c_fT4BiPwJSsF3QpEDnJMUcv
          source_id: s_ja9bAuWvLY8X7FCXUpnae3
          stance: supports
          locator: CBDB:636245
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

# 王光岳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王光岳 | accepted |
| bio.summary | 王光岳，清人物。籍贯光州直隸州直轄地方，曾任訓導。（中国历代人物传记资料库 CBDB 636245） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王光岳（CBDB 636245）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636245&o=json)
