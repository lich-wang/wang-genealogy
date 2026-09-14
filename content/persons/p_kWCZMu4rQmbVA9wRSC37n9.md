---
schema: wang-person/v1
id: p_kWCZMu4rQmbVA9wRSC37n9
status: active
merged_into: null
display_name: 王佐
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_jDpEKCBHLQWzMCCJEs4m4J
        subject_person_id: p_kWCZMu4rQmbVA9wRSC37n9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HBipVwcc3MPrBdGZ35NQ2M
          claim_id: c_jDpEKCBHLQWzMCCJEs4m4J
          source_id: s_fQ7Jc8BcQ3TdLnLftgBe5U
          stance: supports
          locator: CBDB:280414
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（280414）
          source: &a1
            id: s_fQ7Jc8BcQ3TdLnLftgBe5U
            source_type: api_record
            title: 中国历代人物传记资料库：王佐（CBDB 280414）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280414&o=json
            external_identifier: CBDB:280414
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.003Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8Ju4S2W3tsvaoYFHLzqypz
        subject_person_id: p_kWCZMu4rQmbVA9wRSC37n9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佐，明人物。正德十二年進士，籍贯莆田。（中国历代人物传记资料库 CBDB 280414）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_OOBqDw3KzBkNE74tG94CTa
          claim_id: c_8Ju4S2W3tsvaoYFHLzqypz
          source_id: s_fQ7Jc8BcQ3TdLnLftgBe5U
          stance: supports
          locator: CBDB:280414
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_t1ievyts8QOY09mACL5OpY
        subject_person_id: p_GDjC7pvEU5iRp3K4Ac1DMb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_kWCZMu4rQmbVA9wRSC37n9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3-2dsDLKlTaUHxraO0NwIH
          claim_id: c_t1ievyts8QOY09mACL5OpY
          source_id: s_G98UfkUCC89DnYJgyFogO4
          stance: supports
          locator: CBDB：兄弟 王鳳靈（126795）之父／母 王玉和
          quotation: null
          interpretation_note: 由兄弟关系推断：王佐 与 王鳳靈 为同胞（CBDB 记「弟」），王鳳靈 之父／母即 王佐 之父／母。
          source:
            id: s_G98UfkUCC89DnYJgyFogO4
            source_type: api_record
            title: 中国历代人物传记资料库：王佐（CBDB 280414）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280414&o=json
            external_identifier: CBDB:280414
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_GDjC7pvEU5iRp3K4Ac1DMb
        status: active
        display_name: 王玉和
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_iWewmlFx8FFpgJSsnGdCsD
        subject_person_id: p_ZyrbUQzJSc8r8t3Ud7TNAC
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_kWCZMu4rQmbVA9wRSC37n9
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_w0KuaNlu5dsfvb3RMNjWC5
          claim_id: c_iWewmlFx8FFpgJSsnGdCsD
          source_id: s_G98UfkUCC89DnYJgyFogO4
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126795 王鳳靈）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_G98UfkUCC89DnYJgyFogO4
            source_type: api_record
            title: 中国历代人物传记资料库：王佐（CBDB 280414）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280414&o=json
            external_identifier: CBDB:280414
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ZyrbUQzJSc8r8t3Ud7TNAC
        status: active
        display_name: 王鳳靈
        merged_into_person_id: null
---

# 王佐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王佐 | accepted |
| bio.summary | 王佐，明人物。正德十二年進士，籍贯莆田。（中国历代人物传记资料库 CBDB 280414） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_GDjC7pvEU5iRp3K4Ac1DMb | 王玉和 | accepted |
| other | p_ZyrbUQzJSc8r8t3Ud7TNAC | 王鳳靈 | accepted |

## 外部来源

- [中国历代人物传记资料库：王佐（CBDB 280414）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280414&o=json)
