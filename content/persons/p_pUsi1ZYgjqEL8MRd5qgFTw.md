---
schema: wang-person/v1
id: p_pUsi1ZYgjqEL8MRd5qgFTw
status: active
merged_into: null
display_name: 王鳳儀
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Ff5KG2fXmQAAriJbNUQSgK
        subject_person_id: p_pUsi1ZYgjqEL8MRd5qgFTw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鳳儀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_fhsBpBiazEr2we6sJuu1qL
          claim_id: c_Ff5KG2fXmQAAriJbNUQSgK
          source_id: s_D3NDKCZZLXnCtTf9bdjDKW
          stance: supports
          locator: CBDB:640923
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640923）
          source: &a1
            id: s_D3NDKCZZLXnCtTf9bdjDKW
            source_type: api_record
            title: 中国历代人物传记资料库：王鳳儀（CBDB 640923）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640923&o=json
            external_identifier: CBDB:640923
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.242Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_SPFyxAipiVPeAcf8WWDGjx
        subject_person_id: p_pUsi1ZYgjqEL8MRd5qgFTw
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鳳儀，清人物。籍贯大興，曾任典史、知縣。（中国历代人物传记资料库 CBDB 640923）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_SxxvgDeuu1BCmQhJpU_Jur
          claim_id: c_SPFyxAipiVPeAcf8WWDGjx
          source_id: s_D3NDKCZZLXnCtTf9bdjDKW
          stance: supports
          locator: CBDB:640923
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

# 王鳳儀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鳳儀 | accepted |
| bio.summary | 王鳳儀，清人物。籍贯大興，曾任典史、知縣。（中国历代人物传记资料库 CBDB 640923） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鳳儀（CBDB 640923）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640923&o=json)
