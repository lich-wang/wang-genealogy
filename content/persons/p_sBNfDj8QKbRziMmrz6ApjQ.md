---
schema: wang-person/v1
id: p_sBNfDj8QKbRziMmrz6ApjQ
status: active
merged_into: null
display_name: 王季友
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9JkRDECLL81hdAeVauuD5H
        subject_person_id: p_sBNfDj8QKbRziMmrz6ApjQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王季友
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_yVLM8ka2hsMARBnkBhXQuz
          claim_id: c_9JkRDECLL81hdAeVauuD5H
          source_id: s_MADWo2b3BCRgNhEPJM42Tv
          stance: supports
          locator: CBDB:92039
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（92039）
          source: &a1
            id: s_MADWo2b3BCRgNhEPJM42Tv
            source_type: api_record
            title: 中国历代人物传记资料库：王季友（CBDB 92039）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92039&o=json
            external_identifier: CBDB:92039
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.100Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_uNeRED6nHPCW8J6fWv7piD
        subject_person_id: p_sBNfDj8QKbRziMmrz6ApjQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王季友，唐人物。籍贯河南，身份为詩人、文人，曾任觀察副使、觀察使僚佐、監察御史。（中国历代人物传记资料库 CBDB 92039）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Bu0__8AY4EhsvPjK2v98AE
          claim_id: c_uNeRED6nHPCW8J6fWv7piD
          source_id: s_MADWo2b3BCRgNhEPJM42Tv
          stance: supports
          locator: CBDB:92039
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
  spouses:
    - claim:
        id: c_bNuCwd5fXpZi0TjSfgPvjX
        subject_person_id: p_sBNfDj8QKbRziMmrz6ApjQ
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_8pzPiDEmBKPPwg8Q2mYXb9
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cPpnEAtsbZ8ArvbwMGpWT-
          claim_id: c_bNuCwd5fXpZi0TjSfgPvjX
          source_id: s_oXNVb-RTjCVwW7vZV_qmQm
          stance: supports
          locator: Pers DB / 唐代人物知識ベース，pers00162：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_oXNVb-RTjCVwW7vZV_qmQm
            source_type: api_record
            title: 中国历代人物传记资料库：柳氏(王季友妻)（CBDB 94056）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=94056&o=json
            external_identifier: CBDB:94056
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_8pzPiDEmBKPPwg8Q2mYXb9
        status: active
        display_name: 柳氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王季友

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王季友 | accepted |
| bio.summary | 王季友，唐人物。籍贯河南，身份为詩人、文人，曾任觀察副使、觀察使僚佐、監察御史。（中国历代人物传记资料库 CBDB 92039） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_8pzPiDEmBKPPwg8Q2mYXb9 | 柳氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：柳氏(王季友妻)（CBDB 94056）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=94056&o=json)
- [中国历代人物传记资料库：王季友（CBDB 92039）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92039&o=json)
