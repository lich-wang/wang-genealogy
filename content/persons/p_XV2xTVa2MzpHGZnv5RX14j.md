---
schema: wang-person/v1
id: p_XV2xTVa2MzpHGZnv5RX14j
status: active
merged_into: null
display_name: 王剛
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9q8eAwnV4579bFAoHngWoH
        subject_person_id: p_XV2xTVa2MzpHGZnv5RX14j
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王剛
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ZoYVD42DZgSEFErdVqSmpk
          claim_id: c_9q8eAwnV4579bFAoHngWoH
          source_id: s_KvP8j8EcLHpy5wyho2xdEC
          stance: supports
          locator: CBDB:296991
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（296991）
          source: &a1
            id: s_KvP8j8EcLHpy5wyho2xdEC
            source_type: api_record
            title: 中国历代人物传记资料库：王剛（CBDB 296991）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=296991&o=json
            external_identifier: CBDB:296991
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.538Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_c66E88JGME9ZuPCN5EJ2Xk
        subject_person_id: p_XV2xTVa2MzpHGZnv5RX14j
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王剛，明人物。天順元年進士，籍贯盧龍。（中国历代人物传记资料库 CBDB 296991）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_pwQhOjFvkAsy9Lz9oZXFZi
          claim_id: c_c66E88JGME9ZuPCN5EJ2Xk
          source_id: s_KvP8j8EcLHpy5wyho2xdEC
          stance: supports
          locator: CBDB:296991
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Ew1HZdafLw0ctPYp2EFXNN
        subject_person_id: p_e8GwzBVysey3Kb4uNTABDK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_XV2xTVa2MzpHGZnv5RX14j
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HVS1EzNCkx4cVGz1tJihFY
          claim_id: c_Ew1HZdafLw0ctPYp2EFXNN
          source_id: s_ulbykcTIDdfVW96rGvDpCp
          stance: supports
          locator: CBDB：兄弟 王佐（198633）之父／母 王敬
          quotation: null
          interpretation_note: 由兄弟关系推断：王剛 与 王佐 为同胞（CBDB 记「兄」），王佐 之父／母即 王剛 之父／母。
          source:
            id: s_ulbykcTIDdfVW96rGvDpCp
            source_type: api_record
            title: 中国历代人物传记资料库：王剛（CBDB 296991）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=296991&o=json
            external_identifier: CBDB:296991
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_e8GwzBVysey3Kb4uNTABDK
        status: active
        display_name: 王敬
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_2cKx2K98H-i7jt0_OARwfG
        subject_person_id: p_1vXY7qFFYMcnZjgBc9EDs8
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_XV2xTVa2MzpHGZnv5RX14j
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Jh15P-dGRrq0o0dblKgnBN
          claim_id: c_2cKx2K98H-i7jt0_OARwfG
          source_id: s_ulbykcTIDdfVW96rGvDpCp
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 198633 王佐）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_ulbykcTIDdfVW96rGvDpCp
            source_type: api_record
            title: 中国历代人物传记资料库：王剛（CBDB 296991）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=296991&o=json
            external_identifier: CBDB:296991
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_1vXY7qFFYMcnZjgBc9EDs8
        status: active
        display_name: 王佐
        merged_into_person_id: null
---

# 王剛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王剛 | accepted |
| bio.summary | 王剛，明人物。天順元年進士，籍贯盧龍。（中国历代人物传记资料库 CBDB 296991） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_e8GwzBVysey3Kb4uNTABDK | 王敬 | accepted |
| other | p_1vXY7qFFYMcnZjgBc9EDs8 | 王佐 | accepted |

## 外部来源

- [中国历代人物传记资料库：王剛（CBDB 296991）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=296991&o=json)
