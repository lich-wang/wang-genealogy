---
schema: wang-person/v1
id: p_SA68oKcizV46xwsBi5gVeS
status: active
merged_into: null
display_name: 王瑤
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_oJGQzca9f8vFqGWZVGbMEf
        subject_person_id: p_SA68oKcizV46xwsBi5gVeS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑤
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_xKA2TciF5KbZLUrEnfFm3f
          claim_id: c_oJGQzca9f8vFqGWZVGbMEf
          source_id: s_Py3wDHqruW8k3PfKciPGf4
          stance: supports
          locator: CBDB:159954
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（159954）
          source: &a1
            id: s_Py3wDHqruW8k3PfKciPGf4
            source_type: api_record
            title: 中国历代人物传记资料库：王瑤（CBDB 159954）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=159954&o=json
            external_identifier: CBDB:159954
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.936Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_M4s9337RH68z8RhMVLmo61
        subject_person_id: p_SA68oKcizV46xwsBi5gVeS
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_R2MJYQaMXZENuWpfUwVNYj
          claim_id: c_M4s9337RH68z8RhMVLmo61
          source_id: s_Py3wDHqruW8k3PfKciPGf4
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_6tsueEJhKCDLxXMKJ8c2sL
        subject_person_id: p_SA68oKcizV46xwsBi5gVeS
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_gBZQ9PfF6PdVeXmVgxzFes
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7epJN8IS6_EtbNY4EnLxlm
          claim_id: c_6tsueEJhKCDLxXMKJ8c2sL
          source_id: s_pEu134tgMDoQ2e5xpYQCEQ
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_pEu134tgMDoQ2e5xpYQCEQ
            source_type: api_record
            title: 中国历代人物传记资料库：王進（CBDB 159955）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=159955&o=json
            external_identifier: CBDB:159955
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.937Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_gBZQ9PfF6PdVeXmVgxzFes
        status: active
        display_name: 王進
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_QaXOCj4EOeXX7TWAPxHa-K
        subject_person_id: p_SA68oKcizV46xwsBi5gVeS
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_buHPPD7o3Zg7opBbsnKMQ6
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_78K-yYp2oo6-QcM31OEFAh
          claim_id: c_QaXOCj4EOeXX7TWAPxHa-K
          source_id: s_996GfbKAQ5DEPwFZuhv8rv
          stance: supports
          locator: 唐代墓誌匯編:二卷，Dazhong 148：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_996GfbKAQ5DEPwFZuhv8rv
            source_type: api_record
            title: 中国历代人物传记资料库：王公素（CBDB 141742）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141742&o=json
            external_identifier: CBDB:141742
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.566Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_buHPPD7o3Zg7opBbsnKMQ6
        status: active
        display_name: 王公素
        merged_into_person_id: null
  other: []
---

# 王瑤

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瑤 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_gBZQ9PfF6PdVeXmVgxzFes | 王進 | accepted |
| descendants | p_buHPPD7o3Zg7opBbsnKMQ6 | 王公素 | accepted |

## 外部来源

- [中国历代人物传记资料库：王公素（CBDB 141742）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141742&o=json)
- [中国历代人物传记资料库：王進（CBDB 159955）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=159955&o=json)
- [中国历代人物传记资料库：王瑤（CBDB 159954）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=159954&o=json)
