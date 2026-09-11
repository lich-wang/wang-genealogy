---
schema: wang-person/v1
id: p_Kj4DdB6X1DTTjh8r94QJpF
status: active
merged_into: null
display_name: 王霂
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_K7qBvZcXP1Ld6ijbSWb52i
        subject_person_id: p_Kj4DdB6X1DTTjh8r94QJpF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王霂
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9SH9MZ24MKaBkH888zGanN
          claim_id: c_K7qBvZcXP1Ld6ijbSWb52i
          source_id: s_36Y4G1VFqKoi44dGTNBSH7
          stance: supports
          locator: CBDB:15707
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（15707）
          source: &a1
            id: s_36Y4G1VFqKoi44dGTNBSH7
            source_type: api_record
            title: 中国历代人物传记资料库：王霂（CBDB 15707）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=15707&o=json
            external_identifier: CBDB:15707
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.642Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Febf2G1QkCjNDaWEuf6j46
        subject_person_id: p_Kj4DdB6X1DTTjh8r94QJpF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王霂，宋人物。籍贯梁縣，入仕進士。（中国历代人物传记资料库 CBDB 15707）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_0aniJVX-cZbUaYgN9yka3g
          claim_id: c_Febf2G1QkCjNDaWEuf6j46
          source_id: s_36Y4G1VFqKoi44dGTNBSH7
          stance: supports
          locator: CBDB:15707
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

# 王霂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王霂 | accepted |
| bio.summary | 王霂，宋人物。籍贯梁縣，入仕進士。（中国历代人物传记资料库 CBDB 15707） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王霂（CBDB 15707）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=15707&o=json)
