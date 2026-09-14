---
schema: wang-person/v1
id: p_mFTnd1QNHXJPWon9Y4YcwK
status: active
merged_into: null
display_name: 王德昇
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_H75ExdzKDJWb4hp7qWHhuT
        subject_person_id: p_mFTnd1QNHXJPWon9Y4YcwK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德昇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_pNb9hKKenZApNHhK4gQbVf
          claim_id: c_H75ExdzKDJWb4hp7qWHhuT
          source_id: s_R15K161ZDtrjr3Vwmma9Lz
          stance: supports
          locator: CBDB:218709
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（218709）
          source: &a1
            id: s_R15K161ZDtrjr3Vwmma9Lz
            source_type: api_record
            title: 中国历代人物传记资料库：王德昇（CBDB 218709）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=218709&o=json
            external_identifier: CBDB:218709
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.271Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_rLV91dnvncdTvxbvQ4KCAU
        subject_person_id: p_mFTnd1QNHXJPWon9Y4YcwK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德昇，明人物。萬曆八年進士，籍贯安福。（中国历代人物传记资料库 CBDB 218709）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_D6_veBD49hjWrNESa05eXi
          claim_id: c_rLV91dnvncdTvxbvQ4KCAU
          source_id: s_R15K161ZDtrjr3Vwmma9Lz
          stance: supports
          locator: CBDB:218709
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ZM3pYVd3RBaFsAgfFaz9iy
        subject_person_id: p_heKv1Lrv2nNs2FP242e8RP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_mFTnd1QNHXJPWon9Y4YcwK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZgS39ALjNMOce46S3I6Vd3
          claim_id: c_ZM3pYVd3RBaFsAgfFaz9iy
          source_id: s__zwgmwUm5UZdVq2e9jxXFA
          stance: supports
          locator: CBDB：兄弟 王德新（126819）之父／母 王士望
          quotation: null
          interpretation_note: 由兄弟关系推断：王德昇 与 王德新 为同胞（CBDB 记「弟」），王德新 之父／母即 王德昇 之父／母。
          source:
            id: s__zwgmwUm5UZdVq2e9jxXFA
            source_type: api_record
            title: 中国历代人物传记资料库：王德昇（CBDB 218709）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=218709&o=json
            external_identifier: CBDB:218709
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_heKv1Lrv2nNs2FP242e8RP
        status: active
        display_name: 王士望
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_pXnTE4FEZH2VNNX5B7zWZJ
        subject_person_id: p_P62PwvTysFNxEPkUXBg1Fm
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_mFTnd1QNHXJPWon9Y4YcwK
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_95Q99PJ3SuxK8oOfUZXfno
          claim_id: c_pXnTE4FEZH2VNNX5B7zWZJ
          source_id: s__zwgmwUm5UZdVq2e9jxXFA
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126819 王德新）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s__zwgmwUm5UZdVq2e9jxXFA
            source_type: api_record
            title: 中国历代人物传记资料库：王德昇（CBDB 218709）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=218709&o=json
            external_identifier: CBDB:218709
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_P62PwvTysFNxEPkUXBg1Fm
        status: active
        display_name: 王德新
        merged_into_person_id: null
---

# 王德昇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王德昇 | accepted |
| bio.summary | 王德昇，明人物。萬曆八年進士，籍贯安福。（中国历代人物传记资料库 CBDB 218709） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_heKv1Lrv2nNs2FP242e8RP | 王士望 | accepted |
| other | p_P62PwvTysFNxEPkUXBg1Fm | 王德新 | accepted |

## 外部来源

- [中国历代人物传记资料库：王德昇（CBDB 218709）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=218709&o=json)
