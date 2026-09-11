---
schema: wang-person/v1
id: p_tuf6Y9AXWQN6kvcQsy6Eb8
status: active
merged_into: null
display_name: 王宗源
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_J41b7ecv3PteBej3jUHS99
        subject_person_id: p_tuf6Y9AXWQN6kvcQsy6Eb8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗源
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_RQJn4V7MjfVADQ7SNQT95w
          claim_id: c_J41b7ecv3PteBej3jUHS99
          source_id: s_pQKX4VAq7vJn1vwFebqWCr
          stance: supports
          locator: CBDB:126561
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126561）
          source: &a1
            id: s_pQKX4VAq7vJn1vwFebqWCr
            source_type: api_record
            title: 中国历代人物传记资料库：王宗源（CBDB 126561）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126561&o=json
            external_identifier: CBDB:126561
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.026Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_C3cAE7EEZpoSw1ip142ABy
        subject_person_id: p_tuf6Y9AXWQN6kvcQsy6Eb8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7TRF7eVB4EfUaKR2Vx4jZA
          claim_id: c_C3cAE7EEZpoSw1ip142ABy
          source_id: s_pQKX4VAq7vJn1vwFebqWCr
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_chB6R7rFCF-ZTAbp6tHgpe
        subject_person_id: p_NfVYYG7aC993nZohPs46Tb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_tuf6Y9AXWQN6kvcQsy6Eb8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_C_1-JWMeFVNu14bq32byrE
          claim_id: c_chB6R7rFCF-ZTAbp6tHgpe
          source_id: s_WpjzphdLGVxmNyJz4aD98K
          stance: supports
          locator: 正德六年進士登科錄:一卷，第三甲第一百五十八名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_WpjzphdLGVxmNyJz4aD98K
            source_type: api_record
            title: 中国历代人物传记资料库：王綱（CBDB 278547）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278547&o=json
            external_identifier: CBDB:278547
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.968Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_NfVYYG7aC993nZohPs46Tb
        status: active
        display_name: 王綱
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_XqQxrf3jawispPQsy1tr3X
        subject_person_id: p_KJHVQ18CXp8JnPpw1kCNjQ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_tuf6Y9AXWQN6kvcQsy6Eb8
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2EGSQruOAvdwA43JM3YQd8
          claim_id: c_XqQxrf3jawispPQsy1tr3X
          source_id: s_gC8FP3LtB48EcQP9A7GPeo
          stance: supports
          locator: 正德六年進士登科錄:一卷，第三甲第一百五十八名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_gC8FP3LtB48EcQP9A7GPeo
            source_type: api_record
            title: 中国历代人物传记资料库：王彝（CBDB 278545）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278545&o=json
            external_identifier: CBDB:278545
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.966Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_KJHVQ18CXp8JnPpw1kCNjQ
        status: active
        display_name: 王彝
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王宗源

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宗源 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_NfVYYG7aC993nZohPs46Tb | 王綱 | accepted |
| ancestors | p_KJHVQ18CXp8JnPpw1kCNjQ | 王彝 | accepted |

## 外部来源

- [中国历代人物传记资料库：王綱（CBDB 278547）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278547&o=json)
- [中国历代人物传记资料库：王彝（CBDB 278545）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278545&o=json)
- [中国历代人物传记资料库：王宗源（CBDB 126561）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126561&o=json)
