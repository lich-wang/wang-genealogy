---
schema: wang-person/v1
id: p_JJskAzfYnX7jv9rnGc8e1R
status: active
merged_into: null
display_name: 王蘭香
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2qP5fbUaWxEMBTutwZK7bq
        subject_person_id: p_JJskAzfYnX7jv9rnGc8e1R
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王蘭香
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_C3atvN3v4Bbu3PPeB5cvVK
          claim_id: c_2qP5fbUaWxEMBTutwZK7bq
          source_id: s_gAPZgEkX2PnfQbM9pNXzKU
          stance: supports
          locator: CBDB:640193
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640193）
          source: &a1
            id: s_gAPZgEkX2PnfQbM9pNXzKU
            source_type: api_record
            title: 中国历代人物传记资料库：王蘭香（CBDB 640193）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640193&o=json
            external_identifier: CBDB:640193
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.180Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_H2agd92EZh39LkHCuXVEhn
        subject_person_id: p_JJskAzfYnX7jv9rnGc8e1R
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王蘭香，清人物。籍贯資州直隸州直轄地方，曾任訓導。（中国历代人物传记资料库 CBDB 640193）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_xWlUgX_Gj1THy1eS1n5jPZ
          claim_id: c_H2agd92EZh39LkHCuXVEhn
          source_id: s_gAPZgEkX2PnfQbM9pNXzKU
          stance: supports
          locator: CBDB:640193
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

# 王蘭香

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王蘭香 | accepted |
| bio.summary | 王蘭香，清人物。籍贯資州直隸州直轄地方，曾任訓導。（中国历代人物传记资料库 CBDB 640193） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王蘭香（CBDB 640193）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640193&o=json)
