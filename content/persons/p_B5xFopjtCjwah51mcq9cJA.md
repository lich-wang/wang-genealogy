---
schema: wang-person/v1
id: p_B5xFopjtCjwah51mcq9cJA
status: active
merged_into: null
display_name: 王廷錦
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_UQ19EGaG7xT9ZxkCQ9N482
        subject_person_id: p_B5xFopjtCjwah51mcq9cJA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷錦
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_WzwX9HkPLvFXLczb36LN5r
          claim_id: c_UQ19EGaG7xT9ZxkCQ9N482
          source_id: s_2u1KgwTN7aP5HCL4EYXQDP
          stance: supports
          locator: CBDB:229373
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（229373）
          source: &a1
            id: s_2u1KgwTN7aP5HCL4EYXQDP
            source_type: api_record
            title: 中国历代人物传记资料库：王廷錦（CBDB 229373）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=229373&o=json
            external_identifier: CBDB:229373
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.573Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8N8PCqpEphK2FcoiTASpkL
        subject_person_id: p_B5xFopjtCjwah51mcq9cJA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷錦，明人物。萬曆丙戌科進士進士，曾任壽官。（中国历代人物传记资料库 CBDB 229373）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_VnSTRaA8e5WjrChmvfY5Di
          claim_id: c_8N8PCqpEphK2FcoiTASpkL
          source_id: s_2u1KgwTN7aP5HCL4EYXQDP
          stance: supports
          locator: CBDB:229373
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
        id: c_YbBnVTXSRO0G9iTn2cqmzj
        subject_person_id: p_B5xFopjtCjwah51mcq9cJA
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_p7XKo89NhBCAZto4tXob1s
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Js-AKoqHP2DG6ctZ2uOeeK
          claim_id: c_YbBnVTXSRO0G9iTn2cqmzj
          source_id: s_2u1KgwTN7aP5HCL4EYXQDP
          stance: supports
          locator: 萬曆丙戌科進士同年總錄，第三甲第二百五十名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_p7XKo89NhBCAZto4tXob1s
        status: active
        display_name: 王希夔
        merged_into_person_id: null
  other: []
---

# 王廷錦

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廷錦 | accepted |
| bio.summary | 王廷錦，明人物。萬曆丙戌科進士進士，曾任壽官。（中国历代人物传记资料库 CBDB 229373） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_p7XKo89NhBCAZto4tXob1s | 王希夔 | accepted |

## 外部来源

- [中国历代人物传记资料库：王廷錦（CBDB 229373）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=229373&o=json)
