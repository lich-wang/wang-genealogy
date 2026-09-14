---
schema: wang-person/v1
id: p_bhUGmfewvr7GnW3wNfrGmz
status: active
merged_into: null
display_name: 王公亶
cbdb_id: 34063
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NLQjiEcoQPJAMEQcoPiP94
        subject_person_id: p_bhUGmfewvr7GnW3wNfrGmz
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王公亶，宋人物。籍贯南陽。（中国历代人物传记资料库 CBDB 34063）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_4gTtta-esXrnKfYqq9aVrW
          claim_id: c_NLQjiEcoQPJAMEQcoPiP94
          source_id: s_BLTM6CtPiobCYrQKXJ9kL5
          stance: supports
          locator: CBDB:34063
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_BLTM6CtPiobCYrQKXJ9kL5
            source_type: api_record
            title: 中国历代人物传记资料库：王公亶（CBDB 34063）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=34063&o=json
            external_identifier: CBDB:34063
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:45.707Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_bvomR5JjeDkbm6nXLcNSqG
        subject_person_id: p_bhUGmfewvr7GnW3wNfrGmz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王公亶
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_nzkisa6udwfLY1XHGBMQhv
          claim_id: c_bvomR5JjeDkbm6nXLcNSqG
          source_id: s_BLTM6CtPiobCYrQKXJ9kL5
          stance: supports
          locator: CBDB:34063
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1101-1200）｜历史性依据：CBDB 朝代 = 宋
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_fIyppF31VnyY5fsIr4XYoq
        subject_person_id: p_PM76xFUGjkuuuSHs3wbWzE
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_bhUGmfewvr7GnW3wNfrGmz
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Y23ERpTnrGHrjs2WXWcBtq
          claim_id: c_fIyppF31VnyY5fsIr4XYoq
          source_id: s_ZlrvLVAvCrheYexwPF3TFB
          stance: supports
          locator: CBDB 亲属：父（KinPerson 1789）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_ZlrvLVAvCrheYexwPF3TFB
            source_type: api_record
            title: 中国历代人物传记资料库：王公亶（CBDB 34063）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=34063&o=json
            external_identifier: CBDB:34063
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_PM76xFUGjkuuuSHs3wbWzE
        status: active
        display_name: 王兢
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王公亶

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王公亶，宋人物。籍贯南陽。（中国历代人物传记资料库 CBDB 34063） | accepted |
| name.primary | 王公亶 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_PM76xFUGjkuuuSHs3wbWzE | 王兢 | accepted |

## 外部来源

- [中国历代人物传记资料库：王公亶（CBDB 34063）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=34063&o=json)
