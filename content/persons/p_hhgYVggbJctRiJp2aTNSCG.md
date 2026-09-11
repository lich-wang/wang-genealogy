---
schema: wang-person/v1
id: p_hhgYVggbJctRiJp2aTNSCG
status: active
merged_into: null
display_name: 王毅
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_foj7ipRQ85HCgFHCqBc82k
        subject_person_id: p_hhgYVggbJctRiJp2aTNSCG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王毅
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qLYS1qC1y7bo3X4hEsdBdh
          claim_id: c_foj7ipRQ85HCgFHCqBc82k
          source_id: s_pYV6XpC443MeJp1kyFcR5x
          stance: supports
          locator: CBDB:7377
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（7377）
          source: &a1
            id: s_pYV6XpC443MeJp1kyFcR5x
            source_type: api_record
            title: 中国历代人物传记资料库：王毅（CBDB 7377）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=7377&o=json
            external_identifier: CBDB:7377
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.479Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_i973851LrcgHWGfLJxChJP
        subject_person_id: p_hhgYVggbJctRiJp2aTNSCG
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
        - id: cs_oDxmHXF6osEVxfUhxBNnfx
          claim_id: c_i973851LrcgHWGfLJxChJP
          source_id: s_pYV6XpC443MeJp1kyFcR5x
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
        id: c_ZBIJ2bzkKTErShsGClCEvv
        subject_person_id: p_hhgYVggbJctRiJp2aTNSCG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_KvaDyJMUHzeGStoEsTh4se
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jTt-fbYtCp8IXQnQexFg6s
          claim_id: c_ZBIJ2bzkKTErShsGClCEvv
          source_id: s_pYV6XpC443MeJp1kyFcR5x
          stance: supports
          locator: CBDB 双向互证（子 王倫 ⇄ 父 王毅）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_KvaDyJMUHzeGStoEsTh4se
        status: active
        display_name: 王倫
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王毅

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王毅 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_KvaDyJMUHzeGStoEsTh4se | 王倫 | accepted |

## 外部来源

- [中国历代人物传记资料库：王毅（CBDB 7377）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=7377&o=json)
