---
schema: wang-person/v1
id: p_Ada1sjGMt787T793a6Ee7H
status: active
merged_into: null
display_name: 王君慶
cbdb_id: 168103
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EG6fr2AopxdufZNKasnhF5
        subject_person_id: p_Ada1sjGMt787T793a6Ee7H
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王君慶，唐人物。中国历代人物传记资料库（CBDB）以人物编号 168103 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_k0TgPk6E_-tMsu5sUP_E7e
          claim_id: c_EG6fr2AopxdufZNKasnhF5
          source_id: s_KxgrKeZXKLgnBJKRjGYFRZ
          stance: supports
          locator: CBDB:168103
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_KxgrKeZXKLgnBJKRjGYFRZ
            source_type: api_record
            title: 中国历代人物传记资料库：王君慶（CBDB 168103）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=168103&o=json
            external_identifier: CBDB:168103
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.741Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_6wpgtGtrbvFvxo8RpZsAwt
        subject_person_id: p_Ada1sjGMt787T793a6Ee7H
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王君慶
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_5VhJ3V5JJWptJDFUqWJCwp
          claim_id: c_6wpgtGtrbvFvxo8RpZsAwt
          source_id: s_KxgrKeZXKLgnBJKRjGYFRZ
          stance: supports
          locator: CBDB:168103
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2301-2400）｜历史性依据：CBDB 朝代 = 唐
          source:
            id: s_KxgrKeZXKLgnBJKRjGYFRZ
            source_type: api_record
            title: 中国历代人物传记资料库：王君慶（CBDB 168103）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=168103&o=json
            external_identifier: CBDB:168103
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.741Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_W-RTLpOV5N-XNIpWlTVGAB
        subject_person_id: p_uqx89h8aE16F23TeWrVKqk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Ada1sjGMt787T793a6Ee7H
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5M2XVrOeS1SpGe-3HEOPwU
          claim_id: c_W-RTLpOV5N-XNIpWlTVGAB
          source_id: s_9WURxCEnYvk4Q2J8co9RE9
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Xiantong54：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_9WURxCEnYvk4Q2J8co9RE9
            source_type: api_record
            title: 中国历代人物传记资料库：王德（CBDB 143571）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=143571&o=json
            external_identifier: CBDB:143571
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.625Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_uqx89h8aE16F23TeWrVKqk
        status: active
        display_name: 王德
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王君慶

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王君慶，唐人物。中国历代人物传记资料库（CBDB）以人物编号 168103 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王君慶 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_uqx89h8aE16F23TeWrVKqk | 王德 | accepted |

## 外部来源

- [中国历代人物传记资料库：王德（CBDB 143571）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=143571&o=json)
- [中国历代人物传记资料库：王君慶（CBDB 168103）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=168103&o=json)
