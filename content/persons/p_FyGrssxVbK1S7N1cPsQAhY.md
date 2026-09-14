---
schema: wang-person/v1
id: p_FyGrssxVbK1S7N1cPsQAhY
status: active
merged_into: null
display_name: 王明
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ci6aV3b15tBeATd5kxBk1w
        subject_person_id: p_FyGrssxVbK1S7N1cPsQAhY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王明
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CCnsetQ8qzGY6yXqMfKFYP
          claim_id: c_ci6aV3b15tBeATd5kxBk1w
          source_id: s_WgJJxUcEtkoCVsQzfaj5tz
          stance: supports
          locator: CBDB:241970
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（241970）
          source: &a1
            id: s_WgJJxUcEtkoCVsQzfaj5tz
            source_type: api_record
            title: 中国历代人物传记资料库：王明（CBDB 241970）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241970&o=json
            external_identifier: CBDB:241970
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.964Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qDyyLGzKbyH7WpPQwztA6U
        subject_person_id: p_FyGrssxVbK1S7N1cPsQAhY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王明，明人物。成化二年進士，籍贯長興。（中国历代人物传记资料库 CBDB 241970）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_mgOhp9M_8Zfv7FFcPbaQhs
          claim_id: c_qDyyLGzKbyH7WpPQwztA6U
          source_id: s_WgJJxUcEtkoCVsQzfaj5tz
          stance: supports
          locator: CBDB:241970
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_fqdCoDd8Sc3sHkgTgDTJLH
        subject_person_id: p_tJVHjGjKc27ATYVAuaH8nP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_FyGrssxVbK1S7N1cPsQAhY
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pKPAjGj-s9Z0xxKJAwRf8M
          claim_id: c_fqdCoDd8Sc3sHkgTgDTJLH
          source_id: s_ir-K3dFgu22x7AnFVbh7nb
          stance: supports
          locator: CBDB：兄弟 王俁（199224）之父／母 王瑄
          quotation: null
          interpretation_note: 由兄弟关系推断：王明 与 王俁 为同胞（CBDB 记「弟」），王俁 之父／母即 王明 之父／母。
          source:
            id: s_ir-K3dFgu22x7AnFVbh7nb
            source_type: api_record
            title: 中国历代人物传记资料库：王明（CBDB 241970）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241970&o=json
            external_identifier: CBDB:241970
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_tJVHjGjKc27ATYVAuaH8nP
        status: active
        display_name: 王瑄
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_Og3_p4xvMvyG8XqjNIctBA
        subject_person_id: p_FyGrssxVbK1S7N1cPsQAhY
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_wzpgCTfy9H3iqMXKhqaPfp
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jZpzqV1PohZoLEAMl63OAK
          claim_id: c_Og3_p4xvMvyG8XqjNIctBA
          source_id: s_ir-K3dFgu22x7AnFVbh7nb
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 199224 王俁）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_ir-K3dFgu22x7AnFVbh7nb
            source_type: api_record
            title: 中国历代人物传记资料库：王明（CBDB 241970）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241970&o=json
            external_identifier: CBDB:241970
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_wzpgCTfy9H3iqMXKhqaPfp
        status: active
        display_name: 王俁
        merged_into_person_id: null
---

# 王明

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王明 | accepted |
| bio.summary | 王明，明人物。成化二年進士，籍贯長興。（中国历代人物传记资料库 CBDB 241970） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_tJVHjGjKc27ATYVAuaH8nP | 王瑄 | accepted |
| other | p_wzpgCTfy9H3iqMXKhqaPfp | 王俁 | accepted |

## 外部来源

- [中国历代人物传记资料库：王明（CBDB 241970）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241970&o=json)
