---
schema: wang-person/v1
id: p_2pcPxJFEFmk5xoJqjEeQR6
status: active
merged_into: null
display_name: 王敏行
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_gw4QD66F8r1WfR9KSVf39T
        subject_person_id: p_2pcPxJFEFmk5xoJqjEeQR6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敏行
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_kYw8Wxfw5MBzKbVA7MiFKr
          claim_id: c_gw4QD66F8r1WfR9KSVf39T
          source_id: s_KD7nZ5eWtdProkvRtoK2Qn
          stance: supports
          locator: CBDB:135561
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（135561）
          source: &a1
            id: s_KD7nZ5eWtdProkvRtoK2Qn
            source_type: api_record
            title: 中国历代人物传记资料库：王敏行（CBDB 135561）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=135561&o=json
            external_identifier: CBDB:135561
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.341Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_2cK5y15pVCSQ7SByRziu63
        subject_person_id: p_2pcPxJFEFmk5xoJqjEeQR6
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1083年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AynK2xi9faccp9HJGMnL5e
          claim_id: c_2cK5y15pVCSQ7SByRziu63
          source_id: s_KD7nZ5eWtdProkvRtoK2Qn
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_6QJBjoFN5i8HPjWFW5mSu8
        subject_person_id: p_2pcPxJFEFmk5xoJqjEeQR6
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1121年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CjNm6QCEwPz5jAqEP3Mopi
          claim_id: c_6QJBjoFN5i8HPjWFW5mSu8
          source_id: s_KD7nZ5eWtdProkvRtoK2Qn
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_oFPhzQB3PUgFLsJ9n4qrbe
        subject_person_id: p_2pcPxJFEFmk5xoJqjEeQR6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敏行（1083年—1121年），史料所见人物。本项目依据《中国历代人物传记资料库：王敏行（CBDB 135561）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_JTtaJXiTTId-ZiB62iIaYb
          claim_id: c_oFPhzQB3PUgFLsJ9n4qrbe
          source_id: s_KD7nZ5eWtdProkvRtoK2Qn
          stance: supports
          locator: CBDB:135561
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_4LnYeKyxQ-l9CiAJK4IZkP
        subject_person_id: p_Twe1TZKJwAM5y4NPmBAiBC
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2pcPxJFEFmk5xoJqjEeQR6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DqGSFOcvdqDe0LZUOMBOoR
          claim_id: c_4LnYeKyxQ-l9CiAJK4IZkP
          source_id: s_i5APgGxEm_eRStnjnW5LiU
          stance: supports
          locator: CBDB 亲属：父（KinPerson 134094）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_i5APgGxEm_eRStnjnW5LiU
            source_type: api_record
            title: 中国历代人物传记资料库：王敏行（CBDB 135561）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=135561&o=json
            external_identifier: CBDB:135561
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Twe1TZKJwAM5y4NPmBAiBC
        status: active
        display_name: 王鞏
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王敏行

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王敏行 | accepted |
| birth.date | 1083年 | accepted |
| death.date | 1121年 | accepted |
| bio.summary | 王敏行（1083年—1121年），史料所见人物。本项目依据《中国历代人物传记资料库：王敏行（CBDB 135561）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Twe1TZKJwAM5y4NPmBAiBC | 王鞏 | accepted |

## 外部来源

- [中国历代人物传记资料库：王敏行（CBDB 135561）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=135561&o=json)
