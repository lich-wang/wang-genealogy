---
schema: wang-person/v1
id: p_fTZDAyMQHEPwPzdxwLsA6B
status: active
merged_into: null
display_name: 王寧
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_bNGZEi9rX7dfed5n6CRMZp
        subject_person_id: p_fTZDAyMQHEPwPzdxwLsA6B
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寧
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_oeCPzgZmKCzRVmBXQL5XVU
          claim_id: c_bNGZEi9rX7dfed5n6CRMZp
          source_id: s_VGKKfNyHmbsB8scXZEhsCd
          stance: supports
          locator: CBDB:251903
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（251903）
          source: &a1
            id: s_VGKKfNyHmbsB8scXZEhsCd
            source_type: api_record
            title: 中国历代人物传记资料库：王寧（CBDB 251903）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=251903&o=json
            external_identifier: CBDB:251903
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.258Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Ahpvx5aYtCazuXUXXayb9M
        subject_person_id: p_fTZDAyMQHEPwPzdxwLsA6B
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寧，明人物。成化十四年進士，籍贯日照。（中国历代人物传记资料库 CBDB 251903）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_FDpBtnadXSJhga7Wt2ZO8W
          claim_id: c_Ahpvx5aYtCazuXUXXayb9M
          source_id: s_VGKKfNyHmbsB8scXZEhsCd
          stance: supports
          locator: CBDB:251903
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_xP4uecoLxXNfRdVTpeaH3g
        subject_person_id: p_6NqQVpARahg4TYnj77m3i2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_fTZDAyMQHEPwPzdxwLsA6B
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_o1k-G3T1D5e1Zx5PmQJ-9c
          claim_id: c_xP4uecoLxXNfRdVTpeaH3g
          source_id: s_GNoVAj_9QZDEBShKMgbyl2
          stance: supports
          locator: CBDB：兄弟 王宏（199956）之父／母 王貴
          quotation: null
          interpretation_note: 由兄弟关系推断：王寧 与 王宏 为同胞（CBDB 记「兄」），王宏 之父／母即 王寧 之父／母。
          source:
            id: s_GNoVAj_9QZDEBShKMgbyl2
            source_type: api_record
            title: 中国历代人物传记资料库：王寧（CBDB 251903）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=251903&o=json
            external_identifier: CBDB:251903
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_6NqQVpARahg4TYnj77m3i2
        status: active
        display_name: 王貴
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_u-weiH57PfBDEZ6LCSE4QM
        subject_person_id: p_cnN8Qwq9XduFw216Ep1U5h
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_fTZDAyMQHEPwPzdxwLsA6B
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_43CVF969fNULRDTcR1DGL7
          claim_id: c_u-weiH57PfBDEZ6LCSE4QM
          source_id: s_GNoVAj_9QZDEBShKMgbyl2
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 199956 王宏）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_GNoVAj_9QZDEBShKMgbyl2
            source_type: api_record
            title: 中国历代人物传记资料库：王寧（CBDB 251903）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=251903&o=json
            external_identifier: CBDB:251903
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_cnN8Qwq9XduFw216Ep1U5h
        status: active
        display_name: 王宏
        merged_into_person_id: null
---

# 王寧

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王寧 | accepted |
| bio.summary | 王寧，明人物。成化十四年進士，籍贯日照。（中国历代人物传记资料库 CBDB 251903） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_6NqQVpARahg4TYnj77m3i2 | 王貴 | accepted |
| other | p_cnN8Qwq9XduFw216Ep1U5h | 王宏 | accepted |

## 外部来源

- [中国历代人物传记资料库：王寧（CBDB 251903）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=251903&o=json)
