---
schema: wang-person/v1
id: p_UCY7Lf35hoXK1P9ERpnsFv
status: active
merged_into: null
display_name: 王子昌
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MqLbYvHZ3qME5Q9V9CrmRP
        subject_person_id: p_UCY7Lf35hoXK1P9ERpnsFv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王子昌
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_e8P7iNMv853B1DSa2n4uET
          claim_id: c_MqLbYvHZ3qME5Q9V9CrmRP
          source_id: s_vXRma67PtKgp4zgo2uC681
          stance: supports
          locator: CBDB:294940
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（294940）
          source: &a1
            id: s_vXRma67PtKgp4zgo2uC681
            source_type: api_record
            title: 中国历代人物传记资料库：王子昌（CBDB 294940）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294940&o=json
            external_identifier: CBDB:294940
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.481Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MoDAw72BsL4HZH7Jgp4Ng6
        subject_person_id: p_UCY7Lf35hoXK1P9ERpnsFv
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王子昌，明人物。天順元年進士，籍贯金華。（中国历代人物传记资料库 CBDB 294940）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_jhH5ZzkY6dejx-DwqneMOK
          claim_id: c_MoDAw72BsL4HZH7Jgp4Ng6
          source_id: s_vXRma67PtKgp4zgo2uC681
          stance: supports
          locator: CBDB:294940
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_q75jy5dJlHBJZ0dsFcics0
        subject_person_id: p_UCY7Lf35hoXK1P9ERpnsFv
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_uaek5dH7vUvS3w7o2aMbko
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-nH6kJUQkYJVieOGT1n3MG
          claim_id: c_q75jy5dJlHBJZ0dsFcics0
          source_id: s_2ALbcHnh28ruonXPAzF68S
          stance: supports
          locator: 天順元年進士登科錄:一卷，第三甲第四十名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_2ALbcHnh28ruonXPAzF68S
            source_type: api_record
            title: 中国历代人物传记资料库：王存禮（CBDB 198619）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198619&o=json
            external_identifier: CBDB:198619
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.504Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_uaek5dH7vUvS3w7o2aMbko
        status: active
        display_name: 王存禮
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王子昌

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王子昌 | accepted |
| bio.summary | 王子昌，明人物。天順元年進士，籍贯金華。（中国历代人物传记资料库 CBDB 294940） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_uaek5dH7vUvS3w7o2aMbko | 王存禮 | accepted |

## 外部来源

- [中国历代人物传记资料库：王存禮（CBDB 198619）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198619&o=json)
- [中国历代人物传记资料库：王子昌（CBDB 294940）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294940&o=json)
