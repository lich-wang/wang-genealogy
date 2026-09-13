---
schema: wang-person/v1
id: p_wSXnKM2BTwAjxUJdAcHBxL
status: active
merged_into: null
display_name: 王勝受
cbdb_id: 248444
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jdxHXNFyd83dNQi6BCytqQ
        subject_person_id: p_wSXnKM2BTwAjxUJdAcHBxL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王勝受，明人物。成化十一年進士。（中国历代人物传记资料库 CBDB 248444）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_uG6mCQWs7jjwMvdYM6PF4J
          claim_id: c_jdxHXNFyd83dNQi6BCytqQ
          source_id: s_35Nwf1Q4e4dnzEL2z5SRw6
          stance: supports
          locator: CBDB:248444
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_35Nwf1Q4e4dnzEL2z5SRw6
            source_type: api_record
            title: 中国历代人物传记资料库：王勝受（CBDB 248444）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=248444&o=json
            external_identifier: CBDB:248444
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:59.761Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_mkpT1bkHP3VhYkeLRb8AHs
        subject_person_id: p_wSXnKM2BTwAjxUJdAcHBxL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王勝受
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_SMhH9aihCFwtEhbx5KEaqL
          claim_id: c_mkpT1bkHP3VhYkeLRb8AHs
          source_id: s_35Nwf1Q4e4dnzEL2z5SRw6
          stance: supports
          locator: CBDB:248444
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2901-3000）｜历史性依据：CBDB 朝代 = 明
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
  descendants:
    - claim:
        id: c_DBgK2auZgjQ0bwGPmgCs1t
        subject_person_id: p_wSXnKM2BTwAjxUJdAcHBxL
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_wtbH7xExyKzkv5ZQ6eBmE5
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VHLwyUoNO2z52a609fvLZi
          claim_id: c_DBgK2auZgjQ0bwGPmgCs1t
          source_id: s_35Nwf1Q4e4dnzEL2z5SRw6
          stance: supports
          locator: 成化十一年進士登科錄:一卷，第二甲第七十三名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_35Nwf1Q4e4dnzEL2z5SRw6
            source_type: api_record
            title: 中国历代人物传记资料库：王勝受（CBDB 248444）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=248444&o=json
            external_identifier: CBDB:248444
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:59.761Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_wtbH7xExyKzkv5ZQ6eBmE5
        status: active
        display_name: 王敏
        merged_into_person_id: null
  other: []
---

# 王勝受

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王勝受，明人物。成化十一年進士。（中国历代人物传记资料库 CBDB 248444） | accepted |
| name.primary | 王勝受 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_wtbH7xExyKzkv5ZQ6eBmE5 | 王敏 | accepted |

## 外部来源

- [中国历代人物传记资料库：王勝受（CBDB 248444）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=248444&o=json)
