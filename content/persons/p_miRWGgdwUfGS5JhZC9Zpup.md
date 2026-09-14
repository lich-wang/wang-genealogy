---
schema: wang-person/v1
id: p_miRWGgdwUfGS5JhZC9Zpup
status: active
merged_into: null
display_name: 王种賓
cbdb_id: 329107
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4eV4xdZQXC66bRoxTD389P
        subject_person_id: p_miRWGgdwUfGS5JhZC9Zpup
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王种賓，明人物。嘉靖四十一年進士，籍贯滕縣。（中国历代人物传记资料库 CBDB 329107）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_wUDBJf-JdHwgAe4WH9XmF1
          claim_id: c_4eV4xdZQXC66bRoxTD389P
          source_id: s_bfzDmhGUr9mBKvhVyazLUz
          stance: supports
          locator: CBDB:329107
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_bfzDmhGUr9mBKvhVyazLUz
            source_type: api_record
            title: 中国历代人物传记资料库：王种賓（CBDB 329107）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329107&o=json
            external_identifier: CBDB:329107
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:07.614Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_S6RLWJ1Z1eBX9J6XeQLCLb
        subject_person_id: p_miRWGgdwUfGS5JhZC9Zpup
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王种賓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_5qeE8sybKJiPF6D7YU7Qa7
          claim_id: c_S6RLWJ1Z1eBX9J6XeQLCLb
          source_id: s_bfzDmhGUr9mBKvhVyazLUz
          stance: supports
          locator: CBDB:329107
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3901-4000）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_A36nM7Dx0fil9EPOES9mBD
        subject_person_id: p_ti6Fg8MT1rHxww4P7Fhfft
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_miRWGgdwUfGS5JhZC9Zpup
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2kY-ze-n1CnRBWsZeBbK6Y
          claim_id: c_A36nM7Dx0fil9EPOES9mBD
          source_id: s_HetSdFzoln-en3TZCzUDyy
          stance: supports
          locator: CBDB：兄弟 王嘉賓（126781）之父／母 王天敘
          quotation: null
          interpretation_note: 由兄弟关系推断：王种賓 与 王嘉賓 为同胞（CBDB 记「兄」），王嘉賓 之父／母即 王种賓 之父／母。
          source:
            id: s_HetSdFzoln-en3TZCzUDyy
            source_type: api_record
            title: 中国历代人物传记资料库：王种賓（CBDB 329107）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329107&o=json
            external_identifier: CBDB:329107
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ti6Fg8MT1rHxww4P7Fhfft
        status: active
        display_name: 王天敘
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_kK7RMwzssLxmZh_T7vcf2x
        subject_person_id: p_miRWGgdwUfGS5JhZC9Zpup
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_oCU6m3KhN1qYCRgVAU6mzE
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_46F1AJhcOGeUTcShSM1cmN
          claim_id: c_kK7RMwzssLxmZh_T7vcf2x
          source_id: s_HetSdFzoln-en3TZCzUDyy
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126781 王嘉賓）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_HetSdFzoln-en3TZCzUDyy
            source_type: api_record
            title: 中国历代人物传记资料库：王种賓（CBDB 329107）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329107&o=json
            external_identifier: CBDB:329107
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_oCU6m3KhN1qYCRgVAU6mzE
        status: active
        display_name: 王嘉賓
        merged_into_person_id: null
---

# 王种賓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王种賓，明人物。嘉靖四十一年進士，籍贯滕縣。（中国历代人物传记资料库 CBDB 329107） | accepted |
| name.primary | 王种賓 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ti6Fg8MT1rHxww4P7Fhfft | 王天敘 | accepted |
| other | p_oCU6m3KhN1qYCRgVAU6mzE | 王嘉賓 | accepted |

## 外部来源

- [中国历代人物传记资料库：王种賓（CBDB 329107）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329107&o=json)
