---
schema: wang-person/v1
id: p_Yj7cEhqWCMhHks254mEdHH
status: active
merged_into: null
display_name: 王琳
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7NBaXFghhphkfKjEXhe6xn
        subject_person_id: p_Yj7cEhqWCMhHks254mEdHH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QNZ5haeYycq2Fkox5gnWq7
          claim_id: c_7NBaXFghhphkfKjEXhe6xn
          source_id: s_sdKsKwMuzjfCSgP2RLDGdx
          stance: supports
          locator: CBDB:255913
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（255913）
          source: &a1
            id: s_sdKsKwMuzjfCSgP2RLDGdx
            source_type: api_record
            title: 中国历代人物传记资料库：王琳（CBDB 255913）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255913&o=json
            external_identifier: CBDB:255913
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.371Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4TVvnEgn8hPDSaeRbCWypF
        subject_person_id: p_Yj7cEhqWCMhHks254mEdHH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琳，明人物。成化十七年進士，籍贯鄞縣。（中国历代人物传记资料库 CBDB 255913）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_47x_g360fi-jZDr4EdW21W
          claim_id: c_4TVvnEgn8hPDSaeRbCWypF
          source_id: s_sdKsKwMuzjfCSgP2RLDGdx
          stance: supports
          locator: CBDB:255913
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_lCI4jwaIyhfCyKEikl11KQ
        subject_person_id: p_vi9ZDtvEhQ6sUw3P3TjQzS
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Yj7cEhqWCMhHks254mEdHH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qMSgJMoxtZfZ7DcZaJFSH8
          claim_id: c_lCI4jwaIyhfCyKEikl11KQ
          source_id: s_5iHLGb2O7R8QcOJgqrHmpq
          stance: supports
          locator: CBDB：兄弟 王瑫（126779）之父／母 王鞏謙
          quotation: null
          interpretation_note: 由兄弟关系推断：王琳 与 王瑫 为同胞（CBDB 记「兄」），王瑫 之父／母即 王琳 之父／母。
          source:
            id: s_5iHLGb2O7R8QcOJgqrHmpq
            source_type: api_record
            title: 中国历代人物传记资料库：王琳（CBDB 255913）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255913&o=json
            external_identifier: CBDB:255913
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_vi9ZDtvEhQ6sUw3P3TjQzS
        status: active
        display_name: 王鞏謙
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_ERdanpzhmwVYEVZwtg4m03
        subject_person_id: p_2Loswb2HqViVcQmQ8rSFe9
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Yj7cEhqWCMhHks254mEdHH
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DkC6RLdmRosplrQVqA9lcH
          claim_id: c_ERdanpzhmwVYEVZwtg4m03
          source_id: s_5iHLGb2O7R8QcOJgqrHmpq
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126779 王瑫）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_5iHLGb2O7R8QcOJgqrHmpq
            source_type: api_record
            title: 中国历代人物传记资料库：王琳（CBDB 255913）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255913&o=json
            external_identifier: CBDB:255913
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_2Loswb2HqViVcQmQ8rSFe9
        status: active
        display_name: 王瑫
        merged_into_person_id: null
---

# 王琳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王琳 | accepted |
| bio.summary | 王琳，明人物。成化十七年進士，籍贯鄞縣。（中国历代人物传记资料库 CBDB 255913） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_vi9ZDtvEhQ6sUw3P3TjQzS | 王鞏謙 | accepted |
| other | p_2Loswb2HqViVcQmQ8rSFe9 | 王瑫 | accepted |

## 外部来源

- [中国历代人物传记资料库：王琳（CBDB 255913）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255913&o=json)
