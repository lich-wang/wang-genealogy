---
schema: wang-person/v1
id: p_ekUVip7EixHqCQoGNQsAMA
status: active
merged_into: null
display_name: 王藥修
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_K2zeDQrVtDkL1b2n9tF3qM
        subject_person_id: p_ekUVip7EixHqCQoGNQsAMA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王藥修
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_A6pHoPc1QvQXgjfMGMaDyq
          claim_id: c_K2zeDQrVtDkL1b2n9tF3qM
          source_id: s_FmeqWXriPYQJ2Zp1ZeKMEw
          stance: supports
          locator: CBDB:640172
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640172）
          source: &a1
            id: s_FmeqWXriPYQJ2Zp1ZeKMEw
            source_type: api_record
            title: 中国历代人物传记资料库：王藥修（CBDB 640172）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640172&o=json
            external_identifier: CBDB:640172
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.171Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Hq8eaZM7vdxq2zwSFTJf8W
        subject_person_id: p_ekUVip7EixHqCQoGNQsAMA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王藥修，清人物。籍贯英山，入仕進士，曾任內閣侍讀、知府。（中国历代人物传记资料库 CBDB 640172）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_6YhoaU5jPnHCevu7DmGGgT
          claim_id: c_Hq8eaZM7vdxq2zwSFTJf8W
          source_id: s_FmeqWXriPYQJ2Zp1ZeKMEw
          stance: supports
          locator: CBDB:640172
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

# 王藥修

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王藥修 | accepted |
| bio.summary | 王藥修，清人物。籍贯英山，入仕進士，曾任內閣侍讀、知府。（中国历代人物传记资料库 CBDB 640172） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王藥修（CBDB 640172）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640172&o=json)
