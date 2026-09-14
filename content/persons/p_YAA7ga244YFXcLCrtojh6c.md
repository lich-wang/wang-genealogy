---
schema: wang-person/v1
id: p_YAA7ga244YFXcLCrtojh6c
status: active
merged_into: null
display_name: 王炯
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_EnPAuidsUQf5LP3w9kB9Q1
        subject_person_id: p_YAA7ga244YFXcLCrtojh6c
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王炯
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1EwFt3g8CTvuhd1bqL9ZMP
          claim_id: c_EnPAuidsUQf5LP3w9kB9Q1
          source_id: s_NHD5DAwpGuaW6VKMM4LPaQ
          stance: supports
          locator: CBDB:562487
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（562487）
          source: &a1
            id: s_NHD5DAwpGuaW6VKMM4LPaQ
            source_type: api_record
            title: 中国历代人物传记资料库：王炯（CBDB 562487）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=562487&o=json
            external_identifier: CBDB:562487
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.786Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_F6RFVc8rfFsvJ65HbBEbyi
        subject_person_id: p_YAA7ga244YFXcLCrtojh6c
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王炯，清人物。籍贯鄞縣。（中国历代人物传记资料库 CBDB 562487）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_fcBg7HzIKM0uOgvwPtrNsb
          claim_id: c_F6RFVc8rfFsvJ65HbBEbyi
          source_id: s_NHD5DAwpGuaW6VKMM4LPaQ
          stance: supports
          locator: CBDB:562487
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
  descendants: []
  other:
    - claim:
        id: c_Ggcs0fFXHI5aofBvWIRgoy
        subject_person_id: p_BvU9ErBJeyzU9EWBmCNrJg
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_YAA7ga244YFXcLCrtojh6c
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YRJXfI1_MlgkcRN6-Aahfk
          claim_id: c_Ggcs0fFXHI5aofBvWIRgoy
          source_id: s_2r9ciQsv01lX1NA3XXyQY_
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 562487 王炯）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_2r9ciQsv01lX1NA3XXyQY_
            source_type: api_record
            title: 中国历代人物传记资料库：王煜（CBDB 562485）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=562485&o=json
            external_identifier: CBDB:562485
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_BvU9ErBJeyzU9EWBmCNrJg
        status: active
        display_name: 王煜
        merged_into_person_id: null
---

# 王炯

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王炯 | accepted |
| bio.summary | 王炯，清人物。籍贯鄞縣。（中国历代人物传记资料库 CBDB 562487） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| other | p_BvU9ErBJeyzU9EWBmCNrJg | 王煜 | accepted |

## 外部来源

- [中国历代人物传记资料库：王炯（CBDB 562487）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=562487&o=json)
- [中国历代人物传记资料库：王煜（CBDB 562485）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=562485&o=json)
