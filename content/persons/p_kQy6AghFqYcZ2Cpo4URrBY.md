---
schema: wang-person/v1
id: p_kQy6AghFqYcZ2Cpo4URrBY
status: active
merged_into: null
display_name: 王夣卜
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_rgN8MS8hpxRa26oDZV1d4k
        subject_person_id: p_kQy6AghFqYcZ2Cpo4URrBY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王夣卜
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_kRELHsFTK35HhpQhtCfyad
          claim_id: c_rgN8MS8hpxRa26oDZV1d4k
          source_id: s_HJUy4AEVfWnhG2HjbCStQf
          stance: supports
          locator: CBDB:683521
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（683521）
          source: &a1
            id: s_HJUy4AEVfWnhG2HjbCStQf
            source_type: api_record
            title: 中国历代人物传记资料库：王夣卜（CBDB 683521）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=683521&o=json
            external_identifier: CBDB:683521
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.459Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZuQqT184o87uq4HfRwLywg
        subject_person_id: p_kQy6AghFqYcZ2Cpo4URrBY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王夣卜，清人物。籍贯固始。（中国历代人物传记资料库 CBDB 683521）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_5NoiDnRXj-t5m8bSAUsToJ
          claim_id: c_ZuQqT184o87uq4HfRwLywg
          source_id: s_HJUy4AEVfWnhG2HjbCStQf
          stance: supports
          locator: CBDB:683521
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

# 王夣卜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王夣卜 | accepted |
| bio.summary | 王夣卜，清人物。籍贯固始。（中国历代人物传记资料库 CBDB 683521） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王夣卜（CBDB 683521）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=683521&o=json)
