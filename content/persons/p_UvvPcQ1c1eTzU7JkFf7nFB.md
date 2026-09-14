---
schema: wang-person/v1
id: p_UvvPcQ1c1eTzU7JkFf7nFB
status: active
merged_into: null
display_name: 王英甫
cbdb_id: 253510
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_yBXxGGSHPkN2z4yKji11Y2
        subject_person_id: p_UvvPcQ1c1eTzU7JkFf7nFB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王英甫，明人物。成化十四年進士，籍贯莆田。（中国历代人物传记资料库 CBDB 253510）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_dfXARrfAbyjOtsLFe-LfAn
          claim_id: c_yBXxGGSHPkN2z4yKji11Y2
          source_id: s_5tfCRSzsrQECJoQHGT95DN
          stance: supports
          locator: CBDB:253510
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_5tfCRSzsrQECJoQHGT95DN
            source_type: api_record
            title: 中国历代人物传记资料库：王英甫（CBDB 253510）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=253510&o=json
            external_identifier: CBDB:253510
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:00.581Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_EHgsH1DnVGtED53YuAK65m
        subject_person_id: p_UvvPcQ1c1eTzU7JkFf7nFB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王英甫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_vm1ZXY53gMBrTJJagQq7KG
          claim_id: c_EHgsH1DnVGtED53YuAK65m
          source_id: s_5tfCRSzsrQECJoQHGT95DN
          stance: supports
          locator: CBDB:253510
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3001-3100）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_v2hCFcALK9hNOVL6NoFVPS
        subject_person_id: p_DQN1sEVrdLYQ7FBcwLS1Bs
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_UvvPcQ1c1eTzU7JkFf7nFB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dddUOws5wDT6x_H7hYfjM7
          claim_id: c_v2hCFcALK9hNOVL6NoFVPS
          source_id: s_TAX2ZjoqniMEz4B1aGxwjj
          stance: supports
          locator: CBDB：兄弟 王朝器（126721）之父／母 王廷燦
          quotation: null
          interpretation_note: 由兄弟关系推断：王英甫 与 王朝器 为同胞（CBDB 记「弟」），王朝器 之父／母即 王英甫 之父／母。
          source:
            id: s_TAX2ZjoqniMEz4B1aGxwjj
            source_type: api_record
            title: 中国历代人物传记资料库：王英甫（CBDB 253510）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=253510&o=json
            external_identifier: CBDB:253510
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_DQN1sEVrdLYQ7FBcwLS1Bs
        status: active
        display_name: 王廷燦
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_AKJ3qWTIKftgVY4umgB7zb
        subject_person_id: p_UvvPcQ1c1eTzU7JkFf7nFB
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_sEeXqdWXxCSXF7ps67if1m
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xqNiPFgwPD8nrlz_Ta_5aP
          claim_id: c_AKJ3qWTIKftgVY4umgB7zb
          source_id: s_TAX2ZjoqniMEz4B1aGxwjj
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126721 王朝器）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_TAX2ZjoqniMEz4B1aGxwjj
            source_type: api_record
            title: 中国历代人物传记资料库：王英甫（CBDB 253510）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=253510&o=json
            external_identifier: CBDB:253510
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_sEeXqdWXxCSXF7ps67if1m
        status: active
        display_name: 王朝器
        merged_into_person_id: null
---

# 王英甫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王英甫，明人物。成化十四年進士，籍贯莆田。（中国历代人物传记资料库 CBDB 253510） | accepted |
| name.primary | 王英甫 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_DQN1sEVrdLYQ7FBcwLS1Bs | 王廷燦 | accepted |
| other | p_sEeXqdWXxCSXF7ps67if1m | 王朝器 | accepted |

## 外部来源

- [中国历代人物传记资料库：王英甫（CBDB 253510）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=253510&o=json)
