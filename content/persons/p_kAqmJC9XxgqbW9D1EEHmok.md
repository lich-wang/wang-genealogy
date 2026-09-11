---
schema: wang-person/v1
id: p_kAqmJC9XxgqbW9D1EEHmok
status: active
merged_into: null
display_name: 王文江
cbdb_id: 238211
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2CfKPB1bz2ZGRUmfPtUccg
        subject_person_id: p_kAqmJC9XxgqbW9D1EEHmok
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文江，明人物。中国历代人物传记资料库（CBDB）以人物编号 238211 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_w2D2qLo_BfvWgH5DrqCRal
          claim_id: c_2CfKPB1bz2ZGRUmfPtUccg
          source_id: s_DNwqheasHkTpLLv71a3Aex
          stance: supports
          locator: CBDB:238211
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_DNwqheasHkTpLLv71a3Aex
            source_type: api_record
            title: 中国历代人物传记资料库：王文江（CBDB 238211）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238211&o=json
            external_identifier: CBDB:238211
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.856Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Wm77UeH1BfiHHGz9sNWFCr
        subject_person_id: p_kAqmJC9XxgqbW9D1EEHmok
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文江
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_39GBjAF2FafKVjT1kDpAJn
          claim_id: c_Wm77UeH1BfiHHGz9sNWFCr
          source_id: s_DNwqheasHkTpLLv71a3Aex
          stance: supports
          locator: CBDB:238211
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2801-2900）｜历史性依据：CBDB 朝代 = 明
          source:
            id: s_DNwqheasHkTpLLv71a3Aex
            source_type: api_record
            title: 中国历代人物传记资料库：王文江（CBDB 238211）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238211&o=json
            external_identifier: CBDB:238211
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.856Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_oLD9wyCqlHsRc8OTHodYJ8
        subject_person_id: p_kAqmJC9XxgqbW9D1EEHmok
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_UigxC39qu348GRPzwB2VV6
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Iw_exa0lga-Zc6H-v0JkjK
          claim_id: c_oLD9wyCqlHsRc8OTHodYJ8
          source_id: s_ePBk9yjtryp6Aok3sJ2P9k
          stance: supports
          locator: 正统七年進士登科錄:一卷，第三甲第二十九名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ePBk9yjtryp6Aok3sJ2P9k
            source_type: api_record
            title: 中国历代人物传记资料库：王理（CBDB 126681）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126681&o=json
            external_identifier: CBDB:126681
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.118Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_UigxC39qu348GRPzwB2VV6
        status: active
        display_name: 王理
        merged_into_person_id: null
  other: []
---

# 王文江

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王文江，明人物。中国历代人物传记资料库（CBDB）以人物编号 238211 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王文江 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_UigxC39qu348GRPzwB2VV6 | 王理 | accepted |

## 外部来源

- [中国历代人物传记资料库：王理（CBDB 126681）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126681&o=json)
- [中国历代人物传记资料库：王文江（CBDB 238211）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238211&o=json)
