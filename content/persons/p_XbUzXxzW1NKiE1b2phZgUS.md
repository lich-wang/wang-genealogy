---
schema: wang-person/v1
id: p_XbUzXxzW1NKiE1b2phZgUS
status: active
merged_into: null
display_name: 王濬
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AgUWXxb3uTEoQYJ9bX7KdB
        subject_person_id: p_XbUzXxzW1NKiE1b2phZgUS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王濬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_J52Ri5SFKYS4VE2DF34jTP
          claim_id: c_AgUWXxb3uTEoQYJ9bX7KdB
          source_id: s_VgQmdDdn2FCKmNKoQism56
          stance: supports
          locator: CBDB:126841
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126841）
          source: &a1
            id: s_VgQmdDdn2FCKmNKoQism56
            source_type: api_record
            title: 中国历代人物传记资料库：王濬（CBDB 126841）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126841&o=json
            external_identifier: CBDB:126841
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.254Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LkNN7ZQ642EvDsw8rCwZSL
        subject_person_id: p_XbUzXxzW1NKiE1b2phZgUS
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
        - id: cs_K4EvK7kiq2YvweBv7LjZGL
          claim_id: c_LkNN7ZQ642EvDsw8rCwZSL
          source_id: s_VgQmdDdn2FCKmNKoQism56
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_nQXnMGggru6NS39LY1fqg1
        subject_person_id: p_eRAEh5LnWC8uZKYHPCivge
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_XbUzXxzW1NKiE1b2phZgUS
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wDGvRDJ6MdVOIy30LhqHUQ
          claim_id: c_nQXnMGggru6NS39LY1fqg1
          source_id: s_HU1t1FRJ8MvpSaNQEKVPia
          stance: supports
          locator: 成化二年進士登科錄:一卷，第三甲第九十二名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_HU1t1FRJ8MvpSaNQEKVPia
            source_type: api_record
            title: 中国历代人物传记资料库：王志剛（CBDB 237964）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237964&o=json
            external_identifier: CBDB:237964
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.865Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_eRAEh5LnWC8uZKYHPCivge
        status: active
        display_name: 王志剛
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王濬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王濬 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_eRAEh5LnWC8uZKYHPCivge | 王志剛 | accepted |

## 外部来源

- [中国历代人物传记资料库：王濬（CBDB 126841）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126841&o=json)
- [中国历代人物传记资料库：王志剛（CBDB 237964）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237964&o=json)
