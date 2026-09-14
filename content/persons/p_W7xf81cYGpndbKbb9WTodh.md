---
schema: wang-person/v1
id: p_W7xf81cYGpndbKbb9WTodh
status: active
merged_into: null
display_name: 王心純
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_zrmGhrypFUJk3CBb1FwvEr
        subject_person_id: p_W7xf81cYGpndbKbb9WTodh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王心純
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Leksd8rJbSGNAi8xvpUYvP
          claim_id: c_zrmGhrypFUJk3CBb1FwvEr
          source_id: s_y7cf8uEHpaj6CCaeYVPiY2
          stance: supports
          locator: CBDB:227996
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（227996）
          source: &a1
            id: s_y7cf8uEHpaj6CCaeYVPiY2
            source_type: api_record
            title: 中国历代人物传记资料库：王心純（CBDB 227996）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227996&o=json
            external_identifier: CBDB:227996
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.548Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_huQSuJ4M4KaaLEMMzSPtWN
        subject_person_id: p_W7xf81cYGpndbKbb9WTodh
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王心純，明人物。萬曆丙戌科進士進士，籍贯來安，入仕庠生。（中国历代人物传记资料库 CBDB 227996）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_n76xyGRZENDHL8R8JZgzil
          claim_id: c_huQSuJ4M4KaaLEMMzSPtWN
          source_id: s_y7cf8uEHpaj6CCaeYVPiY2
          stance: supports
          locator: CBDB:227996
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_fGLoCnPuzt5aqtR0vFMf6g
        subject_person_id: p_QEHQVSVhwwmdKZM4tKcH7N
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_W7xf81cYGpndbKbb9WTodh
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ldq4t0ghLLUIIFfvSAtPI3
          claim_id: c_fGLoCnPuzt5aqtR0vFMf6g
          source_id: s_3nCjiSWKpzrWFGXczbxkRA
          stance: supports
          locator: CBDB：兄弟 王嘉賓（207120）之父／母 王可久
          quotation: null
          interpretation_note: 由兄弟关系推断：王心純 与 王嘉賓 为同胞（CBDB 记「兄」），王嘉賓 之父／母即 王心純 之父／母。
          source:
            id: s_3nCjiSWKpzrWFGXczbxkRA
            source_type: api_record
            title: 中国历代人物传记资料库：王心純（CBDB 227996）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227996&o=json
            external_identifier: CBDB:227996
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_QEHQVSVhwwmdKZM4tKcH7N
        status: active
        display_name: 王可久
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c__EhJLUJaCtn_X31wb8qcmN
        subject_person_id: p_W7xf81cYGpndbKbb9WTodh
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_yt96UUYNj3ASszrYuN2kTm
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CnuOE0szokCnpMf0wyGyD4
          claim_id: c__EhJLUJaCtn_X31wb8qcmN
          source_id: s_3nCjiSWKpzrWFGXczbxkRA
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 207120 王嘉賓）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_3nCjiSWKpzrWFGXczbxkRA
            source_type: api_record
            title: 中国历代人物传记资料库：王心純（CBDB 227996）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227996&o=json
            external_identifier: CBDB:227996
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_yt96UUYNj3ASszrYuN2kTm
        status: active
        display_name: 王嘉賓
        merged_into_person_id: null
---

# 王心純

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王心純 | accepted |
| bio.summary | 王心純，明人物。萬曆丙戌科進士進士，籍贯來安，入仕庠生。（中国历代人物传记资料库 CBDB 227996） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_QEHQVSVhwwmdKZM4tKcH7N | 王可久 | accepted |
| other | p_yt96UUYNj3ASszrYuN2kTm | 王嘉賓 | accepted |

## 外部来源

- [中国历代人物传记资料库：王心純（CBDB 227996）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227996&o=json)
