---
schema: wang-person/v1
id: p_DksR1AG87NGjkReDWHZXsK
status: active
merged_into: null
display_name: 王樾
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_fEMGM7amyAWCJDfWGDbGby
        subject_person_id: p_DksR1AG87NGjkReDWHZXsK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王樾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zLo8JPdwC6feACvRBGhq2Q
          claim_id: c_fEMGM7amyAWCJDfWGDbGby
          source_id: s_JcPMVkzzvJ7mn2pz6E4E8w
          stance: supports
          locator: CBDB:638873
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638873）
          source: &a1
            id: s_JcPMVkzzvJ7mn2pz6E4E8w
            source_type: api_record
            title: 中国历代人物传记资料库：王樾（CBDB 638873）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638873&o=json
            external_identifier: CBDB:638873
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.797Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Gt9Et6jyh8vCNLLdZMfHVu
        subject_person_id: p_DksR1AG87NGjkReDWHZXsK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王樾，清人物。籍贯天津，入仕鄉貢舉人，曾任訓導。（中国历代人物传记资料库 CBDB 638873）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Ea8boGNR7sO-wANYqlPaV0
          claim_id: c_Gt9Et6jyh8vCNLLdZMfHVu
          source_id: s_JcPMVkzzvJ7mn2pz6E4E8w
          stance: supports
          locator: CBDB:638873
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

# 王樾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王樾 | accepted |
| bio.summary | 王樾，清人物。籍贯天津，入仕鄉貢舉人，曾任訓導。（中国历代人物传记资料库 CBDB 638873） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王樾（CBDB 638873）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638873&o=json)
