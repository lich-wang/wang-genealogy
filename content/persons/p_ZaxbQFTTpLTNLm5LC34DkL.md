---
schema: wang-person/v1
id: p_ZaxbQFTTpLTNLm5LC34DkL
status: active
merged_into: null
display_name: 王氏
revision: 1
cbdb_id: 558446
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MqcQ6r_86bm_i0TnJy78eU
        subject_person_id: p_ZaxbQFTTpLTNLm5LC34DkL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Fy2DOFyf0ROE8jJRnTUT-Q
          claim_id: c_MqcQ6r_86bm_i0TnJy78eU
          source_id: s_RevjAsiJTFJNR6Qa_ADpop
          stance: supports
          locator: CBDB:558446
          quotation: null
          interpretation_note: CBDB 明确记录的王治配偶
          source: &a1
            id: s_RevjAsiJTFJNR6Qa_ADpop
            source_type: api_record
            title: 中国历代人物传记资料库：王氏(王治妻)（CBDB 558446）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=558446&o=json
            external_identifier: CBDB:558446
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_GmFxq7zf0tz9nqIAjbxoq2
        subject_person_id: p_RhC617Pvp2mk9j4bcF6rFB
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_ZaxbQFTTpLTNLm5LC34DkL
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BQfqLFJCC1di-AqhE4a5w5
          claim_id: c_GmFxq7zf0tz9nqIAjbxoq2
          source_id: s_RevjAsiJTFJNR6Qa_ADpop
          stance: supports
          locator: (乾隆)信陽州志，lgid=868524：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_RhC617Pvp2mk9j4bcF6rFB
        status: active
        display_name: 王治
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_RhC617Pvp2mk9j4bcF6rFB | 王治 | accepted |

## 外部来源

- [中国历代人物传记资料库：王氏(王治妻)（CBDB 558446）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=558446&o=json)
