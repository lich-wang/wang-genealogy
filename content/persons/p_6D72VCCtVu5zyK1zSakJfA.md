---
schema: wang-person/v1
id: p_6D72VCCtVu5zyK1zSakJfA
status: active
merged_into: null
display_name: 王輗
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_uCvfJArKsjiCqK7m27zVSW
        subject_person_id: p_6D72VCCtVu5zyK1zSakJfA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王輗
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_AZr1254vfNT4G9cUimPYDi
          claim_id: c_uCvfJArKsjiCqK7m27zVSW
          source_id: s_urx3pNscCD6VXy2xRcQwRt
          stance: supports
          locator: CBDB:329355
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（329355）
          source: &a1
            id: s_urx3pNscCD6VXy2xRcQwRt
            source_type: api_record
            title: 中国历代人物传记资料库：王輗（CBDB 329355）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329355&o=json
            external_identifier: CBDB:329355
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.323Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JBUN1yND6D1v8UUhRXDMGD
        subject_person_id: p_6D72VCCtVu5zyK1zSakJfA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王輗，明人物。嘉靖四十一年進士，籍贯定遠。（中国历代人物传记资料库 CBDB 329355）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_iL0-4lF-YHqEx_OS60v-px
          claim_id: c_JBUN1yND6D1v8UUhRXDMGD
          source_id: s_urx3pNscCD6VXy2xRcQwRt
          stance: supports
          locator: CBDB:329355
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_PrN7WFdzKAeirs7d4dQMnz
        subject_person_id: p_rhYt9t4gYuDEpCnQq4aywZ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6D72VCCtVu5zyK1zSakJfA
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NAB_RB0cMCBnr84PI5k-Gv
          claim_id: c_PrN7WFdzKAeirs7d4dQMnz
          source_id: s_HXbdI623hgvevUeElD_3SQ
          stance: supports
          locator: CBDB：兄弟 王輦（205182）之父／母 王利
          quotation: null
          interpretation_note: 由兄弟关系推断：王輗 与 王輦 为同胞（CBDB 记「兄」），王輦 之父／母即 王輗 之父／母。
          source:
            id: s_HXbdI623hgvevUeElD_3SQ
            source_type: api_record
            title: 中国历代人物传记资料库：王輗（CBDB 329355）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329355&o=json
            external_identifier: CBDB:329355
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_rhYt9t4gYuDEpCnQq4aywZ
        status: active
        display_name: 王利
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_RgdyjittqqsvuRQiFRuJvh
        subject_person_id: p_6D72VCCtVu5zyK1zSakJfA
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_MT9QqQenXKizWtnnGxJQyH
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xtfPaqV-hTo5NZni9_MiOE
          claim_id: c_RgdyjittqqsvuRQiFRuJvh
          source_id: s_HXbdI623hgvevUeElD_3SQ
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205182 王輦）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_HXbdI623hgvevUeElD_3SQ
            source_type: api_record
            title: 中国历代人物传记资料库：王輗（CBDB 329355）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329355&o=json
            external_identifier: CBDB:329355
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_MT9QqQenXKizWtnnGxJQyH
        status: active
        display_name: 王輦
        merged_into_person_id: null
---

# 王輗

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王輗 | accepted |
| bio.summary | 王輗，明人物。嘉靖四十一年進士，籍贯定遠。（中国历代人物传记资料库 CBDB 329355） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_rhYt9t4gYuDEpCnQq4aywZ | 王利 | accepted |
| other | p_MT9QqQenXKizWtnnGxJQyH | 王輦 | accepted |

## 外部来源

- [中国历代人物传记资料库：王輗（CBDB 329355）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329355&o=json)
