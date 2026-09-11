---
schema: wang-person/v1
id: p_ucQr9z1Xo5Xpr1tvEjpzf3
status: active
merged_into: null
display_name: 王鴻鼎
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KrEX2687frG58R1Y5VcWwL
        subject_person_id: p_ucQr9z1Xo5Xpr1tvEjpzf3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鴻鼎
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ks4kqP5drE3ydq46D2P2f5
          claim_id: c_KrEX2687frG58R1Y5VcWwL
          source_id: s_5dV2GoHupGCCZX1DKF5GSf
          stance: supports
          locator: CBDB:641006
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（641006）
          source: &a1
            id: s_5dV2GoHupGCCZX1DKF5GSf
            source_type: api_record
            title: 中国历代人物传记资料库：王鴻鼎（CBDB 641006）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=641006&o=json
            external_identifier: CBDB:641006
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.439Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_AAJN1FqPM9vLK3gvGQziS8
        subject_person_id: p_ucQr9z1Xo5Xpr1tvEjpzf3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鴻鼎，清人物。籍贯松滋，入仕監生，曾任經歷。（中国历代人物传记资料库 CBDB 641006）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Y-2dgdAm4V47GAq_ERcpOj
          claim_id: c_AAJN1FqPM9vLK3gvGQziS8
          source_id: s_5dV2GoHupGCCZX1DKF5GSf
          stance: supports
          locator: CBDB:641006
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

# 王鴻鼎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鴻鼎 | accepted |
| bio.summary | 王鴻鼎，清人物。籍贯松滋，入仕監生，曾任經歷。（中国历代人物传记资料库 CBDB 641006） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鴻鼎（CBDB 641006）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=641006&o=json)
