---
schema: wang-person/v1
id: p_WvpouDrnZddAA1pwt6Bsjk
status: active
merged_into: null
display_name: 王松
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XEC9gKtvGhsYWKFNG8rUcD
        subject_person_id: p_WvpouDrnZddAA1pwt6Bsjk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王松
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_88L34pMpFpNzhFUPtQoUSV
          claim_id: c_XEC9gKtvGhsYWKFNG8rUcD
          source_id: s_BytuU21GhTmb29DJnEfLaS
          stance: supports
          locator: CBDB:329703
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（329703）
          source: &a1
            id: s_BytuU21GhTmb29DJnEfLaS
            source_type: api_record
            title: 中国历代人物传记资料库：王松（CBDB 329703）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329703&o=json
            external_identifier: CBDB:329703
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.338Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_S3tnaVc8Hx7ec2YvQ3uY7z
        subject_person_id: p_WvpouDrnZddAA1pwt6Bsjk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王松，明人物。嘉靖四十四年進士，籍贯遵化。（中国历代人物传记资料库 CBDB 329703）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ZYeADDqELo4dCf17Nm_Or9
          claim_id: c_S3tnaVc8Hx7ec2YvQ3uY7z
          source_id: s_BytuU21GhTmb29DJnEfLaS
          stance: supports
          locator: CBDB:329703
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_3nSS_XBYQ8t1maxXzaUONk
        subject_person_id: p_YHFTAXms1Jyvocf8LFCxJZ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_WvpouDrnZddAA1pwt6Bsjk
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KDD1wZCT_FqZjsM6bHtDJM
          claim_id: c_3nSS_XBYQ8t1maxXzaUONk
          source_id: s_B6RwL-qEeT8gLK-17S1050
          stance: supports
          locator: CBDB：兄弟 王楣（205205）之父／母 王經
          quotation: null
          interpretation_note: 由兄弟关系推断：王松 与 王楣 为同胞（CBDB 记「兄」），王楣 之父／母即 王松 之父／母。
          source:
            id: s_B6RwL-qEeT8gLK-17S1050
            source_type: api_record
            title: 中国历代人物传记资料库：王松（CBDB 329703）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329703&o=json
            external_identifier: CBDB:329703
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_YHFTAXms1Jyvocf8LFCxJZ
        status: active
        display_name: 王經
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_SyP7ymJaEz68H2QIk4qBC6
        subject_person_id: p_WvpouDrnZddAA1pwt6Bsjk
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_hoiRRCExCw4KSUTuvH17WP
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_i1snNq3ANW4d3kjWObVfKX
          claim_id: c_SyP7ymJaEz68H2QIk4qBC6
          source_id: s_B6RwL-qEeT8gLK-17S1050
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205205 王楣）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_B6RwL-qEeT8gLK-17S1050
            source_type: api_record
            title: 中国历代人物传记资料库：王松（CBDB 329703）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329703&o=json
            external_identifier: CBDB:329703
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_hoiRRCExCw4KSUTuvH17WP
        status: active
        display_name: 王楣
        merged_into_person_id: null
---

# 王松

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王松 | accepted |
| bio.summary | 王松，明人物。嘉靖四十四年進士，籍贯遵化。（中国历代人物传记资料库 CBDB 329703） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_YHFTAXms1Jyvocf8LFCxJZ | 王經 | accepted |
| other | p_hoiRRCExCw4KSUTuvH17WP | 王楣 | accepted |

## 外部来源

- [中国历代人物传记资料库：王松（CBDB 329703）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329703&o=json)
