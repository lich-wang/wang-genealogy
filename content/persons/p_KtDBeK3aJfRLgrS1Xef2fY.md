---
schema: wang-person/v1
id: p_KtDBeK3aJfRLgrS1Xef2fY
status: active
merged_into: null
display_name: 王白
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FVb1Ct1FsiTgUeBKGNLcuX
        subject_person_id: p_KtDBeK3aJfRLgrS1Xef2fY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王白
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_bU545LAmb7Dj6EL8eSdauo
          claim_id: c_FVb1Ct1FsiTgUeBKGNLcuX
          source_id: s_NDP8cMq4WHJZMMLBi4oXg3
          stance: supports
          locator: CBDB:533370
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（533370）
          source: &a1
            id: s_NDP8cMq4WHJZMMLBi4oXg3
            source_type: api_record
            title: 中国历代人物传记资料库：王白（CBDB 533370）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=533370&o=json
            external_identifier: CBDB:533370
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.385Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_AwHA2S8rEUcxCRv8isJJmT
        subject_person_id: p_KtDBeK3aJfRLgrS1Xef2fY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王白，宋人物。籍贯樂清，入仕進士。（中国历代人物传记资料库 CBDB 533370）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_qlFRvcmei1fjqHq_hLO-Y_
          claim_id: c_AwHA2S8rEUcxCRv8isJJmT
          source_id: s_NDP8cMq4WHJZMMLBi4oXg3
          stance: supports
          locator: CBDB:533370
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

# 王白

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王白 | accepted |
| bio.summary | 王白，宋人物。籍贯樂清，入仕進士。（中国历代人物传记资料库 CBDB 533370） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王白（CBDB 533370）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=533370&o=json)
