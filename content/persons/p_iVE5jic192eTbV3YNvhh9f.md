---
schema: wang-person/v1
id: p_iVE5jic192eTbV3YNvhh9f
status: active
merged_into: null
display_name: 王喬蔭
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Stsk75ZYYEQPG1T841MiMn
        subject_person_id: p_iVE5jic192eTbV3YNvhh9f
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王喬蔭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_M4xz28BF845jSJH7ASqFNK
          claim_id: c_Stsk75ZYYEQPG1T841MiMn
          source_id: s_EwEwE5Hfd1JBjQpk86Nrid
          stance: supports
          locator: CBDB:636589
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636589）
          source: &a1
            id: s_EwEwE5Hfd1JBjQpk86Nrid
            source_type: api_record
            title: 中国历代人物传记资料库：王喬蔭（CBDB 636589）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636589&o=json
            external_identifier: CBDB:636589
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.042Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_aquW6ojStU86DUapMtSqFJ
        subject_person_id: p_iVE5jic192eTbV3YNvhh9f
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王喬蔭，清人物。籍贯滄州，入仕廩貢生，曾任復設訓導。（中国历代人物传记资料库 CBDB 636589）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_dznfa9u6cJUt0VwTFXK-U6
          claim_id: c_aquW6ojStU86DUapMtSqFJ
          source_id: s_EwEwE5Hfd1JBjQpk86Nrid
          stance: supports
          locator: CBDB:636589
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

# 王喬蔭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王喬蔭 | accepted |
| bio.summary | 王喬蔭，清人物。籍贯滄州，入仕廩貢生，曾任復設訓導。（中国历代人物传记资料库 CBDB 636589） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王喬蔭（CBDB 636589）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636589&o=json)
