---
schema: wang-person/v1
id: p_4eGPXknpnQXAJmnciGeLz4
status: active
merged_into: null
display_name: 張氏
revision: 1
cbdb_id: 563702
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Mufbl2dm55DSewBDwP3EYM
        subject_person_id: p_4eGPXknpnQXAJmnciGeLz4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 張氏，明人物。籍贯蕭山，身份为貞婦/節婦。（中国历代人物传记资料库 CBDB 563702）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VB80JbTIOPk-hRLAC3eEop
          claim_id: c_Mufbl2dm55DSewBDwP3EYM
          source_id: s_OAZjENW-0dQW92k1yagJV2
          stance: supports
          locator: CBDB:563702
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_OAZjENW-0dQW92k1yagJV2
            source_type: api_record
            title: 中国历代人物传记资料库：張氏(王茂生妻)（CBDB 563702）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=563702&o=json
            external_identifier: CBDB:563702
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Wl6VLrW5F-CFMTH8j3WFnq
        subject_person_id: p_4eGPXknpnQXAJmnciGeLz4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 張氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dhdugeFg63veiKGtnLm_WT
          claim_id: c_Wl6VLrW5F-CFMTH8j3WFnq
          source_id: s_OAZjENW-0dQW92k1yagJV2
          stance: supports
          locator: CBDB:563702
          quotation: null
          interpretation_note: CBDB 明确记录的王茂生配偶
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
        id: c_By5TnulfTOgJOdpjRuQzH8
        subject_person_id: p_9858MdTk69RQfatcM7cJUJ
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_4eGPXknpnQXAJmnciGeLz4
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bomJB1z_0EyUl5Y-0rfT07
          claim_id: c_By5TnulfTOgJOdpjRuQzH8
          source_id: s_OAZjENW-0dQW92k1yagJV2
          stance: supports
          locator: 紹興府志:八十卷，lgid=316753：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_9858MdTk69RQfatcM7cJUJ
        status: active
        display_name: 王茂生
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 張氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 張氏，明人物。籍贯蕭山，身份为貞婦/節婦。（中国历代人物传记资料库 CBDB 563702） | accepted |
| name.primary | 張氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_9858MdTk69RQfatcM7cJUJ | 王茂生 | accepted |

## 外部来源

- [中国历代人物传记资料库：張氏(王茂生妻)（CBDB 563702）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=563702&o=json)
