---
schema: wang-person/v1
id: p_St4Eey4EGBhVg2zh8anpZT
status: active
merged_into: null
display_name: 王覃
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_yvEvSTfKgMqMM9rjBDeGQi
        subject_person_id: p_St4Eey4EGBhVg2zh8anpZT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王覃
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PhhXxV1cCUmGC64RKSwn2F
          claim_id: c_yvEvSTfKgMqMM9rjBDeGQi
          source_id: s_4AJ289s5TJpJbLwMtdq7PY
          stance: supports
          locator: CBDB:3979
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（3979）
          source: &a1
            id: s_4AJ289s5TJpJbLwMtdq7PY
            source_type: api_record
            title: 中国历代人物传记资料库：王覃（CBDB 3979）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3979&o=json
            external_identifier: CBDB:3979
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.441Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_7jCCr4ZCK8VWoYPA2qGAyr
        subject_person_id: p_St4Eey4EGBhVg2zh8anpZT
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 990年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ssDpBEchJcMfHwB9njt1uw
          claim_id: c_7jCCr4ZCK8VWoYPA2qGAyr
          source_id: s_4AJ289s5TJpJbLwMtdq7PY
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
        id: c_LcWyhMmFN96WBdW2y2ZWQJ
        subject_person_id: p_St4Eey4EGBhVg2zh8anpZT
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1059年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fEn6f9QcvsGBPyAUVH1obo
          claim_id: c_LcWyhMmFN96WBdW2y2ZWQJ
          source_id: s_4AJ289s5TJpJbLwMtdq7PY
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
        id: c_aUvj9SSCNiFi5hESn6923S
        subject_person_id: p_St4Eey4EGBhVg2zh8anpZT
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王覃（990年—1059年），宋人物。籍贯東明。（中国历代人物传记资料库 CBDB 3979）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_0nuGHN040n-VjOmTq85Jxq
          claim_id: c_aUvj9SSCNiFi5hESn6923S
          source_id: s_4AJ289s5TJpJbLwMtdq7PY
          stance: supports
          locator: CBDB:3979
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_GdvYkzUBNVI8sIpyOXdXxU
        subject_person_id: p_QZHN7XBFLhdEfKGuEPQEhp
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_St4Eey4EGBhVg2zh8anpZT
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_34I_cTJHJ5aJcUqlyRNqJB
          claim_id: c_GdvYkzUBNVI8sIpyOXdXxU
          source_id: s_thn4gMJq6L4yGd4YCKvb7F
          stance: supports
          locator: CBDB 双向互证（子 王覃 ⇄ 父 王贄）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_thn4gMJq6L4yGd4YCKvb7F
            source_type: api_record
            title: 中国历代人物传记资料库：王贄（CBDB 1783）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1783&o=json
            external_identifier: CBDB:1783
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.247Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_QZHN7XBFLhdEfKGuEPQEhp
        status: active
        display_name: 王贄
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_sDyY62sS-QfLp5-CeLPlDV
        subject_person_id: p_St4Eey4EGBhVg2zh8anpZT
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_W6zWuBpGK87DEinWCDDcav
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_u02CHQcDMi1KP4G9qG5oXN
          claim_id: c_sDyY62sS-QfLp5-CeLPlDV
          source_id: s_0KqeSNhRnljPp9WdLqT2bH
          stance: supports
          locator: CBDB 双向互证（妻子 呂氏(王覃妻)）
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_0KqeSNhRnljPp9WdLqT2bH
            source_type: api_record
            title: 中国历代人物传记资料库：呂氏(王覃妻)（CBDB 5139）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=5139&o=json
            external_identifier: CBDB:5139
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_W6zWuBpGK87DEinWCDDcav
        status: active
        display_name: 呂氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王覃

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王覃 | accepted |
| birth.date | 990年 | accepted |
| death.date | 1059年 | accepted |
| bio.summary | 王覃（990年—1059年），宋人物。籍贯東明。（中国历代人物传记资料库 CBDB 3979） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_QZHN7XBFLhdEfKGuEPQEhp | 王贄 | accepted |
| spouses | p_W6zWuBpGK87DEinWCDDcav | 呂氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：呂氏(王覃妻)（CBDB 5139）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=5139&o=json)
- [中国历代人物传记资料库：王覃（CBDB 3979）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3979&o=json)
- [中国历代人物传记资料库：王贄（CBDB 1783）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1783&o=json)
