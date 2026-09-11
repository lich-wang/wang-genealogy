---
schema: wang-person/v1
id: p_kET5KeLjgEQ8jqCSugxSSk
status: active
merged_into: null
display_name: 王綸
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5civoMKwKpidxBxefUoGA6
        subject_person_id: p_kET5KeLjgEQ8jqCSugxSSk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王綸
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_yndkS2yQyVKJ1Sn8uh924e
          claim_id: c_5civoMKwKpidxBxefUoGA6
          source_id: s_PK1WP6M7dNq3SM43V63SHW
          stance: supports
          locator: CBDB:201264
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（201264）
          source: &a1
            id: s_PK1WP6M7dNq3SM43V63SHW
            source_type: api_record
            title: 中国历代人物传记资料库：王綸（CBDB 201264）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201264&o=json
            external_identifier: CBDB:201264
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.668Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_SnwugePStKhvYBJxEYTn6g
        subject_person_id: p_kET5KeLjgEQ8jqCSugxSSk
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1465年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_E7QY6VRpfVjAPDxD7SiD42
          claim_id: c_SnwugePStKhvYBJxEYTn6g
          source_id: s_PK1WP6M7dNq3SM43V63SHW
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
        id: c_oRD2Gb1FrwFjb1ZDXvSt8Z
        subject_person_id: p_kET5KeLjgEQ8jqCSugxSSk
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
        - id: cs_EY8tkftU9nYMeoPoEfQAUM
          claim_id: c_oRD2Gb1FrwFjb1ZDXvSt8Z
          source_id: s_PK1WP6M7dNq3SM43V63SHW
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
        id: c_lfgvOMk-IvZ29LunoGRop1
        subject_person_id: p_wxFwiJdpNsMZSoX1se45fE
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_kET5KeLjgEQ8jqCSugxSSk
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4ydZEblOGstOZK1weHpWbq
          claim_id: c_lfgvOMk-IvZ29LunoGRop1
          source_id: s_PK1WP6M7dNq3SM43V63SHW
          stance: supports
          locator: 弘治九年進士登科錄:一卷，第三甲第一百九十三名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_wxFwiJdpNsMZSoX1se45fE
        status: active
        display_name: 王福
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_HpU-ad-s2LXJqWgqP8cBmg
        subject_person_id: p_kET5KeLjgEQ8jqCSugxSSk
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_jnNFKDMGSYkuv742nc8R9J
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0VKxEP4ylcxbgPS4hjfxRQ
          claim_id: c_HpU-ad-s2LXJqWgqP8cBmg
          source_id: s_pihn8652sq1t_tKKK9eMR5
          stance: supports
          locator: 弘治九年進士登科錄:一卷，第三甲第一百九十三名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_pihn8652sq1t_tKKK9eMR5
            source_type: api_record
            title: 中国历代人物传记资料库：楊氏(王綸妻)（CBDB 269707）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=269707&o=json
            external_identifier: CBDB:269707
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_jnNFKDMGSYkuv742nc8R9J
        status: active
        display_name: 楊氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_5EDxLCe614HjZY0cdbZh5P
        subject_person_id: p_XYSfdUBMDk7oqECCJJRLUM
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_kET5KeLjgEQ8jqCSugxSSk
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LYZjKDlbBiF0goGImtpgTB
          claim_id: c_5EDxLCe614HjZY0cdbZh5P
          source_id: s_PK1WP6M7dNq3SM43V63SHW
          stance: supports
          locator: 弘治九年進士登科錄:一卷，第三甲第一百九十三名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_XYSfdUBMDk7oqECCJJRLUM
        status: active
        display_name: 王敬
        merged_into_person_id: null
    - claim:
        id: c_3PEJps7OUDsuYwaCmXUc0k
        subject_person_id: p_tyK8B3J4w2qEMUud28YFjF
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_kET5KeLjgEQ8jqCSugxSSk
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1pt4hhgrqc3PCykQVpakiG
          claim_id: c_3PEJps7OUDsuYwaCmXUc0k
          source_id: s_PK1WP6M7dNq3SM43V63SHW
          stance: supports
          locator: 弘治九年進士登科錄:一卷，第三甲第一百九十三名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_tyK8B3J4w2qEMUud28YFjF
        status: active
        display_name: 王忠
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王綸

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王綸 | accepted |
| birth.date | 1465年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_wxFwiJdpNsMZSoX1se45fE | 王福 | accepted |
| spouses | p_jnNFKDMGSYkuv742nc8R9J | 楊氏 | accepted |
| ancestors | p_XYSfdUBMDk7oqECCJJRLUM | 王敬 | accepted |
| ancestors | p_tyK8B3J4w2qEMUud28YFjF | 王忠 | accepted |

## 外部来源

- [中国历代人物传记资料库：王綸（CBDB 201264）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201264&o=json)
- [中国历代人物传记资料库：楊氏(王綸妻)（CBDB 269707）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=269707&o=json)
