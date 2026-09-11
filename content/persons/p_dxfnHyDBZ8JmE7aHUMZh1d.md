---
schema: wang-person/v1
id: p_dxfnHyDBZ8JmE7aHUMZh1d
status: active
merged_into: null
display_name: 張某
revision: 1
cbdb_id: 148532
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ybVw4ZCEuVKwNGkEKs3Yd8
        subject_person_id: p_dxfnHyDBZ8JmE7aHUMZh1d
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 張某，史料所见人物。曾任州司兵。（中国历代人物传记资料库 CBDB 148532）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GGyJPRgGxOVlf816g5VZUb
          claim_id: c_ybVw4ZCEuVKwNGkEKs3Yd8
          source_id: s_MnD15cbgXygnd6OHfmCjTT
          stance: supports
          locator: CBDB:148532
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_MnD15cbgXygnd6OHfmCjTT
            source_type: api_record
            title: 中国历代人物传记资料库：張某(王智夫)（CBDB 148532）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=148532&o=json
            external_identifier: CBDB:148532
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_BDolkUpyTfFh3_oOuVNisQ
        subject_person_id: p_dxfnHyDBZ8JmE7aHUMZh1d
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 張某
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_O4YGiYm_D_SkvqpBetzmoX
          claim_id: c_BDolkUpyTfFh3_oOuVNisQ
          source_id: s_MnD15cbgXygnd6OHfmCjTT
          stance: supports
          locator: CBDB:148532
          quotation: null
          interpretation_note: CBDB 明确记录的王智配偶
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
        id: c_dhY0lQyoJ8SpPGnmbqopkb
        subject_person_id: p_27JjpyQuhoPy7ehfqeKG88
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_dxfnHyDBZ8JmE7aHUMZh1d
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Pk9h5cV-CBjbWrlkP58QM0
          claim_id: c_dhY0lQyoJ8SpPGnmbqopkb
          source_id: s_MnD15cbgXygnd6OHfmCjTT
          stance: supports
          locator: 唐代墓誌匯編:二卷，Xianheng 39：丈夫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_27JjpyQuhoPy7ehfqeKG88
        status: active
        display_name: 王智
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 張某

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 張某，史料所见人物。曾任州司兵。（中国历代人物传记资料库 CBDB 148532） | accepted |
| name.primary | 張某 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_27JjpyQuhoPy7ehfqeKG88 | 王智 | accepted |

## 外部来源

- [中国历代人物传记资料库：張某(王智夫)（CBDB 148532）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=148532&o=json)
