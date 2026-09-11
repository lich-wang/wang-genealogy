---
schema: wang-person/v1
id: p_xtLLndtQhGXAcMvEoPftEU
status: active
merged_into: null
display_name: 王亘
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vB6oWgLrGLUBhLqUzenqDr
        subject_person_id: p_xtLLndtQhGXAcMvEoPftEU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王亘
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_UBtx6RwCHVmMxjrEsv5te9
          claim_id: c_vB6oWgLrGLUBhLqUzenqDr
          source_id: s_eAHaoZhufPi21Zm3BPQv3N
          stance: supports
          locator: CBDB:38690
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（38690）
          source: &a1
            id: s_eAHaoZhufPi21Zm3BPQv3N
            source_type: api_record
            title: 中国历代人物传记资料库：王亘（CBDB 38690）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38690&o=json
            external_identifier: CBDB:38690
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.527Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_UXxxWNEq6Xozrt3fbEScDM
        subject_person_id: p_xtLLndtQhGXAcMvEoPftEU
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王亘，宋人物。籍贯福州，入仕進士。（中国历代人物传记资料库 CBDB 38690）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ux1Vuqtgc8GO3QWkk6gCp8
          claim_id: c_UXxxWNEq6Xozrt3fbEScDM
          source_id: s_eAHaoZhufPi21Zm3BPQv3N
          stance: supports
          locator: CBDB:38690
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_swvHImvedZAJPYR8CWR64G
        subject_person_id: p_xtLLndtQhGXAcMvEoPftEU
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_9eQmZHzBrxQbdTJENsG6my
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Qu6ErA6AoiBTqVEmrNnMhX
          claim_id: c_swvHImvedZAJPYR8CWR64G
          source_id: s_pGmEpsY3dTvCjbfDrsQkZP
          stance: supports
          locator: 宋人傳記資料索引(電子版)，623：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_pGmEpsY3dTvCjbfDrsQkZP
            source_type: api_record
            title: 中国历代人物传记资料库：王同（CBDB 38744）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38744&o=json
            external_identifier: CBDB:38744
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.536Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_9eQmZHzBrxQbdTJENsG6my
        status: active
        display_name: 王同
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王亘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王亘 | accepted |
| bio.summary | 王亘，宋人物。籍贯福州，入仕進士。（中国历代人物传记资料库 CBDB 38690） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_9eQmZHzBrxQbdTJENsG6my | 王同 | accepted |

## 外部来源

- [中国历代人物传记资料库：王亘（CBDB 38690）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38690&o=json)
- [中国历代人物传记资料库：王同（CBDB 38744）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38744&o=json)
