---
schema: wang-person/v1
id: p_k7nhfJAUjNcE3wixC7oDAa
status: active
merged_into: null
display_name: 王相
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_WpTQHxhML2NHzA65QHnVwz
        subject_person_id: p_k7nhfJAUjNcE3wixC7oDAa
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王相
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_mkWDwRyXSr1HXdnmhtjFiP
          claim_id: c_WpTQHxhML2NHzA65QHnVwz
          source_id: s_x6JwkVHUBfCmWX133L5Xpf
          stance: supports
          locator: CBDB:262002
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（262002）
          source: &a1
            id: s_x6JwkVHUBfCmWX133L5Xpf
            source_type: api_record
            title: 中国历代人物传记资料库：王相（CBDB 262002）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262002&o=json
            external_identifier: CBDB:262002
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.574Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1W14MDKxhV2h6ZcFvYeueS
        subject_person_id: p_k7nhfJAUjNcE3wixC7oDAa
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王相，明人物。弘治三年進士，籍贯臨川。（中国历代人物传记资料库 CBDB 262002）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_KpYwMuH0DGaQvD8Ke7bXtl
          claim_id: c_1W14MDKxhV2h6ZcFvYeueS
          source_id: s_x6JwkVHUBfCmWX133L5Xpf
          stance: supports
          locator: CBDB:262002
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_su7G_K89cIAMacjXcXKg0S
        subject_person_id: p_HxJiGj8JHn8DhGEqa1wJaa
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_k7nhfJAUjNcE3wixC7oDAa
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UTOPIeidRDyRlL-0uE7JDN
          claim_id: c_su7G_K89cIAMacjXcXKg0S
          source_id: s_n_CkjBfSKpHo-W5EVR51tR
          stance: supports
          locator: CBDB：兄弟 王統（200725）之父／母 王大綸
          quotation: null
          interpretation_note: 由兄弟关系推断：王相 与 王統 为同胞（CBDB 记「兄」），王統 之父／母即 王相 之父／母。
          source:
            id: s_n_CkjBfSKpHo-W5EVR51tR
            source_type: api_record
            title: 中国历代人物传记资料库：王相（CBDB 262002）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262002&o=json
            external_identifier: CBDB:262002
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_HxJiGj8JHn8DhGEqa1wJaa
        status: active
        display_name: 王大綸
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_MDstmXWXen8v6iiOIHYETX
        subject_person_id: p_2LSGWLrXs7XnndXnW76V8U
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_k7nhfJAUjNcE3wixC7oDAa
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9_7bdQjjPngjtP1Ym1P9aO
          claim_id: c_MDstmXWXen8v6iiOIHYETX
          source_id: s_n_CkjBfSKpHo-W5EVR51tR
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 200725 王統）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_n_CkjBfSKpHo-W5EVR51tR
            source_type: api_record
            title: 中国历代人物传记资料库：王相（CBDB 262002）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262002&o=json
            external_identifier: CBDB:262002
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_2LSGWLrXs7XnndXnW76V8U
        status: active
        display_name: 王統
        merged_into_person_id: null
---

# 王相

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王相 | accepted |
| bio.summary | 王相，明人物。弘治三年進士，籍贯臨川。（中国历代人物传记资料库 CBDB 262002） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_HxJiGj8JHn8DhGEqa1wJaa | 王大綸 | accepted |
| other | p_2LSGWLrXs7XnndXnW76V8U | 王統 | accepted |

## 外部来源

- [中国历代人物传记资料库：王相（CBDB 262002）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262002&o=json)
