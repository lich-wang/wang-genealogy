---
schema: wang-person/v1
id: p_R4ct9rRua2oAUfzM91y25u
status: active
merged_into: null
display_name: 王文進
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_E8gDbJjtrJPdAVt3enAAsG
        subject_person_id: p_R4ct9rRua2oAUfzM91y25u
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文進
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_y9yx7fT82EHHUx3tLzM7vP
          claim_id: c_E8gDbJjtrJPdAVt3enAAsG
          source_id: s_cKWe2baUPwNQRg9df1qgQv
          stance: supports
          locator: CBDB:71422
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71422）
          source: &a1
            id: s_cKWe2baUPwNQRg9df1qgQv
            source_type: api_record
            title: 中国历代人物传记资料库：王文進（CBDB 71422）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71422&o=json
            external_identifier: CBDB:71422
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.656Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_sqwh3RjfU87c6pJBw9affw
        subject_person_id: p_R4ct9rRua2oAUfzM91y25u
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1714年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SUqrfVNAxQMAUWuNP62L1X
          claim_id: c_sqwh3RjfU87c6pJBw9affw
          source_id: s_cKWe2baUPwNQRg9df1qgQv
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
        id: c_U8MQ1su7kjbRKWK7fqpUXD
        subject_person_id: p_R4ct9rRua2oAUfzM91y25u
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1791年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ACNuFk61goT5J7fCNMkBJi
          claim_id: c_U8MQ1su7kjbRKWK7fqpUXD
          source_id: s_cKWe2baUPwNQRg9df1qgQv
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
        id: c_cHS1JJu37vkGfgDLVVsSyo
        subject_person_id: p_R4ct9rRua2oAUfzM91y25u
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文進（1714年—1791年），清人物。籍贯婺源，入仕鄉貢舉人，曾任同知。（中国历代人物传记资料库 CBDB 71422）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_kAiRylckdGbU1nSRyzmK6V
          claim_id: c_cHS1JJu37vkGfgDLVVsSyo
          source_id: s_cKWe2baUPwNQRg9df1qgQv
          stance: supports
          locator: CBDB:71422
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

# 王文進

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文進 | accepted |
| birth.date | 1714年 | accepted |
| death.date | 1791年 | accepted |
| bio.summary | 王文進（1714年—1791年），清人物。籍贯婺源，入仕鄉貢舉人，曾任同知。（中国历代人物传记资料库 CBDB 71422） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王文進（CBDB 71422）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71422&o=json)
