---
schema: wang-person/v1
id: p_JLp2cJV9UDPXcdhx7Hi5Gp
status: active
merged_into: null
display_name: 王稷
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3hnTdwwL8Pbi64UNfk4Tgh
        subject_person_id: p_JLp2cJV9UDPXcdhx7Hi5Gp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王稷
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_dAvw72c46rACjL2FX9Bz7H
          claim_id: c_3hnTdwwL8Pbi64UNfk4Tgh
          source_id: s_67LN7RhDWTgRqMc5KaL37m
          stance: supports
          locator: CBDB:252313
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（252313）
          source: &a1
            id: s_67LN7RhDWTgRqMc5KaL37m
            source_type: api_record
            title: 中国历代人物传记资料库：王稷（CBDB 252313）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=252313&o=json
            external_identifier: CBDB:252313
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.264Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_94SMz4TMb5k22PNCzLUqnc
        subject_person_id: p_JLp2cJV9UDPXcdhx7Hi5Gp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王稷，明人物。景泰五年進士，籍贯南溪。（中国历代人物传记资料库 CBDB 252313）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_MMxTk5awXlxUYPnjhYHh0W
          claim_id: c_94SMz4TMb5k22PNCzLUqnc
          source_id: s_67LN7RhDWTgRqMc5KaL37m
          stance: supports
          locator: CBDB:252313
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_o1wBYD9wDMPB1XvSsFG6cz
        subject_person_id: p_iV3ZGAEu7iRtxc7pxEmjVQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_JLp2cJV9UDPXcdhx7Hi5Gp
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__wkYAY_mD2j7brwyC_iT0E
          claim_id: c_o1wBYD9wDMPB1XvSsFG6cz
          source_id: s_L8Cz8xViOWI0me6U1Yh5Ys
          stance: supports
          locator: CBDB：兄弟 王穀（198288）之父／母 王宴
          quotation: null
          interpretation_note: 由兄弟关系推断：王稷 与 王穀 为同胞（CBDB 记「兄」），王穀 之父／母即 王稷 之父／母。
          source:
            id: s_L8Cz8xViOWI0me6U1Yh5Ys
            source_type: api_record
            title: 中国历代人物传记资料库：王稷（CBDB 252313）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=252313&o=json
            external_identifier: CBDB:252313
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_iV3ZGAEu7iRtxc7pxEmjVQ
        status: active
        display_name: 王宴
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_kOMURL40FKKsXRLUCpCfIR
        subject_person_id: p_JLp2cJV9UDPXcdhx7Hi5Gp
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_xRgAFF1QF89F297F8SmuRt
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_q6Q8k6X-N5m1LYZnZPjcq3
          claim_id: c_kOMURL40FKKsXRLUCpCfIR
          source_id: s_L8Cz8xViOWI0me6U1Yh5Ys
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 198288 王穀）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_L8Cz8xViOWI0me6U1Yh5Ys
            source_type: api_record
            title: 中国历代人物传记资料库：王稷（CBDB 252313）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=252313&o=json
            external_identifier: CBDB:252313
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_xRgAFF1QF89F297F8SmuRt
        status: active
        display_name: 王穀
        merged_into_person_id: null
---

# 王稷

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王稷 | accepted |
| bio.summary | 王稷，明人物。景泰五年進士，籍贯南溪。（中国历代人物传记资料库 CBDB 252313） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_iV3ZGAEu7iRtxc7pxEmjVQ | 王宴 | accepted |
| other | p_xRgAFF1QF89F297F8SmuRt | 王穀 | accepted |

## 外部来源

- [中国历代人物传记资料库：王稷（CBDB 252313）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=252313&o=json)
