---
schema: wang-person/v1
id: p_ZaUEZ82McsSjMGkZVLp2BN
status: active
merged_into: null
display_name: 王禾
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7c1KjNELKZwdCCMsL22saj
        subject_person_id: p_ZaUEZ82McsSjMGkZVLp2BN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王禾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_adsLxiuQMPsiNMw6c6o7Bx
          claim_id: c_7c1KjNELKZwdCCMsL22saj
          source_id: s_MKS6oYLw7dv5d6jCVkNrwo
          stance: supports
          locator: CBDB:541191
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（541191）
          source: &a1
            id: s_MKS6oYLw7dv5d6jCVkNrwo
            source_type: api_record
            title: 中国历代人物传记资料库：王禾（CBDB 541191）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=541191&o=json
            external_identifier: CBDB:541191
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.457Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_x951pJre5yknwsJRF63hGd
        subject_person_id: p_ZaUEZ82McsSjMGkZVLp2BN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王禾，宋人物。籍贯潁昌府，入仕進士。（中国历代人物传记资料库 CBDB 541191）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_S8ez5YjMHFItn8QsjCFesA
          claim_id: c_x951pJre5yknwsJRF63hGd
          source_id: s_MKS6oYLw7dv5d6jCVkNrwo
          stance: supports
          locator: CBDB:541191
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

# 王禾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王禾 | accepted |
| bio.summary | 王禾，宋人物。籍贯潁昌府，入仕進士。（中国历代人物传记资料库 CBDB 541191） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王禾（CBDB 541191）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=541191&o=json)
