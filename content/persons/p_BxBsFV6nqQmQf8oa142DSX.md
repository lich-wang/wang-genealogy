---
schema: wang-person/v1
id: p_BxBsFV6nqQmQf8oa142DSX
status: active
merged_into: null
display_name: 王夢弼
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Y3Fd8Do9G5HLxA3TvGWJWS
        subject_person_id: p_BxBsFV6nqQmQf8oa142DSX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王夢弼
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_hwCyu7jj4S66HoGPxF2XX4
          claim_id: c_Y3Fd8Do9G5HLxA3TvGWJWS
          source_id: s_vKbHuxPyeqDcM9pzGKeEoA
          stance: supports
          locator: CBDB:126784
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126784）
          source: &a1
            id: s_vKbHuxPyeqDcM9pzGKeEoA
            source_type: api_record
            title: 中国历代人物传记资料库：王夢弼（CBDB 126784）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126784&o=json
            external_identifier: CBDB:126784
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.202Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_ypwfDpEtwFERr7fa2ywCyN
        subject_person_id: p_BxBsFV6nqQmQf8oa142DSX
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1506年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tZBjquB1SH56NWBPsbeBwZ
          claim_id: c_ypwfDpEtwFERr7fa2ywCyN
          source_id: s_vKbHuxPyeqDcM9pzGKeEoA
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
        id: c_3DQ5bv3DADUB2YirwsyVFa
        subject_person_id: p_BxBsFV6nqQmQf8oa142DSX
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1561年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UCKMr9QwMeYpek87NHbfAN
          claim_id: c_3DQ5bv3DADUB2YirwsyVFa
          source_id: s_vKbHuxPyeqDcM9pzGKeEoA
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
        id: c_x57ysLyU6JxRUEewi7Ez5x
        subject_person_id: p_BxBsFV6nqQmQf8oa142DSX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_W5HpVhbrcPnzivVchHKQGF
          claim_id: c_x57ysLyU6JxRUEewi7Ez5x
          source_id: s_vKbHuxPyeqDcM9pzGKeEoA
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_diElRp8-1s--84dUn4NyIt
        subject_person_id: p_gQeCuqLFbJY887X7LuDmRP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_BxBsFV6nqQmQf8oa142DSX
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6YpZ31tuPrK3Zy_2Z5I1-d
          claim_id: c_diElRp8-1s--84dUn4NyIt
          source_id: s_vKbHuxPyeqDcM9pzGKeEoA
          stance: supports
          locator: 嘉靖十四年進士登科錄:一卷，第三甲第一百一十四名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_gQeCuqLFbJY887X7LuDmRP
        status: active
        display_name: 王世忠
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_NmCmA_3ZlYv0x2wQU3X7VA
        subject_person_id: p_BxBsFV6nqQmQf8oa142DSX
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_QaV1aWWYJYFYMq26viuk5b
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Q7b30h4eI-eG7aG_VBmzCy
          claim_id: c_NmCmA_3ZlYv0x2wQU3X7VA
          source_id: s_2iNytuBzRIrVRspGGKHbBV
          stance: supports
          locator: 嘉靖十四年進士登科錄:一卷，第三甲第一百一十四名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_2iNytuBzRIrVRspGGKHbBV
            source_type: api_record
            title: 中国历代人物传记资料库：周氏(王夢弼妻)（CBDB 297277）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297277&o=json
            external_identifier: CBDB:297277
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_QaV1aWWYJYFYMq26viuk5b
        status: active
        display_name: 周氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_-69dAfW4NckQ5PhDizrdJU
        subject_person_id: p_Jh96TMvNqfL8prQuCQkEVx
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_BxBsFV6nqQmQf8oa142DSX
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_e3YEZlKFGLu4FRlvI8pyI_
          claim_id: c_-69dAfW4NckQ5PhDizrdJU
          source_id: s_vKbHuxPyeqDcM9pzGKeEoA
          stance: supports
          locator: 嘉靖十四年進士登科錄:一卷，第三甲第一百一十四名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Jh96TMvNqfL8prQuCQkEVx
        status: active
        display_name: 王儶
        merged_into_person_id: null
    - claim:
        id: c_BgSVeRE6cQ35jZ63EWb-2D
        subject_person_id: p_TobVzPD2rQQSqxAZuF8zkt
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_BxBsFV6nqQmQf8oa142DSX
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gGK3uZcMmf0zu1PVvVZisD
          claim_id: c_BgSVeRE6cQ35jZ63EWb-2D
          source_id: s_vKbHuxPyeqDcM9pzGKeEoA
          stance: supports
          locator: 嘉靖十四年進士登科錄:一卷，第三甲第一百一十四名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_TobVzPD2rQQSqxAZuF8zkt
        status: active
        display_name: 王翃
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王夢弼

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王夢弼 | accepted |
| birth.date | 1506年 | accepted |
| death.date | 1561年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_gQeCuqLFbJY887X7LuDmRP | 王世忠 | accepted |
| spouses | p_QaV1aWWYJYFYMq26viuk5b | 周氏 | accepted |
| ancestors | p_Jh96TMvNqfL8prQuCQkEVx | 王儶 | accepted |
| ancestors | p_TobVzPD2rQQSqxAZuF8zkt | 王翃 | accepted |

## 外部来源

- [中国历代人物传记资料库：王夢弼（CBDB 126784）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126784&o=json)
- [中国历代人物传记资料库：周氏(王夢弼妻)（CBDB 297277）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297277&o=json)
