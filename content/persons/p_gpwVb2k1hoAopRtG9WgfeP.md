---
schema: wang-person/v1
id: p_gpwVb2k1hoAopRtG9WgfeP
status: active
merged_into: null
display_name: 喬氏
revision: 1
cbdb_id: 314593
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_nJdv4xR1DjTHe89Gj5WAkC
        subject_person_id: p_gpwVb2k1hoAopRtG9WgfeP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 喬氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XROqOWHCLk7awj-nucDtIJ
          claim_id: c_nJdv4xR1DjTHe89Gj5WAkC
          source_id: s_HQZUSOPr96jUStoeDkSPrq
          stance: supports
          locator: CBDB:314593
          quotation: null
          interpretation_note: CBDB 明确记录的王言配偶
          source: &a1
            id: s_HQZUSOPr96jUStoeDkSPrq
            source_type: api_record
            title: 中国历代人物传记资料库：喬氏(王言妻)（CBDB 314593）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314593&o=json
            external_identifier: CBDB:314593
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
        id: c_VGff0IewAqlpBQ0D8yy8LD
        subject_person_id: p_2wQZ4HH3qUsaPxm7C4niKV
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_gpwVb2k1hoAopRtG9WgfeP
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yTKlcuFToAbvlME6JJ8M-l
          claim_id: c_VGff0IewAqlpBQ0D8yy8LD
          source_id: s_HQZUSOPr96jUStoeDkSPrq
          stance: supports
          locator: 嘉靖二十九年進士登科錄:一卷，第三甲第一百九十一名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_2wQZ4HH3qUsaPxm7C4niKV
        status: active
        display_name: 王言
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 喬氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 喬氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_2wQZ4HH3qUsaPxm7C4niKV | 王言 | accepted |

## 外部来源

- [中国历代人物传记资料库：喬氏(王言妻)（CBDB 314593）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314593&o=json)
