---
schema: wang-person/v1
id: p_at2T95hJc3DpcV963cR1ao
status: active
merged_into: null
display_name: 何氏
revision: 1
cbdb_id: 570979
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_dUapQ--ZfNVY00PtNEngkK
        subject_person_id: p_at2T95hJc3DpcV963cR1ao
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 何氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0Y2PuhSYv5WDL32oJ-aS9d
          claim_id: c_dUapQ--ZfNVY00PtNEngkK
          source_id: s_Ei-Ft_DRug31_9gcTd-pC3
          stance: supports
          locator: CBDB:570979
          quotation: null
          interpretation_note: CBDB 明确记录的王士珪配偶
          source: &a1
            id: s_Ei-Ft_DRug31_9gcTd-pC3
            source_type: api_record
            title: 中国历代人物传记资料库：何氏(王士珪妻)（CBDB 570979）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=570979&o=json
            external_identifier: CBDB:570979
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
        id: c_TZRsafTOkUcSU-Eh58aFTq
        subject_person_id: p_KK8vNXZj4epAzhpkfscadd
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_at2T95hJc3DpcV963cR1ao
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OS6DIdjmIjAGPnrNXRuEdz
          claim_id: c_TZRsafTOkUcSU-Eh58aFTq
          source_id: s_Ei-Ft_DRug31_9gcTd-pC3
          stance: supports
          locator: 紹興府志:八十卷，lgid=316871：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_KK8vNXZj4epAzhpkfscadd
        status: active
        display_name: 王士珪
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 何氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 何氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_KK8vNXZj4epAzhpkfscadd | 王士珪 | accepted |

## 外部来源

- [中国历代人物传记资料库：何氏(王士珪妻)（CBDB 570979）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=570979&o=json)
