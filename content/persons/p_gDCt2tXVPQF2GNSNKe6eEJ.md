---
schema: wang-person/v1
id: p_gDCt2tXVPQF2GNSNKe6eEJ
status: active
merged_into: null
display_name: 王琰
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MWj4bPbamPBajc13ZdYGbW
        subject_person_id: p_gDCt2tXVPQF2GNSNKe6eEJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_TSUTanfpxPAg3PnD94qWhM
          claim_id: c_MWj4bPbamPBajc13ZdYGbW
          source_id: s_D2ATp6nmPFy57uP4N5xMW3
          stance: supports
          locator: CBDB:149248
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（149248）
          source: &a1
            id: s_D2ATp6nmPFy57uP4N5xMW3
            source_type: api_record
            title: 中国历代人物传记资料库：王琰（CBDB 149248）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=149248&o=json
            external_identifier: CBDB:149248
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.781Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xCKDpT2SuiJf57YJK65RmV
        subject_person_id: p_gDCt2tXVPQF2GNSNKe6eEJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DpK8j9zB3C4ViK7X1d2A45
          claim_id: c_xCKDpT2SuiJf57YJK65RmV
          source_id: s_D2ATp6nmPFy57uP4N5xMW3
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
        id: c_ucI6-q8ySgcXDpsqNXM4Cl
        subject_person_id: p_gDCt2tXVPQF2GNSNKe6eEJ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4uVxtmBQ2hs7QQmciEP2jw
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YRNIR0AUToRAJqD8HvqbKB
          claim_id: c_ucI6-q8ySgcXDpsqNXM4Cl
          source_id: s_D2ATp6nmPFy57uP4N5xMW3
          stance: supports
          locator: 唐代墓誌匯編:二卷，Chuigong 21：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_4uVxtmBQ2hs7QQmciEP2jw
        status: active
        display_name: 王行淹
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王琰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王琰 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_4uVxtmBQ2hs7QQmciEP2jw | 王行淹 | accepted |

## 外部来源

- [中国历代人物传记资料库：王琰（CBDB 149248）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=149248&o=json)
