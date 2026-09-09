---
schema: wang-person/v1
id: p_bg3dExHEtVsq2PdXio1DB4
status: active
merged_into: null
display_name: 王揚英
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CfCQCUATFrMhBiRsUnVqVB
        subject_person_id: p_bg3dExHEtVsq2PdXio1DB4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王揚英
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_eoqFPnaQcPdTkuSv62jWFq
          claim_id: c_CfCQCUATFrMhBiRsUnVqVB
          source_id: s_qz4SpXPwJ1vDScf883rpE7
          stance: supports
          locator: CBDB:1918
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（1918）
          source: &a1
            id: s_qz4SpXPwJ1vDScf883rpE7
            source_type: api_record
            title: 中国历代人物传记资料库：王揚英（CBDB 1918）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1918&o=json
            external_identifier: CBDB:1918
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.399Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_NZDbUK4CTW9g4TPxCY2qZ1
        subject_person_id: p_bg3dExHEtVsq2PdXio1DB4
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1159年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HJQHEmkFJHkH6nxHsD97Nw
          claim_id: c_NZDbUK4CTW9g4TPxCY2qZ1
          source_id: s_qz4SpXPwJ1vDScf883rpE7
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
        id: c_Ng272DJF4GsiPAP3twPgRc
        subject_person_id: p_bg3dExHEtVsq2PdXio1DB4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uXG3CSiDxEAs6y4JAS5EnU
          claim_id: c_Ng272DJF4GsiPAP3twPgRc
          source_id: s_qz4SpXPwJ1vDScf883rpE7
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王揚英

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王揚英 | accepted |
| death.date | 1159年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王揚英（CBDB 1918）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1918&o=json)
