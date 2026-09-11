---
schema: wang-person/v1
id: p_2jA4TfPJNi53jAYFaCy7Gj
status: active
merged_into: null
display_name: 王進賢
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Sq5FVSrptrqCytHE183Eyk
        subject_person_id: p_2jA4TfPJNi53jAYFaCy7Gj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王進賢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qLwHSSmXrBME4euLuGEqLF
          claim_id: c_Sq5FVSrptrqCytHE183Eyk
          source_id: s_K1WAkdp3nuF7NseKbnRBm8
          stance: supports
          locator: CBDB:557169
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（557169）
          source: &a1
            id: s_K1WAkdp3nuF7NseKbnRBm8
            source_type: api_record
            title: 中国历代人物传记资料库：王進賢（CBDB 557169）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=557169&o=json
            external_identifier: CBDB:557169
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.664Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PoPuVCZVhebW2QWfPvMiZy
        subject_person_id: p_2jA4TfPJNi53jAYFaCy7Gj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王進賢，明人物。籍贯鄧州，入仕進士，曾任戶部主事。（中国历代人物传记资料库 CBDB 557169）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_cPPjI7xq82sVlpDFO8xjW_
          claim_id: c_PoPuVCZVhebW2QWfPvMiZy
          source_id: s_K1WAkdp3nuF7NseKbnRBm8
          stance: supports
          locator: CBDB:557169
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

# 王進賢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王進賢 | accepted |
| bio.summary | 王進賢，明人物。籍贯鄧州，入仕進士，曾任戶部主事。（中国历代人物传记资料库 CBDB 557169） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王進賢（CBDB 557169）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=557169&o=json)
