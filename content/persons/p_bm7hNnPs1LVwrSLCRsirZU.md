---
schema: wang-person/v1
id: p_bm7hNnPs1LVwrSLCRsirZU
status: active
merged_into: null
display_name: 王高
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_G4W3esRdRWPKPRhwa2AYoj
        subject_person_id: p_bm7hNnPs1LVwrSLCRsirZU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王高
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_rhonUT6wgW1tQPgt5rJGmH
          claim_id: c_G4W3esRdRWPKPRhwa2AYoj
          source_id: s_ArAcE2S2MzF3As54muEJzB
          stance: supports
          locator: CBDB:217343
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（217343）
          source: &a1
            id: s_ArAcE2S2MzF3As54muEJzB
            source_type: api_record
            title: 中国历代人物传记资料库：王高（CBDB 217343）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=217343&o=json
            external_identifier: CBDB:217343
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.251Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_T2u4wW6V9f8e42PDTjzYiA
        subject_person_id: p_bm7hNnPs1LVwrSLCRsirZU
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王高，明人物。萬曆五年進士，籍贯臨海。（中国历代人物传记资料库 CBDB 217343）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_6nHdtp9q49Asyb4lIM1jP7
          claim_id: c_T2u4wW6V9f8e42PDTjzYiA
          source_id: s_ArAcE2S2MzF3As54muEJzB
          stance: supports
          locator: CBDB:217343
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_PQh3Fa2eXXfFr6v5PSzeXR
        subject_person_id: p_CvNcKWE8FdhDeHL9JMF93w
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_bm7hNnPs1LVwrSLCRsirZU
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pCQhVgc6Vm2WZEN9H7h84s
          claim_id: c_PQh3Fa2eXXfFr6v5PSzeXR
          source_id: s_BsDxhFH4xMWgpeHHSNbQ-U
          stance: supports
          locator: CBDB：兄弟 王亮（126595）之父／母 王胤東
          quotation: null
          interpretation_note: 由兄弟关系推断：王高 与 王亮 为同胞（CBDB 记「兄」），王亮 之父／母即 王高 之父／母。
          source:
            id: s_BsDxhFH4xMWgpeHHSNbQ-U
            source_type: api_record
            title: 中国历代人物传记资料库：王高（CBDB 217343）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=217343&o=json
            external_identifier: CBDB:217343
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_CvNcKWE8FdhDeHL9JMF93w
        status: active
        display_name: 王胤東
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_ntoyepzVSJLkUGaNIo4z_Q
        subject_person_id: p_bm7hNnPs1LVwrSLCRsirZU
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_vLHvb3BCMGxfLW94457af3
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pnC8mDn76JGEr3rhpx8ut0
          claim_id: c_ntoyepzVSJLkUGaNIo4z_Q
          source_id: s_BsDxhFH4xMWgpeHHSNbQ-U
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126595 王亮）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_BsDxhFH4xMWgpeHHSNbQ-U
            source_type: api_record
            title: 中国历代人物传记资料库：王高（CBDB 217343）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=217343&o=json
            external_identifier: CBDB:217343
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_vLHvb3BCMGxfLW94457af3
        status: active
        display_name: 王亮
        merged_into_person_id: null
---

# 王高

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王高 | accepted |
| bio.summary | 王高，明人物。萬曆五年進士，籍贯臨海。（中国历代人物传记资料库 CBDB 217343） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_CvNcKWE8FdhDeHL9JMF93w | 王胤東 | accepted |
| other | p_vLHvb3BCMGxfLW94457af3 | 王亮 | accepted |

## 外部来源

- [中国历代人物传记资料库：王高（CBDB 217343）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=217343&o=json)
