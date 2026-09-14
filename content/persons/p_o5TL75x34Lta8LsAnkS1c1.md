---
schema: wang-person/v1
id: p_o5TL75x34Lta8LsAnkS1c1
status: active
merged_into: null
display_name: 王闉
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DggHs2wRY1vWaGTH4hWVFK
        subject_person_id: p_o5TL75x34Lta8LsAnkS1c1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王闉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FbGPV6JKr4JGi5wRVaivDu
          claim_id: c_DggHs2wRY1vWaGTH4hWVFK
          source_id: s_Rvo3Cmi6EBqzDLtpUUu8Td
          stance: supports
          locator: CBDB:323751
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（323751）
          source: &a1
            id: s_Rvo3Cmi6EBqzDLtpUUu8Td
            source_type: api_record
            title: 中国历代人物传记资料库：王闉（CBDB 323751）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=323751&o=json
            external_identifier: CBDB:323751
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.147Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_dCQspxt55A8bFA5Ci7qDiL
        subject_person_id: p_o5TL75x34Lta8LsAnkS1c1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王闉，明人物。嘉靖三十八年進士，籍贯清苑，曾任府同知。（中国历代人物传记资料库 CBDB 323751）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_k3wHC5qG3QxdH0LYVH_qA2
          claim_id: c_dCQspxt55A8bFA5Ci7qDiL
          source_id: s_Rvo3Cmi6EBqzDLtpUUu8Td
          stance: supports
          locator: CBDB:323751
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_cCZnnZa_7sHfTOzwr5slaf
        subject_person_id: p_7qYVpNXr3rJeGDwdypL9Mb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_o5TL75x34Lta8LsAnkS1c1
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iHr-awN5G1vP0-Wb_UYfQg
          claim_id: c_cCZnnZa_7sHfTOzwr5slaf
          source_id: s_YZ9-1VUmSHoC47jvJ_yzdF
          stance: supports
          locator: CBDB：兄弟 王闐（204766）之父／母 王德純
          quotation: null
          interpretation_note: 由兄弟关系推断：王闉 与 王闐 为同胞（CBDB 记「弟」），王闐 之父／母即 王闉 之父／母。
          source:
            id: s_YZ9-1VUmSHoC47jvJ_yzdF
            source_type: api_record
            title: 中国历代人物传记资料库：王闉（CBDB 323751）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=323751&o=json
            external_identifier: CBDB:323751
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_7qYVpNXr3rJeGDwdypL9Mb
        status: active
        display_name: 王德純
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_okrQULdXgoJ06Cm2E-ax9o
        subject_person_id: p_ck5AXM5Fx2KaAGeW6x29ur
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_o5TL75x34Lta8LsAnkS1c1
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oNnjJthBl-aX0LXftcPaC9
          claim_id: c_okrQULdXgoJ06Cm2E-ax9o
          source_id: s_YZ9-1VUmSHoC47jvJ_yzdF
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 204766 王闐）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_YZ9-1VUmSHoC47jvJ_yzdF
            source_type: api_record
            title: 中国历代人物传记资料库：王闉（CBDB 323751）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=323751&o=json
            external_identifier: CBDB:323751
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ck5AXM5Fx2KaAGeW6x29ur
        status: active
        display_name: 王闐
        merged_into_person_id: null
---

# 王闉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王闉 | accepted |
| bio.summary | 王闉，明人物。嘉靖三十八年進士，籍贯清苑，曾任府同知。（中国历代人物传记资料库 CBDB 323751） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_7qYVpNXr3rJeGDwdypL9Mb | 王德純 | accepted |
| other | p_ck5AXM5Fx2KaAGeW6x29ur | 王闐 | accepted |

## 外部来源

- [中国历代人物传记资料库：王闉（CBDB 323751）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=323751&o=json)
