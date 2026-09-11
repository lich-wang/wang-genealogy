---
schema: wang-person/v1
id: p_ENMUmT2CjC22KZXU1a7hWC
status: active
merged_into: null
display_name: 王嘉培
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_JiGVCtFbiFTWQN5fJUTTLM
        subject_person_id: p_ENMUmT2CjC22KZXU1a7hWC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嘉培
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4pEiR9yi7Z1uT3FLN59EJ7
          claim_id: c_JiGVCtFbiFTWQN5fJUTTLM
          source_id: s_mF2kPuNydumxpRss7P81on
          stance: supports
          locator: CBDB:636608
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636608）
          source: &a1
            id: s_mF2kPuNydumxpRss7P81on
            source_type: api_record
            title: 中国历代人物传记资料库：王嘉培（CBDB 636608）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636608&o=json
            external_identifier: CBDB:636608
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.048Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_sc12Sat9RQnUiQtEhaHTyj
        subject_person_id: p_ENMUmT2CjC22KZXU1a7hWC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王嘉培，清人物。籍贯深州直隸州直轄地方，入仕貢生: 恩貢，曾任復設教諭。（中国历代人物传记资料库 CBDB 636608）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_0MCccKIy9tn7au4516G1TQ
          claim_id: c_sc12Sat9RQnUiQtEhaHTyj
          source_id: s_mF2kPuNydumxpRss7P81on
          stance: supports
          locator: CBDB:636608
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

# 王嘉培

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王嘉培 | accepted |
| bio.summary | 王嘉培，清人物。籍贯深州直隸州直轄地方，入仕貢生: 恩貢，曾任復設教諭。（中国历代人物传记资料库 CBDB 636608） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王嘉培（CBDB 636608）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636608&o=json)
