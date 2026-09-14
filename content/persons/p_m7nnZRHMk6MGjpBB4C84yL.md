---
schema: wang-person/v1
id: p_m7nnZRHMk6MGjpBB4C84yL
status: active
merged_into: null
display_name: 王綸
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_k3n5Lap6CrTtAeLKU6BMN4
        subject_person_id: p_m7nnZRHMk6MGjpBB4C84yL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王綸
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_McfAv7f8E86bfCDiGkFFbq
          claim_id: c_k3n5Lap6CrTtAeLKU6BMN4
          source_id: s_s8ub1KA133msmB9Z8ukuDK
          stance: supports
          locator: CBDB:1852
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（1852）
          source: &a1
            id: s_s8ub1KA133msmB9Z8ukuDK
            source_type: api_record
            title: 中国历代人物传记资料库：王綸（CBDB 1852）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1852&o=json
            external_identifier: CBDB:1852
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.343Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_79HGXYNTVYPn8Eok2pt8oY
        subject_person_id: p_m7nnZRHMk6MGjpBB4C84yL
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1161年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eW4fBrEuYuwaPGxb1G9HFo
          claim_id: c_79HGXYNTVYPn8Eok2pt8oY
          source_id: s_s8ub1KA133msmB9Z8ukuDK
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KFVcEcPkgABbep384M83MW
        subject_person_id: p_m7nnZRHMk6MGjpBB4C84yL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王綸（卒于1161年），宋人物。籍贯上元，入仕進士，曾任尚書省工部侍郎、同知樞密院事、監察御史。（中国历代人物传记资料库 CBDB 1852）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_R493xZMEniH7vcUv0PDrQN
          claim_id: c_KFVcEcPkgABbep384M83MW
          source_id: s_s8ub1KA133msmB9Z8ukuDK
          stance: supports
          locator: CBDB:1852
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_HoCdHgrS8-8PbeLFAFHpEQ
        subject_person_id: p_m7nnZRHMk6MGjpBB4C84yL
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_nXR2pCD3EGKYpUd33G1sq2
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ihMcxkjMalCiWu49NBxfgs
          claim_id: c_HoCdHgrS8-8PbeLFAFHpEQ
          source_id: s_CzUR3mBPSWcrfkqcfximzz
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 119722 王綽）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_CzUR3mBPSWcrfkqcfximzz
            source_type: api_record
            title: 中国历代人物传记资料库：王綸（CBDB 1852）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1852&o=json
            external_identifier: CBDB:1852
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_nXR2pCD3EGKYpUd33G1sq2
        status: active
        display_name: 王綽
        merged_into_person_id: null
---

# 王綸

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王綸 | accepted |
| death.date | 1161年 | accepted |
| bio.summary | 王綸（卒于1161年），宋人物。籍贯上元，入仕進士，曾任尚書省工部侍郎、同知樞密院事、監察御史。（中国历代人物传记资料库 CBDB 1852） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| other | p_nXR2pCD3EGKYpUd33G1sq2 | 王綽 | accepted |

## 外部来源

- [中国历代人物传记资料库：王綸（CBDB 1852）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1852&o=json)
