---
schema: wang-person/v1
id: p_sXBC6QJmxtxqjgvbdZ5qzb
status: active
merged_into: null
display_name: 王揚
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LrE1vw1Zk8GFqWb4DMHkHh
        subject_person_id: p_sXBC6QJmxtxqjgvbdZ5qzb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王揚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_tGeDfoUheKoh786kLmrr3R
          claim_id: c_LrE1vw1Zk8GFqWb4DMHkHh
          source_id: s_NAjWnrorbAkrtFFEQEmxVG
          stance: supports
          locator: CBDB:234428
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（234428）
          source: &a1
            id: s_NAjWnrorbAkrtFFEQEmxVG
            source_type: api_record
            title: 中国历代人物传记资料库：王揚（CBDB 234428）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=234428&o=json
            external_identifier: CBDB:234428
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.742Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ER2xsDDSPm1xQFwvAADhcL
        subject_person_id: p_sXBC6QJmxtxqjgvbdZ5qzb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王揚，明人物。籍贯汶上，入仕庠生。（中国历代人物传记资料库 CBDB 234428）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ab1iM_VP5PZIDhgA3QDXxh
          claim_id: c_ER2xsDDSPm1xQFwvAADhcL
          source_id: s_NAjWnrorbAkrtFFEQEmxVG
          stance: supports
          locator: CBDB:234428
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_H0hvBHeGOJ3VS3GtdPxqYw
        subject_person_id: p_RBDo1mCVNx525KP3Mg5Mqx
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_sXBC6QJmxtxqjgvbdZ5qzb
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FEgwl-n5PhGylsmG-9AvL_
          claim_id: c_H0hvBHeGOJ3VS3GtdPxqYw
          source_id: s_QnN-bizM6WVzGpz9SEcHq0
          stance: supports
          locator: CBDB：兄弟 王命新（207714）之父／母 王鉞
          quotation: null
          interpretation_note: 由兄弟关系推断：王揚 与 王命新 为同胞（CBDB 记「弟」），王命新 之父／母即 王揚 之父／母。
          source:
            id: s_QnN-bizM6WVzGpz9SEcHq0
            source_type: api_record
            title: 中国历代人物传记资料库：王揚（CBDB 234428）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=234428&o=json
            external_identifier: CBDB:234428
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_RBDo1mCVNx525KP3Mg5Mqx
        status: active
        display_name: 王鉞
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_UEeuADbbgeV8OLz1cyaGH1
        subject_person_id: p_KesiNQLM6qJRi25qiHTy12
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_sXBC6QJmxtxqjgvbdZ5qzb
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_J4I-SdzsCNkq6hyRK-DfAK
          claim_id: c_UEeuADbbgeV8OLz1cyaGH1
          source_id: s_QnN-bizM6WVzGpz9SEcHq0
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 207714 王命新）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_QnN-bizM6WVzGpz9SEcHq0
            source_type: api_record
            title: 中国历代人物传记资料库：王揚（CBDB 234428）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=234428&o=json
            external_identifier: CBDB:234428
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_KesiNQLM6qJRi25qiHTy12
        status: active
        display_name: 王命新
        merged_into_person_id: null
---

# 王揚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王揚 | accepted |
| bio.summary | 王揚，明人物。籍贯汶上，入仕庠生。（中国历代人物传记资料库 CBDB 234428） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_RBDo1mCVNx525KP3Mg5Mqx | 王鉞 | accepted |
| other | p_KesiNQLM6qJRi25qiHTy12 | 王命新 | accepted |

## 外部来源

- [中国历代人物传记资料库：王揚（CBDB 234428）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=234428&o=json)
