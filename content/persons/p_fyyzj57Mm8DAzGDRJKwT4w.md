---
schema: wang-person/v1
id: p_fyyzj57Mm8DAzGDRJKwT4w
status: active
merged_into: null
display_name: 王傑
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZRDDLJNJWHLLvwKXyMSCEX
        subject_person_id: p_fyyzj57Mm8DAzGDRJKwT4w
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王傑
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3Kuz9K5TKGagJ7zEMS1nsW
          claim_id: c_ZRDDLJNJWHLLvwKXyMSCEX
          source_id: s_z6BDHhPNfPSKpVbAjmh8De
          stance: supports
          locator: CBDB:242562
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（242562）
          source: &a1
            id: s_z6BDHhPNfPSKpVbAjmh8De
            source_type: api_record
            title: 中国历代人物传记资料库：王傑（CBDB 242562）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242562&o=json
            external_identifier: CBDB:242562
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.976Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hZac7sarGKgzFXACpuzV5L
        subject_person_id: p_fyyzj57Mm8DAzGDRJKwT4w
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王傑，明人物。成化二年進士，籍贯寧州。（中国历代人物传记资料库 CBDB 242562）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_qx71MBPJfu1OiyUT487b7Z
          claim_id: c_hZac7sarGKgzFXACpuzV5L
          source_id: s_z6BDHhPNfPSKpVbAjmh8De
          stance: supports
          locator: CBDB:242562
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_214Pc1NXE2aTOrRjCZycBb
        subject_person_id: p_EN3ydiKjRibv3nRcEaCbqj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_fyyzj57Mm8DAzGDRJKwT4w
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YakaXyulVnPY6MdO6REfHH
          claim_id: c_214Pc1NXE2aTOrRjCZycBb
          source_id: s_eO6THSszD0Y3L3TcGhcwiI
          stance: supports
          locator: CBDB：兄弟 王偉（67431）之父／母 王政
          quotation: null
          interpretation_note: 由兄弟关系推断：王傑 与 王偉 为同胞（CBDB 记「弟」），王偉 之父／母即 王傑 之父／母。
          source:
            id: s_eO6THSszD0Y3L3TcGhcwiI
            source_type: api_record
            title: 中国历代人物传记资料库：王傑（CBDB 242562）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242562&o=json
            external_identifier: CBDB:242562
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_EN3ydiKjRibv3nRcEaCbqj
        status: active
        display_name: 王政
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_mWPF8YgVjYq6WSbcWkCnzU
        subject_person_id: p_XFNHC3xzSn5PQ61c2MLe3i
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_fyyzj57Mm8DAzGDRJKwT4w
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_z4Zw5wDB8IQ-OzSVjur3Dt
          claim_id: c_mWPF8YgVjYq6WSbcWkCnzU
          source_id: s_eO6THSszD0Y3L3TcGhcwiI
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 67431 王偉）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_eO6THSszD0Y3L3TcGhcwiI
            source_type: api_record
            title: 中国历代人物传记资料库：王傑（CBDB 242562）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242562&o=json
            external_identifier: CBDB:242562
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_XFNHC3xzSn5PQ61c2MLe3i
        status: active
        display_name: 王偉
        merged_into_person_id: null
---

# 王傑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王傑 | accepted |
| bio.summary | 王傑，明人物。成化二年進士，籍贯寧州。（中国历代人物传记资料库 CBDB 242562） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_EN3ydiKjRibv3nRcEaCbqj | 王政 | accepted |
| other | p_XFNHC3xzSn5PQ61c2MLe3i | 王偉 | accepted |

## 外部来源

- [中国历代人物传记资料库：王傑（CBDB 242562）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242562&o=json)
