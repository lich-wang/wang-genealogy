---
schema: wang-person/v1
id: p_jg3PQu99rY3RHLjVoDKFxB
status: active
merged_into: null
display_name: 王麗中
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_TwaWSeMHLFEpwrLWHxSZQd
        subject_person_id: p_jg3PQu99rY3RHLjVoDKFxB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王麗中
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_A4DKqMJU2Yt5HFJcx3eWLu
          claim_id: c_TwaWSeMHLFEpwrLWHxSZQd
          source_id: s_nYQNAQxv1wmuTdqhy5Hc8h
          stance: supports
          locator: CBDB:641030
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（641030）
          source: &a1
            id: s_nYQNAQxv1wmuTdqhy5Hc8h
            source_type: api_record
            title: 中国历代人物传记资料库：王麗中（CBDB 641030）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=641030&o=json
            external_identifier: CBDB:641030
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.282Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_X86GT2g5Dh1enpbBU1Z8dF
        subject_person_id: p_jg3PQu99rY3RHLjVoDKFxB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王麗中，清人物。籍贯光州直隸州直轄地方，入仕鄉貢舉人，曾任復設教諭。（中国历代人物传记资料库 CBDB 641030）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Ty8JCfnRqUQM2LUpmyVvUH
          claim_id: c_X86GT2g5Dh1enpbBU1Z8dF
          source_id: s_nYQNAQxv1wmuTdqhy5Hc8h
          stance: supports
          locator: CBDB:641030
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

# 王麗中

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王麗中 | accepted |
| bio.summary | 王麗中，清人物。籍贯光州直隸州直轄地方，入仕鄉貢舉人，曾任復設教諭。（中国历代人物传记资料库 CBDB 641030） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王麗中（CBDB 641030）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=641030&o=json)
