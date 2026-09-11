---
schema: wang-person/v1
id: p_mqn1zMEE3DgPaeKqUNzPK2
status: active
merged_into: null
display_name: 王寅昇
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ayD3u7NRqbQQPHUSVQRV3B
        subject_person_id: p_mqn1zMEE3DgPaeKqUNzPK2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寅昇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QxhCEuL6aCFN3YHKevxogE
          claim_id: c_ayD3u7NRqbQQPHUSVQRV3B
          source_id: s_1E7yq4V68ZNrcxrB9TKwNG
          stance: supports
          locator: CBDB:637240
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637240）
          source: &a1
            id: s_1E7yq4V68ZNrcxrB9TKwNG
            source_type: api_record
            title: 中国历代人物传记资料库：王寅昇（CBDB 637240）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637240&o=json
            external_identifier: CBDB:637240
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.250Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BXR7bS1JREbPMQk2G8axda
        subject_person_id: p_mqn1zMEE3DgPaeKqUNzPK2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寅昇，清人物。籍贯開封府，入仕鄉貢舉人，曾任教諭。（中国历代人物传记资料库 CBDB 637240）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_VL_VXdY8p7FlXwT8ACJwnA
          claim_id: c_BXR7bS1JREbPMQk2G8axda
          source_id: s_1E7yq4V68ZNrcxrB9TKwNG
          stance: supports
          locator: CBDB:637240
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

# 王寅昇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王寅昇 | accepted |
| bio.summary | 王寅昇，清人物。籍贯開封府，入仕鄉貢舉人，曾任教諭。（中国历代人物传记资料库 CBDB 637240） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王寅昇（CBDB 637240）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637240&o=json)
