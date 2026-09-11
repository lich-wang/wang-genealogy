---
schema: wang-person/v1
id: p_ZAKexankMowHzFN4QbiAHu
status: active
merged_into: null
display_name: 王楫
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_JTevwaTfeh5YG75MbqNyNJ
        subject_person_id: p_ZAKexankMowHzFN4QbiAHu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王楫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_hCS3cCyEVs8dJLVkkTuDyW
          claim_id: c_JTevwaTfeh5YG75MbqNyNJ
          source_id: s_v4G8NAhcX3Cmsxwu25d7A3
          stance: supports
          locator: CBDB:692272
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（692272）
          source: &a1
            id: s_v4G8NAhcX3Cmsxwu25d7A3
            source_type: api_record
            title: 中国历代人物传记资料库：王楫（CBDB 692272）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=692272&o=json
            external_identifier: CBDB:692272
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.632Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8gZeMWg59N1cCN3GLdVnS8
        subject_person_id: p_ZAKexankMowHzFN4QbiAHu
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王楫，清人物。籍贯黟縣，身份为書法家。（中国历代人物传记资料库 CBDB 692272）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_gMglteAGIW2dqYx1RETRQD
          claim_id: c_8gZeMWg59N1cCN3GLdVnS8
          source_id: s_v4G8NAhcX3Cmsxwu25d7A3
          stance: supports
          locator: CBDB:692272
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

# 王楫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王楫 | accepted |
| bio.summary | 王楫，清人物。籍贯黟縣，身份为書法家。（中国历代人物传记资料库 CBDB 692272） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王楫（CBDB 692272）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=692272&o=json)
