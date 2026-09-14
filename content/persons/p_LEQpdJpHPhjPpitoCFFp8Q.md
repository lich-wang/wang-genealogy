---
schema: wang-person/v1
id: p_LEQpdJpHPhjPpitoCFFp8Q
status: active
merged_into: null
display_name: 王崇寬
cbdb_id: 246482
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_tWM4pXNLHCCGWRCEELt2tT
        subject_person_id: p_LEQpdJpHPhjPpitoCFFp8Q
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王崇寬，明人物。成化八年進士，籍贯新喻。（中国历代人物传记资料库 CBDB 246482）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_S_oTsLlZZG9lMDdiKEhs56
          claim_id: c_tWM4pXNLHCCGWRCEELt2tT
          source_id: s_PUjiupb3cCet72HZFDRSpr
          stance: supports
          locator: CBDB:246482
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_PUjiupb3cCet72HZFDRSpr
            source_type: api_record
            title: 中国历代人物传记资料库：王崇寬（CBDB 246482）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=246482&o=json
            external_identifier: CBDB:246482
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:59.761Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_YG4osWD7W7pKYri4UQZpRf
        subject_person_id: p_LEQpdJpHPhjPpitoCFFp8Q
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王崇寬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_3RM8jKQHK1oxmUsokt6nJr
          claim_id: c_YG4osWD7W7pKYri4UQZpRf
          source_id: s_PUjiupb3cCet72HZFDRSpr
          stance: supports
          locator: CBDB:246482
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2901-3000）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_QAz88HIzoTBcHWD4_F0xsI
        subject_person_id: p_2xBigkvdUU97a4F86QBCjb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_LEQpdJpHPhjPpitoCFFp8Q
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_R8cWhDeADGBEQ9dL7XWYDy
          claim_id: c_QAz88HIzoTBcHWD4_F0xsI
          source_id: s_m7HfIK5pOLf3dBfEnQ8IH3
          stance: supports
          locator: CBDB：兄弟 王肅（199546）之父／母 王同德
          quotation: null
          interpretation_note: 由兄弟关系推断：王崇寬 与 王肅 为同胞（CBDB 记「兄」），王肅 之父／母即 王崇寬 之父／母。
          source:
            id: s_m7HfIK5pOLf3dBfEnQ8IH3
            source_type: api_record
            title: 中国历代人物传记资料库：王崇寬（CBDB 246482）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=246482&o=json
            external_identifier: CBDB:246482
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_2xBigkvdUU97a4F86QBCjb
        status: active
        display_name: 王同德
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_kNo_8R40tZ6r7cdK2p237a
        subject_person_id: p_LEQpdJpHPhjPpitoCFFp8Q
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_rPERXxEMwZa9gPH43DGT1J
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IDwWXOUWBH9D4UU9Tepy2t
          claim_id: c_kNo_8R40tZ6r7cdK2p237a
          source_id: s_m7HfIK5pOLf3dBfEnQ8IH3
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 199546 王肅）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_m7HfIK5pOLf3dBfEnQ8IH3
            source_type: api_record
            title: 中国历代人物传记资料库：王崇寬（CBDB 246482）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=246482&o=json
            external_identifier: CBDB:246482
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_rPERXxEMwZa9gPH43DGT1J
        status: active
        display_name: 王肅
        merged_into_person_id: null
---

# 王崇寬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王崇寬，明人物。成化八年進士，籍贯新喻。（中国历代人物传记资料库 CBDB 246482） | accepted |
| name.primary | 王崇寬 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_2xBigkvdUU97a4F86QBCjb | 王同德 | accepted |
| other | p_rPERXxEMwZa9gPH43DGT1J | 王肅 | accepted |

## 外部来源

- [中国历代人物传记资料库：王崇寬（CBDB 246482）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=246482&o=json)
