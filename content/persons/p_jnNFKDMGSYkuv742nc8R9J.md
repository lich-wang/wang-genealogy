---
schema: wang-person/v1
id: p_jnNFKDMGSYkuv742nc8R9J
status: active
merged_into: null
display_name: 楊氏
revision: 1
cbdb_id: 269707
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QEVp-92MNMqbK_xJxLUTuN
        subject_person_id: p_jnNFKDMGSYkuv742nc8R9J
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 楊氏，明人物。弘治九年進士。（中国历代人物传记资料库 CBDB 269707）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_k_PRhyxH6L4lyVi_4b8Qdk
          claim_id: c_QEVp-92MNMqbK_xJxLUTuN
          source_id: s_pihn8652sq1t_tKKK9eMR5
          stance: supports
          locator: CBDB:269707
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_JAPOMEM4TAleL0DFgGwmGF
        subject_person_id: p_jnNFKDMGSYkuv742nc8R9J
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 楊氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EXrlTbGstaVDfx9hW5swju
          claim_id: c_JAPOMEM4TAleL0DFgGwmGF
          source_id: s_pihn8652sq1t_tKKK9eMR5
          stance: supports
          locator: CBDB:269707
          quotation: null
          interpretation_note: CBDB 明确记录的王綸配偶
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
          source: *a1
      object_person:
        id: p_kET5KeLjgEQ8jqCSugxSSk
        status: active
        display_name: 王綸
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 楊氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 楊氏，明人物。弘治九年進士。（中国历代人物传记资料库 CBDB 269707） | accepted |
| name.primary | 楊氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_kET5KeLjgEQ8jqCSugxSSk | 王綸 | accepted |

## 外部来源

- [中国历代人物传记资料库：楊氏(王綸妻)（CBDB 269707）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=269707&o=json)
