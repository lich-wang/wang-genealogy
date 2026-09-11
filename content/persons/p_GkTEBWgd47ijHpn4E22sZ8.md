---
schema: wang-person/v1
id: p_GkTEBWgd47ijHpn4E22sZ8
status: active
merged_into: null
display_name: 王鳴
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6nvUp3wX7ddWRmLuSPRPk7
        subject_person_id: p_GkTEBWgd47ijHpn4E22sZ8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鳴
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_P61XMZjVeaoeLKs4cRsyjs
          claim_id: c_6nvUp3wX7ddWRmLuSPRPk7
          source_id: s_H75ByR9ELeUV74kbTz3sYm
          stance: supports
          locator: CBDB:492672
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（492672）
          source: &a1
            id: s_H75ByR9ELeUV74kbTz3sYm
            source_type: api_record
            title: 中国历代人物传记资料库：王鳴（CBDB 492672）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=492672&o=json
            external_identifier: CBDB:492672
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.320Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_eedBcwiHHyjB8BKiQiCSo4
        subject_person_id: p_GkTEBWgd47ijHpn4E22sZ8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鳴，清人物。入仕進士，曾任知縣。（中国历代人物传记资料库 CBDB 492672）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_aitKswsmeuapg0eu4GUdj0
          claim_id: c_eedBcwiHHyjB8BKiQiCSo4
          source_id: s_H75ByR9ELeUV74kbTz3sYm
          stance: supports
          locator: CBDB:492672
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

# 王鳴

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鳴 | accepted |
| bio.summary | 王鳴，清人物。入仕進士，曾任知縣。（中国历代人物传记资料库 CBDB 492672） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鳴（CBDB 492672）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=492672&o=json)
