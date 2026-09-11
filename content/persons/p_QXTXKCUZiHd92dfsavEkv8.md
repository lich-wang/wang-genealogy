---
schema: wang-person/v1
id: p_QXTXKCUZiHd92dfsavEkv8
status: active
merged_into: null
display_name: 王德固
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Zs4jr355pX7DzyuoF8riMT
        subject_person_id: p_QXTXKCUZiHd92dfsavEkv8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德固
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_rio4vS1qt4kAttjRBYVXxv
          claim_id: c_Zs4jr355pX7DzyuoF8riMT
          source_id: s_QSLJaeuiatCAezcezExtHR
          stance: supports
          locator: CBDB:55661
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（55661）
          source: &a1
            id: s_QSLJaeuiatCAezcezExtHR
            source_type: api_record
            title: 中国历代人物传记资料库：王德固（CBDB 55661）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=55661&o=json
            external_identifier: CBDB:55661
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.745Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_dguHDu3BsUvUrJw9dGgx1R
        subject_person_id: p_QXTXKCUZiHd92dfsavEkv8
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1815年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SNT3LXXm26v88NkhgfFVP6
          claim_id: c_dguHDu3BsUvUrJw9dGgx1R
          source_id: s_QSLJaeuiatCAezcezExtHR
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_Da3aeKntxWK6TkbpY6QJVj
        subject_person_id: p_QXTXKCUZiHd92dfsavEkv8
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1875年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZEmc98JGDCack89ExYu5L8
          claim_id: c_Da3aeKntxWK6TkbpY6QJVj
          source_id: s_QSLJaeuiatCAezcezExtHR
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
        id: c_cqGb95CPzApPC4BfSdE3Jb
        subject_person_id: p_QXTXKCUZiHd92dfsavEkv8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德固（1815年—1875年），清人物。明清進士進士，籍贯鹿邑，入仕進士，曾任道御史、知府。（中国历代人物传记资料库 CBDB 55661）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_aXz5QCunTAJnCy-hkC8OLr
          claim_id: c_cqGb95CPzApPC4BfSdE3Jb
          source_id: s_QSLJaeuiatCAezcezExtHR
          stance: supports
          locator: CBDB:55661
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

# 王德固

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王德固 | accepted |
| birth.date | 1815年 | accepted |
| death.date | 1875年 | accepted |
| bio.summary | 王德固（1815年—1875年），清人物。明清進士進士，籍贯鹿邑，入仕進士，曾任道御史、知府。（中国历代人物传记资料库 CBDB 55661） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王德固（CBDB 55661）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=55661&o=json)
