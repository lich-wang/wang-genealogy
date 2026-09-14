---
schema: wang-person/v1
id: p_oEx5JqZovWjAWmN242q9VM
status: active
merged_into: null
display_name: 王敦
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_k14FnMmgkfgjNJ5xd165dx
        subject_person_id: p_oEx5JqZovWjAWmN242q9VM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敦
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_yw2w93CdA3LrRHEmTHHey1
          claim_id: c_k14FnMmgkfgjNJ5xd165dx
          source_id: s_gtwML3EUiJjin7o9GBXiuH
          stance: supports
          locator: CBDB:248395
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（248395）
          source: &a1
            id: s_gtwML3EUiJjin7o9GBXiuH
            source_type: api_record
            title: 中国历代人物传记资料库：王敦（CBDB 248395）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=248395&o=json
            external_identifier: CBDB:248395
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.152Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KC6cmU8Ma1JX9FMJPa76dL
        subject_person_id: p_oEx5JqZovWjAWmN242q9VM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敦，明人物。成化十一年進士，籍贯韓城。（中国历代人物传记资料库 CBDB 248395）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_BD-K_573oULT-FKMqg3cIp
          claim_id: c_KC6cmU8Ma1JX9FMJPa76dL
          source_id: s_gtwML3EUiJjin7o9GBXiuH
          stance: supports
          locator: CBDB:248395
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_dl0ZtceYap78WTEQxlqFAv
        subject_person_id: p_EanU2yYn4vz2RKu9z2UR1n
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_oEx5JqZovWjAWmN242q9VM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xeGCqljs4fbrJG1M92Ojt_
          claim_id: c_dl0ZtceYap78WTEQxlqFAv
          source_id: s_lPu9PfE8TD_YEffuilisMK
          stance: supports
          locator: CBDB：兄弟 王盛（126711）之父／母 王惠
          quotation: null
          interpretation_note: 由兄弟关系推断：王敦 与 王盛 为同胞（CBDB 记「兄」），王盛 之父／母即 王敦 之父／母。
          source:
            id: s_lPu9PfE8TD_YEffuilisMK
            source_type: api_record
            title: 中国历代人物传记资料库：王敦（CBDB 248395）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=248395&o=json
            external_identifier: CBDB:248395
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_EanU2yYn4vz2RKu9z2UR1n
        status: active
        display_name: 王惠
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_Ryklis6FJcjRKjowLsxK8a
        subject_person_id: p_2XRBAyxJK1NzbNZAjugN5q
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_oEx5JqZovWjAWmN242q9VM
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9_oCrMGGyBRz_x0G7TExDp
          claim_id: c_Ryklis6FJcjRKjowLsxK8a
          source_id: s_lPu9PfE8TD_YEffuilisMK
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126711 王盛）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_lPu9PfE8TD_YEffuilisMK
            source_type: api_record
            title: 中国历代人物传记资料库：王敦（CBDB 248395）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=248395&o=json
            external_identifier: CBDB:248395
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_2XRBAyxJK1NzbNZAjugN5q
        status: active
        display_name: 王盛
        merged_into_person_id: null
---

# 王敦

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王敦 | accepted |
| bio.summary | 王敦，明人物。成化十一年進士，籍贯韓城。（中国历代人物传记资料库 CBDB 248395） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_EanU2yYn4vz2RKu9z2UR1n | 王惠 | accepted |
| other | p_2XRBAyxJK1NzbNZAjugN5q | 王盛 | accepted |

## 外部来源

- [中国历代人物传记资料库：王敦（CBDB 248395）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=248395&o=json)
