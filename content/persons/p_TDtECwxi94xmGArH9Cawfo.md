---
schema: wang-person/v1
id: p_TDtECwxi94xmGArH9Cawfo
status: active
merged_into: null
display_name: 周氏
revision: 1
cbdb_id: 254340
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_rc9WjWFTUJvJHyuGrkmENz
        subject_person_id: p_TDtECwxi94xmGArH9Cawfo
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 周氏，明人物。建文二年殿試進士。（中国历代人物传记资料库 CBDB 254340）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HxO45cns6gQ1FpfgTaI7tg
          claim_id: c_rc9WjWFTUJvJHyuGrkmENz
          source_id: s_sF2O6Oe6O3tlgVgiIXjTd1
          stance: supports
          locator: CBDB:254340
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_sF2O6Oe6O3tlgVgiIXjTd1
            source_type: api_record
            title: 中国历代人物传记资料库：周氏(王彝妻)（CBDB 254340）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=254340&o=json
            external_identifier: CBDB:254340
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_N6s135_imVGj_Fy64nfk2k
        subject_person_id: p_TDtECwxi94xmGArH9Cawfo
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 周氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nfw8zlDlxG0VVZVtNlU5xM
          claim_id: c_N6s135_imVGj_Fy64nfk2k
          source_id: s_sF2O6Oe6O3tlgVgiIXjTd1
          stance: supports
          locator: CBDB:254340
          quotation: null
          interpretation_note: CBDB 明确记录的王彝配偶
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
        id: c_34VUr4uXaVwuisfPD0h5_p
        subject_person_id: p_jHwZfHWM4vMLPpm1ZfMXFt
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_TDtECwxi94xmGArH9Cawfo
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Bcjw-MC4ypKgq6vCVIuXhP
          claim_id: c_34VUr4uXaVwuisfPD0h5_p
          source_id: s_sF2O6Oe6O3tlgVgiIXjTd1
          stance: supports
          locator: 建文二年殿試登科錄:一卷，第三甲第十五名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_jHwZfHWM4vMLPpm1ZfMXFt
        status: active
        display_name: 王彝
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 周氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 周氏，明人物。建文二年殿試進士。（中国历代人物传记资料库 CBDB 254340） | accepted |
| name.primary | 周氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_jHwZfHWM4vMLPpm1ZfMXFt | 王彝 | accepted |

## 外部来源

- [中国历代人物传记资料库：周氏(王彝妻)（CBDB 254340）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=254340&o=json)
