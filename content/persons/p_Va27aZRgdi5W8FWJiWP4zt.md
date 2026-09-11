---
schema: wang-person/v1
id: p_Va27aZRgdi5W8FWJiWP4zt
status: active
merged_into: null
display_name: 王琳
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CVdrDdQ415xwySv7VmqGcq
        subject_person_id: p_Va27aZRgdi5W8FWJiWP4zt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_hQux2RujmCUgpPcc5HRRJJ
          claim_id: c_CVdrDdQ415xwySv7VmqGcq
          source_id: s_hRCDgLQBmdUDEyE1cofkQA
          stance: supports
          locator: CBDB:198163
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（198163）
          source: &a1
            id: s_hRCDgLQBmdUDEyE1cofkQA
            source_type: api_record
            title: 中国历代人物传记资料库：王琳（CBDB 198163）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198163&o=json
            external_identifier: CBDB:198163
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.472Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_MLFRNCQAYXhwwn2gdKoYsF
        subject_person_id: p_Va27aZRgdi5W8FWJiWP4zt
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1428年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_efvYvACEq7f4a9E3gpQuoV
          claim_id: c_MLFRNCQAYXhwwn2gdKoYsF
          source_id: s_hRCDgLQBmdUDEyE1cofkQA
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
        id: c_KRy6nG3Nn7bw8h5hTv3fap
        subject_person_id: p_Va27aZRgdi5W8FWJiWP4zt
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琳（生于1428年），明人物。明清進士進士，籍贯吉水，入仕進士。（中国历代人物传记资料库 CBDB 198163）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_fkZL0cChApvKhO-c7uvy3e
          claim_id: c_KRy6nG3Nn7bw8h5hTv3fap
          source_id: s_hRCDgLQBmdUDEyE1cofkQA
          stance: supports
          locator: CBDB:198163
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_-s1lnKOeL94hnC2mm4wsJB
        subject_person_id: p_y8yYQA2hfedBaXHUn1hFL3
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Va27aZRgdi5W8FWJiWP4zt
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MPJVd1jVzW3xuDG82BJ0ie
          claim_id: c_-s1lnKOeL94hnC2mm4wsJB
          source_id: s_hRCDgLQBmdUDEyE1cofkQA
          stance: supports
          locator: 景泰二年進士登科錄:一卷，第二甲第五十名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_y8yYQA2hfedBaXHUn1hFL3
        status: active
        display_name: 王德威
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_zMIG43xYI_ush-Y75x4mNJ
        subject_person_id: p_Va27aZRgdi5W8FWJiWP4zt
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_19m7jofRhKkgd8P5sqqNZi
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_m8gaxzEejaEoEN_RNtLllr
          claim_id: c_zMIG43xYI_ush-Y75x4mNJ
          source_id: s_A4vKy68CS2GCTVx3IFEM7h
          stance: supports
          locator: 景泰二年進士登科錄:一卷，第二甲第五十名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_A4vKy68CS2GCTVx3IFEM7h
            source_type: api_record
            title: 中国历代人物传记资料库：李氏(王琳妻)（CBDB 296878）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=296878&o=json
            external_identifier: CBDB:296878
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_19m7jofRhKkgd8P5sqqNZi
        status: active
        display_name: 李氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_F3TMx1RaMTky9hx1EkEbtf
        subject_person_id: p_MaHvMERDXA2mxSH2cfs3p9
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Va27aZRgdi5W8FWJiWP4zt
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_P7rucmnocsBN9bAPlBj7UE
          claim_id: c_F3TMx1RaMTky9hx1EkEbtf
          source_id: s_hRCDgLQBmdUDEyE1cofkQA
          stance: supports
          locator: 景泰二年進士登科錄:一卷，第二甲第五十名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_MaHvMERDXA2mxSH2cfs3p9
        status: active
        display_name: 王義實
        merged_into_person_id: null
    - claim:
        id: c_snnN9ernRUBelWx4cog4Ag
        subject_person_id: p_GWEDQ8SKXUwN2mr8EJN8Zm
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Va27aZRgdi5W8FWJiWP4zt
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LWwceQGOWClo1O-3N6FL5j
          claim_id: c_snnN9ernRUBelWx4cog4Ag
          source_id: s_hRCDgLQBmdUDEyE1cofkQA
          stance: supports
          locator: 景泰二年進士登科錄:一卷，第二甲第五十名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_GWEDQ8SKXUwN2mr8EJN8Zm
        status: active
        display_name: 王子襄
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王琳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王琳 | accepted |
| birth.date | 1428年 | accepted |
| bio.summary | 王琳（生于1428年），明人物。明清進士進士，籍贯吉水，入仕進士。（中国历代人物传记资料库 CBDB 198163） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_y8yYQA2hfedBaXHUn1hFL3 | 王德威 | accepted |
| spouses | p_19m7jofRhKkgd8P5sqqNZi | 李氏 | accepted |
| ancestors | p_MaHvMERDXA2mxSH2cfs3p9 | 王義實 | accepted |
| ancestors | p_GWEDQ8SKXUwN2mr8EJN8Zm | 王子襄 | accepted |

## 外部来源

- [中国历代人物传记资料库：李氏(王琳妻)（CBDB 296878）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=296878&o=json)
- [中国历代人物传记资料库：王琳（CBDB 198163）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198163&o=json)
