---
schema: wang-person/v1
id: p_eJdAruApB817Ertmj7WUCY
status: active
merged_into: null
display_name: 王道熙
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_R1Lesq9m1Bzjf876qpLB3o
        subject_person_id: p_eJdAruApB817Ertmj7WUCY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王道熙
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7DKQjzCWZtYR4JTjsHgeH9
          claim_id: c_R1Lesq9m1Bzjf876qpLB3o
          source_id: s_ZgxPCn6YFBzqK2KWJfE2Gs
          stance: supports
          locator: CBDB:223211
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（223211）
          source: &a1
            id: s_ZgxPCn6YFBzqK2KWJfE2Gs
            source_type: api_record
            title: 中国历代人物传记资料库：王道熙（CBDB 223211）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=223211&o=json
            external_identifier: CBDB:223211
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.407Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JdXsuBqCwM5m92ueY8LrNR
        subject_person_id: p_eJdAruApB817Ertmj7WUCY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王道熙，明人物。萬曆十一年進士，籍贯同安。（中国历代人物传记资料库 CBDB 223211）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_9_RFwl6-vYIxnl8sGvZCCj
          claim_id: c_JdXsuBqCwM5m92ueY8LrNR
          source_id: s_ZgxPCn6YFBzqK2KWJfE2Gs
          stance: supports
          locator: CBDB:223211
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_OeLRCVRq_u51-RSya425Vl
        subject_person_id: p_nrgvXCkYedEAAAukDFwR1j
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_eJdAruApB817Ertmj7WUCY
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_17wYPrpS_Gk9esQNHEOdFa
          claim_id: c_OeLRCVRq_u51-RSya425Vl
          source_id: s_oI1LBtF4NzuAZXBEDeH--A
          stance: supports
          locator: CBDB：兄弟 王道顯（206783）之父／母 王三錫
          quotation: null
          interpretation_note: 由兄弟关系推断：王道熙 与 王道顯 为同胞（CBDB 记「弟」），王道顯 之父／母即 王道熙 之父／母。
          source:
            id: s_oI1LBtF4NzuAZXBEDeH--A
            source_type: api_record
            title: 中国历代人物传记资料库：王道熙（CBDB 223211）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=223211&o=json
            external_identifier: CBDB:223211
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_nrgvXCkYedEAAAukDFwR1j
        status: active
        display_name: 王三錫
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_npGz5CAgiIhghhcvH8L3k3
        subject_person_id: p_7J92XTKdKB1ZCqpjcGmNN6
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_eJdAruApB817Ertmj7WUCY
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_whUIGMLydICX-pX-XARjF3
          claim_id: c_npGz5CAgiIhghhcvH8L3k3
          source_id: s_oI1LBtF4NzuAZXBEDeH--A
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 206783 王道顯）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_oI1LBtF4NzuAZXBEDeH--A
            source_type: api_record
            title: 中国历代人物传记资料库：王道熙（CBDB 223211）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=223211&o=json
            external_identifier: CBDB:223211
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_7J92XTKdKB1ZCqpjcGmNN6
        status: active
        display_name: 王道顯
        merged_into_person_id: null
---

# 王道熙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王道熙 | accepted |
| bio.summary | 王道熙，明人物。萬曆十一年進士，籍贯同安。（中国历代人物传记资料库 CBDB 223211） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_nrgvXCkYedEAAAukDFwR1j | 王三錫 | accepted |
| other | p_7J92XTKdKB1ZCqpjcGmNN6 | 王道顯 | accepted |

## 外部来源

- [中国历代人物传记资料库：王道熙（CBDB 223211）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=223211&o=json)
