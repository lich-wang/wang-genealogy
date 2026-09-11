---
schema: wang-person/v1
id: p_fVVctU3oARvj93SKk81Eji
status: active
merged_into: null
display_name: 王祐
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_oMXDPUeYvXGWy5685Ct4RH
        subject_person_id: p_fVVctU3oARvj93SKk81Eji
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qT6b6QYRx71HLG3yvSBfU6
          claim_id: c_oMXDPUeYvXGWy5685Ct4RH
          source_id: s_S8PvPikNKeqv9SvZpdTNYm
          stance: supports
          locator: CBDB:202067
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（202067）
          source: &a1
            id: s_S8PvPikNKeqv9SvZpdTNYm
            source_type: api_record
            title: 中国历代人物传记资料库：王祐（CBDB 202067）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202067&o=json
            external_identifier: CBDB:202067
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.717Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_4FRgGE2oqto8L5Tfp3Pn3N
        subject_person_id: p_fVVctU3oARvj93SKk81Eji
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1479年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BR59mDJ2bcM2MCgothPJ7v
          claim_id: c_4FRgGE2oqto8L5Tfp3Pn3N
          source_id: s_S8PvPikNKeqv9SvZpdTNYm
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_N9BCy3tDpdzWX7VGJxK6nu
        subject_person_id: p_fVVctU3oARvj93SKk81Eji
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祐（生于1479年），明人物。正德十二年進士，籍贯建平，入仕進士。（中国历代人物传记资料库 CBDB 202067）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_a-C34nBtQw5Pl_nzjI5lHD
          claim_id: c_N9BCy3tDpdzWX7VGJxK6nu
          source_id: s_S8PvPikNKeqv9SvZpdTNYm
          stance: supports
          locator: CBDB:202067
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Ct7lzsfSOxAbhCecVT7c7W
        subject_person_id: p_rMH6azHPPfCWNVYvRKv58F
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_fVVctU3oARvj93SKk81Eji
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TkW50ZX8vZ1sXKppHEQzWc
          claim_id: c_Ct7lzsfSOxAbhCecVT7c7W
          source_id: s_S8PvPikNKeqv9SvZpdTNYm
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第三甲第二百一十二名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_rMH6azHPPfCWNVYvRKv58F
        status: active
        display_name: 王璲
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_2qZaCiANTtLudHgqhSWR1L
        subject_person_id: p_fVVctU3oARvj93SKk81Eji
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_MFqt9n2LVyLYhLxLS4KsNk
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LMVg52V05b8ynZ1JaumguK
          claim_id: c_2qZaCiANTtLudHgqhSWR1L
          source_id: s_wZw6P6jDTiee7RE6XisZAc
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第三甲第二百一十二名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_wZw6P6jDTiee7RE6XisZAc
            source_type: api_record
            title: 中国历代人物传记资料库：戴氏(王祐妻)（CBDB 282817）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282817&o=json
            external_identifier: CBDB:282817
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_MFqt9n2LVyLYhLxLS4KsNk
        status: active
        display_name: 戴氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_ROzlADA7Lc1o3vr6ayYpiF
        subject_person_id: p_UDVLaDy9kGf4256o9Lw5uU
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_fVVctU3oARvj93SKk81Eji
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_s8njGAzb4esZCblz6oR5XL
          claim_id: c_ROzlADA7Lc1o3vr6ayYpiF
          source_id: s_S8PvPikNKeqv9SvZpdTNYm
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第三甲第二百一十二名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_UDVLaDy9kGf4256o9Lw5uU
        status: active
        display_name: 王子讓
        merged_into_person_id: null
    - claim:
        id: c_mETJWNw53u7LmcG2ND9lxz
        subject_person_id: p_GancgNeQ6rSGRzjnYquakL
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_fVVctU3oARvj93SKk81Eji
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gu5aamzsIv-LhEIAX4xV5a
          claim_id: c_mETJWNw53u7LmcG2ND9lxz
          source_id: s_S8PvPikNKeqv9SvZpdTNYm
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第三甲第二百一十二名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_GancgNeQ6rSGRzjnYquakL
        status: active
        display_name: 王信
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王祐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王祐 | accepted |
| birth.date | 1479年 | accepted |
| bio.summary | 王祐（生于1479年），明人物。正德十二年進士，籍贯建平，入仕進士。（中国历代人物传记资料库 CBDB 202067） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_rMH6azHPPfCWNVYvRKv58F | 王璲 | accepted |
| spouses | p_MFqt9n2LVyLYhLxLS4KsNk | 戴氏 | accepted |
| ancestors | p_UDVLaDy9kGf4256o9Lw5uU | 王子讓 | accepted |
| ancestors | p_GancgNeQ6rSGRzjnYquakL | 王信 | accepted |

## 外部来源

- [中国历代人物传记资料库：戴氏(王祐妻)（CBDB 282817）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282817&o=json)
- [中国历代人物传记资料库：王祐（CBDB 202067）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202067&o=json)
