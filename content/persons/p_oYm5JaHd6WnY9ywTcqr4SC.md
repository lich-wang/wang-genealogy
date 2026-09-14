---
schema: wang-person/v1
id: p_oYm5JaHd6WnY9ywTcqr4SC
status: active
merged_into: null
display_name: 王轍
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BBCu5Yy6N2oQNeyu967oaa
        subject_person_id: p_oYm5JaHd6WnY9ywTcqr4SC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王轍
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8cYHZT7YRboEXCoBFiXZig
          claim_id: c_BBCu5Yy6N2oQNeyu967oaa
          source_id: s_wCHwEmnD4aaEQSZQ5Xvi3K
          stance: supports
          locator: CBDB:330015
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（330015）
          source: &a1
            id: s_wCHwEmnD4aaEQSZQ5Xvi3K
            source_type: api_record
            title: 中国历代人物传记资料库：王轍（CBDB 330015）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330015&o=json
            external_identifier: CBDB:330015
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.345Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PVV7SwK44xe8Jd4daw5V6A
        subject_person_id: p_oYm5JaHd6WnY9ywTcqr4SC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王轍，明人物。嘉靖四十四年進士，籍贯清苑。（中国历代人物传记资料库 CBDB 330015）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_hwCx8EtGfLlQKlQQVtFC3t
          claim_id: c_PVV7SwK44xe8Jd4daw5V6A
          source_id: s_wCHwEmnD4aaEQSZQ5Xvi3K
          stance: supports
          locator: CBDB:330015
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_usuxgDA9O_0u5ipSDyMF33
        subject_person_id: p_MXg6TuvxewxsrDfzMYvXK4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_oYm5JaHd6WnY9ywTcqr4SC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aqrD3Nwz-owi9xgv6K3Dub
          claim_id: c_usuxgDA9O_0u5ipSDyMF33
          source_id: s_dcunhZKmn1GmGxER-s2NtO
          stance: supports
          locator: CBDB：兄弟 王軒（205226）之父／母 王世官
          quotation: null
          interpretation_note: 由兄弟关系推断：王轍 与 王軒 为同胞（CBDB 记「兄」），王軒 之父／母即 王轍 之父／母。
          source:
            id: s_dcunhZKmn1GmGxER-s2NtO
            source_type: api_record
            title: 中国历代人物传记资料库：王轍（CBDB 330015）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330015&o=json
            external_identifier: CBDB:330015
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_MXg6TuvxewxsrDfzMYvXK4
        status: active
        display_name: 王世官
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_YxxA-Xko8Y5L9htRqBWSej
        subject_person_id: p_aPcrqB9XkxSACSANyGxVsW
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_oYm5JaHd6WnY9ywTcqr4SC
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kTkv8LsRiJGHXzyu2xz7s1
          claim_id: c_YxxA-Xko8Y5L9htRqBWSej
          source_id: s_dcunhZKmn1GmGxER-s2NtO
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205226 王軒）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_dcunhZKmn1GmGxER-s2NtO
            source_type: api_record
            title: 中国历代人物传记资料库：王轍（CBDB 330015）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330015&o=json
            external_identifier: CBDB:330015
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_aPcrqB9XkxSACSANyGxVsW
        status: active
        display_name: 王軒
        merged_into_person_id: null
---

# 王轍

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王轍 | accepted |
| bio.summary | 王轍，明人物。嘉靖四十四年進士，籍贯清苑。（中国历代人物传记资料库 CBDB 330015） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_MXg6TuvxewxsrDfzMYvXK4 | 王世官 | accepted |
| other | p_aPcrqB9XkxSACSANyGxVsW | 王軒 | accepted |

## 外部来源

- [中国历代人物传记资料库：王轍（CBDB 330015）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330015&o=json)
