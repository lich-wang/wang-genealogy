---
schema: wang-person/v1
id: p_jH1CgQCT1j1xXo6eBCoN9Q
status: active
merged_into: null
display_name: 王楨
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_iq4nuSP7eMcvFcbkD3PxSC
        subject_person_id: p_jH1CgQCT1j1xXo6eBCoN9Q
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王楨
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_W4G9MqUztZGFhTYA41XCDz
          claim_id: c_iq4nuSP7eMcvFcbkD3PxSC
          source_id: s_jz7rpHAy8x5chQ7XF6JKdn
          stance: supports
          locator: CBDB:472075
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（472075）
          source: &a1
            id: s_jz7rpHAy8x5chQ7XF6JKdn
            source_type: api_record
            title: 中国历代人物传记资料库：王楨（CBDB 472075）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=472075&o=json
            external_identifier: CBDB:472075
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.229Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4VHEPukojouwJJfkdL3ZXg
        subject_person_id: p_jH1CgQCT1j1xXo6eBCoN9Q
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王楨，清人物。入仕監生，曾任知縣。（中国历代人物传记资料库 CBDB 472075）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Lo-LNn4Q8vCztuhgnq61Ix
          claim_id: c_4VHEPukojouwJJfkdL3ZXg
          source_id: s_jz7rpHAy8x5chQ7XF6JKdn
          stance: supports
          locator: CBDB:472075
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

# 王楨

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王楨 | accepted |
| bio.summary | 王楨，清人物。入仕監生，曾任知縣。（中国历代人物传记资料库 CBDB 472075） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王楨（CBDB 472075）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=472075&o=json)
