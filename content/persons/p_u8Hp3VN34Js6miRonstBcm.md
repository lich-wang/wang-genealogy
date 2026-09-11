---
schema: wang-person/v1
id: p_u8Hp3VN34Js6miRonstBcm
status: active
merged_into: null
display_name: 王璇
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_n4Tmioc9Tcr2X2myFSWmDH
        subject_person_id: p_u8Hp3VN34Js6miRonstBcm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_swPNpXkgiMMAtMPDx79ywF
          claim_id: c_n4Tmioc9Tcr2X2myFSWmDH
          source_id: s_EkX2aC5RxaEMZbBXFZpK3k
          stance: supports
          locator: CBDB:223624
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（223624）
          source: &a1
            id: s_EkX2aC5RxaEMZbBXFZpK3k
            source_type: api_record
            title: 中国历代人物传记资料库：王璇（CBDB 223624）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=223624&o=json
            external_identifier: CBDB:223624
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.416Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EoU4XpStGFJ3rPvu7osZNu
        subject_person_id: p_u8Hp3VN34Js6miRonstBcm
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璇，明人物。萬曆十一年進士。（中国历代人物传记资料库 CBDB 223624）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_iLa1QUTtAY3mcsKa3j3Vpf
          claim_id: c_EoU4XpStGFJ3rPvu7osZNu
          source_id: s_EkX2aC5RxaEMZbBXFZpK3k
          stance: supports
          locator: CBDB:223624
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
  descendants:
    - claim:
        id: c_kj-uttt59obTM4vb0Mdieb
        subject_person_id: p_u8Hp3VN34Js6miRonstBcm
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_3hY5he8M9mkvGyZik66bM3
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aacWHQhDDqqVlUh9tudQHy
          claim_id: c_kj-uttt59obTM4vb0Mdieb
          source_id: s_EkX2aC5RxaEMZbBXFZpK3k
          stance: supports
          locator: 萬曆十一年進士登科錄:一卷，第三甲第六十九名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_3hY5he8M9mkvGyZik66bM3
        status: active
        display_name: 王室垣
        merged_into_person_id: null
  other: []
---

# 王璇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王璇 | accepted |
| bio.summary | 王璇，明人物。萬曆十一年進士。（中国历代人物传记资料库 CBDB 223624） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_3hY5he8M9mkvGyZik66bM3 | 王室垣 | accepted |

## 外部来源

- [中国历代人物传记资料库：王璇（CBDB 223624）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=223624&o=json)
