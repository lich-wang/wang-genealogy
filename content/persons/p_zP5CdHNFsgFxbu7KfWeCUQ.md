---
schema: wang-person/v1
id: p_zP5CdHNFsgFxbu7KfWeCUQ
status: active
merged_into: null
display_name: 徐氏
revision: 1
cbdb_id: 231057
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_G-oLCErA_uUVGgisMiE-fp
        subject_person_id: p_zP5CdHNFsgFxbu7KfWeCUQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 徐氏，明人物。宣德八年進士。（中国历代人物传记资料库 CBDB 231057）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_u25clrV0VahBP_2p7EQFFy
          claim_id: c_G-oLCErA_uUVGgisMiE-fp
          source_id: s_FGFI33nin_SCIOUKWouQ-f
          stance: supports
          locator: CBDB:231057
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_FGFI33nin_SCIOUKWouQ-f
            source_type: api_record
            title: 中国历代人物传记资料库：徐氏(王弼妻)（CBDB 231057）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231057&o=json
            external_identifier: CBDB:231057
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Flc797uT17EYXzFj9X4COa
        subject_person_id: p_zP5CdHNFsgFxbu7KfWeCUQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 徐氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_m45qEssFY6cymALIuk44dg
          claim_id: c_Flc797uT17EYXzFj9X4COa
          source_id: s_FGFI33nin_SCIOUKWouQ-f
          stance: supports
          locator: CBDB:231057
          quotation: null
          interpretation_note: CBDB 明确记录的王弼配偶
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
        id: c_VV2VQ0NgZBe8ufoVXBq3mm
        subject_person_id: p_7j83XKHhJr8JnHARH8PeYg
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_zP5CdHNFsgFxbu7KfWeCUQ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ixypQeFul2BaT8-GPDgOpC
          claim_id: c_VV2VQ0NgZBe8ufoVXBq3mm
          source_id: s_FGFI33nin_SCIOUKWouQ-f
          stance: supports
          locator: 宣德八年進士登科錄:一卷，第二甲第十三名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_7j83XKHhJr8JnHARH8PeYg
        status: active
        display_name: 王弼
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 徐氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 徐氏，明人物。宣德八年進士。（中国历代人物传记资料库 CBDB 231057） | accepted |
| name.primary | 徐氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_7j83XKHhJr8JnHARH8PeYg | 王弼 | accepted |

## 外部来源

- [中国历代人物传记资料库：徐氏(王弼妻)（CBDB 231057）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231057&o=json)
