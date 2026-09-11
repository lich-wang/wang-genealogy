---
schema: wang-person/v1
id: p_Szb4BGR7Dk1z9zKaTHyFyq
status: active
merged_into: null
display_name: 王雲鶴
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_of2CV745JMFVx76358NCTZ
        subject_person_id: p_Szb4BGR7Dk1z9zKaTHyFyq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王雲鶴
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2LYtEtccgqWxcdP6acAiVn
          claim_id: c_of2CV745JMFVx76358NCTZ
          source_id: s_EM6zpW3PZwErLAcKSc6f7J
          stance: supports
          locator: CBDB:640824
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640824）
          source: &a1
            id: s_EM6zpW3PZwErLAcKSc6f7J
            source_type: api_record
            title: 中国历代人物传记资料库：王雲鶴（CBDB 640824）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640824&o=json
            external_identifier: CBDB:640824
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.381Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xeEKTA8aY9sjVAZpNDf7x3
        subject_person_id: p_Szb4BGR7Dk1z9zKaTHyFyq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王雲鶴，清人物。籍贯黎平府直轄地方，入仕鄉貢舉人，曾任復設訓導。（中国历代人物传记资料库 CBDB 640824）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_4VJuUypoIiVmCi83meX1X7
          claim_id: c_xeEKTA8aY9sjVAZpNDf7x3
          source_id: s_EM6zpW3PZwErLAcKSc6f7J
          stance: supports
          locator: CBDB:640824
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

# 王雲鶴

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王雲鶴 | accepted |
| bio.summary | 王雲鶴，清人物。籍贯黎平府直轄地方，入仕鄉貢舉人，曾任復設訓導。（中国历代人物传记资料库 CBDB 640824） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王雲鶴（CBDB 640824）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640824&o=json)
