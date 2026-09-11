---
schema: wang-person/v1
id: p_3HyttLoPqbPoHkJk2CRTvs
status: active
merged_into: null
display_name: 岳氏
revision: 1
cbdb_id: 332689
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Mtb-LlT1fnJLIeDn04YfD9
        subject_person_id: p_3HyttLoPqbPoHkJk2CRTvs
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 岳氏，明人物。天順八年進士。（中国历代人物传记资料库 CBDB 332689）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qljwreEiMTqAZLcq25x7jG
          claim_id: c_Mtb-LlT1fnJLIeDn04YfD9
          source_id: s_nq6kHamdx2agcjiAbRk-s6
          stance: supports
          locator: CBDB:332689
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_nq6kHamdx2agcjiAbRk-s6
            source_type: api_record
            title: 中国历代人物传记资料库：岳氏(王璒妻)（CBDB 332689）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332689&o=json
            external_identifier: CBDB:332689
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_4g4lcfbPD5s4YRGeQOB8pb
        subject_person_id: p_3HyttLoPqbPoHkJk2CRTvs
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 岳氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4xQvRuzjnmh60qYkzxdDSA
          claim_id: c_4g4lcfbPD5s4YRGeQOB8pb
          source_id: s_nq6kHamdx2agcjiAbRk-s6
          stance: supports
          locator: CBDB:332689
          quotation: null
          interpretation_note: CBDB 明确记录的王璒配偶
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
        id: c_86QzFWB13J4NdCGfYQ5Efv
        subject_person_id: p_1ZpZ4oSkBmp5LTrwz98U1P
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_3HyttLoPqbPoHkJk2CRTvs
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JXQPZGizNRtikloe8bqxFx
          claim_id: c_86QzFWB13J4NdCGfYQ5Efv
          source_id: s_nq6kHamdx2agcjiAbRk-s6
          stance: supports
          locator: 天順八年進士登科錄:一卷，第三甲第七名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_1ZpZ4oSkBmp5LTrwz98U1P
        status: active
        display_name: 王璒
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 岳氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 岳氏，明人物。天順八年進士。（中国历代人物传记资料库 CBDB 332689） | accepted |
| name.primary | 岳氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_1ZpZ4oSkBmp5LTrwz98U1P | 王璒 | accepted |

## 外部来源

- [中国历代人物传记资料库：岳氏(王璒妻)（CBDB 332689）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332689&o=json)
