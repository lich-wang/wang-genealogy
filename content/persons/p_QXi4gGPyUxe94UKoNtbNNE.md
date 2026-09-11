---
schema: wang-person/v1
id: p_QXi4gGPyUxe94UKoNtbNNE
status: active
merged_into: null
display_name: 王德佩
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_yNHpjo37fQsarpS1XHHfYe
        subject_person_id: p_QXi4gGPyUxe94UKoNtbNNE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德佩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_TMiGk4TqvYUAdUA31vUj5p
          claim_id: c_yNHpjo37fQsarpS1XHHfYe
          source_id: s_VJq4FQwHXTKG1q6KWwLTdp
          stance: supports
          locator: CBDB:637665
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637665）
          source: &a1
            id: s_VJq4FQwHXTKG1q6KWwLTdp
            source_type: api_record
            title: 中国历代人物传记资料库：王德佩（CBDB 637665）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637665&o=json
            external_identifier: CBDB:637665
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.389Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_tX65LZxxM6gzrBa9g5iDhG
        subject_person_id: p_QXi4gGPyUxe94UKoNtbNNE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德佩，清人物。籍贯獲鹿，入仕廩貢生，曾任復設訓導。（中国历代人物传记资料库 CBDB 637665）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_nMlgyBKQnKstw9jU3JrFDm
          claim_id: c_tX65LZxxM6gzrBa9g5iDhG
          source_id: s_VJq4FQwHXTKG1q6KWwLTdp
          stance: supports
          locator: CBDB:637665
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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

# 王德佩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王德佩 | accepted |
| bio.summary | 王德佩，清人物。籍贯獲鹿，入仕廩貢生，曾任復設訓導。（中国历代人物传记资料库 CBDB 637665） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王德佩（CBDB 637665）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637665&o=json)
