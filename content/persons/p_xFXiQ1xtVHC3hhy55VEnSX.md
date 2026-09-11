---
schema: wang-person/v1
id: p_xFXiQ1xtVHC3hhy55VEnSX
status: active
merged_into: null
display_name: 王順行
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1ASLEGzpYpsnqkWe2H9Mbp
        subject_person_id: p_xFXiQ1xtVHC3hhy55VEnSX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王順行
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MAxXNwgxq6WHMrNf3u4vU1
          claim_id: c_1ASLEGzpYpsnqkWe2H9Mbp
          source_id: s_Hms7sAN7rVuutpNzDuNtAz
          stance: supports
          locator: CBDB:207643
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（207643）
          source: &a1
            id: s_Hms7sAN7rVuutpNzDuNtAz
            source_type: api_record
            title: 中国历代人物传记资料库：王順行（CBDB 207643）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207643&o=json
            external_identifier: CBDB:207643
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.924Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_oUM4DFr3JxxpNq7jkVxypV
        subject_person_id: p_xFXiQ1xtVHC3hhy55VEnSX
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1574年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rXgkxSNBqVQgnXiqv1JxHr
          claim_id: c_oUM4DFr3JxxpNq7jkVxypV
          source_id: s_Hms7sAN7rVuutpNzDuNtAz
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
        id: c_u5PDkzfLhy2aD8weo65j7m
        subject_person_id: p_xFXiQ1xtVHC3hhy55VEnSX
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
        - id: cs_LLEpJ75dXywLykoygg5EGS
          claim_id: c_u5PDkzfLhy2aD8weo65j7m
          source_id: s_Hms7sAN7rVuutpNzDuNtAz
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_Nws25ExQDH-ZH9F5-C5FIs
        subject_person_id: p_xFXiQ1xtVHC3hhy55VEnSX
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_oyLKuHgsT2V1zuw1kpseFR
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fR1jds1cAgfCVoVBw4Ngjc
          claim_id: c_Nws25ExQDH-ZH9F5-C5FIs
          source_id: s_1YM7bJgNducNoqNPseiRNJ
          stance: supports
          locator: 萬曆三十八年庚戌科序齒錄:一卷，第三甲第一百九名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_1YM7bJgNducNoqNPseiRNJ
            source_type: api_record
            title: 中国历代人物传记资料库：王嗣三（CBDB 233004）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=233004&o=json
            external_identifier: CBDB:233004
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.142Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_oyLKuHgsT2V1zuw1kpseFR
        status: active
        display_name: 王嗣三
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_xX0qSKoTxtye3qhXlG6SRd
        subject_person_id: p_1SfAWJWx7ysr4yEGFMS1oX
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_xFXiQ1xtVHC3hhy55VEnSX
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_h-9A4yjZivSPw2-07eAM-z
          claim_id: c_xX0qSKoTxtye3qhXlG6SRd
          source_id: s_Dtm5XQh7Ks832D6nmLprNx
          stance: supports
          locator: 萬曆三十八年庚戌科序齒錄:一卷，第三甲第一百九名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Dtm5XQh7Ks832D6nmLprNx
            source_type: api_record
            title: 中国历代人物传记资料库：王寶（CBDB 232996）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=232996&o=json
            external_identifier: CBDB:232996
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.712Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_1SfAWJWx7ysr4yEGFMS1oX
        status: active
        display_name: 王寶
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王順行

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王順行 | accepted |
| birth.date | 1574年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_oyLKuHgsT2V1zuw1kpseFR | 王嗣三 | accepted |
| ancestors | p_1SfAWJWx7ysr4yEGFMS1oX | 王寶 | accepted |

## 外部来源

- [中国历代人物传记资料库：王寶（CBDB 232996）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=232996&o=json)
- [中国历代人物传记资料库：王順行（CBDB 207643）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207643&o=json)
- [中国历代人物传记资料库：王嗣三（CBDB 233004）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=233004&o=json)
