---
schema: wang-person/v1
id: p_tw582PUN9HRNyw2YDV8FVE
status: active
merged_into: null
display_name: 王同倫
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_aRtPcfWZgXmxHanvBXdJ2b
        subject_person_id: p_tw582PUN9HRNyw2YDV8FVE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王同倫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_iaDHc4LLkqtQ4CKxF1PZwD
          claim_id: c_aRtPcfWZgXmxHanvBXdJ2b
          source_id: s_KpB9fmDGGMJTNyFhQF3vMQ
          stance: supports
          locator: CBDB:327392
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（327392）
          source: &a1
            id: s_KpB9fmDGGMJTNyFhQF3vMQ
            source_type: api_record
            title: 中国历代人物传记资料库：王同倫（CBDB 327392）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327392&o=json
            external_identifier: CBDB:327392
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.247Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gMwjDBTWkY7A9sD47DNmb7
        subject_person_id: p_tw582PUN9HRNyw2YDV8FVE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王同倫，明人物。嘉靖四十一年進士，籍贯黃岡。（中国历代人物传记资料库 CBDB 327392）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_iEYXvgheyJjOx_jfTsIHka
          claim_id: c_gMwjDBTWkY7A9sD47DNmb7
          source_id: s_KpB9fmDGGMJTNyFhQF3vMQ
          stance: supports
          locator: CBDB:327392
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_21zQJPLWvUsP4H-V3Tsw96
        subject_person_id: p_A2Zw5HgNNKQfknjQ8rX9z5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_tw582PUN9HRNyw2YDV8FVE
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TeQeiZOPGE_yJ291nfCK-b
          claim_id: c_21zQJPLWvUsP4H-V3Tsw96
          source_id: s_GwxOo-55nIkxy4cciZaO82
          stance: supports
          locator: CBDB：兄弟 王同道（205031）之父／母 王廷槐
          quotation: null
          interpretation_note: 由兄弟关系推断：王同倫 与 王同道 为同胞（CBDB 记「兄」），王同道 之父／母即 王同倫 之父／母。
          source:
            id: s_GwxOo-55nIkxy4cciZaO82
            source_type: api_record
            title: 中国历代人物传记资料库：王同倫（CBDB 327392）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327392&o=json
            external_identifier: CBDB:327392
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_A2Zw5HgNNKQfknjQ8rX9z5
        status: active
        display_name: 王廷槐
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_0vG9ozNlXnF8g44iz4lhUZ
        subject_person_id: p_DpH4HNkjrsP3PNvkueYKFC
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_tw582PUN9HRNyw2YDV8FVE
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Jny99RdWh1hhERa7wH9fau
          claim_id: c_0vG9ozNlXnF8g44iz4lhUZ
          source_id: s_GwxOo-55nIkxy4cciZaO82
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205031 王同道）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_GwxOo-55nIkxy4cciZaO82
            source_type: api_record
            title: 中国历代人物传记资料库：王同倫（CBDB 327392）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327392&o=json
            external_identifier: CBDB:327392
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_DpH4HNkjrsP3PNvkueYKFC
        status: active
        display_name: 王同道
        merged_into_person_id: null
---

# 王同倫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王同倫 | accepted |
| bio.summary | 王同倫，明人物。嘉靖四十一年進士，籍贯黃岡。（中国历代人物传记资料库 CBDB 327392） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_A2Zw5HgNNKQfknjQ8rX9z5 | 王廷槐 | accepted |
| other | p_DpH4HNkjrsP3PNvkueYKFC | 王同道 | accepted |

## 外部来源

- [中国历代人物传记资料库：王同倫（CBDB 327392）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327392&o=json)
