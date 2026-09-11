---
schema: wang-person/v1
id: p_pv61XtHSxxg2PJ1X8CE9a2
status: active
merged_into: null
display_name: 王昌辰
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_yq1qXgSQtQeHDY8ii19kbM
        subject_person_id: p_pv61XtHSxxg2PJ1X8CE9a2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昌辰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_E9Y2XcVZsHDNej7ZHoS1Uc
          claim_id: c_yq1qXgSQtQeHDY8ii19kbM
          source_id: s_wKTwhruwXx5t81q3BiBCST
          stance: supports
          locator: CBDB:136387
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（136387）
          source: &a1
            id: s_wKTwhruwXx5t81q3BiBCST
            source_type: api_record
            title: 中国历代人物传记资料库：王昌辰（CBDB 136387）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=136387&o=json
            external_identifier: CBDB:136387
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.344Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_d6NDYQaFoEZxkLqywgAZJk
        subject_person_id: p_pv61XtHSxxg2PJ1X8CE9a2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昌辰，宋人物。寶祐進士，籍贯資陽。（中国历代人物传记资料库 CBDB 136387）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_1qSeimsGXM_x13WGrUDeJO
          claim_id: c_d6NDYQaFoEZxkLqywgAZJk
          source_id: s_wKTwhruwXx5t81q3BiBCST
          stance: supports
          locator: CBDB:136387
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_HWxm1aUciUchB5Spy1BOge
        subject_person_id: p_pv61XtHSxxg2PJ1X8CE9a2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_jPaziDtaCGEkP8PcqETeGP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bvO4Ov7qhg4qvdIeXvECYD
          claim_id: c_HWxm1aUciUchB5Spy1BOge
          source_id: s_wKTwhruwXx5t81q3BiBCST
          stance: supports
          locator: 寶祐登科錄：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_jPaziDtaCGEkP8PcqETeGP
        status: active
        display_name: 王遇龍
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_Kkq7KQF5MZiXyNZYAfFWm9
        subject_person_id: p_pv61XtHSxxg2PJ1X8CE9a2
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_Z6LwtFV4cUHEyRgoAA6C3G
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BftwtJCGfanQre9Ovs3aHP
          claim_id: c_Kkq7KQF5MZiXyNZYAfFWm9
          source_id: s_TbmfczavJQKYqMdGAFbt7r
          stance: supports
          locator: 寶祐登科錄：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_TbmfczavJQKYqMdGAFbt7r
            source_type: api_record
            title: 中国历代人物传记资料库：何氏(王昌辰妻)（CBDB 138350）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=138350&o=json
            external_identifier: CBDB:138350
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Z6LwtFV4cUHEyRgoAA6C3G
        status: active
        display_name: 何氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_x55StrIop2bmDXbHr3ZaLN
        subject_person_id: p_1dbPFx8DinJSbnFHKJaKLg
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_pv61XtHSxxg2PJ1X8CE9a2
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8XCA4TGbOPvZ9kDz5MiUAu
          claim_id: c_x55StrIop2bmDXbHr3ZaLN
          source_id: s_wKTwhruwXx5t81q3BiBCST
          stance: supports
          locator: 寶祐登科錄：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_1dbPFx8DinJSbnFHKJaKLg
        status: active
        display_name: 王之結
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王昌辰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王昌辰 | accepted |
| bio.summary | 王昌辰，宋人物。寶祐進士，籍贯資陽。（中国历代人物传记资料库 CBDB 136387） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_jPaziDtaCGEkP8PcqETeGP | 王遇龍 | accepted |
| spouses | p_Z6LwtFV4cUHEyRgoAA6C3G | 何氏 | accepted |
| ancestors | p_1dbPFx8DinJSbnFHKJaKLg | 王之結 | accepted |

## 外部来源

- [中国历代人物传记资料库：何氏(王昌辰妻)（CBDB 138350）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=138350&o=json)
- [中国历代人物传记资料库：王昌辰（CBDB 136387）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=136387&o=json)
