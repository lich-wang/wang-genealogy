---
schema: wang-person/v1
id: p_BtTApjgsFgyMJtB8waKAra
status: active
merged_into: null
display_name: 王烈
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7BXfnNGF2TqyFsJNJvP4sx
        subject_person_id: p_BtTApjgsFgyMJtB8waKAra
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王烈
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Hf9hiWP1Gf5VJwChtAJPbv
          claim_id: c_7BXfnNGF2TqyFsJNJvP4sx
          source_id: s_KM4pLxHEcGb8aAa9Dvmz2g
          stance: supports
          locator: CBDB:153595
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（153595）
          source: &a1
            id: s_KM4pLxHEcGb8aAa9Dvmz2g
            source_type: api_record
            title: 中国历代人物传记资料库：王烈（CBDB 153595）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=153595&o=json
            external_identifier: CBDB:153595
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.861Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_bWGK8NcuGUBPtN18FwyixN
        subject_person_id: p_BtTApjgsFgyMJtB8waKAra
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王烈，唐人物。籍贯太原。（中国历代人物传记资料库 CBDB 153595）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_bTze38mQiSNpieAacOteb0
          claim_id: c_bWGK8NcuGUBPtN18FwyixN
          source_id: s_KM4pLxHEcGb8aAa9Dvmz2g
          stance: supports
          locator: CBDB:153595
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_jUUS-UP0hIdNJFS3fVTIn0
        subject_person_id: p_BtTApjgsFgyMJtB8waKAra
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DXUs17WL78tah1YFCAFMcd
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_P2xFNPegqdRayID67fAelS
          claim_id: c_jUUS-UP0hIdNJFS3fVTIn0
          source_id: s_KM4pLxHEcGb8aAa9Dvmz2g
          stance: supports
          locator: 唐代墓誌匯編:二卷，Tianbao 76：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_DXUs17WL78tah1YFCAFMcd
        status: active
        display_name: 王爽
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王烈

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王烈 | accepted |
| bio.summary | 王烈，唐人物。籍贯太原。（中国历代人物传记资料库 CBDB 153595） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_DXUs17WL78tah1YFCAFMcd | 王爽 | accepted |

## 外部来源

- [中国历代人物传记资料库：王烈（CBDB 153595）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=153595&o=json)
