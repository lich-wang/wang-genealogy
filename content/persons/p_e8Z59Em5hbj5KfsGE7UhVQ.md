---
schema: wang-person/v1
id: p_e8Z59Em5hbj5KfsGE7UhVQ
status: active
merged_into: null
display_name: 王鑑
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_A3GVg6118z3QCMoWah9aRn
        subject_person_id: p_e8Z59Em5hbj5KfsGE7UhVQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鑑
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_E9hDGGoUmunRNgy2KzTgYS
          claim_id: c_A3GVg6118z3QCMoWah9aRn
          source_id: s_1SUmsFVocSHYtEuenTLpTH
          stance: supports
          locator: CBDB:126886
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126886）
          source: &a1
            id: s_1SUmsFVocSHYtEuenTLpTH
            source_type: api_record
            title: 中国历代人物传记资料库：王鑑（CBDB 126886）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126886&o=json
            external_identifier: CBDB:126886
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.285Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_KoHF7mGZFJF252rUV41jNX
        subject_person_id: p_e8Z59Em5hbj5KfsGE7UhVQ
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1520年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GWxNpqfGQboXkmxStipxnM
          claim_id: c_KoHF7mGZFJF252rUV41jNX
          source_id: s_1SUmsFVocSHYtEuenTLpTH
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_HnneuCdcfBEgC73diJdvvb
        subject_person_id: p_e8Z59Em5hbj5KfsGE7UhVQ
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1590年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ndFEs9KBebKDHejuzmKGGN
          claim_id: c_HnneuCdcfBEgC73diJdvvb
          source_id: s_1SUmsFVocSHYtEuenTLpTH
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
        id: c_z4gWeB5jPMNrD9kxsgw1JU
        subject_person_id: p_e8Z59Em5hbj5KfsGE7UhVQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鑑（1520年—1590年），明人物。明清進士進士，籍贯無錫，身份为畫家，入仕進士。（中国历代人物传记资料库 CBDB 126886）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_XnPLpYnpkT62OpZNT_v3-h
          claim_id: c_z4gWeB5jPMNrD9kxsgw1JU
          source_id: s_1SUmsFVocSHYtEuenTLpTH
          stance: supports
          locator: CBDB:126886
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_BQsfPLXldH98VMeOsAVTkE
        subject_person_id: p_yBv5FsmN9BCFNm7cQbu6uG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_e8Z59Em5hbj5KfsGE7UhVQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vpAHXL69MEG9l9YTeLPnHf
          claim_id: c_BQsfPLXldH98VMeOsAVTkE
          source_id: s_1SUmsFVocSHYtEuenTLpTH
          stance: supports
          locator: 嘉靖四十四年進士登科錄:一卷，第二甲第十七名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_yBv5FsmN9BCFNm7cQbu6uG
        status: active
        display_name: 王問
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_Z8yAYi9kojZHK3Af6ei6kr
        subject_person_id: p_e8Z59Em5hbj5KfsGE7UhVQ
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_XcSXxfj3mZBJQivkT5yYZQ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_k5TBvhQLB7nb3wZpbTOi2S
          claim_id: c_Z8yAYi9kojZHK3Af6ei6kr
          source_id: s_-6DkGuAa8byyLAm-MyfaKu
          stance: supports
          locator: 嘉靖四十四年進士登科錄:一卷，第二甲第十七名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_-6DkGuAa8byyLAm-MyfaKu
            source_type: api_record
            title: 中国历代人物传记资料库：劉氏(王鑑妻)（CBDB 329593）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329593&o=json
            external_identifier: CBDB:329593
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_XcSXxfj3mZBJQivkT5yYZQ
        status: active
        display_name: 劉氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_kxVvXDRE1DEY3cAKVGJ8o3
        subject_person_id: p_gH7wRC5BmANJJYsb5Tb9ge
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_e8Z59Em5hbj5KfsGE7UhVQ
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1fB9KA_lYHALapWHudhecy
          claim_id: c_kxVvXDRE1DEY3cAKVGJ8o3
          source_id: s_1SUmsFVocSHYtEuenTLpTH
          stance: supports
          locator: 嘉靖四十四年進士登科錄:一卷，第二甲第十七名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_gH7wRC5BmANJJYsb5Tb9ge
        status: active
        display_name: 王宗
        merged_into_person_id: null
    - claim:
        id: c_keQ7jE3tg-4oqM3MqK37MR
        subject_person_id: p_P9eXDEa4P4ZWiNvC97WQT1
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_e8Z59Em5hbj5KfsGE7UhVQ
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sVWGZInqK8qJlHTUa-uAMd
          claim_id: c_keQ7jE3tg-4oqM3MqK37MR
          source_id: s_1SUmsFVocSHYtEuenTLpTH
          stance: supports
          locator: 嘉靖四十四年進士登科錄:一卷，第二甲第十七名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_P9eXDEa4P4ZWiNvC97WQT1
        status: active
        display_name: 王澤
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王鑑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鑑 | accepted |
| birth.date | 1520年 | accepted |
| death.date | 1590年 | accepted |
| bio.summary | 王鑑（1520年—1590年），明人物。明清進士進士，籍贯無錫，身份为畫家，入仕進士。（中国历代人物传记资料库 CBDB 126886） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_yBv5FsmN9BCFNm7cQbu6uG | 王問 | accepted |
| spouses | p_XcSXxfj3mZBJQivkT5yYZQ | 劉氏 | accepted |
| ancestors | p_gH7wRC5BmANJJYsb5Tb9ge | 王宗 | accepted |
| ancestors | p_P9eXDEa4P4ZWiNvC97WQT1 | 王澤 | accepted |

## 外部来源

- [中国历代人物传记资料库：劉氏(王鑑妻)（CBDB 329593）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329593&o=json)
- [中国历代人物传记资料库：王鑑（CBDB 126886）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126886&o=json)
