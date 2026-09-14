---
schema: wang-person/v1
id: p_DPFCgxr4LairETxw54Hxu7
status: active
merged_into: null
display_name: 王組
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5E8Ptj5etEA4dwywDyFD3a
        subject_person_id: p_DPFCgxr4LairETxw54Hxu7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王組
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_V8BHx8ZuEgLEPPh6tRky9S
          claim_id: c_5E8Ptj5etEA4dwywDyFD3a
          source_id: s_KaNKKN6EDDJ2pQLNGJRrQd
          stance: supports
          locator: CBDB:285666
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（285666）
          source: &a1
            id: s_KaNKKN6EDDJ2pQLNGJRrQd
            source_type: api_record
            title: 中国历代人物传记资料库：王組（CBDB 285666）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285666&o=json
            external_identifier: CBDB:285666
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.218Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LGayV3ZKT11yu7Z3FiEdMU
        subject_person_id: p_DPFCgxr4LairETxw54Hxu7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王組，明人物。正德十六年進士，籍贯開州。（中国历代人物传记资料库 CBDB 285666）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_4PEKBLIgKY1gjVgpc5Jm5z
          claim_id: c_LGayV3ZKT11yu7Z3FiEdMU
          source_id: s_KaNKKN6EDDJ2pQLNGJRrQd
          stance: supports
          locator: CBDB:285666
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_IktJDAarkkvYP7ldDCe4Zm
        subject_person_id: p_ETf8kmCosGHgchW9GUTGiB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DPFCgxr4LairETxw54Hxu7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4aX7tSHqWzyZxiW9ypI42o
          claim_id: c_IktJDAarkkvYP7ldDCe4Zm
          source_id: s_4Q9fe69WTT-3AzW9CidemO
          stance: supports
          locator: CBDB：兄弟 王紀（202256）之父／母 王絕
          quotation: null
          interpretation_note: 由兄弟关系推断：王組 与 王紀 为同胞（CBDB 记「兄」），王紀 之父／母即 王組 之父／母。
          source:
            id: s_4Q9fe69WTT-3AzW9CidemO
            source_type: api_record
            title: 中国历代人物传记资料库：王組（CBDB 285666）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285666&o=json
            external_identifier: CBDB:285666
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ETf8kmCosGHgchW9GUTGiB
        status: active
        display_name: 王絕
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_ObwiZ6W-9pDOlok4r4ICVU
        subject_person_id: p_AoR8GkNH17NPVQc7r3ceML
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_DPFCgxr4LairETxw54Hxu7
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9zV1NgVFdwdeB5VU3uc8ge
          claim_id: c_ObwiZ6W-9pDOlok4r4ICVU
          source_id: s_4Q9fe69WTT-3AzW9CidemO
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202256 王紀）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_4Q9fe69WTT-3AzW9CidemO
            source_type: api_record
            title: 中国历代人物传记资料库：王組（CBDB 285666）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285666&o=json
            external_identifier: CBDB:285666
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_AoR8GkNH17NPVQc7r3ceML
        status: active
        display_name: 王紀
        merged_into_person_id: null
---

# 王組

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王組 | accepted |
| bio.summary | 王組，明人物。正德十六年進士，籍贯開州。（中国历代人物传记资料库 CBDB 285666） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ETf8kmCosGHgchW9GUTGiB | 王絕 | accepted |
| other | p_AoR8GkNH17NPVQc7r3ceML | 王紀 | accepted |

## 外部来源

- [中国历代人物传记资料库：王組（CBDB 285666）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285666&o=json)
