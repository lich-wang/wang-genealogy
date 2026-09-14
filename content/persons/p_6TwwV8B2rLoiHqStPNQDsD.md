---
schema: wang-person/v1
id: p_6TwwV8B2rLoiHqStPNQDsD
status: active
merged_into: null
display_name: 王溥
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_f3zC73fogFRtSAbg6j3fyo
        subject_person_id: p_6TwwV8B2rLoiHqStPNQDsD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王溥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_tCZvvdeFu5LowoHgH58iHg
          claim_id: c_f3zC73fogFRtSAbg6j3fyo
          source_id: s_es66S1DZ4Fd2XENiUbDa65
          stance: supports
          locator: CBDB:66306
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（66306）
          source: &a1
            id: s_es66S1DZ4Fd2XENiUbDa65
            source_type: api_record
            title: 中国历代人物传记资料库：王溥（CBDB 66306）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=66306&o=json
            external_identifier: CBDB:66306
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.949Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2SjdLsJ9TqRRmQp3C8Qod9
        subject_person_id: p_6TwwV8B2rLoiHqStPNQDsD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王溥，明人物。籍贯安仁，身份为孝子/孝女，曾任行省平章政事、詹事府副詹事、中書省右丞。（中国历代人物传记资料库 CBDB 66306）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_xBJOCD_XmQ2ADhJMxJ0qGZ
          claim_id: c_2SjdLsJ9TqRRmQp3C8Qod9
          source_id: s_es66S1DZ4Fd2XENiUbDa65
          stance: supports
          locator: CBDB:66306
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
        id: c_Zb4pDno1gIK8-YjbIFHOWR
        subject_person_id: p_6TwwV8B2rLoiHqStPNQDsD
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_kTHwa2H6dv2S3F8L5DSA1K
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XZnH74WoFFg-GuYuPdYeLR
          claim_id: c_Zb4pDno1gIK8-YjbIFHOWR
          source_id: s_mOTC3i1MmX6GQLbK1Cj_m1
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 558551 王漢）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_mOTC3i1MmX6GQLbK1Cj_m1
            source_type: api_record
            title: 中国历代人物传记资料库：王溥（CBDB 66306）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=66306&o=json
            external_identifier: CBDB:66306
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_kTHwa2H6dv2S3F8L5DSA1K
        status: active
        display_name: 王漢
        merged_into_person_id: null
---

# 王溥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王溥 | accepted |
| bio.summary | 王溥，明人物。籍贯安仁，身份为孝子/孝女，曾任行省平章政事、詹事府副詹事、中書省右丞。（中国历代人物传记资料库 CBDB 66306） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| other | p_kTHwa2H6dv2S3F8L5DSA1K | 王漢 | accepted |

## 外部来源

- [中国历代人物传记资料库：王溥（CBDB 66306）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=66306&o=json)
