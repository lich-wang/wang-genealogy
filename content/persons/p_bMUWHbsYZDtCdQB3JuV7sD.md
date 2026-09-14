---
schema: wang-person/v1
id: p_bMUWHbsYZDtCdQB3JuV7sD
status: active
merged_into: null
display_name: 王任賢
cbdb_id: 285851
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xsD3zjNsEC9uHpbeKFKfMF
        subject_person_id: p_bMUWHbsYZDtCdQB3JuV7sD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王任賢，明人物。正德十六年進士，籍贯交河，入仕太學生，曾任吏目、主簿。（中国历代人物传记资料库 CBDB 285851）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_5rWeu0a3xnGvJXL0CHFUqH
          claim_id: c_xsD3zjNsEC9uHpbeKFKfMF
          source_id: s_tyCEWQNRhrAgayV6cwiCzW
          stance: supports
          locator: CBDB:285851
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_tyCEWQNRhrAgayV6cwiCzW
            source_type: api_record
            title: 中国历代人物传记资料库：王任賢（CBDB 285851）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285851&o=json
            external_identifier: CBDB:285851
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.953Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_FeFBLEANirvhEDBDoYdiiH
        subject_person_id: p_bMUWHbsYZDtCdQB3JuV7sD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王任賢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_PdLw2F4VjLZDKn3QxG24kg
          claim_id: c_FeFBLEANirvhEDBDoYdiiH
          source_id: s_tyCEWQNRhrAgayV6cwiCzW
          stance: supports
          locator: CBDB:285851
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3301-3400）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_0VrmMF8cx7IyhxYsUVri6K
        subject_person_id: p_yeJtEcC7cBaU9sVyVGy7xj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_bMUWHbsYZDtCdQB3JuV7sD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Jn2ZGvV-gKtf9nlBMQPkRC
          claim_id: c_0VrmMF8cx7IyhxYsUVri6K
          source_id: s_dPfXbXoXOPeAcEDE8sQQZ2
          stance: supports
          locator: CBDB：兄弟 王重賢（202269）之父／母 王鉞
          quotation: null
          interpretation_note: 由兄弟关系推断：王任賢 与 王重賢 为同胞（CBDB 记「兄」），王重賢 之父／母即 王任賢 之父／母。
          source:
            id: s_dPfXbXoXOPeAcEDE8sQQZ2
            source_type: api_record
            title: 中国历代人物传记资料库：王任賢（CBDB 285851）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285851&o=json
            external_identifier: CBDB:285851
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_yeJtEcC7cBaU9sVyVGy7xj
        status: active
        display_name: 王鉞
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_m3MM7QH0ibKgItMlqme0YN
        subject_person_id: p_HgaWqM5nscyN4tzrPQd5UX
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_bMUWHbsYZDtCdQB3JuV7sD
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Z3GTgTpNaA8u07N1p8eviL
          claim_id: c_m3MM7QH0ibKgItMlqme0YN
          source_id: s_dPfXbXoXOPeAcEDE8sQQZ2
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202269 王重賢）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_dPfXbXoXOPeAcEDE8sQQZ2
            source_type: api_record
            title: 中国历代人物传记资料库：王任賢（CBDB 285851）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285851&o=json
            external_identifier: CBDB:285851
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_HgaWqM5nscyN4tzrPQd5UX
        status: active
        display_name: 王重賢
        merged_into_person_id: null
---

# 王任賢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王任賢，明人物。正德十六年進士，籍贯交河，入仕太學生，曾任吏目、主簿。（中国历代人物传记资料库 CBDB 285851） | accepted |
| name.primary | 王任賢 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_yeJtEcC7cBaU9sVyVGy7xj | 王鉞 | accepted |
| other | p_HgaWqM5nscyN4tzrPQd5UX | 王重賢 | accepted |

## 外部来源

- [中国历代人物传记资料库：王任賢（CBDB 285851）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285851&o=json)
