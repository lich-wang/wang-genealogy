---
schema: wang-person/v1
id: p_VZhgnt8JmoQpfFaAvyBZaY
status: active
merged_into: null
display_name: 王士珍
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Q5j7V8ugDLf52EkRrwMvF8
        subject_person_id: p_VZhgnt8JmoQpfFaAvyBZaY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士珍
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_45aWJqRPuQpGhWv1Nm6RSg
          claim_id: c_Q5j7V8ugDLf52EkRrwMvF8
          source_id: s_bF2uqHgZAD39sFtHbBqkSi
          stance: supports
          locator: CBDB:636807
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636807）
          source: &a1
            id: s_bF2uqHgZAD39sFtHbBqkSi
            source_type: api_record
            title: 中国历代人物传记资料库：王士珍（CBDB 636807）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636807&o=json
            external_identifier: CBDB:636807
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.256Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MYJTogJsGBp1XiWmjoYony
        subject_person_id: p_VZhgnt8JmoQpfFaAvyBZaY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王士珍，清人物。籍贯永平府，入仕貢生: 副貢，曾任復設訓導。（中国历代人物传记资料库 CBDB 636807）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_mYrzXgDcqL5ivrO3w7CFiy
          claim_id: c_MYJTogJsGBp1XiWmjoYony
          source_id: s_bF2uqHgZAD39sFtHbBqkSi
          stance: supports
          locator: CBDB:636807
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

# 王士珍

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王士珍 | accepted |
| bio.summary | 王士珍，清人物。籍贯永平府，入仕貢生: 副貢，曾任復設訓導。（中国历代人物传记资料库 CBDB 636807） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王士珍（CBDB 636807）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636807&o=json)
