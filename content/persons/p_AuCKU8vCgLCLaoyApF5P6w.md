---
schema: wang-person/v1
id: p_AuCKU8vCgLCLaoyApF5P6w
status: active
merged_into: null
display_name: 王梵
cbdb_id: 259548
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9PAcSDhNQufzV4gsmDu9WT
        subject_person_id: p_AuCKU8vCgLCLaoyApF5P6w
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王梵，明人物。成化二十三年進士，籍贯慈溪。（中国历代人物传记资料库 CBDB 259548）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_VCr97VoyzkQl6lvC8KfaeV
          claim_id: c_9PAcSDhNQufzV4gsmDu9WT
          source_id: s_UK2hKfo2Z6cekRYBPKETbn
          stance: supports
          locator: CBDB:259548
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_UK2hKfo2Z6cekRYBPKETbn
            source_type: api_record
            title: 中国历代人物传记资料库：王梵（CBDB 259548）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259548&o=json
            external_identifier: CBDB:259548
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:00.581Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_3Qmu9DAhoi1eiY2PGrMtS8
        subject_person_id: p_AuCKU8vCgLCLaoyApF5P6w
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王梵
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_YFx17WxkcmtV61rAi8xiL8
          claim_id: c_3Qmu9DAhoi1eiY2PGrMtS8
          source_id: s_UK2hKfo2Z6cekRYBPKETbn
          stance: supports
          locator: CBDB:259548
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3001-3100）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ZZOSe6mG0C4aRmO5jJxvwN
        subject_person_id: p_isvcw6EfQic2NdXZzwfKeT
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_AuCKU8vCgLCLaoyApF5P6w
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CVKFJ0x0kEhgm2if2DX08b
          claim_id: c_ZZOSe6mG0C4aRmO5jJxvwN
          source_id: s_GtDoLTqA4D-AdfeTegpbLw
          stance: supports
          locator: CBDB：兄弟 王術（200545）之父／母 王洪
          quotation: null
          interpretation_note: 由兄弟关系推断：王梵 与 王術 为同胞（CBDB 记「兄」），王術 之父／母即 王梵 之父／母。
          source:
            id: s_GtDoLTqA4D-AdfeTegpbLw
            source_type: api_record
            title: 中国历代人物传记资料库：王梵（CBDB 259548）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259548&o=json
            external_identifier: CBDB:259548
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_isvcw6EfQic2NdXZzwfKeT
        status: active
        display_name: 王洪
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_12vbDx6zuBmPoSYQpger7l
        subject_person_id: p_AuCKU8vCgLCLaoyApF5P6w
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_RxU5daA7Pb2tQNaYot8QGE
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aLp1jj7rbIuA5HRwxKHQNh
          claim_id: c_12vbDx6zuBmPoSYQpger7l
          source_id: s_GtDoLTqA4D-AdfeTegpbLw
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 200545 王術）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_GtDoLTqA4D-AdfeTegpbLw
            source_type: api_record
            title: 中国历代人物传记资料库：王梵（CBDB 259548）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259548&o=json
            external_identifier: CBDB:259548
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_RxU5daA7Pb2tQNaYot8QGE
        status: active
        display_name: 王術
        merged_into_person_id: null
---

# 王梵

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王梵，明人物。成化二十三年進士，籍贯慈溪。（中国历代人物传记资料库 CBDB 259548） | accepted |
| name.primary | 王梵 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_isvcw6EfQic2NdXZzwfKeT | 王洪 | accepted |
| other | p_RxU5daA7Pb2tQNaYot8QGE | 王術 | accepted |

## 外部来源

- [中国历代人物传记资料库：王梵（CBDB 259548）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259548&o=json)
