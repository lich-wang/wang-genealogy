---
schema: wang-person/v1
id: p_9Q6mpYiEZXY2sbP3dTQJMq
status: active
merged_into: null
display_name: 王祖憲
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ABNmT1K7mRo3jVE9j4bJVo
        subject_person_id: p_9Q6mpYiEZXY2sbP3dTQJMq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祖憲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Z3U6ioAKu9gHNJbXuFYbqM
          claim_id: c_ABNmT1K7mRo3jVE9j4bJVo
          source_id: s_oXf5Mpt1bHJH9qrona9NgL
          stance: supports
          locator: CBDB:689491
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（689491）
          source: &a1
            id: s_oXf5Mpt1bHJH9qrona9NgL
            source_type: api_record
            title: 中国历代人物传记资料库：王祖憲（CBDB 689491）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=689491&o=json
            external_identifier: CBDB:689491
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.475Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zq7TMFt3Bz74fp2bxn3TMX
        subject_person_id: p_9Q6mpYiEZXY2sbP3dTQJMq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祖憲，清人物。籍贯歙縣，身份为畫家。（中国历代人物传记资料库 CBDB 689491）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ny3g4-KutNBWimkzOqdXaD
          claim_id: c_zq7TMFt3Bz74fp2bxn3TMX
          source_id: s_oXf5Mpt1bHJH9qrona9NgL
          stance: supports
          locator: CBDB:689491
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

# 王祖憲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王祖憲 | accepted |
| bio.summary | 王祖憲，清人物。籍贯歙縣，身份为畫家。（中国历代人物传记资料库 CBDB 689491） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王祖憲（CBDB 689491）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=689491&o=json)
