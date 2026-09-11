---
schema: wang-person/v1
id: p_qwrDNwKjaLLDQ2wSC48H6L
status: active
merged_into: null
display_name: 王作模
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_sRi3994wHbj8oskJMoourh
        subject_person_id: p_qwrDNwKjaLLDQ2wSC48H6L
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王作模
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JVvWscsHZFLS1XeEW8ZYi8
          claim_id: c_sRi3994wHbj8oskJMoourh
          source_id: s_qE8nCfDQG93rrRUDsLCaND
          stance: supports
          locator: CBDB:636002
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636002）
          source: &a1
            id: s_qE8nCfDQG93rrRUDsLCaND
            source_type: api_record
            title: 中国历代人物传记资料库：王作模（CBDB 636002）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636002&o=json
            external_identifier: CBDB:636002
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.857Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_XWvnmNiBNMbzRKCD74GAaQ
        subject_person_id: p_qwrDNwKjaLLDQ2wSC48H6L
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王作模，清人物。籍贯宣化，入仕廩貢生，曾任復設訓導。（中国历代人物传记资料库 CBDB 636002）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_PDYKgJ2xboDzcfKOWg7vyY
          claim_id: c_XWvnmNiBNMbzRKCD74GAaQ
          source_id: s_qE8nCfDQG93rrRUDsLCaND
          stance: supports
          locator: CBDB:636002
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

# 王作模

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王作模 | accepted |
| bio.summary | 王作模，清人物。籍贯宣化，入仕廩貢生，曾任復設訓導。（中国历代人物传记资料库 CBDB 636002） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王作模（CBDB 636002）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636002&o=json)
