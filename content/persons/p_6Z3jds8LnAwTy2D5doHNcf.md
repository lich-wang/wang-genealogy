---
schema: wang-person/v1
id: p_6Z3jds8LnAwTy2D5doHNcf
status: active
merged_into: null
display_name: 王潔
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_P2KEsspevRde3PPryejA8j
        subject_person_id: p_6Z3jds8LnAwTy2D5doHNcf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王潔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8w9MQ9zE8PCGx6i2HC2hMo
          claim_id: c_P2KEsspevRde3PPryejA8j
          source_id: s_Wq2dbYFq7KRdm9m94HXCnk
          stance: supports
          locator: CBDB:71145
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71145）
          source: &a1
            id: s_Wq2dbYFq7KRdm9m94HXCnk
            source_type: api_record
            title: 中国历代人物传记资料库：王潔（CBDB 71145）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71145&o=json
            external_identifier: CBDB:71145
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.424Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_6EpP3EUaJcPN6Kg6Pd1L1Y
        subject_person_id: p_6Z3jds8LnAwTy2D5doHNcf
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1837年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xEie7wagF3Ju6aMy2gmhBN
          claim_id: c_6EpP3EUaJcPN6Kg6Pd1L1Y
          source_id: s_Wq2dbYFq7KRdm9m94HXCnk
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
        id: c_BDaHqc2gCEWsG4ZC5E9HMa
        subject_person_id: p_6Z3jds8LnAwTy2D5doHNcf
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1873年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VujugXpZNXB8GimWp33yuk
          claim_id: c_BDaHqc2gCEWsG4ZC5E9HMa
          source_id: s_Wq2dbYFq7KRdm9m94HXCnk
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
        id: c_U7PZAZMvkooD5Dp18as2M8
        subject_person_id: p_6Z3jds8LnAwTy2D5doHNcf
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王潔（1837年—1873年），清人物。籍贯錢塘。（中国历代人物传记资料库 CBDB 71145）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_rxcutA9BV50-ROLfMtH4dx
          claim_id: c_U7PZAZMvkooD5Dp18as2M8
          source_id: s_Wq2dbYFq7KRdm9m94HXCnk
          stance: supports
          locator: CBDB:71145
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

# 王潔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王潔 | accepted |
| birth.date | 1837年 | accepted |
| death.date | 1873年 | accepted |
| bio.summary | 王潔（1837年—1873年），清人物。籍贯錢塘。（中国历代人物传记资料库 CBDB 71145） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王潔（CBDB 71145）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71145&o=json)
